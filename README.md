# broger.ch

Single-page static website for **Jakob (Köbi) Broger** — Skikjöringfahrer. Built
with [Astro](https://astro.build) + Tailwind CSS, hosted on **GitHub Pages**.
Replaces the previous WordPress site.

> **Using an AI assistant (OpenAI Codex / Claude Code)?** Open
> [`AGENTS.md`](./AGENTS.md) — it explains how the assistant should set up the
> environment, make changes, and publish.

## Anleitung: diese Website mit Codex bearbeiten

Du musst nicht wissen, wie Astro, Tailwind, Git oder GitHub Pages funktionieren.
Codex kann normale Website-Anpassungen für dich machen und veröffentlichen,
wenn du ihm in normaler Sprache sagst, was geändert werden soll.

### Erste Einrichtung

1. Installiere die Codex-App für macOS oder Windows von OpenAI.
2. Öffne Codex und melde dich mit deinem ChatGPT-Konto an. Wenn du stattdessen
   einen OpenAI API Key verwendest, sind gewisse Cloud- oder Workspace-Funktionen
   eventuell nicht verfügbar.
3. Wähle in Codex **Open project** oder **Select a project folder** und dann
   einen normalen Ort für deine Websites, zum Beispiel `Documents` oder `Sites`.
4. Sende Codex diese Nachricht:

   ```text
   Klone https://github.com/hyprsh/broger.git in einen Ordner namens broger-site.
   Wenn das erledigt ist, sag mir, dass ich diesen Ordner als Projekt öffnen soll.
   ```

5. Wenn Codex meldet, dass das Klonen fertig ist, öffne oder wechsle in Codex
   zum neuen Ordner `broger-site`.
6. Sende danach zum Start zum Beispiel diese Nachricht:

   ```text
   Lies die Anweisungen und sag mir danach, was diese Website ist und wie du sie aktualisieren würdest.
   ```

Nachdem das Repository geklont und geöffnet ist, liest Codex automatisch
`AGENTS.md`. Diese Datei sagt Codex, wo die Inhalte der Website liegen, wie die
Website lokal geprüft wird und wie sie veröffentlicht wird.

### Änderungen beauftragen

Schreibe deine Wünsche in normaler Sprache. Gute Beispiele:

- `Aktualisiere die Biografie mit diesem neuen Text: ...`
- `Füge diesen Sponsor und dieses Logo hinzu.`
- `Ersetze das grosse Startbild durch dieses Bild.`
- `Füge ein neues Resultat in die Resultattabelle ein.`
- `Prüfe die Website, baue sie, veröffentliche sie und sag mir, wenn sie live ist.`

### Lokal prüfen, bevor du veröffentlichst

Wenn du die Änderung zuerst ansehen möchtest, sag Codex:

```text
Mach diese Änderung, starte danach die lokale Vorschau und gib mir den Link. Bitte noch nicht veröffentlichen.
```

Codex soll dann die Website lokal starten und dir einen Link wie
`http://localhost:4321` geben. Öffne diesen Link im Browser und prüfe die
Änderung. Wenn etwas noch nicht stimmt, beschreibe Codex einfach, was anders
sein soll.

### Veröffentlichen

Wenn die Vorschau gut aussieht, sag Codex:

```text
Die Vorschau passt. Baue die Website, veröffentliche sie und sag mir, wenn sie live ist.
```

Codex soll dann `npm run build` ausführen, die Änderung committen, auf `main`
pushen und warten, bis GitHub Pages fertig ist. Erst danach ist die Änderung
online sichtbar.

Bei normalen Textänderungen soll Codex `src/data/site.js` bearbeiten,
`npm run build` ausführen, die Änderung committen, auf `main` pushen und
warten, bis GitHub Pages fertig veröffentlicht hat. Danach ist die Website hier
sichtbar:

- Projektseite: `https://hyprsh.github.io/broger/`
- Finale Domain: `https://broger.ch`

### Was Codex braucht

- Für Textänderungen: füge den genauen Text ein oder beschreibe die Idee und
  bitte Codex, den Text auf Deutsch mit Schweizer Schreibweise zu formulieren.
- Für Fotos: gib Codex die Bilddatei und sage, wo das Bild erscheinen soll.
- Für Sponsorenlogos: gib Codex die Logodatei, den Sponsornamen und falls
  vorhanden die Website.
- Wenn du unsicher bist: bitte Codex, die Änderung zuerst lokal zu zeigen, bevor
  sie veröffentlicht wird.

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

### Preview locally before publishing

If you want to review the change first, tell Codex:

```text
Make this change, then start the local preview and give me the link. Please do not publish yet.
```

Codex should start the website locally and give you a link such as
`http://localhost:4321`. Open that link in your browser and check the change. If
something is not right yet, just tell Codex what should be different.

### Publishing

When the preview looks good, tell Codex:

```text
The preview looks good. Build the website, publish it, and tell me when it is live.
```

Codex should then run `npm run build`, commit the change, push to `main`, and
wait until GitHub Pages finishes. Only then is the change visible online.

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
