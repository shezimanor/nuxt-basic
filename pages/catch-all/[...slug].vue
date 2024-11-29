<script setup lang="ts">
const route = useRoute();
const { slug } = route.params;
</script>

<template>
  <div class="prose-page">
    <h1>catch-all/... 下的頁面</h1>
    <p>匹配到的 Slug:</p>
    <p>{{ slug }}</p>
  </div>
</template>

<style scoped></style>
