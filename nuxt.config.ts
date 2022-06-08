import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  typescript: { shim: false, strict: true },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  runtimeConfig: {
    private: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },

  meta: {
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    ],
  },

  css: [
    "/assets/styles/reset/index.scss",
    "/assets/styles/core/index.scss",
    "/assets/styles/variables/index.scss",
    "/assets/styles/base/index.scss",
  ],
});
