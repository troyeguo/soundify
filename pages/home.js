import { withRouter } from "next/router";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Content from "../components/Content";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const AppLayout = ({ children, router }) => {
  return (
    <div className="layout">
      <Sidebar />
      <Content />
      <Player />
    </div>
  );
};

export default withRouter(AppLayout);
