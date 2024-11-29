import removeConsole from 'vite-plugin-remove-console';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['@nuxt/ui', '@nuxtjs/color-mode', '@nuxt/eslint'],
  vite: { plugins: [removeConsole()] },
  eslint: {
    config: {
      stylistic: true
    }
  }
});
