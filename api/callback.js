const request = require("request"); // "Request" library
const querystring = require("querystring");
const dotenv = require("dotenv");
dotenv.config();

const mode = process.env.NODE_ENV === "development" ? "dev" : "prod";
const modes = {
  prod: {
    baseURL: process.env.PROD_BASE_URL,
    redirect_uri: process.env.PROD_REDIRECT_URI,
    home_uri: process.env.PROD_HOME_URL,
  },
  dev: {
    baseURL: process.env.DEV_BASE_URL,
    redirect_uri: process.env.DEV_REDIRECT_URI,
    home_uri: process.env.DEV_HOME_URL,
  },
};
const client_id = process.env.CLIENT_ID; // Your client id
const client_secret = process.env.CLIENT_SECRET; // Your secret

module.exports = (req, res) => {
  const code = req.query.code || null;

  const authOptions = {
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
      const access_token = body.access_token,
        refresh_token = body.refresh_token;

      const options = {
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
        modes[mode].home_uri +
          "/#" +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token,
          })
      );
    } else {
      res.redirect(
        modes[mode].home_uri +
          "/#" +
          querystring.stringify({
            error: "invalid_token",
          })
      );
    }
  });
};
