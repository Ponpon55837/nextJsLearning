webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"useWindowSize\"])();\n  console.log(webAtThisMointorSize);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      onClick: function onClick() {\n        return Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"badgeAlert\"])(park.introduction);\n      },\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"ifElseFunc\"])(webAtThisMointorSize, park.introduction)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      onClick: function onClick() {\n        return Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"badgeAlert\"])(park.address);\n      },\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 19\n      }\n    }, Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"ifElseFunc\"])(webAtThisMointorSize, park.address)), __jsx(\"div\", {\n      className: \"mr-2 mb-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 19\n      }\n    }, \"\\u5269\\u9918\\u8ECA\\u4F4D\\uFF1A\", park.surplusSpace, \" \\u500B\"), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 19\n      }\n    }, \"\\u505C\\u8ECA\\u5834\\u576A\\u6578\\uFF1A\", park.totalSpace, \" \\u576A\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"useWindowSize\"]];\n});\n\n_c = ContactJson;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJjb25zb2xlIiwibG9nIiwiZ2V0UGFyayIsIm1hcCIsInBhcmsiLCJhcmVhSWQiLCJwYXJrSWQiLCJ3b3JkU3R5bGUiLCJwYXJrU3R5bGUiLCJDYXJkIiwiSGVhZGVyIiwiYXJlYU5hbWUiLCJiYWRnZUFsZXJ0IiwiaW50cm9kdWN0aW9uIiwiaWZFbHNlRnVuYyIsImFkZHJlc3MiLCJzdXJwbHVzU3BhY2UiLCJ0b3RhbFNwYWNlIiwicGF5R3VpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxvQkFBb0IsR0FBR0MsNkVBQWEsRUFBMUM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlILG9CQUFaO0FBQ0EsU0FDRSxtRUFFSSxDQUFDSSx1RUFBTyxFQUFSLEdBQWEsYUFBYixHQUNBQSx1RUFBTyxHQUFHQyxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLFdBQ2hCLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxFQUFqQjtBQUFxQixRQUFFLEVBQUUsRUFBekI7QUFBNkIsUUFBRSxFQUFFLENBQWpDO0FBQW9DLFFBQUUsRUFBRSxDQUF4QztBQUEyQyxTQUFHLFlBQUtBLElBQUksQ0FBQ0MsTUFBVixnQkFBc0JELElBQUksQ0FBQ0UsTUFBM0IsQ0FBOUM7QUFBbUYsV0FBSyxFQUFFQyw4REFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseURBQUQ7QUFBVyxzQkFBZ0IsRUFBQyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxvREFBRDtBQUFNLFVBQUksRUFBRUgsSUFBWjtBQUFrQixXQUFLLEVBQUVJLDhEQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5REFBRCxDQUFXLE1BQVg7QUFBa0IsUUFBRSxFQUFFQyxvREFBSSxDQUFDQyxNQUEzQjtBQUFtQyxjQUFRLFlBQUtOLElBQUksQ0FBQ0MsTUFBVixnQkFBc0JELElBQUksQ0FBQ0UsTUFBM0IsQ0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRixJQUFJLENBQUNPLFFBRFIsQ0FERixFQUlFLE1BQUMsb0RBQUQsQ0FBTSxRQUFOO0FBQWUsZUFBUyxFQUFDLGdCQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxxREFBRDtBQUFPLGFBQU8sRUFBRTtBQUFBLGVBQU1DLDBFQUFVLENBQUNSLElBQUksQ0FBQ1MsWUFBTixDQUFoQjtBQUFBLE9BQWhCO0FBQXFELGVBQVMsRUFBQyxXQUEvRDtBQUEyRSxhQUFPLEVBQUMsTUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJQywwRUFBVSxDQUFDaEIsb0JBQUQsRUFBdUJNLElBQUksQ0FBQ1MsWUFBNUIsQ0FGZCxDQURGLEVBTUUsTUFBQyxxREFBRDtBQUFPLGVBQVMsRUFBQyxXQUFqQjtBQUE2QixhQUFPLEVBQUU7QUFBQSxlQUFNRCwwRUFBVSxDQUFDUixJQUFJLENBQUNXLE9BQU4sQ0FBaEI7QUFBQSxPQUF0QztBQUFzRSxhQUFPLEVBQUMsV0FBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJRCwwRUFBVSxDQUFDaEIsb0JBQUQsRUFBdUJNLElBQUksQ0FBQ1csT0FBNUIsQ0FGZCxDQU5GLEVBV0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQUNRWCxJQUFJLENBQUNZLFlBRGIsWUFYRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBQ1NaLElBQUksQ0FBQ2EsVUFEZCxZQWRGLENBSkYsRUFzQkUsTUFBQyx5REFBRCxDQUFXLFFBQVg7QUFBb0IsY0FBUSxZQUFLYixJQUFJLENBQUNDLE1BQVYsZ0JBQXNCRCxJQUFJLENBQUNFLE1BQTNCLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dGLElBQUksQ0FBQ2MsUUFEUixDQURGLENBdEJGLENBREYsQ0FERixDQURnQjtBQUFBLEdBQWxCLENBSEosQ0FERjtBQXlDRCxDQTVDTTs7R0FBTXJCLFc7VUFDa0JFLHFFOzs7S0FEbEJGLFciLCJmaWxlIjoiLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0UGFyaywgaWZFbHNlRnVuYywgYmFkZ2VBbGVydCwgdXNlV2luZG93U2l6ZSB9IGZyb20gJy4vZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB7IHBhcmtTdHlsZSwgd29yZFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxTdHlsZS5qcydcbmltcG9ydCB7IFJvdywgQ29sLCBBY2NvcmRpb24sIENhcmQsIEJhZGdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgY29uc3QgQ29udGFjdEpzb24gPSAoKSA9PiB7XG4gIGNvbnN0IHdlYkF0VGhpc01vaW50b3JTaXplID0gdXNlV2luZG93U2l6ZSgpXG4gIGNvbnNvbGUubG9nKHdlYkF0VGhpc01vaW50b3JTaXplKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgICFnZXRQYXJrKCkgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgZ2V0UGFyaygpLm1hcChwYXJrID0+IChcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSB4bD17NH0ga2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9IHN0eWxlPXt3b3JkU3R5bGV9PlxuICAgICAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PSdmYWxzZSc+XG4gICAgICAgICAgICAgIDxDYXJkIHBhcms9e3Bhcmt9IHN0eWxlPXtwYXJrU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICB7cGFyay5hcmVhTmFtZX1cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPSd0ZXh0LW11dGVkIG0tMic+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2Ugb25DbGljaz17KCkgPT4gYmFkZ2VBbGVydChwYXJrLmludHJvZHVjdGlvbil9IGNsYXNzTmFtZT0nbXItMiBtYi0xJyB2YXJpYW50PSdpbmZvJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGlmRWxzZUZ1bmMod2ViQXRUaGlzTW9pbnRvclNpemUsIHBhcmsuaW50cm9kdWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nbXItMiBtYi0xJyBvbkNsaWNrPXsoKSA9PiBiYWRnZUFsZXJ0KHBhcmsuYWRkcmVzcyl9IHZhcmlhbnQ9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZkVsc2VGdW5jKHdlYkF0VGhpc01vaW50b3JTaXplLCBwYXJrLmFkZHJlc3MpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItMiBtYi0xJz5cbiAgICAgICAgICAgICAgICAgICAg5Ymp6aSY6LuK5L2N77yae3Bhcmsuc3VycGx1c1NwYWNlfSDlgItcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAg5YGc6LuK5aC05Z2q5pW477yae3BhcmsudG90YWxTcGFjZX0g5Z2qXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQuU3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJrLnBheUd1aWRlfVxuICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})