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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./$axios.js":
/*!*******************!*\
  !*** ./$axios.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
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
/* harmony default export */ __webpack_exports__["default"] = ($axios);

/***/ }),

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spotify_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spotify-api */ "./node_modules/react-spotify-api/dist/index.js");
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/action */ "./redux/action/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", index => {
      this.setState({
        index
      });
    });

    _defineProperty(this, "handleIndex", index => {
      this.setState({
        hoverIndex: index
      });
    });

    _defineProperty(this, "playSongHandler", (track, playlist) => {
      console.log(track, "track", playlist, "playlist");

      if (playlist) {
        let uris;

        if (!track) {
          uris = JSON.stringify({
            context_uri: playlist.uri
          });
        } else {
          uris = JSON.stringify({
            context_uri: track.album.uri,
            offset: {
              uri: track.uri
            }
          });
        }

        console.log(uris);
        this.props.playSong(uris);
      }
    });

    this.state = {
      index: 0,
      hoverIndex: null
    };
  }

  render() {
    return __jsx("div", null, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.coverParent
    }, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentCoverContainer,
      onClick: () => {
        this.handleClick(0);
      }
    }, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentTitle
    }, "All Songs"), this.state.index === 0 ? __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentSelector
    }) : null), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentCoverContainer,
      onClick: () => {
        this.handleClick(1);
      }
    }, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentTitle
    }, "Recently Played"), this.state.index === 1 ? __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentSelector
    }) : null)), __jsx("div", null, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentLine
    }), __jsx("ul", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentListContainer
    }, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.songListContainer
    }, this.state.index === 1 ? __jsx("div", null, this.props.tracks.map((track, index) => __jsx("li", {
      key: track.played_at,
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentList,
      onMouseOver: () => {
        this.handleIndex(index);
      },
      onMouseLeave: () => {
        this.handleIndex(-1);
      }
    }, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.indexName
    }, index + 1), this.state.hoverIndex === index ? __jsx("img", {
      src: "/icons/play.svg",
      alt: "",
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.listPlayIcon,
      onClick: () => this.playSongHandler(track.track, "test")
    }) : __jsx("img", {
      src: "/icons/favorite.svg",
      alt: "",
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.favoriteIcon
    }), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trackName
    }, track.track.name), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trackArtist
    }, track.track.artists[0].name), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trackAlbum
    }, track.track.album.name), __jsx("img", {
      src: "/icons/more_dot.svg",
      alt: "",
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.moreDot
    })))) : __jsx(react_spotify_api__WEBPACK_IMPORTED_MODULE_2__["UserTracks"], null, tracks => tracks ? __jsx("div", null, tracks.items.map((track, index) => __jsx("li", {
      key: track.track.id,
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.contentList,
      onMouseOver: () => {
        this.handleIndex(index);
      },
      onMouseLeave: () => {
        this.handleIndex(-1);
      }
    }, __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.indexName
    }, index + 1), this.state.hoverIndex === index ? __jsx("img", {
      src: "/icons/play.svg",
      alt: "",
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.listPlayIcon,
      onClick: () => this.playSongHandler(track.track, "test")
    }) : __jsx("img", {
      src: "/icons/favorite.svg",
      alt: "",
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.favoriteIcon
    }), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trackName
    }, track.track.name), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trackArtist
    }, track.track.artists[0].name), __jsx("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.trackAlbum
    }, track.track.album.name), __jsx("img", {
      src: "/icons/more_dot.svg",
      alt: "",
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.moreDot
    })))) : null)))));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    playSong: uris => dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_3__["playSong"](uris))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Album/Album.js":
/*!************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Album/Album.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





function Album(props) {
  let url = 'https://api.spotify.com/v1/albums';

  let options = _objectSpread({}, props.options);

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Album.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired)]).isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
Album.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Album/AlbumTracks.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Album/AlbumTracks.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





function AlbumTracks(props) {
  let url = "https://api.spotify.com/v1/albums/".concat(props.id, "/tracks");

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

AlbumTracks.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
AlbumTracks.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (AlbumTracks);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Album/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Album/index.js ***!
  \************************************************************/
/*! exports provided: Album, AlbumTracks, useAlbum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Album */ "./node_modules/react-spotify-api/dist/Album/Album.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return _Album__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _AlbumTracks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbumTracks */ "./node_modules/react-spotify-api/dist/Album/AlbumTracks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlbumTracks", function() { return _AlbumTracks__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useAlbum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useAlbum */ "./node_modules/react-spotify-api/dist/Album/useAlbum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAlbum", function() { return _useAlbum__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Album/useAlbum.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Album/useAlbum.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ApiRequest/useApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js");


function useAlbum(id) {
  const url = Array.isArray(id) ? "https://api.spotify.com/v1/albums" : "https://api.spotify.com/v1/albums/".concat(id);
  const options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  const _useApiRequest = Object(_ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url, options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useAlbum);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useApiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js");



function ApiRequest(props) {
  const _useApiRequest = Object(_useApiRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(props.url, props.options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return props.children(data, loading, error);
}

ApiRequest.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  url: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
ApiRequest.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ApiRequest);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./node_modules/react-spotify-api/dist/utils/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ */ "./node_modules/react-spotify-api/dist/index.js");







function useApiRequest(url, options = {}) {
  const _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
        _React$useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState, 2),
        loading = _React$useState2[0],
        setLoading = _React$useState2[1];

  const _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
        _React$useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState3, 2),
        error = _React$useState4[0],
        setError = _React$useState4[1];

  const _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
        _React$useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_React$useState5, 2),
        data = _React$useState6[0],
        setData = _React$useState6[1];

  const token = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(___WEBPACK_IMPORTED_MODULE_5__["SpotifyApiContext"]);
  const axios = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(___WEBPACK_IMPORTED_MODULE_5__["SpotifyApiAxiosContext"]);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(() => {
    function loadData() {
      return _loadData.apply(this, arguments);
    }

    function _loadData() {
      _loadData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              res = null;
              data = null;

              if (!axios) {
                _context.next = 11;
                break;
              }

              _context.next = 7;
              return axios.get(url + Object(_utils__WEBPACK_IMPORTED_MODULE_4__["serialize"])(options), {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 7:
              res = _context.sent;
              data = res.data;
              _context.next = 17;
              break;

            case 11:
              _context.next = 13;
              return fetch(url + Object(_utils__WEBPACK_IMPORTED_MODULE_4__["serialize"])(options), {
                method: 'GET',
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 13:
              res = _context.sent;
              _context.next = 16;
              return res.json();

            case 16:
              data = _context.sent;

            case 17:
              setLoading(false);

              if (data.error) {
                setError(data.error);
              } else if (res.status !== 200) {
                setError({
                  status: res.status,
                  message: res.statusText
                });
              } else {
                setData(data);
                setError(null);
              }

              _context.next = 26;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](0);
              setLoading(false);
              setError(_context.t0);
              setData(null);

            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 21]]);
      }));
      return _loadData.apply(this, arguments);
    }

    loadData();
  }, [url, options.ids, options.q, token]);
  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useApiRequest);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Artist/Artist.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Artist/Artist.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");



const BASE_URL = 'https://api.spotify.com/v1/artists';

function Artist(props) {
  let url = BASE_URL;
  let options = {};

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Artist.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired)]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Artist);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Artist/ArtistAlbums.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Artist/ArtistAlbums.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistAlbums(props) {
  let url = BASE_URL + "/".concat(props.id, "/albums");

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

ArtistAlbums.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    include_groups: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
  }),
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
ArtistAlbums.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (ArtistAlbums);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Artist/ArtistRelated.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Artist/ArtistRelated.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");



const BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistRelated(props) {
  let url = BASE_URL + "/".concat(props.id, "/related-artists");
  let options = {};
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

ArtistRelated.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ArtistRelated);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Artist/ArtistTracks.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Artist/ArtistTracks.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistTracks(props) {
  let url = BASE_URL + "/".concat(props.id, "/top-tracks");

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

ArtistTracks.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }),
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
ArtistTracks.defaultProps = {
  options: {
    market: 'from_token'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ArtistTracks);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Artist/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Artist/index.js ***!
  \*************************************************************/
/*! exports provided: Artist, ArtistAlbums, ArtistTracks, ArtistRelated, useArtist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Artist */ "./node_modules/react-spotify-api/dist/Artist/Artist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return _Artist__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ArtistAlbums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArtistAlbums */ "./node_modules/react-spotify-api/dist/Artist/ArtistAlbums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistAlbums", function() { return _ArtistAlbums__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ArtistTracks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtistTracks */ "./node_modules/react-spotify-api/dist/Artist/ArtistTracks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistTracks", function() { return _ArtistTracks__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ArtistRelated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ArtistRelated */ "./node_modules/react-spotify-api/dist/Artist/ArtistRelated.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistRelated", function() { return _ArtistRelated__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useArtist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useArtist */ "./node_modules/react-spotify-api/dist/Artist/useArtist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useArtist", function() { return _useArtist__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Artist/useArtist.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Artist/useArtist.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ApiRequest/useApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js");

const BASE_URL = 'https://api.spotify.com/v1/artists';

function useArtist(id) {
  const url = Array.isArray(id) ? BASE_URL : BASE_URL + "/".concat(id);
  const options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  const _useApiRequest = Object(_ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url, options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useArtist);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/BrowseCategories.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/BrowseCategories.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategories(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

BrowseCategories.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    locale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrowseCategories);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/BrowseCategory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/BrowseCategory.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategory(props) {
  let url = BASE_URL + "/".concat(props.id);

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

BrowseCategory.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    locale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrowseCategory);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/BrowseCategoryPlaylists.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/BrowseCategoryPlaylists.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategoryPlaylists(props) {
  let url = BASE_URL + "/".concat(props.id, "/playlists");

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

BrowseCategoryPlaylists.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrowseCategoryPlaylists);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/BrowseFeatured.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/BrowseFeatured.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/browse';

function BrowseFeatured(props) {
  let url = BASE_URL + "/featured-playlists";

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

BrowseFeatured.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    locale: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    timestamp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrowseFeatured);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/BrowseNew.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/BrowseNew.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/browse/new-releases';

function BrowseNew(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

BrowseNew.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrowseNew);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/BrowseRecommendations.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/BrowseRecommendations.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/recommendations';

function BrowseRecommendations(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

BrowseRecommendations.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    seed_artists: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    seed_genres: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    seed_tracks: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BrowseRecommendations);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Browse/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Browse/index.js ***!
  \*************************************************************/
/*! exports provided: BrowseFeatured, BrowseNew, BrowseRecommendations, BrowseCategories, BrowseCategoryPlaylists, BrowseCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrowseFeatured__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrowseFeatured */ "./node_modules/react-spotify-api/dist/Browse/BrowseFeatured.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseFeatured", function() { return _BrowseFeatured__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BrowseNew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowseNew */ "./node_modules/react-spotify-api/dist/Browse/BrowseNew.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseNew", function() { return _BrowseNew__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _BrowseRecommendations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrowseRecommendations */ "./node_modules/react-spotify-api/dist/Browse/BrowseRecommendations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseRecommendations", function() { return _BrowseRecommendations__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _BrowseCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrowseCategories */ "./node_modules/react-spotify-api/dist/Browse/BrowseCategories.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseCategories", function() { return _BrowseCategories__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _BrowseCategoryPlaylists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BrowseCategoryPlaylists */ "./node_modules/react-spotify-api/dist/Browse/BrowseCategoryPlaylists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseCategoryPlaylists", function() { return _BrowseCategoryPlaylists__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _BrowseCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BrowseCategory */ "./node_modules/react-spotify-api/dist/Browse/BrowseCategory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseCategory", function() { return _BrowseCategory__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Playlist/Playlist.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Playlist/Playlist.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





function Playlist(props) {
  let url = "https://api.spotify.com/v1/playlists/".concat(props.id);

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Playlist.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    fields: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
};
Playlist.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Playlist);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Playlist/PlaylistImages.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Playlist/PlaylistImages.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");




function PlaylistImages(props) {
  let url = "https://api.spotify.com/v1/playlists/".concat(props.id, "/images");
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url
  }, (data, loading, error) => props.children(data, loading, error));
}

PlaylistImages.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PlaylistImages);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Playlist/PlaylistTracks.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Playlist/PlaylistTracks.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





function PlaylistTracks(props) {
  let url = "https://api.spotify.com/v1/playlists/".concat(props.id, "/tracks");

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

PlaylistTracks.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    fields: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
PlaylistTracks.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (PlaylistTracks);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Playlist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Playlist/index.js ***!
  \***************************************************************/
/*! exports provided: Playlist, PlaylistImages, PlaylistTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playlist */ "./node_modules/react-spotify-api/dist/Playlist/Playlist.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Playlist", function() { return _Playlist__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PlaylistImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaylistImages */ "./node_modules/react-spotify-api/dist/Playlist/PlaylistImages.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistImages", function() { return _PlaylistImages__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PlaylistTracks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaylistTracks */ "./node_modules/react-spotify-api/dist/Playlist/PlaylistTracks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistTracks", function() { return _PlaylistTracks__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Search/Search.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Search/Search.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





function Search(props) {
  const url = 'https://api.spotify.com/v1/search';

  const options = _objectSpread({}, props.options);

  const type = [];
  if (props.album) type.push('album');
  if (props.artist) type.push('artist');
  if (props.playlist) type.push('playlist');
  if (props.track) type.push('track');
  options.type = type.join(',');
  options.q = props.query;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => {
    return props.children(data, loading, error);
  });
}

Search.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  album: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  artist: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  playlist: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  track: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    include_external: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
Search.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Search/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Search/index.js ***!
  \*************************************************************/
/*! exports provided: Search, useSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "./node_modules/react-spotify-api/dist/Search/Search.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSearch */ "./node_modules/react-spotify-api/dist/Search/useSearch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return _useSearch__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Search/useSearch.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Search/useSearch.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ApiRequest/useApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



function useSearch(query, options) {
  const url = 'https://api.spotify.com/v1/search';
  const type = [];
  if (options.album) type.push('album');
  if (options.artist) type.push('artist');
  if (options.playlist) type.push('playlist');
  if (options.track) type.push('track');

  const optionsObj = _objectSpread({
    q: query,
    type: type.join(',')
  }, options);

  const _useApiRequest = Object(_ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_1__["default"])(url, optionsObj),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useSearch);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Track/Track.js":
/*!************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Track/Track.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}





function Track(props) {
  let url = 'https://api.spotify.com/v1/tracks';

  let options = _objectSpread({}, props.options);

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Track.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired)]).isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
};
Track.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Track/TrackAnalysis.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Track/TrackAnalysis.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");




function TrackAnalysis(props) {
  let url = "https://api.spotify.com/v1/audio-analysis/".concat(props.id);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url
  }, (data, loading, error) => props.children(data, loading, error));
}

TrackAnalysis.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TrackAnalysis);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Track/TrackFeatures.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Track/TrackFeatures.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");




function TrackFeatures(props) {
  let url = 'https://api.spotify.com/v1/audio-features';
  let options = {};

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

TrackFeatures.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired)]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TrackFeatures);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Track/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Track/index.js ***!
  \************************************************************/
/*! exports provided: Track, TrackFeatures, TrackAnalysis, useTrack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Track__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Track */ "./node_modules/react-spotify-api/dist/Track/Track.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return _Track__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TrackFeatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrackFeatures */ "./node_modules/react-spotify-api/dist/Track/TrackFeatures.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrackFeatures", function() { return _TrackFeatures__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TrackAnalysis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TrackAnalysis */ "./node_modules/react-spotify-api/dist/Track/TrackAnalysis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrackAnalysis", function() { return _TrackAnalysis__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useTrack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useTrack */ "./node_modules/react-spotify-api/dist/Track/useTrack.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrack", function() { return _useTrack__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/react-spotify-api/dist/Track/useTrack.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/Track/useTrack.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ApiRequest/useApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js");

const BASE_URL = 'https://api.spotify.com/v1/tracks';

function useTrack(id) {
  const url = Array.isArray(id) ? BASE_URL : BASE_URL + "/".concat(id);
  const options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  const _useApiRequest = Object(_ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url, options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useTrack);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/User.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/User.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");




function User(props) {
  let url = 'https://api.spotify.com/v1';
  let options = {};

  if (props.id) {
    url += "/users/".concat(props.id);
  } else {
    url += "/me";
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

User.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/UserAlbums.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/UserAlbums.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/me/albums';

function UserAlbums(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserAlbums.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
UserAlbums.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (UserAlbums);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/UserArtists.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/UserArtists.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/me/following';

function UserArtists(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options, {
    type: 'artist'
  });

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserArtists.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    after: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
UserArtists.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (UserArtists);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/UserPlaylists.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/UserPlaylists.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1';

function UserPlaylists(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options);

  if (props.id) {
    url += "/users/".concat(props.id, "/playlists");
  } else {
    url += "/me/playlists";
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserPlaylists.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number])
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
UserPlaylists.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (UserPlaylists);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/UserTop.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/UserTop.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/me/top';

function UserTop(props) {
  let url = BASE_URL + "/".concat(props.type);

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserTop.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    time_range: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['artists', 'tracks']).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
UserTop.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (UserTop);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/UserTracks.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/UserTracks.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ApiRequest/ApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




const BASE_URL = 'https://api.spotify.com/v1/me/tracks';

function UserTracks(props) {
  let url = BASE_URL;

  let options = _objectSpread({}, props.options);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ApiRequest_ApiRequest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserTracks.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
    market: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
UserTracks.defaultProps = {
  options: {}
};
/* harmony default export */ __webpack_exports__["default"] = (UserTracks);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/index.js ***!
  \***********************************************************/
/*! exports provided: User, UserPlaylists, UserTracks, UserTop, UserArtists, UserAlbums, useUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./node_modules/react-spotify-api/dist/User/User.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _UserPlaylists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPlaylists */ "./node_modules/react-spotify-api/dist/User/UserPlaylists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPlaylists", function() { return _UserPlaylists__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UserTracks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserTracks */ "./node_modules/react-spotify-api/dist/User/UserTracks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserTracks", function() { return _UserTracks__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _UserTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserTop */ "./node_modules/react-spotify-api/dist/User/UserTop.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserTop", function() { return _UserTop__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _UserArtists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserArtists */ "./node_modules/react-spotify-api/dist/User/UserArtists.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserArtists", function() { return _UserArtists__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _UserAlbums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserAlbums */ "./node_modules/react-spotify-api/dist/User/UserAlbums.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAlbums", function() { return _UserAlbums__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _useUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useUser */ "./node_modules/react-spotify-api/dist/User/useUser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return _useUser__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/***/ }),

/***/ "./node_modules/react-spotify-api/dist/User/useUser.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/User/useUser.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ApiRequest/useApiRequest */ "./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js");


function useUser(id) {
  const url = id ? "https://api.spotify.com/v1/users/".concat(id) : 'https://api.spotify.com/v1/me';

  const _useApiRequest = Object(_ApiRequest_useApiRequest__WEBPACK_IMPORTED_MODULE_0__["default"])(url),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useUser);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/context.js":
/*!********************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/context.js ***!
  \********************************************************/
/*! exports provided: SpotifyApiAxiosContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyApiAxiosContext", function() { return SpotifyApiAxiosContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SpotifyApiContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const SpotifyApiAxiosContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (SpotifyApiContext);

/***/ }),

/***/ "./node_modules/react-spotify-api/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/index.js ***!
  \******************************************************/
/*! exports provided: Artist, ArtistAlbums, ArtistTracks, ArtistRelated, Track, TrackFeatures, TrackAnalysis, Album, AlbumTracks, BrowseFeatured, BrowseNew, BrowseCategoryPlaylists, BrowseRecommendations, BrowseCategories, BrowseCategory, Playlist, PlaylistTracks, PlaylistImages, User, UserPlaylists, UserTop, UserArtists, UserAlbums, UserTracks, Search, useArtist, useTrack, useAlbum, useUser, useSearch, SpotifyApiContext, SpotifyApiAxiosContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Artist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Artist */ "./node_modules/react-spotify-api/dist/Artist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Artist", function() { return _Artist__WEBPACK_IMPORTED_MODULE_0__["Artist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistAlbums", function() { return _Artist__WEBPACK_IMPORTED_MODULE_0__["ArtistAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistTracks", function() { return _Artist__WEBPACK_IMPORTED_MODULE_0__["ArtistTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArtistRelated", function() { return _Artist__WEBPACK_IMPORTED_MODULE_0__["ArtistRelated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useArtist", function() { return _Artist__WEBPACK_IMPORTED_MODULE_0__["useArtist"]; });

/* harmony import */ var _Track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Track */ "./node_modules/react-spotify-api/dist/Track/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return _Track__WEBPACK_IMPORTED_MODULE_1__["Track"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrackFeatures", function() { return _Track__WEBPACK_IMPORTED_MODULE_1__["TrackFeatures"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TrackAnalysis", function() { return _Track__WEBPACK_IMPORTED_MODULE_1__["TrackAnalysis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTrack", function() { return _Track__WEBPACK_IMPORTED_MODULE_1__["useTrack"]; });

/* harmony import */ var _Album__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Album */ "./node_modules/react-spotify-api/dist/Album/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return _Album__WEBPACK_IMPORTED_MODULE_2__["Album"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlbumTracks", function() { return _Album__WEBPACK_IMPORTED_MODULE_2__["AlbumTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAlbum", function() { return _Album__WEBPACK_IMPORTED_MODULE_2__["useAlbum"]; });

/* harmony import */ var _Browse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Browse */ "./node_modules/react-spotify-api/dist/Browse/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseFeatured", function() { return _Browse__WEBPACK_IMPORTED_MODULE_3__["BrowseFeatured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseNew", function() { return _Browse__WEBPACK_IMPORTED_MODULE_3__["BrowseNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseCategoryPlaylists", function() { return _Browse__WEBPACK_IMPORTED_MODULE_3__["BrowseCategoryPlaylists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseRecommendations", function() { return _Browse__WEBPACK_IMPORTED_MODULE_3__["BrowseRecommendations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseCategories", function() { return _Browse__WEBPACK_IMPORTED_MODULE_3__["BrowseCategories"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowseCategory", function() { return _Browse__WEBPACK_IMPORTED_MODULE_3__["BrowseCategory"]; });

/* harmony import */ var _Playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Playlist */ "./node_modules/react-spotify-api/dist/Playlist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Playlist", function() { return _Playlist__WEBPACK_IMPORTED_MODULE_4__["Playlist"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistTracks", function() { return _Playlist__WEBPACK_IMPORTED_MODULE_4__["PlaylistTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaylistImages", function() { return _Playlist__WEBPACK_IMPORTED_MODULE_4__["PlaylistImages"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./node_modules/react-spotify-api/dist/User/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["User"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserPlaylists", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["UserPlaylists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserTop", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["UserTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserArtists", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["UserArtists"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAlbums", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["UserAlbums"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserTracks", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["UserTracks"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return _User__WEBPACK_IMPORTED_MODULE_5__["useUser"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Search */ "./node_modules/react-spotify-api/dist/Search/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_6__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSearch", function() { return _Search__WEBPACK_IMPORTED_MODULE_6__["useSearch"]; });

/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/react-spotify-api/dist/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpotifyApiContext", function() { return _context__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpotifyApiAxiosContext", function() { return _context__WEBPACK_IMPORTED_MODULE_7__["SpotifyApiAxiosContext"]; });



















/***/ }),

/***/ "./node_modules/react-spotify-api/dist/utils/index.js":
/*!************************************************************!*\
  !*** ./node_modules/react-spotify-api/dist/utils/index.js ***!
  \************************************************************/
/*! exports provided: serialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return serialize; });
function serialize(obj) {
  const str = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
    }
  }

  return str.length > 0 ? '?' + str.join('&') : '';
}

/***/ }),

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/action */ "./redux/action/index.js");
/* harmony import */ var _$axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../$axios */ "./$axios.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spotify_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spotify-api */ "./node_modules/react-spotify-api/dist/index.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home */ "./components/Home.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleIndex", index => {
      this.setState({
        index
      });
    });

    this.state = {
      index: 0
    };
    this.token = null;
  }

  componentDidMount() {
    this.setState({
      token: localStorage.getItem("react-spotify-access-token")
    });
    let newUser = localStorage.getItem("newUser");

    if (newUser) {
      this.props.setUser(JSON.parse(newUser));
    } // console.log(this.props, "cdm");

  }

  render() {
    // console.log(this.props.recently_played, "user");
    return __jsx("div", {
      className: "content"
    }, this.state.token ? __jsx(react_spotify_api__WEBPACK_IMPORTED_MODULE_4__["SpotifyApiAxiosContext"].Provider, {
      value: _$axios__WEBPACK_IMPORTED_MODULE_2__["default"]
    }, __jsx(react_spotify_api__WEBPACK_IMPORTED_MODULE_4__["SpotifyApiContext"].Provider, {
      value: this.state.token
    }, __jsx("div", {
      className: "content-header"
    }, "Home"), __jsx(_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
      handleIndex: this.handleIndex,
      tracks: this.props.recently_played
    }))) : null);
  }

}

const mapStateToProps = state => {
  return {
    user: state.current_user,
    backgroundImage: state.backgroundImage,
    recently_played: state.recently_played
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({
      type: _redux_action__WEBPACK_IMPORTED_MODULE_1__["SET_USER"],
      user
    }),
    fetchRecentlyPlayed: options => dispatch(_redux_action__WEBPACK_IMPORTED_MODULE_1__["fetchRecentlyPlayed"](options))
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./redux/action/index.js":
/*!*******************************!*\
  !*** ./redux/action/index.js ***!
  \*******************************/
/*! exports provided: SET_USER, GET_RECENTLY_PLAYED, SET_RECENTLY_PLAYED, SET_PLAY_NOW, RESET_PLAY_NOW, SET_CURRENTLY_PLAYING, SET_IS_PLAYING, SET_BACKGROUND_IMAGE, PLAY_SONG_START, PLAY_SONG_SUCCESS, PLAY_SONG_FAIL, playSong, pauseSong, fetchRecentlyPlayed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER", function() { return SET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RECENTLY_PLAYED", function() { return GET_RECENTLY_PLAYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_RECENTLY_PLAYED", function() { return SET_RECENTLY_PLAYED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PLAY_NOW", function() { return SET_PLAY_NOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_PLAY_NOW", function() { return RESET_PLAY_NOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENTLY_PLAYING", function() { return SET_CURRENTLY_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_PLAYING", function() { return SET_IS_PLAYING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_BACKGROUND_IMAGE", function() { return SET_BACKGROUND_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_SONG_START", function() { return PLAY_SONG_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_SONG_SUCCESS", function() { return PLAY_SONG_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLAY_SONG_FAIL", function() { return PLAY_SONG_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playSong", function() { return playSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pauseSong", function() { return pauseSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecentlyPlayed", function() { return fetchRecentlyPlayed; });
/* harmony import */ var _$axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../$axios */ "./$axios.js");
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
      Object(_$axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      Object(_$axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      Object(_$axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

/***/ "./styles/home.module.css":
/*!********************************!*\
  !*** ./styles/home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"contentSelector": "home_contentSelector__Uf9k7",
	"coverContainer": "home_coverContainer__2ynuV",
	"contentCoverList": "home_contentCoverList__2u6ja",
	"contentCoverContainer": "home_contentCoverContainer__2Ca38",
	"contentTitle": "home_contentTitle__EsrC6",
	"contentCover": "home_contentCover__3KbEa",
	"nextIcon": "home_nextIcon__24T5s",
	"prevIcon": "home_prevIcon__d1034",
	"contentLine": "home_contentLine__2bfot",
	"playButtonShadow": "home_playButtonShadow__16l_n",
	"contentListContainer": "home_contentListContainer__i4FSK",
	"songListContainer": "home_songListContainer__VIDww",
	"contentList": "home_contentList__1OSpf",
	"indexName": "home_indexName__3fUM6",
	"favoriteIcon": "home_favoriteIcon__1r_T5",
	"listPlayIcon": "home_listPlayIcon__1DrOm",
	"trackName": "home_trackName__RD06E",
	"trackArtist": "home_trackArtist__3yAtF",
	"trackAlbum": "home_trackAlbum__3q2H9",
	"moreDot": "home_moreDot__1_zHi"
};

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\1-Project\soundify-web\pages\Home.js */"./pages/Home.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=Home.js.map