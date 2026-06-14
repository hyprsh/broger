# broger.ch

Single-page static website for **Jakob (Köbi) Broger** — Skikjöringfahrer. Built
with [Astro](https://astro.build) + Tailwind CSS, hosted on **GitHub Pages**.
Replaces the previous WordPress site.

> 🤖 **Using an AI assistant (OpenAI Codex / Claude Code)?** Open
> [`AGENTS.md`](./AGENTS.md) — it explains how to set up the environment, make
> changes, and publish, written for non-technical owners.

## Quick start

```bash
npm install     # one-time setup (needs Node.js 22+)
npm run dev     # preview locally at http://localhost:4321
```

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server with live reload |
| `npm run build` | Build static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Editing content

Almost all text and data lives in **`src/data/site.js`** — profile, career
timeline, statistics, sponsors, news. No HTML needed for routine updates.

- Page layout / sections: `src/pages/index.astro`
- Navigation: `src/components/Nav.astro`
- Colors & fonts: `src/styles/global.css`
- Photos: `public/images/photos/` · Logos: `public/images/logos/`

## Publishing

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.

```bash
npm run build && git add -A && git commit -m "your change" && git push
```

- Live (project page): `https://hyprsh.github.io/broger/`
- Final (after DNS): `https://broger.ch` — see the custom-domain steps in `AGENTS.md`.
