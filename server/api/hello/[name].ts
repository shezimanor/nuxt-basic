export default defineEventHandler((event) => {
  // 使用 getRouterParam 在 TS 中優於使用 event.context.params
  const name = getRouterParam(event, 'name');

  return `Hello, ${name}!`;
});
