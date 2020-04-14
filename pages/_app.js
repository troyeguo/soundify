import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withRedux from "../lib/redux";
import Layout from "../components/Layout";
import "../styles/reset.css";
import "../styles/global.css";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
class Myapp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          {/* 把pageProps解构后传递给组件 */}
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default withRedux(Myapp);
