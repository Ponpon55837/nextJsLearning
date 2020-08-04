webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"useWindowSize\"])();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      onClick: function onClick() {\n        return Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"badgeAlert\"])(park.introduction);\n      },\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"ifElseFunc\"])(webAtThisMointorSize, park.introduction)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      onClick: function onClick() {\n        return Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"badgeAlert\"])(park.address);\n      },\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 19\n      }\n    }, Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"ifElseFunc\"])(webAtThisMointorSize, park.address)), __jsx(\"div\", {\n      className: \"ml-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 19\n      }\n    }, \"\\u505C\\u8ECA\\u5834\\u576A\\u6578\\uFF1A\", park.totalSpace, \" \\u576A\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"useWindowSize\"]];\n});\n\n_c = ContactJson;\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJnZXRQYXJrIiwibWFwIiwicGFyayIsImFyZWFJZCIsInBhcmtJZCIsIndvcmRTdHlsZSIsInBhcmtTdHlsZSIsIkNhcmQiLCJIZWFkZXIiLCJhcmVhTmFtZSIsImJhZGdlQWxlcnQiLCJpbnRyb2R1Y3Rpb24iLCJpZkVsc2VGdW5jIiwiYWRkcmVzcyIsInRvdGFsU3BhY2UiLCJwYXlHdWlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQy9CLE1BQU1DLG9CQUFvQixHQUFHQyw2RUFBYSxFQUExQztBQUNBLFNBQ0UsbUVBRUksQ0FBQ0MsdUVBQU8sRUFBUixHQUFhLGFBQWIsR0FDQUEsdUVBQU8sR0FBR0MsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSxXQUNoQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLEVBQXpCO0FBQTZCLFFBQUUsRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBMkMsU0FBRyxZQUFLQSxJQUFJLENBQUNDLE1BQVYsZ0JBQXNCRCxJQUFJLENBQUNFLE1BQTNCLENBQTlDO0FBQW1GLFdBQUssRUFBRUMsOERBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlEQUFEO0FBQVcsc0JBQWdCLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQ7QUFBTSxVQUFJLEVBQUVILElBQVo7QUFBa0IsV0FBSyxFQUFFSSw4REFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMseURBQUQsQ0FBVyxNQUFYO0FBQWtCLFFBQUUsRUFBRUMsb0RBQUksQ0FBQ0MsTUFBM0I7QUFBbUMsY0FBUSxZQUFLTixJQUFJLENBQUNDLE1BQVYsZ0JBQXNCRCxJQUFJLENBQUNFLE1BQTNCLENBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0YsSUFBSSxDQUFDTyxRQURSLENBREYsRUFJRSxNQUFDLG9EQUFELENBQU0sUUFBTjtBQUFlLGVBQVMsRUFBQyxnQkFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMscURBQUQ7QUFBTyxhQUFPLEVBQUU7QUFBQSxlQUFNQywwRUFBVSxDQUFDUixJQUFJLENBQUNTLFlBQU4sQ0FBaEI7QUFBQSxPQUFoQjtBQUFxRCxlQUFTLEVBQUMsV0FBL0Q7QUFBMkUsYUFBTyxFQUFDLE1BQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSUMsMEVBQVUsQ0FBQ2Qsb0JBQUQsRUFBdUJJLElBQUksQ0FBQ1MsWUFBNUIsQ0FGZCxDQURGLEVBTUUsTUFBQyxxREFBRDtBQUFPLGFBQU8sRUFBRTtBQUFBLGVBQU1ELDBFQUFVLENBQUNSLElBQUksQ0FBQ1csT0FBTixDQUFoQjtBQUFBLE9BQWhCO0FBQWdELGFBQU8sRUFBQyxXQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUlELDBFQUFVLENBQUNkLG9CQUFELEVBQXVCSSxJQUFJLENBQUNXLE9BQTVCLENBRmQsQ0FORixFQVdFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FDU1gsSUFBSSxDQUFDWSxVQURkLFlBWEYsQ0FKRixFQW1CRSxNQUFDLHlEQUFELENBQVcsUUFBWDtBQUFvQixjQUFRLFlBQUtaLElBQUksQ0FBQ0MsTUFBVixnQkFBc0JELElBQUksQ0FBQ0UsTUFBM0IsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0YsSUFBSSxDQUFDYSxRQURSLENBREYsQ0FuQkYsQ0FERixDQURGLENBRGdCO0FBQUEsR0FBbEIsQ0FISixDQURGO0FBc0NELENBeENNOztHQUFNbEIsVztVQUNrQkUscUU7OztLQURsQkYsVyIsImZpbGUiOiIuL3BhZ2VzL2FwaUNvbXBvbmVudHMvY29udGFjdEpzb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQYXJrLCBpZkVsc2VGdW5jLCBiYWRnZUFsZXJ0LCB1c2VXaW5kb3dTaXplIH0gZnJvbSAnLi9mdW5jdGlvbkNvbnRleHRKc29uLmpzJ1xuaW1wb3J0IHsgcGFya1N0eWxlLCB3b3JkU3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbFN0eWxlLmpzJ1xuaW1wb3J0IHsgUm93LCBDb2wsIEFjY29yZGlvbiwgQ2FyZCwgQmFkZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBjb25zdCBDb250YWN0SnNvbiA9ICgpID0+IHtcbiAgY29uc3Qgd2ViQXRUaGlzTW9pbnRvclNpemUgPSB1c2VXaW5kb3dTaXplKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICAhZ2V0UGFyaygpID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgIGdldFBhcmsoKS5tYXAocGFyayA9PiAoXG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0geGw9ezR9IGtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfSBzdHlsZT17d29yZFN0eWxlfT5cbiAgICAgICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT0nZmFsc2UnPlxuICAgICAgICAgICAgICA8Q2FyZCBwYXJrPXtwYXJrfSBzdHlsZT17cGFya1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9PlxuICAgICAgICAgICAgICAgICAge3BhcmsuYXJlYU5hbWV9XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCBtLTInPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIG9uQ2xpY2s9eygpID0+IGJhZGdlQWxlcnQocGFyay5pbnRyb2R1Y3Rpb24pfSBjbGFzc05hbWU9J21yLTIgbWItMScgdmFyaWFudD0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZkVsc2VGdW5jKHdlYkF0VGhpc01vaW50b3JTaXplLCBwYXJrLmludHJvZHVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBvbkNsaWNrPXsoKSA9PiBiYWRnZUFsZXJ0KHBhcmsuYWRkcmVzcyl9IHZhcmlhbnQ9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZkVsc2VGdW5jKHdlYkF0VGhpc01vaW50b3JTaXplLCBwYXJrLmFkZHJlc3MpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+XG4gICAgICAgICAgICAgICAgICAgIOWBnOi7iuWgtOWdquaVuO+8mntwYXJrLnRvdGFsU3BhY2V9IOWdqlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cGFyay5wYXlHdWlkZX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})