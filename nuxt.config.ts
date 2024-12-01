import removeConsole from 'vite-plugin-remove-console';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/color-mode', '@nuxt/eslint', '@vueuse/nuxt'],
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

    // Public keys that are exposed to the client
    // 會被 .env NUXT_PUBLIC_API_BASE 的值覆寫
    public: {
      apiBase: 'Nuxt 3 Yeah!'
    }
  }
});
