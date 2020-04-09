import { withRouter } from "next/router";
import { useState } from "react";
import songList from "../mock/songs";
import { useSelector, useDispatch } from "react-redux";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const Content = ({ children, router }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  return (
    <div>
      <div className="content">
        <div className="content-header">{menuList[currentIndex]}</div>
        <ul className="content-cover-list">
          {songList().map((item, index) => {
            return (
              <li key={item.id} className="content-cover-container">
                <img src={item.cover} alt="" className="content-cover" />
                <div className="content-title">{item.album}</div>
                {currentContent === index ? (
                  <div className="content-selector"></div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <img src="/more.svg" alt="" style={{ marginTop: "55px" }} />
        <div className="content-line"></div>

        <ul className="content-list-container">
          <img
            src="/play_with_shadow.svg"
            alt=""
            className="play-button-shadow"
          />
          {songList().map((item, index) => {
            return (
              <li key={item.id} className="content-list">
                <div>{index + 1}</div>
                <img src="/favorite.svg" alt="" />
                <div>{item.song}</div>
                <img
                  src="/play.svg"
                  alt=""
                  style={{ opacity: 0.61, width: 30 }}
                />

                <div>{item.artist}</div>
                <div>{item.album}</div>
                <img src="/more_dot.svg" alt="" style={{ width: 20 }} />
              </li>
            );
          })}
        </ul>
      </div>
      <style jsx>
        {`
          .content {
            position: absolute;
            left: 179px;
            top: 0;
            width: calc(100% - 554px);
            height: 100%;
            margin: 20px;
          }
          .content-header {
            width: 158px;
            height: 53px;
            font-size: 45px;
            font-family: Helvetica;
            font-weight: bold;
            line-height: 53px;
            color: rgba(69, 69, 69, 1);
            opacity: 1;
          }

          .content-cover-container {
            float: left;
            margin: 20px 50px 0px 0px;
          }
          .content-title {
            font-size: 18px;
            font-family: Segoe UI;
            font-weight: 600;
            line-height: 24px;
            color: rgba(70, 73, 90, 1);
            opacity: 0.58;
            text-align: center;
          }
          .content-cover {
            background: rgba(0, 0, 0, 0);
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
            opacity: 1;
            border-radius: 3px;
            width: 107px;
            height: 107px;
          }
          .content-selector {
            width: 100%;
            height: 5px;
            background: rgba(75, 79, 211, 1);
            opacity: 1;
          }
          .content-line {
            width: 735px;
            height: 0px;
            border: 1px solid rgba(0, 0, 0, 1);
            opacity: 0.09;
            float: left;
          }
          .play-button-shadow {
            position: absolute;
            right: -20px;
            top: -30px;
          }
          .content-list-container {
            float: left;
            width: 100%;
            position: relative;
          }
          .content-list {
            font-size: 16px;
            font-family: Segoe UI;
            font-weight: 600;
            line-height: 40px;
            color: rgba(61, 63, 134, 1);
            opacity: 1;
            margin: 7px;
            display: flex;
            justify-content: space-between;
            width: 93%;
          }
          .content-list div {
            float: left;
            margin-right: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(Content);
