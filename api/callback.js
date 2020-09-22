var request = require("request"); // "Request" library
var querystring = require("querystring");
var dotenv = require("dotenv");
dotenv.config();

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
var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret
var stateKey = "spotify_auth_state";

module.exports = (req, res) => {
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
};
