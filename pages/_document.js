/* eslint react/no-danger: 0 */
import React from "react";
import PropTypes from "prop-types";
import { get } from "lodash/object";
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    // Store initial props from request data that we need to use again on
    // the client. See:
    // https://github.com/zeit/next.js/issues/3043#issuecomment-334521241
    // https://github.com/zeit/next.js/issues/2252#issuecomment-353992669
    // Alternatively, you could use a store, like Redux.

    return (
      <Html>
        <Head>
          <script src="https://sdk.scdn.co/spotify-player.js"></script>
          <script>{}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
