<script setup lang="ts">
const { data, status, refresh } = await useLazyAsyncData('data-fetching', () =>
  $fetch('/api/data/fetching')
);
</script>

<template>
  <div class="prose-page">
    <h1>Page: useLazyAsyncData</h1>
    <DataFetchingNavigation />
    <hr />
    <NuxtLink href="https://nuxt.com/docs/api/composables/use-lazy-async-data" target="_blank"
      >Nuxt Doc: useLazyAsyncData</NuxtLink
    >
    <hr />
    <h3>回傳資料：</h3>
    <p>不會阻擋路由導航</p>
    <p class="text-amber-500">status: {{ status }}</p>
    <UButton @click="refresh">Refresh</UButton>

    <p class="text-primary">
      {{ data }}
    </p>
  </div>
</template>

<style scoped></style>
