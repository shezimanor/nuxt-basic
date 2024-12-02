import { _readonly } from '../../.nuxt/types/tailwind.config';
<script setup lang="ts">
const name = ref('Ryan');
// key: 建議用下底線連接，或是也可以用單一單字
// 未設 maxAge 預設會使用 Session (分頁關掉才消失，重整不會)
const myName = useCookie('my_name');
const myCounter = useCookie('my_counter', { maxAge: 10 }); // 10秒後過期

const setMyNameCookie = () => {
  myName.value = name.value;
};

const setMyCounterCookie = () => {
  myCounter.value = `${Math.round(Math.random() * 1000)}`;
};
</script>

<template>
  <div class="prose-page">
    <h1>Page: useCookie</h1>
    <div class="flex flex-row gap-x-2">
      <div class="flex flex-col gap-y-2">
        <UButton @click="setMyNameCookie">設置 My Name</UButton>
        <UInput type="text" v-model="name" />
        <div class="flex flex-row items-center gap-x-2">
          <UBadge color="amber">MyName</UBadge><span>{{ myName }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-y-2">
        <UButton @click="setMyCounterCookie">設置 My Counter</UButton>
        <UInput type="text" placeholder="My Counter 10秒過期" disabled />
        <div class="flex flex-row items-center gap-x-2">
          <UBadge color="amber">MyCounter</UBadge><span>{{ myCounter }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
