import React, { Component } from "react";
import { withRouter } from "next/router";
import styles from "../styles/player.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../redux/action";
import $axios from "../$axios";
import LoadingPage from "./LoadingPage";
import { AudioAnimation, AudioStop } from "./AudioAnimation";
class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceId: null,
      playingInfo: null,
      playing: false,
      positionSliderValue: 50,
      volumeSliderValue: 50,
      positionStamp: "00:00",
      durationStamp: "00:00",
      player_init_error: false,
      user: null,
      noConnection: false,
    };

    this.player = null;
    this.playerCheckInterval = null;
    this.positionCheckInterval = null;
  }

  componentDidMount() {
    let count = 0;
    let countInterval = setInterval(() => {
      count++;
      if (count > 15) {
        this.setState({ noConnection: true });
        clearInterval(countInterval);
      }
    }, 1000);
    this.setState({
      token: localStorage.getItem("react-spotify-access-token"),
    });
    let newUser = localStorage.getItem("newUser");
    // console.log(newUser, "newUser");
    if (newUser) {
      this.setState({ user: JSON.parse(newUser) });
    }

    // console.log(Spotify, "etata");
    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log("onready");
      window.Spotify = Spotify;
    };
    // console.log(window.Spotify, "etata");
    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
  }
  checkForPlayer = () => {
    if (window.Spotify) {
      console.log("checkForPlayer");
      clearInterval(this.playerCheckInterval);
      this.player = new window.Spotify.Player({
        name: "Soundify",
        getOAuthToken: (cb) => {
          cb(this.state.token);
        },
      });
    }

    if (this.player) {
      this.createEventHandlers();

      this.player.connect();
    }
  };
  createEventHandlers = () => {
    this.player.on("initialization_error", (e) => {
      console.error("Initialization error ", e);
      this.setState({ player_init_error: true });
    });
    this.player.on("authentication_error", (e) =>
      console.error("Authentication error ", e)
    );
    this.player.on("account_error", (e) => console.error("Account error ", e));
    this.player.on("playback_error", (e) =>
      console.error("Playback error ", e)
    );

    this.player.on("player_state_changed", (state) => {
      if (state) {
        // console.log("player state changed", state);
        let { duration, position } = state;
        // duration = 100%
        // position = ?%
        let val = (position * 100) / duration;
        this.setState({
          playingInfo: state,
          playing: !state.paused,
          positionSliderValue: val,
        });

        // Music started playing, start the position interval
        if (!this.props.isPlaying && !state.paused) {
          this.positionCheckInterval = setInterval(() => {
            this.checkChangePosition();
          }, 1000);
        }

        // Music stopped playing, clear the position interval
        if (this.props.isPlaying && state.paused) {
          clearInterval(this.positionCheckInterval);
        }

        if (this.props.isPlaying === state.paused) {
          this.props.setIsPlaying(!state.paused);
        }

        if (
          !this.props.currentlyPlaying ||
          this.props.currentlyPlaying !== state.track_window.current_track.name
        ) {
          let { current_track } = state.track_window;
          this.props.setCurrentlyPlaying(current_track.name);
        }
      }
    });

    this.player.on("ready", (data) => {
      let { device_id } = data;
      console.log("PLAYER CONNECTED ", device_id);
      // await this.setState({ deviceId: device_id });
      this.setState({ deviceId: device_id }, () => {
        this.transferPlaybackHere();
      });
      let newUser = localStorage.getItem("newUser");
      // console.log(newUser, "newUser");
      if (newUser) {
        this.setState({ user: JSON.parse(newUser) });
      }
      this.player.getVolume().then((vol) => {
        let volume = vol * 100;
        this.setState({ volumeSliderValue: volume });
      });
    });
  };
  checkChangePosition = () => {
    this.player.getCurrentState().then((state) => {
      if (state) {
        let { duration, position } = state;
        // duration = 100%
        // position = ?%
        let val = (position * 100) / duration;
        if (val !== this.state.positionSliderValue) {
          this.setState({
            positionSliderValue: val,
          });
        }

        let positionStamp = this.milisToMinutesAndSeconds(state.position);
        let durationStamp = this.milisToMinutesAndSeconds(state.duration);
        this.setState({ positionStamp, durationStamp });
      }
    });
  };
  transferPlaybackHere = () => {
    // ONLY FOR PREMIUM USERS - transfer the playback automatically to the web app.
    // for normal users they have to go in the spotify app/website and change the device manually
    // user type is stored in redux state => this.props.user.type
    const { deviceId } = this.state;
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${this.state.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play: false,
      }),
    })
      .then((res) => {
        // console.log("status", res);
        if (res.status === 204) {
          $axios
            .get("https://api.spotify.com/v1/me/player")
            .then(() => {
              // Transferred playback successfully, get current timestamp
              this.checkChangePosition();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((e) => console.error(e));

    // console.log('Hello', this.props);
    // if (this.props.user.product === 'premium') {
    // } else {
    //   console.log(
    //     'Cannot transfer playback automatically because you are not a premium user.'
    //   );
    // }
  };

  onPrevClick = () => {
    this.player.previousTrack();
  };

  onPlayClick = () => {
    this.player.togglePlay();
  };

  onNextClick = () => {
    this.player.nextTrack();
  };
  milisToMinutesAndSeconds = (mil) => {
    let minutes = Math.floor(mil / 60000);
    let seconds = ((mil % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  render() {
    // console.log(this.state.playingInfo, this.state.user, "this.state.user");
    if (
      !(this.state.playingInfo && this.state.user) &&
      this.state.noConnection
    ) {
      return (
        <div className={styles.player}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingText}>
              This takes longer than expected, first make sure your internet
              connection to spotify is fine, then go to spotify and select
              Soundify manually in your spotify connect devices and refresh the
              website
            </div>
          </div>
        </div>
      );
    }
    if (!this.state.playingInfo || !this.state.user) {
      return (
        <div className={styles.player}>
          <div className={styles.loadingContainer}>
            <div
              style={{ position: "relative", left: "70px", bottom: "130px" }}
            >
              <LoadingPage />
            </div>

            <div className={styles.loadingText}>
              Connecting to Spotify Player...
            </div>
          </div>
        </div>
      );
    }
    // console.log(this.state.playingInfo);

    return (
      <div className={styles.player}>
        <div className={styles.playerHeader}>
          <div>
            <img
              className={styles.avatar}
              src={this.state.user.avatar}
              alt=""
            />
            <span className={styles.nickname}>
              {this.state.user.displayName}
            </span>
          </div>
        </div>
        <div className={styles.playerCoverContainer}>
          {this.state.playing ? (
            <img
              className={styles.playerCoverAnimation}
              src={
                this.state.playingInfo.track_window.current_track.album
                  .images[0].url
              }
              alt=""
            />
          ) : (
            <img
              className={styles.playerCover}
              src={
                this.state.playingInfo.track_window.current_track.album
                  .images[0].url
              }
              alt=""
            />
          )}
        </div>
        <div className={styles.musicInfo}>
          <div className={styles.songName}>
            {this.state.playingInfo.track_window.current_track.name}
          </div>
          <div className={styles.artistName}>
            {this.state.playingInfo.track_window.current_track.artists[0].name}
          </div>
        </div>
        <div className={styles.playerPanel}>
          <img src="/icons/prev.svg" alt="" onClick={this.onPrevClick} />
          {this.state.playing ? (
            <img
              src="/icons/playing.svg"
              alt=""
              style={{ width: "45px" }}
              onClick={this.onPlayClick}
            />
          ) : (
            <img
              src="/icons/play.svg"
              alt=""
              style={{ width: "45px" }}
              onClick={this.onPlayClick}
            />
          )}
          <img src="/icons/next.svg" alt="" onClick={this.onNextClick} />
        </div>

        <div className={styles.playerNext}>
          {this.state.playing ? <AudioAnimation /> : <AudioStop />}
        </div>
        <div className={styles.line}></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recently_played: state.recently_played,
    user: state.current_user,
    playNow: state.play_now,
    currentlyPlaying: state.currently_playing,
    isPlaying: state.isPlaying,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => dispatch({ type: actionTypes.SET_USER, user }),
    fetchRecentlyPlayed: (options) =>
      dispatch(actionTypes.fetchRecentlyPlayed(options)),
    resetPlayNow: () => dispatch({ type: actionTypes.RESET_PLAY_NOW }),
    setCurrentlyPlaying: (song) =>
      dispatch({ type: actionTypes.SET_CURRENTLY_PLAYING, song }),
    setIsPlaying: (isPlaying) =>
      dispatch({ type: actionTypes.SET_IS_PLAYING, isPlaying }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Player));
