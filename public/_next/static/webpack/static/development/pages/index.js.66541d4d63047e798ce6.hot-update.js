webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var _pages_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/apiComponents/functionContextJson.js */ "./pages/apiComponents/functionContextJson.js");
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utilStyle.js */ "./styles/utilStyle.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Header = function Header() {
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_5__["mainStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Brand, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("span", {
    onClick: _pages_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["handler"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, "NextJS with Bootstrap")), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, !Object(_pages_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])() ? 'Loading ...' : Object(_pages_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])().map(function (header) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: header.link,
      key: header.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "nav-item nav-link",
      title: "Connect to ".concat(header.title, " Page"),
      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_5__["wordCapitalize"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, header.title));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.66541d4d63047e798ce6.hot-update.js.map