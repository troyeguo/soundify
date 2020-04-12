// 处理github返回的auth code
const axios = require("axios");
const config = require("../config");
const {
  client_id,
  client_secret,
  request_token_url,
  redirect_uri,
} = config.google;

module.exports = (server) => {
  server.use(async (ctx, next) => {
    // console.log(ctx.request.query.code);
    if (ctx.request.query.code) {
      // console.log("test");
      const { code } = ctx.request.query;
      if (code) {
        // 获取Oauth鉴权信息
        const result = await axios.post(`${request_token_url}code=${code}&
client_id=${client_id}&
client_secret=${client_secret}&
redirect_uri=${redirect_uri}&
grant_type=authorization_code`);
        // github 可能会在status是200的情况下返回error信息
        console.log(result);
        if (result.status === 200 && result.data && !result.data.error) {
          ctx.session.githubAuth = result.data;
          const { access_token, token_type } = result.data;
          // 获取用户信息
          const { data: userInfo } = await axios({
            method: "GET",
            url: github_user_url,
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          });

          ctx.session.userInfo = userInfo;
          // 重定向到登录前的页面或首页
          ctx.redirect((ctx.session && ctx.session.urlBeforeOAuth) || "/");
          ctx.session.urlBeforeOAuth = "";
        } else {
          ctx.body = `request token failed ${result.data && result.data.error}`;
        }
      } else {
        ctx.body = "code not exist";
      }
    } else {
      await next();
    }
  });

  // 登出逻辑
  server.use(async (ctx, next) => {
    const { path, method } = ctx;
    if (path === "/logout" && method === "POST") {
      ctx.session = null;
      ctx.body = "logout success";
    } else {
      await next();
    }
  });

  // 在进行auth之前 记录请求时的页面url
  server.use(async (ctx, next) => {
    const { path, method } = ctx;
    if (path === "/prepare-auth" && method === "GET") {
      const { url } = ctx.query;
      //存储 url
      ctx.session.urlBeforeOAuth = url;
      //跳转授权重定向 维持OAuth之前得页面访问
      ctx.redirect(config.OAUTH_URL);
    } else {
      await next();
    }
  });
};
