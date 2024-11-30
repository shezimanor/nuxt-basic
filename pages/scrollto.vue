<script setup lang="ts">
const scrollToElement = (elementSelector: string) => {
  useNuxtApp().$scrollTo(elementSelector);
};
const notify = (type: 'success' | 'error') => {
  useNuxtApp().$toast('我是通知！', {
    type
  });
};
</script>

<template>
  <div class="prose-page">
    <h1 id="h1">Page: scrollto(Plugins)</h1>

    <div class="mb-2 flex gap-x-2">
      <UPopover mode="hover">
        <UButton v-focus v-scroll-to="'#element1'" color="amber"> 捲動頁面至 #element </UButton>
        <template #panel>
          <div class="p-4 text-amber-400">
            [方法一] template 中，使用 `v-scroll-to="'#element1'"`
          </div>
        </template>
      </UPopover>
      <UPopover mode="hover">
        <UButton @click="$scrollTo('#element2')" color="sky"> 捲動頁面至 #element2 </UButton>
        <template #panel
          ><div class="p-4 text-sky-400">
            [方法二] template 中，使用 `@click="$scrollTo('#element2')"`
          </div></template
        >
      </UPopover>
      <UPopover mode="hover">
        <UButton @click="scrollToElement('#element3')" color="rose"> 捲動頁面至 #element3 </UButton>
        <template #panel
          ><div class="p-4 text-rose-400">
            [方法三] 使用 script 中的方法 `@click="scrollToElement"`
          </div></template
        >
      </UPopover>
    </div>
    <div class="mb-2 flex gap-x-2">
      <UButton @click="notify('success')" color="green">建立成功通知</UButton>
      <UButton @click="notify('error')" color="red">建立失敗通知</UButton>
    </div>
    <div class="h-screen w-full"></div>
    <div id="element1" class="mt-24">
      <UBadge color="amber">這裡是 #element</UBadge>
    </div>
    <div class="h-screen w-full"></div>
    <div class="h-screen w-full"></div>
    <div id="element2" class="mt-24">
      <UBadge color="sky">這裡是 #element2</UBadge>
    </div>
    <div class="h-screen w-full"></div>
    <div class="h-screen w-full"></div>
    <div id="element3" class="mt-24">
      <UBadge color="rose">這裡是 #element3</UBadge>
    </div>
    <div class="h-screen w-full"></div>
    <div class="h-screen w-full"></div>
    <UButton
      v-scroll-to="'#h1'"
      icon="i-heroicons-arrow-small-up-solid"
      size="sm"
      color="lime"
      square
      variant="solid"
      class="fixed bottom-2 right-2 z-10"
    >
    </UButton>
  </div>
</template>

<style scoped></style>
