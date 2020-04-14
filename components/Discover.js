import React, { Component } from "react";
import styles from "../styles/discover.module.css";
import { BrowseFeatured } from "react-spotify-api";
import { connect } from "react-redux";
import { Playlist } from "react-spotify-api";
import * as actionTypes from "../redux/action";
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0, hoverIndex: -1 };
  }
  handleIndex = (index) => {
    this.setState({ currentIndex: index });
  };
  handleSongIndex = (index) => {
    this.setState({ hoverIndex: index });
  };
  handleNext = () => {
    let coverList = document.querySelector(".discover_contentCoverList__2BhJd");
    let coverItems = document.getElementsByClassName(
      "discover_contentCoverContainer__DrO25"
    );
    console.log(coverList);
    let style = window.getComputedStyle(coverList);
    let right = style.getPropertyValue("right");
    if (
      parseInt(right.substr(0, right.length - 2)) >
      (coverItems.length - 1) * 107
    ) {
      return;
    }
    let newRight = `${parseInt(right.substr(0, right.length - 2)) + 625}px`;
    coverList.setAttribute("style", `right:${newRight}`);
  };
  handlePrev = () => {
    let coverList = document.querySelector(".discover_contentCoverList__2BhJd");
    console.log(coverList);
    let style = window.getComputedStyle(coverList);
    let right = style.getPropertyValue("right");
    if (right === "0px") {
      return;
    }
    let newRight = `${parseInt(right.substr(0, right.length - 2)) - 625}px`;
    coverList.setAttribute("style", `right:${newRight}`);
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
          context_uri: playlist.uri,
          offset: {
            uri: track.uri,
          },
        });
      }
      this.props.playSong(uris);
    }
  };
  render() {
    return (
      <div>
        <div className={styles.coverParent}>
          <div className={styles.coverContainer}>
            <BrowseFeatured>
              {(playlists, loading, error) =>
                playlists ? (
                  <>
                    <div className={styles.contentCoverList}>
                      {playlists.playlists.items.map((playlist, index) => (
                        <div
                          key={index}
                          className={styles.contentCoverContainer}
                          onClick={() => {
                            this.handleIndex(index);
                          }}
                        >
                          <img
                            src={playlist.images[0].url}
                            alt=""
                            className={styles.contentCover}
                          />
                          <div className={styles.contentTitle}>
                            {playlist.name}
                          </div>
                          {this.state.currentIndex === index ? (
                            <div className={styles.contentSelector}></div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </>
                ) : null
              }
            </BrowseFeatured>
          </div>
        </div>
        <img
          src="/icons/more.svg"
          alt=""
          className={styles.nextIcon}
          onClick={() => {
            this.handleNext();
          }}
        />
        <img
          src="/icons/more.svg"
          alt=""
          className={styles.prevIcon}
          onClick={() => {
            this.handlePrev();
          }}
        />
        <BrowseFeatured>
          {(playlists, loading, error) =>
            playlists ? (
              <>
                <Playlist
                  id={playlists.playlists.items[this.state.currentIndex].id}
                >
                  {(playlist, loading, error) =>
                    playlist && (
                      <div>
                        <div className={styles.contentLine}></div>
                        <img
                          src="/icons/play_with_shadow.svg"
                          alt=""
                          className={styles.playButtonShadow}
                          onClick={() => this.playSongHandler(null, playlist)}
                        />

                        {
                          <ul className={styles.contentListContainer}>
                            <div className={styles.songListContainer}>
                              <div>
                                {playlist.tracks.items.map((track, index) => (
                                  <li
                                    key={index}
                                    className={styles.contentList}
                                    onMouseOver={() => {
                                      this.handleSongIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                      this.handleSongIndex(-1);
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
                                          this.playSongHandler(
                                            track.track,
                                            playlist
                                          )
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
                            </div>
                          </ul>
                        }
                      </div>
                    )
                  }
                </Playlist>
              </>
            ) : null
          }
        </BrowseFeatured>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    playSong: (uris) => dispatch(actionTypes.playSong(uris)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
