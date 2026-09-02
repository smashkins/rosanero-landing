# Rosanero — landing page: piano e stato

Documento di ripresa. Contiene tutto quello che serve per continuare il lavoro in una sessione nuova, senza il contesto della conversazione precedente. Aggiornare la checklist in fondo man mano.

Ultimo aggiornamento: 2026-09-02.

## 1. Cosa stiamo costruendo

Sito statico per **Rosanero**, fan app **non ufficiale** del Palermo F.C. (iOS + Android), in sviluppo, non ancora negli store. Pagine:

| Pagina | IT (default, senza prefisso) | EN |
|---|---|---|
| Landing | `/` | `/en/` |
| Termini e condizioni | `/terms/` | `/en/terms/` |
| Privacy | `/privacy/` | `/en/privacy/` |
| Supporto e contatti | `/support/` | `/en/support/` |
| Eliminazione account | `/delete-account/` | `/en/delete-account/` |

Slug identici nelle due lingue (inglesi): così lo switch lingua è un prefisso e il sitemap accoppia le pagine.

Hosting: **GitHub Pages** su apex **`rosanero.app`** (API già su `api.rosanero.app`, NAS Synology). Repo pubblico `smashkins/rosanero-landing`. Motivo: sito statico, URL legali che devono rispondere sempre per la review degli store, zero manutenzione, stesso flusso di monoidx.dev.

## 2. Decisioni prese (non richiedere di nuovo)

- CTA: "Prossimamente su App Store / Google Play", nessuna raccolta email, nessun analytics, nessun cookie banner.
- Lingue: italiano default + inglese sotto `/en/`. Testi marketing EN li traduce Claude. **Testi legali (Termini, Privacy) IT e EN li fornisce l'utente**: finché non arrivano, le pagine restano con `placeholder: true` (banner + noindex).
- Email contatti: `support@rosanero.app` (l'utente crea l'alias su Resend).
- Pagina eliminazione account: informativa (passaggi in-app + email per richieste manuali). Richiesta da Google Play anche se l'eliminazione in-app esiste.
- Stack: **Astro 7**, stesse versioni e pattern di `/Users/vincenzostira/Developer/web/astro/` (monoidx.dev): `astro ^7.0.0`, `@astrojs/mdx ^7.0.0`, `@astrojs/sitemap ^3.7.3`, `@astrojs/check ^0.9.9`, `typescript ^5.9.3`, Node 22, `npm ci` in CI (lockfile committato).
- Direzione visiva scelta: **A2 · Notte rosanero · più rosa**. Disclaimer ovunque: "Progetto indipendente dei tifosi. Rosanero non è affiliata al Palermo F.C. e non usa loghi o contenuti ufficiali."
- Effetti di movimento: **JavaScript** (IntersectionObserver), non CSS scroll-driven: il browser dell'utente non li supporta.
- Icone: SVG inline, mai emoji.

## 3. Cosa esiste già (cartella `design/`)

Canvas Claude Design (artboard modificabili): https://claude.ai/code/artifact/448c8fbd-ad7a-42f2-bdad-ce254a9749cd
Pagina "Landing": desktop, mobile, legale, supporto. Pagina "Direzioni": A, B, C, D scartate.

File sorgente del design, **fonte di verità per markup e copy**:

| File | Contenuto |
|---|---|
| `design/Main.dc.html` | Landing desktop A2 completa (1440 px). Tutto il copy italiano definitivo. |
| `design/Mobile.dc.html` | Landing mobile (390 px), generato da `design/fragments/mobile-body.html`. |
| `design/Legal.dc.html` | Template pagina legale (Privacy), da `fragments/legal-body.html`. |
| `design/Support.dc.html` | Supporto + eliminazione account + FAQ, da `fragments/support-body.html`. |
| `design/fragments/classifica-*.html` | Sezione Classifica · Calendario · Rosa (già inclusa in Main e Mobile). |
| `design/build.py` | Assembla artboard e anteprime; contiene `MOTION_CSS` e `MOTION_JS` (da riusare nel sito). |
| `design/preview-A2*.html` | Anteprime autonome (immagini incorporate) per il browser. |
| `design/hero-iphone.webp` | Foto iPhone in mano col logo (hero). 1000×1000, 58 KB. |
| `design/card-iphone.webp` | iPhone con card collezionabile, sfondo rimosso. 491×1000, 81 KB. |
| `design/rosanero-logo.jpg` | Logo attuale 160 px (segnaposto: l'utente fornirà l'icona definitiva; candidati in `/Users/vincenzostira/Developer/iOS/RosaneroAppAssets/logo_app.png` e `logo_transparent.png`). |
| `design/canvas.json`, `design/rosanero.html` | Manifest e file pubblicato del canvas (non toccare a mano). |

Per rigenerare le artboard dopo modifiche ai frammenti: `cd design && python3 build.py`.

### Ordine delle sezioni della landing (desktop; la mobile è la stessa in colonna)

1. Nav fissa (sticky, sfondo sfocato) + riga a strisce rosa/nero. Link: Funzioni `#funzioni`, News `#news`, Community `#community`, Classifica `#classifica`, Supporto `/support/`. Switch IT/EN. Pill "Prossimamente".
2. Hero: eyebrow "Fan app non ufficiale · iOS e Android", H1 "Il Palermo, tutto in una app. Fatta dai tifosi.", sottotitolo, due pill store, chip disclaimer, foto `hero-iphone.webp` con maschera radiale e glow.
3. Ticker live (loop CSS) con 5 titoli illustrativi.
4. Funzioni (`#funzioni`): 8 tessere (Live News Feed, Community, Classifica, Calendario e risultati, Rosa e schede giocatori, Statistiche, Calciomercato, Gamification "in sviluppo").
5. Live News Feed (`#news`): "La stessa notizia, moltiplicata per dieci" prima/dopo.
6. Classifica · Calendario · Rosa (`#classifica`): tabella classifica, prossima partita + risultati, scheda giocatore; riga 2: Statistiche (barre), Calciomercato (Ufficiale / Trattativa / Voce).
7. Community (`#community`): intro + piattaforme; gruppi verificati (3 card); pronostici + classifica gruppi; pagelle + matchday per eventi; sentiment + collezionabili (`card-iphone.webp`); profilo + vantaggi admin; percorso del tifoso (7 passi).
8. Chiusura "Meno rumore. Più Palermo." + pill store.
9. Footer: disclaimer, © 2026, Termini · Privacy · Supporto · Elimina account.

### Token di design A2 (da mettere in `src/styles/global.css`)

```css
:root {
  --bg: #0e0710; --bg-2: #170a15;
  --ink: #fdf2f8;
  --muted: oklch(0.72 0.035 340); --muted-2: oklch(0.58 0.03 340);
  --pink: oklch(0.66 0.23 350); --pink-neon: oklch(0.74 0.27 348);
  --pink-soft: oklch(0.74 0.18 345); --pink-light: oklch(0.85 0.09 350);
  --cyan: oklch(0.82 0.12 200);   /* solo spunta "verificato" */
  --green: oklch(0.78 0.16 150); --red: #ff3b5c;
  --line: oklch(0.66 0.23 350 / 0.28); --line-2: rgba(255,255,255,0.05);
  --card: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  --grad: linear-gradient(100deg, var(--pink-neon), var(--pink-light));
  --radius: 18px; --maxw: 1312px;
  --font-display: "Archivo", system-ui, sans-serif;      /* 600-900 */
  --font-cond: "Saira Condensed", system-ui, sans-serif; /* 600-800, etichette uppercase */
  --font-body: "Manrope", system-ui, sans-serif;         /* 400-700 */
}
```
Google Fonts: `https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Saira+Condensed:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap`.
Sfondo pagina: glow radiali rosa in alto a sinistra e in basso a destra + griglia sottile 64 px (vedi inizio di `Main.dc.html`). Bande alternate: `linear-gradient(180deg, oklch(0.24 0.1 350 / 0.55), var(--bg))`.

### Movimento (copiare da `design/build.py`)

- CSS `MOTION_CSS`: `.rv/.rv-s/.rv-l` con transizione 0,8 s; stato nascosto solo con classe `.pre`; barre `.rbar i, .sbar .track i, .xp-fill` scalano da 0; ticker `@keyframes ticker` 42 s; `.live-dot` pulsa; tutto sotto `prefers-reduced-motion`.
- JS `MOTION_JS`: aggiunge `.pre` a tutti i `.rv*`, IntersectionObserver (threshold 0.12, rootMargin `0 0 -6%`) toglie `.pre` con ritardo sfalsato per indice tra fratelli (80 ms, max 7); scroll listener con rAF per `.hero-copy` (sale e sfuma) e `.hero-img` (scende e sfuma) su 720 px.
- Non usare `overflow: hidden` sui contenitori; usare `overflow: clip`.

## 4. Struttura del sito Astro (in `landing-page/`)

```
.github/workflows/deploy-site.yml
astro.config.mjs · package.json · package-lock.json · tsconfig.json · .gitignore · README.md · PLAN.md
public/CNAME (rosanero.app) · .nojekyll · robots.txt · og.png (1200×630)
public/favicon.svg · favicon.ico · apple-touch-icon.png · icon-192.png · icon-512.png
public/img/hero-iphone.webp · card-iphone.webp · logo.jpg
src/styles/global.css              # token, reset, classi condivise (card, eyebrow, btn, tag, tbl, ...), motion CSS
src/i18n/ui.ts                     # dizionari it/en (nav, hero, sezioni, footer, legal meta)
src/i18n/index.ts                  # getLocale, t, localizedHref, switchLocalePath (da monoidx, default 'it')
src/layouts/Base.astro             # html lang, SEO, fonts, Nav, Footer, script motion
src/layouts/Legal.astro            # pagina legale: aside con menu + indice, article, banner placeholder, noindex
src/components/SEO.astro · Nav.astro · Footer.astro · LangSwitch.astro · Ticker.astro · StoreBadges.astro · Icon.astro
src/components/sections/Hero.astro · Features.astro · News.astro · Standings.astro · Community.astro · Closing.astro
src/data/legal/it/{terms,privacy,support,delete-account}.md
src/data/legal/en/{terms,privacy,support,delete-account}.md
src/pages/{index,terms,privacy,support,delete-account,404}.astro
src/pages/en/{index,terms,privacy,support,delete-account}.astro
design/                            # sorgenti del design (vedi §3)
```

### Config

`astro.config.mjs` (mirror di monoidx, senza reading-time e shiki):
```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://rosanero.app',          // apex: nessun `base`
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({ i18n: { defaultLocale: 'it', locales: { it: 'it', en: 'en' } } })],
  i18n: { defaultLocale: 'it', locales: ['it', 'en'], routing: { prefixDefaultLocale: false } },
});
```
`tsconfig.json`: come monoidx (`astro/tsconfigs/strict`, alias `~/*` → `src/*`).

### i18n

- `src/i18n/index.ts`: copia di `/Users/vincenzostira/Developer/web/astro/src/i18n/index.ts` con default invertito: `getLocale` torna `'en'` solo se `currentLocale === 'en'`; `localizedHref` prefissa `/en`; `switchLocalePath` toglie `^\/en(\/|$)`.
- `src/i18n/ui.ts`: `export const ui = { it: {...}, en: {...} }` con oggetti annidati per sezione; le pagine passano `t(locale)` ai componenti. Le liste (8 funzioni, 6 duplicati, 7 passi, 8 badge, 8 vantaggi, ticker) sono array nel dizionario.
- Pagine duplicate fisicamente in `src/pages/en/` con `const LOCALE = 'en'` (pattern monoidx). Lo switcher: `switchLocalePath(Astro.url.pathname, target)`.
- `Base.astro` emette `hreflang` it / en / `x-default` (→ IT) e canonical.

### Pagine legali

Markdown importato direttamente (pattern `src/pages/index.astro:12` di monoidx): `import { Content, frontmatter } from '~/data/legal/it/privacy.md'`, reso da `Legal.astro`. Frontmatter: `title`, `description`, `updated: 2026-09-02`, `placeholder: true`, `toc: [{id, label}]`. Con `placeholder: true`: banner ambra "[SEGNAPOSTO]" e `<meta name="robots" content="noindex">`. Quando l'utente manda i testi: incollare il corpo e mettere `placeholder: false`. Supporto e eliminazione account hanno già il copy (da `design/fragments/support-body.html`); solo i dettagli tra parentesi quadre restano da confermare.

### Head / SEO

`SEO.astro` (pattern `BaseLayout.astro:24-70` di monoidx): title, description, canonical, hreflang, OpenGraph (`og:locale` it_IT / en_GB, `og:image` assoluto `/og.png`), Twitter card, `theme-color #0e0710`, favicon set, preconnect + Google Fonts. `robots.txt`: `User-agent: *`, `Allow: /`, `Sitemap: https://rosanero.app/sitemap-index.xml`.

### Asset

- Copiare `design/hero-iphone.webp`, `design/card-iphone.webp`, `design/rosanero-logo.jpg` in `public/img/`.
- Favicon e icone con `sips` dal logo (segnaposto finché non arriva l'icona definitiva): 32, 180, 192, 512 px.
- `og.png` 1200×630: screenshot della hero (Chrome DevTools MCP su `npm run preview`, pagina dedicata o crop) oppure composizione con PIL.

## 5. Deploy

1. `git init` in `landing-page/`, `.gitignore` = `node_modules/ dist/ .astro/ .DS_Store`. Commit. Repo pubblico: `gh repo create smashkins/rosanero-landing --public --source=. --push` (gh è già autenticato come `smashkins`).
2. `.github/workflows/deploy-site.yml` = copia di `/Users/vincenzostira/Developer/web/astro/.github/workflows/deploy-site.yml` senza il blocco `workflow_call`:
   push su `main` + `workflow_dispatch`; permessi `contents: read`, `pages: write`, `id-token: write`; concurrency `pages`; job build (`actions/checkout@v6`, `actions/setup-node@v6` node 22 cache npm, `npm ci`, `npm run build`, `actions/upload-pages-artifact@v5` path `dist`); job deploy (`actions/deploy-pages@v5`, environment `github-pages`).
3. Settings → Pages: Source **GitHub Actions**; Custom domain `rosanero.app`; **Enforce HTTPS** dopo l'emissione del certificato. `public/CNAME` deve contenere `rosanero.app` (altrimenti il dominio si sgancia al deploy successivo).
4. DNS al registrar di `rosanero.app` (a cura dell'utente):
   - `@` A → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `@` AAAA (opzionale) → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` CNAME → `smashkins.github.io`
   - `api.rosanero.app`, `api-staging.rosanero.app`, `auth.rosanero.app` non si toccano.
5. Consigliato: Settings → Pages → Verified domains (record TXT `_github-pages-challenge-smashkins`) per evitare takeover.

## 6. Verifica

1. `npm run check && npm run build`: in `dist/` ci sono `index.html`, `en/index.html`, le 8 pagine legali, `404.html`, `CNAME`, `.nojekyll`, `robots.txt`, `sitemap-index.xml`, `sitemap-0.xml`.
2. `npm run preview` (porta 4321): curl delle 10 rotte → 200; ogni pagina ha canonical, tre hreflang, `<html lang>` corretto; lo switch lingua porta alla controparte esatta.
3. `grep -o '<loc>[^<]*' dist/sitemap-0.xml` → 10 URL con `xhtml:link`.
4. Chrome DevTools MCP: screenshot a 1440 e 390 px; ancore della nav; reveal allo scroll; Lighthouse desktop e mobile.
5. Dopo il deploy: `dig rosanero.app A +short` (4 IP); `curl -sI https://rosanero.app/` 200; `www` redirige all'apex; `https://rosanero.app/privacy/` e `/delete-account/` rispondono (URL da inserire negli store).

## 7. Cose che servono dall'utente

- Icona app definitiva (o conferma di usare `logo_app.png`/`logo_transparent.png` da `RosaneroAppAssets`).
- Testi di Termini e Privacy, IT e EN.
- Percorso esatto in-app per eliminare l'account; tempi di risposta e di cancellazione (ora `[n] giorni`).
- Accesso DNS per i record di §5.
- Alias `support@rosanero.app`.
- Per la card collezionabile con giocatore reale, stemma e sponsor: diritti d'uso oppure una versione "neutra" prima della pubblicazione.

## 8. Checklist di avanzamento

- [x] Intervista, piano, hosting deciso
- [x] Canvas con direzioni A–D, scelta A2
- [x] A2: desktop, mobile, legale, supporto, movimento JS, ancore, sezione classifica
- [x] Scaffold Astro (config, package, tsconfig, gitignore, workflow, public)
- [x] `global.css` con token e classi condivise + motion CSS
- [x] i18n (`ui.ts`, `index.ts`) con copy IT e traduzione EN
- [x] Layout `Base.astro`, `SEO.astro`, `Nav.astro`, `Footer.astro`, `LangSwitch.astro`
- [x] Sezioni landing: Hero, Ticker, Features, News, Standings, Community, Closing
- [x] `Legal.astro` + 8 markdown (4 IT, 4 EN) con placeholder
- [x] Pagine IT ed EN (index, terms, privacy, support, delete-account, 404)
- [x] Asset: immagini in `public/img`, favicon (segnaposto dal logo jpg); `og.png` da rigenerare quando arriva l'icona definitiva
- [x] `npm install`, `npm run build`, `npm run check` (0 errori), sitemap 10 URL con hreflang, verifica visiva desktop
- [ ] Repo GitHub, workflow, primo deploy, Pages settings
- [ ] Istruzioni DNS consegnate all'utente, verifica post-deploy (§6 punto 5)
