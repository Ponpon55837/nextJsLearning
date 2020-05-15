webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/categoryJson.js":
/*!*********************************************!*\
  !*** ./pages/apiComponents/categoryJson.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ListGroup */ "./node_modules/react-bootstrap/esm/ListGroup.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextJsWithStrapi/pages/apiComponents/categoryJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入

var CategoryJson = function CategoryJson(_ref) {
  var categories = _ref.categories;
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
  var API_URL = "http://localhost:1337";
  console.log(categories);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: rowStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, categories ? categories.map(function (category) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 6,
      xl: 6,
      key: category.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "flush",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, category.name, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 34
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 19
      }
    }, category.created_at))));
  }) : 'Loading'));
};

var rowStyle = {
  paddingButtom: '1rem'
};
/* harmony default export */ __webpack_exports__["default"] = (CategoryJson);

/***/ })

})
//# sourceMappingURL=test.js.4aadf1f7f1b30d006843.hot-update.js.map