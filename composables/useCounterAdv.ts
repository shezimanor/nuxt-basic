export const useCounterAdv = () => {
  // const counter = ref(0); 使用一般的 ref 換頁後狀態就會消失
  const counter = useState('counter', () => 0); // useState 會將狀態保留，直到重新刷新頁面。
  const decrement = () => {
    counter.value--;
  };
  const increment = () => {
    counter.value++;
  };
  return {
    counter,
    decrement,
    increment
  };
};
