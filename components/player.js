import { withRouter } from "next/router";

import songList from "../mock/songs";

const Player = ({ children, router }) => {
  return (
    <div className="player">
      <div className="player-header">
        <img className="add" src="/add.svg" alt="" />
        <div>
          <img className="avatar" src="/avatar.jpeg" alt="" />
          <span className="nickname">Troye Guo</span>
          <span className="triangle"></span>
        </div>
      </div>
      <div className="player-cover-container">
        <img className="player-cover" src="/album.jpg" alt="" />
        <div className="player-control">
          <img
            src="/favorite.svg"
            alt=""
            style={{ position: "absolute", left: 90, top: 149 }}
          />
          <img
            src="/add_to_playlist.svg"
            alt=""
            style={{ position: "absolute", left: 90, top: 34 }}
          />
          <img
            src="/next.svg"
            alt=""
            style={{ position: "absolute", left: 149, top: 91 }}
          />
          <img
            src="/prev.svg"
            alt=""
            style={{ position: "absolute", left: 34, top: 91 }}
          />
          <img
            src="/play.svg"
            alt=""
            style={{ position: "absolute", left: 76, top: 76 }}
          />
        </div>
      </div>
      <div className="music-info">
        <div className="song-name">You Need to Calm Down</div>
        <div className="artist-name">Taylor Swift</div>
      </div>
      <div className="player-button">
        <img src="/shuffle.svg" alt="" />
        <span className="player-button-text">Shuffle</span>
      </div>

      <div className="player-next">
        <div className="next-text">Next</div>
        <div className="next-list-container">
          <ul className="next-list">
            {songList().map((item) => {
              return (
                <li key={item.id} className="next-list-item">
                  <div className="next-song">{item.song}</div>
                  <p
                    className="next-artist-name"
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "rgba(61, 63, 134, 0.61)",
                    }}
                  >
                    {item.artist}
                  </p>
                  <img src="/play.svg" alt="" className="next-button" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <style jsx>
        {`
          .player {
            position: absolute;
            right: 0;
            top: 0;
            width: 335px;
            height: 100%;
          }
          .player-header {
            display: flex;
            justify-content: center;
          }
          .add {
            height: 31px;
            margin-top: 13px;
          }
          .avatar {
            width: 36px;
            height: 36px;
            background: rgba(0, 0, 0, 0);
            border-radius: 50%;
            opacity: 1;
            margin-left: 35px;
          }
          .triangle {
            width: 0;
            height: 0;
            border: 5px solid transparent;
            border-top-color: rgba(61, 63, 134, 1);
            position: relative;
            top: 0px;
            left: 10px;
          }
          .nickname {
            font-size: 14px;
            line-height: 80px;
            color: rgba(61, 63, 134, 1);
            margin-left: 12px;
            position: relative;
            bottom: 12px;
          }
          .player-cover-container {
            height: 210px;
          }
          .player-cover {
            width: 204px;
            height: 204px;
            background: rgba(0, 0, 0, 0);
            box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.15);
            opacity: 1;
            border-radius: 102px;
            position: relative;
            left: 70px;
          }
          .player-control {
            width: 204px;
            height: 204px;
            background: rgba(255, 255, 255, 0.66);
            border: 5px solid #4b4fd3;
            position: relative;
            bottom: 211px;
            left: 65px;
            border-radius: 106px;
            display: none;
          }
          .song-name {
            font-size: 18px;
            font-family: Roboto;
            font-weight: bold;
            line-height: 30px;
            color: rgba(70, 73, 90, 1);
            text-align: center;
          }
          .artist-name {
            font-size: 15px;
            line-height: 17px;
            color: rgba(70, 73, 90, 1);
            opacity: 0.6;
            text-align: center;
          }
          .player-button {
            width: 109px;
            height: 38px;
            background: rgba(75, 79, 211, 1);
            opacity: 1;
            border-radius: 25px;
            margin-left: 115px;
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .player-button-text {
            color: white;
            margin-left: 5px;
          }
          .player-next {
            margin-top: 10px;
            height: 150px;
          }
          .next-text {
            text-align: center;
            font-size: 16px;
            font-family: Segoe UI;
            font-weight: 600;
            line-height: 17px;
            color: rgba(61, 63, 134, 1);
            opacity: 1;
          }
          .next-list-container {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .next-list {
            width: 100%;
            height: 100%;
            overflow-y: scroll;
            padding-right: 17px;
            box-sizing: content-box;
          }
          .next-list-item {
            position: relative;
            margin-top: 10px;
            margin-left: 30px;
          }
          .next-button {
            width: 33px;
            height: 33px;
            opacity: 0.63;
            position: absolute;
            left: 240px;
            bottom: 5px;
          }
          .next-song {
            font-family: Segoe UI;
            font-weight: 600;
            line-height: 20px;
            color: rgba(61, 63, 134, 1);
            opacity: 1;
          }
          .next-artist-name: {
            font-size: 14px;
            font-family: Segoe UI;
            font-weight: bold;
            line-height: 16px;
            color: rgba(61, 63, 134, 1);
            opacity: 0.39;
          }
        `}
      </style>
    </div>
  );
};

export default withRouter(Player);
