webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiComponents_headerJson_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apiComponents/headerJson.js */ "./pages/apiComponents/headerJson.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/indexHelloNextJs.json */ "./pages/api/indexHelloNextJs.json");
var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./api/indexHelloNextJs.json */ "./pages/api/indexHelloNextJs.json", 1);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/blog.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // bootstrap






var Blog = function Blog(_ref) {
  var headers = _ref.headers,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Blog Page' : _ref$title;
  var API_URL = "http://localhost:1337";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, title)), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "d-none d-sm-none d-md-block",
    md: 2,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx(_apiComponents_headerJson_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    headers: headers,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "My Blog"), getPosts().map(function (post) {
    return __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "flush",
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_10__["default"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }, __jsx(PostLink, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 23
      }
    })));
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "d-none d-sm-none d-md-none d-lg-block",
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))));
}; // 使用function作爲api承接內容，在上方的return中map接到的值


var getPosts = function getPosts() {
  return _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_5__;
}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用


var PostLink = function PostLink(_ref2) {
  var post = _ref2.post;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/batman/[id]",
    as: "/batman/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, post.title));
}; // 我覺得這部分應該可以額外拉到一個components裡面去寫，再由import進來
// 例如 import { getStaticProps } from './components/StaticProps.js'
// 然後由上面的 const Index = ({ header }) => {}把data值丟進來。


var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.c62e0b0b9de59f8e4bcf.hot-update.js.map