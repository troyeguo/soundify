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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+Ud":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"coverParent": "discover_coverParent__fWHHW",
	"contentSelector": "discover_contentSelector__3yRJo",
	"coverContainer": "discover_coverContainer__2Ka5e",
	"contentCoverList": "discover_contentCoverList__2BhJd",
	"contentCoverContainer": "discover_contentCoverContainer__DrO25",
	"contentTitle": "discover_contentTitle__3KTDA",
	"contentCover": "discover_contentCover__1u2gH",
	"nextIcon": "discover_nextIcon__6P4oI",
	"prevIcon": "discover_prevIcon__2nk3y",
	"contentLine": "discover_contentLine__2kiTN",
	"playButtonShadow": "discover_playButtonShadow__1eyAG",
	"contentListContainer": "discover_contentListContainer__FhLY3",
	"songListContainer": "discover_songListContainer__2hbL0",
	"contentList": "discover_contentList__2JkeB",
	"indexName": "discover_indexName__1D6KR",
	"favoriteIcon": "discover_favoriteIcon__2Or8l",
	"listPlayIcon": "discover_listPlayIcon__1GdWn",
	"trackName": "discover_trackName__3BqRD",
	"trackArtist": "discover_trackArtist__3vaQ1",
	"trackAlbum": "discover_trackAlbum__139e7",
	"moreDot": "discover_moreDot__35bcf"
};

/***/ }),

/***/ "/bS+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ Artist_ArtistTracks; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Album_AlbumTracks; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Browse_BrowseFeatured; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Playlist_Playlist; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ User_UserPlaylists; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ User_UserArtists; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ User_UserAlbums; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ User_UserTracks; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ context; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ SpotifyApiAxiosContext; });

// UNUSED EXPORTS: Artist, ArtistAlbums, ArtistRelated, Track, TrackFeatures, TrackAnalysis, Album, BrowseNew, BrowseCategoryPlaylists, BrowseRecommendations, BrowseCategories, BrowseCategory, PlaylistTracks, PlaylistImages, User, UserTop, Search, useArtist, useTrack, useAlbum, useUser, useSearch

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/utils/index.js
function serialize(obj) {
  const str = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(obj[key])));
    }
  }

  return str.length > 0 ? '?' + str.join('&') : '';
}
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/ApiRequest/useApiRequest.js







function useApiRequest(url, options = {}) {
  const _React$useState = external_react_default.a.useState(false),
        _React$useState2 = slicedToArray_default()(_React$useState, 2),
        loading = _React$useState2[0],
        setLoading = _React$useState2[1];

  const _React$useState3 = external_react_default.a.useState(null),
        _React$useState4 = slicedToArray_default()(_React$useState3, 2),
        error = _React$useState4[0],
        setError = _React$useState4[1];

  const _React$useState5 = external_react_default.a.useState(null),
        _React$useState6 = slicedToArray_default()(_React$useState5, 2),
        data = _React$useState6[0],
        setData = _React$useState6[1];

  const token = external_react_default.a.useContext(context);
  const axios = external_react_default.a.useContext(SpotifyApiAxiosContext);
  external_react_default.a.useEffect(() => {
    function loadData() {
      return _loadData.apply(this, arguments);
    }

    function _loadData() {
      _loadData = asyncToGenerator_default()(regenerator_default.a.mark(function _callee() {
        var res, data;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
              return axios.get(url + serialize(options), {
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
              return fetch(url + serialize(options), {
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

/* harmony default export */ var ApiRequest_useApiRequest = (useApiRequest);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/ApiRequest/ApiRequest.js



function ApiRequest(props) {
  const _useApiRequest = ApiRequest_useApiRequest(props.url, props.options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return props.children(data, loading, error);
}

ApiRequest.propTypes = {
  options: external_prop_types_default.a.object,
  url: external_prop_types_default.a.string.isRequired,
  children: external_prop_types_default.a.func.isRequired
};
ApiRequest.defaultProps = {
  options: {}
};
/* harmony default export */ var ApiRequest_ApiRequest = (ApiRequest);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Artist/Artist.js


const BASE_URL = 'https://api.spotify.com/v1/artists';

function Artist(props) {
  let url = BASE_URL;
  let options = {};

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Artist_Artist = (Artist);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Artist/ArtistAlbums.js


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
        defineProperty_default()(target, key, source[key]);
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



const ArtistAlbums_BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistAlbums(props) {
  let url = ArtistAlbums_BASE_URL + "/".concat(props.id, "/albums");

  let options = _objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

ArtistAlbums.defaultProps = {
  options: {}
};
/* harmony default export */ var Artist_ArtistAlbums = (ArtistAlbums);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Artist/ArtistTracks.js


function ArtistTracks_ownKeys(object, enumerableOnly) {
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

function ArtistTracks_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ArtistTracks_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ArtistTracks_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const ArtistTracks_BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistTracks(props) {
  let url = ArtistTracks_BASE_URL + "/".concat(props.id, "/top-tracks");

  let options = ArtistTracks_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

ArtistTracks.defaultProps = {
  options: {
    market: 'from_token'
  }
};
/* harmony default export */ var Artist_ArtistTracks = (ArtistTracks);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Artist/ArtistRelated.js


const ArtistRelated_BASE_URL = 'https://api.spotify.com/v1/artists';

function ArtistRelated(props) {
  let url = ArtistRelated_BASE_URL + "/".concat(props.id, "/related-artists");
  let options = {};
  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Artist_ArtistRelated = (ArtistRelated);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Artist/useArtist.js

const useArtist_BASE_URL = 'https://api.spotify.com/v1/artists';

function useArtist(id) {
  const url = Array.isArray(id) ? useArtist_BASE_URL : useArtist_BASE_URL + "/".concat(id);
  const options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  const _useApiRequest = ApiRequest_useApiRequest(url, options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ var Artist_useArtist = (useArtist);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Artist/index.js






// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Track/Track.js


function Track_ownKeys(object, enumerableOnly) {
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

function Track_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Track_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Track_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




function Track(props) {
  let url = 'https://api.spotify.com/v1/tracks';

  let options = Track_objectSpread({}, props.options);

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Track.defaultProps = {
  options: {}
};
/* harmony default export */ var Track_Track = (Track);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Track/TrackFeatures.js



function TrackFeatures(props) {
  let url = 'https://api.spotify.com/v1/audio-features';
  let options = {};

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Track_TrackFeatures = (TrackFeatures);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Track/TrackAnalysis.js



function TrackAnalysis(props) {
  let url = "https://api.spotify.com/v1/audio-analysis/".concat(props.id);
  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Track_TrackAnalysis = (TrackAnalysis);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Track/useTrack.js

const useTrack_BASE_URL = 'https://api.spotify.com/v1/tracks';

function useTrack(id) {
  const url = Array.isArray(id) ? useTrack_BASE_URL : useTrack_BASE_URL + "/".concat(id);
  const options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  const _useApiRequest = ApiRequest_useApiRequest(url, options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ var Track_useTrack = (useTrack);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Track/index.js





// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Album/Album.js


function Album_ownKeys(object, enumerableOnly) {
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

function Album_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Album_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Album_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




function Album(props) {
  let url = 'https://api.spotify.com/v1/albums';

  let options = Album_objectSpread({}, props.options);

  if (Array.isArray(props.id)) {
    options.ids = props.id.join(',');
  } else {
    url += "/".concat(props.id);
  }

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Album.defaultProps = {
  options: {}
};
/* harmony default export */ var Album_Album = (Album);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Album/AlbumTracks.js


function AlbumTracks_ownKeys(object, enumerableOnly) {
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

function AlbumTracks_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      AlbumTracks_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      AlbumTracks_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




function AlbumTracks(props) {
  let url = "https://api.spotify.com/v1/albums/".concat(props.id, "/tracks");

  let options = AlbumTracks_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

AlbumTracks.defaultProps = {
  options: {}
};
/* harmony default export */ var Album_AlbumTracks = (AlbumTracks);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Album/useAlbum.js


function useAlbum(id) {
  const url = Array.isArray(id) ? "https://api.spotify.com/v1/albums" : "https://api.spotify.com/v1/albums/".concat(id);
  const options = Array.isArray(id) ? {
    ids: id.join(',')
  } : {};

  const _useApiRequest = ApiRequest_useApiRequest(url, options),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ var Album_useAlbum = (useAlbum);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Album/index.js




// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/BrowseFeatured.js


function BrowseFeatured_ownKeys(object, enumerableOnly) {
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

function BrowseFeatured_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BrowseFeatured_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BrowseFeatured_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const BrowseFeatured_BASE_URL = 'https://api.spotify.com/v1/browse';

function BrowseFeatured(props) {
  let url = BrowseFeatured_BASE_URL + "/featured-playlists";

  let options = BrowseFeatured_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Browse_BrowseFeatured = (BrowseFeatured);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/BrowseNew.js


function BrowseNew_ownKeys(object, enumerableOnly) {
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

function BrowseNew_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BrowseNew_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BrowseNew_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const BrowseNew_BASE_URL = 'https://api.spotify.com/v1/browse/new-releases';

function BrowseNew(props) {
  let url = BrowseNew_BASE_URL;

  let options = BrowseNew_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Browse_BrowseNew = (BrowseNew);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/BrowseRecommendations.js


function BrowseRecommendations_ownKeys(object, enumerableOnly) {
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

function BrowseRecommendations_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BrowseRecommendations_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BrowseRecommendations_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const BrowseRecommendations_BASE_URL = 'https://api.spotify.com/v1/recommendations';

function BrowseRecommendations(props) {
  let url = BrowseRecommendations_BASE_URL;

  let options = BrowseRecommendations_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Browse_BrowseRecommendations = (BrowseRecommendations);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/BrowseCategories.js


function BrowseCategories_ownKeys(object, enumerableOnly) {
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

function BrowseCategories_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BrowseCategories_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BrowseCategories_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const BrowseCategories_BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategories(props) {
  let url = BrowseCategories_BASE_URL;

  let options = BrowseCategories_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Browse_BrowseCategories = (BrowseCategories);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/BrowseCategoryPlaylists.js


function BrowseCategoryPlaylists_ownKeys(object, enumerableOnly) {
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

function BrowseCategoryPlaylists_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BrowseCategoryPlaylists_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BrowseCategoryPlaylists_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const BrowseCategoryPlaylists_BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategoryPlaylists(props) {
  let url = BrowseCategoryPlaylists_BASE_URL + "/".concat(props.id, "/playlists");

  let options = BrowseCategoryPlaylists_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Browse_BrowseCategoryPlaylists = (BrowseCategoryPlaylists);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/BrowseCategory.js


function BrowseCategory_ownKeys(object, enumerableOnly) {
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

function BrowseCategory_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      BrowseCategory_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      BrowseCategory_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const BrowseCategory_BASE_URL = 'https://api.spotify.com/v1/browse/categories';

function BrowseCategory(props) {
  let url = BrowseCategory_BASE_URL + "/".concat(props.id);

  let options = BrowseCategory_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Browse_BrowseCategory = (BrowseCategory);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Browse/index.js







// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Playlist/Playlist.js


function Playlist_ownKeys(object, enumerableOnly) {
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

function Playlist_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Playlist_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Playlist_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




function Playlist(props) {
  let url = "https://api.spotify.com/v1/playlists/".concat(props.id);

  let options = Playlist_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

Playlist.defaultProps = {
  options: {}
};
/* harmony default export */ var Playlist_Playlist = (Playlist);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Playlist/PlaylistImages.js



function PlaylistImages(props) {
  let url = "https://api.spotify.com/v1/playlists/".concat(props.id, "/images");
  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var Playlist_PlaylistImages = (PlaylistImages);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Playlist/PlaylistTracks.js


function PlaylistTracks_ownKeys(object, enumerableOnly) {
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

function PlaylistTracks_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      PlaylistTracks_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      PlaylistTracks_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




function PlaylistTracks(props) {
  let url = "https://api.spotify.com/v1/playlists/".concat(props.id, "/tracks");

  let options = PlaylistTracks_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

PlaylistTracks.defaultProps = {
  options: {}
};
/* harmony default export */ var Playlist_PlaylistTracks = (PlaylistTracks);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Playlist/index.js




// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/User.js



function User(props) {
  let url = 'https://api.spotify.com/v1';
  let options = {};

  if (props.id) {
    url += "/users/".concat(props.id);
  } else {
    url += "/me";
  }

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

/* harmony default export */ var User_User = (User);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/UserPlaylists.js


function UserPlaylists_ownKeys(object, enumerableOnly) {
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

function UserPlaylists_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      UserPlaylists_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      UserPlaylists_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const UserPlaylists_BASE_URL = 'https://api.spotify.com/v1';

function UserPlaylists(props) {
  let url = UserPlaylists_BASE_URL;

  let options = UserPlaylists_objectSpread({}, props.options);

  if (props.id) {
    url += "/users/".concat(props.id, "/playlists");
  } else {
    url += "/me/playlists";
  }

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserPlaylists.defaultProps = {
  options: {}
};
/* harmony default export */ var User_UserPlaylists = (UserPlaylists);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/UserTracks.js


function UserTracks_ownKeys(object, enumerableOnly) {
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

function UserTracks_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      UserTracks_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      UserTracks_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const UserTracks_BASE_URL = 'https://api.spotify.com/v1/me/tracks';

function UserTracks(props) {
  let url = UserTracks_BASE_URL;

  let options = UserTracks_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserTracks.defaultProps = {
  options: {}
};
/* harmony default export */ var User_UserTracks = (UserTracks);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/UserTop.js


function UserTop_ownKeys(object, enumerableOnly) {
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

function UserTop_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      UserTop_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      UserTop_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const UserTop_BASE_URL = 'https://api.spotify.com/v1/me/top';

function UserTop(props) {
  let url = UserTop_BASE_URL + "/".concat(props.type);

  let options = UserTop_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserTop.defaultProps = {
  options: {}
};
/* harmony default export */ var User_UserTop = (UserTop);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/UserArtists.js


function UserArtists_ownKeys(object, enumerableOnly) {
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

function UserArtists_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      UserArtists_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      UserArtists_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const UserArtists_BASE_URL = 'https://api.spotify.com/v1/me/following';

function UserArtists(props) {
  let url = UserArtists_BASE_URL;

  let options = UserArtists_objectSpread({}, props.options, {
    type: 'artist'
  });

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserArtists.defaultProps = {
  options: {}
};
/* harmony default export */ var User_UserArtists = (UserArtists);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/UserAlbums.js


function UserAlbums_ownKeys(object, enumerableOnly) {
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

function UserAlbums_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      UserAlbums_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      UserAlbums_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}



const UserAlbums_BASE_URL = 'https://api.spotify.com/v1/me/albums';

function UserAlbums(props) {
  let url = UserAlbums_BASE_URL;

  let options = UserAlbums_objectSpread({}, props.options);

  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => props.children(data, loading, error));
}

UserAlbums.defaultProps = {
  options: {}
};
/* harmony default export */ var User_UserAlbums = (UserAlbums);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/useUser.js


function useUser(id) {
  const url = id ? "https://api.spotify.com/v1/users/".concat(id) : 'https://api.spotify.com/v1/me';

  const _useApiRequest = ApiRequest_useApiRequest(url),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ var User_useUser = (useUser);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/User/index.js








// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Search/Search.js


function Search_ownKeys(object, enumerableOnly) {
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

function Search_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Search_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Search_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




function Search(props) {
  const url = 'https://api.spotify.com/v1/search';

  const options = Search_objectSpread({}, props.options);

  const type = [];
  if (props.album) type.push('album');
  if (props.artist) type.push('artist');
  if (props.playlist) type.push('playlist');
  if (props.track) type.push('track');
  options.type = type.join(',');
  options.q = props.query;
  return external_react_default.a.createElement(ApiRequest_ApiRequest, {
    url: url,
    options: options
  }, (data, loading, error) => {
    return props.children(data, loading, error);
  });
}

Search.defaultProps = {
  options: {}
};
/* harmony default export */ var Search_Search = (Search);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Search/useSearch.js


function useSearch_ownKeys(object, enumerableOnly) {
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

function useSearch_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      useSearch_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      useSearch_ownKeys(Object(source)).forEach(function (key) {
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

  const optionsObj = useSearch_objectSpread({
    q: query,
    type: type.join(',')
  }, options);

  const _useApiRequest = ApiRequest_useApiRequest(url, optionsObj),
        data = _useApiRequest.data,
        loading = _useApiRequest.loading,
        error = _useApiRequest.error;

  return {
    data,
    loading,
    error
  };
}

/* harmony default export */ var Search_useSearch = (useSearch);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/Search/index.js



// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/context.js

const SpotifyApiContext = external_react_default.a.createContext();
const SpotifyApiAxiosContext = external_react_default.a.createContext();
/* harmony default export */ var context = (SpotifyApiContext);
// CONCATENATED MODULE: ./node_modules/react-spotify-api/dist/index.js


















/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QQsk");


/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "QQsk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./redux/action/index.js
var action = __webpack_require__("X4ED");

// EXTERNAL MODULE: ./$axios.js
var $axios = __webpack_require__("gbem");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/react-spotify-api/dist/index.js + 41 modules
var dist = __webpack_require__("/bS+");

// EXTERNAL MODULE: ./styles/discover.module.css
var discover_module = __webpack_require__("/+Ud");
var discover_module_default = /*#__PURE__*/__webpack_require__.n(discover_module);

// CONCATENATED MODULE: ./components/Artists.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Artists_Artists extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleIndex", index => {
      this.setState({
        currentIndex: index
      });
    });

    _defineProperty(this, "handleSongIndex", index => {
      this.setState({
        hoverIndex: index
      });
    });

    _defineProperty(this, "handleNext", () => {
      let coverList = document.querySelector(".discover_contentCoverList__2BhJd");
      let coverItems = document.getElementsByClassName("discover_contentCoverContainer__DrO25");
      console.log(coverList);
      let style = window.getComputedStyle(coverList);
      let right = style.getPropertyValue("right");

      if (parseInt(right.substr(0, right.length - 2)) > (coverItems.length - 1) * 107) {
        return;
      }

      let newRight = `${parseInt(right.substr(0, right.length - 2)) + 625}px`;
      coverList.setAttribute("style", `right:${newRight}`);
    });

    _defineProperty(this, "handlePrev", () => {
      let coverList = document.querySelector(".discover_contentCoverList__2BhJd");
      console.log(coverList);
      let style = window.getComputedStyle(coverList);
      let right = style.getPropertyValue("right");

      if (right === "0px") {
        return;
      }

      let newRight = `${parseInt(right.substr(0, right.length - 2)) - 625}px`;
      coverList.setAttribute("style", `right:${newRight}`);
    });

    _defineProperty(this, "playSongHandler", (track, artist) => {
      console.log(track, "track", artist, "playlist");

      if (artist) {
        let uris;

        if (!track) {
          uris = JSON.stringify({
            context_uri: artist.uri
          });
        } else {
          uris = JSON.stringify({
            context_uri: track.album.uri,
            offset: {
              uri: track.uri
            }
          });
        }

        this.props.playSong(uris);
      }
    });

    this.state = {
      currentIndex: 0,
      hoverIndex: -1
    };
  }

  render() {
    return __jsx("div", null, __jsx("div", {
      className: discover_module_default.a.coverParent
    }, __jsx("div", {
      className: discover_module_default.a.coverContainer
    }, __jsx(dist["h" /* UserArtists */], null, (artists, loading, error) => artists && __jsx("div", {
      className: discover_module_default.a.contentCoverList
    }, artists.artists.items.map((artist, index) => __jsx("div", {
      key: artist.id,
      className: discover_module_default.a.contentCoverContainer,
      onClick: () => {
        this.handleIndex(index);
      }
    }, __jsx("img", {
      src: artist.images[1].url,
      alt: "",
      className: discover_module_default.a.contentCover
    }), __jsx("div", {
      className: discover_module_default.a.contentTitle
    }, artist.name), this.state.currentIndex === index ? __jsx("div", {
      className: discover_module_default.a.contentSelector
    }) : null)))))), __jsx("img", {
      src: "/icons/more.svg",
      alt: "",
      className: discover_module_default.a.nextIcon,
      onClick: () => {
        this.handleNext();
      }
    }), __jsx("img", {
      src: "/icons/more.svg",
      alt: "",
      className: discover_module_default.a.prevIcon,
      onClick: () => {
        this.handlePrev();
      }
    }), __jsx(dist["h" /* UserArtists */], null, (artists, loading, error) => artists && __jsx(external_react_default.a.Fragment, null, __jsx(dist["b" /* ArtistTracks */], {
      id: artists.artists.items[this.state.currentIndex].id
    }, (tracks, loading, error) => tracks && __jsx("div", null, __jsx("div", {
      className: discover_module_default.a.contentLine
    }), __jsx("img", {
      src: "/icons/play_with_shadow.svg",
      alt: "",
      className: discover_module_default.a.playButtonShadow,
      onClick: () => this.playSongHandler(null, artists.artists.items[this.state.currentIndex])
    }), __jsx("ul", {
      className: discover_module_default.a.contentListContainer
    }, __jsx("div", {
      className: discover_module_default.a.songListContainer
    }, __jsx("div", null, tracks.tracks.map((track, index) => __jsx("li", {
      key: track.name,
      className: discover_module_default.a.contentList,
      onMouseOver: () => {
        this.handleSongIndex(index);
      },
      onMouseLeave: () => {
        this.handleSongIndex(-1);
      }
    }, __jsx("div", {
      className: discover_module_default.a.indexName
    }, index + 1), this.state.hoverIndex === index ? __jsx("img", {
      src: "/icons/play.svg",
      alt: "",
      className: discover_module_default.a.listPlayIcon,
      onClick: () => this.playSongHandler(track, artists.artists.items[this.state.currentIndex])
    }) : __jsx("img", {
      src: "/icons/favorite.svg",
      alt: "",
      className: discover_module_default.a.favoriteIcon
    }), __jsx("div", {
      className: discover_module_default.a.trackName
    }, track.name), __jsx("div", {
      className: discover_module_default.a.trackArtist
    }, track.artists[0].name), __jsx("div", {
      className: discover_module_default.a.trackAlbum
    }, track.album.name), __jsx("img", {
      src: "/icons/more_dot.svg",
      alt: "",
      className: discover_module_default.a.moreDot
    })))))))))), __jsx("img", {
      src: "/icons/more.svg",
      alt: "",
      className: discover_module_default.a.nextIcon,
      onClick: () => {
        this.handleNext();
      }
    }), __jsx("img", {
      src: "/icons/more.svg",
      alt: "",
      className: discover_module_default.a.prevIcon,
      onClick: () => {
        this.handlePrev();
      }
    }));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    playSong: uris => dispatch(action["j" /* playSong */](uris))
  };
};

/* harmony default export */ var components_Artists = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Artists_Artists));
// CONCATENATED MODULE: ./pages/Artist.js
var Artist_jsx = external_react_default.a.createElement;

function Artist_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Artist_Artist extends external_react_["Component"] {
  constructor(props) {
    super(props);

    Artist_defineProperty(this, "handleIndex", index => {
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
    console.log(this.props.recently_played, "user");
    return Artist_jsx("div", {
      className: "content"
    }, this.state.token ? Artist_jsx(dist["e" /* SpotifyApiAxiosContext */].Provider, {
      value: $axios["a" /* default */]
    }, Artist_jsx(dist["f" /* SpotifyApiContext */].Provider, {
      value: this.state.token
    }, Artist_jsx("div", {
      className: "content-header"
    }, "Artist"), Artist_jsx(components_Artists, null))) : null);
  }

}

const Artist_mapStateToProps = state => {
  return {
    user: state.current_user,
    backgroundImage: state.backgroundImage,
    recently_played: state.recently_played
  };
};

const Artist_mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({
      type: action["h" /* SET_USER */],
      user
    }),
    fetchRecentlyPlayed: options => dispatch(action["i" /* fetchRecentlyPlayed */](options))
  };
};

/* harmony default export */ var pages_Artist = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(Artist_mapStateToProps, Artist_mapDispatchToProps)(Artist_Artist));

/***/ }),

/***/ "WkPL":
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

/***/ "ZhPi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

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

/***/ "lSNA":
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

/***/ "m0LI":
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

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "yXPU":
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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });