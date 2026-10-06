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
