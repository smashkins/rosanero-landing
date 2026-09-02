#!/usr/bin/env python3
"""Assembla le artboard A2 (desktop, mobile, legale, supporto) e le anteprime HTML.
Sorgente di verità: Main.dc.html (desktop A2) e i frammenti in fragments/.
Eseguire dalla cartella design/: python3 build.py
"""
import re, base64, os, json

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

MOTION_CSS = '''
    /* motion:start */
    .rv, .rv-s, .rv-l { transition: opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1); }
    .rv.pre { opacity: 0; transform: translateY(40px); }
    .rv-s.pre { opacity: 0; transform: translateY(30px) scale(.92); }
    .rv-l.pre { opacity: 0; transform: translateX(-40px); }
    .rbar i, .sbar .track i, .xp-fill { transform-origin: left center; transition: transform 1.2s cubic-bezier(.2,.7,.2,1) .25s; }
    .pre .rbar i, .pre .sbar .track i, .pre .xp-fill { transform: scaleX(0); }
    .hero-copy, .hero-img { will-change: opacity, transform; }
    @media (prefers-reduced-motion: no-preference) {
      @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      .ticker-track { animation: ticker 42s linear infinite; }
      @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
      .live-dot { animation: pulse 1.6s ease-in-out infinite; }
    }
    @media (prefers-reduced-motion: reduce) {
      .rv.pre, .rv-s.pre, .rv-l.pre { opacity: 1; transform: none; transition: none; }
      .pre .rbar i, .pre .sbar .track i, .pre .xp-fill { transform: none; }
    }
    /* motion:end */
'''

MOTION_JS = '''
(function () {
  var d = document;
  if (!('IntersectionObserver' in window) || (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) return;
  var els = Array.prototype.slice.call(d.querySelectorAll('.rv, .rv-s, .rv-l'));
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.remove('pre'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  els.forEach(function (el) {
    var p = el.parentElement;
    var i = p ? Array.prototype.indexOf.call(p.children, el) : 0;
    el.style.transitionDelay = (Math.min(i, 7) * 80) + 'ms';
    el.classList.add('pre');
  });
  void d.body.offsetHeight;
  els.forEach(function (el) { io.observe(el); });
  var hc = d.querySelector('.hero-copy'), hi = d.querySelector('.hero-img');
  if (!hc && !hi) return;
  var ticking = false;
  function upd() {
    ticking = false;
    var y = window.scrollY || d.documentElement.scrollTop || 0;
    var p = Math.max(0, Math.min(1, y / 720));
    if (hc) { hc.style.opacity = String(1 - p); hc.style.transform = 'translateY(' + (-70 * p) + 'px)'; }
    if (hi) { hi.style.opacity = String(1 - 0.9 * p); hi.style.transform = 'translateY(' + (140 * p) + 'px) scale(' + (1 - 0.08 * p) + ')'; }
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
})();
'''

DC_SCRIPT = "<script data-dc-script data-props='{}'>\nclass Component extends DCLogic {\n  componentDidMount() {" + MOTION_JS + "  }\n  renderVals() { return {}; }\n}\n</script>\n"

LEGAL_CSS = '''
    .lbl-side { font-family: "Saira Condensed", "Arial Narrow", sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: oklch(0.58 0.03 340); margin-bottom: 6px; }
    .side-link { font-size: 14.5px; color: oklch(0.72 0.035 340); padding: 6px 0 6px 12px; border-left: 2px solid transparent; }
    .side-link.on { color: #fdf2f8; border-left-color: oklch(0.74 0.27 348); }
    .side-link.sm { font-size: 13.5px; padding: 4px 0 4px 12px; }
    .legal { display: flex; flex-direction: column; gap: 12px; }
    .legal h1 { margin: 8px 0 0; font-family: Archivo, "Helvetica Neue", sans-serif; font-weight: 900; font-size: 54px; letter-spacing: -0.035em; line-height: 1.0; }
    .legal .meta { display: flex; flex-wrap: wrap; gap: 8px 24px; font-size: 14px; color: oklch(0.72 0.035 340); padding: 14px 0 12px; border-bottom: 1px solid oklch(0.66 0.23 350 / 0.28); }
    .legal .meta b { color: #fdf2f8; font-weight: 600; }
    .legal .placeholder { display: flex; gap: 12px; align-items: flex-start; border: 1px solid oklch(0.83 0.13 88 / 0.5); background: oklch(0.83 0.13 88 / 0.1); border-radius: 12px; padding: 14px 16px; font-size: 14.5px; color: oklch(0.9 0.08 88); margin: 8px 0 12px; line-height: 1.55; }
    .legal h2 { margin: 26px 0 2px; font-family: Archivo, "Helvetica Neue", sans-serif; font-weight: 800; font-size: 26px; letter-spacing: -0.02em; }
    .legal p, .legal li { font-size: 16.5px; line-height: 1.7; color: oklch(0.86 0.02 340); margin: 0; }
    .legal ul { margin: 0; padding-left: 22px; display: flex; flex-direction: column; gap: 6px; }
    .legal a { color: oklch(0.74 0.18 345); text-decoration: underline; text-underline-offset: 3px; }
    .legal .contact { flex-direction: row; align-items: center; gap: 18px; margin-top: 8px; }
    .legal .contact .chip { margin: 0; flex: none; }
    .legal .contact p { font-size: 15px; }
    .legal .note { font-size: 13.5px; color: oklch(0.58 0.03 340); margin-top: 22px; }
    .mail { font-family: "Saira Condensed", "Arial Narrow", sans-serif; font-weight: 700; font-size: 19px; letter-spacing: 0.02em; color: oklch(0.74 0.27 348); }
    .link { color: oklch(0.74 0.18 345); font-weight: 600; font-size: 14.5px; text-decoration: underline; text-underline-offset: 3px; }
    .list { margin: 0; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; font-size: 14.5px; color: oklch(0.72 0.035 340); line-height: 1.55; }
    .thread .jn { font-family: "Saira Condensed", "Arial Narrow", sans-serif; font-weight: 800; font-size: 15px; width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; color: #180410; background: linear-gradient(100deg, oklch(0.74 0.27 348), oklch(0.85 0.09 350)); flex: none; }
'''

MOBILE_CSS = '''
    .card.m { padding: 16px 14px; gap: 8px; }
    .card.m .chip { width: 38px; height: 38px; border-radius: 11px; }
    .card.m .chip svg { width: 18px; height: 18px; }
    .card.m h3 { font-size: 15px; }
    .card.m p { font-size: 12.5px; }
'''

DC_HEAD = '<!doctype html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <script src="./support.js"></script>\n</head>\n<body>\n<x-dc>\n'


def strip_motion(s):
    s = re.sub(r'\n    /\* motion:start \*/.*?/\* motion:end \*/\n', '\n', s, flags=re.S)
    s = re.sub(r'\n    /\* ---- motion: scroll-driven reveals.*?\n    }\n(?=  </style>)', '\n', s, flags=re.S)
    s = re.sub(r"<script data-dc-script.*?</script>\n", '', s, flags=re.S)
    return s


def with_motion(s):
    s = strip_motion(s)
    assert s.count('  </style>') == 1
    s = s.replace('  </style>', MOTION_CSS + '  </style>')
    s = s.replace('</x-dc>\n</body>', '</x-dc>\n' + DC_SCRIPT + '</body>')
    return s


# ---- Main (desktop A2) ----
main = open('Main.dc.html').read()
main = with_motion(main)
open('Main.dc.html', 'w').write(main)

helmet = re.search(r'<helmet>.*?</helmet>', main, re.S).group(0)
root_open = re.search(r'<div style="width: 1440px;[^>]*>', main).group(0)
glow = re.search(r'(?<=' + re.escape(root_open) + r'\n)(.*?)(?=  <!-- NAV -->)', main, re.S).group(1)
nav = re.search(r'  <!-- NAV -->.*?(?=  <!-- HERO -->)', main, re.S).group(0)
footer = re.search(r'  <!-- FOOTER -->.*?</footer>\n', main, re.S).group(0)


def helmet_plus(extra):
    return helmet.replace('  </style>', extra + '  </style>')


def page(extra_css, body, min_h):
    ro = re.sub(r'min-height: \d+px', 'min-height: %dpx' % min_h, root_open)
    return DC_HEAD + helmet_plus(extra_css) + '\n\n' + ro + '\n' + glow + nav + '\n' + body + '\n' + footer + '</div>\n</x-dc>\n' + DC_SCRIPT + '</body>\n</html>\n'


legal_body = open('fragments/legal-body.html').read()
support_body = open('fragments/support-body.html').read()
mobile_body = open('fragments/mobile-body.html').read()

open('Legal.dc.html', 'w').write(page(LEGAL_CSS, legal_body, 1900))
open('Support.dc.html', 'w').write(page(LEGAL_CSS, support_body, 2300))
open('Mobile.dc.html', 'w').write(DC_HEAD + helmet_plus(MOBILE_CSS) + '\n\n' + mobile_body + '</x-dc>\n' + DC_SCRIPT + '</body>\n</html>\n')


# ---- standalone previews ----
def datauri(fn):
    mime = {'webp': 'image/webp', 'jpg': 'image/jpeg', 'png': 'image/png'}[fn.rsplit('.', 1)[1]]
    return 'data:' + mime + ';base64,' + base64.b64encode(open(fn, 'rb').read()).decode()


def preview(src, out, title, viewport, links=None):
    s = open(src).read()
    hm = re.search(r'<helmet>(.*?)</helmet>', s, re.S).group(1)
    body = s.split('</helmet>', 1)[1]
    body = re.sub(r"<script data-dc-script.*?</script>\n", '', body, flags=re.S)
    body = body.replace('</x-dc>', '').replace('</body>', '').replace('</html>', '')
    for fn in ['hero-iphone.webp', 'card-iphone.webp', 'rosanero-logo.jpg']:
        body = body.replace('src="' + fn + '"', 'src="' + datauri(fn) + '"')
    for k, v in (links or {}).items():
        body = body.replace('href="' + k + '"', 'href="' + v + '"')
    html = ('<!doctype html>\n<html lang="it">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=%s">\n<title>%s</title>\n%s\n<style>\n  html, body { margin: 0; background: #0e0710; }\n  body { display: flex; justify-content: center; }\n</style>\n</head>\n<body>\n%s\n<script>%s</script>\n</body>\n</html>\n' % (viewport, title, hm, body, MOTION_JS))
    open(out, 'w').write(html)
    print(out, os.path.getsize(out) // 1024, 'KB')


PAGES = {'#termini': 'preview-A2-legal.html', '#privacy': 'preview-A2-legal.html', '#supporto': 'preview-A2-support.html', '#elimina-account': 'preview-A2-support.html#elimina-account'}
HOME = {k: 'preview-A2.html' + k for k in ['#funzioni', '#news', '#community', '#classifica']}
preview('Main.dc.html', 'preview-A2.html', 'Rosanero · anteprima A2', '1440', PAGES)
preview('Mobile.dc.html', 'preview-A2-mobile.html', 'Rosanero · anteprima A2 mobile', 'device-width, initial-scale=1', PAGES)
preview('Legal.dc.html', 'preview-A2-legal.html', 'Rosanero · anteprima privacy', '1440', dict(PAGES, **HOME))
preview('Support.dc.html', 'preview-A2-support.html', 'Rosanero · anteprima supporto', '1440', dict({k: v for k, v in PAGES.items() if not k.startswith('#supporto') and k != '#elimina-account'}, **HOME))
print('built:', [f for f in os.listdir('.') if f.endswith('.dc.html')])
