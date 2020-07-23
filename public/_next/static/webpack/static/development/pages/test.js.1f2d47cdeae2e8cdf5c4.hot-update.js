webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/contextJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contextJson.js ***!
  \********************************************/
/*! exports provided: CourseJson, ProductJson, CategoryJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CourseJson\", function() { return CourseJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductJson\", function() { return ProductJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryJson\", function() { return CategoryJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contextJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\nvar CourseJson = function CourseJson(_ref) {\n  var courses = _ref.courses;\n  // console.log(courses)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !courses ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  courses.map(function (course) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 4,\n      xl: 3,\n      key: course.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseListGroupItem,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseDiv,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, course.title), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 76\n      }\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Image\"], {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseIMG,\n      src: !(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + course.image.url) ? null : _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + course.image.url,\n      rounded: true,\n      fluid: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 19\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 149\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, new Date(course.published).toLocaleDateString()))));\n  })));\n}; // products由外部接入，這個值需要由data傳入\n\n_c = CourseJson;\nvar ProductJson = function ProductJson(_ref2) {\n  var products = _ref2.products;\n  // console.log(products)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !products ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  products.map(function (product) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 12,\n      xl: 12,\n      key: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Header,\n      eventKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 19\n      }\n    }, product.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"].Collapse, {\n      eventKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }\n    }, product.description, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 44\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 50\n      }\n    }), ( // 判斷式先去看在product底下categories下面的陣列存不存在，使用[0]代表這個陣列的第一項，因為每一個product底下的categories都是獨立存在的，所以除非有同一個product.categories下面有一個以上陣列才要用0以上的數字\n    // 如果陣列不存在清空位置，存在的話才顯示內容\n    console.log(product.categories[0].id), !product.categories[0].id ? null : \"Price: \" + product.price), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 52\n      }\n    }), !product.categories[0].id ? null : \"Category: \" + product.categories[0].name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 68\n      }\n    }), !product.categories[0].id ? null : \"Quality: \" + product.quality, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 56\n      }\n    }), // 判斷式要被包含不然判斷會錯誤或是失效\n    !(product.categories[0].id == 1) ? null : \"Create_at: \" + new Date(product.categories[0].created_at).toLocaleDateString().toLocaleTimeString())))));\n  })));\n}; // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\n_c2 = ProductJson;\nvar CategoryJson = function CategoryJson(_ref3) {\n  var categories = _ref3.categories;\n  // console.log(categories)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !categories ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  categories.map(function (category) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 6,\n      key: category.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    }, category.name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 34\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 19\n      }\n    }, new Date(category.created_at).toLocaleDateString()))));\n  })));\n};\n_c3 = CategoryJson;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CourseJson\");\n$RefreshReg$(_c2, \"ProductJson\");\n$RefreshReg$(_c3, \"CategoryJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRleHRKc29uLmpzPzQwNWEiXSwibmFtZXMiOlsiQ291cnNlSnNvbiIsImNvdXJzZXMiLCJyb3dTdHlsZSIsIm1hcCIsImNvdXJzZSIsImlkIiwidXRpbFN0eWxlIiwiY291cnNlTGlzdEdyb3VwSXRlbSIsImNvdXJzZURpdiIsInRpdGxlIiwiY291cnNlSU1HIiwiQVBJX1VSTCIsImltYWdlIiwidXJsIiwiRGF0ZSIsInB1Ymxpc2hlZCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIlByb2R1Y3RKc29uIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiQ2FyZCIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwiY29uc29sZSIsImxvZyIsImNhdGVnb3JpZXMiLCJwcmljZSIsIm5hbWUiLCJxdWFsaXR5IiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlVGltZVN0cmluZyIsIkNhdGVnb3J5SnNvbiIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNPLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBRXpDO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFFQyw2REFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDQSxHQUFDRCxPQUFELEdBQVcsYUFBWCxHQUNBO0FBQ0FBLFNBQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUFDLE1BQU07QUFBQSxXQUNoQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBakI7QUFBb0IsUUFBRSxFQUFFLENBQXhCO0FBQTJCLFFBQUUsRUFBRSxDQUEvQjtBQUFrQyxRQUFFLEVBQUUsQ0FBdEM7QUFBeUMsU0FBRyxFQUFFQSxNQUFNLENBQUNDLEVBQXJE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Q0EsU0FDRSxtRUFDRSxNQUFDLG1EQUFEO0FBQUssU0FBSyxFQUFFdkIsNkRBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQ0EsR0FBQ3VCLFVBQUQsR0FBYyxhQUFkLEdBQ0E7QUFDQUEsWUFBVSxDQUFDdEIsR0FBWCxDQUFlLFVBQUE2QixRQUFRO0FBQUEsV0FDckIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRSxFQUF6QjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsUUFBRSxFQUFFLENBQXhDO0FBQTJDLFNBQUcsRUFBRUEsUUFBUSxDQUFDM0IsRUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseURBQUQ7QUFBVyxhQUFPLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseURBQUQsQ0FBVyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRzJCLFFBQVEsQ0FBQ0wsSUFEWixFQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGpCLEVBRUU7QUFBTSxXQUFLLEVBQUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsSUFBSWIsSUFBSixDQUFTa0IsUUFBUSxDQUFDSCxVQUFsQixFQUE4QmIsa0JBQTlCLEVBREYsQ0FGRixDQURGLENBREYsQ0FEcUI7QUFBQSxHQUF2QixDQUxKLENBREYsQ0FERjtBQXNCRCxDQXpCTTtNQUFNZSxZIiwiZmlsZSI6Ii4vcGFnZXMvYXBpQ29tcG9uZW50cy9jb250ZXh0SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyByb3dTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy91dGlsU3R5bGUuanMnXG5pbXBvcnQgdXRpbFN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB7IENvbCwgUm93LCBMaXN0R3JvdXAsIEltYWdlLCBDYXJkLCBBY2NvcmRpb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbi8vIGNvdXJzZXPnlLHlpJbpg6jmjqXlhaXvvIzpgJnlgIvlgLzpnIDopoHnlLHlpJbpg6jmjqXliLBkYXRh5b6M77yM6JeJ55SxZnVuY3Rpb24gcmV0dXJu5b6M5YaN6YeN6K6K5pW45YKz5YWlXG5leHBvcnQgY29uc3QgQ291cnNlSnNvbiA9ICh7IGNvdXJzZXMgfSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKGNvdXJzZXMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAgeyAvLyDlpoLmnpxwcm9kdWN0c+S4jeWtmOWcqO+8jOmCo+eVq+mdouWwsemhr+ekukxvYWRpbmcuLi5cbiAgICAgICAgICAhY291cnNlcyA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICAgIC8vIGlmIGVsc2XliKTmlrflvI/vvIznlKjkvobpgb/lhY3okKzkuIDmspLmnIlsb2Fk5Yiw6LOH5paZ5pmC77yM5pyD5aCx6Yyv77yM55u05o6l6aGv56S6bG9hZGluZ1xuICAgICAgICAgIGNvdXJzZXMubWFwKGNvdXJzZSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17NH0geGw9ezN9IGtleT17Y291cnNlLmlkfT5cbiAgICAgICAgICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIiA+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT17dXRpbFN0eWxlLmNvdXJzZUxpc3RHcm91cEl0ZW19PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3V0aWxTdHlsZS5jb3Vyc2VEaXZ9Pntjb3Vyc2UudGl0bGV9PC9kaXY+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXt1dGlsU3R5bGUuY291cnNlSU1HfSAgc3JjPXsgIShBUElfVVJMICsgY291cnNlLmltYWdlLnVybCkgPyBudWxsIDogQVBJX1VSTCArIGNvdXJzZS5pbWFnZS51cmwgfSByb3VuZGVkIGZsdWlkIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8Y2l0ZSB0aXRsZT1cIlNvdXJjZSBUaXRsZVwiPntcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoY291cnNlLnB1Ymxpc2hlZCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9jaXRlPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gcHJvZHVjdHPnlLHlpJbpg6jmjqXlhaXvvIzpgJnlgIvlgLzpnIDopoHnlLFkYXRh5YKz5YWlXG5leHBvcnQgY29uc3QgUHJvZHVjdEpzb24gPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgIHsgLy8g5aaC5p6ccHJvZHVjdHPkuI3lrZjlnKjvvIzpgqPnlavpnaLlsLHpoa/npLpMb2FkaW5nLi4uXG4gICAgICAgICAgIXByb2R1Y3RzID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgICAgLy8gaWYgZWxzZeWIpOaWt+W8j++8jOeUqOS+humBv+WFjeiQrOS4gOaykuaciWxvYWTliLDos4fmlpnmmYLvvIzmnIPloLHpjK/vvIznm7TmjqXpoa/npLpsb2FkaW5nXG4gICAgICAgICAgcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IHhsPXsxMn0ga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PSdmYWxzZSc+XG4gICAgICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn08YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlrflvI/lhYjljrvnnIvlnKhwcm9kdWN05bqV5LiLY2F0ZWdvcmllc+S4i+mdoueahOmZo+WIl+WtmOS4jeWtmOWcqO+8jOS9v+eUqFswXeS7o+ihqOmAmeWAi+mZo+WIl+eahOesrOS4gOmghe+8jOWboOeCuuavj+S4gOWAi3Byb2R1Y3TlupXkuIvnmoRjYXRlZ29yaWVz6YO95piv542o56uL5a2Y5Zyo55qE77yM5omA5Lul6Zmk6Z2e5pyJ5ZCM5LiA5YCLcHJvZHVjdC5jYXRlZ29yaWVz5LiL6Z2i5pyJ5LiA5YCL5Lul5LiK6Zmj5YiX5omN6KaB55SoMOS7peS4iueahOaVuOWtl1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6Zmj5YiX5LiN5a2Y5Zyo5riF56m65L2N572u77yM5a2Y5Zyo55qE6Kmx5omN6aGv56S65YWn5a65XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0LmNhdGVnb3JpZXNbMF0uaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3QuY2F0ZWdvcmllc1swXS5pZCA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYFByaWNlOiBgICsgcHJvZHVjdC5wcmljZSB9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXByb2R1Y3QuY2F0ZWdvcmllc1swXS5pZCA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYENhdGVnb3J5OiBgICsgcHJvZHVjdC5jYXRlZ29yaWVzWzBdLm5hbWUgfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIHsgIXByb2R1Y3QuY2F0ZWdvcmllc1swXS5pZCA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYFF1YWxpdHk6IGAgKyBwcm9kdWN0LnF1YWxpdHkgfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWt+W8j+imgeiiq+WMheWQq+S4jeeEtuWIpOaWt+acg+mMr+iqpOaIluaYr+WkseaViFxuICAgICAgICAgICAgICAgICAgICAgICAgIShwcm9kdWN0LmNhdGVnb3JpZXNbMF0uaWQgPT0gMSkgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGBDcmVhdGVfYXQ6IGAgKyBuZXcgRGF0ZShwcm9kdWN0LmNhdGVnb3JpZXNbMF0uY3JlYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkudG9Mb2NhbGVUaW1lU3RyaW5nKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBjYXRlZ29yaWVz55Sx5aSW6YOo5o6l5YWl77yM6YCZ5YCL5YC86ZyA6KaB55Sx5aSW6YOo5o6l5YiwZGF0YeW+jO+8jOiXieeUsWZ1bmN0aW9uIHJldHVybuW+jOWGjemHjeiuiuaVuOWCs+WFpVxuZXhwb3J0IGNvbnN0IENhdGVnb3J5SnNvbiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAge1xuICAgICAgICAgIC8vIOWmguaenHByb2R1Y3Rz5LiN5a2Y5Zyo77yM6YKj55Wr6Z2i5bCx6aGv56S6TG9hZGluZy4uLlxuICAgICAgICAgICFjYXRlZ29yaWVzID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgICAgLy8gaWYgZWxzZeWIpOaWt+W8j++8jOeUqOS+humBv+WFjeiQrOS4gOaykuaciWxvYWTliLDos4fmlpnmmYLvvIzmnIPloLHpjK/vvIznm7TmjqXpoa/npLpsb2FkaW5nXG4gICAgICAgICAgY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0geGw9ezZ9IGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwIHZhcmlhbnQ9XCJmbHVzaFwiID5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gPlxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5Lm5hbWV9PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8Y2l0ZSB0aXRsZT1cIlNvdXJjZSBUaXRsZVwiPntcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoY2F0ZWdvcnkuY3JlYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9jaXRlPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/apiComponents/contextJson.js\n");

/***/ })

})