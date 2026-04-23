import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";

const RESUME_URL = "https://docs.google.com/document/d/1bnDG2nmA_nEA9bUAqrBCYPAzzlWZh_vcDr4ts7ZApQo/export?format=pdf";

export default defineConfig({
  site: "https://omareloui.com",

  redirects: {
    "/resume": { status: 302, destination: RESUME_URL },
    "/cv": { status: 302, destination: RESUME_URL },
  },

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
