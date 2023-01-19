import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
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
  ],
});
