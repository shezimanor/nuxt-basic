export const useLocale = () => {
  // useState 的key 是使用關鍵，相同的 key 就會共用狀態。
  // composables 也可以回傳非物件。
  return useState('locale', () => 'EN');
};
