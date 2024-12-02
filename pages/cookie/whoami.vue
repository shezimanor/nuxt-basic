<script setup lang="ts">
import type { JwtPayload } from 'jsonwebtoken';
// 記得使用 useRequestHeaders 來進行 cookie 的夾帶
const {
  data: userProfile,
  status,
  error
} = await useLazyFetch<JwtPayload>('/api/whoami', {
  headers: useRequestHeaders(['cookie'])
});
console.log('userProfile', userProfile);
</script>

<template>
  <div class="prose-page">
    <h1>JWT 身份確認</h1>
    <CookieNavigation />
    <div v-if="status === 'pending'">Loading ...</div>
    <UCard v-else-if="error">
      <UBadge color="red">401 未授權</UBadge>
    </UCard>
    <UCard v-else>
      <div v-if="userProfile && 'data' in userProfile" class="flex flex-col gap-y-1">
        <div v-for="key in Object.keys(userProfile.data)" :key="key" class="flex flex-row gap-x-2">
          <span class="text-sky-600">{{ key }}:</span>
          <span>{{ userProfile.data[key] }}</span>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style scoped></style>
