import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  experimental: {
    rustCompiler: true,
  },
  site: 'https://christianruiz.dev',
  fonts: [
    {
      name: 'Calibre',
      cssVariable: '--font-calibre',
      provider: fontProviders.local(),
      display: 'swap',
      fallbacks: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'sans-serif',
      ],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Calibre/Calibre-Regular.otf'],
            weight: 400,
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Calibre/Calibre-Medium.otf'],
            weight: 500,
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Calibre/Calibre-Semibold.otf'],
            weight: 600,
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Calibre/Calibre-Bold.otf'],
            weight: 700,
            style: 'normal',
          },
        ],
      },
    },
  ],
  integrations: [
    sitemap(),
    robotsTxt(),
    (await import('astro-compress')).default(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
