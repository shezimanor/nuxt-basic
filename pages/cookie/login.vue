<script setup lang="ts">
const username = ref('ryan');
const password = ref('abcd1234');
</script>

<template>
  <div class="prose-page">
    <h1>JWT 登入頁面</h1>
    <CookieNavigation />
    <p>
      這裡有用 MyLoginFormInput 這個元件做多個 v-model 的綁定練習，可以查看程式碼。（算是複習 Vue3
      渲染邏輯）
    </p>
    <div class="mb-2 flex flex-row gap-x-2">
      <UBadge v-show="username">{{ username }}</UBadge>
      <UBadge v-show="password" color="rose">{{ password }}</UBadge>
    </div>
    <MyLoginFormInput v-model:username="username" v-model:password="password" />
  </div>
</template>

<style scoped></style>
