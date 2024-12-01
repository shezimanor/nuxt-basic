<script setup lang="ts">
const { counter, increment, decrement } = useCounterAdv();
</script>

<template>
  <div class="prose-page">
    <h1>可使用 useState 做資料快取 C1</h1>
    <div class="flex flex-row gap-x-2">
      <UButton @click="increment" color="purple" size="sm">+1</UButton>
      <UBadge variant="soft">{{ counter }}</UBadge>
      <UButton @click="decrement" color="purple" size="sm">-1</UButton>
    </div>
    <p>
      與其他頁面共用相同的 useState(with the same key):
      <NuxtLink to="/use-state/counter-2">GO TO C2</NuxtLink>
    </p>
  </div>
</template>

<style scoped></style>
