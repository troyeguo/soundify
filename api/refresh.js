var dotenv = require("dotenv");
dotenv.config();

var client_id = process.env.CLIENT_ID; // Your client id
var client_secret = process.env.CLIENT_SECRET; // Your secret

module.exports = (req, res) => {
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
};
