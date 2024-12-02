<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log('runtimeConfig.public', runtimeConfig.public);
console.log('runtimeConfig.app', runtimeConfig.app);
const { data } = useLazyFetch('/api/hello/world');
</script>

<template>
  <article class="prose-page">
    <h1>This Is About ME</h1>
    <p>
      Nuxt 3 提供我們在副檔名前可以使用 .client 與 .server，來控制元件在客戶端或伺服器端進行載入。
    </p>
    <h2>控制伺服器端或客戶端渲染元件</h2>
    <MyComponent />
    <hr />
    <UserProfile />
    <h2>RuntimeConfig</h2>
    <p>開啟終端機和 devtools 查看。</p>
    <p class="flex gap-x-2"><UBadge>/api/hello/world</UBadge> {{ data }}</p>
  </article>
</template>

<style scoped></style>
