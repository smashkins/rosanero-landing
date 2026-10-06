// Dettagli decorativi del Beta Pass, derivati dall'email in modo stabile:
// stessa email, stesso posto e stesso codice a barre, sul server e nel browser.
// Non sono numeri reali (nessun conteggio iscritti): solo grafica.

/** FNV-1a a 32 bit. */
export function hash(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

const norm = (email: string) => email.trim().toLowerCase();

/** Posto a tre cifre (100–999), oppure un trattino se l'email è vuota. */
export function seatFor(email: string): string {
  const e = norm(email);
  return e ? String((hash(e) % 900) + 100) : '—';
}

/**
 * Codice a barre come `linear-gradient` orizzontale: barre e spazi di 1–3
 * unità, in percentuale così si adatta a qualsiasi larghezza. Il colore delle
 * barre viene da `--bar` sull'elemento.
 */
export function barcodeFor(seed: string, bars = 46): string {
  let h = hash(norm(seed) || 'rosanero') || 1;
  const next = () => {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    h >>>= 0;
    return h;
  };
  const parts: Array<[number, number]> = [];
  let total = 0;
  for (let i = 0; i < bars; i++) {
    const w = 1 + (next() % 3);
    const g = 1 + (next() % 3);
    parts.push([w, g]);
    total += w + g;
  }
  const pct = (v: number) => `${((v / total) * 100).toFixed(2)}%`;
  const stops: string[] = [];
  let x = 0;
  for (const [w, g] of parts) {
    stops.push(`var(--bar) ${pct(x)} ${pct(x + w)}`, `transparent ${pct(x + w)} ${pct(x + w + g)}`);
    x += w + g;
  }
  return `linear-gradient(90deg, ${stops.join(', ')})`;
}
