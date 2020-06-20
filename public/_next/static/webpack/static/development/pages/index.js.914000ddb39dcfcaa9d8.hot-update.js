webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/apiComponents/functionContextJson.js":
/*!****************************************************!*\
  !*** ./pages/apiComponents/functionContextJson.js ***!
  \****************************************************/
/*! exports provided: API_URL, getHeader, getIndexHelloNextJs, getPark, PostLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexHelloNextJs", function() { return getIndexHelloNextJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPark", function() { return getPark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLink", function() { return PostLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/headerlink.json */ "./pages/api/headerlink.json");
var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headerlink.json */ "./pages/api/headerlink.json", 1);
/* harmony import */ var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/indexHelloNextJs.json */ "./pages/api/indexHelloNextJs.json");
var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/indexHelloNextJs.json */ "./pages/api/indexHelloNextJs.json", 1);
/* harmony import */ var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/parkAPI.json */ "./pages/api/parkAPI.json");
var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/parkAPI.json */ "./pages/api/parkAPI.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/apiComponents/functionContextJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情
// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用
// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL

var API_URL = "http://localhost:1337";

var getHeader = function getHeader() {
  return _api_headerlink_json__WEBPACK_IMPORTED_MODULE_2__;
}; // 使用function作爲api承接內容，在上方的return中map接到的值

var getIndexHelloNextJs = function getIndexHelloNextJs() {
  return _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_3__;
};
var getPark = function getPark() {
  return _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_4__;
}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/batman/[id]",
    as: "/batman/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, post.title));
};

/***/ }),

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
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utilStyle.js */ "./styles/utilStyle.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // bootstrap



var Home = function Home(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Index Page' : _ref$title,
      _ref$pageDes = _ref.pageDes,
      pageDes = _ref$pageDes === void 0 ? 'This is the index page for the website.' : _ref$pageDes;
  return __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.indexBG,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    property: "og:description",
    content: header.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homeShow,
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6,
    xl: 6,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divH1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Welcome"), // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])() ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["getHeader"])().map(function (header) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      variant: "outline-dark",
      size: "lg",
      block: true,
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buttonControl,
      key: header.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: header.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 19
      }
    }, __jsx("a", {
      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_6__["wordCapitalize"],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 44
      }
    }, header.title)));
  }) : 'Loading ...'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.914000ddb39dcfcaa9d8.hot-update.js.map