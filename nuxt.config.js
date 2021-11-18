export default {
  privateRuntimeConfig: {
    apiSecret: process.env.KAM_TEST_PROD_VAR,
  },

  server: {},

  loading: { color: '#fff' },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    linkActiveClass: 'is-active',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Scripted Pixels Ltd',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: '',
    },
  },

  content: {
    markdown: {
      prism: {
        // theme: 'prism-themes/themes/prism-material-oceanic.css',
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/scriptedpixels.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios', '~/plugins/prism'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/content',
    '@nuxtjs/axios',
    'nuxt-purgecss',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  purgeCSS: {
    enabled: false, // True means it's always on in dev/build/generate mode
    // The two below options achieve the happy medium between Prism.js and PurgeCSS
    // If you're having trouble with code highlighting, try adding the pertinent clases to the whitelist
    whitelistPatternsChildren: [/token$/],
    whitelist: ['pre', 'code'],
  },
}
