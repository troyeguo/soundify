import React, { Component } from "react";
import styles from "../styles/discover.module.css";
import { UserAlbums, AlbumTracks } from "react-spotify-api";
import { connect } from "react-redux";
import * as actionTypes from "../redux/action/index";
class Album extends Component {
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
    console.log(parseInt(right), Math.floor(coverItems / 4) * 596);
    if (
      parseInt(right.replace(/px/, "")) ===
      Math.ceil(coverItems.length / 4 - 1) * 596
    ) {
      return;
    }
    let newRight = `${parseInt(right) + 596}px`;
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
    let newRight = `${parseInt(right) - 596}px`;
    coverList.setAttribute("style", `right:${newRight}`);
  };
  playSongHandler = (track, album) => {
    if (track) {
      let uris;
      if (track.type === "album") {
        uris = JSON.stringify({
          context_uri: track.uri,
        });
      } else {
        uris = JSON.stringify({
          context_uri: album.uri,
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
            <UserAlbums>
              {(albums, loading, error) =>
                albums.data && (
                  <div className={styles.contentCoverList}>
                    {albums.data.items.map((album, index) => (
                      <div
                        key={album.album.id}
                        className={styles.contentCoverContainer}
                        onClick={() => {
                          this.handleIndex(index);
                        }}
                      >
                        <img
                          src={
                            album.album.images[1].url
                              ? album.album.images[1].url
                              : "/images/album.jpg"
                          }
                          alt=""
                          className={styles.contentCover}
                        />
                        <div className="album-disc"></div>
                        <div className="ablum-title">
                          <div className={styles.contentTitle}>
                            {album.album.name}
                          </div>
                          {this.state.currentIndex === index ? (
                            <div className={styles.contentSelector}></div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              }
            </UserAlbums>
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
        <UserAlbums>
          {(albums, loading, error) =>
            albums.data ? (
              <>
                <AlbumTracks
                  id={albums.data.items[this.state.currentIndex].album.id}
                >
                  {(tracks, loading, error) =>
                    tracks.data && (
                      <div>
                        <div className={styles.contentLine}></div>
                        <img
                          src="/icons/play_with_shadow.svg"
                          alt=""
                          className={styles.playButtonShadow}
                          onClick={() =>
                            this.playSongHandler(
                              albums.data.items[this.state.currentIndex].album
                            )
                          }
                        />
                        <ul className={styles.contentListContainer}>
                          <div className={styles.songListContainer}>
                            <div>
                              {tracks.data.items.map((track, index) => (
                                <li
                                  key={track.name}
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
                                          track,
                                          albums.data.items[
                                            this.state.currentIndex
                                          ].album
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
                                    {track.name}
                                  </div>
                                  <div className={styles.trackArtist}>
                                    {track.artists[0].name}
                                  </div>
                                  <div className={styles.trackAlbum}>
                                    {
                                      albums.data.items[this.state.currentIndex]
                                        .album.name
                                    }
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
                      </div>
                    )
                  }
                </AlbumTracks>
              </>
            ) : null
          }
        </UserAlbums>
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

export default connect(mapStateToProps, mapDispatchToProps)(Album);
