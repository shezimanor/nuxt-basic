<script setup lang="ts">
const scoreStore = useScoreStore();
const { doubleScore } = storeToRefs(scoreStore);
</script>

<template>
  <div class="prose-page">
    <h1>可使用 Pinia</h1>
    <p>Double: {{ doubleScore }}</p>
    <div>
      <NuxtLink to="/pinia/score">回去操作 Score</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
