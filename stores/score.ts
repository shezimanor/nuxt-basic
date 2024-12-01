// https://pinia.vuejs.org/core-concepts/#Setup-Stores
export const useScoreStore = defineStore('score', () => {
  const score = ref(0);
  const doubleScore = computed(() => score.value * 2);
  function incrementScore() {
    score.value++;
  }
  function decrementScore() {
    score.value--;
  }

  return { score, doubleScore, incrementScore, decrementScore };
});
