import React, { Component } from "react";
import Router, { withRouter } from "next/router";
import * as actionTypes from "../redux/action/index";
import axios from "axios";
import { connect } from "react-redux";
import Login from "../components/Login";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
    this.token = null;
  }
  componentDidMount() {
    this.setState({
      token: localStorage.getItem("react-spotify-access-token"),
    });
    let newUser = localStorage.getItem("newUser");
    if (newUser) {
      this.props.setUser(JSON.parse(newUser));
    }
    this.setState(
      {
        token: localStorage.getItem("react-spotify-access-token"),
      },
      () => {
        // console.log(this.state.token, "token");
        if (
          this.state.token !== undefined &&
          this.state.token !== "undefined" &&
          this.state.token
        ) {
          Router.push("/Home");
        }
      }
    );

    // console.log(this.props, "cdm");
    let params = this.getHashParams();

    // If access token doesn't exist in has params, try to take it from local storage
    if (params.access_token === "undefined") {
      const currentAccessToken = localStorage.getItem(
        "react-spotify-access-token"
      );

      if (currentAccessToken) {
        params.access_token = currentAccessToken;
      }
    }
    // console.log("Params after", params);
    if (
      params.access_token &&
      params.access_token !== undefined &&
      params.access_token !== "undefined"
    ) {
      localStorage.setItem("react-spotify-access-token", params.access_token);
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${params.access_token}`,
          },
        })
        .then(({ data }) => {
          console.log(data, "data");
          if (params.refresh_token) {
            localStorage.setItem(
              "react-spotify-refresh-token",
              params.refresh_token
            );
          }
          let newUser = {
            access_token: params.access_token,
            displayName: data.display_name,
            email: data.email,
            type: data.type,
            country: data.country,
            product: data.product,
            avatar: data.images[0].url,
          };
          console.log(newUser, "newUser");
          this.logInUserAndGetInfo(newUser);
        })
        .catch((err) => {
          console.log(err, "fgjxfjxf");
          // 401 = Unauthorized - the access token is incorrect (expired)
          if (err || err.response.status === 401) {
            // Check if refresh token exists
            const refreshToken = localStorage.getItem(
              "react-spotify-refresh-token"
            );
            if (refreshToken) {
              // Send refresh token to server to acquire a new access token
              axios
                .post("http://localhost:3000/refresh", {
                  data: JSON.stringify({
                    refresh_token: refreshToken,
                  }),
                })
                .then((res) => {
                  console.log("Refresh token response -", res.data);
                  axios
                    .get("https://api.spotify.com/v1/me", {
                      headers: {
                        Authorization: `Bearer ${res.data.access_token}`,
                      },
                    })
                    .then(({ data }) => {
                      localStorage.setItem(
                        "react-spotify-access-token",
                        res.data.access_token
                      );

                      let newUser = {
                        access_token: params.access_token,
                        displayName: data.display_name,
                        email: data.email,
                        type: data.type,
                        country: data.country,
                        product: data.product,
                        avatar: data.images[0].url,
                      };
                      this.logInUserAndGetInfo(newUser);
                    });
                })
                .catch((e) => {
                  console.log("Refresh token error -", e);
                })
                .finally(() => {
                  this.setState({ loading: false });
                });
            } else {
              // Refresh token doesn't exist, the user is shown a 'login with Spotify button'
              this.setState({ loading: false });
            }
          }
        });
    } else {
      // The user is shown a 'login with Spotify button'
      this.setState({ loading: false });
    }
  }
  logInUserAndGetInfo = (newUser) => {
    console.log("LOG IN", newUser);
    // console.log(this.props);
    localStorage.setItem("newUser", JSON.stringify(newUser));
    this.props.setUser(newUser); // set user in redux state
    console.log("test");
    Router.push("/Home");
  };

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    console.log(hashParams, "hashParams");
    return hashParams;
  }
  render() {
    // console.log(this.props, "user");

    return <Login />;
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.current_user,
    backgroundImage: state.backgroundImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: actionTypes.SET_USER, user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index));
