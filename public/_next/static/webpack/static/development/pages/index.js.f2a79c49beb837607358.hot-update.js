webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ListGroup.js":
false,

/***/ "./node_modules/react-bootstrap/esm/ListGroupItem.js":
false,

/***/ "./pages/apiComponents/headerJson.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _pages_api_headerlink_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/api/headerlink.json */ "./pages/api/headerlink.json");
var _pages_api_headerlink_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../pages/api/headerlink.json */ "./pages/api/headerlink.json", 1);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // bootstrap






var Home = function Home(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Index Page' : _ref$title;
  return __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.indexBG,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, title)), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "d-none d-sm-none d-md-block",
    md: 2,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeShow,
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divH1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "WelCome"), // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  getHeader().map(function (header) {
    return __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      size: "lg",
      block: true,
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonControl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: header.link,
      key: header.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, __jsx("a", {
      style: wordCapitalize,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 62
      }
    }, header.title)));
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "d-none d-sm-none d-md-none d-lg-block",
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })))));
};

var wordCapitalize = {
  textTransform: "capitalize"
};

var getHeader = function getHeader() {
  return _pages_api_headerlink_json__WEBPACK_IMPORTED_MODULE_4__;
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.f2a79c49beb837607358.hot-update.js.map