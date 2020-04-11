import { withRouter } from "next/router";

import songList from "../mock/songs";
import styles from "../styles/player.module.css";
const Player = ({ children, router }) => {
  return (
    <div className={styles.player}>
      <div className={styles.playerHeader}>
        <img className={styles.add} src="/icons/add.svg" alt="" />
        <div>
          <img className={styles.avatar} src="/images/avatar.jpeg" alt="" />
          <span className={styles.nickname}>Troye Guo</span>
          <span className={styles.triangle}></span>
        </div>
      </div>
      <div className={styles.playerCoverContainer}>
        <img className={styles.playerCover} src="/images/album.jpg" alt="" />
        <div className={styles.playerControl}>
          <img
            src="/icons/favorite.svg"
            alt=""
            style={{ position: "absolute", left: 90, top: 149 }}
          />
          <img
            src="/icons/add_to_playlist.svg"
            alt=""
            style={{ position: "absolute", left: 90, top: 34 }}
          />
          <img
            src="/icons/next.svg"
            alt=""
            style={{ position: "absolute", left: 149, top: 91 }}
          />
          <img
            src="/icons/prev.svg"
            alt=""
            style={{ position: "absolute", left: 34, top: 91 }}
          />
          <img
            src="/icons/play.svg"
            alt=""
            style={{ position: "absolute", left: 76, top: 76 }}
          />
        </div>
      </div>
      <div className={styles.musicInfo}>
        <div className={styles.songName}>You Need to Calm Down</div>
        <div className={styles.artistName}>Taylor Swift</div>
      </div>
      <div className={styles.playerButton}>
        <img src="/icons/shuffle.svg" alt="" />
        <span className={styles.playerButtonText}>Shuffle</span>
      </div>

      <div className={styles.playerNext}>
        <div className={styles.nextText}>Next</div>
        <div className={styles.nextListContainer}>
          <ul className={styles.nextList}>
            {songList().map((item) => {
              return (
                <li key={item.id} className={styles.nextListItem}>
                  <div className={styles.nextSong}>{item.song}</div>
                  <p
                    className={styles.nextArtistName}
                    style={{
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "rgba(61, 63, 134, 0.61)",
                    }}
                  >
                    {item.artist}
                  </p>
                  <img
                    src="/icons/play.svg"
                    alt=""
                    className={styles.nextButton}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Player);
