webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/apiComponents/functionContextJson.js":
/*!****************************************************!*\
  !*** ./pages/apiComponents/functionContextJson.js ***!
  \****************************************************/
/*! exports provided: API_URL, getHeader, getIndexHelloNextJs, getPark, getheadingH1, h1Mapping, handler, PostLink, pageDescription, titleDescription, footerDescription, webDescription, copyRight, getRandom, headerBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexHelloNextJs", function() { return getIndexHelloNextJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPark", function() { return getPark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getheadingH1", function() { return getheadingH1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h1Mapping", function() { return h1Mapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLink", function() { return PostLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDescription", function() { return pageDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titleDescription", function() { return titleDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerDescription", function() { return footerDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webDescription", function() { return webDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyRight", function() { return copyRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerBar", function() { return headerBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/headerlink.json */ "./pages/api/headerlink.json");
var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headerlink.json */ "./pages/api/headerlink.json", 1);
/* harmony import */ var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/indexHelloNextJs.json */ "./pages/api/indexHelloNextJs.json");
var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/indexHelloNextJs.json */ "./pages/api/indexHelloNextJs.json", 1);
/* harmony import */ var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/parkAPI.json */ "./pages/api/parkAPI.json");
var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/parkAPI.json */ "./pages/api/parkAPI.json", 1);
/* harmony import */ var _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/headingH1.json */ "./pages/api/headingH1.json");
var _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headingH1.json */ "./pages/api/headingH1.json", 1);
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/utilStyle.js */ "./styles/utilStyle.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/apiComponents/functionContextJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情
// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用
// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL

var API_URL = "http://localhost:1337";

var getHeader = function getHeader() {
  return _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__;
}; // 使用function作爲api承接內容，在上方的return中map接到的值

var getIndexHelloNextJs = function getIndexHelloNextJs() {
  return _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__;
};
var getPark = function getPark() {
  return _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__;
};
var getheadingH1 = function getheadingH1() {
  return _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__;
};
var h1Mapping = function h1Mapping(h1_id, arr_id) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !getheadingH1() ? 'Loading ...' : getheadingH1().map(function (headingH1) {
    return __jsx("h1", {
      className: !(h1_id == 1 && arr_id == 1) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingH1 : _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.divH1,
      key: headingH1.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, !(headingH1.id == h1_id && headingH1.arr[0].id == arr_id) ? null : headingH1.h1);
  }));
}; // for Header.js

var handler = function handler() {
  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
    pathname: '/',
    query: {
      name: 'Home',
      title: 'Connect to Home Page'
    }
  });
}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/batman/[id]",
    as: "/batman/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, __jsx("a", {
    title: "Connect to ".concat(post.title, " Page"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, post.title));
};
var pageDescription = function pageDescription() {
  return "This is the page for the website.This content to description this text website how to use.";
};
var titleDescription = function titleDescription() {
  return "The website is built by upfloor which is a work that train myself to be up floor.";
};
var footerDescription = function footerDescription() {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    className: "d-none d-sm-block",
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, // 判斷式先判斷webDescription()能不能執行，如果不能那麼顯示Loading ... ， 可以的話執行webDescription()
  !webDescription() ? 'Loading ...' : webDescription()), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }, !copyRight() ? 'Loading ...' : copyRight()));
};
var webDescription = function webDescription() {
  return "Upfloor make nextjs (\u0E51\u2022\u0E35_\u0E40\u2022\u0E35\u0E51)";
};
var copyRight = function copyRight() {
  return "Copyright \xA9 2019-2020 Upfloor";
}; // 由list接入內容，這樣在return中才能使用

var getRandom = function getRandom(list) {
  // Math.floor函式會回傳小於等於所給數字的最大整數。
  // console.log(Math.floor(45.95)) => 45
  // console.log(Math.floor(-8.77)) => -9
  return list[Math.floor(Math.random() * list.length)];
};
var headerBar = function headerBar() {
  var randomText = ['NextJS', 'Bootstrap', 'ReactJs', 'Framework', 'Javascript'];
  var randomWriter = ['Upfloor', 'StudioP', 'GameStart', 'FrontendLearning'];
  return getRandom(randomText) + ' with ' + getRandom(randomWriter);
};

/***/ })

})
//# sourceMappingURL=blog.js.325b81b329c4e9f5a8ed.hot-update.js.map