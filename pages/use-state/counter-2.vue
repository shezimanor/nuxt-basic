<script setup lang="ts">
const { counter, increment, decrement } = useCounterAdv();
const locale = useLocale();
</script>

<template>
  <div class="prose-page">
    <h1>可使用 useState 做資料快取</h1>
    <UDivider :label="`C2: ${locale}`" />
    <div class="flex flex-row gap-x-2">
      <UButton @click="increment" size="sm">+1</UButton>
      <UBadge variant="soft">{{ counter }}</UBadge>
      <UButton @click="decrement" size="sm">-1</UButton>
    </div>
    <p>
      與其他頁面共用相同的 useState(with the same key):
      <NuxtLink to="/use-state/counter-1">GO TO C1</NuxtLink>
    </p>
  </div>
</template>

<style scoped></style>
