webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/apiComponents/headerJson.js":
/*!*******************************************!*\
  !*** ./pages/apiComponents/headerJson.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/headerJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n // headers由外部傳入\n\nvar HeaderJson = function HeaderJson(_ref) {\n  var headers = _ref.headers;\n  // API_URL為.env這個檔案中的網址來使用，雖然在這邊並沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL\n  // const { API_URL } = process.env\n  console.log(headers);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"], {\n    variant: \"flush\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"ListGroup\"].Item, {\n    className: \"bg-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, !headers ? 'Loading ...' : headers.map(function (header) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: header.url,\n      key: header.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      className: \"nav-item nav-link\",\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__[\"wordCapitalize\"],\n      title: \"Connect to \".concat(header.title, \" Page\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }\n    }, header.title));\n  }))));\n};\n\n_c = HeaderJson;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderJson);\n\nvar _c;\n\n$RefreshReg$(_c, \"HeaderJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2hlYWRlckpzb24uanM/OTE2NSJdLCJuYW1lcyI6WyJIZWFkZXJKc29uIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJoZWFkZXIiLCJ1cmwiLCJpZCIsIndvcmRDYXBpdGFsaXplIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDbEM7QUFDQTtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUVBLFNBQ0UsbUVBQ0UsTUFBQyx5REFBRDtBQUFXLFdBQU8sRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRCxDQUFXLElBQVg7QUFBZ0IsYUFBUyxFQUFDLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxDQUFDQSxPQUFELEdBQVcsYUFBWCxHQUNBQSxPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFBQyxNQUFNO0FBQUEsV0FDaEIsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRUEsTUFBTSxDQUFDQyxHQUFuQjtBQUF3QixTQUFHLEVBQUVELE1BQU0sQ0FBQ0UsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsZUFBUyxFQUFDLG1CQUFiO0FBQWlDLFdBQUssRUFBRUMsbUVBQXhDO0FBQXdELFdBQUssdUJBQWdCSCxNQUFNLENBQUNJLEtBQXZCLFVBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbUdKLE1BQU0sQ0FBQ0ksS0FBMUcsQ0FERixDQURnQjtBQUFBLEdBQWxCLENBSEosQ0FERixDQURGLENBREY7QUFnQkQsQ0FyQkQ7O0tBQU1ULFU7QUF1QlNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpQ29tcG9uZW50cy9oZWFkZXJKc29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHdvcmRDYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxTdHlsZS5qcydcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuL2Z1bmN0aW9uQ29udGV4dEpzb24uanMnXG5pbXBvcnQgeyBMaXN0R3JvdXAgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbi8vIGhlYWRlcnPnlLHlpJbpg6jlgrPlhaVcbmNvbnN0IEhlYWRlckpzb24gPSAoeyBoZWFkZXJzIH0pID0+IHtcbiAgLy8gQVBJX1VSTOeCui5lbnbpgJnlgIvmqpTmoYjkuK3nmoTntrLlnYDkvobkvb/nlKjvvIzpm5bnhLblnKjpgJnpgorkuKbmspLmnInlvbHpn7/vvIzkvYbmmK/lpoLmnpzopoHkvb/nlKhpbWFnZemAmeeormFwaeWMr+WFpeeahOipse+8jOWwsemcgOimgeaMh+WumkFQSV9VUkxcbiAgLy8gY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxuICBjb25zb2xlLmxvZyhoZWFkZXJzKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0R3JvdXAgdmFyaWFudD1cImZsdXNoXCI+XG4gICAgICAgIDxMaXN0R3JvdXAuSXRlbSBjbGFzc05hbWU9J2JnLWxpZ2h0Jz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAhaGVhZGVycyA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICAgICAgaGVhZGVycy5tYXAoaGVhZGVyID0+IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aGVhZGVyLnVybH0ga2V5PXtoZWFkZXIuaWR9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1pdGVtIG5hdi1saW5rXCIgc3R5bGU9e3dvcmRDYXBpdGFsaXplfSB0aXRsZT17YENvbm5lY3QgdG8gJHtoZWFkZXIudGl0bGV9IFBhZ2VgfT57aGVhZGVyLnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XG4gICAgICA8L0xpc3RHcm91cD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJKc29uXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/headerJson.js\n");

/***/ })

})