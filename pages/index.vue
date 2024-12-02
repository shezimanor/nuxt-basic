<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n();
// const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

useHead({
  title: t('title')
});
</script>

<template>
  <div class="prose-page">
    <h1>首頁：{{ $t('hello') }}</h1>
    <div class="flex flex-row gap-x-2">
      <span>{{ $t('language') }}: </span>
      <nav>
        <template v-for="(localeButton, index) in availableLocales" :key="localeButton.code">
          <span v-if="index"> | </span>
          <!-- 以語系為路由的部分時使用 -->
          <!-- <NuxtLink :to="switchLocalePath(locale.code)">
          {{ locale.name ?? locale.code }}
        </NuxtLink> -->
          <!-- 簡易的語系切換，不支援數據持久化保存 -->
          <!-- <UButton @click="locale = localeButton.code">{{
            localeButton.name ?? localeButton.code
          }}</UButton> -->
          <!-- setLocale 支援數據持久化保存，重新整理頁面後，會維持偏好語系 -->
          <UButton @click="setLocale(localeButton.code)">{{
            localeButton.name ?? localeButton.code
          }}</UButton>
        </template>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
