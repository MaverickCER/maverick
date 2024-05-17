// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: 'Maverick Manasco | Software Engineer',
      meta: [
        { name: "title", content: "Maverick Manasco | Software Engineer" },
        { name: "og:title", content: "Maverick Manasco | Software Engineer" },
        { name: "description", content: "Lead Software Engineer with 7+ years of experience in Project Management, UX/UI Design, and accessible full stack development. Garnered media attention for efforts to encourage accessible communication within gaming." },
        { name: "og:description", content: "Lead Software Engineer with 7+ years of experience in Project Management, UX/UI Design, and accessible full stack development. Garnered media attention for efforts to encourage accessible communication within gaming." },
        { name: "theme-color", content: "#780102" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image:alt", content: "" },
        { name: "twitter:image", content: "https://i.ibb.co/9hrKrJJ/thumbnail.png" },
        { name: "og:image", content: "https://i.ibb.co/9hrKrJJ/thumbnail.png" },
        { name: "twitter:creator", content: "@MaverickCER" },
        { name: "og:site_name", content: "Software Engineer Portfolio for Maverick Manasco" },
        { name: "og:url", content: "https://www.maverickmanasco.dev" },
        { name: "application-name", content: "&nbsp;" },
        { name: "msapplication-TileColor", content: "#780102" },
        { name: "msapplication-TileImage", content: "mstile-144x144.png" },
        { name: "msapplication-square70x70logo", content: "mstile-70x70.png" },
        { name: "msapplication-square150x150logo", content: "mstile-150x150.png" },
        { name: "msapplication-wide310x150logo", content: "mstile-310x150.png" },
        { name: "msapplication-square310x310logo", content: "mstile-310x310.png" }
      ],
      link: [
        { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "apple-touch-icon-57x57.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "apple-touch-icon-57x57.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "114x114", href: "apple-touch-icon-114x114.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "apple-touch-icon-72x72.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "144x144", href: "apple-touch-icon-144x144.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "apple-touch-icon-60x60.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "120x120", href: "apple-touch-icon-120x120.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "apple-touch-icon-76x76.png" },
        { rel: "apple-touch-icon-precomposed", sizes: "152x152", href: "apple-touch-icon-152x152.png" },
        { rel: "icon", type: "imag/png", href: "favicon-196x196.png", sizes: "196x196" },
        { rel: "icon", type: "imag/png", href: "favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "imag/png", href: "favicon-32x32.png", sizes: "32x32" },
        { rel: "icon", type: "imag/png", href: "favicon-16x16.png", sizes: "16x16" },
        { rel: "icon", type: "imag/png", href: "favicon-128.png", sizes: "128x128" },
      ]
    }
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    ['@nuxtjs/google-fonts', { families: { "Montserrat": true, "Robot Mono": true } }]
  ],
  devtools: { enabled: true },
  i18n: {
    vueI18n: "./i18n.config.js",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  plugins: [
    "~/plugins/vue-hotjar-next.client.js",
    "~/plugins/tawk-to.client.js"
  ]
});