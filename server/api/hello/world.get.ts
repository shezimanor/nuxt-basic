const runtimeConfig = useRuntimeConfig();

export default defineEventHandler((event) => {
  console.log('runtimeConfig:', runtimeConfig);

  return `Hello World OK!`;
});
