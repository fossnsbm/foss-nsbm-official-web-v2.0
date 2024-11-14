import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  output: 'server',  // or 'hybrid' for hybrid rendering
  adapter: vercel(),
  site: "https://fossnsbm.org",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
});
