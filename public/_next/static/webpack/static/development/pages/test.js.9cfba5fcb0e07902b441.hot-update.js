webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/contextJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contextJson.js ***!
  \********************************************/
/*! exports provided: CourseJson, ProductJson, CategoryJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CourseJson\", function() { return CourseJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductJson\", function() { return ProductJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CategoryJson\", function() { return CategoryJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contextJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // courses由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\nvar CourseJson = function CourseJson(_ref) {\n  var courses = _ref.courses,\n      IsOpen = _ref.IsOpen,\n      setIsOpen = _ref.setIsOpen;\n  // console.log(courses)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    className: \"my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !courses ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  courses.map(function (course) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 4,\n      xl: 3,\n      key: course.id,\n      className: \"my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n      className: \"bg-light \".concat(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseListGroupItem),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }\n    }, __jsx(\"div\", {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseDiv,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 19\n      }\n    }, course.title), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 76\n      }\n    }), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].div, {\n      layout: true,\n      whileHover: {\n        opacity: 1\n      },\n      onClick: function onClick() {\n        return setIsOpen(true);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 19\n      }\n    }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].img, {\n      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.courseIMG,\n      src: !(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + course.image.url) ? null : _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"API_URL\"] + course.image.url,\n      rounded: true,\n      fluid: true,\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1,\n        scale: [1, 2, 2, 1, 1],\n        rotate: [0, 0, 270, 270, 0],\n        borderRadius: [\"0%\", \"66%\", \"100%\", \"33%\", \"0%\"]\n      },\n      tramsition: {\n        delay: 1\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 21\n      }\n    })), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 32\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }\n    }, new Date(course.published).toLocaleString()))));\n  })));\n}; // products由外部接入，這個值需要由data傳入\n\n_c = CourseJson;\nvar ProductJson = function ProductJson(_ref2) {\n  var products = _ref2.products;\n  // console.log(products)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    className: \"my-2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !products ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  products.map(function (product) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: product.id,\n      className: \"my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"], {\n      defaultActiveKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Header,\n      eventKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 19\n      }\n    }, product.title), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Accordion\"].Collapse, {\n      eventKey: product.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 19\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Card\"].Body, {\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 21\n      }\n    }, product.description, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 44\n      }\n    }), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 50\n      }\n    }), ( // 判斷式先去看在product底下categories下面的陣列存不存在，使用[0]代表這個陣列的第一項，因為每一個product底下的categories都是獨立存在的，所以除非有同一個product.categories下面有一個以上陣列才要用0以上的數字\n    // 如果陣列不存在清空位置，存在的話才顯示內容\n    console.log(product.categories[0].id), !product.categories[0].id ? null : \"Price: \" + product.price), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 52\n      }\n    }), !product.categories[0].id ? null : \"Category: \" + product.categories[0].name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 68\n      }\n    }), !product.categories[0].id ? null : \"Quality: \" + product.quality, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 56\n      }\n    }), // 判斷式要被包含不然判斷會錯誤或是失效\n    !(product.categories[0].id == 1) ? null : \"Create_at: \" + new Date(product.categories[0].created_at).toLocaleString())))));\n  })));\n}; // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\n_c2 = ProductJson;\nvar CategoryJson = function CategoryJson(_ref3) {\n  var categories = _ref3.categories;\n  // console.log(categories)\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"rowStyle\"],\n    className: \"my-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }\n  }, // 如果products不存在，那畫面就顯示Loading...\n  !categories ? 'Loading ...' : // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  categories.map(function (category) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 4,\n      xl: 4,\n      key: category.id,\n      className: \"my-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n      className: \"bg-light\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 17\n      }\n    }, category.name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 34\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 19\n      }\n    }, new Date(category.created_at).toLocaleString()))));\n  })));\n};\n_c3 = CategoryJson;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CourseJson\");\n$RefreshReg$(_c2, \"ProductJson\");\n$RefreshReg$(_c3, \"CategoryJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRleHRKc29uLmpzPzQwNWEiXSwibmFtZXMiOlsiQ291cnNlSnNvbiIsImNvdXJzZXMiLCJJc09wZW4iLCJzZXRJc09wZW4iLCJyb3dTdHlsZSIsIm1hcCIsImNvdXJzZSIsImlkIiwidXRpbFN0eWxlIiwiY291cnNlTGlzdEdyb3VwSXRlbSIsImNvdXJzZURpdiIsInRpdGxlIiwib3BhY2l0eSIsImNvdXJzZUlNRyIsIkFQSV9VUkwiLCJpbWFnZSIsInVybCIsInNjYWxlIiwicm90YXRlIiwiYm9yZGVyUmFkaXVzIiwiZGVsYXkiLCJEYXRlIiwicHVibGlzaGVkIiwidG9Mb2NhbGVTdHJpbmciLCJQcm9kdWN0SnNvbiIsInByb2R1Y3RzIiwicHJvZHVjdCIsIkNhcmQiLCJIZWFkZXIiLCJ3b3JkU3R5bGUiLCJkZXNjcmlwdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRlZ29yaWVzIiwicHJpY2UiLCJuYW1lIiwicXVhbGl0eSIsImNyZWF0ZWRfYXQiLCJDYXRlZ29yeUpzb24iLCJjYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFvQztBQUFBLE1BQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxNQUF4QkMsTUFBd0IsUUFBeEJBLE1BQXdCO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUU1RDtBQUNBLFNBQ0UsbUVBQ0UsTUFBQyxtREFBRDtBQUFLLFNBQUssRUFBRUMsNkRBQVo7QUFBc0IsYUFBUyxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNBLEdBQUNILE9BQUQsR0FBVyxhQUFYLEdBQ0E7QUFDQUEsU0FBTyxDQUFDSSxHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLFdBQ2hC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Q0EsR0FBQzZCLFVBQUQsR0FBYyxhQUFkLEdBQ0E7QUFDQUEsWUFBVSxDQUFDNUIsR0FBWCxDQUFlLFVBQUFrQyxRQUFRO0FBQUEsV0FDckIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLENBQWpCO0FBQW9CLFFBQUUsRUFBRSxDQUF4QjtBQUEyQixRQUFFLEVBQUUsQ0FBL0I7QUFBa0MsUUFBRSxFQUFFLENBQXRDO0FBQXlDLFNBQUcsRUFBRUEsUUFBUSxDQUFDaEMsRUFBdkQ7QUFBMkQsZUFBUyxFQUFDLE1BQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlEQUFEO0FBQVcsYUFBTyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlEQUFELENBQVcsSUFBWDtBQUFnQixlQUFTLEVBQUMsVUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHZ0MsUUFBUSxDQUFDSixJQURaLEVBQ2lCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEakIsRUFFRTtBQUFNLFdBQUssRUFBQyxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxJQUFJZCxJQUFKLENBQVNrQixRQUFRLENBQUNGLFVBQWxCLEVBQThCZCxjQUE5QixFQURGLENBRkYsQ0FERixDQURGLENBRHFCO0FBQUEsR0FBdkIsQ0FMSixDQURGLENBREY7QUFzQkQsQ0F6Qk07TUFBTWUsWSIsImZpbGUiOiIuL3BhZ2VzL2FwaUNvbXBvbmVudHMvY29udGV4dEpzb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgcm93U3R5bGUsIHdvcmRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy91dGlsU3R5bGUuanMnXG5pbXBvcnQgdXRpbFN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4vZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB7IENvbCwgUm93LCBMaXN0R3JvdXAsIEltYWdlLCBDYXJkLCBBY2NvcmRpb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG4vLyBjb3Vyc2Vz55Sx5aSW6YOo5o6l5YWl77yM6YCZ5YCL5YC86ZyA6KaB55Sx5aSW6YOo5o6l5YiwZGF0YeW+jO+8jOiXieeUsWZ1bmN0aW9uIHJldHVybuW+jOWGjemHjeiuiuaVuOWCs+WFpVxuZXhwb3J0IGNvbnN0IENvdXJzZUpzb24gPSAoeyBjb3Vyc2VzLCBJc09wZW4sIHNldElzT3BlbiB9KSA9PiB7XG5cbiAgLy8gY29uc29sZS5sb2coY291cnNlcylcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFJvdyBzdHlsZT17cm93U3R5bGV9IGNsYXNzTmFtZT0nbXktMic+XG4gICAgICAgIHsgLy8g5aaC5p6ccHJvZHVjdHPkuI3lrZjlnKjvvIzpgqPnlavpnaLlsLHpoa/npLpMb2FkaW5nLi4uXG4gICAgICAgICAgIWNvdXJzZXMgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgICAvLyBpZiBlbHNl5Yik5pa35byP77yM55So5L6G6YG/5YWN6JCs5LiA5rKS5pyJbG9hZOWIsOizh+aWmeaZgu+8jOacg+WgsemMr++8jOebtOaOpemhr+ekumxvYWRpbmdcbiAgICAgICAgICBjb3Vyc2VzLm1hcChjb3Vyc2UgPT4gKFxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fSBtZD17NH0gbGc9ezR9IHhsPXszfSBrZXk9e2NvdXJzZS5pZH0gY2xhc3NOYW1lPSdteS0yJz5cbiAgICAgICAgICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIj5cbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPXtgYmctbGlnaHQgJHt1dGlsU3R5bGUuY291cnNlTGlzdEdyb3VwSXRlbX1gfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGUuY291cnNlRGl2fT57Y291cnNlLnRpdGxlfTwvZGl2PjxiciAvPlxuICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4odHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZS5jb3Vyc2VJTUd9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXsgIShBUElfVVJMICsgY291cnNlLmltYWdlLnVybCkgPyBudWxsIDogQVBJX1VSTCArIGNvdXJzZS5pbWFnZS51cmwgfVxuICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IFsxLCAyLCAyLCAxLCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0ZTogWzAsIDAsIDI3MCwgMjcwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogW1wiMCVcIiwgXCI2NiVcIiwgXCIxMDAlXCIsIFwiMzMlXCIsIFwiMCVcIl0sIH19XG4gICAgICAgICAgICAgICAgICAgICAgdHJhbXNpdGlvbj17eyBkZWxheTogMSB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PjxiciAvPlxuICAgICAgICAgICAgICAgICAgPGNpdGUgdGl0bGU9XCJTb3VyY2UgVGl0bGVcIj57XG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGNvdXJzZS5wdWJsaXNoZWQpLnRvTG9jYWxlU3RyaW5nKCl9PC9jaXRlPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gcHJvZHVjdHPnlLHlpJbpg6jmjqXlhaXvvIzpgJnlgIvlgLzpnIDopoHnlLFkYXRh5YKz5YWlXG5leHBvcnQgY29uc3QgUHJvZHVjdEpzb24gPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IHN0eWxlPXtyb3dTdHlsZX0gY2xhc3NOYW1lPSdteS0yJz5cbiAgICAgICAgeyAvLyDlpoLmnpxwcm9kdWN0c+S4jeWtmOWcqO+8jOmCo+eVq+mdouWwsemhr+ekukxvYWRpbmcuLi5cbiAgICAgICAgICAhcHJvZHVjdHMgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgICAvLyBpZiBlbHNl5Yik5pa35byP77yM55So5L6G6YG/5YWN6JCs5LiA5rKS5pyJbG9hZOWIsOizh+aWmeaZgu+8jOacg+WgsemMr++8jOebtOaOpemhr+ekumxvYWRpbmdcbiAgICAgICAgICBwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSB4bD17NH0ga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9J215LTInPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9e3Byb2R1Y3QuaWR9PlxuICAgICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0NhcmQuSGVhZGVyfSBldmVudEtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHkgc3R5bGU9e3dvcmRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259PGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pa35byP5YWI5Y6755yL5ZyocHJvZHVjdOW6leS4i2NhdGVnb3JpZXPkuIvpnaLnmoTpmaPliJflrZjkuI3lrZjlnKjvvIzkvb/nlKhbMF3ku6PooajpgJnlgIvpmaPliJfnmoTnrKzkuIDpoIXvvIzlm6Dngrrmr4/kuIDlgItwcm9kdWN05bqV5LiL55qEY2F0ZWdvcmllc+mDveaYr+eNqOeri+WtmOWcqOeahO+8jOaJgOS7pemZpOmdnuacieWQjOS4gOWAi3Byb2R1Y3QuY2F0ZWdvcmllc+S4i+mdouacieS4gOWAi+S7peS4iumZo+WIl+aJjeimgeeUqDDku6XkuIrnmoTmlbjlrZdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOmZo+WIl+S4jeWtmOWcqOa4heepuuS9jee9ru+8jOWtmOWcqOeahOipseaJjemhr+ekuuWFp+WuuVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdC5jYXRlZ29yaWVzWzBdLmlkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LmNhdGVnb3JpZXNbMF0uaWQgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGBQcmljZTogYCArIHByb2R1Y3QucHJpY2UgfTxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFwcm9kdWN0LmNhdGVnb3JpZXNbMF0uaWQgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGBDYXRlZ29yeTogYCArIHByb2R1Y3QuY2F0ZWdvcmllc1swXS5uYW1lIH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7ICFwcm9kdWN0LmNhdGVnb3JpZXNbMF0uaWQgPyBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGBRdWFsaXR5OiBgICsgcHJvZHVjdC5xdWFsaXR5IH08YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDliKTmlrflvI/opoHooqvljIXlkKvkuI3nhLbliKTmlrfmnIPpjK/oqqTmiJbmmK/lpLHmlYhcbiAgICAgICAgICAgICAgICAgICAgICAgICEocHJvZHVjdC5jYXRlZ29yaWVzWzBdLmlkID09IDEpID8gbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBgQ3JlYXRlX2F0OiBgICsgbmV3IERhdGUocHJvZHVjdC5jYXRlZ29yaWVzWzBdLmNyZWF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKCkgfVxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1Jvdz5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBjYXRlZ29yaWVz55Sx5aSW6YOo5o6l5YWl77yM6YCZ5YCL5YC86ZyA6KaB55Sx5aSW6YOo5o6l5YiwZGF0YeW+jO+8jOiXieeUsWZ1bmN0aW9uIHJldHVybuW+jOWGjemHjeiuiuaVuOWCs+WFpVxuZXhwb3J0IGNvbnN0IENhdGVnb3J5SnNvbiA9ICh7IGNhdGVnb3JpZXMgfSkgPT4ge1xuXG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfSBjbGFzc05hbWU9J215LTMnPlxuICAgICAgICB7XG4gICAgICAgICAgLy8g5aaC5p6ccHJvZHVjdHPkuI3lrZjlnKjvvIzpgqPnlavpnaLlsLHpoa/npLpMb2FkaW5nLi4uXG4gICAgICAgICAgIWNhdGVnb3JpZXMgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgICAvLyBpZiBlbHNl5Yik5pa35byP77yM55So5L6G6YG/5YWN6JCs5LiA5rKS5pyJbG9hZOWIsOizh+aWmeaZgu+8jOacg+WgsemMr++8jOebtOaOpemhr+ekumxvYWRpbmdcbiAgICAgICAgICBjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiAoXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9IG1kPXs0fSBsZz17NH0geGw9ezR9IGtleT17Y2F0ZWdvcnkuaWR9IGNsYXNzTmFtZT0nbXktMic+XG4gICAgICAgICAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCIgPlxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9J2JnLWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfTxiciAvPlxuICAgICAgICAgICAgICAgICAgPGNpdGUgdGl0bGU9XCJTb3VyY2UgVGl0bGVcIj57XG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGNhdGVnb3J5LmNyZWF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKCl9PC9jaXRlPlxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/apiComponents/contextJson.js\n");

/***/ })

})