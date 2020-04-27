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
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/E1-static-export/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // bootstrap






var Index = function Index() {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "d-xs-none d-sm-none",
    xs: 0,
    sm: 0,
    md: 2,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: listGroupStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, headers.map(function (header) {
    return __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
      style: listGroupStyle,
      key: header,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 19
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/[headers]",
      as: "/".concat(header),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, __jsx("a", {
      style: wordCapitalize,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 23
      }
    }, header)));
  }))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "My Blog"), getPosts().map(function (post) {
    return __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "flush",
      key: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, __jsx(PostLink, {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    })));
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: 0,
    sm: 0,
    md: 0,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }))));
}; // 使用function作爲api承接內容，在上方的return中map接到的值


var getPosts = function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用


var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/batman/[id]",
    as: "/batman/".concat(post.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, post.title));
}; // 使用陣列把連結塞入map中


var headers = ['about', 'batman', 'contact', 'login'];
var wordCapitalize = {
  textTransform: "capitalize"
};
var listGroupStyle = {
  padding: '8px'
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f3e5eb4ccabed94c59f4.hot-update.js.map