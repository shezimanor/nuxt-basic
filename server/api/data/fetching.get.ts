export type User1 = {
  name: string;
  gender: string;
  email: string;
};

export default defineEventHandler(async (event) => {
  console.log('接收到 API 的請求 /api/data/fetching');

  return new Promise<User1>((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'Ryan',
        gender: 'Male',
        email: 'ryanchen2024@gmail.com'
      });
    }, 1000);
  });
});
