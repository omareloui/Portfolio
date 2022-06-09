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
    title: "Omar Eloui | Web Developer",

    meta: [
      { name: "theme-color", content: "#5216d1" },
      { charset: "utf-8" },
      {
        hid: "description",
        name: "description",
        content:
          "Full-stack developer portfolio. Omar Eloui is a developer based in Egypt.",
      },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        hid: "apple-touch-icon",
        rel: "apple-touch-icon",
        href: "/icons/logo_x180.png",
      },
      { rel: "apple-mobile-web-app-status-bar", content: "#5216d1" },

      { rel: "manifest", href: "/site.webmanifest" },

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
