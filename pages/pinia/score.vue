<script setup lang="ts">
const scoreStore = useScoreStore();
</script>

<template>
  <div class="prose-page">
    <h1>可使用 Pinia</h1>
    <ClientOnly>
      <div class="flex flex-row gap-x-2">
        <UButton @click="scoreStore.incrementScore" size="sm">+1</UButton>
        <UBadge variant="soft">{{ scoreStore.score }}</UBadge>
        <UButton @click="scoreStore.decrementScore" size="sm">-1</UButton>
      </div>
      <p>Double: {{ scoreStore.doubleScore }}</p>
    </ClientOnly>
    <div>
      <NuxtLink to="/pinia/double-score">跨頁查看：Double Score</NuxtLink>
    </div>
    <h2>Pinia 補充</h2>
    <ul>
      <li>可以在元件直接操作 state，不一定要用 actions。</li>
      <li>
        Option Stores 可以用 $reset 重置全 state； Setup Stores 可以自己建立 $reset function。
      </li>
      <li>可以用 storeToRefs(store) 來解構 state, getters ，而不喪失響應。</li>
      <li>store.$patch 方法也可以一次修改全部到部分的 state。</li>
    </ul>
  </div>
</template>

<style scoped></style>
