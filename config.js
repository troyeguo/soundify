const GOOGLE_OAUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
const SCOPE = "https://www.googleapis.com/auth/drive.readonly";
const google = {
  request_token_url: "https://oauth2.googleapis.com/token",
  client_id:
    "60656735094-gs2cu005rnamqcas3rvi3pdcoin98bpl.apps.googleusercontent.com",
  client_secret: "Zioyw4GsPJih-n7McEb_Dd9H",
  redirect_uri: "http://localhost:3000",
};
module.exports = {
  google,
  GOOGLE_OAUTH_URL,
  OAUTH_URL: `${GOOGLE_OAUTH_URL}?response_type=code&client_id=${google.client_id}&scope=${SCOPE}&redirect_uri=${google.redirect_uri}`,
};
// http://localhost:3000/#scope=https://www.googleapis.com/auth/drive.readonly&login_hint=AJDLj6JUa8yxXrhHdWRHIV0S13cAQ88kqTUMMAXz4fCSwG79h-KDAxWci6mLgAR7lh9vBqKDcnbX-H1rccSvbCVYQw3Dk5yGGQ&client_id=60656735094-gs2cu005rnamqcas3rvi3pdcoin98bpl.apps.googleusercontent.com&prompt=consent
