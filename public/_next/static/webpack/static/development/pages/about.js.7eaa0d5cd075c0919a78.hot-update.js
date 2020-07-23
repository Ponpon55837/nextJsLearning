webpackHotUpdate("static/development/pages/about.js",{

/***/ "./pages/apiComponents/reposJson.js":
/*!******************************************!*\
  !*** ./pages/apiComponents/reposJson.js ***!
  \******************************************/
/*! exports provided: ReposJson, SubscribersJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReposJson\", function() { return ReposJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SubscribersJson\", function() { return SubscribersJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/reposJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar ReposJson = function ReposJson(_ref) {\n  var repos = _ref.repos;\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    xs: 12,\n    sm: 6,\n    md: 4,\n    lg: 3,\n    xl: 3,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"], {\n    defaultActiveKey: repos.svn_url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"].Toggle, {\n    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Header,\n    eventKey: repos.svn_url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 11\n    }\n  }, repos.svn_url), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"].Collapse, {\n    eventKey: repos.svn_url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Body, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: repos.subscribers_url,\n    title: \"Connect to \".concat(repos.homepage, \" Page\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 15\n    }\n  }, repos.homepage)))), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 16\n    }\n  })));\n};\n_c = ReposJson;\nvar SubscribersJson = function SubscribersJson(_ref2) {\n  var subscribers = _ref2.subscribers;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !subscribers ? 'Loading ...' : subscribers.map(function (subs) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n      xs: 12,\n      sm: 6,\n      md: 4,\n      lg: 3,\n      xl: 3,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"], {\n      defaultActiveKey: subs.id,\n      key: subs.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Header,\n      eventKey: subs.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, subs.login), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Accordion\"].Collapse, {\n      eventKey: subs.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 19\n      }\n    }, __jsx(\"a\", {\n      href: subs.url,\n      title: \"Connect to \".concat(subs.login, \" Page\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }\n    }, subs.login)))), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 22\n      }\n    })));\n  }));\n};\n_c2 = SubscribersJson;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ReposJson\");\n$RefreshReg$(_c2, \"SubscribersJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL3JlcG9zSnNvbi5qcz8xMTc0Il0sIm5hbWVzIjpbIlJlcG9zSnNvbiIsInJlcG9zIiwic3ZuX3VybCIsIkNhcmQiLCJIZWFkZXIiLCJzdWJzY3JpYmVyc191cmwiLCJob21lcGFnZSIsIlN1YnNjcmliZXJzSnNvbiIsInN1YnNjcmliZXJzIiwibWFwIiwic3VicyIsImlkIiwibG9naW4iLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN0QyxTQUNFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFvQixNQUFFLEVBQUUsQ0FBeEI7QUFBMkIsTUFBRSxFQUFFLENBQS9CO0FBQWtDLE1BQUUsRUFBRSxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFXLG9CQUFnQixFQUFFQSxLQUFLLENBQUNDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFELENBQVcsTUFBWDtBQUFrQixNQUFFLEVBQUVDLG9EQUFJLENBQUNDLE1BQTNCO0FBQW1DLFlBQVEsRUFBRUgsS0FBSyxDQUFDQyxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELEtBQUssQ0FBQ0MsT0FEVCxDQURGLEVBSUUsTUFBQyx5REFBRCxDQUFXLFFBQVg7QUFBb0IsWUFBUSxFQUFFRCxLQUFLLENBQUNDLE9BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVELEtBQUssQ0FBQ0ksZUFBZjtBQUFnQyxTQUFLLHVCQUFnQkosS0FBSyxDQUFDSyxRQUF0QixVQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dMLEtBQUssQ0FBQ0ssUUFEVCxDQURGLENBREYsQ0FKRixDQURGLEVBWVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpULENBREYsQ0FERjtBQWtCRCxDQW5CTTtLQUFNTixTO0FBcUJOLElBQU1PLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsUUFBcUI7QUFBQSxNQUFsQkMsV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ2xELFNBQ0UsbUVBRUksQ0FBQ0EsV0FBRCxHQUFnQixhQUFoQixHQUNBQSxXQUFXLENBQUNDLEdBQVosQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLFdBQ2xCLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxDQUFqQjtBQUFvQixRQUFFLEVBQUUsQ0FBeEI7QUFBMkIsUUFBRSxFQUFFLENBQS9CO0FBQWtDLFFBQUUsRUFBRSxDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRDtBQUFXLHNCQUFnQixFQUFFQSxJQUFJLENBQUNDLEVBQWxDO0FBQXNDLFNBQUcsRUFBRUQsSUFBSSxDQUFDQyxFQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRCxDQUFXLE1BQVg7QUFBa0IsUUFBRSxFQUFFUixvREFBSSxDQUFDQyxNQUEzQjtBQUFtQyxjQUFRLEVBQUVNLElBQUksQ0FBQ0MsRUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxJQUFJLENBQUNFLEtBRFIsQ0FERixFQUlFLE1BQUMseURBQUQsQ0FBVyxRQUFYO0FBQW9CLGNBQVEsRUFBRUYsSUFBSSxDQUFDQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFFRCxJQUFJLENBQUNHLEdBQWQ7QUFDQSxXQUFLLHVCQUFnQkgsSUFBSSxDQUFDRSxLQUFyQixVQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDeUNGLElBQUksQ0FBQ0UsS0FEOUMsQ0FERixDQURGLENBSkYsQ0FERixFQVdTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYVCxDQURGLENBRGtCO0FBQUEsR0FBcEIsQ0FISixDQURGO0FBd0JELENBekJNO01BQU1MLGUiLCJmaWxlIjoiLi9wYWdlcy9hcGlDb21wb25lbnRzL3JlcG9zSnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBDb2wsIExpc3RHcm91cCwgQ2FyZCwgQWNjb3JkaW9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgY29uc3QgUmVwb3NKc29uID0gKHsgcmVwb3MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGxnPXszfSB4bD17M30+XG4gICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9e3JlcG9zLnN2bl91cmx9PlxuICAgICAgICA8Q2FyZD5cbiAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PXtyZXBvcy5zdm5fdXJsfT5cbiAgICAgICAgICAgIHtyZXBvcy5zdm5fdXJsfVxuICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cbiAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PXtyZXBvcy5zdm5fdXJsfT5cbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e3JlcG9zLnN1YnNjcmliZXJzX3VybH0gdGl0bGU9e2BDb25uZWN0IHRvICR7cmVwb3MuaG9tZXBhZ2V9IFBhZ2VgfT5cbiAgICAgICAgICAgICAgICB7cmVwb3MuaG9tZXBhZ2V9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICA8L0NhcmQ+PGJyIC8+XG4gICAgICA8L0FjY29yZGlvbj5cbiAgICA8L0NvbD5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgU3Vic2NyaWJlcnNKc29uID0gKHsgc3Vic2NyaWJlcnMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgICFzdWJzY3JpYmVycyA/ICAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgc3Vic2NyaWJlcnMubWFwKHN1YnMgPT4gKFxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0gbWQ9ezR9IGxnPXszfSB4bD17M30+XG4gICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9e3N1YnMuaWR9IGtleT17c3Vicy5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9e3N1YnMuaWR9PlxuICAgICAgICAgICAgICAgICAge3N1YnMubG9naW59XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e3N1YnMuaWR9PlxuICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c3Vicy51cmx9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtgQ29ubmVjdCB0byAke3N1YnMubG9naW59IFBhZ2VgfT57c3Vicy5sb2dpbn08L2E+XG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgPC9DYXJkPjxiciAvPlxuICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/apiComponents/reposJson.js\n");

/***/ })

})