import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  meta: {
    title: "Fred St.",
  },

  head: [
    {
      link: [
        {
          hid: "icon",
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "favicon.png",
        },
      ],
    },
  ],

  link: [
    {
      hid: "icon",
      rel: "icon",
      type: "image/x-icon",
      sizes: "32x32",
      href: "/favicon.png",
    },
  ],
  css: ["@/assets/css/tailwind.css"],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});
