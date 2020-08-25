import React, { Component } from "react";
import styles from "../styles/discover.module.css";
import { Playlist } from "react-spotify-api";
import { UserPlaylists } from "react-spotify-api";
import { connect } from "react-redux";
import * as actionTypes from "../redux/action/index";
class PlaylistComp extends Component {
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
  playSongHandler = (track, playlist) => {
    if (playlist.data) {
      let uris;
      if (!track) {
        uris = JSON.stringify({
          context_uri: playlist.data.uri,
        });
      } else {
        uris = JSON.stringify({
          context_uri: playlist.data.uri,
          offset: {
            uri: track.uri,
          },
        });
      }
      console.log(uris, "playlist");
      this.props.playSong(uris);
    }
  };
  renderCoverList = (playlists) => {
    return (
      <div className={styles.contentCoverList}>
        {playlists.data.items.map((playlist, index) => {
          return (
            <div
              key={index}
              className={styles.contentCoverContainer}
              onClick={() => {
                this.handleIndex(index);
              }}
            >
              <img
                src={
                  playlist.images[0]
                    ? playlist.images[0].url
                    : "/images/playlist.jpg"
                }
                alt=""
                className={styles.contentCover}
              />
              <div className={styles.contentTitle}>{playlist.name}</div>
              {this.state.currentIndex === index ? (
                <div className={styles.contentSelector}></div>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  };
  renderPlaylist = (playlist) => {
    return (
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
                {playlist.data.tracks.items.map((track, index) => (
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
                    <div className={styles.indexName}>{index + 1}</div>
                    {this.state.hoverIndex === index ? (
                      <img
                        src="/icons/play.svg"
                        alt=""
                        className={styles.listPlayIcon}
                        onClick={() =>
                          this.playSongHandler(track.track, playlist)
                        }
                      />
                    ) : (
                      <img
                        src="/icons/favorite.svg"
                        alt=""
                        className={styles.favoriteIcon}
                      />
                    )}
                    <div className={styles.trackName}>{track.track.name}</div>
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
    );
  };
  renderListContent = (playlists) => {
    return (
      <Playlist id={playlists.data.items[this.state.currentIndex].id}>
        {(playlist, loading, error) =>
          playlist.data && this.renderPlaylist(playlist)
        }
      </Playlist>
    );
  };
  render() {
    return (
      <div>
        <div className={styles.coverParent}>
          <div className={styles.coverContainer}>
            <UserPlaylists>
              {(playlists, loading, error) =>
                playlists.data && this.renderCoverList(playlists)
              }
            </UserPlaylists>
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
        <UserPlaylists>
          {(playlists, loading, error) =>
            playlists.data && this.renderListContent(playlists)
          }
        </UserPlaylists>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistComp);
