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
      { charset: "utf-8" },
      { name: "theme-color", content: "#5216d1" },

      {
        hid: "description",
        name: "description",
        content:
          "Full-stack developer portfolio. Omar Eloui is a developer based in Egypt.",
      },
      { property: "og:url", content: "https://omareloui.com" },
      { property: "og:title", content: "Omar Eloui | Full-Stack Developer" },
      { property: "og:type", content: "website" },
      {
        property: "og:site_name",
        content: "Omar Eloui | Full-Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Full-stack developer portfolio. Omar Eloui is a developer based in Egypt.",
      },

      { property: "og:image", content: "/images/heading.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "640" },

      {
        property: "og:update_time",
        content: Math.floor(Number(new Date()) / 1000),
      },

      { name: "twitter:card", content: "summary_large_image" },
      { property: "twitter:domain", content: "omareloui.com" },
      { property: "twitter:url", content: "https://omareloui.com" },
      { name: "twitter:title", content: "Omar Eloui | Full-Stack Developer" },
      {
        name: "twitter:description",
        content:
          "Full-stack developer portfolio. Omar Eloui is a developer based in Egypt.",
      },
      { name: "twitter:image", content: "/images/heading.png" },
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
