<script setup lang="ts">
const links = ref([
  {
    id: 1,
    title: '基礎',
    to: '/cookie/basic'
  },
  {
    id: 2,
    title: 'JWT 登入',
    to: '/cookie/login'
  },
  {
    id: 3,
    title: 'JWT 身份確認',
    to: '/cookie/whoami'
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
      active-class="text-orange-500"
      inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
      >{{ link.title }}</ULink
    >
  </div>
</template>

<style scoped></style>
