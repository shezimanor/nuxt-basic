<script setup lang="ts">
const count = useState('count', () => Math.floor(Math.random() * 1000));
</script>

<template>
  <div class="prose-page">
    <h1>Hydration 資料不一致的解決方案</h1>
    <p>useState</p>
    <UBadge size="lg">{{ count }}</UBadge>

    <p>
      當我們使用 useState，並以 count 字串當作 key
      來作為狀態的辨識名稱，在網頁請求進入伺服器端執行時 當執行到頁面中呼叫 useState
      的函式，它就會檢查有沒有名為 count 的狀態。 如果不存在，就會執行傳入的 init
      函式，來亂數產生一個數值，回傳給 count 作為響應式狀態的初始值，這個 count 的狀態會被放在 Nuxt
      的 payload 中，與 HTML 一起回傳給瀏覽器。
    </p>
    <p>
      當客戶端於 Hydration 步驟再次的執行相同的 useState 這段程式碼，由於 Nuxt payload
      中已經有建立好 count 這個狀態，就會沿用這個狀態而不會再次執行初始化函式。
      如此一來，就不會發生伺服器端與客戶端都重複的產生亂數來設定初始化狀態。
      畫面也不會因為初始狀態不一致，而出現畫面數值變動的問題囉。
    </p>
  </div>
</template>

<style scoped></style>
