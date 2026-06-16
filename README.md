# broger.ch

Single-page static website for **Jakob (Köbi) Broger** — Skikjöringfahrer. Built
with [Astro](https://astro.build) + Tailwind CSS, hosted on **GitHub Pages**.
Replaces the previous WordPress site.

> **Using an AI assistant (OpenAI Codex / Claude Code)?** Open
> [`AGENTS.md`](./AGENTS.md) — it explains how the assistant should set up the
> environment, make changes, and publish.

## Owner guide: use this site with Codex

You do not need to know how Astro, Tailwind, Git, or GitHub Pages work. Codex can
make and publish routine website updates for you when you open this project
folder and describe the change in normal language.

### First-time setup

1. Install the Codex app for macOS or Windows from OpenAI.
2. Open Codex and sign in with your ChatGPT account. If you use an OpenAI API key
   instead, some cloud/workspace features may not be available.
3. In Codex, choose **Open project** or **Select a project folder**.
4. Select this folder: `broger-site`.
5. Make sure Codex is working locally on your computer, then send a first
   message such as:

   ```text
   Read the instructions, then tell me what this website is and how you would update it.
   ```

Codex reads `AGENTS.md` automatically when it starts in this folder. That file
tells Codex where the website content lives, how to preview changes, and how to
publish the site.

### Asking for updates

Write requests in plain language. Useful examples:

- `Update the biography with this new text: ...`
- `Add this sponsor and logo.`
- `Replace the hero photo with this image.`
- `Add a new result to the results table.`
- `Check the website, build it, publish it, and tell me when it is live.`

For normal text changes, Codex should edit `src/data/site.js`, run
`npm run build`, commit the change, push to `main`, and wait for the GitHub Pages
deploy to finish. When publishing is done, the live page is:

- Project page: `https://hyprsh.github.io/broger/`
- Final domain: `https://broger.ch`

### What to give Codex

- For text changes: paste the exact wording you want, or describe the idea and
  ask Codex to draft it in German with Swiss spelling.
- For photos: provide the image file and say where it should appear.
- For sponsor logos: provide the logo file and the sponsor name or website.
- For uncertainty: ask Codex to preview the change locally before publishing.

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
- Photos: `src/assets/photos/` · Logos: `public/images/logos/`

## Publishing

Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically.

```bash
npm run build && git add -A && git commit -m "your change" && git push
```

- Live (project page): `https://hyprsh.github.io/broger/`
- Final (after DNS): `https://broger.ch` — see the custom-domain steps in `AGENTS.md`.
