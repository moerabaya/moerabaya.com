(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(32);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(34);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(15);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(14);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(9);

var _helpers = __webpack_require__(35);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(31)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(9);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(33)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(4);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(1);

// EXTERNAL MODULE: /Users/curauser/Documents/GitHub/moerabaya.github.io/src/app.scss
var app = __webpack_require__(43);

// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(25);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(11);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /Users/curauser/Documents/GitHub/moerabaya.github.io/src/components/Menu.tsx




var Menu_Menu = function Menu(_ref) {
  var title = _ref.title;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(""),
      _useState4 = slicedToArray_default()(_useState3, 2),
      pageTitle = _useState4[0],
      setPageTitle = _useState4[1];

  var location = Object(router_["useLocation"])();
  Object(external_react_["useEffect"])(function () {}, []);
  return /*#__PURE__*/external_react_default.a.createElement("nav", {
    className: "main-nav" + (isMenuOpen ? " open" : "")
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "flex-grid"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/",
    onClick: function onClick() {
      return setIsMenuOpen(false);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: __webpack_require__(45),
    alt: "",
    className: "nav-icon"
  })), /*#__PURE__*/external_react_default.a.createElement("span", {
    className: "page-title"
  }, renderPageTitle(location.pathname))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "col align-right"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "McButton" + (isMenuOpen ? " active" : ""),
    onClick: function onClick() {
      setIsMenuOpen(!isMenuOpen);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("b", null), /*#__PURE__*/external_react_default.a.createElement("b", null)))), /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "navigation-list"
  }, /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/",
    onClick: function onClick() {
      return setIsMenuOpen(false);
    },
    className: "animated"
  }, "Home")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/about",
    onClick: function onClick() {
      return setIsMenuOpen(false);
    },
    className: "animated"
  }, "About")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(router_["Link"], {
    to: "/blog",
    onClick: function onClick() {
      return setIsMenuOpen(false);
    },
    className: "animated"
  }, "Blog")))));
};

/* harmony default export */ var components_Menu = (Menu_Menu);

function renderPageTitle(pathname) {
  switch (pathname) {
    case "/":
      return "";
      break;

    case "/about":
      return "About";
      break;

    case "/blog":
      return "Blog";
      break;
  }
}
// CONCATENATED MODULE: /Users/curauser/Documents/GitHub/moerabaya.github.io/src/components/Footer.tsx


var Footer_Footer = function Footer() {
  return /*#__PURE__*/external_react_default.a.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: "social-media-list"
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "social-media-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "animated",
    target: "_blank",
    href: "https://www.facebook.com/moerabaya"
  }, "facebook")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "social-media-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "animated",
    target: "_blank",
    href: "https://dribbble.com/moerabaya"
  }, "dribbble")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "social-media-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "animated",
    target: "_blank",
    href: "https://www.behance.net/moerabaya"
  }, "behance")), /*#__PURE__*/external_react_default.a.createElement("li", {
    className: "social-media-item"
  }, /*#__PURE__*/external_react_default.a.createElement("a", {
    className: "animated",
    target: "_blank",
    href: "https://github.com/moerabaya"
  }, "github")))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: /Users/curauser/Documents/GitHub/moerabaya.github.io/src/App.tsx






 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "content"
  }, App_HelmetData(), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "loading-container"
    }, /*#__PURE__*/external_react_default.a.createElement("h1", {
      className: "loading-title"
    }, "Loading", /*#__PURE__*/external_react_default.a.createElement("div", {
      className: "dot-flashing"
    })))
  }, /*#__PURE__*/external_react_default.a.createElement(components_Menu, null), /*#__PURE__*/external_react_default.a.createElement(router_["Router"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })), /*#__PURE__*/external_react_default.a.createElement(components_Footer, null))));
}

var App_HelmetData = function HelmetData() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "Mohammed Rabay'a \u2014 UX, Product Designer | Senior Engineer"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "title",
    content: "Mohammed Rabay'a \u2014 UX, Product Designer | Senior Engineer"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "keywords",
    content: "ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "robots",
    content: "index, follow"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    "http-equiv": "Content-Type",
    content: "text/html; charset=utf-8"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "language",
    content: "English"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "revisit-after",
    content: "30 days"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "author",
    content: "Mohammed Rabay'a"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "https://moerabaya.com/"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:title",
    content: "Mohammed Rabay'a \u2014 UX, Product Designer | Senior Engineer"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:description",
    content: "I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "og:image",
    content: __webpack_require__(18)
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "twitter:url",
    content: "https://moerabaya.com/"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "twitter:title",
    content: "Mohammed Rabay'a \u2014 UX, Product Designer | Senior Engineer"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "twitter:description",
    content: "I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    property: "twitter:image",
    content: __webpack_require__(18)
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "google-site-verification",
    content: "hJVMJ83aRWSRioyaMhGvHOHLdFk12JugsEN-cvb8EQ0"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "canonical",
    href: "{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "alternate",
    type: "application/rss+xml",
    title: "{{ site.title }}",
    href: "{{ '/feed.xml' | prepend: site.baseurl | prepend: site.url }}"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Chivo:300,400,700",
    rel: "stylesheet"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: __webpack_require__(46)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: __webpack_require__(47)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: __webpack_require__(48)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "manifest",
    href: __webpack_require__(49)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: __webpack_require__(50)
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "shortcut icon",
    href: __webpack_require__(51)
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "msapplication-TileColor",
    content: "#da532c"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }));
};

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(6);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("/Users/curauser/Documents/GitHub/moerabaya.github.io/node_modules/react-static/lib/browser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/metaimage.090b8bba.png";

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notfound-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "notfound-title"
  }, "404 - Oh no's! We couldn't find that page"));
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hi, I'm ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Mohammed Rabay'a"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " A passionate problem solver with ", new Date().getFullYear() - 2015, "+ years of experience working in the field of ux and traditional development.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Based in Amman, Jordan and currently designing and creating products in ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    href: "https://cura.healthcare/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Cura Healthcare")))));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content coming-soon-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Coming soon")));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // import ScrollBooster from 'scrollbooster'
// import {Helmet} from "react-helmet";
// var Isotope = require('isotope-layout');
// require('isotope-masonry-horizontal');

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var SBRef = null;
  var grid = null;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {// cleanup
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col contact-details"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated",
    href: "mailto:rabaya.moe@gmail.com"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "rabaya.moe[at]gmail.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated",
    href: "tel:00962799127281"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "(962) 799 127 281")), "\xA0 \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "animated",
    target: "_blank",
    href: "https://www.google.com/search?q=Amman%2C+Jordan"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Amman, Jordan"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "portfolio-section-description"
  }, "I design/develop user inter\xAD\xAD\xADfaces and engaging product experiences for humans."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "work-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "work-title"
  }, "Work"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "work-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "work-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.behance.net/gallery/136477127/VENI",
    target: "_blank"
  }, "Veni Marketplace", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider-text"
  }, "Veni Marketplace"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "work-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.behance.net/gallery/67105083/SitatByoot",
    target: "_blank"
  }, "Sitatbyoot", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider-text"
  }, "Sitatbyoot"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "work-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://jewemall.com/",
    target: "_blank"
  }, "Jewemall", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider-text"
  }, "Jewemall"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "work-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.behance.net/gallery/107017279/Cura-Healthcare",
    target: "_blank"
  }, "Cura Healthcare", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "work-item-divider-text"
  }, "Cura Healthcare"))))))))));
});
var myInterval;
var sitatbyoot = [__webpack_require__(52), __webpack_require__(53)];
var cura = [__webpack_require__(54), __webpack_require__(55), __webpack_require__(56)];

function loopImages(e, type) {
  var image = e.currentTarget;
  var images = image.getAttribute("data-alt-src");
  image.setAttribute('old-src', image.getAttribute("src"));
  var alt_src;

  if (type == "sitatbyoot") {
    alt_src = sitatbyoot;
  } else if (type == "cura") {
    alt_src = cura;
  }

  var that = image;
  var i = 0;

  if (alt_src && alt_src.length > 0) {
    myInterval = setInterval(function () {
      // Set an interval
      if (i == alt_src.length) {
        i = 0;
        that.setAttribute("src", that.getAttribute('old-src'));
      } else {
        that.setAttribute('src', alt_src[i]);
        i++;
      }
    }, 1000);
  }
}

function clearImages(e) {
  var image = e.currentTarget;
  clearInterval(myInterval); // Clear the interval

  image.setAttribute('src', image.getAttribute("old-src"));
}

function playVideo(e) {
  var myVideo = e.currentTarget;

  if (typeof myVideo.loop == 'boolean') {
    // loop supported
    myVideo.loop = true;
  } else {
    // loop property not supported
    myVideo.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }

  myVideo.play();
}

function stopVideo(e) {
  var myVideo = e.currentTarget;
  myVideo.pause();
  myVideo.currentTime = 0;
} // export default Home;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(4);

var _router = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
__webpack_require__(29);
module.exports = __webpack_require__(36);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(28)["default"];

var _require = __webpack_require__(12),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-typescript",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-metadata/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sass",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(12),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(30),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);










Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404.tsx */).then(__webpack_require__.bind(null, 19))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404.tsx";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.tsx';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/about.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/about.tsx */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/about.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/about.tsx";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/about.tsx';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/blog.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/blog.tsx */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/blog.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/blog.tsx";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/blog.tsx';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.tsx",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index.tsx */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.tsx');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index.tsx";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/index.tsx'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.tsx': t_0,
  '__react_static_root__/src/pages/about.tsx': t_1,
  '__react_static_root__/src/pages/blog.tsx': t_2,
  '__react_static_root__/src/pages/index.tsx': t_3
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.tsx";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(9);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 6,
	"./": 6,
	"./index": 6,
	"./index.js": 6
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 33;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(8);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(14);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(15);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(5);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(16);

var _interopRequireWildcard = __webpack_require__(17);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(37);

var _Suspense = _interopRequireDefault(__webpack_require__(38));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(41)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("/Users/curauser/Documents/GitHub/moerabaya.github.io/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(17);

var _interopRequireDefault = __webpack_require__(16);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(39));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(40));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(42)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(false);
// Module
exports.push([module.i, ".dot-elastic{position:relative;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-elastic 1s infinite linear;animation:dot-elastic 1s infinite linear}.dot-elastic::before,.dot-elastic::after{content:\"\";display:inline-block;position:absolute;top:0}.dot-elastic::before{left:-12.8484848485px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-elastic-before 1s infinite linear;animation:dot-elastic-before 1s infinite linear}.dot-elastic::after{left:12.8484848485px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-elastic-after 1s infinite linear;animation:dot-elastic-after 1s infinite linear}@-webkit-keyframes dot-elastic-before{0%{transform:scale(1, 1)}25%{transform:scale(1, 1.5)}50%{transform:scale(1, 0.67)}75%{transform:scale(1, 1)}100%{transform:scale(1, 1)}}@keyframes dot-elastic-before{0%{transform:scale(1, 1)}25%{transform:scale(1, 1.5)}50%{transform:scale(1, 0.67)}75%{transform:scale(1, 1)}100%{transform:scale(1, 1)}}@-webkit-keyframes dot-elastic{0%{transform:scale(1, 1)}25%{transform:scale(1, 1)}50%{transform:scale(1, 1.5)}75%{transform:scale(1, 1)}100%{transform:scale(1, 1)}}@keyframes dot-elastic{0%{transform:scale(1, 1)}25%{transform:scale(1, 1)}50%{transform:scale(1, 1.5)}75%{transform:scale(1, 1)}100%{transform:scale(1, 1)}}@-webkit-keyframes dot-elastic-after{0%{transform:scale(1, 1)}25%{transform:scale(1, 1)}50%{transform:scale(1, 0.67)}75%{transform:scale(1, 1.5)}100%{transform:scale(1, 1)}}@keyframes dot-elastic-after{0%{transform:scale(1, 1)}25%{transform:scale(1, 1)}50%{transform:scale(1, 0.67)}75%{transform:scale(1, 1.5)}100%{transform:scale(1, 1)}}.dot-pulse{position:relative;left:-9999px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;box-shadow:9999px 0 0 -5px;-webkit-animation:dot-pulse 1.5s infinite linear;animation:dot-pulse 1.5s infinite linear;-webkit-animation-delay:.25s;animation-delay:.25s}.dot-pulse::before,.dot-pulse::after{content:\"\";display:inline-block;position:absolute;top:0;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6}.dot-pulse::before{box-shadow:9986.1515151515px 0 0 -5px;-webkit-animation:dot-pulse-before 1.5s infinite linear;animation:dot-pulse-before 1.5s infinite linear;-webkit-animation-delay:0s;animation-delay:0s}.dot-pulse::after{box-shadow:10011.8484848485px 0 0 -5px;-webkit-animation:dot-pulse-after 1.5s infinite linear;animation:dot-pulse-after 1.5s infinite linear;-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes dot-pulse-before{0%{box-shadow:9986.1515151515px 0 0 -5px}30%{box-shadow:9986.1515151515px 0 0 2px}60%,100%{box-shadow:9986.1515151515px 0 0 -5px}}@keyframes dot-pulse-before{0%{box-shadow:9986.1515151515px 0 0 -5px}30%{box-shadow:9986.1515151515px 0 0 2px}60%,100%{box-shadow:9986.1515151515px 0 0 -5px}}@-webkit-keyframes dot-pulse{0%{box-shadow:9999px 0 0 -5px}30%{box-shadow:9999px 0 0 2px}60%,100%{box-shadow:9999px 0 0 -5px}}@keyframes dot-pulse{0%{box-shadow:9999px 0 0 -5px}30%{box-shadow:9999px 0 0 2px}60%,100%{box-shadow:9999px 0 0 -5px}}@-webkit-keyframes dot-pulse-after{0%{box-shadow:10011.8484848485px 0 0 -5px}30%{box-shadow:10011.8484848485px 0 0 2px}60%,100%{box-shadow:10011.8484848485px 0 0 -5px}}@keyframes dot-pulse-after{0%{box-shadow:10011.8484848485px 0 0 -5px}30%{box-shadow:10011.8484848485px 0 0 2px}60%,100%{box-shadow:10011.8484848485px 0 0 -5px}}.dot-flashing{position:relative;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-flashing 1s infinite linear alternate;animation:dot-flashing 1s infinite linear alternate;-webkit-animation-delay:.5s;animation-delay:.5s}.dot-flashing::before,.dot-flashing::after{content:\"\";display:inline-block;position:absolute;top:0}.dot-flashing::before{left:-12.8484848485px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:0s;animation-delay:0s}.dot-flashing::after{left:12.8484848485px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-flashing 1s infinite alternate;animation:dot-flashing 1s infinite alternate;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-flashing{0%{background-color:#dac6a6}50%,100%{background-color:#f8f4ee}}@keyframes dot-flashing{0%{background-color:#dac6a6}50%,100%{background-color:#f8f4ee}}.dot-collision{position:relative;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6}.dot-collision::before,.dot-collision::after{content:\"\";display:inline-block;position:absolute;top:0}.dot-collision::before{left:-8px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-collision-before 2s infinite ease-in;animation:dot-collision-before 2s infinite ease-in}.dot-collision::after{left:8px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-collision-after 2s infinite ease-in;animation:dot-collision-after 2s infinite ease-in;-webkit-animation-delay:1s;animation-delay:1s}@-webkit-keyframes dot-collision-before{0%,50%,75%,100%{transform:translateX(0)}25%{transform:translateX(-12.8484848485px)}}@keyframes dot-collision-before{0%,50%,75%,100%{transform:translateX(0)}25%{transform:translateX(-12.8484848485px)}}@-webkit-keyframes dot-collision-after{0%,50%,75%,100%{transform:translateX(0)}25%{transform:translateX(12.8484848485px)}}@keyframes dot-collision-after{0%,50%,75%,100%{transform:translateX(0)}25%{transform:translateX(12.8484848485px)}}.dot-revolution{position:relative;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6}.dot-revolution::before,.dot-revolution::after{content:\"\";display:inline-block;position:absolute}.dot-revolution::before{left:0;top:-12.8484848485px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;transform-origin:4px 16.8484848485px;-webkit-animation:dot-revolution 1.4s linear infinite;animation:dot-revolution 1.4s linear infinite}.dot-revolution::after{left:0;top:-25.696969697px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;transform-origin:4px 29.696969697px;-webkit-animation:dot-revolution 1s linear infinite;animation:dot-revolution 1s linear infinite}@-webkit-keyframes dot-revolution{0%{transform:rotateZ(0deg) translate3d(0, 0, 0)}100%{transform:rotateZ(360deg) translate3d(0, 0, 0)}}@keyframes dot-revolution{0%{transform:rotateZ(0deg) translate3d(0, 0, 0)}100%{transform:rotateZ(360deg) translate3d(0, 0, 0)}}.dot-carousel{position:relative;left:-9999px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6;-webkit-animation:dot-carousel 1.5s infinite linear;animation:dot-carousel 1.5s infinite linear}@-webkit-keyframes dot-carousel{0%{box-shadow:9986.1515151515px 0 0 -1px #dac6a6,9999px 0 0 1px #dac6a6,10011.8484848485px 0 0 -1px #dac6a6}50%{box-shadow:10011.8484848485px 0 0 -1px #dac6a6,9986.1515151515px 0 0 -1px #dac6a6,9999px 0 0 1px #dac6a6}100%{box-shadow:9999px 0 0 1px #dac6a6,10011.8484848485px 0 0 -1px #dac6a6,9986.1515151515px 0 0 -1px #dac6a6}}@keyframes dot-carousel{0%{box-shadow:9986.1515151515px 0 0 -1px #dac6a6,9999px 0 0 1px #dac6a6,10011.8484848485px 0 0 -1px #dac6a6}50%{box-shadow:10011.8484848485px 0 0 -1px #dac6a6,9986.1515151515px 0 0 -1px #dac6a6,9999px 0 0 1px #dac6a6}100%{box-shadow:9999px 0 0 1px #dac6a6,10011.8484848485px 0 0 -1px #dac6a6,9986.1515151515px 0 0 -1px #dac6a6}}.dot-typing{position:relative;left:-9999px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6;-webkit-animation:dot-typing 1.5s infinite linear;animation:dot-typing 1.5s infinite linear}@-webkit-keyframes dot-typing{0%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}16.667%{box-shadow:9986.1515151515px -10px 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}33.333%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}50%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px -10px 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}66.667%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}83.333%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px -10px 0 0 #dac6a6}100%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}}@keyframes dot-typing{0%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}16.667%{box-shadow:9986.1515151515px -10px 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}33.333%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}50%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px -10px 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}66.667%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}83.333%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px -10px 0 0 #dac6a6}100%{box-shadow:9986.1515151515px 0 0 0 #dac6a6,9999px 0 0 0 #dac6a6,10011.8484848485px 0 0 0 #dac6a6}}.dot-windmill{position:relative;top:-10px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;transform-origin:5px 15px;-webkit-animation:dot-windmill 2s infinite linear;animation:dot-windmill 2s infinite linear}.dot-windmill::before,.dot-windmill::after{content:\"\";display:inline-block;position:absolute}.dot-windmill::before{left:-8.66px;top:15px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6}.dot-windmill::after{left:8.66px;top:15px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6}@-webkit-keyframes dot-windmill{0%{transform:rotateZ(0deg) translate3d(0, 0, 0)}100%{transform:rotateZ(720deg) translate3d(0, 0, 0)}}@keyframes dot-windmill{0%{transform:rotateZ(0deg) translate3d(0, 0, 0)}100%{transform:rotateZ(720deg) translate3d(0, 0, 0)}}.dot-bricks{position:relative;top:7px;left:-9999px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6;-webkit-animation:dot-bricks 2s infinite ease;animation:dot-bricks 2s infinite ease}@-webkit-keyframes dot-bricks{0%{box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6}8.333%{box-shadow:10006px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6}16.667%{box-shadow:10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6,10006px 0 0 0 #dac6a6}25%{box-shadow:10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6}33.333%{box-shadow:10006px 0 0 0 #dac6a6,9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6}41.667%{box-shadow:10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6}50%{box-shadow:10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6}58.333%{box-shadow:9992px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6}66.666%{box-shadow:9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6,9992px -14px 0 0 #dac6a6}75%{box-shadow:9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6}83.333%{box-shadow:9992px -14px 0 0 #dac6a6,10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6}91.667%{box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6}100%{box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6}}@keyframes dot-bricks{0%{box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6}8.333%{box-shadow:10006px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6}16.667%{box-shadow:10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6,10006px 0 0 0 #dac6a6}25%{box-shadow:10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6}33.333%{box-shadow:10006px 0 0 0 #dac6a6,9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6}41.667%{box-shadow:10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6}50%{box-shadow:10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6}58.333%{box-shadow:9992px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6,9992px -14px 0 0 #dac6a6}66.666%{box-shadow:9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6,9992px -14px 0 0 #dac6a6}75%{box-shadow:9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6}83.333%{box-shadow:9992px -14px 0 0 #dac6a6,10006px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6}91.667%{box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px -14px 0 0 #dac6a6}100%{box-shadow:9992px -14px 0 0 #dac6a6,9992px 0 0 0 #dac6a6,10006px 0 0 0 #dac6a6}}.dot-floating{position:relative;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-floating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);animation:dot-floating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1)}.dot-floating::before,.dot-floating::after{content:\"\";display:inline-block;position:absolute;top:0}.dot-floating::before{left:-12px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-floating-before 3s infinite ease-in-out;animation:dot-floating-before 3s infinite ease-in-out}.dot-floating::after{left:-24px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1);animation:dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1)}@-webkit-keyframes dot-floating{0%{left:calc(-50% - 4px)}75%{left:calc(50% + 104px)}100%{left:calc(50% + 104px)}}@keyframes dot-floating{0%{left:calc(-50% - 4px)}75%{left:calc(50% + 104px)}100%{left:calc(50% + 104px)}}@-webkit-keyframes dot-floating-before{0%{left:-50px}50%{left:-12px}75%{left:-50px}100%{left:-50px}}@keyframes dot-floating-before{0%{left:-50px}50%{left:-12px}75%{left:-50px}100%{left:-50px}}@-webkit-keyframes dot-floating-after{0%{left:-100px}50%{left:-24px}75%{left:-100px}100%{left:-100px}}@keyframes dot-floating-after{0%{left:-100px}50%{left:-24px}75%{left:-100px}100%{left:-100px}}.dot-fire{position:relative;left:-9999px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;box-shadow:9999px 19.2727272727px 0 -5px #dac6a6;-webkit-animation:dot-fire 1.5s infinite linear;animation:dot-fire 1.5s infinite linear;-webkit-animation-delay:-0.85s;animation-delay:-0.85s}.dot-fire::before,.dot-fire::after{content:\"\";display:inline-block;position:absolute;top:0;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6}.dot-fire::before{box-shadow:9999px 19.2727272727px 0 -5px #dac6a6;-webkit-animation:dot-fire 1.5s infinite linear;animation:dot-fire 1.5s infinite linear;-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.dot-fire::after{box-shadow:9999px 19.2727272727px 0 -5px #dac6a6;-webkit-animation:dot-fire 1.5s infinite linear;animation:dot-fire 1.5s infinite linear;-webkit-animation-delay:-2.85s;animation-delay:-2.85s}@-webkit-keyframes dot-fire{1%{box-shadow:9999px 19.2727272727px 0 -5px #dac6a6}50%{box-shadow:9999px -4.8181818182px 0 2px #dac6a6}100%{box-shadow:9999px -19.2727272727px 0 -5px #dac6a6}}@keyframes dot-fire{1%{box-shadow:9999px 19.2727272727px 0 -5px #dac6a6}50%{box-shadow:9999px -4.8181818182px 0 2px #dac6a6}100%{box-shadow:9999px -19.2727272727px 0 -5px #dac6a6}}.dot-spin{position:relative;width:8px;height:8px;border-radius:4px;background-color:transparent;color:transparent;box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 0 rgba(218,198,166,0),0 15.4181818182px 0 0 rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 0 rgba(218,198,166,0),-15.4181818182px 0 0 0 rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 0 rgba(218,198,166,0);-webkit-animation:dot-spin 1.5s infinite linear;animation:dot-spin 1.5s infinite linear}@-webkit-keyframes dot-spin{0%,100%{box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}12.5%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 0 #dac6a6,0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}25%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 0 #dac6a6,0 15.4181818182px 0 0 #dac6a6,-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}37.5%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 0 #dac6a6,0 15.4181818182px 0 0 #dac6a6,-10.9039475376px 10.9039475376px 0 0 #dac6a6,-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}50%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 0 #dac6a6,-10.9039475376px 10.9039475376px 0 0 #dac6a6,-15.4181818182px 0 0 0 #dac6a6,-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}62.5%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 0 #dac6a6,-15.4181818182px 0 0 0 #dac6a6,-10.9039475376px -10.9039475376px 0 0 #dac6a6}75%{box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 0 #dac6a6,-10.9039475376px -10.9039475376px 0 0 #dac6a6}87.5%{box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 0 #dac6a6}}@keyframes dot-spin{0%,100%{box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}12.5%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 0 #dac6a6,0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}25%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 0 #dac6a6,10.9039475376px 10.9039475376px 0 0 #dac6a6,0 15.4181818182px 0 0 #dac6a6,-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}37.5%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 0 #dac6a6,0 15.4181818182px 0 0 #dac6a6,-10.9039475376px 10.9039475376px 0 0 #dac6a6,-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}50%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 0 #dac6a6,-10.9039475376px 10.9039475376px 0 0 #dac6a6,-15.4181818182px 0 0 0 #dac6a6,-10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0)}62.5%{box-shadow:0 -15.4181818182px 0 -5px rgba(218,198,166,0),10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 0 #dac6a6,-15.4181818182px 0 0 0 #dac6a6,-10.9039475376px -10.9039475376px 0 0 #dac6a6}75%{box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 -5px rgba(218,198,166,0),15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 0 #dac6a6,-10.9039475376px -10.9039475376px 0 0 #dac6a6}87.5%{box-shadow:0 -15.4181818182px 0 0 #dac6a6,10.9039475376px -10.9039475376px 0 0 #dac6a6,15.4181818182px 0 0 -5px rgba(218,198,166,0),10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),0 15.4181818182px 0 -5px rgba(218,198,166,0),-10.9039475376px 10.9039475376px 0 -5px rgba(218,198,166,0),-15.4181818182px 0 0 -5px rgba(218,198,166,0),-10.9039475376px -10.9039475376px 0 0 #dac6a6}}.dot-falling{position:relative;left:-9999px;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;box-shadow:9999px 0 0 0 #dac6a6;-webkit-animation:dot-falling 1s infinite linear;animation:dot-falling 1s infinite linear;-webkit-animation-delay:.1s;animation-delay:.1s}.dot-falling::before,.dot-falling::after{content:\"\";display:inline-block;position:absolute;top:0}.dot-falling::before{width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-falling-before 1s infinite linear;animation:dot-falling-before 1s infinite linear;-webkit-animation-delay:0s;animation-delay:0s}.dot-falling::after{width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-falling-after 1s infinite linear;animation:dot-falling-after 1s infinite linear;-webkit-animation-delay:.2s;animation-delay:.2s}@-webkit-keyframes dot-falling{0%{box-shadow:9999px -12.8484848485px 0 0 rgba(218,198,166,0)}25%,50%,75%{box-shadow:9999px 0 0 0 #dac6a6}100%{box-shadow:9999px 12.8484848485px 0 0 rgba(218,198,166,0)}}@keyframes dot-falling{0%{box-shadow:9999px -12.8484848485px 0 0 rgba(218,198,166,0)}25%,50%,75%{box-shadow:9999px 0 0 0 #dac6a6}100%{box-shadow:9999px 12.8484848485px 0 0 rgba(218,198,166,0)}}@-webkit-keyframes dot-falling-before{0%{box-shadow:9986.1515151515px -12.8484848485px 0 0 rgba(218,198,166,0)}25%,50%,75%{box-shadow:9986.1515151515px 0 0 0 #dac6a6}100%{box-shadow:9986.1515151515px 12.8484848485px 0 0 rgba(218,198,166,0)}}@keyframes dot-falling-before{0%{box-shadow:9986.1515151515px -12.8484848485px 0 0 rgba(218,198,166,0)}25%,50%,75%{box-shadow:9986.1515151515px 0 0 0 #dac6a6}100%{box-shadow:9986.1515151515px 12.8484848485px 0 0 rgba(218,198,166,0)}}@-webkit-keyframes dot-falling-after{0%{box-shadow:10011.8484848485px -12.8484848485px 0 0 rgba(218,198,166,0)}25%,50%,75%{box-shadow:10011.8484848485px 0 0 0 #dac6a6}100%{box-shadow:10011.8484848485px 12.8484848485px 0 0 rgba(218,198,166,0)}}@keyframes dot-falling-after{0%{box-shadow:10011.8484848485px -12.8484848485px 0 0 rgba(218,198,166,0)}25%,50%,75%{box-shadow:10011.8484848485px 0 0 0 #dac6a6}100%{box-shadow:10011.8484848485px 12.8484848485px 0 0 rgba(218,198,166,0)}}.dot-stretching{position:relative;width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;transform:scale(1.25, 1.25);-webkit-animation:dot-stretching 2s infinite ease-in;animation:dot-stretching 2s infinite ease-in}.dot-stretching::before,.dot-stretching::after{content:\"\";display:inline-block;position:absolute;top:0}.dot-stretching::before{width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-stretching-before 2s infinite ease-in;animation:dot-stretching-before 2s infinite ease-in}.dot-stretching::after{width:8px;height:8px;border-radius:4px;background-color:#dac6a6;color:#dac6a6;-webkit-animation:dot-stretching-after 2s infinite ease-in;animation:dot-stretching-after 2s infinite ease-in}@-webkit-keyframes dot-stretching{0%{transform:scale(1.25, 1.25)}50%,60%{transform:scale(0.8, 0.8)}100%{transform:scale(1.25, 1.25)}}@keyframes dot-stretching{0%{transform:scale(1.25, 1.25)}50%,60%{transform:scale(0.8, 0.8)}100%{transform:scale(1.25, 1.25)}}@-webkit-keyframes dot-stretching-before{0%{transform:translate(0) scale(0.7, 0.7)}50%,60%{transform:translate(-20px) scale(1, 1)}100%{transform:translate(0) scale(0.7, 0.7)}}@keyframes dot-stretching-before{0%{transform:translate(0) scale(0.7, 0.7)}50%,60%{transform:translate(-20px) scale(1, 1)}100%{transform:translate(0) scale(0.7, 0.7)}}@-webkit-keyframes dot-stretching-after{0%{transform:translate(0) scale(0.7, 0.7)}50%,60%{transform:translate(20px) scale(1, 1)}100%{transform:translate(0) scale(0.7, 0.7)}}@keyframes dot-stretching-after{0%{transform:translate(0) scale(0.7, 0.7)}50%,60%{transform:translate(20px) scale(1, 1)}100%{transform:translate(0) scale(0.7, 0.7)}}.dot-gathering{position:relative;width:12px;height:12px;border-radius:6px;background-color:#000;color:transparent;margin:-1px 0;filter:blur(2px)}.dot-gathering::before,.dot-gathering::after{content:\"\";display:inline-block;position:absolute;top:0;left:-50px;width:12px;height:12px;border-radius:6px;background-color:#000;color:transparent;opacity:0;filter:blur(2px);-webkit-animation:dot-gathering 2s infinite ease-in;animation:dot-gathering 2s infinite ease-in}.dot-gathering::after{-webkit-animation-delay:.5s;animation-delay:.5s}@-webkit-keyframes dot-gathering{0%{opacity:0;transform:translateX(0)}35%,60%{opacity:1;transform:translateX(50px)}100%{opacity:0;transform:translateX(100px)}}@keyframes dot-gathering{0%{opacity:0;transform:translateX(0)}35%,60%{opacity:1;transform:translateX(50px)}100%{opacity:0;transform:translateX(100px)}}.dot-hourglass{position:relative;top:-12.8484848485px;width:12px;height:12px;border-radius:6px;background-color:#000;color:transparent;margin:-1px 0;filter:blur(2px);transform-origin:4px 16.8484848485px;-webkit-animation:dot-hourglass 2.4s infinite ease-in-out;animation:dot-hourglass 2.4s infinite ease-in-out;-webkit-animation-delay:.6s;animation-delay:.6s}.dot-hourglass::before,.dot-hourglass::after{content:\"\";display:inline-block;position:absolute;top:0;left:0;width:12px;height:12px;border-radius:6px;background-color:#000;color:transparent;filter:blur(2px)}.dot-hourglass::before{top:25.696969697px}.dot-hourglass::after{-webkit-animation:dot-hourglass-after 2.4s infinite cubic-bezier(0.65, 0.05, 0.36, 1);animation:dot-hourglass-after 2.4s infinite cubic-bezier(0.65, 0.05, 0.36, 1)}@-webkit-keyframes dot-hourglass{0%{transform:rotateZ(0deg)}25%{transform:rotateZ(180deg)}50%{transform:rotateZ(180deg)}75%{transform:rotateZ(360deg)}100%{transform:rotateZ(360deg)}}@keyframes dot-hourglass{0%{transform:rotateZ(0deg)}25%{transform:rotateZ(180deg)}50%{transform:rotateZ(180deg)}75%{transform:rotateZ(360deg)}100%{transform:rotateZ(360deg)}}@-webkit-keyframes dot-hourglass-after{0%{transform:translateY(0)}25%{transform:translateY(25.696969697px)}50%{transform:translateY(25.696969697px)}75%{transform:translateY(0)}100%{transform:translateY(0)}}@keyframes dot-hourglass-after{0%{transform:translateY(0)}25%{transform:translateY(25.696969697px)}50%{transform:translateY(25.696969697px)}75%{transform:translateY(0)}100%{transform:translateY(0)}}.dot-overtaking{position:relative;width:12px;height:12px;border-radius:6px;background-color:transparent;color:#000;margin:-1px 0;box-shadow:0 -20px 0 0;filter:blur(2px);-webkit-animation:dot-overtaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);animation:dot-overtaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2)}.dot-overtaking::before,.dot-overtaking::after{content:\"\";display:inline-block;position:absolute;top:0;left:0;width:12px;height:12px;border-radius:6px;background-color:transparent;color:#000;box-shadow:0 -20px 0 0;filter:blur(2px)}.dot-overtaking::before{-webkit-animation:dot-overtaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);animation:dot-overtaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);-webkit-animation-delay:.3s;animation-delay:.3s}.dot-overtaking::after{-webkit-animation:dot-overtaking 1.5s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);animation:dot-overtaking 1.5s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);-webkit-animation-delay:.6s;animation-delay:.6s}@-webkit-keyframes dot-overtaking{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes dot-overtaking{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}.dot-shuttle{position:relative;left:-12.8484848485px;width:12px;height:12px;border-radius:6px;background-color:#000;color:transparent;margin:-1px 0;filter:blur(2px)}.dot-shuttle::before,.dot-shuttle::after{content:\"\";display:inline-block;position:absolute;top:0;width:12px;height:12px;border-radius:6px;background-color:#000;color:transparent;filter:blur(2px)}.dot-shuttle::before{left:12.8484848485px;-webkit-animation:dot-shuttle 2s infinite ease-out;animation:dot-shuttle 2s infinite ease-out}.dot-shuttle::after{left:25.696969697px}@-webkit-keyframes dot-shuttle{0%,50%,100%{transform:translateX(0)}25%{transform:translateX(-38.5454545455px)}75%{transform:translateX(38.5454545455px)}}@keyframes dot-shuttle{0%,50%,100%{transform:translateX(0)}25%{transform:translateX(-38.5454545455px)}75%{transform:translateX(38.5454545455px)}}.dot-bouncing{position:relative;height:8px;font-size:10px}.dot-bouncing::before{content:\"⚽🏀🏐\";display:inline-block;position:relative;-webkit-animation:dot-bouncing 1s infinite;animation:dot-bouncing 1s infinite}@-webkit-keyframes dot-bouncing{0%{top:-20px;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}34%{transform:scale(1, 1)}35%{top:20px;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1.5, 0.5)}45%{transform:scale(1, 1)}90%{top:-20px}100%{top:-20px}}@keyframes dot-bouncing{0%{top:-20px;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}34%{transform:scale(1, 1)}35%{top:20px;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;transform:scale(1.5, 0.5)}45%{transform:scale(1, 1)}90%{top:-20px}100%{top:-20px}}.dot-rolling{position:relative;height:8px;font-size:10px}.dot-rolling::before{content:\"⚽\";display:inline-block;position:relative;transform:translateX(-25px);-webkit-animation:dot-rolling 3s infinite;animation:dot-rolling 3s infinite}@-webkit-keyframes dot-rolling{0%{content:\"⚽\";transform:translateX(-25px) rotateZ(0deg)}16.667%{content:\"⚽\";transform:translateX(25px) rotateZ(720deg)}33.333%{content:\"⚽\";transform:translateX(-25px) rotateZ(0deg)}34.333%{content:\"🏀\";transform:translateX(-25px) rotateZ(0deg)}50%{content:\"🏀\";transform:translateX(25px) rotateZ(720deg)}66.667%{content:\"🏀\";transform:translateX(-25px) rotateZ(0deg)}67.667%{content:\"🏐\";transform:translateX(-25px) rotateZ(0deg)}83.333%{content:\"🏐\";transform:translateX(25px) rotateZ(720deg)}100%{content:\"🏐\";transform:translateX(-25px) rotateZ(0deg)}}@keyframes dot-rolling{0%{content:\"⚽\";transform:translateX(-25px) rotateZ(0deg)}16.667%{content:\"⚽\";transform:translateX(25px) rotateZ(720deg)}33.333%{content:\"⚽\";transform:translateX(-25px) rotateZ(0deg)}34.333%{content:\"🏀\";transform:translateX(-25px) rotateZ(0deg)}50%{content:\"🏀\";transform:translateX(25px) rotateZ(720deg)}66.667%{content:\"🏀\";transform:translateX(-25px) rotateZ(0deg)}67.667%{content:\"🏐\";transform:translateX(-25px) rotateZ(0deg)}83.333%{content:\"🏐\";transform:translateX(25px) rotateZ(720deg)}100%{content:\"🏐\";transform:translateX(-25px) rotateZ(0deg)}}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;*display:inline;*zoom:1;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal;*margin-left:-7px}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline;*vertical-align:middle}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer;*overflow:visible}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0;*height:13px;*width:13px}input[type=search]{-webkit-appearance:textfield;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}html,button,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,hr,dl,dd,ol,ul,figure{margin:0;padding:0}h1,h2,h3,h4,h5,h6,p,blockquote,pre,ul,ol,dl,figure{margin-bottom:calc(30px / 2)}img{vertical-align:middle;max-width:100%;margin-bottom:1.5em}figure>img{display:block}figcaption{font-size:calc(18px * .875)}ul,ol{margin-left:30px}li>ul,li>ol{margin-bottom:0}h1,h2,h3,h4,h5,h6{font-weight:300}a{text-decoration:none;color:#dac6a6}a:visited{color:color-mod(#DAC6A6 shade(15%))}a:hover{text-decoration:underline;color:#dac6a6}blockquote{padding-left:calc(30px / 2);font-size:18px;font-style:italic;letter-spacing:-1px;color:#828282;border-left:4px solid color-mod(#828282 50.9803921569%)}blockquote>:last-child{margin-bottom:0}pre,code{font-size:15px;border:1px solid color-mod(#828282 50.9803921569%);border-radius:3px;background-color:#1f1f1f}code{padding:1px 5px}pre{overflow-x:scroll;padding:8px 12px}pre>code{padding-right:0;padding-left:0;border:0}.wrapper{height:100%;width:100%}.icon>svg{display:inline-block;vertical-align:middle;width:16px;height:16px}.icon>svg path{fill:#828282}body{font-family:\"Poppins\",Helvetica,Arial,sans-serif;font-size:18px;font-weight:400;line-height:1.5;background-color:#000;color:#dac6a6;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;text-size-adjust:100%}@media(max-width: 800px){body{font-size:16px}}body .colored-text::-moz-selection{background:inherit}body .colored-text::selection{background:inherit}body ::-moz-selection{background:rgba(155,106,131,.75);-webkit-background-clip:unset !important;-webkit-text-fill-color:#dac6a6 !important}body ::selection{background:rgba(155,106,131,.75);-webkit-background-clip:unset !important;-webkit-text-fill-color:#dac6a6 !important}h1,h2,h3,h4,h5,h6{font-weight:300}h1{font-size:38px;line-height:1.4em}@media screen and (max-width: 800px){h1{font-size:28px}}h2{font-size:30px;line-height:1.4em}@media screen and (max-width: 800px){h2{font-size:24px}}h3{font-size:26px;line-height:1.2em}@media screen and (max-width: 800px){h3{font-size:20px}}h4{font-size:19px;line-height:1.2em}@media screen and (max-width: 800px){h4{font-size:17px}}strong{font-weight:400}a{font-size:1em;color:#dac6a6;text-decoration:underline;font-weight:300;cursor:crosshair}a.animated{text-decoration:none;position:relative}a.animated::after{content:\"\";position:absolute;height:.05em;bottom:0;background-color:#dac6a6;left:0;width:0;transition:.25s ease}a.animated:hover::after{width:100%}.align-right{text-align:right}html,body{min-height:100vh}@media screen and (max-width: 650px){html,body{height:auto;overflow:auto;cursor:unset}}html *,body *{box-sizing:border-box}.flex-grid{display:flex;flex-direction:row;flex-wrap:wrap}.flex-grid .col{width:50%}.main-nav{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);position:fixed;width:100%;z-index:100;height:95px;overflow:hidden;transition:.25s ease;background-color:rgba(0,0,0,.4)}@media(max-width: 800px){.main-nav{height:70px}}.main-nav.open{height:100%}.main-nav .container{padding:25px 20px 15px}@media(max-width: 800px){.main-nav .container{padding:15px 20px 10px}}.main-nav .nav-icon{margin:0;height:45px;width:45px}.main-nav .navigation-list{margin:0;font-size:50px;padding:50px 0}@media(max-width: 800px){.main-nav .navigation-list{font-size:42px}}.main-nav .navigation-list li{margin-bottom:.75em}.main-nav .navigation-list li a{font-size:1em;text-decoration:none}.main-nav .page-title{font-size:18px;margin-left:20px}.main-nav .McButton{position:relative;display:inline-block;width:40px;height:45px;cursor:crosshair}@media(max-width: 800px){.main-nav .McButton{width:35px}}.main-nav .McButton b{position:relative;display:block;width:40px;height:3px;background-color:#dac6a6;transition:.5s ease}@media(max-width: 800px){.main-nav .McButton b{width:35px}}.main-nav .McButton b:nth-child(1){top:30%}.main-nav .McButton b:nth-child(2){top:50%}.main-nav .McButton.active b:nth-child(1){transform:rotateZ(45deg) scale(0.9) translate(6px, 6.5px)}.main-nav .McButton.active b:nth-child(2){transform:rotateZ(-45deg) scale(0.9) translate(4px, -3px)}.container{max-width:1210px;padding:0 20px;margin:0 auto}header .contact-details a{text-decoration:none;display:inline-block;margin-bottom:10px}header .contact-details a h4{margin:0}@media(max-width: 800px){header .flex-grid .col{width:100%;margin-bottom:30px}header .flex-grid .col:last-child{margin-bottom:0}}@media(max-width: 500px){header .flex-grid .col{margin-bottom:15px}header .flex-grid .col:last-child{margin-bottom:0}}.page-content{padding-top:95px;min-height:calc(100vh - 107px)}@media(max-width: 800px){.page-content{min-height:calc(100vh - 90px)}}@media(max-width: 500px){.page-content{padding-top:85px}}.work-section{margin-top:50px}@media(max-width: 800px){.work-section{margin-top:30px}}.work-section .content{background-color:#415144;padding:25px}@media(max-width: 500px){.work-section .content{padding:25px 15px}}.work-section .work-list{margin:0}.work-section .work-item{position:relative;cursor:crosshair}.work-section .work-item h3{margin:0}.work-section .work-item a{position:relative}.work-section .work-item a,.work-section .work-item .work-item-divider-text{padding:25px 10px;font-size:26px;text-decoration:none;display:block;font-weight:400}.work-section .work-item .work-item-divider{background-color:#dac6a6;overflow:hidden;position:absolute;bottom:0;left:0;height:1px;padding:0;width:100%;transition:.5s ease-in-out;transition-timing-function:ease}.work-section .work-item .work-item-divider-text{position:absolute;bottom:0;color:#415144}.work-section .work-item:hover .work-item-divider{height:100%}.coming-soon-container{text-align:center;vertical-align:middle;display:flex;justify-content:center;align-items:center}.site-footer a{font-weight:300;text-decoration:none}.site-footer .social-media-list{margin:0;padding:40px 0;text-align:right}@media(max-width: 800px){.site-footer .social-media-list{padding:30px 0}}@media(max-width: 500px){.site-footer .social-media-list{text-align:center}}.site-footer .social-media-list .social-media-item{display:inline-block;list-style:none;padding:0 20px 0 0}.site-footer .social-media-list .social-media-item:last-child{padding-right:0}.site-footer .social-media-list .social-media-item:first-child{padding-left:0}.loading-container,.notfound-container{height:100vh;width:100%;display:flex;align-items:center;justify-content:center}.loading-container .loading-title,.loading-container .notfound-title,.notfound-container .loading-title,.notfound-container .notfound-title{text-align:center;font-size:2em;font-weight:bold;color:#dac6a6}.loading-container .dot-flashing,.notfound-container .dot-flashing{display:inline-block;margin-left:19px}", ""]);



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/portrait.9dd87fc2.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/apple-touch-icon.6fe8b364.png";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAACq1JREFUWEctl9uvXddVh795W2uvfT9328eO7eQ4vjRug3OPci2UBrUURSgUiRSk8g8A4oU/gDcEQn0Iog+8oF5Q1YqAoEJEaWkLSMTGhNiOnTS1Hd+Oz3WfffZee13mHGgu87Ae9nWO8Ru/8Y0x1dt//31Zzx0jb1HaIiKsdC3TsmZSeCR4rBIQYZAoTi1B7hW1QBDNxjjQzSxtJxweGqxR5MEyrRQzD5MK8rIGpfGiQAldU5OqwLg0qG9/57sS0IhNmGsblnuG1AY8jvv7wmhW09Gg4jvKM5cWTHPPrBa0dXQyx4GBQTBMKs2kDKAUk5CQe0slgNYEFKkW8hq8eOrKo0Wh/uZbfydtCyeWAmnaIjUeq2OGQkdXbE4Ns0po64KFds208NzfmMSImB9mDLopo6rFrA6EIPiojMmYkFEpQ8dB28FeYQHfKFKHgPeBRGnU2z/4tqTUHOjXtFKHVhqkZinJmx/YDBI3Q1clCsPmpufqpzmiEpaXOpgkjfoxKz3KWlyrw0R1miTarmY+rSiDZadIKYNh4qGsBSseK4L6xlvflI6rODhI6ScVgyRKU5O5gLWa1Hl6/X2c3kdNK7Y3NZ+sB4zLWFrIKIIgYkhTh221uT+13Ly9w8E5y+eOpgiWqTj26jZFbahVzK8irzUqluDzX3lWRGoeP3WO5z73HB1V01dj5pN9Vjpj+tkMVI5Op6hQ4/c0W6MWs5DhbY+ClCTVGA1vvTPi3Qs3mOYF1mhePLvCH/7mGYZtwzi02ApdRrUjBE+nzkl8hTrz9MOitcE5zeL8CkeWlnlobsC5QxnPHBgzmLtPOOtR/Sdx5n3kwx3CpwMmeZdxPSRXPZyDv3p3l7f/8zpFWaMVWDzGGL7yhad49blfYrtqxUbAh4CVuvFLRwvqoTNHxRhNr58ggeggEudwCI8dzij8hGNzgaX+Er/7R6/R5ptwZQW2h+xVi0xCm1xSvvbWNe7vjAnFhBOLQw4vLpC1Eop2l5e//HrTNfFwozwtHfBB4bRGHTl1VLRS0XdoZ4laxtdJosmcxlkhtfDCIcNcW/ErLz7BhY8DE+lycu00iWtRlQV/8o3vceP2Dc4ePgy+ZnN3i7XVw7SWD/Brb7wJISAEHL5hSuSNVgb10OmHJfjQZK4ThzYa8TWJ0bhEYxONRNeiSJxiod/h1uYu1loeOXac3/rSV9ne3eKn3/kB94JmsdvBoSlmOYPBIsPVFT77yq9S+wi12KaeIBFsCh0VOPromti2pvaRNvGwgHUWZxTagLGKsvC0U41Lo0CGaV4y2i3RFuYHQyrvOdlbZjqumsza1rE33sdYx/Ezp1l75TX2p3uk7bmmDDGA+NjIgdVHjottJ0QjIhqXJfiiaoykNY0K+bTGpIIOQvSL0RobYGdSoKzGWEMqjqPpPJujPbR4uq6FtYZtl6N7sLMzYWF5hbQ9pN1ZpM43ms/V0uHjIs1BjnY/i4BDB9Am4lVA1WSZYbRX0GmlpNoQQR1dnCQJO+MpPs6P4TxHTJfL12/RShOGSYb3NXvdCZWShnx5XjQUTJzGamF+2EYdeuRRqSPFnCYbZBgiZSPbwIjCWU1J1dSvkzjEB1Jjib5Z6C5xMz/K1r5wYniXk3MZtze3+K+PP6GbJOAy1NJxFnvXqfKcfBqYznKGA4vVpqGuOv74Z6TcniGJwfVbDVAkEkrDbK9gIcuYSIkxln7PoLWi3K+hfY6Ptx9nMs5x8gld+zFfPLMK0202tjfYry3vra/i3SpJK2X1wA16fEio9tE2kDR+SlHHPvsZqScVuuXQWRzJUJc1ofBkxjZyxrGLC7gkkGAI7iwX7z6H399C+SlGj8iS/6Euj3Mg22VaKrbzNhUDUHEIWZTtoOdW6NvzpNN3MC7Q6aSoQ4+elCivSR11nPtxZEf5tcGEqKLBKENiVVwACBK4vv8G050UCVtEelmzSRJ+Qu6fR3QHFUpEbARL0/+x5VAGbB+VLdDufciQf6RlU9TK2gmJ87tBZDtpjBfq0NTHGoNrGfrtBKsMQTyzSnH1F6+CXkbqe0CKUhUt868U/iRBHYZQNxOV6Kim52NiFoJHJUNIeqweepcjw5uog6dOSdOTQRFi/aMZ+50miJidVkK7ZUmcbRixX6b8/OfnID0MxTqorElwYM4Te3dUnWoOVr5qjBz1bBYqpVA+R3QLZfq0FoWzR7+PeubpJ6WsPKlLKepAnsaVKg4LT1nUTUvOzWcYQ0PHm9trbNxaRukaCSmo+BisugHhPHV4CVQHJCI3np+AVKACVONGCeUGTbArD91B/frXXpG6CDjdpc4DM1cwHhWEWtNO2xTlFFFCXs0ItfCL3S8yGw8gv4LopQfSKodijA4/JISziD76QHYcB493WL++23iH2RbohGguFXIS10V94fdeFFtbcj9r1q3MZA3/59UykzynFs/WaJe6qggq4fLtLxNmMyhvIGr+/wOIe1iBDu8RqSbqSZD0gQkpHqhBBbOdGCvUG4hqk6bzqM9/9WWJtIvLJ7VmIRtw8sgaBzurfHT7QzbGu8yKGQPb5X4h/PTiU4ifomQEJE1tG8OFAhXugVwC/RpCCjKGUKJ0G+pRAzNU/F70RsDZGvXEbzwtcaOpC2kYP+ykTQcsm4PUQbi9s85+ntO3Le6Xx/jg6kuI3wN/F6XqB+aSaUPImKmSH4N6GKrYtnEdd2AHSD3BtDyhKBBJUSHgnEK9+cdfl0vXLmGiilXREE+5wKCXUewbZtOSahb/HO7nz3Jn4xWot6G43GQnJkFJ7PsGocBVVPUR+BNIUA8M5++g7JTW4t3m7lFN5qh2T5CkGepf3v2ZbO9scOnSRX72/r+xubXT+KrT6WCqmiIE6rhKFzWf7r3AzvoBlA9IXaJkp7kDxCAIs6bNCHcR3oe612A9sIf4WIqapGtxCxn57jOE8jipmaH+4YfvSpQuyVp4L9z89DpXrp7n6o33GY0KsJ7xdoUvS+5MXma0+2zDB1VNwH8C1Toi+yAR4xE8BtRH6PIKrz/+NJc37lL6wI17t9B9TaWfQMJjUBUknQHqL/78L+XY2hnavQ7FbEYaZ3S8yYTA5WuXuHLzPS5c+F8m21PWq9Ps7rwEeoiUOcrfgnIbYoZ2CarN5i6B3oLZf9BJhKcfOc1jD5/i413LP19xoHpIHfkyxlmP+oOvvyGRz8ODD/Poo6eYH/Qe8D1tNWasihn3Nu/x3xcu8E/nx1y79ctQ5UidQ/keSlaAEsrdB+h1FZJf46kjM46tLDHMutjU4JXhWxd6TApBygKVpiTVLurNN39HlpKCdtZiqvoMFg9y7KGjHDp0EG0tszxHxblN4N8/hD/96wKqGdRjVP49UCsEcxgVWki9D9yF6h7PHytYHXQRX2B0s9rwozuL3N8zqHKEJMu0ogl/+0vnZHF+ibp1iLnE41xKTkpFi8cfO8PygUMYm7K1O+LP/vZHXLz2ApRTQuz76gMovwu6hfgBys8hwaH8Hv3OXZ4/ttZswYqa9f1dLoeSyf6YMDoC7gBpr4f6/dcfk2Nmj/vJGqpzEHFdltuKndLgSRj22gyXj/D2Ty5y7fZdtsavIvtxYFuQD1C8g+gEFTziPXgdWYMwYjVuyNqwMd5i4mdky22C1JR6CLOjtPq7/B90J2ZoyxfqlAAAAABJRU5ErkJggg=="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAyBJREFUOE8lk8trXGUchp/f950zZ+6Tae6XSUIymU6iWRQU0YhdKJVid1IQuhIXguLKrTuXCuLWVTcqXiLoyqWKIDW2QWhtQ00CTWiSJplkZjKZOXPmfD+Z+g+8z/PC+8pX367quaQYzVnCGJrtiJSJKWV7tHqC5/lcyHqoGE66PvVIcAiqDol7yOp3X2tlBFIJQ8526BKTljZ7Bx26zjJQzNPqQuxniGyagZTjNExQ74L0YuSDD9/VF5cuMldMMJ5qMFRoEPg1Dh4JLTeAJtIcdww//nnIzJDP9cuzHMcFTnseJuwiC5fmtFDIMDU4yiszScrlY55ZWaLUvkdze5aaG+XtLx5ydFyndKHAlTdeZbA0j6GHr4qUqrMq6mF8SzowpJKGatFQmpyk542w8twKn3x+k6FsFuKYF65eY3KuAi4CBJlZLKv4CYyx+BbEgO85rBFazQg/GTDlF4nbPTyFweUykhsgUxhBNEJGpuc1yAYEgY8Rg+c5nFPSnodvfA7aRZaKws7uHkYN8bBHFJ7SjULymQQyXa1qH20SFg1j0r6PTQqBl+Xfk9dp1htM5zcYtiEPa1nqWmJoqEXWrJFO1pGxhcrTADXgiSWTSZDyLQf1MvuHi4g28PibSBdBAdevHmBzOeZGV5HK8rIKhjBp6TlH0hOyGZ+t3SrNxgSqPim7RjteAqegFrQDkmSkdIRcvXFZu6EQOSURZWiFLZrtNvd3rxGf7YPJI/oAdXlggiAFYbMGtPCMQV6+/pKGXcdUcZixYIIHj7fQOMcv6ytIvIeKg14d0W3UTdC37Ruo62JR5KNPP9bb639wUNsnm05x3og4aU6ytfMadDb/D3D9Ld9CIh+kjU0+wWYHiU+fR775/ifNFYvs7+1wd2Od2/fW2NxOsHv0FhI+gc4/8JRaYyy4Q6U0w/1j5TB8FqsWef+dGzoxvcDMfJWx8XFaZ2f8+tcmn305Cud3II6gp6jb5kq5wVghw8ZpmlvbHp4XIO+9eUn9YoV0pojNDDJfvsgPv93l598raPgY4psQ5yD0mMqfMZxK8Kh7wkn/TKbCf1ToUL5yuP8DAAAAAElFTkSuQmCC"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:application/manifest+json;base64,eyJuYW1lIjoiIiwic2hvcnRfbmFtZSI6IiIsImljb25zIjpbeyJzcmMiOiIvYW5kcm9pZC1jaHJvbWUtMTkyeDE5Mi5wbmciLCJzaXplcyI6IjE5MngxOTIiLCJ0eXBlIjoiaW1hZ2UvcG5nIn0seyJzcmMiOiIvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmciLCJzaXplcyI6IjUxMng1MTIiLCJ0eXBlIjoiaW1hZ2UvcG5nIn1dLCJ0aGVtZV9jb2xvciI6IiNmZmZmZmYiLCJiYWNrZ3JvdW5kX2NvbG9yIjoiI2ZmZmZmZiIsImRpc3BsYXkiOiJzdGFuZGFsb25lIn0="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNTEyLjAwMDAwMHB0IiBoZWlnaHQ9IjUxMi4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE0LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMTAzOCA1MTA5IGMtMzE5IC00NyAtNjA1IC0yMTggLTgwMSAtNDgwIC05OSAtMTMzIC0xNjQgLTI3MyAtMjA4Ci00NDkgbC0yNCAtOTUgMCAtMTUyNSAwIC0xNTI1IDI0IC05NSBjNTggLTIzNCAxNjQgLTQyMyAzMjYgLTU4NSAxNjIgLTE2MgozNTEgLTI2OCA1ODUgLTMyNiBsOTUgLTI0IDE1MTUgMCBjMTY0OSAwIDE1NjMgLTMgMTc0NSA1NyAzNTMgMTE3IDY0NiA0MTAKNzYzIDc2MyA2MCAxODIgNTcgOTYgNTcgMTc0NSBsMCAxNTE1IC0yNCA5NSBjLTczIDI5MyAtMjI3IDUyNyAtNDYyIDcwMiAtMTMyCjk5IC0yNTkgMTU5IC00MzQgMjA2IGwtMTAwIDI3IC0xNTAwIDEgYy04MjUgMSAtMTUyNiAtMiAtMTU1NyAtN3ogbTExMiAtMTY2MApjMzMgLTcgNjIgLTIyIDgzIC00MiAxOSAtMTggMTI5IC0xODggMjQ2IC0zODAgMTE3IC0xOTEgMjE3IC0zNDkgMjIxIC0zNTIgNAotMiAxMDMgMTUyIDIyMCAzNDMgMjE2IDM1MiAyNDUgMzk0IDI5MCA0MTcgNjcgMzQgMTc4IDI0IDIzNiAtMjAgNjYgLTUwIDY1Ci0zNSA2MiAtNzk2IGwtMyAtNjg1IC0yNSAtMzcgYy03MyAtMTA4IC0yNDQgLTk5IC0yOTkgMTYgLTIwIDQyIC0yMSA1NyAtMjEKNDYyIDAgMjgwIC0zIDQxNiAtMTAgNDA5IC02IC02IC03NSAtMTExIC0xNTUgLTIzNSAtODAgLTEyMyAtMTYwIC0yNDEgLTE3OQotMjYxIC02MiAtNjcgLTE1NSAtNzQgLTIxOSAtMTggLTE4IDE1IC0xMDQgMTM5IC0xOTIgMjc1IGwtMTYwIDI0NyAtNSAtNDI4CmMtNSAtNDEwIC02IC00MzEgLTI2IC00NjQgLTMxIC01NCAtODcgLTgyIC0xNTcgLTc3IC04NSA1IC0xNDEgNTQgLTE1OCAxMzgKLTExIDU3IC0xMSAxMjkxIDAgMTM0OCAxNCA3MCA2NiAxMjUgMTMyIDE0MSA0OSAxMSA2MiAxMSAxMTkgLTF6IG0yNzAxIC0yNwpjMjY0IC03MSAzOTggLTI0NCAzOTkgLTUwOSAwIC0xMDMgLTE0IC0xNzEgLTUzIC0yNTMgLTM3IC03OSAtMTI4IC0xNzMgLTIwOQotMjE1IGwtNTYgLTMwIDEzNSAtMTY1IGM3NCAtOTEgMTQyIC0xODEgMTUwIC0yMDAgMjAgLTQ1IDEzIC0xMjggLTEzIC0xNjMKLTEwIC0xNCAtMzYgLTM1IC01NyAtNDcgLTUzIC0zMCAtMTM5IC0yNSAtMTk0IDEyIC0yMiAxNSAtMTE1IDEyMyAtMjIzIDI2MQpsLTE4NSAyMzYgLTE0MiAxIC0xNDIgMCAtMyAtMjA5IC0zIC0yMDkgLTMxIC0zOSBjLTQ0IC01NSAtODcgLTc1IC0xNTYgLTcwCi00MyAyIC02NSAxMCAtOTMgMzEgLTczIDU2IC03MCAyMiAtNzAgNzgxIDAgNzQ0IC0zIDcwNiA1OCA3NjMgNTMgNTAgNzUgNTIKNDU3IDQ5IDMyMiAtNCAzNjIgLTYgNDMxIC0yNXoiLz4KPHBhdGggZD0iTTMyNjAgMjg5NiBsMCAtMjM2IDIwMiAwIGMyMjggMCAyOTAgMTEgMzUzIDYzIDUwIDQxIDc1IDk3IDc1IDE3MiAwCjc0IC0yNSAxMzEgLTc0IDE3MiAtNjAgNDkgLTkyIDU1IC0zMzMgNjAgbC0yMjMgNSAwIC0yMzZ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/favicon.7636c491.ico";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.36862ec2.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3.0685da5e.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/2.af6129fc.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/3.b5195647.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/4.24ccb606.jpg";

/***/ })
/******/ ]);
});