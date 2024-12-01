export const useCounter = () => {
  const count = ref(0);
  const decrement = () => {
    count.value--;
  };
  const increment = () => {
    count.value++;
  };
  return {
    count,
    decrement,
    increment
  };
};
