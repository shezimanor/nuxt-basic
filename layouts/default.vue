<script setup lang="ts">
const colorModeOptions = ['system', 'light', 'dark'];
const links = ref([
  {
    id: 1,
    title: 'Index',
    to: '/'
  },
  {
    id: 2,
    title: 'About',
    to: '/about'
  },
  {
    id: 3,
    title: 'Catch All',
    to: '/catch-all/demo/first'
  },
  {
    id: 4,
    title: 'Category',
    to: '/category'
  },
  {
    id: 5,
    title: 'Composables',
    to: '/composables'
  },
  {
    id: 6,
    title: 'Scrollto & Toastify',
    to: '/scrollto'
  }
]);
</script>

<template>
  <div class="m-4">
    <div class="flex items-start justify-end">
      <ClientOnly>
        <USelectMenu v-model="$colorMode.preference" :options="colorModeOptions" />
        <template #fallback>
          <USelectMenu disabled model-value="loading" :options="['loading']" />
        </template>
      </ClientOnly>
    </div>
    <div class="navigation mb-2 flex gap-x-2">
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
    <slot />
  </div>
</template>

<style scoped></style>
