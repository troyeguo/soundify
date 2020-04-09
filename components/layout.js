import { withRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import songList from "../mock/songs";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./sidebar";
import Player from "./player";
import Content from "./content";
//   import { logout } from '../store/store'
import { logout } from "../redux/reducer";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const AppLayout = ({ children, router }) => {
  const { query: { query = "" } = {} } = router;
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);
  const [search, setSearch] = useState(query);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleOnSearch = () => {
    router.push(`/search?query=${search}`);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const UserDropDown = (
    <div>
      <div onClick={handleLogout}>登出</div>
    </div>
  );

  return (
    <div className="layout">
      <Sidebar />
      <Content />

      <Player />
      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          html,
          body,
          div,
          span,
          applet,
          object,
          iframe,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p,
          blockquote,
          pre,
          a,
          abbr,
          acronym,
          address,
          big,
          cite,
          code,
          del,
          dfn,
          em,
          img,
          ins,
          kbd,
          q,
          s,
          samp,
          small,
          strike,
          strong,
          sub,
          sup,
          tt,
          var,
          b,
          u,
          i,
          center,
          dl,
          dt,
          dd,
          ol,
          ul,
          li,
          fieldset,
          form,
          label,
          legend,
          table,
          caption,
          tbody,
          tfoot,
          thead,
          tr,
          th,
          td,
          article,
          aside,
          canvas,
          details,
          embed,
          figure,
          figcaption,
          footer,
          header,
          hgroup,
          menu,
          nav,
          output,
          ruby,
          section,
          summary,
          time,
          mark,
          audio,
          video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }

          /* HTML5 display-role reset for older browsers */
          article,
          aside,
          details,
          figcaption,
          figure,
          footer,
          header,
          hgroup,
          menu,
          nav,
          section {
            display: block;
          }

          body {
            line-height: 1;
          }

          ol,
          ul {
            list-style: none;
          }

          blockquote,
          q {
            quotes: none;
          }

          blockquote:before,
          blockquote:after,
          q:before,
          q:after {
            content: "";
            content: none;
          }

          table {
            border-collapse: collapse;
            border-spacing: 0;
          }

          a {
            text-decoration: none;
            -webkit-backface-visibility: hidden;
          }

          li {
            list-style: none;
          }

          html,
          body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            user-select: none;
          }
        `}
      </style>
      <style jsx>{``}</style>
    </div>
  );
};

export default withRouter(AppLayout);
