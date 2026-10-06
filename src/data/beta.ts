// Stato della beta pubblica. La fonte di verità è `beta.json`, che il
// workflow "Beta: apri/chiudi" (.github/workflows/beta-toggle.yml) riscrive
// e ripubblica. In locale si può forzare con PUBLIC_BETA_IOS / PUBLIC_BETA_ANDROID
// (open | closed) per provare gli stati senza toccare il file.
//
// Regola: una piattaforma chiusa, con l'altra aperta, diventa lista d'attesa
// ("Avvisami"). Entrambe chiuse: la pagina mostra "Tutto esaurito", nessun
// modulo, e la landing torna a "Prossimamente".
import state from './beta.json';

export type BetaPlatform = 'ios' | 'android';
export type BetaStatus = 'open' | 'closed';

export const BETA_PLATFORMS: readonly BetaPlatform[] = ['ios', 'android'];

function status(platform: BetaPlatform): BetaStatus {
  const override = import.meta.env[`PUBLIC_BETA_${platform.toUpperCase()}`];
  const raw = override === 'open' || override === 'closed' ? override : state[platform];
  return raw === 'open' ? 'open' : 'closed';
}

export const betaStatus: Record<BetaPlatform, BetaStatus> = {
  ios: status('ios'),
  android: status('android'),
};

/** true quando almeno una piattaforma accetta iscrizioni: pagina e CTA attive. */
export const betaOpen = BETA_PLATFORMS.some((p) => betaStatus[p] === 'open');

/**
 * Endpoint di iscrizione (rosanero-api, servizio auth: POST /beta/signup).
 * `mock` simula le risposte nel browser, per lavorare sulla pagina senza API.
 */
export const betaEndpoint: string =
  import.meta.env.PUBLIC_BETA_ENDPOINT || 'https://api.rosanero.app/beta/signup';

/**
 * Modelli di iPhone che eseguono iOS 26 o iOS 27 (minimo dell'app: iOS 26,
 * IPHONEOS_DEPLOYMENT_TARGET nel progetto iOS), dal più recente: le liste Apple
 * "iPhone models compatible with iOS 26 / iOS 27" (support.apple.com, guida iPhone
 * iphe3fa5df43), cioè iPhone 11 e SE (2ª gen.) in poi, più iPhone Duo, 18 Pro e
 * 18 Pro Max (9 settembre 2026, con iOS 27). Il valore inviato è il nome stesso;
 * le SE sono indicate con l'anno, uguale in tutte le lingue. Quando esce un
 * modello nuovo va aggiunto in cima; nel frattempo c'è "Altro modello".
 * Se il minimo iOS dell'app sale, togliere qui i modelli esclusi.
 */
export const IPHONE_MODELS: readonly string[] = [
  'iPhone Duo', 'iPhone 18 Pro Max', 'iPhone 18 Pro',
  'iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone Air', 'iPhone 17', 'iPhone 17e',
  'iPhone 16e', 'iPhone 16 Pro Max', 'iPhone 16 Pro', 'iPhone 16 Plus', 'iPhone 16',
  'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15',
  'iPhone 14 Pro Max', 'iPhone 14 Pro', 'iPhone 14 Plus', 'iPhone 14',
  'iPhone 13 Pro Max', 'iPhone 13 Pro', 'iPhone 13', 'iPhone 13 mini',
  'iPhone SE (2022)',
  'iPhone 12 Pro Max', 'iPhone 12 Pro', 'iPhone 12', 'iPhone 12 mini',
  'iPhone 11 Pro Max', 'iPhone 11 Pro', 'iPhone 11',
  'iPhone SE (2020)',
];
