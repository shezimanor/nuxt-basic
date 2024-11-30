// https://github.com/jerrywu001/vue3-toastify
import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
/**
 * 當 Nuxt 啟動後，這個插件將會被自動載入，並載入 Vue3Toastify 樣式與安裝，
 * 並在 defineNuxtPlugin 的回傳的物件屬性 provide 添加 toast 函式，
 * 這個 Vue3-Toastify 建立通知的函式 toast，就會以全域的 Helper 來供 Nuxt 專案使用。
 * 在頁面中就可以直接呼叫這個 $toast 來做使用囉。
 */

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, { autoClose: 1500 });

  // 在 defineNuxtPlugin 的回傳的物件屬性 provide 添加 toast 函式
  return {
    provide: { toast }
  };
});
