import React, { Component } from "react";
import * as actionTypes from "../redux/action/index";
import $axios from "../$axios";
import { connect } from "react-redux";
import { SpotifyApiContext, SpotifyApiAxiosContext } from "react-spotify-api";
import PlaylistBody from "../components/Playlists";

class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
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
    console.log(this.props.recently_played, "user");

    return (
      <div className="content">
        {this.state.token ? (
          <SpotifyApiAxiosContext.Provider value={$axios}>
            <SpotifyApiContext.Provider value={this.state.token}>
              <div className="content-header">Playlist</div>
              <PlaylistBody />
            </SpotifyApiContext.Provider>
          </SpotifyApiAxiosContext.Provider>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: actionTypes.SET_USER, user }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
