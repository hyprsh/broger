See [AGENTS.md](./AGENTS.md) for full instructions on running, editing, and
publishing this site. Key points:

- Single-page Astro + Tailwind site for broger.ch, hosted on GitHub Pages.
- Edit content in `src/data/site.js`; layout in `src/pages/index.astro`.
- Keep visitor-facing text in German (Swiss spelling: `ss`, not `ß`).
- Publish by committing to `main` and pushing — GitHub Actions deploys.
- Always `npm run build` before committing. Use the `img()` helper for asset
  paths; never hard-code `/broger/...`.
