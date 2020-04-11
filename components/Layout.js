import { withRouter } from "next/router";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Content from "./Content";
import checkAuth from "../utils/checkGoogleAuth";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const AppLayout = ({ children, router }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div>{children}</div>
      <Player />
    </div>
  );
};

export default withRouter(AppLayout);
