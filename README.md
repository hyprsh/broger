# broger.ch

Static website for Jakob (Köbi) Broger — Skikjöringfahrer. Built with [Astro](https://astro.build) + Tailwind CSS. Replaces the previous WordPress site.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `localhost:4321` |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Editing content

Almost all text and data lives in **`src/data/site.js`** — profile, career timeline,
statistics table, sponsors, and news. Edit there to update the site; no HTML needed.

- Photos: `public/images/photos/`
- Sponsor logos: `public/images/logos/`
- Page layout/design: `src/pages/*.astro`, `src/components/`, `src/layouts/Base.astro`
- Colors & fonts: `src/styles/global.css`

## Pages

`/` · `/personalien` · `/resultate` · `/statistik` · `/impressionen` · `/news` · `/sponsoring`

## Deployment (Netlify)

Push this repo to GitHub, then "Add new site → Import" on Netlify. The included
`netlify.toml` configures the build automatically. Point the `broger.ch` DNS at
Netlify to go live. Every push deploys a fresh preview URL for review.

## To do

- Replace placeholder/duplicate gallery photos with final selects.
- Fill in the full year-by-year results table (1996–2022) if a detailed breakdown
  is wanted beyond the per-horse statistics.
- Optional: contact section / form (Netlify Forms supports this for free).
