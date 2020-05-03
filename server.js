const next = require("next");
var express = require("express"); // Express web server framework
var request = require("request"); // "Request" library
var querystring = require("querystring");
const url = require("url");
var cookieParser = require("cookie-parser");
var dotenv = require("dotenv");
var cors = require("cors");
dotenv.config();
const atob = require("atob");
const { createServer } = require("http");
const { join } = require("path");
const { parse } = require("url");
const dev = process.env.NODE_ENV !== "production";
console.log(dev, "dev");
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
var mode = process.env.NODE_ENV === "development" ? "dev" : "prod";
var modes = {
  prod: {
    baseURL: process.env.PROD_BASE_URL,
    redirect_uri: process.env.PROD_REDIRECT_URI,
  },
  dev: {
    baseURL: process.env.DEV_BASE_URL,
    redirect_uri: process.env.DEV_REDIRECT_URI,
  },
};
console.log(modes[mode].redirect_uri);

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = "spotify_auth_state";
const PORT = process.env.PORT || 3000;
// 给node全局增加atob方法
global.atob = atob;

// 等到pages目录编译完成后启动服务响应请求
nextApp.prepare().then(() => {
  var app = express();

  app
    .use(express.static(__dirname + "/public"))
    .use(cors())
    .use(cookieParser());

  app.get("/login", function (req, res) {
    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope =
      "user-read-private user-read-email playlist-modify-private playlist-read-private playlist-read-collaborative playlist-modify-public user-follow-modify user-follow-read app-remote-control streaming user-read-currently-playing user-modify-playback-state user-read-playback-state user-library-modify user-library-read user-read-recently-played user-top-read";
    res.redirect(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: client_id,
          scope: scope,
          redirect_uri: modes[mode].redirect_uri,
          state: state,
        })
    );
  });

  app.post("/refresh", function (req, res) {
    // console.log(req, "req");
    req.on("data", function (data) {
      var token = JSON.parse(data).refresh_token;
      // console.log(token, "server refresh");
      var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        form: {
          refresh_token: token,
          grant_type: "refresh_token",
        },
        headers: {
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
        json: true,
      };
      request.post(authOptions, function (err, response, body) {
        // console.log(err, response, body, "err, response, body");
        res.json(response.body);
      });
    });
  });
  app.post("/alipay", (req, res) => {
    res.send({ verified: true });
  });
  app.get("/callback", function (req, res) {
    // your application requests refresh and access tokens
    // after checking the state parameter
    // console.log(req.query);
    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
      res.redirect(
        "/#" +
          querystring.stringify({
            error: "state_mismatch",
          })
      );
    } else {
      res.clearCookie(stateKey);
      var authOptions = {
        url: "https://accounts.spotify.com/api/token",
        form: {
          code: code,
          redirect_uri: modes[mode].redirect_uri,
          grant_type: "authorization_code",
        },
        headers: {
          Authorization:
            "Basic " +
            new Buffer(client_id + ":" + client_secret).toString("base64"),
        },
        json: true,
      };

      request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var access_token = body.access_token,
            refresh_token = body.refresh_token;

          var options = {
            url: "https://api.spotify.com/v1/me",
            headers: { Authorization: "Bearer " + access_token },
            json: true,
          };

          // use the access token to access the Spotify Web API
          request.get(options, function (error, response, body) {
            // console.log(body);
          });

          // we can also pass the token to the browser to make requests from there
          res.redirect(
            modes[mode].baseURL +
              "/#" +
              querystring.stringify({
                access_token: access_token,
                refresh_token: refresh_token,
              })
          );
        } else {
          res.redirect(
            modes[mode].baseURL +
              "/#" +
              querystring.stringify({
                error: "invalid_token",
              })
          );
        }
      });
    }
  });

  app.get("/refresh_token", function (req, res) {
    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64"),
      },
      form: {
        grant_type: "refresh_token",
        refresh_token: refresh_token,
      },
      json: true,
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token;
        res.send({
          access_token: access_token,
        });
      }
    });
  });

  app.all("*", (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname } = parsedUrl;
    if (pathname === "/sw.js" || pathname.startsWith("/workbox-")) {
      const filePath = join(__dirname, ".next", pathname);
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  });

  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
});

// router.get('/a/:id', async (ctx) => {
//     const { id } = ctx.params
//     await handle(ctx.req, ctx.res, {
//         pathname: '/a',
//         query: {
//             id,
//         },
//     })
//     ctx.respond = false
// })
