<script setup lang="ts">
const { count, increment } = useCounter();
const { count: count2, increment: increment2 } = useCounter();
</script>

<template>
  <div class="prose-page">
    <h1>Page: Composables</h1>
    <h2>useCounter</h2>
    <div class="flex gap-x-2">
      <UBadge variant="soft">{{ count }}</UBadge> <UButton @click="increment">Plus</UButton>
      <UBadge variant="soft" color="amber">{{ count2 }}</UBadge>
      <UButton @click="increment2" color="amber">Plus</UButton>
    </div>
  </div>
</template>

<style scoped></style>
