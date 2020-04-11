import { withRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Content from "../components/Content";
import checkAuth from "../utils/checkGoogleAuth";
import { useEffect } from "react";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const AppLayout = ({ children, router }) => {
  useEffect(() => {
    // window &&
    //   checkAuth
    //     .then(() => {
    //       console.log("auth checked");
    //     })
    //     .then(() => store.dispatch(restoreApp()))
    //     .catch((error) => console.log("Fail to boot with error: ", error));
    // return () => {
    //   console.log("clean up");
    // };
    console.log(window);
  }, []);
  return (
    <div className="layout">
      <Sidebar />
      <Content />
      <Player />
    </div>
  );
};

export default withRouter(AppLayout);
