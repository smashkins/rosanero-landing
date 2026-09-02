# Rosanero — landing page

Sito statico di [rosanero.app](https://rosanero.app): landing dell'app Rosanero (fan app non ufficiale del Palermo F.C.) e pagine legali richieste dagli store. Astro 7, italiano + inglese, deploy su GitHub Pages.

## Comandi

```bash
npm install      # prima volta
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve dist/
npm run check    # type check
```

## Struttura

- `src/pages/` pagine italiane (default, senza prefisso) e `src/pages/en/` inglesi. Slug identici nelle due lingue.
- `src/i18n/ui.ts` tutti i testi della landing, per lingua.
- `src/data/legal/{it,en}/*.md` testi legali e di supporto. Con `placeholder: true` nel frontmatter la pagina mostra un banner e non viene indicizzata: incollare il testo definitivo e mettere `placeholder: false`.
- `design/` sorgenti del design (canvas, artboard, anteprime). `PLAN.md` piano e stato del progetto.

## Deploy

Push su `main` → GitHub Actions (`.github/workflows/deploy-site.yml`) builda e pubblica su GitHub Pages. `public/CNAME` deve contenere `rosanero.app`.
