export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hiartes',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Controle de Copias'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios', '@/plugins/accessor'],

  // Auto import components: https://go.nuxtjs.dev/config-components #

  // components: [
  //   '@/components/',
  //   '@/components/bosons/',
  //   '@/components/atoms/',
  //   '@/components/organisms/'
  // ],

  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['@/components/bosons/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: 'https://hiart-api-50dc2302934b.herokuapp.com' // 'http://127.0.0.1:3333'
  }
}
