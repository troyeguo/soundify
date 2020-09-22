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
console.log(modes[mode].redirect_uri);

var client_id = process.env.CLIENT_ID; // Your client id

module.exports = (req, res) => {
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
      })
  );
};
