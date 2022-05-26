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
