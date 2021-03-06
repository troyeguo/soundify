import React, { Component } from "react";
import * as actionTypes from "../redux/action/index";
import $axios from "../lib/$axios";
import { connect } from "react-redux";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
import DiscoverBody from "../components/Discover";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null, index: 0 };
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
    // console.log(this.props, "cdm");
  }
  handleIndex = (index) => {
    this.setState({ index });
  };
  render() {
    // console.log(this.props, "user");

    return (
      <div className="content">
        {this.state.token ? (
          <SpotifyApiAxiosContext.Provider value={$axios}>
            <SpotifyApiContext.Provider value={this.state.token}>
              <div className="content-header">Discover</div>
              <DiscoverBody />
            </SpotifyApiContext.Provider>
          </SpotifyApiAxiosContext.Provider>
        ) : null}
      </div>
    );
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
    fetchRecentlyPlayed: (options) =>
      dispatch(actionTypes.fetchRecentlyPlayed(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
