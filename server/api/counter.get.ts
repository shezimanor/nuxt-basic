export default defineEventHandler((event) => {
  // 取得發送請求中夾帶的 Cookie 'my_counter'
  let myCounter = getCookie(event, 'my_counter');

  let num = myCounter ? parseInt(myCounter, 10) : 0;

  num += 1;

  // 更新 Cookie 'my_counter'
  setCookie(event, 'my_counter', `${num}`);

  return { myCounter: `${num}` };
});
