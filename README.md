# Rosanero — landing page

Sito statico di [rosanero.app](https://rosanero.app): landing dell'app Rosanero (fan app non ufficiale del Palermo F.C.) e pagine legali richieste dagli store. Astro 7, italiano + inglese, deploy su GitHub Pages.

## Comandi

```bash
npm install      # prima volta
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve dist/
npm run check    # type check
PUBLIC_BETA_ENDPOINT=mock npm run dev   # pagina beta senza API ("rate", "fail", "offline" nell'email simulano gli errori)
PUBLIC_BETA_IOS=closed PUBLIC_BETA_ANDROID=closed npm run dev   # prova lo stato "Tutto esaurito"
```

## Struttura

- `src/pages/` pagine italiane (default, senza prefisso) e `src/pages/en/` inglesi. Slug identici nelle due lingue.
- `src/i18n/ui.ts` tutti i testi della landing, per lingua.
- `src/data/legal/{it,en}/*.md` testi legali e di supporto. Con `placeholder: true` nel frontmatter la pagina mostra un banner e non viene indicizzata: incollare il testo definitivo e mettere `placeholder: false`.
- `design/` sorgenti del design (canvas, artboard, anteprime). `PLAN.md` piano e stato del progetto.

## Beta pubblica (`/beta/`)

Pagina di iscrizione alla beta (TestFlight / Google Play). Lo stato per piattaforma è in `src/data/beta.json` (`open` | `closed`):

- una piattaforma chiusa con l'altra aperta diventa lista d'attesa ("Avvisami");
- entrambe chiuse: la pagina mostra "Tutto esaurito" e la landing torna a "Prossimamente" (niente CTA beta).

**Aprire o chiudere:** GitHub → Actions → **"Beta: apri/chiudi"** → Run workflow, scegli lo stato di iPhone e Android. Il workflow aggiorna `beta.json`, fa commit su `main` e ripubblica il sito (circa un minuto). Funziona anche dall'app GitHub sul telefono. In alternativa: modificare `beta.json` e fare push.

Il modulo invia a `https://api.rosanero.app/beta/signup` (rosanero-api, servizio auth; contratto in `services/auth/README.md`, sezione "Beta signup"), che inoltra la richiesta via Resend a `support@rosanero.app`. Per puntare a un altro endpoint: `PUBLIC_BETA_ENDPOINT` al build.

## Deploy

Push su `main` → GitHub Actions (`.github/workflows/deploy-site.yml`) builda e pubblica su GitHub Pages. `public/CNAME` deve contenere `rosanero.app`.
