<script setup lang="ts">
const links = ref([
  {
    id: 1,
    title: 'fetch()',
    to: '/data-fetching/dollar-fetch'
  },
  {
    id: 2,
    title: 'useAsyncData()',
    to: '/data-fetching/use-async-data'
  },
  {
    id: 3,
    title: 'useLazyAsyncData()',
    to: '/data-fetching/use-lazy-async-data'
  },
  {
    id: 3,
    title: 'useFetch()',
    to: '/data-fetching/use-fetch'
  },
  {
    id: 3,
    title: 'useLazyFetch()',
    to: '/data-fetching/use-lazy-fetch'
  }
]);
</script>

<template>
  <div class="navigation mb-2 flex gap-x-2">
    <ULink
      v-for="link in links"
      :key="link.id"
      :to="link.to"
      class="underline"
      active-class="text-sky-500"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >{{ link.title }}</ULink
    >
  </div>
</template>

<style scoped></style>
