import React, { Component } from "react";
import styles from "../styles/home.module.css";
import { UserTracks } from "react-spotify-api";
import * as actionTypes from "../redux/action";
import { connect } from "react-redux";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, hoverIndex: null };
  }
  handleClick = (index) => {
    this.setState({ index });
  };
  handleIndex = (index) => {
    this.setState({ hoverIndex: index });
  };
  playSongHandler = (track, playlist) => {
    console.log(track, "track", playlist, "playlist");
    if (playlist) {
      let uris;
      if (!track) {
        uris = JSON.stringify({
          context_uri: playlist.uri,
        });
      } else {
        uris = JSON.stringify({
          context_uri: track.album.uri,
          offset: {
            uri: track.uri,
          },
        });
      }
      console.log(uris);
      this.props.playSong(uris);
    }
  };
  render() {
    return (
      <div>
        <div className={styles.coverParent}>
          <div
            className={styles.contentCoverContainer}
            onClick={() => {
              this.handleClick(0);
            }}
          >
            <div className={styles.contentTitle}>All Songs</div>
            {this.state.index === 0 ? (
              <div className={styles.contentSelector}></div>
            ) : null}
          </div>
          <div
            className={styles.contentCoverContainer}
            onClick={() => {
              this.handleClick(1);
            }}
          >
            <div className={styles.contentTitle}>Recently Played</div>
            {this.state.index === 1 ? (
              <div className={styles.contentSelector}></div>
            ) : null}
          </div>
        </div>
        <div>
          <div className={styles.contentLine}></div>
          {
            <ul className={styles.contentListContainer}>
              <div className={styles.songListContainer}>
                {this.state.index === 1 ? (
                  <div>
                    {this.props.tracks.map((track, index) => (
                      <li
                        key={track.played_at}
                        className={styles.contentList}
                        onMouseOver={() => {
                          this.handleIndex(index);
                        }}
                        onMouseLeave={() => {
                          this.handleIndex(-1);
                        }}
                      >
                        <div className={styles.indexName}>{index + 1}</div>
                        {this.state.hoverIndex === index ? (
                          <img
                            src="/icons/play.svg"
                            alt=""
                            className={styles.listPlayIcon}
                            onClick={() =>
                              this.playSongHandler(track.track, "test")
                            }
                          />
                        ) : (
                          <img
                            src="/icons/favorite.svg"
                            alt=""
                            className={styles.favoriteIcon}
                          />
                        )}
                        <div className={styles.trackName}>
                          {track.track.name}
                        </div>
                        <div className={styles.trackArtist}>
                          {track.track.artists[0].name}
                        </div>
                        <div className={styles.trackAlbum}>
                          {track.track.album.name}
                        </div>

                        <img
                          src="/icons/more_dot.svg"
                          alt=""
                          className={styles.moreDot}
                        />
                      </li>
                    ))}
                  </div>
                ) : (
                  <UserTracks>
                    {(tracks) =>
                      tracks ? (
                        <div>
                          {tracks.items.map((track, index) => (
                            <li
                              key={track.track.id}
                              className={styles.contentList}
                              onMouseOver={() => {
                                this.handleIndex(index);
                              }}
                              onMouseLeave={() => {
                                this.handleIndex(-1);
                              }}
                            >
                              <div className={styles.indexName}>
                                {index + 1}
                              </div>
                              {this.state.hoverIndex === index ? (
                                <img
                                  src="/icons/play.svg"
                                  alt=""
                                  className={styles.listPlayIcon}
                                  onClick={() =>
                                    this.playSongHandler(track.track, "test")
                                  }
                                />
                              ) : (
                                <img
                                  src="/icons/favorite.svg"
                                  alt=""
                                  className={styles.favoriteIcon}
                                />
                              )}

                              <div className={styles.trackName}>
                                {track.track.name}
                              </div>
                              <div className={styles.trackArtist}>
                                {track.track.artists[0].name}
                              </div>
                              <div className={styles.trackAlbum}>
                                {track.track.album.name}
                              </div>

                              <img
                                src="/icons/more_dot.svg"
                                alt=""
                                className={styles.moreDot}
                              />
                            </li>
                          ))}
                        </div>
                      ) : null
                    }
                  </UserTracks>
                )}
              </div>
            </ul>
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.current_user,
    currentlyPlaying: state.currently_playing,
    isPlaying: state.isPlaying,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (uris) => dispatch(actionTypes.playSong(uris)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
