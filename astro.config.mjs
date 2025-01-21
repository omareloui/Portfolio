import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";

export default defineConfig({
  site: "https://omareloui.com",
  vite: {
    plugins: [glsl()],
  },
  integrations: [
    partytown({ config: { forward: ["dataLayer.push"] } }),
    expressiveCode({ themes: ["github-dark"] }),
    mdx(),
    sitemap(),
  ],
});

