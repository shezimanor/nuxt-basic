<script setup lang="ts">
const { data, status, refresh } = await useFetch('/api/data/fetching');
</script>

<template>
  <div class="prose-page">
    <h1>Page: useFetch</h1>
    <DataFetchingNavigation />
    <hr />
    <NuxtLink href="https://nuxt.com/docs/api/composables/use-fetch" target="_blank"
      >Nuxt Doc: useFetch</NuxtLink
    >
    <hr />
    <h3>回傳資料：</h3>
    <p>useAsyncData 的語法糖，會自動建立 key。</p>
    <p>lazy 可以解決客戶端路由導航被阻擋的問題。（但有 useLazyFetch 可以取代處理）</p>
    <p class="text-amber-500">status: {{ status }}</p>
    <UButton @click="refresh">Refresh</UButton>
    <p class="text-primary">
      {{ data }}
    </p>
  </div>
</template>

<style scoped></style>
