webpackHotUpdate("static/development/pages/contact.js",{

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
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/E1-static-export/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var mainStyle = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  position: 'sticky',
  top: '0',
  width: '100%',
  transition: 'all 0.5s',
  zIndex: '1'
};
var wordCapitalize = {
  textTransform: "capitalize"
};

var Header = function Header() {
  return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    collapseOnSelect: true,
    expand: "lg",
    style: mainStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Brand, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, "NextJS with Bootstrap"), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Toggle, {
    "aria-controls": "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"].Collapse, {
    id: "responsive-navbar-nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mr-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "nav-item nav-link ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Home")), getHeaders().map(function (header) {
    return __jsx(HeaderLink, {
      key: header.id,
      header: header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    });
  }))));
}; // 使用function作爲api承接內容，在上方的return中map接到的值


var getHeaders = function getHeaders() {
  return [{
    id: 'about',
    title: 'About'
  }, {
    id: 'batman',
    title: 'Batman'
  }, {
    id: 'contact',
    title: 'Contact'
  }, {
    id: 'login',
    title: 'Login'
  }];
};

var HeaderLink = function HeaderLink(_ref) {
  var header = _ref.header;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[headers]",
    as: "/".concat(header.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 3
    }
  }, __jsx("a", {
    className: "nav-item nav-link ",
    style: wordCapitalize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, header.title));
}; // // 使用陣列把連結塞入map中
// const headers = ['about', 'batman', 'contact', 'login']


/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=contact.js.df155a1264e9d246c675.hot-update.js.map