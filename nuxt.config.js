export default {
  // privateRuntimeConfig: {
  //   apiSecret: process.env.KAM_TEST_PROD_VAR
  // },

  server: {},

  loading: { color: '#fff' },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  router: {
    linkActiveClass: 'is-active'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en-GB'
    },
    title: 'Scripted Pixels',
    meta: [
      { charset: 'utf-8' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Scripted Pixels: Design, Develop, Deliver.'
      },
      {
        property: 'og:site_name',
        content: 'Scripted Pixels: Design, Develop, Deliver'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.scriptedpixels.co.uk'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Scripted Pixels: Design, Develop, Deliver.'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'The home to all web development related work & posts.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/scriptedPixelsLogo--initials.png'
      },
      { property: 'og:image:width', content: '124' },
      { property: 'og:image:height', content: '56' },
      { name: 'twitter:site', content: '@scriptedpixels' },
      { name: 'twitter:card', content: '' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.scriptedpixels.co.uk'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Scripted Pixels: Design, Develop, Deliver.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon-32.png'
      },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://www.scriptedpixels.co.uk'
      }
    ]
  },

  content: {
    markdown: {
      prism: {
        theme: 'prismjs/themes/prism-tomorrow.css'
      }
    },
    liveEdit: false
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
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxt/content',
    '@nuxtjs/axios',
    'nuxt-purgecss',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/sentry',
    'nuxt-logrocket'
  ],

  robots: {
    UserAgent: '*'
  },

  logRocket: {
    logRocketId: 'scriptedpixelsltd/main-website',
    devModeAllowed: false,
    config: {}
  },

  sentry: {
    dsn: process.env.SENTRY_DSN,
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    }
  },

  image: {
    // Options
  },

  sitemap: {
    hostname: 'https://www.scriptedpixels.co.uk',
    gzip: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  purgeCSS: {
    enabled: false, // True means it's always on in dev/build/generate mode
    // The two below options achieve the happy medium between Prism.js and PurgeCSS
    // If you're having trouble with code highlighting, try adding the pertinent clases to the whitelist
    whitelistPatternsChildren: [/token$/],
    whitelist: ['pre', 'code']
  },

  generate: {
    fallback: true
  }
}
