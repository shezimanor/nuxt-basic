import removeConsole from 'vite-plugin-remove-console';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxt/ui', '@nuxtjs/color-mode', '@nuxt/eslint'],
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
  }
});
