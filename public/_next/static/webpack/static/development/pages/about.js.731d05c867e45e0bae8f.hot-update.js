webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/apiComponents/reposJson.js":
/*!******************************************!*\
  !*** ./pages/apiComponents/reposJson.js ***!
  \******************************************/
/*! exports provided: ReposJson, SubscribersJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReposJson", function() { return ReposJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribersJson", function() { return SubscribersJson; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/apiComponents/reposJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ReposJson = function ReposJson(_ref) {
  var repos = _ref.repos;
  return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultActiveKey: repos.svn_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"].Toggle, {
    as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Header,
    eventKey: repos.svn_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, repos.svn_url), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"].Collapse, {
    eventKey: repos.svn_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: repos.subscribers_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 24
    }
  }, repos.homepage))))));
};
var SubscribersJson = function SubscribersJson(_ref2) {
  var subscribers = _ref2.subscribers;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, subscribers ? subscribers.map(function (subs) {
    return __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
      defaultActiveKey: subs.id,
      key: subs.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"].Toggle, {
      as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Header,
      eventKey: subs.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, subs.login), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_5__["default"].Collapse, {
      eventKey: subs.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 19
      }
    }, __jsx("a", {
      href: subs.url,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, subs.login)))));
  }) : 'Loading...'));
};

/***/ })

})
//# sourceMappingURL=about.js.731d05c867e45e0bae8f.hot-update.js.map