const withTM = require("next-transpile-modules")(["react-spotify-api"]);
const withPWA = require("next-pwa");
module.exports = withPWA(withTM());
