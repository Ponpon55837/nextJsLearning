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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/apiComponents/contextJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入

var CourseJson = function CourseJson(_ref) {
  var courses = _ref.courses;
  console.log(courses);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__["rowStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, // 如果products不存在，那畫面就顯示Loading...
  !courses ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  courses.map(function (course) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 3,
      key: course.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      variant: "flush",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, course.title, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 33
      }
    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
      src: !(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + course.image.url) ? null : _functionContextJson_js__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + course.image.url,
      rounded: true,
      fluid: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 116
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }, course.published))));
  })));
}; // products由外部接入，這個值需要由data傳入

var ProductJson = function ProductJson(_ref2) {
  var products = _ref2.products;
  console.log(products);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__["rowStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, // 如果products不存在，那畫面就顯示Loading...
  !products ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  products.map(function (product) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      key: product.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
      defaultActiveKey: "false",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Toggle, {
      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Header,
      eventKey: product.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, product.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Accordion"].Collapse, {
      eventKey: product.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, product.description, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 44
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 50
      }
    }), (console.log(product.categories[0].id), !product.categories[0].id ? null : "Price:" + product.price), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 51
      }
    }), !product.categories[0].id ? null : "Category:" + product.categories[0].name, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 67
      }
    }), !product.categories[0].id ? null : "Quality:" + product.quality, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 55
      }
    }), !product.categories[0].id == 1 ? null : "Create_at:" + product.categories[0].created_at)))));
  })));
}; // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入

var CategoryJson = function CategoryJson(_ref3) {
  var categories = _ref3.categories;
  console.log(categories);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__["rowStyle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, // 如果products不存在，那畫面就顯示Loading...
  !categories ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading
  categories.map(function (category) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6,
      key: category.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"], {
      variant: "flush",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ListGroup"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, category.name, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 34
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }, category.created_at))));
  })));
};

/***/ })

})
//# sourceMappingURL=test.js.2b4203b361dfbcc96598.hot-update.js.map