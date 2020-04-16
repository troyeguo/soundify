import React, { Component } from "react";
import { withRouter } from "next/router";
import Sidebar from "./sidebar";
import Player from "./player";
import * as actionTypes from "../redux/action/index";
import { connect } from "react-redux";

class layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchRecentlyPlayed({ limit: 12 });
  }
  render() {
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: actionTypes.SET_USER, user }),
    fetchRecentlyPlayed: (options) =>
      dispatch(actionTypes.fetchRecentlyPlayed(options)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(layout));
