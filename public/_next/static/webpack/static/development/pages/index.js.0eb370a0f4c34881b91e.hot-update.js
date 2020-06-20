webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/apiComponents/functionContextJson.js":
/*!****************************************************!*\
  !*** ./pages/apiComponents/functionContextJson.js ***!
  \****************************************************/
/*! exports provided: API_URL, getHeader, getIndexHelloNextJs, getPark, PostLink, pageDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIndexHelloNextJs", function() { return getIndexHelloNextJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPark", function() { return getPark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLink", function() { return PostLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageDescription", function() { return pageDescription; });
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
var pageDescription = function pageDescription() {
  return pageDes = 'This is the index page for the website.';
};

/***/ })

})
//# sourceMappingURL=index.js.0eb370a0f4c34881b91e.hot-update.js.map