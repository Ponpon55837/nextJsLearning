webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: getInitialProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialProps", function() { return getInitialProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apiComponents_courseJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiComponents/courseJson.js */ "./pages/apiComponents/courseJson.js");
/* harmony import */ var _apiComponents_productJson_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiComponents/productJson.js */ "./pages/apiComponents/productJson.js");
/* harmony import */ var _apiComponents_categoryJson_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiComponents/categoryJson.js */ "./pages/apiComponents/categoryJson.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");


var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/test.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // bootstrap





var Test = function Test(_ref) {
  var courses = _ref.courses,
      products = _ref.products,
      categories = _ref.categories,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Courses show menu' : _ref$title;
  // 當api抓取到值之後，props把接到的值map進li當中
  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, title)), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "d-none d-sm-none d-md-block",
    md: 1,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Course shows"), __jsx(_apiComponents_courseJson_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    courses: courses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }), __jsx(_apiComponents_productJson_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    products: products,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }), __jsx(_apiComponents_categoryJson_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    categories: categories,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  })), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "d-none d-sm-none d-md-block",
    md: 1,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  })))));
}; // es6的function async寫法
// es5寫成 export async function getStaticProps(){}


var getInitialProps = function getInitialProps(_ref2) {
  var _ref2$start_num, start_num, _ref2$limit_num, limit_num, API_URL, res_course, res_product, res_category, data_course, data_product, data_category;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref2$start_num = _ref2.start_num, start_num = _ref2$start_num === void 0 ? 2 : _ref2$start_num, _ref2$limit_num = _ref2.limit_num, limit_num = _ref2$limit_num === void 0 ? 3 : _ref2$limit_num;
          // 使用.env裡面的http://localhost/1337來抓取api網址
          API_URL = "http://localhost:1337";
          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat(API_URL, "/courses")));

        case 4:
          res_course = _context.sent;
          _context.next = 7;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat(API_URL, "/products")));

        case 7:
          res_product = _context.sent;
          _context.next = 10;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch("".concat(API_URL, "/categories?_start=").concat(start_num, "&_limit=").concat(limit_num)));

        case 10:
          res_category = _context.sent;
          _context.next = 13;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res_course.json());

        case 13:
          data_course = _context.sent;
          _context.next = 16;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res_product.json());

        case 16:
          data_product = _context.sent;
          _context.next = 19;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res_category.json());

        case 19:
          data_category = _context.sent;
          return _context.abrupt("return", {
            props: {
              courses: data_course,
              products: data_product,
              categories: data_category
            }
          });

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};
/* harmony default export */ __webpack_exports__["default"] = (Test);

/***/ })

})
//# sourceMappingURL=test.js.9ae09989758d6323cd5c.hot-update.js.map