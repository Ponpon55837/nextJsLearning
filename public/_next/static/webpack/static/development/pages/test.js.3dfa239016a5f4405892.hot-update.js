webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/contextJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contextJson.js ***!
  \********************************************/
/*! exports provided: CourseJson, ProductJson, CategoryJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseJson", function() { return CourseJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductJson", function() { return ProductJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryJson", function() { return CategoryJson; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ "./styles/utilStyle.js");
/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionContextJson.js */ "./pages/apiComponents/functionContextJson.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Accordion */ "./node_modules/react-bootstrap/esm/Accordion.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/apiComponents/contextJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入

var CourseJson = function CourseJson(_ref) {
  var courses = _ref.courses;
  console.log(courses);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__["rowStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  courses ? courses.map(function (course) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 3,
      key: course.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "flush",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, course.title, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    }), __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
      src: _functionContextJson_js__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + course.image.url,
      rounded: true,
      fluid: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 76
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }, course.published))));
  }) // 如果products不存在，那畫面就顯示Loading...
  : 'Loading ...'));
}; // products由外部接入，這個值需要由data傳入

var ProductJson = function ProductJson(_ref2) {
  var products = _ref2.products;
  console.log(products);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__["rowStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  products ? products.map(function (product) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      key: product.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_9__["default"], {
      defaultActiveKey: "false",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_9__["default"].Toggle, {
      as: react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Header,
      eventKey: product.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, product.title), __jsx(react_bootstrap_Accordion__WEBPACK_IMPORTED_MODULE_9__["default"].Collapse, {
      eventKey: product.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_8__["default"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, product.description, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 44
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 50
      }
    }), "Price:", product.price, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 44
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 23
      }
    }, "Quality:", product.quality))))));
  }) // 如果products不存在，那畫面就顯示Loading...
  : 'Loading ...'));
}; // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入

var CategoryJson = function CategoryJson(_ref3) {
  var categories = _ref3.categories;
  console.log(categories);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__["rowStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  categories ? categories.map(function (category) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6,
      key: category.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "flush",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_6__["default"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, category.name, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 34
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, category.created_at))));
  }) // 如果products不存在，那畫面就顯示Loading...
  : 'Loading ...'));
};

/***/ })

})
//# sourceMappingURL=test.js.3dfa239016a5f4405892.hot-update.js.map