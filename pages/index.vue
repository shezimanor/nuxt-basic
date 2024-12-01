<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log('runtimeConfig', runtimeConfig);
const { data } = useLazyFetch('/api/hello/world');
</script>

<template>
  <div class="prose-page">
    <h1>Page: index</h1>
    <UserProfile />
    <h2>RuntimeConfig</h2>
    <p>開啟終端機和 devtools 查看。</p>
    <p class="flex gap-x-2"><UBadge>/api/hello/world</UBadge> {{ data }}</p>
  </div>
</template>

<style scoped></style>
