<script setup lang="ts">
const route = useRoute();
const { categoryId, postId } = route.params;
</script>

<template>
  <div class="prose-page">
    <h1>這是 category/[categoryId]/posts/[postId] 的頁面</h1>
    <p>
      匹配到的 Category Id:
      <span class="text-xl font-semibold text-blue-600">{{ categoryId }}</span>
    </p>
    <p>
      匹配到的 Post Id:
      <span class="text-xl font-semibold text-blue-600">{{ postId }}</span>
    </p>
  </div>
</template>

<style scoped></style>
