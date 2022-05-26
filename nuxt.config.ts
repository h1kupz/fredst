import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: false,

  target: "static",

  meta: {
    title: "Fred St.",
  },

  head: {
    script: [
      {
        hid: "",
        src: "",
      },
    ],
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon.png?v=GvmpJqoA5j",
      },
    ],
  },
  css: ["@/assets/css/tailwind.css"],

  plugins: [],

  components: true,

  modules: [],
  content: {},

  router: {
    base: "/",
  },

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
