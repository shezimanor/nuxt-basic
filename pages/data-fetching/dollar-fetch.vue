<script setup lang="ts">
// 這個 data 不是響應式的資料
const data = await $fetch('/api/data/fetching');
</script>

<template>
  <div class="prose-page">
    <h1>Page: $fetch</h1>
    <DataFetchingNavigation />
    <hr />
    <NuxtLink href="https://nuxt.com/docs/api/utils/dollarfetch" target="_blank"
      >Nuxt Doc: $fetch</NuxtLink
    >
    <hr />
    <h3>回傳資料：</h3>
    <p>路由會卡住，是正常的。因為這支 API 需要 1.5 秒才會回傳資料。</p>
    <p>特性：data Twice.（可以看終端機）</p>
    <p class="text-primary">
      {{ data }}
    </p>
  </div>
</template>

<style scoped></style>
