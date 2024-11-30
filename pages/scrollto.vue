<script setup lang="ts"></script>

<template>
  <div class="prose-page">
    <h1>Page: scrollto</h1>
    <a v-scroll-to="'#element'" href="#" class="my-4 font-medium text-gray-600">
      捲動頁面至 #element
    </a>
    <div class="h-screen w-full"></div>
    <div id="element" class="mt-24">
      <UBadge color="sky">這裡是 #element</UBadge>
    </div>
    <div class="h-screen w-full"></div>
    <div class="h-screen w-full"></div>
  </div>
</template>

<style scoped></style>
