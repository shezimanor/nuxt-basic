import jwt from 'jsonwebtoken';

export default defineEventHandler((event) => {
  // 使用 getCookie 來取得 access_token 這個 Cookie
  const jwtToken = getCookie(event, 'access_token');
  const runtimeConfig = useRuntimeConfig();

  if (!jwtToken) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    });
  }

  try {
    // 使用 jwt.verify 核實 JWT Token 是否正確
    const userProfile = jwt.verify(jwtToken, runtimeConfig.jwtSecret);

    // userProfile 為驗證成功後且解析後的合法使用者資料
    return userProfile;
  } catch {
    // 發生錯誤，回傳 401 的狀態碼，來表示沒有權限訪問這支 API
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    });
  }
});
