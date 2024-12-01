<script setup lang="ts">
const num = ref(Math.floor(Math.random() * 1000));
</script>

<template>
  <div class="prose-page">
    <h1>Page: Hydration 經典問題</h1>
    <p>打開 devtools 看警告</p>
    <UBadge size="lg">{{ num }}</UBadge>
    <p>解決方案連結：<NuxtLink to="/hydration/use-state">useState</NuxtLink></p>
  </div>
</template>

<style scoped></style>
