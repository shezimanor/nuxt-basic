<script setup lang="ts">
const links = ref([
  {
    id: 1,
    title: '前往指定的類別',
    to: '/category/8'
  },
  {
    id: 2,
    title: '前往指定類別的文章',
    to: '/category/8/posts/1'
  },
  {
    id: 3,
    title: '前往 Top 3',
    to: '/category/top-3'
  },
  {
    id: 4,
    title: '前往 Top 10',
    to: '/category/top-10'
  }
]);
</script>

<template>
  <div class="prose-page">
    <h1>更多的路由玩法</h1>
    <div class="flex gap-x-2">
      <ULink
        v-for="link in links"
        :key="link.id"
        :to="link.to"
        class="underline"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >{{ link.title }}</ULink
      >
    </div>
  </div>
</template>

<style scoped></style>
