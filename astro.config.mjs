// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// `base` is '/' for local dev and the custom domain, but the GitHub Pages
// project URL lives under /broger — the deploy workflow sets GH_PAGES_BASE.
// Normalize to a trailing slash so `${BASE_URL}images/...` joins cleanly.
const raw = process.env.GH_PAGES_BASE || '/';
const base = raw.endsWith('/') ? raw : raw + '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://broger.ch',
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
