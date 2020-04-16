webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Player.js":
/*!******************************!*\
  !*** ./components/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/player.module.css */ "./styles/player.module.css");
/* harmony import */ var _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_player_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/action */ "./redux/action/index.js");
/* harmony import */ var _$axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../$axios */ "./$axios.js");
/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LoadingPage */ "./components/LoadingPage.js");
/* harmony import */ var _AudioAnimation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AudioAnimation */ "./components/AudioAnimation.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var Player = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Player, _Component);

  var _super = _createSuper(Player);

  function Player(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Player);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "checkForPlayer", function () {
      if (window.Spotify) {
        console.log("checkForPlayer");
        clearInterval(_this.playerCheckInterval);
        _this.player = new window.Spotify.Player({
          name: "Soundify",
          getOAuthToken: function getOAuthToken(cb) {
            cb(_this.state.token);
          }
        });
      }

      if (_this.player) {
        _this.createEventHandlers();

        _this.player.connect();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "createEventHandlers", function () {
      _this.player.on("initialization_error", function (e) {
        console.error("Initialization error ", e);

        _this.setState({
          player_init_error: true
        });
      });

      _this.player.on("authentication_error", function (e) {
        return console.error("Authentication error ", e);
      });

      _this.player.on("account_error", function (e) {
        return console.error("Account error ", e);
      });

      _this.player.on("playback_error", function (e) {
        return console.error("Playback error ", e);
      });

      _this.player.on("player_state_changed", function (state) {
        if (state) {
          // console.log("player state changed", state);
          var duration = state.duration,
              position = state.position; // duration = 100%
          // position = ?%

          var val = position * 100 / duration;

          _this.setState({
            playingInfo: state,
            playing: !state.paused,
            positionSliderValue: val
          }); // Music started playing, start the position interval


          if (!_this.props.isPlaying && !state.paused) {
            _this.positionCheckInterval = setInterval(function () {
              _this.checkChangePosition();
            }, 1000);
          } // Music stopped playing, clear the position interval


          if (_this.props.isPlaying && state.paused) {
            clearInterval(_this.positionCheckInterval);
          }

          if (_this.props.isPlaying === state.paused) {
            _this.props.setIsPlaying(!state.paused);
          }

          if (!_this.props.currentlyPlaying || _this.props.currentlyPlaying !== state.track_window.current_track.name) {
            var current_track = state.track_window.current_track;

            _this.props.setCurrentlyPlaying(current_track.name);
          }
        }
      });

      _this.player.on("ready", function (data) {
        var device_id = data.device_id;
        console.log("PLAYER CONNECTED ", device_id); // await this.setState({ deviceId: device_id });

        _this.setState({
          deviceId: device_id
        }, function () {
          _this.transferPlaybackHere();
        });

        var newUser = localStorage.getItem("newUser"); // console.log(newUser, "newUser");

        if (newUser) {
          _this.setState({
            user: JSON.parse(newUser)
          });
        }

        _this.player.getVolume().then(function (vol) {
          var volume = vol * 100;

          _this.setState({
            volumeSliderValue: volume
          });
        });
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "checkChangePosition", function () {
      _this.player.getCurrentState().then(function (state) {
        if (state) {
          var duration = state.duration,
              position = state.position; // duration = 100%
          // position = ?%

          var val = position * 100 / duration;

          if (val !== _this.state.positionSliderValue) {
            _this.setState({
              positionSliderValue: val
            });
          }

          var positionStamp = _this.milisToMinutesAndSeconds(state.position);

          var durationStamp = _this.milisToMinutesAndSeconds(state.duration);

          _this.setState({
            positionStamp: positionStamp,
            durationStamp: durationStamp
          });
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "transferPlaybackHere", function () {
      // ONLY FOR PREMIUM USERS - transfer the playback automatically to the web app.
      // for normal users they have to go in the spotify app/website and change the device manually
      // user type is stored in redux state => this.props.user.type
      var deviceId = _this.state.deviceId;
      fetch("https://api.spotify.com/v1/me/player", {
        method: "PUT",
        headers: {
          Authorization: "Bearer ".concat(_this.state.token),
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          device_ids: [deviceId],
          play: false
        })
      }).then(function (res) {
        // console.log("status", res);
        if (res.status === 204) {
          _$axios__WEBPACK_IMPORTED_MODULE_12__["default"].get("https://api.spotify.com/v1/me/player").then(function () {
            // Transferred playback successfully, get current timestamp
            _this.checkChangePosition();
          })["catch"](function (err) {
            console.log(err);
          });
        }
      })["catch"](function (e) {
        return console.error(e);
      }); // console.log('Hello', this.props);
      // if (this.props.user.product === 'premium') {
      // } else {
      //   console.log(
      //     'Cannot transfer playback automatically because you are not a premium user.'
      //   );
      // }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onPrevClick", function () {
      _this.player.previousTrack();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onPlayClick", function () {
      _this.player.togglePlay();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onNextClick", function () {
      _this.player.nextTrack();
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "milisToMinutesAndSeconds", function (mil) {
      var minutes = Math.floor(mil / 60000);
      var seconds = (mil % 60000 / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    });

    _this.state = {
      deviceId: null,
      playingInfo: null,
      playing: false,
      positionSliderValue: 50,
      volumeSliderValue: 50,
      positionStamp: "00:00",
      durationStamp: "00:00",
      player_init_error: false,
      user: null,
      noConnection: false
    };
    _this.player = null;
    _this.playerCheckInterval = null;
    _this.positionCheckInterval = null;
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        token: localStorage.getItem("react-spotify-access-token")
      });
      var newUser = localStorage.getItem("newUser"); // console.log(newUser, "newUser");

      if (newUser) {
        this.setState({
          user: JSON.parse(newUser)
        });
      } // console.log(Spotify, "etata");


      window.onSpotifyWebPlaybackSDKReady = function () {
        console.log("onready");
        window.Spotify = Spotify;
      }; // console.log(window.Spotify, "etata");


      this.playerCheckInterval = setInterval(function () {
        return _this2.checkForPlayer();
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.state.playingInfo, this.state.user, "this.state.user");
      if (!this.state.playingInfo || !this.state.user) {
        return __jsx("div", {
          className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.player
        }, __jsx("div", {
          className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.loadingContainer
        }, __jsx("div", {
          style: {
            position: "relative",
            left: "70px",
            bottom: "130px"
          }
        }, __jsx(_LoadingPage__WEBPACK_IMPORTED_MODULE_13__["default"], null)), __jsx("div", {
          className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.loadingText
        }, "Connecting to Spotify Player..."), __jsx("div", null, "This takes longer than expected, first make sure your internet connection to spotify is fine, than please go to spotify and select Soundify manually in your spotify connect devices")));
      } // console.log(this.state.playingInfo);


      return __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.player
      }, __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.playerHeader
      }, __jsx("div", null, __jsx("img", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.avatar,
        src: this.state.user.avatar,
        alt: ""
      }), __jsx("span", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.nickname
      }, this.state.user.displayName))), __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.playerCoverContainer
      }, this.state.playing ? __jsx("img", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.playerCoverAnimation,
        src: this.state.playingInfo.track_window.current_track.album.images[0].url,
        alt: ""
      }) : __jsx("img", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.playerCover,
        src: this.state.playingInfo.track_window.current_track.album.images[0].url,
        alt: ""
      })), __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.musicInfo
      }, __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.songName
      }, this.state.playingInfo.track_window.current_track.name), __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.artistName
      }, this.state.playingInfo.track_window.current_track.artists[0].name)), __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.playerPanel
      }, __jsx("img", {
        src: "/icons/prev.svg",
        alt: "",
        onClick: this.onPrevClick
      }), this.state.playing ? __jsx("img", {
        src: "/icons/playing.svg",
        alt: "",
        style: {
          width: "45px"
        },
        onClick: this.onPlayClick
      }) : __jsx("img", {
        src: "/icons/play.svg",
        alt: "",
        style: {
          width: "45px"
        },
        onClick: this.onPlayClick
      }), __jsx("img", {
        src: "/icons/next.svg",
        alt: "",
        onClick: this.onNextClick
      })), __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.playerNext
      }, this.state.playing ? __jsx(_AudioAnimation__WEBPACK_IMPORTED_MODULE_14__["AudioAnimation"], null) : __jsx(_AudioAnimation__WEBPACK_IMPORTED_MODULE_14__["AudioStop"], null)), __jsx("div", {
        className: _styles_player_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.line
      }));
    }
  }]);

  return Player;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    recently_played: state.recently_played,
    user: state.current_user,
    playNow: state.play_now,
    currentlyPlaying: state.currently_playing,
    isPlaying: state.isPlaying
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setUser: function setUser(user) {
      return dispatch({
        type: _redux_action__WEBPACK_IMPORTED_MODULE_11__["SET_USER"],
        user: user
      });
    },
    fetchRecentlyPlayed: function fetchRecentlyPlayed(options) {
      return dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_11__["fetchRecentlyPlayed"](options));
    },
    resetPlayNow: function resetPlayNow() {
      return dispatch({
        type: _redux_action__WEBPACK_IMPORTED_MODULE_11__["RESET_PLAY_NOW"]
      });
    },
    setCurrentlyPlaying: function setCurrentlyPlaying(song) {
      return dispatch({
        type: _redux_action__WEBPACK_IMPORTED_MODULE_11__["SET_CURRENTLY_PLAYING"],
        song: song
      });
    },
    setIsPlaying: function setIsPlaying(isPlaying) {
      return dispatch({
        type: _redux_action__WEBPACK_IMPORTED_MODULE_11__["SET_IS_PLAYING"],
        isPlaying: isPlaying
      });
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Player)));

/***/ })

})
//# sourceMappingURL=_app.js.efc87b20ef5205345466.hot-update.js.map