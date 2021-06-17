import colors from "vuetify/es5/util/colors";

export default {
  env: {
    SERVER_URL: process.env.SERVER_URL
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],
  router: {
    middleware: ["auth"]
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "data"
        },
        user: {
          property: "data"
        },
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post"
          },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/user", method: "get" }
        }
      }
    },
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/dashboard"
    }
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - toystoreyhris",
    title: "toystoreyhris",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios-accessor"],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    "@nuxtjs/auth-next"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "https://toystorey-hris-server.herokuapp.com/hr/api",
    // baseURL: "http://localhost:5000/hr/api",
    // prefix: "/hr/api",
    credential: true
  },
  // axios: { host: "localhost", port: 5000, prefix: "/hr/api" },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: {
      font: {
        family: "Poppins"
      }
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: "#db2828",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#db2828"
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  }
};
