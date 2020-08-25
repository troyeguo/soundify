import React, { Component } from "react";
import styles from "../styles/discover.module.css";
import { UserArtists, ArtistTracks } from "react-spotify-api";
import { connect } from "react-redux";
import * as actionTypes from "../redux/action/index";
class Artists extends Component {
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
  playSongHandler = (track, artist) => {
    if (artist) {
      let uris;
      if (!track) {
        uris = JSON.stringify({
          context_uri: artist.uri,
        });
      } else {
        uris = JSON.stringify({
          context_uri: track.album.uri,
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
            <UserArtists>
              {(artists, loading, error) =>
                artists.data && (
                  <div className={styles.contentCoverList}>
                    {artists.data.artists.items.map((artist, index) => (
                      <div
                        key={artist.id}
                        className={styles.contentCoverContainer}
                        onClick={() => {
                          this.handleIndex(index);
                        }}
                      >
                        <img
                          src={
                            artist.images[1].url
                              ? artist.images[1].url
                              : "/images/artist.jpg"
                          }
                          alt=""
                          className={styles.contentCover}
                          style={{ borderRadius: "50%" }}
                        />

                        <div className={styles.contentTitle}>{artist.name}</div>
                        {this.state.currentIndex === index ? (
                          <div className={styles.contentSelector}></div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                )
              }
            </UserArtists>
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
        <UserArtists>
          {(artists, loading, error) =>
            artists.data && (
              <>
                <ArtistTracks
                  id={artists.data.artists.items[this.state.currentIndex].id}
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
                              null,
                              artists.data.artists.items[
                                this.state.currentIndex
                              ]
                            )
                          }
                        />

                        <ul className={styles.contentListContainer}>
                          <div className={styles.songListContainer}>
                            <div>
                              {tracks.data.tracks.map((track, index) => (
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
                                          artists.data.artists.items[
                                            this.state.currentIndex
                                          ]
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
                                    {track.album.name}
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
                </ArtistTracks>
              </>
            )
          }
        </UserArtists>
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

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
