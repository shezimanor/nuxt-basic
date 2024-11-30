export default defineEventHandler((event) => {
  // Sample query /api/query?foo=bar&baz=qux
  const query = getQuery(event);

  return { a: query.foo, b: query.baz };
});
