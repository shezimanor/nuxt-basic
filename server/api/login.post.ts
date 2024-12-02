import jwt from 'jsonwebtoken';

type UserPayload = {
  username: string;
  password: string;
};

export default defineEventHandler(async (event) => {
  const body = await readBody<UserPayload>(event);
  const runtimeConfig = useRuntimeConfig();

  // 這裡可以比對是否為資料庫的帳號，這裡簡化撰寫
  if (body.username !== 'ryan') {
    throw createError({
      statusCode: 400,
      statusMessage: '登入失敗'
    });
  }

  // 建構 JWT 所需要的 Payload(這個會被 Base64 解碼，所以不要輕易地放置任何機密資訊)
  const jwtTokenPayload: jwt.JwtPayload = {
    id: 1,
    username: 'ryan',
    nickname: 'RyanDev',
    email: 'ryan2024@gmail.com'
  };

  // Cookie Options (以下的到期日是相同的日期)
  const maxAge = 60 * 60 * 24 * 7; // 7天
  const expires = Math.floor(Date.now() / 1000) + maxAge; // 設定為 7 天後的 UNIX Timestamp

  // 組成 JWT Token 簽發物件
  const jwtToken = jwt.sign(
    {
      exp: expires,
      data: jwtTokenPayload
    },
    runtimeConfig.jwtSecret // 加密用的密鑰(我寫在.env)
  );

  // 將 JWT Token 設定在名為 access_token 的 Cookie 上
  setCookie(event, 'access_token', jwtToken, {
    maxAge,
    expires: new Date(expires * 1000), // 和 jwt.sign 用的格式不一樣
    secure: true, // 確保 Cookie 不會被攔截或嗅探
    httpOnly: true, // 確保 Cookie 不會被 JS 存取
    path: '/'
  });

  return 'ok';
});
