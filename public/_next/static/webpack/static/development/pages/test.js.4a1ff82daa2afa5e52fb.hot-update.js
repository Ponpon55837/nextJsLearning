webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/courseJson.js":
/*!*******************************************!*\
  !*** ./pages/apiComponents/courseJson.js ***!
  \*******************************************/
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
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextJsWithStrapi/pages/apiComponents/courseJson.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入

var CourseJson = function CourseJson(_ref) {
  var courses = _ref.courses;
  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL
  var API_URL = "http://localhost:1337";
  console.log(courses);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: rowStyle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, courses ? courses.map(function (course) {
    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      xs: 12,
      sm: 6,
      md: 4,
      lg: 4,
      xl: 3,
      key: course.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "flush",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__["default"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, course.title, __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 33
      }
    }), __jsx(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: API_URL + course.image.url,
      rounded: true,
      fluid: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    }), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 76
      }
    }), __jsx("cite", {
      title: "Source Title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 19
      }
    }, course.published))));
  }) : 'Loading ...'));
};

var rowStyle = {
  paddingButtom: '1rem'
};
/* harmony default export */ __webpack_exports__["default"] = (CourseJson);

/***/ })

})
//# sourceMappingURL=test.js.4a1ff82daa2afa5e52fb.hot-update.js.map