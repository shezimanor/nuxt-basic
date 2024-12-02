<!-- 練習 v-model 的綁定邏輯 -->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    username: string;
    password: string;
  }>(),
  {
    username: '',
    password: ''
  }
);
const emit = defineEmits<{
  (e: 'update:username', value: string): void;
  (e: 'update:password', value: string): void;
}>();

const login = async () => {
  const response = await $fetch('/api/login', {
    method: 'POST',
    body: {
      username: props.username,
      password: props.password
    }
  });
  if (response === 'ok') navigateTo('/cookie/whoami');
};
</script>

<template>
  <UCard :ui="{ base: 'max-w-72' }">
    <div class="mb-2 flex flex-col gap-y-1">
      <label for="unInput">Username</label>
      <input
        id="unInput"
        type="text"
        :value="username"
        class="h-8 appearance-none rounded border px-2 text-gray-700 dark:text-gray-300"
        @input="emit('update:username', (<HTMLInputElement>$event.target).value)"
      />
      <label for="pwInput">Password</label>
      <input
        id="pwInput"
        type="text"
        :value="password"
        class="h-8 appearance-none rounded border px-2 text-gray-700 dark:text-gray-300"
        @input="emit('update:password', (<HTMLInputElement>$event.target).value)"
      />
    </div>
    <UButton color="green" @click="login">登入</UButton>
  </UCard>
</template>

<style scoped></style>
