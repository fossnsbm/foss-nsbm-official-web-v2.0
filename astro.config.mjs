import { defineConfig } from 'astro/config'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel'
import tailwindcss from '@tailwindcss/vite'
// https://astro.build/config
export default defineConfig({
  redirects: {
    '/old-page': '/new-page',
  },

  // or 'hybrid' for hybrid rendering
  output: 'server',

  adapter: vercel(),
  site: 'https://fossnsbm.org',

  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  middleware: [
    {
      src: './src/middleware.ts', // Ensure the correct path here
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
