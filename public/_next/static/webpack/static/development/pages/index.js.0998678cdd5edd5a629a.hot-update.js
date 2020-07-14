webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ "./pages/apiComponents/functionContextJson.js");
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utilStyle.js */ "./styles/utilStyle.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // bootstrap



var Home = function Home(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Index Page' : _ref$title;
  var h1_id = 1;
  var arr_id = 1;
  return __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.indexBG,
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
      lineNumber: 16,
      columnNumber: 9
    }
  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["titleDescription"])()), __jsx("meta", {
    property: "og:description",
    content: !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])() ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["pageDescription"])() : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])().map(function (header) {
      return header.title;
    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["pageDescription"])(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.homeShow,
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getheadingH1"])() ? 'Loading ...' : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getheadingH1"])().map(function (headingH1) {
    return __jsx("h1", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.divH1,
      key: headingH1.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, !(headingH1.id == h1_id && headingH1.arr[0].id == arr_id) ? null : headingH1.h1);
  }), // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])() ? 'Loading ...' : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])().map(function (header) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "outline-dark",
      size: "lg",
      block: true,
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.buttonControl,
      key: header.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: header.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    }, __jsx("a", {
      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_5__["wordCapitalize"],
      title: "Connect to ".concat(header.title, " Page"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 44
      }
    }, header.title)));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0998678cdd5edd5a629a.hot-update.js.map