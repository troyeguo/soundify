module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./redux/action/index.js
var action = __webpack_require__("X4ED");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./styles/login.module.css
var login_module = __webpack_require__("bn5U");
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);

// CONCATENATED MODULE: ./components/Login.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const displayText = [{
  title: "Stream your music with Soundify",
  subtitle: "A third party client for spotify",
  slogan: "Get Started",
  href: "http://localhost:3000/login"
}, {
  title: "Proudly made with Next.js",
  subtitle: "A server-side-render React framework",
  slogan: "Next.js",
  href: "https://nextjs.org/"
}, {
  title: "Amazing tool from Troye Guo",
  subtitle: "Looking for a good job",
  slogan: "About Me",
  href: "http://102410.xyz"
}];

class Login_Login extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentIndex: 0
    });

    _defineProperty(this, "handleClick", index => {
      this.setState({
        currentIndex: index
      });
    });

    _defineProperty(this, "mouseFirefox", event => {
      event.preventDefault();

      if (event.detail < 0) {
        if (this.state.currentIndex > 0) {
          this.setState({
            currentIndex: this.state.currentIndex - 1
          });
          return false;
        }
      }

      if (event.detail > 0) {
        if (this.state.currentIndex < 2) {
          this.setState({
            currentIndex: this.state.currentIndex + 1
          });
          return false;
        }
      }
    });

    _defineProperty(this, "mouseChrome", event => {
      event.preventDefault(); // console.log("wheel moving");

      if (event.wheelDelta > 0) {
        if (this.state.currentIndex > 0) {
          this.setState({
            currentIndex: this.state.currentIndex - 1
          });
          return false;
        }
      }

      if (event.wheelDelta < 0) {
        if (this.state.currentIndex < 2) {
          this.setState({
            currentIndex: this.state.currentIndex + 1
          });
          return false;
        }
      }
    });
  }

  componentDidMount() {
    let isFirefox = navigator.userAgent.indexOf("Firefox") !== -1;
    let doc = document;
    if (isFirefox) doc.addEventListener("DOMMouseScroll", this.mouseFirefox, false);else {
      doc.addEventListener("mousewheel", this.mouseChrome, false); // doc.addEventListener("mousewheel", recordCfi, false);
    }
  }

  render() {
    const renderText = index => {
      return __jsx("div", null, __jsx("div", {
        className: login_module_default.a.subtitle
      }, displayText[index].subtitle), __jsx("div", {
        className: login_module_default.a.title
      }, displayText[index].title), __jsx("a", {
        href: displayText[index].href
      }, __jsx("div", {
        className: login_module_default.a.button
      }, __jsx("div", null, displayText[index].slogan))));
    };

    const renderDot = () => {
      return [0, 1, 2].map((item, index) => {
        return __jsx("div", {
          key: item,
          onClick: () => {
            this.setState({
              currentIndex: item
            });
          },
          className: login_module_default.a.dot,
          style: this.state.currentIndex === index ? {
            opacity: 1
          } : {}
        });
      });
    };

    return __jsx("div", {
      className: login_module_default.a.root
    }, __jsx("div", {
      className: login_module_default.a.infoContainer
    }, this.state.currentIndex === 0 ? __jsx("div", {
      className: login_module_default.a.firstScreen
    }, renderText(0)) : null, this.state.currentIndex === 1 ? __jsx("div", {
      className: login_module_default.a.secondScreen
    }, renderText(1)) : null, this.state.currentIndex === 2 ? __jsx("div", {
      className: login_module_default.a.thirdScreen
    }, renderText(2)) : null, __jsx("div", {
      className: login_module_default.a.dotContainer
    }, renderDot())), __jsx("div", {
      className: login_module_default.a.image,
      style: this.state.currentIndex === 1 ? {
        backgroundColor: "#E5E2DD"
      } : this.state.currentIndex === 2 ? {
        backgroundColor: "#EAE9E5"
      } : {}
    }, __jsx("div", {
      className: login_module_default.a.logo
    }, __jsx("div", null, __jsx("img", {
      className: login_module_default.a.logoImg,
      src: "/icons/dark-logo.svg",
      alt: ""
    }), __jsx("span", {
      className: login_module_default.a.logoText
    }, "Soundify"))), __jsx("div", {
      className: login_module_default.a.imageContainer
    }, this.state.currentIndex === 0 ? __jsx("img", {
      src: "/images/bg0.png",
      alt: "",
      className: login_module_default.a.bg0
    }) : null, this.state.currentIndex === 1 ? __jsx("img", {
      src: "/images/bg1.png",
      alt: "",
      className: login_module_default.a.bg1
    }) : null, this.state.currentIndex === 2 ? __jsx("img", {
      src: "/images/bg2.jpg",
      alt: "",
      className: login_module_default.a.bg2
    }) : null)));
  }

}

/* harmony default export */ var components_Login = (Login_Login);
// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class pages_Index extends external_react_["Component"] {
  constructor(props) {
    super(props);

    pages_defineProperty(this, "logInUserAndGetInfo", newUser => {
      console.log("LOG IN", newUser); // console.log(this.props);

      localStorage.setItem("newUser", JSON.stringify(newUser));
      this.props.setUser(newUser); // set user in redux state

      console.log("test");
      router_default.a.push("/Home");
    });

    this.state = {
      token: null
    };
    this.token = null;
  }

  componentDidMount() {
    this.setState({
      token: localStorage.getItem("react-spotify-access-token")
    }, () => {
      // console.log(this.state.token, "token");
      if (this.state.token !== undefined && this.state.token !== "undefined" && this.state.token) {
        router_default.a.push("/Home");
      }
    }); // console.log(this.props, "cdm");

    let params = this.getHashParams(); // If access token doesn't exist in has params, try to take it from local storage

    if (params.access_token === "undefined") {
      const currentAccessToken = localStorage.getItem("react-spotify-access-token");

      if (currentAccessToken) {
        params.access_token = currentAccessToken;
      }
    } // console.log("Params after", params);


    if (params.access_token && params.access_token !== undefined && params.access_token !== "undefined") {
      localStorage.setItem("react-spotify-access-token", params.access_token);
      external_axios_default.a.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${params.access_token}`
        }
      }).then(({
        data
      }) => {
        console.log(data, "data");

        if (params.refresh_token) {
          localStorage.setItem("react-spotify-refresh-token", params.refresh_token);
        }

        let newUser = {
          access_token: params.access_token,
          displayName: data.display_name,
          email: data.email,
          type: data.type,
          country: data.country,
          product: data.product,
          avatar: data.images[0].url
        };
        console.log(newUser, "newUser");
        this.logInUserAndGetInfo(newUser);
      }).catch(err => {
        console.log(err, "fgjxfjxf"); // 401 = Unauthorized - the access token is incorrect (expired)

        if (err || err.response.status === 401) {
          // Check if refresh token exists
          const refreshToken = localStorage.getItem("react-spotify-refresh-token");

          if (refreshToken) {
            // Send refresh token to server to acquire a new access token
            external_axios_default.a.post("http://localhost:3000/refresh", {
              data: JSON.stringify({
                refresh_token: refreshToken
              })
            }).then(res => {
              console.log("Refresh token response -", res.data);
              external_axios_default.a.get("https://api.spotify.com/v1/me", {
                headers: {
                  Authorization: `Bearer ${res.data.access_token}`
                }
              }).then(({
                data
              }) => {
                localStorage.setItem("react-spotify-access-token", res.data.access_token);
                let newUser = {
                  access_token: params.access_token,
                  displayName: data.display_name,
                  email: data.email,
                  type: data.type,
                  country: data.country,
                  product: data.product,
                  avatar: data.images[0].url
                };
                this.logInUserAndGetInfo(newUser);
              });
            }).catch(e => {
              console.log("Refresh token error -", e);
            }).finally(() => {
              this.setState({
                loading: false
              });
            });
          } else {
            // Refresh token doesn't exist, the user is shown a 'login with Spotify button'
            this.setState({
              loading: false
            });
          }
        }
      });
    } else {
      // The user is shown a 'login with Spotify button'
      this.setState({
        loading: false
      });
    }
  }

  getHashParams() {
    var hashParams = {};
    var e,
        r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);

    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    console.log(hashParams, "hashParams");
    return hashParams;
  }

  render() {
    // console.log(this.props, "user");
    return pages_jsx(components_Login, null);
  }

}

const mapStateToProps = state => {
  return {
    user: state.current_user,
    backgroundImage: state.backgroundImage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({
      type: action["h" /* SET_USER */],
      user
    })
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(router_["withRouter"])(pages_Index)));

/***/ }),

/***/ "X4ED":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_USER; });
/* unused harmony export GET_RECENTLY_PLAYED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_RECENTLY_PLAYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_PLAY_NOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESET_PLAY_NOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_CURRENTLY_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_IS_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_BACKGROUND_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLAY_SONG_START; });
/* unused harmony export PLAY_SONG_SUCCESS */
/* unused harmony export PLAY_SONG_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return playSong; });
/* unused harmony export pauseSong */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fetchRecentlyPlayed; });
/* harmony import */ var _$axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gbem");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SET_USER = "SET_USER";
const GET_RECENTLY_PLAYED = "GET_RECENTLY_PLAYED";
const SET_RECENTLY_PLAYED = "SET_RECENTLY_PLAYED";
const SET_PLAY_NOW = "SET_PLAY_NOW";
const RESET_PLAY_NOW = "RESET_PLAY_NOW";
const SET_CURRENTLY_PLAYING = "SET_CURRENTLY_PLAYING";
const SET_IS_PLAYING = "SET_IS_PLAYING";
const SET_BACKGROUND_IMAGE = "SET_BACKGROUND_IMAGE";
const PLAY_SONG_START = "PLAY_SONG_START";
const PLAY_SONG_SUCCESS = "PLAY_SONG_SUCCESS";
const PLAY_SONG_FAIL = "PLAY_SONG_FAIL";
const playSong = (uris, deviceId) => {
  console.log(uris, "uris");
  return (dispatch, getState) => {
    if (getState().current_user) {
      dispatch(playSongStart());
      Object(_$axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        url: `https://api.spotify.com/v1/me/player/play`,
        method: "PUT",
        data: uris
      }).then(() => {
        dispatch(playSongSuccess());
      }).catch(() => {
        dispatch(playSongFail());
      });
    }
  };
};

const playSongStart = () => {
  return {
    type: PLAY_SONG_START
  };
};

const playSongSuccess = () => {
  return {
    type: PLAY_SONG_SUCCESS
  };
};

const playSongFail = () => {
  return {
    type: PLAY_SONG_FAIL
  };
};

const pauseSong = () => {
  return (dispatch, getState) => {
    if (!getState().isPlaying) {
      Object(_$axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        url: "https://api.spotify.com/v1/me/player/pause",
        method: "PUT"
      }).then(res => {
        dispatch(setPauseSong());
      }).catch(err => {
        console.error("Playback cannot be paused, Your playback is probably already paused");
      });
    } else {
      console.error("Playback cannot be paused, Your playback is probably already paused");
    }
  };
};

const setPauseSong = () => {
  return {
    type: SET_IS_PLAYING
  };
};

const fetchRecentlyPlayed = options => {
  // console.log(options);
  return dispatch => {
    if (true) {
      dispatch(getRecentlyPlayed());
      Object(_$axios__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        url: "https://api.spotify.com/v1/me/player/recently-played",
        method: "GET",
        params: _objectSpread({}, options)
      }).then(res => {
        // console.log(res.data.items);
        dispatch(setRecentlyPlayed(res.data.items));
      }).catch(err => {
        console.error("There was an error getting recently played tracks");
      });
    }
  };
};

const getRecentlyPlayed = () => {
  return {
    type: GET_RECENTLY_PLAYED
  };
};

const setRecentlyPlayed = data => {
  return {
    type: SET_RECENTLY_PLAYED,
    recently_played: data
  };
};

/***/ }),

/***/ "bn5U":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"root": "login_root__1rfeA",
	"image": "login_image__32u7y",
	"imageContainer": "login_imageContainer__2oscp",
	"bg0": "login_bg0__3DioX",
	"slidein": "login_slidein__13FjV",
	"bg1": "login_bg1__1mqFn",
	"bg2": "login_bg2__1yoUJ",
	"logo": "login_logo__1B3-D",
	"logoImg": "login_logoImg__2o297",
	"logoText": "login_logoText__1cENq",
	"infoContainer": "login_infoContainer__28lcv",
	"firstScreen": "login_firstScreen__ovEFe",
	"secondScreen": "login_secondScreen__rS1ge",
	"thirdScreen": "login_thirdScreen__Mmef2",
	"subtitle": "login_subtitle__2x7cx",
	"fadein": "login_fadein__MOhak",
	"title": "login_title__2w2-U",
	"button": "login_button__3XC2R",
	"dotContainer": "login_dotContainer__3UYYX",
	"dot": "login_dot__3lbZK"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gbem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("X4ED");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);


 // dotenv.config();
// console.log(process.env.NODE_ENV, "REACT_APP_BASE_URL");

const $axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  timeout: 6000,
  retry: 4,
  retryDelay: 1000
}); //请求拦截

$axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 通过reudx的store拿到拿到全局状态树的token ，添加到请求报文，后台会根据该报文返回status
  // 此处应根据具体业务写token
  // const token = store.getState().user.token || localStorage.getItem('token');
  const token = localStorage.getItem("react-spotify-access-token");
  config.headers = {
    Authorization: `Bearer ${token}`
  };
  return config;
}, function (error) {
  // 对请求错误做些什么
  message.error(error);
  return Promise.reject(error);
}); // 添加响应拦截器

$axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response) {
    console.log(error.response, "error");
    const originalRequest = error.config;

    if (error.response.status === 401) {
      console.log("Error happened");
      console.log(error);
      let refresh_token = localStorage.getItem("react-spotify-refresh-token");
      console.log(refresh_token); // return window.location.reload();

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("http://localhost:3000/refresh", {
        refresh_token: localStorage.getItem("react-spotify-refresh-token")
      }).then(res => {
        console.log(res, "res");

        if (res.status === 200) {
          // 1) put token to LocalStorage
          localStorage.setItem("react-spotify-access-token", res.data.access_token); // console.log("New token", res.data);
          // console.log(originalRequest);
          // // 2) Change Authorization header
          // axios.defaults.headers.common['Authorization'] =
          //   'Bearer ' + localStorageService.getAccessToken();
          // 3) return originalRequest object with Axios.

          return axios__WEBPACK_IMPORTED_MODULE_0___default()(originalRequest);
        }
      }).catch(error => {
        console.log(error, "error");
      });
    }
  }

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = ($axios);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });