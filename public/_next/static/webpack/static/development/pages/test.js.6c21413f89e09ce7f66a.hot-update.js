webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/contextJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contextJson.js ***!
  \********************************************/
/*! exports provided: CourseJson, ProductJson, CategoryJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CourseJson\", function() { return CourseJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductJson\", function() { return ProductJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryJson\", function() { return CategoryJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contextJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\nvar CourseJson = function CourseJson(_ref) {\n  var courses = _ref.courses;\n  // console.log(courses)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    className: \"my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !courses ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  courses.map(function (course) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 4,\n      xl: 3,\n      key: course.id,\n      className: \"my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n      className: \"bg-light \".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseListGroupItem),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseDiv,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, course.title), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 76\n      }\n    }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Image\"], {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseIMG,\n      src: !(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + course.image.url) ? null : _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + course.image.url,\n      rounded: true,\n      fluid: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 19\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 148\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, new Date(course.published).toLocaleString()))));\n  })));\n}; // products由外部接入，這個值需要由data傳入\n\n_c = CourseJson;\nvar ProductJson = function ProductJson(_ref2) {\n  var products = _ref2.products;\n  // console.log(products)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    className: \"my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !products ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  products.map(function (product) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 6,\n      lg: 4,\n      xl: 4,\n      key: product.id,\n      className: \"my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"], {\n      defaultActiveKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Header,\n      eventKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 19\n      }\n    }, product.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"].Collapse, {\n      eventKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }\n    }, product.description, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 44\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 50\n      }\n    }), ( // 判斷式先去看在product底下categories下面的陣列存不存在，使用[0]代表這個陣列的第一項，因為每一個product底下的categories都是獨立存在的，所以除非有同一個product.categories下面有一個以上陣列才要用0以上的數字\n    // 如果陣列不存在清空位置，存在的話才顯示內容\n    console.log(product.categories[0].id), !product.categories[0].id ? null : \"Price: \" + product.price), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 52\n      }\n    }), !product.categories[0].id ? null : \"Category: \" + product.categories[0].name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 68\n      }\n    }), !product.categories[0].id ? null : \"Quality: \" + product.quality, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 56\n      }\n    }), // 判斷式要被包含不然判斷會錯誤或是失效\n    !(product.categories[0].id == 1) ? null : \"Create_at: \" + new Date(product.categories[0].created_at).toLocaleString())))));\n  })));\n}; // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\n_c2 = ProductJson;\nvar CategoryJson = function CategoryJson(_ref3) {\n  var categories = _ref3.categories;\n  // console.log(categories)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    className: \"my-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !categories ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  categories.map(function (category) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 4,\n      xl: 4,\n      key: category.id,\n      className: \"my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n      className: \"bg-light\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 17\n      }\n    }, category.name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 34\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 19\n      }\n    }, new Date(category.created_at).toLocaleString()))));\n  })));\n};\n_c3 = CategoryJson;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CourseJson\");\n$RefreshReg$(_c2, \"ProductJson\");\n$RefreshReg$(_c3, \"CategoryJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRleHRKc29uLmpzPzQwNWEiXSwibmFtZXMiOlsiQ291cnNlSnNvbiIsImNvdXJzZXMiLCJyb3dTdHlsZSIsIm1hcCIsImNvdXJzZSIsImlkIiwidXRpbFN0eWxlIiwiY291cnNlTGlzdEdyb3VwSXRlbSIsImNvdXJzZURpdiIsInRpdGxlIiwiY291cnNlSU1HIiwiQVBJX1VSTCIsImltYWdlIiwidXJsIiwiRGF0ZSIsInB1Ymxpc2hlZCIsInRvTG9jYWxlU3RyaW5nIiwiUHJvZHVjdEpzb24iLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJDYXJkIiwiSGVhZGVyIiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcmllcyIsInByaWNlIiwibmFtZSIsInF1YWxpdHkiLCJjcmVhdGVkX2F0IiwiQ2F0ZWdvcnlKc29uIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFFekM7QUFDQSxTQUNFLG1FQUNFLE1BQUMsbURBQUQ7QUFBSyxTQUFLLEVBQUVDLDZEQUFaO0FBQXNCLGFBQVMsRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDQSxHQUFDRCxPQUFELEdBQVcsYUFBWCxHQUNBO0FBQ0FBLFNBQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUFDLE1BQU07QUFBQSxXQUNoQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsQ0FBakI7QUFBb0IsUUFBRSxFQUFFLENBQXhCO0FBQTJCLFFBQUUsRUFBRSxDQUEvQjtBQUFrQyxRQUFFLEVBQUUsQ0FBdEM7QUFBeUMsU0FBRyxFQUFFQSxNQUFNLENBQUNDLEVBQXJEO0FB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b21wb25lbnRzL2NvbnRleHRKc29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IHJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxTdHlsZS5qcydcbmltcG9ydCB1dGlsU3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBBUElfVVJMIH0gZnJvbSAnLi9mdW5jdGlvbkNvbnRleHRKc29uLmpzJ1xuaW1wb3J0IHsgQ29sLCBSb3csIExpc3RHcm91cCwgSW1hZ2UsIENhcmQsIEFjY29yZGlvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuLy8gY291cnNlc+eUseWklumDqOaOpeWFpe+8jOmAmeWAi+WAvOmcgOimgeeUseWklumDqOaOpeWIsGRhdGHlvozvvIzol4nnlLFmdW5jdGlvbiByZXR1cm7lvozlho3ph43orormlbjlgrPlhaVcbmV4cG9ydCBjb25zdCBDb3Vyc2VKc29uID0gKHsgY291cnNlcyB9KSA9PiB7XG5cbiAgLy8gY29uc29sZS5sb2coY291cnNlcylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBzdHlsZT17cm93U3R5bGV9IGNsYXNzTmFtZT0nbXktMic+XG4gICAgICAgIHsgLy8g5aaC5p6ccHJvZHVjdHPkuI3lrZjlnKjvvIzpgqPnlavpnaLlsLHpoa/npLpMb2FkaW5nLi4uXG4gICAgICAgICAgIWNvdXJzZXMgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgICAvLyBpZiBlbHNl5Yik5pa35byP77yM55So5L6G6YG/5YWN6JCs5LiA5rKS5pyJbG9hZOWIsOizh+aWmeaZgu+8jOacg+WgsemMr++8jOebtOaOpemhr+ekumxvYWRpbmdcbiAgICAgICAgICBjb3Vyc2VzLm1hcChjb3Vyc2UgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fSBtZD17NH0gbGc9ezR9IHhsPXszfSBrZXk9e2NvdXJzZS5pZH0gY2xhc3NOYW1lPSdteS0yJz5cbiAgICAgICAgICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIj5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtgYmctbGlnaHQgJHt1dGlsU3R5bGUuY291cnNlTGlzdEdyb3VwSXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGUuY291cnNlRGl2fT57Y291cnNlLnRpdGxlfTwvZGl2PjxiciAvPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17dXRpbFN0eWxlLmNvdXJzZUlNR30gc3JjPXsgIShBUElfVVJMICsgY291cnNlLmltYWdlLnVybCkgPyBudWxsIDogQVBJX1VSTCArIGNvdXJzZS5pbWFnZS51cmwgfSByb3VuZGVkIGZsdWlkIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICA8Y2l0ZSB0aXRsZT1cIlNvdXJjZSBUaXRsZVwiPntcbiAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoY291cnNlLnB1Ymxpc2hlZCkudG9Mb2NhbGVTdHJpbmcoKX08L2NpdGU+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBwcm9kdWN0c+eUseWklumDqOaOpeWFpe+8jOmAmeWAi+WAvOmcgOimgeeUsWRhdGHlgrPlhaVcbmV4cG9ydCBjb25zdCBQcm9kdWN0SnNvbiA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbiAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfSBjbGFzc05hbWU9J215LTInPlxuICAgICAgICB7IC8vIOWmguaenHByb2R1Y3Rz5LiN5a2Y5Zyo77yM6YKj55Wr6Z2i5bCx6aGv56S6TG9hZGluZy4uLlxuICAgICAgICAgICFwcm9kdWN0cyA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICAgIC8vIGlmIGVsc2XliKTmlrflvI/vvIznlKjkvobpgb/lhY3okKzkuIDmspLmnIlsb2Fk5Yiw6LOH5paZ5pmC77yM5pyD5aCx6Yyv77yM55u05o6l6aGv56S6bG9hZGluZ1xuICAgICAgICAgIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs2fSBsZz17NH0geGw9ezR9IGtleT17cHJvZHVjdC5pZH0gY2xhc3NOYW1lPSdteS0yJz5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICA8Q2FyZD5cbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufTxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWt+W8j+WFiOWOu+eci+WcqHByb2R1Y3TlupXkuItjYXRlZ29yaWVz5LiL6Z2i55qE6Zmj5YiX5a2Y5LiN5a2Y5Zyo77yM5L2/55SoWzBd5Luj6KGo6YCZ5YCL6Zmj5YiX55qE56ys5LiA6aCF77yM5Zug54K65q+P5LiA5YCLcHJvZHVjdOW6leS4i+eahGNhdGVnb3JpZXPpg73mmK/njajnq4vlrZjlnKjnmoTvvIzmiYDku6XpmaTpnZ7mnInlkIzkuIDlgItwcm9kdWN0LmNhdGVnb3JpZXPkuIvpnaLmnInkuIDlgIvku6XkuIrpmaPliJfmiY3opoHnlKgw5Lul5LiK55qE5pW45a2XXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzpmaPliJfkuI3lrZjlnKjmuIXnqbrkvY3nva7vvIzlrZjlnKjnmoToqbHmiY3poa/npLrlhaflrrlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QuY2F0ZWdvcmllc1swXS5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5jYXRlZ29yaWVzWzBdLmlkID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgUHJpY2U6IGAgKyBwcm9kdWN0LnByaWNlIH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhcHJvZHVjdC5jYXRlZ29yaWVzWzBdLmlkID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgQ2F0ZWdvcnk6IGAgKyBwcm9kdWN0LmNhdGVnb3JpZXNbMF0ubmFtZSB9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgeyAhcHJvZHVjdC5jYXRlZ29yaWVzWzBdLmlkID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgUXVhbGl0eTogYCArIHByb2R1Y3QucXVhbGl0eSB9PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pa35byP6KaB6KKr5YyF5ZCr5LiN54S25Yik5pa35pyD6Yyv6Kqk5oiW5piv5aSx5pWIXG4gICAgICAgICAgICAgICAgICAgICAgICAhKHByb2R1Y3QuY2F0ZWdvcmllc1swXS5pZCA9PSAxKSA/IG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYENyZWF0ZV9hdDogYCArIG5ldyBEYXRlKHByb2R1Y3QuY2F0ZWdvcmllc1swXS5jcmVhdGVkX2F0KS50b0xvY2FsZVN0cmluZygpIH1cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gY2F0ZWdvcmllc+eUseWklumDqOaOpeWFpe+8jOmAmeWAi+WAvOmcgOimgeeUseWklumDqOaOpeWIsGRhdGHlvozvvIzol4nnlLFmdW5jdGlvbiByZXR1cm7lvozlho3ph43orormlbjlgrPlhaVcbmV4cG9ydCBjb25zdCBDYXRlZ29yeUpzb24gPSAoeyBjYXRlZ29yaWVzIH0pID0+IHtcblxuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IHN0eWxlPXtyb3dTdHlsZX0gY2xhc3NOYW1lPSdteS0zJz5cbiAgICAgICAge1xuICAgICAgICAgIC8vIOWmguaenHByb2R1Y3Rz5LiN5a2Y5Zyo77yM6YKj55Wr6Z2i5bCx6aGv56S6TG9hZGluZy4uLlxuICAgICAgICAgICFjYXRlZ29yaWVzID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgICAgLy8gaWYgZWxzZeWIpOaWt+W8j++8jOeUqOS+humBv+WFjeiQrOS4gOaykuaciWxvYWTliLDos4fmlpnmmYLvvIzmnIPloLHpjK/vvIznm7TmjqXpoa/npLpsb2FkaW5nXG4gICAgICAgICAgY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fSBtZD17NH0gbGc9ezR9IHhsPXs0fSBrZXk9e2NhdGVnb3J5LmlkfSBjbGFzc05hbWU9J215LTInPlxuICAgICAgICAgICAgICA8TGlzdEdyb3VwIHZhcmlhbnQ9XCJmbHVzaFwiID5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPSdiZy1saWdodCc+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX08YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxjaXRlIHRpdGxlPVwiU291cmNlIFRpdGxlXCI+e1xuICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShjYXRlZ29yeS5jcmVhdGVkX2F0KS50b0xvY2FsZVN0cmluZygpfTwvY2l0ZT5cbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/contextJson.js\n");

/***/ })

})