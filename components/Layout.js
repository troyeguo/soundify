import React, { Component } from "react";
import Router, { withRouter } from "next/router";
import Sidebar from "./Sidebar";
import Player from "./Player";
import * as actionTypes from "../redux/action";
import $axios from "../$axios";
import { connect } from "react-redux";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];

class layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchRecentlyPlayed({ limit: 12 });
  }
  render() {
    console.log(this.props.recently_played, "recently_played");
    return (
      <div className="layout">
        <Sidebar />
        <div>{this.props.children}</div>
        <Player />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.current_user,
    backgroundImage: state.backgroundImage,
    recently_played: state.recently_played,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: actionTypes.SET_USER, user }),
    fetchRecentlyPlayed: (options) =>
      dispatch(actionTypes.fetchRecentlyPlayed(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(layout));
