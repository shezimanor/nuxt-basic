<script setup lang="ts">
const { data, status, refresh } = await useAsyncData('data-fetching', () =>
  $fetch('/api/data/fetching')
);
</script>

<template>
  <div class="prose-page">
    <h1>Page: useAsyncData</h1>
    <DataFetchingNavigation />
    <hr />
    <NuxtLink href="https://nuxt.com/docs/api/composables/use-async-data" target="_blank"
      >Nuxt Doc: useAsyncData</NuxtLink
    >
    <hr />
    <h3>回傳資料：</h3>
    <p>key 就會作為這個資料的標記，添加在 Nuxt 的 Payload 之中。</p>
    <p>以解決單純的使用 $fetch 會呼叫兩次 API 的現象。</p>
    <p>lazy 可以解決客戶端路由導航被阻擋的問題。（但有 useLazyAsyncData 可以取代處理）</p>
    <p class="text-amber-500">status: {{ status }}</p>
    <UButton @click="refresh">Refresh</UButton>
    <p class="text-primary">
      {{ data }}
    </p>
  </div>
</template>

<style scoped></style>
