import { UserProfile } from '../.nuxt/components';
<script setup lang="ts">
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(() => {
  // 若沒有資料進來，就建立資料
  if (!user.value)
    user.value = {
      id: 1,
      username: 'Ryan',
      status: 'online'
    };
});
</script>

<template>
  <UCard>
    <template #header>Component: UserProfile</template>
    <div v-if="user" class="flex flex-row gap-x-2">
      Name:
      <UInput v-model="user.username" />
      <UBadge>{{ user.status }}</UBadge>
    </div>
  </UCard>
</template>

<style scoped></style>
