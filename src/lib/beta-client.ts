// Comportamento della pagina beta: Beta Pass (inclinazione, riflesso, timbro)
// e modulo di iscrizione (validazione, invio a rosanero-api, esiti).
// Contratto dell'endpoint: rosanero-api, services/auth/README.md, "Beta signup".
import { barcodeFor, seatFor } from './pass';

type Platform = 'ios' | 'android';
type Intent = 'join' | 'notify';
type PerPlatform = Record<Platform, string>;

interface Strings {
  platforms: Record<Platform, { name: string; via: string }>;
  hintJoin: PerPlatform;
  hintNotify: PerPlatform;
  submitJoin: string;
  submitNotify: string;
  sending: string;
  errors: { email: string; consent: string; rate: string; network: string; server: string };
  success: { joinTitle: string; joinText: PerPlatform; notifyTitle: string; notifyText: PerPlatform };
  stampJoin: string;
  stampNotify: string;
}

type Outcome = 'ok' | 'email' | 'rate' | 'network' | 'server';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const $ = <T extends Element>(root: ParentNode, sel: string) => root.querySelector<T>(sel);

export function initBeta(): void {
  const pass = initPass();
  const root = document.querySelector<HTMLElement>('[data-beta]');
  if (root) initForm(root, pass);
  // "Prendi il tuo pass": torna al modulo e mette il cursore nel campo email.
  document.querySelector('[data-to-form]')?.addEventListener('click', () => {
    setTimeout(() => document.querySelector<HTMLInputElement>('#beta-email')?.focus({ preventScroll: true }), 500);
  });
}

/* ---------------------------------------------------------------- pass */

interface PassApi {
  setGate(text: string): void;
  setHolder(email: string): void;
  stamp(text: string): Promise<void>;
  reset(): void;
}

function initPass(): PassApi | null {
  const stage = document.querySelector<HTMLElement>('[data-pass-stage]');
  const pass = stage && $<HTMLElement>(stage, '[data-pass]');
  if (!stage || !pass) return null;
  const gate = $<HTMLElement>(pass, '[data-pass-gate]');
  const seat = $<HTMLElement>(pass, '[data-pass-seat]');
  const holder = $<HTMLElement>(pass, '[data-pass-holder]');
  const barcode = $<HTMLElement>(pass, '[data-pass-barcode]');
  const stampText = $<HTMLElement>(pass, '[data-pass-stamp-text]');
  const burst = $<HTMLElement>(stage, '[data-pass-burst]');

  // Inclinazione 3D e riflesso seguono il puntatore (solo mouse/penna, non al
  // tocco). Fermo: oscillazione lenta via CSS (classe .idle).
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (fine.matches && !reduceMotion()) {
    const area = stage.closest('section') ?? stage;
    let frame = 0;
    let last: PointerEvent | null = null;
    const apply = () => {
      frame = 0;
      if (!last) return;
      const r = pass.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, (last.clientX - (r.left + r.width / 2)) / (r.width * 0.9)));
      const y = Math.max(-1, Math.min(1, (last.clientY - (r.top + r.height / 2)) / (r.height * 0.9)));
      pass.style.setProperty('--ry', `${(x * 11).toFixed(2)}deg`);
      pass.style.setProperty('--rx', `${(-y * 9).toFixed(2)}deg`);
      pass.style.setProperty('--mx', `${(50 + x * 45).toFixed(1)}%`);
      pass.style.setProperty('--my', `${(50 + y * 45).toFixed(1)}%`);
    };
    area.addEventListener('pointermove', (e) => {
      if ((e as PointerEvent).pointerType === 'touch') return;
      last = e as PointerEvent;
      pass.classList.remove('idle');
      pass.classList.add('tracking');
      if (!frame) frame = requestAnimationFrame(apply);
    });
    area.addEventListener('pointerleave', () => {
      last = null;
      pass.classList.remove('tracking');
      for (const v of ['--rx', '--ry', '--mx', '--my']) pass.style.removeProperty(v);
      pass.classList.add('idle');
    });
  }

  const setHolder = (email: string) => {
    const value = email.trim();
    if (holder) {
      holder.textContent = value || holder.dataset.empty || '';
      holder.classList.toggle('empty', !value);
    }
    if (seat) seat.textContent = seatFor(value);
    if (barcode) barcode.style.backgroundImage = barcodeFor(value);
  };

  return {
    setGate(text) {
      if (gate) gate.textContent = text;
    },
    setHolder,
    async stamp(text) {
      if (stampText) stampText.textContent = text;
      // Sul telefono il pass sta sotto il modulo: portalo in vista prima del timbro.
      const r = pass.getBoundingClientRect();
      if (r.top < 0 || r.bottom > window.innerHeight) {
        pass.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
        if (!reduceMotion()) await sleep(550);
      }
      pass.dataset.state = 'stamped';
      if (reduceMotion()) return;
      stage.classList.remove('thump');
      void stage.offsetWidth;
      stage.classList.add('thump');
      if (burst) confetti(burst);
    },
    reset() {
      pass.dataset.state = 'idle';
      stage.classList.remove('thump');
    },
  };
}

/** Coriandoli rosa e neri che partono dal timbro. */
function confetti(host: HTMLElement): void {
  const colors = ['var(--pink-neon)', 'var(--pink-light)', '#fdf2f8', '#1a0a14'];
  for (let i = 0; i < 26; i++) {
    const bit = document.createElement('i');
    const angle = (Math.PI * 2 * i) / 26 + Math.random() * 0.5;
    const dist = 110 + Math.random() * 150;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist * 0.75 - 40;
    bit.style.background = colors[i % colors.length]!;
    bit.style.width = `${6 + Math.random() * 6}px`;
    bit.style.height = `${3 + Math.random() * 4}px`;
    host.appendChild(bit);
    bit
      .animate(
        [
          { transform: 'translate(-50%, -50%) rotate(0deg)', opacity: 1 },
          { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${Math.random() * 720 - 360}deg)`, opacity: 1, offset: 0.7 },
          { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy + 90}px)) rotate(${Math.random() * 720}deg)`, opacity: 0 },
        ],
        { duration: 1100 + Math.random() * 500, easing: 'cubic-bezier(0.15, 0.7, 0.3, 1)', delay: 120 },
      )
      .finished.then(() => bit.remove(), () => bit.remove());
  }
}

/* ---------------------------------------------------------------- form */

function initForm(root: HTMLElement, pass: PassApi | null): void {
  const strings = JSON.parse($<HTMLScriptElement>(root, '[data-beta-strings]')?.textContent || '{}') as Strings;
  const form = $<HTMLFormElement>(root, '[data-beta-form]');
  const done = $<HTMLElement>(root, '[data-done]');
  if (!form || !done) return;

  const endpoint = root.dataset.endpoint || '';
  const locale = root.dataset.locale === 'en' ? 'en' : 'it';
  const email = form.elements.namedItem('email') as HTMLInputElement;
  const consent = form.elements.namedItem('consent') as HTMLInputElement;
  const honeypot = form.elements.namedItem('website') as HTMLInputElement;
  const field = $<HTMLElement>(form, '[data-field]')!;
  const hint = $<HTMLElement>(form, '[data-hint]')!;
  const emailError = $<HTMLElement>(form, '[data-email-error]')!;
  const consentError = $<HTMLElement>(form, '[data-consent-error]')!;
  const formError = $<HTMLElement>(form, '[data-form-error]')!;
  const submit = $<HTMLButtonElement>(form, '[data-submit]')!;
  const submitLabel = $<HTMLElement>(form, '[data-submit-label]')!;

  const selected = (): { platform: Platform; intent: Intent } => {
    const input = form.querySelector<HTMLInputElement>('input[name="platform"]:checked');
    const platform: Platform = input?.value === 'android' ? 'android' : 'ios';
    return { platform, intent: input?.dataset.intent === 'notify' ? 'notify' : 'join' };
  };

  const syncPlatform = () => {
    const { platform, intent } = selected();
    hint.textContent = (intent === 'join' ? strings.hintJoin : strings.hintNotify)[platform];
    submitLabel.textContent = intent === 'join' ? strings.submitJoin : strings.submitNotify;
    const p = strings.platforms[platform];
    pass?.setGate(`${p.name} · ${p.via}`);
  };

  const showError = (el: HTMLElement, text: string | null) => {
    el.textContent = text ?? '';
    el.hidden = !text;
  };
  const clearErrors = () => {
    showError(emailError, null);
    showError(consentError, null);
    showError(formError, null);
    field.classList.remove('invalid');
    email.removeAttribute('aria-invalid');
    consent.removeAttribute('aria-invalid');
  };
  const busy = (on: boolean) => {
    submit.disabled = on;
    submit.classList.toggle('loading', on);
    form.setAttribute('aria-busy', String(on));
    if (on) submitLabel.textContent = strings.sending;
    else syncPlatform();
  };

  form.addEventListener('change', (e) => {
    if ((e.target as HTMLInputElement).name === 'platform') syncPlatform();
    if (e.target === consent && consent.checked) showError(consentError, null);
  });
  email.addEventListener('input', () => {
    pass?.setHolder(email.value);
    if (!emailError.hidden && EMAIL_RE.test(email.value.trim())) {
      showError(emailError, null);
      field.classList.remove('invalid');
      email.removeAttribute('aria-invalid');
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submit.disabled) return;
    clearErrors();
    const value = email.value.trim().toLowerCase();
    let ok = true;
    if (!EMAIL_RE.test(value) || value.length > 254) {
      showError(emailError, strings.errors.email);
      field.classList.add('invalid');
      email.setAttribute('aria-invalid', 'true');
      ok = false;
    }
    if (!consent.checked) {
      showError(consentError, strings.errors.consent);
      consent.setAttribute('aria-invalid', 'true');
      ok = false;
    }
    if (!ok) {
      (field.classList.contains('invalid') ? email : consent).focus();
      return;
    }

    const { platform, intent } = selected();
    busy(true);
    const outcome = await send(endpoint, {
      email: value,
      platform,
      intent,
      locale,
      consent: true,
      website: honeypot.value,
    });
    busy(false);

    if (outcome === 'ok') {
      const join = intent === 'join';
      $<HTMLElement>(done, '[data-done-title]')!.textContent = join ? strings.success.joinTitle : strings.success.notifyTitle;
      $<HTMLElement>(done, '[data-done-text]')!.textContent = (join ? strings.success.joinText : strings.success.notifyText)[platform];
      $<HTMLElement>(done, '[data-done-mail]')!.textContent = value;
      form.hidden = true;
      done.hidden = false;
      root.classList.add('is-done');
      $<HTMLElement>(done, '[data-done-title]')!.focus({ preventScroll: true });
      void pass?.stamp(join ? strings.stampJoin : strings.stampNotify);
      return;
    }
    if (outcome === 'email') {
      showError(emailError, strings.errors.email);
      field.classList.add('invalid');
      email.setAttribute('aria-invalid', 'true');
      email.focus();
      return;
    }
    showError(formError, strings.errors[outcome]);
  });

  $<HTMLButtonElement>(done, '[data-again]')?.addEventListener('click', () => {
    form.reset();
    // form.reset() riporta la piattaforma a quella iniziale: riallinea testi e pass.
    syncPlatform();
    pass?.setHolder('');
    pass?.reset();
    clearErrors();
    done.hidden = true;
    form.hidden = false;
    root.classList.remove('is-done');
    email.focus();
  });

  syncPlatform();
}

interface Payload {
  email: string;
  platform: Platform;
  intent: Intent;
  locale: 'it' | 'en';
  consent: true;
  website: string;
}

async function send(endpoint: string, body: Payload): Promise<Outcome> {
  if (endpoint === 'mock') {
    // Solo sviluppo (PUBLIC_BETA_ENDPOINT=mock): "rate" o "fail" nell'email
    // simulano 429 e 500, "offline" un errore di rete.
    await sleep(1100);
    if (body.email.includes('rate')) return 'rate';
    if (body.email.includes('fail')) return 'server';
    if (body.email.includes('offline')) return 'network';
    return 'ok';
  }
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    if (res.ok) return 'ok';
    if (res.status === 429) return 'rate';
    if (res.status === 400) {
      const data = (await res.json().catch(() => null)) as { code?: string } | null;
      if (data?.code === 'INVALID_EMAIL') return 'email';
    }
    return 'server';
  } catch {
    return 'network';
  } finally {
    clearTimeout(timer);
  }
}
