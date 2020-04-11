import { withRouter } from "next/router";
import { useState } from "react";
import songList from "../mock/songs";
import styles from "../styles/content.module.css";
import { useSelector, useDispatch } from "react-redux";
const menuList = ["Home", "Playlist", "Album", "Artist", "Search"];
const Content = ({ children, router }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentContent, setCurrentContent] = useState(0);

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>{menuList[currentIndex]}</div>
        <ul className={styles.contentCoverList}>
          {songList().map((item, index) => {
            return (
              <li key={item.id} className={styles.contentCoverContainer}>
                <img src={item.cover} alt="" className={styles.contentCover} />
                <div className={styles.contentTitle}>{item.album}</div>
                {currentContent === index ? (
                  <div className={styles.contentSelector}></div>
                ) : null}
              </li>
            );
          })}
        </ul>
        <img src="/icons/more.svg" alt="" style={{ marginTop: "55px" }} />
        <div className={styles.contentLine}></div>

        <ul className={styles.contentListContainer}>
          <img
            src="/icons/play_with_shadow.svg"
            alt=""
            className={styles.playButtonShadow}
          />
          {songList().map((item, index) => {
            return (
              <li key={item.id} className={styles.contentList}>
                <div>{index + 1}</div>
                <img
                  src="/icons/favorite.svg"
                  alt=""
                  style={{ width: "18px" }}
                />
                <div>{item.song}</div>
                <img
                  src="/icons/play.svg"
                  alt=""
                  style={{ opacity: 0.61, width: 30 }}
                />

                <div>{item.artist}</div>
                <div>{item.album}</div>
                <img src="/icons/more_dot.svg" alt="" style={{ width: 20 }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Content);
