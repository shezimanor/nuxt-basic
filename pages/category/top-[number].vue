<script setup lang="ts">
const route = useRoute();
const { number } = route.params;
</script>

<template>
  <div class="prose-page">
    <h1>這是 category/top-[number] 的頁面</h1>
    <p>
      匹配到的 Top Number:
      <span class="text-xl font-semibold text-blue-600">{{ number }}</span>
    </p>
  </div>
</template>

<style scoped></style>
