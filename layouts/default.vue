<script setup lang="ts">
const colorMode = useColorMode();

const colorModeOptions = ['system', 'light', 'dark'];
</script>

<template>
  <div class="m-4">
    <div class="flex items-start justify-end">
      <USelectMenu v-model="colorMode.preference" :options="colorModeOptions" />
    </div>
    <slot />
  </div>
</template>

<style scoped></style>
