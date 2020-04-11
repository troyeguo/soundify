// Your Client ID can be retrieved from your project in the Google
// Developer Console, https://console.developers.google.com
var CLIENT_ID =
  "60656735094-gs2cu005rnamqcas3rvi3pdcoin98bpl.apps.googleusercontent.com";
var SCOPES = ["https://www.googleapis.com/auth/drive"];
export default new Promise((resolve, reject) => {
  /**
   * Check if current user has authorized this application.
   */
  console.log(gapi);
  gapi.load("auth", () => {
    gapi.auth.authorize(
      {
        client_id: CLIENT_ID,
        scope: SCOPES.join(" "),
        immediate: true,
      },
      handleAuthResult
    );
  });

  function doAuth() {
    gapi.auth.authorize(
      { client_id: CLIENT_ID, scope: SCOPES, immediate: false },
      handleAuthResult
    );
  }

  function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
      gapi.client.load("drive", "v3").then(resolve, reject);
    } else {
      if (authResult.error == "immediate_failed") {
        doAuth();
      } else {
        reject(authResult);
      }
    }
  }
});
