<script setup lang="ts">
const route = useRoute();
const { categoryId } = route.params;
</script>

<template>
  <div class="prose-page">
    <h1>這是 category/[categoryId] 的頁面</h1>
    <p>
      匹配到的 Category Id:
      <span class="text-xl font-semibold text-blue-600">{{ categoryId }}</span>
    </p>
  </div>
</template>

<style scoped></style>
