import { StorageSerializers } from '@vueuse/core';
type User = {
  id: number;
  username: string;
  status: string;
};

// https://pinia.vuejs.org/core-concepts/#Setup-Stores
export const useUserStore = defineStore('user', () => {
  // 使用 useSessionStorage 來持久化數據
  const user = useSessionStorage<User>('user', null, {
    serializer: StorageSerializers.object
  });

  return {
    user
  };
});
