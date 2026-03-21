import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://christianruiz.dev',
  integrations: [
    sitemap(),
    robotsTxt(),
    (await import('astro-compress')).default(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
