import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  redirects: {
    '/old-page': '/new-page'
  },
  output: 'server',  // or 'hybrid' for hybrid rendering
  adapter: vercel(),
  site: "https://fossnsbm.org",
  integrations: [
    auth(),
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
  middleware: [
    {
      src: './src/middleware.ts', // Ensure the correct path here
    },
  ],
  
});
