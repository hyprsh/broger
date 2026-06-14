# AGENTS.md — operating guide for AI coding agents

This file tells an AI agent (OpenAI Codex, Claude Code, etc.) everything it
needs to run, change, and **publish** this website on behalf of a non-technical
owner. If you are such an agent, read this fully before acting.

## What this project is

The personal website of **Jakob „Köbi" Broger**, a retired skikjöring (ski-joring)
racer — `broger.ch`. It is a **single-page** static site built with
[Astro](https://astro.build) + Tailwind CSS. It is hosted on **GitHub Pages** and
deploys automatically via GitHub Actions whenever changes land on the `main`
branch. The site language is **German** — keep all visitor-facing text in German.

## Golden rules for working with the owner

- The owner is **not technical**. They will describe changes in plain language
  ("update the bio", "add a 2025 race", "swap the hero photo"). Translate that
  into the right file edit yourself — do not ask them about tools or code.
- **Almost all text and data lives in one file: `src/data/site.js`.** Prefer
  editing there over touching page markup. It holds the profile, career timeline,
  statistics table, top horses, sponsors, and the retirement statement.
- Jakob is **retired** (after the 2022 season). Keep visitor-facing copy in the
  past tense; the `retirement` block in `src/data/site.js` is his farewell.
- After ANY change, you MUST (1) build successfully and (2) publish (see below).
- Keep changes small and verifiable. Always run the build before publishing.

## 1. Reconstruct the dev environment

Requirements: **Node.js 22+** and **npm** (Node ships with npm). Check with
`node --version`. If Node is missing, install it from <https://nodejs.org> (LTS)
or via a version manager (`nvm install 22`).

Then, from the project root:

```bash
npm install        # installs Astro, Tailwind, etc. (reads package-lock.json)
```

That's the entire setup. There is no database, no secret keys, no external
services to configure.

## 2. Run / preview locally

```bash
npm run dev        # live dev server at http://localhost:4321  (auto-reloads)
npm run build      # produces the static site in dist/
npm run preview    # serves the built dist/ at http://localhost:4321
```

Use `npm run dev` while editing; share the localhost URL with the owner if they
want to review before publishing.

## 3. Where things are

| You want to change… | Edit… |
| --- | --- |
| Any text, bio, stats, retirement note, sponsors | `src/data/site.js` |
| Page structure / section order / layout | `src/pages/index.astro` |
| Top navigation links | `src/components/Nav.astro` |
| Site-wide `<head>`, fonts, meta tags | `src/layouts/Base.astro` |
| Colors, fonts, animations | `src/styles/global.css` |
| Photos | `public/images/photos/` |
| Sponsor logos | `public/images/logos/` |

It is one page; the nav items are anchor links (`#person`, `#resultate`, …) that
scroll to sections within `src/pages/index.astro`.

### Adding an image
Drop the file into `public/images/photos/`, then reference it in code as
`img('photos/yourfile.jpg')` (the `img()` helper in `index.astro` adds the
correct path prefix automatically — never hard-code `/broger/...`).

## 4. Publish changes (deploy)

Publishing = commit to `main` and push. GitHub Actions
(`.github/workflows/deploy.yml`) then builds and deploys to GitHub Pages
automatically (about 1–2 minutes).

```bash
npm run build                      # 1. confirm it builds with no errors
git add -A
git commit -m "Describe the change in plain language"
git push                           # 2. triggers the deploy
```

Watch the deploy with `gh run watch` (or the repo's **Actions** tab). When it
finishes, the change is live. Tell the owner it's published and give them the URL.

- **Live URL (project page):** `https://hyprsh.github.io/broger/`
- **Final URL (after DNS):** `https://broger.ch`

If `gh` is not authenticated, run `gh auth login` once.

## 5. The one technical gotcha: the base path

GitHub project pages serve from a sub-path (`/broger/`), but the local dev server
and the future custom domain serve from the root (`/`). This is already handled:

- `astro.config.mjs` reads `GH_PAGES_BASE`; the deploy workflow sets it to
  `/broger`. Locally it defaults to `/`.
- All asset URLs go through the `img()` helper / `import.meta.env.BASE_URL`, so
  they get the right prefix in every environment.
- **Never hard-code an absolute path like `/broger/images/...`** — use the helper.

### When the custom domain broger.ch is connected
1. Add a file `public/CNAME` containing exactly `broger.ch`.
2. In `.github/workflows/deploy.yml`, remove the `GH_PAGES_BASE: /broger` line
   (so the site builds at root `/`).
3. Point the `broger.ch` DNS at GitHub Pages (A records to GitHub's IPs, or a
   CNAME for `www`). Enable "Enforce HTTPS" in the repo's Pages settings.

## 6. House style

- German, Swiss spelling (use `ss`, not `ß` — e.g. "Stockmass", "Schluss").
- Keep the alpine/winter palette defined in `src/styles/global.css` (glacier
  teal, gold accents, deep ink, snow background).
- New sections should use the `reveal` class to get the scroll-in animation, and
  an `id` if they need a nav anchor.
- Run `npm run build` before every commit; never push a build that fails.
