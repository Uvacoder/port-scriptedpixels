export default {
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
      class: 'has-navbar-fixed-bottom',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/scriptedpixels.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/content',
    '@nuxtjs/axios',
    'nuxt-purgecss',
  ],

  content: {},

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
  },
  purgeCSS: {
    enabled: true, // True means it's always on in dev/build/generate mode
    // The two below options achieve the happy medium between Prism.js and PurgeCSS
    // If you're having trouble with code highlighting, try adding the pertinent clases to the whitelist
    whitelistPatternsChildren: [/token$/],
    whitelist: [
      'pre',
      'code',
      'prism',
      'line-numbers',
      'tag',
      'toolbar-item',
      'toolbar',
      'code-toolbar',
      'span',
      'button',
      'line-numbers-rows',
      'url-link',
      'attr-name',
      'attr-value',
      'punctuation',
      'keyword',
      'keyword-let',
      'operator',
      'string',
    ],
  },
}
