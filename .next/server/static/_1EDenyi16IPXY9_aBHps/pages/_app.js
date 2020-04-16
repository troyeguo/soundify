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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: ./redux/action/index.js
var redux_action = __webpack_require__("X4ED");

// CONCATENATED MODULE: ./redux/reducer/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer_initialState = {
  current_user: null,
  recently_played: null,
  play_now: {
    type: null,
    uri: null
  },
  currently_playing: null,
  isPlaying: false,
  backgroundImage: "linear-gradient(rgb(58, 91, 95), rgb(6, 9, 10) 85%)"
};

const reducer = (state = reducer_initialState, action) => {
  switch (action.type) {
    case redux_action["h" /* SET_USER */]:
      return _objectSpread({}, state, {
        isLoggedIn: true,
        current_user: _objectSpread({}, state.current_user, {}, action.user)
      });

    case redux_action["g" /* SET_RECENTLY_PLAYED */]:
      return _objectSpread({}, state, {
        recently_played: action.recently_played
      });

    case redux_action["f" /* SET_PLAY_NOW */]:
      return _objectSpread({}, state, {
        play_now: {
          type: action.uri_type,
          uri: action.uri
        }
      });

    case redux_action["b" /* RESET_PLAY_NOW */]:
      return _objectSpread({}, state, {
        play_now: {
          type: null,
          uri: null
        }
      });

    case redux_action["d" /* SET_CURRENTLY_PLAYING */]:
      return _objectSpread({}, state, {
        currently_playing: action.song
      });

    case redux_action["e" /* SET_IS_PLAYING */]:
      return _objectSpread({}, state, {
        isPlaying: action.isPlaying
      });

    case redux_action["c" /* SET_BACKGROUND_IMAGE */]:
      return _objectSpread({}, state, {
        backgroundImage: action.backgroundImage
      });

    case redux_action["a" /* PLAY_SONG_START */]:
      return _objectSpread({}, state, {
        play_now: null
      });

    default:
      return state;
  }
};

/* harmony default export */ var redux_reducer = (reducer);
// CONCATENATED MODULE: ./redux/store.js





function initializeStore(initialState) {
  return Object(external_redux_["createStore"])(redux_reducer, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
}
// CONCATENATED MODULE: ./lib/redux.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function redux_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function redux_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { redux_ownKeys(Object(source), true).forEach(function (key) { redux_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { redux_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function redux_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var redux = (App => {
  return class AppWithRedux extends external_react_default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return redux_objectSpread({}, appProps, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./styles/sidebar.module.css
var sidebar_module = __webpack_require__("Rvrb");
var sidebar_module_default = /*#__PURE__*/__webpack_require__.n(sidebar_module);

// CONCATENATED MODULE: ./components/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;

function Sidebar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const menuList = ["Home", "Discover", "Playlist", "Album", "Artist"];

class Sidebar_Sidebar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Sidebar_defineProperty(this, "state", {
      currentIndex: 0
    });

    Sidebar_defineProperty(this, "handleClick", index => {
      this.setState({
        currentIndex: index
      });
    });
  }

  componentDidMount() {
    let route = this.props.router.pathname; // console.log(this.props.router.pathname, "this.props.router.pathname");

    if (route === "/") {
      route = "/Home";
    }

    this.setState({
      currentIndex: menuList.indexOf(route.substring(1))
    });
  }

  render() {
    return Sidebar_jsx(external_react_default.a.Fragment, null, Sidebar_jsx("div", {
      className: sidebar_module_default.a.sidebar
    }, Sidebar_jsx("div", {
      className: sidebar_module_default.a.logo
    }, Sidebar_jsx(link_default.a, {
      href: "/"
    }, Sidebar_jsx("div", null, Sidebar_jsx("img", {
      className: sidebar_module_default.a.logoImg,
      src: "/icons/logo.png",
      alt: ""
    }), Sidebar_jsx("span", {
      className: sidebar_module_default.a.logoText
    }, "Soundify")))), Sidebar_jsx("ul", {
      className: sidebar_module_default.a.menu
    }, menuList.map((item, index) => {
      return Sidebar_jsx(link_default.a, {
        href: `/${item}`,
        key: item
      }, Sidebar_jsx("li", {
        className: sidebar_module_default.a.menuList,
        onClick: () => {
          this.handleClick(index);
        }
      }, Sidebar_jsx("img", {
        src: `/icons/${item}.svg`,
        alt: ""
      }), Sidebar_jsx("span", {
        className: sidebar_module_default.a.menuText
      }, item), index === this.state.currentIndex ? Sidebar_jsx("div", {
        className: sidebar_module_default.a.menuSelector
      }) : null));
    }))));
  }

}

/* harmony default export */ var components_Sidebar = (Object(router_["withRouter"])(Sidebar_Sidebar));
// EXTERNAL MODULE: ./styles/player.module.css
var player_module = __webpack_require__("NNwq");
var player_module_default = /*#__PURE__*/__webpack_require__.n(player_module);

// EXTERNAL MODULE: ./$axios.js
var $axios = __webpack_require__("gbem");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/LoadingPage.js


var LoadingPage_jsx = external_react_default.a.createElement;
/* harmony default export */ var LoadingPage = (() => LoadingPage_jsx("div", {
  className: "jsx-94188633" + " " + "root"
}, LoadingPage_jsx("div", {
  className: "jsx-94188633" + " " + "showbox"
}, LoadingPage_jsx("div", {
  className: "jsx-94188633" + " " + "loader"
}, LoadingPage_jsx("svg", {
  viewBox: "25 25 50 50",
  className: "jsx-94188633" + " " + "circular"
}, LoadingPage_jsx("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none",
  strokeWidth: "2",
  strokeMiterlimit: "10",
  className: "jsx-94188633" + " " + "path"
})))), LoadingPage_jsx(style_default.a, {
  id: "94188633"
}, [".loader.jsx-94188633{position:relative;margin:auto auto;width:80px;left:20px;}", ".loader.jsx-94188633:before{content:\"\";display:block;padding-top:100%;}", ".circular.jsx-94188633{-webkit-animation:rotate-jsx-94188633 2s linear infinite;animation:rotate-jsx-94188633 2s linear infinite;height:100%;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;}", ".path.jsx-94188633{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash-jsx-94188633 1.5s ease-in-out infinite,color-jsx-94188633 6s ease-in-out infinite;animation:dash-jsx-94188633 1.5s ease-in-out infinite,color-jsx-94188633 6s ease-in-out infinite;stroke-linecap:round;}", "@-webkit-keyframes rotate-jsx-94188633{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes rotate-jsx-94188633{100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@-webkit-keyframes dash-jsx-94188633{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px;}}", "@keyframes dash-jsx-94188633{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px;}100%{stroke-dasharray:89,200;stroke-dashoffset:-124px;}}", "@-webkit-keyframes color-jsx-94188633{100%,0%{stroke:#d62d20;}40%{stroke:#0057e7;}66%{stroke:#008744;}80%,90%{stroke:#ffa700;}}", "@keyframes color-jsx-94188633{100%,0%{stroke:#d62d20;}40%{stroke:#0057e7;}66%{stroke:#008744;}80%,90%{stroke:#ffa700;}}", "body.jsx-94188633{background-color:#eee;}", ".showbox.jsx-94188633{position:absolute;top:0;bottom:0;left:0;right:0;padding:5%;}"])));
// CONCATENATED MODULE: ./components/AudioAnimation.js


var AudioAnimation_jsx = external_react_default.a.createElement;
const AudioAnimation = () => AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "root"
}, AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-frame"
}, AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block first-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block second-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block third-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block fourth-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block fifth-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block sixth-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block seventh-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block eighth-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block ninth-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block tenth-block"
}), AudioAnimation_jsx("div", {
  className: "jsx-1802312020" + " " + "audio-anim-block eleventh-block"
})), AudioAnimation_jsx(style_default.a, {
  id: "1802312020"
}, [".audio-anim-block.jsx-1802312020{display:inline-block;width:6px;height:90px;background-color:rgb(0,84,148);margin:2px;border-radius:5px;}", "@-webkit-keyframes first-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}25%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}50%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}100%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}}", "@keyframes first-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}25%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}50%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}100%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}}", ".audio-anim-block.first-block.jsx-1802312020{-webkit-animation-name:first-block-jsx-1802312020;animation-name:first-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes second-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}25%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}50%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}100%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}}", "@keyframes second-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}25%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}50%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}100%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}}", ".audio-anim-block.second-block.jsx-1802312020{-webkit-animation-name:second-block-jsx-1802312020;animation-name:second-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes third-block-jsx-1802312020{0%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}25%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}50%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}100%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}", "@keyframes third-block-jsx-1802312020{0%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}25%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}50%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}100%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);}}", ".audio-anim-block.third-block.jsx-1802312020{-webkit-animation-name:third-block-jsx-1802312020;animation-name:third-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes fourth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}25%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}50%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}100%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}}", "@keyframes fourth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}25%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}50%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}100%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}}", ".audio-anim-block.fourth-block.jsx-1802312020{-webkit-animation-name:fourth-block-jsx-1802312020;animation-name:fourth-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes fifth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}25%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}50%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}100%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}}", "@keyframes fifth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}25%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}50%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}100%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}}", ".audio-anim-block.fifth-block.jsx-1802312020{-webkit-animation-name:fifth-block-jsx-1802312020;animation-name:fifth-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes sixth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}25%{-webkit-transform:scaleY(0.8);-ms-transform:scaleY(0.8);transform:scaleY(0.8);}50%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}100%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}}", "@keyframes sixth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}25%{-webkit-transform:scaleY(0.8);-ms-transform:scaleY(0.8);transform:scaleY(0.8);}50%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}100%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}}", ".audio-anim-block.sixth-block.jsx-1802312020{-webkit-animation-name:sixth-block-jsx-1802312020;animation-name:sixth-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes seventh-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}25%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}50%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}100%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}}", "@keyframes seventh-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}25%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}50%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}100%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}}", ".audio-anim-block.seventh-block.jsx-1802312020{-webkit-animation-name:seventh-block-jsx-1802312020;animation-name:seventh-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes eighth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}25%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}50%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}}", "@keyframes eighth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}25%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}50%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}}", ".audio-anim-block.eighth-block.jsx-1802312020{-webkit-animation-name:eighth-block-jsx-1802312020;animation-name:eighth-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes ninth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}25%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}50%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}}", "@keyframes ninth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.7);-ms-transform:scaleY(0.7);transform:scaleY(0.7);}25%{-webkit-transform:scaleY(0.9);-ms-transform:scaleY(0.9);transform:scaleY(0.9);}50%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}}", ".audio-anim-block.ninth-block.jsx-1802312020{-webkit-animation-name:ninth-block-jsx-1802312020;animation-name:ninth-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes tenth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}25%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}50%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}}", "@keyframes tenth-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}25%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}50%{-webkit-transform:scaleY(0.4);-ms-transform:scaleY(0.4);transform:scaleY(0.4);}100%{-webkit-transform:scaleY(0.3);-ms-transform:scaleY(0.3);transform:scaleY(0.3);}}", ".audio-anim-block.tenth-block.jsx-1802312020{-webkit-animation-name:tenth-block-jsx-1802312020;animation-name:tenth-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}", "@-webkit-keyframes eleventh-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}25%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}50%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}100%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}}", "@keyframes eleventh-block-jsx-1802312020{0%{-webkit-transform:scaleY(0.1);-ms-transform:scaleY(0.1);transform:scaleY(0.1);}25%{-webkit-transform:scaleY(0.5);-ms-transform:scaleY(0.5);transform:scaleY(0.5);}50%{-webkit-transform:scaleY(0.6);-ms-transform:scaleY(0.6);transform:scaleY(0.6);}100%{-webkit-transform:scaleY(0.2);-ms-transform:scaleY(0.2);transform:scaleY(0.2);}}", ".audio-anim-block.eleventh-block.jsx-1802312020{-webkit-animation-name:eleventh-block-jsx-1802312020;animation-name:eleventh-block-jsx-1802312020;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-timing-function:linear;}"]));
const AudioStop = () => {
  return AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "root"
  }, AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-frame"
  }, AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block first-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block second-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block third-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block fourth-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block fifth-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block sixth-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block seventh-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block eighth-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block ninth-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block tenth-block"
  }), AudioAnimation_jsx("div", {
    className: "jsx-1112005547" + " " + "audio-anim-block eleventh-block"
  })), AudioAnimation_jsx(style_default.a, {
    id: "1112005547"
  }, [".audio-anim-frame.jsx-1112005547{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".audio-anim-block.jsx-1112005547{display:inline-block;width:6px;height:90px;background-color:rgb(0,84,148);margin:2px;border-radius:5px;}", ".first-block.jsx-1112005547{height:30px;}", ".second-block.jsx-1112005547{height:50px;}", ".third-block.jsx-1112005547{height:50px;}", ".fourth-block.jsx-1112005547{height:30px;}", ".fifth-block.jsx-1112005547{height:70px;}", ".sixth-block.jsx-1112005547{height:50px;}", ".seventh-block.jsx-1112005547{height:80px;}", ".eighth-block.jsx-1112005547{height:40px;}", ".ninth-block.jsx-1112005547{height:50px;}", ".tenth-block.jsx-1112005547{height:70px;}", ".eleventh-block.jsx-1112005547{height:30px;}"]));
};
// CONCATENATED MODULE: ./components/Player.js
var Player_jsx = external_react_default.a.createElement;

function Player_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










class Player_Player extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Player_defineProperty(this, "checkForPlayer", () => {
      if (window.Spotify) {
        console.log("checkForPlayer");
        clearInterval(this.playerCheckInterval);
        this.player = new window.Spotify.Player({
          name: "Soundify",
          getOAuthToken: cb => {
            cb(this.state.token);
          }
        });
      }

      if (this.player) {
        this.createEventHandlers();
        this.player.connect();
      }
    });

    Player_defineProperty(this, "createEventHandlers", () => {
      this.player.on("initialization_error", e => {
        console.error("Initialization error ", e);
        this.setState({
          player_init_error: true
        });
      });
      this.player.on("authentication_error", e => console.error("Authentication error ", e));
      this.player.on("account_error", e => console.error("Account error ", e));
      this.player.on("playback_error", e => console.error("Playback error ", e));
      this.player.on("player_state_changed", state => {
        if (state) {
          // console.log("player state changed", state);
          let {
            duration,
            position
          } = state; // duration = 100%
          // position = ?%

          let val = position * 100 / duration;
          this.setState({
            playingInfo: state,
            playing: !state.paused,
            positionSliderValue: val
          }); // Music started playing, start the position interval

          if (!this.props.isPlaying && !state.paused) {
            this.positionCheckInterval = setInterval(() => {
              this.checkChangePosition();
            }, 1000);
          } // Music stopped playing, clear the position interval


          if (this.props.isPlaying && state.paused) {
            clearInterval(this.positionCheckInterval);
          }

          if (this.props.isPlaying === state.paused) {
            this.props.setIsPlaying(!state.paused);
          }

          if (!this.props.currentlyPlaying || this.props.currentlyPlaying !== state.track_window.current_track.name) {
            let {
              current_track
            } = state.track_window;
            this.props.setCurrentlyPlaying(current_track.name);
          }
        }
      });
      this.player.on("ready", data => {
        let {
          device_id
        } = data;
        console.log("PLAYER CONNECTED ", device_id); // await this.setState({ deviceId: device_id });

        this.setState({
          deviceId: device_id
        }, () => {
          this.transferPlaybackHere();
        });
        let newUser = localStorage.getItem("newUser"); // console.log(newUser, "newUser");

        if (newUser) {
          this.setState({
            user: JSON.parse(newUser)
          });
        }

        this.player.getVolume().then(vol => {
          let volume = vol * 100;
          this.setState({
            volumeSliderValue: volume
          });
        });
      });
    });

    Player_defineProperty(this, "checkChangePosition", () => {
      this.player.getCurrentState().then(state => {
        if (state) {
          let {
            duration,
            position
          } = state; // duration = 100%
          // position = ?%

          let val = position * 100 / duration;

          if (val !== this.state.positionSliderValue) {
            this.setState({
              positionSliderValue: val
            });
          }

          let positionStamp = this.milisToMinutesAndSeconds(state.position);
          let durationStamp = this.milisToMinutesAndSeconds(state.duration);
          this.setState({
            positionStamp,
            durationStamp
          });
        }
      });
    });

    Player_defineProperty(this, "transferPlaybackHere", () => {
      // ONLY FOR PREMIUM USERS - transfer the playback automatically to the web app.
      // for normal users they have to go in the spotify app/website and change the device manually
      // user type is stored in redux state => this.props.user.type
      const {
        deviceId
      } = this.state;
      fetch("https://api.spotify.com/v1/me/player", {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${this.state.token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          device_ids: [deviceId],
          play: false
        })
      }).then(res => {
        // console.log("status", res);
        if (res.status === 204) {
          $axios["a" /* default */].get("https://api.spotify.com/v1/me/player").then(() => {
            // Transferred playback successfully, get current timestamp
            this.checkChangePosition();
          }).catch(err => {
            console.log(err);
          });
        }
      }).catch(e => console.error(e)); // console.log('Hello', this.props);
      // if (this.props.user.product === 'premium') {
      // } else {
      //   console.log(
      //     'Cannot transfer playback automatically because you are not a premium user.'
      //   );
      // }
    });

    Player_defineProperty(this, "onPrevClick", () => {
      this.player.previousTrack();
    });

    Player_defineProperty(this, "onPlayClick", () => {
      this.player.togglePlay();
    });

    Player_defineProperty(this, "onNextClick", () => {
      this.player.nextTrack();
    });

    Player_defineProperty(this, "milisToMinutesAndSeconds", mil => {
      let minutes = Math.floor(mil / 60000);
      let seconds = (mil % 60000 / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    });

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
      noConnection: false
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
        this.setState({
          noConnection: true
        });
        clearInterval(countInterval);
      }
    }, 1000);
    this.setState({
      token: localStorage.getItem("react-spotify-access-token")
    });
    let newUser = localStorage.getItem("newUser"); // console.log(newUser, "newUser");

    if (newUser) {
      this.setState({
        user: JSON.parse(newUser)
      });
    } // console.log(Spotify, "etata");


    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log("onready");
      window.Spotify = Spotify;
    }; // console.log(window.Spotify, "etata");


    this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
  }

  render() {
    // console.log(this.state.playingInfo, this.state.user, "this.state.user");
    if (!(this.state.playingInfo && this.state.user) && this.state.noConnection) {
      return Player_jsx("div", {
        className: player_module_default.a.player
      }, Player_jsx("div", {
        className: player_module_default.a.loadingContainer
      }, Player_jsx("div", {
        className: player_module_default.a.loadingText
      }, "This takes longer than expected, first make sure your internet connection to spotify is fine, then go to spotify and select Soundify manually in your spotify connect devices, refresh the website after all work is done")));
    }

    if (!this.state.playingInfo || !this.state.user) {
      return Player_jsx("div", {
        className: player_module_default.a.player
      }, Player_jsx("div", {
        className: player_module_default.a.loadingContainer
      }, Player_jsx("div", {
        style: {
          position: "relative",
          left: "70px",
          bottom: "130px"
        }
      }, Player_jsx(LoadingPage, null)), Player_jsx("div", {
        className: player_module_default.a.loadingText
      }, "Connecting to Spotify Player...")));
    } // console.log(this.state.playingInfo);


    return Player_jsx("div", {
      className: player_module_default.a.player
    }, Player_jsx("div", {
      className: player_module_default.a.playerHeader
    }, Player_jsx("div", null, Player_jsx("img", {
      className: player_module_default.a.avatar,
      src: this.state.user.avatar,
      alt: ""
    }), Player_jsx("span", {
      className: player_module_default.a.nickname
    }, this.state.user.displayName))), Player_jsx("div", {
      className: player_module_default.a.playerCoverContainer
    }, this.state.playing ? Player_jsx("img", {
      className: player_module_default.a.playerCoverAnimation,
      src: this.state.playingInfo.track_window.current_track.album.images[0].url,
      alt: ""
    }) : Player_jsx("img", {
      className: player_module_default.a.playerCover,
      src: this.state.playingInfo.track_window.current_track.album.images[0].url,
      alt: ""
    })), Player_jsx("div", {
      className: player_module_default.a.musicInfo
    }, Player_jsx("div", {
      className: player_module_default.a.songName
    }, this.state.playingInfo.track_window.current_track.name), Player_jsx("div", {
      className: player_module_default.a.artistName
    }, this.state.playingInfo.track_window.current_track.artists[0].name)), Player_jsx("div", {
      className: player_module_default.a.playerPanel
    }, Player_jsx("img", {
      src: "/icons/prev.svg",
      alt: "",
      onClick: this.onPrevClick
    }), this.state.playing ? Player_jsx("img", {
      src: "/icons/playing.svg",
      alt: "",
      style: {
        width: "45px"
      },
      onClick: this.onPlayClick
    }) : Player_jsx("img", {
      src: "/icons/play.svg",
      alt: "",
      style: {
        width: "45px"
      },
      onClick: this.onPlayClick
    }), Player_jsx("img", {
      src: "/icons/next.svg",
      alt: "",
      onClick: this.onNextClick
    })), Player_jsx("div", {
      className: player_module_default.a.playerNext
    }, this.state.playing ? Player_jsx(AudioAnimation, null) : Player_jsx(AudioStop, null)), Player_jsx("div", {
      className: player_module_default.a.line
    }));
  }

}

const mapStateToProps = state => {
  return {
    recently_played: state.recently_played,
    user: state.current_user,
    playNow: state.play_now,
    currentlyPlaying: state.currently_playing,
    isPlaying: state.isPlaying
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({
      type: redux_action["h" /* SET_USER */],
      user
    }),
    fetchRecentlyPlayed: options => dispatch(redux_action["i" /* fetchRecentlyPlayed */](options)),
    resetPlayNow: () => dispatch({
      type: redux_action["b" /* RESET_PLAY_NOW */]
    }),
    setCurrentlyPlaying: song => dispatch({
      type: redux_action["d" /* SET_CURRENTLY_PLAYING */],
      song
    }),
    setIsPlaying: isPlaying => dispatch({
      type: redux_action["e" /* SET_IS_PLAYING */],
      isPlaying
    })
  };
};

/* harmony default export */ var components_Player = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(router_["withRouter"])(Player_Player)));
// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = external_react_default.a.createElement;







class Layout_layout extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchRecentlyPlayed({
      limit: 12
    });
  }

  render() {
    return Layout_jsx("div", {
      className: "layout"
    }, Layout_jsx(components_Sidebar, null), Layout_jsx("div", null, this.props.children), Layout_jsx(components_Player, null));
  }

}

const Layout_mapStateToProps = state => {
  return {};
};

const Layout_mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({
      type: redux_action["h" /* SET_USER */],
      user
    }),
    fetchRecentlyPlayed: options => dispatch(redux_action["i" /* fetchRecentlyPlayed */](options))
  };
};

/* harmony default export */ var Layout = (Object(external_react_redux_["connect"])(Layout_mapStateToProps, Layout_mapDispatchToProps)(Object(router_["withRouter"])(Layout_layout)));
// EXTERNAL MODULE: ./styles/reset.css
var styles_reset = __webpack_require__("BZun");

// EXTERNAL MODULE: ./styles/global.css
var global = __webpack_require__("RDVA");

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;








class _app_Myapp extends app_default.a {
  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return _app_jsx(external_react_redux_["Provider"], {
      store: reduxStore
    }, _app_jsx(Layout, null, _app_jsx(Component, pageProps)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (redux(_app_Myapp));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("g/15");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BZun":
/***/ (function(module, exports) {



/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "NNwq":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"player": "player_player__vLB9D",
	"playerHeader": "player_playerHeader__3palY",
	"add": "player_add__22DY7",
	"avatar": "player_avatar__1ycNE",
	"logOut": "player_logOut__3sfrR",
	"nickname": "player_nickname__tkyF6",
	"playerCoverContainer": "player_playerCoverContainer__22dPw",
	"playerCoverAnimation": "player_playerCoverAnimation__2ITM7",
	"rotate": "player_rotate__3ZlNF",
	"playerCover": "player_playerCover__1u5aK",
	"playerControl": "player_playerControl__2K2Vi",
	"songName": "player_songName__3kNWn",
	"artistName": "player_artistName__1jZSk",
	"playerPanel": "player_playerPanel__k-Nsf",
	"playerNext": "player_playerNext__158AU",
	"nextText": "player_nextText__2fYrH",
	"nextListContainer": "player_nextListContainer__waHDV",
	"nextList": "player_nextList__UkTXp",
	"nextListItem": "player_nextListItem__3XdCT",
	"nextButton": "player_nextButton__3-C7D",
	"nextSong": "player_nextSong__p_xzb",
	"nextArtistName": "player_nextArtistName__2UUqg",
	"line": "player_line__3-vnk",
	"loadingText": "player_loadingText__108T6",
	"loadingContainer": "player_loadingContainer__1kuHV"
};

/***/ }),

/***/ "RDVA":
/***/ (function(module, exports) {



/***/ }),

/***/ "Rvrb":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"sidebar": "sidebar_sidebar__10iqd",
	"logo": "sidebar_logo__wo-XX",
	"logoImg": "sidebar_logoImg__MZT1f",
	"logoText": "sidebar_logoText__k56pR",
	"menuList": "sidebar_menuList__3dw-U",
	"menuText": "sidebar_menuText__hsUY9",
	"menuSelector": "sidebar_menuSelector____F0r"
};

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

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

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });