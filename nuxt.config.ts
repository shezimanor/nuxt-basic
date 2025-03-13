import removeConsole from 'vite-plugin-remove-console';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/i18n'
  ],
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  compatibilityDate: '2024-11-01',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // 為了解決 deprecated Warnings https://sass-lang.com/documentation/breaking-changes/legacy-js-api/
          api: 'modern-compiler'
        }
      }
    },
    plugins: [removeConsole()]
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        commaDangle: 'never'
      }
    }
  },
  imports: {
    dirs: ['stores'] // 讓這些資料夾也具備 auto import 功能
  },
  runtimeConfig: {
    // Private keys are only available on the server
    // 會被 .env NUXT_API_SECRET 的值覆寫
    apiSecret: 'This is from nuxt.config.ts',
    // 會被 .env NUXT_JWT_SECRET 的值覆寫
    jwtSecret: 'my_jwt_20250807',

    // Public keys that are exposed to the client
    // 會被 .env NUXT_PUBLIC_API_BASE 的值覆寫
    public: {
      apiBase: 'Nuxt 3 Yeah!'
    }
  },
  i18n: {
    locales: [
      {
        name: '繁體中文',
        code: 'zh', // 可以自訂
        language: 'zh-TW', // 國際規範
        file: 'zh.json'
      },
      {
        name: 'English',
        code: 'en', // 可以自訂
        language: 'en-US', // 國際規範
        file: 'en.json' // 對應檔案
      },
      {
        name: '日本語',
        code: 'ja', // 可以自訂
        language: 'ja-JP', // 國際規範
        file: 'ja.json'
      }
    ],
    defaultLocale: 'zh', // code
    strategy: 'no_prefix' // default: 'prefix_except_default'
    // detectBrowserLanguage: false
  }
});
