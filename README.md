# broger.ch

Single-page static website for **Jakob (Köbi) Broger** — Skikjöringfahrer. Built
with [Astro](https://astro.build) + Tailwind CSS, hosted on **GitHub Pages**.
Replaces the previous WordPress site.

> **Using an AI assistant (OpenAI Codex / Claude Code)?** Open
> [`AGENTS.md`](./AGENTS.md) — it explains how the assistant should set up the
> environment, make changes, and publish.

## Anleitung: diese Website mit Codex bearbeiten

Du musst nicht wissen, wie Astro, Tailwind, Git oder GitHub Pages funktionieren.
Codex kann normale Website-Anpassungen fuer dich machen und veroeffentlichen,
wenn du ihm in normaler Sprache sagst, was geaendert werden soll.

### Erste Einrichtung

1. Installiere die Codex-App fuer macOS oder Windows von OpenAI.
2. Oeffne Codex und melde dich mit deinem ChatGPT-Konto an. Wenn du stattdessen
   einen OpenAI API Key verwendest, sind gewisse Cloud- oder Workspace-Funktionen
   eventuell nicht verfuegbar.
3. Waehle in Codex **Open project** oder **Select a project folder** und dann
   einen normalen Ort fuer deine Websites, zum Beispiel `Documents` oder `Sites`.
4. Sende Codex diese Nachricht:

   ```text
   Clone https://github.com/hyprsh/broger.git into a folder called broger-site.
   When it is cloned, tell me to open that folder as the project.
   ```

5. Wenn Codex meldet, dass das Klonen fertig ist, oeffne oder wechsle in Codex
   zum neuen Ordner `broger-site`.
6. Sende danach zum Start zum Beispiel diese Nachricht:

   ```text
   Read the instructions, then tell me what this website is and how you would update it.
   ```

Nachdem das Repository geklont und geoeffnet ist, liest Codex automatisch
`AGENTS.md`. Diese Datei sagt Codex, wo die Inhalte der Website liegen, wie die
Website lokal geprueft wird und wie sie veroeffentlicht wird.

### Aenderungen beauftragen

Schreibe deine Wuensche in normaler Sprache. Gute Beispiele:

- `Aktualisiere die Biografie mit diesem neuen Text: ...`
- `Fuege diesen Sponsor und dieses Logo hinzu.`
- `Ersetze das grosse Startbild durch dieses Bild.`
- `Fuege ein neues Resultat in die Resultattabelle ein.`
- `Pruefe die Website, baue sie, veroeffentliche sie und sag mir, wenn sie live ist.`

Bei normalen Textaenderungen soll Codex `src/data/site.js` bearbeiten,
`npm run build` ausfuehren, die Aenderung committen, auf `main` pushen und
warten, bis GitHub Pages fertig veroeffentlicht hat. Danach ist die Website hier
sichtbar:

- Projektseite: `https://hyprsh.github.io/broger/`
- Finale Domain: `https://broger.ch`

### Was Codex braucht

- Fuer Textaenderungen: fuege den genauen Text ein oder beschreibe die Idee und
  bitte Codex, den Text auf Deutsch mit Schweizer Schreibweise zu formulieren.
- Fuer Fotos: gib Codex die Bilddatei und sage, wo das Bild erscheinen soll.
- Fuer Sponsorenlogos: gib Codex die Logodatei, den Sponsornamen und falls
  vorhanden die Website.
- Wenn du unsicher bist: bitte Codex, die Aenderung zuerst lokal zu zeigen, bevor
  sie veroeffentlicht wird.

## Owner guide: use this site with Codex

You do not need to know how Astro, Tailwind, Git, or GitHub Pages work. Codex can
make and publish routine website updates for you when you open this project
folder and describe the change in normal language.

### First-time setup

1. Install the Codex app for macOS or Windows from OpenAI.
2. Open Codex and sign in with your ChatGPT account. If you use an OpenAI API key
   instead, some cloud/workspace features may not be available.
3. In Codex, choose **Open project** or **Select a project folder** and select a
   normal place for your websites, for example `Documents` or `Sites`.
4. Send this message to Codex:

   ```text
   Clone https://github.com/hyprsh/broger.git into a folder called broger-site.
   When it is cloned, tell me to open that folder as the project.
   ```

5. When Codex says the clone is finished, open or switch to the new
   `broger-site` folder in Codex.
6. Send a first message such as:

   ```text
   Read the instructions, then tell me what this website is and how you would update it.
   ```

After the repo is cloned and opened, Codex reads `AGENTS.md` automatically. That
file tells Codex where the website content lives, how to preview changes, and how
to publish the site.

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
