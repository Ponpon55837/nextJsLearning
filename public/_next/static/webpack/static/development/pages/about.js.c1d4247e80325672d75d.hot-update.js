webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiComponents_reposJson_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiComponents/reposJson.js */ "./pages/apiComponents/reposJson.js");
/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ "./pages/apiComponents/functionContextJson.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // bootstrap



var About = function About(_ref) {
  var repos = _ref.repos,
      subscribers = _ref.subscribers,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'About this url page' : _ref$title,
      _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? 'This is the About Page' : _ref$heading;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["titleDescription"])()), __jsx("meta", {
    property: "og:description",
    content: !repos.svn_url ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["pageDescription"])() : repos.svn_url + subscribers.login + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["pageDescription"])(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "d-none d-sm-none d-md-block",
    md: 1,
    lg: 1,
    xl: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 10,
    xl: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, heading), __jsx(_apiComponents_reposJson_js__WEBPACK_IMPORTED_MODULE_3__["ReposJson"], {
    repos: repos,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 42
    }
  }), __jsx(_apiComponents_reposJson_js__WEBPACK_IMPORTED_MODULE_3__["SubscribersJson"], {
    subscribers: subscribers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    className: "d-none d-sm-none d-md-block",
    md: 1,
    lg: 1,
    xl: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })))));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (About); // class component用法 可是使用起來串街的太多 反而變得很複雜
// import React from 'react'
//
// class Page extends React.Component {
//   static async getInitialProps(ctx) {
//     const res = await fetch('https://api.github.com/repos/zeit/next.js')
//     const json = await res.json()
//     return { stars: json.stargazers_count }
//   }
//
//   render() {
//     return <div>Next stars: {this.props.stars}</div>
//   }
// }
//
// export default Page

/***/ })

})
//# sourceMappingURL=about.js.c1d4247e80325672d75d.hot-update.js.map