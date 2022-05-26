

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default ({
  head: {
        title: 'Fred St.',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: 'Fred St.',
            name: 'Fred St.',
            content: 'Fred St offers a fresh and exciting landscape architectural design alternative for  businesses operating in the Urban Development and Infrastructure sectors across Australia and who might be seeking a more personalized, creative and cost effective landscape architectural design service.'
          }
        ],
        link: [{ rel: 'icon', type: 'image/png', href: "/favicon.png" }]
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
      css: [
        "~/assets/css/tailwind.css"
      ],
      pwa: {
        icon: {
          filename: 'favicon.png?v1'
        }
      },
      
})
