import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  head: {
    link: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOriginIsolated: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap",
      },
    ],
  },
});
