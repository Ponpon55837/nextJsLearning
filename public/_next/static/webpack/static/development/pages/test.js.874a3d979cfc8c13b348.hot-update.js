webpackHotUpdate("static/development/pages/test.js",{

/***/ "./pages/apiComponents/categoryJson.js":
/*!*********************************************!*\
  !*** ./pages/apiComponents/categoryJson.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/ListGroup */ \"./node_modules/react-bootstrap/esm/ListGroup.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/nextJsPublic/next-learn-demo/nextJsWithStrapi/pages/apiComponents/categoryJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // categories由外部接入，這個值需要由外部接到data後，藉由function return後再重變數傳入\n\nvar CategoryJson = function CategoryJson(_ref) {\n  var categories = _ref.categories;\n  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL\n  var API_URL = \"http://localhost:1337\";\n  console.log(categories);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    style: rowStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, // if else判斷式，用來避免萬一沒有load到資料時，會報錯，直接顯示loading\n  categories ? categories.map(function (category) {\n    return __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 6,\n      key: category.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      variant: \"flush\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap_ListGroup__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    }, category.name, __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 34\n      }\n    }), __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, category.created_at))));\n  }) // 如果products不存在，那畫面就顯示Loading...\n  : 'Loading'));\n};\n\n_c = CategoryJson;\nvar rowStyle = {\n  paddingButtom: '1rem'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryJson);\n\nvar _c;\n\n$RefreshReg$(_c, \"CategoryJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NhdGVnb3J5SnNvbi5qcz9hN2ZmIl0sIm5hbWVzIjpbIkNhdGVnb3J5SnNvbiIsImNhdGVnb3JpZXMiLCJBUElfVVJMIiwicHJvY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyb3dTdHlsZSIsIm1hcCIsImNhdGVnb3J5IiwiaWQiLCJuYW1lIiwiY3JlYXRlZF9hdCIsInBhZGRpbmdCdXR0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvQjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFDdkM7QUFEdUMsTUFFL0JDLE9BRitCLEdBRW5CQyx1QkFGbUI7QUFHdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixVQUFaO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLDJEQUFEO0FBQUssU0FBSyxFQUFFSyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNBTCxZQUFVLEdBQUdBLFVBQVUsQ0FBQ00sR0FBWCxDQUFlLFVBQUFDLFFBQVE7QUFBQSxXQUNsQyxNQUFDLDJEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLEVBQXpCO0FBQTZCLFFBQUUsRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBMkMsU0FBRyxFQUFFQSxRQUFRLENBQUNDLEVBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlFQUFEO0FBQVcsYUFBTyxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlFQUFELENBQVcsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELFFBQVEsQ0FBQ0UsSUFEWixFQUNpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGpCLEVBRUU7QUFBTSxXQUFLLEVBQUMsY0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRCRixRQUFRLENBQUNHLFVBQXJDLENBRkYsQ0FERixDQURGLENBRGtDO0FBQUEsR0FBdkIsQ0FBSCxDQVVWO0FBVlUsSUFXUixTQWJOLENBREYsQ0FERjtBQW9CRCxDQXhCRDs7S0FBTVgsWTtBQTBCTixJQUFNTSxRQUFRLEdBQUc7QUFDZk0sZUFBYSxFQUFFO0FBREEsQ0FBakI7QUFJZVosMkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hcGlDb21wb25lbnRzL2NhdGVnb3J5SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnXG5pbXBvcnQgTGlzdEdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9MaXN0R3JvdXAnXG5cbi8vIGNhdGVnb3JpZXPnlLHlpJbpg6jmjqXlhaXvvIzpgJnlgIvlgLzpnIDopoHnlLHlpJbpg6jmjqXliLBkYXRh5b6M77yM6JeJ55SxZnVuY3Rpb24gcmV0dXJu5b6M5YaN6YeN6K6K5pW45YKz5YWlXG5jb25zdCBDYXRlZ29yeUpzb24gPSAoeyBjYXRlZ29yaWVzIH0pID0+IHtcbiAgLy8gQVBJX1VSTOeCui5lbnbpgJnlgIvmqpTmoYjkuK3nmoTntrLlnYDkvobkvb/nlKjvvIzpm5bnhLblnKjpgJnpgorkuKbmspLmnInlvbHpn7/vvIzkvYbmmK/lpoLmnpzopoHkvb/nlKhpbWFnZemAmeeormFwaeWMr+WFpeeahOipse+8jOWwsemcgOimgeaMh+WumkFQSV9VUkxcbiAgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Um93IHN0eWxlPXtyb3dTdHlsZX0+XG4gICAgICAgIHsgLy8gaWYgZWxzZeWIpOaWt+W8j++8jOeUqOS+humBv+WFjeiQrOS4gOaykuaciWxvYWTliLDos4fmlpnmmYLvvIzmnIPloLHpjK/vvIznm7TmjqXpoa/npLpsb2FkaW5nXG4gICAgICAgICAgY2F0ZWdvcmllcyA/IGNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IChcbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9IHhsPXs2fSBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIiA+XG4gICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtID5cbiAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5uYW1lfTxiciAvPlxuICAgICAgICAgICAgICAgICAgPGNpdGUgdGl0bGU9XCJTb3VyY2UgVGl0bGVcIj57Y2F0ZWdvcnkuY3JlYXRlZF9hdH08L2NpdGU+XG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICApKVxuICAgICAgICAgIC8vIOWmguaenHByb2R1Y3Rz5LiN5a2Y5Zyo77yM6YKj55Wr6Z2i5bCx6aGv56S6TG9hZGluZy4uLlxuICAgICAgICAgIDogJ0xvYWRpbmcnXG4gICAgICAgIH1cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IHJvd1N0eWxlID0ge1xuICBwYWRkaW5nQnV0dG9tOiAnMXJlbSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlKc29uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/categoryJson.js\n");

/***/ })

})