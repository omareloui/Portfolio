import partytown from "@astrojs/partytown";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  vite: {
    plugins: [glsl()],
  },
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    expressiveCode({
      themes: ["github-dark"],
    }),
  ],
});
