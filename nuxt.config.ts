import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
      css: [
        "~/assets/css/tailwind.css"
      ],
      pwa: {
        icon: {
          filename: 'favicon.png?v1'
        }
      },
      head: {
        title: 'Fres St.',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'description',
            name: 'description',
            content: 'Fred St offers a fresh and exciting landscape architectural design alternative for  businesses operating in the Urban Development and Infrastructure sectors across Australia and who might be seeking a more personalized, creative and cost effective landscape architectural design service.'
          }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: "../assets/favicon.png" }]
      },
})
