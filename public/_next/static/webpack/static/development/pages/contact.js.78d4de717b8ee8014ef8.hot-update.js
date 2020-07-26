webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/contact.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // bootstrap\n\n\n\nvar Contact = function Contact(props, _ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Contact to the park' : _ref$title,\n      _ref$h1_id = _ref.h1_id,\n      h1_id = _ref$h1_id === void 0 ? 5 : _ref$h1_id,\n      _ref$arr_id = _ref.arr_id,\n      arr_id = _ref$arr_id === void 0 ? 5 : _ref$arr_id;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"titleDescription\"])()), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])() ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"pageDescription\"])() : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])().map(function (park) {\n      return park.introduction;\n    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"pageDescription\"])(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 10,\n    lg: 10,\n    xl: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"h1Mapping\"])() ? null : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"h1Mapping\"])(h1_id, arr_id), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])() ? 'Loading ...' : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n      id: \"getWidth\",\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 21\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 23\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Header, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 25\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 25\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Badge\"], {\n      className: \"mr-2\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 27\n      }\n    }, !(park.introduction.length > 20) ? park.introduction : park.introduction.substring(0, 20) + '...'), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 27\n      }\n    }, (!(park.address.length > 20) ? park.address : park.address.substring(0, 20) + '...', console.log(getWidth.getBoundingClientRect().width))), __jsx(\"div\", {\n      className: \"mt-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 27\n      }\n    }, park.payGuide))));\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 21\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }\n  })))));\n}; // Contact.post('/', (req,res) => {\n//   console.log(req)\n// })\n\n\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsInByb3BzIiwidGl0bGUiLCJoMV9pZCIsImFycl9pZCIsInRpdGxlRGVzY3JpcHRpb24iLCJnZXRQYXJrIiwicGFnZURlc2NyaXB0aW9uIiwibWFwIiwicGFyayIsImludHJvZHVjdGlvbiIsImgxTWFwcGluZyIsImFyZWFJZCIsInBhcmtJZCIsIndvcmRTdHlsZSIsInBhcmtTdHlsZSIsImFyZWFOYW1lIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRXaWR0aCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwicGF5R3VpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELFFBQW1FO0FBQUEsd0JBQTFEQyxLQUEwRDtBQUFBLE1BQTFEQSxLQUEwRCwyQkFBbEQscUJBQWtEO0FBQUEsd0JBQTNCQyxLQUEyQjtBQUFBLE1BQTNCQSxLQUEyQiwyQkFBbkIsQ0FBbUI7QUFBQSx5QkFBaEJDLE1BQWdCO0FBQUEsTUFBaEJBLE1BQWdCLDRCQUFQLENBQU87QUFFakYsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLEtBQUssR0FBRyxNQUFSLEdBQWlCRyw4RkFBZ0IsRUFBekMsQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRyxDQUFDQyxxRkFBTyxFQUFSLEdBQWFDLDZGQUFlLEVBQTVCLEdBQWlDRCxxRkFBTyxHQUFHRSxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLGFBQUtBLElBQUksQ0FBQ0MsWUFBVjtBQUFBLEtBQWxCLElBQTZDLEdBQTdDLEdBQW1ESCw2RkFBZSxFQUE3STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLDZCQUFmO0FBQTZDLE1BQUUsRUFBRSxDQUFqRDtBQUFvRCxNQUFFLEVBQUUsQ0FBeEQ7QUFBMkQsTUFBRSxFQUFFLENBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxFQUFqQjtBQUFxQixNQUFFLEVBQUUsRUFBekI7QUFBNkIsTUFBRSxFQUFFLEVBQWpDO0FBQXFDLE1BQUUsRUFBRSxFQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksQ0FBQ0ksdUZBQVMsRUFBVixHQUFlLElBQWYsR0FBc0JBLHVGQUFTLENBQUNSLEtBQUQsRUFBUUMsTUFBUixDQURuQyxFQUVFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLENBQUNFLHFGQUFPLEVBQVIsR0FBYSxhQUFiLEdBQ0FBLHFGQUFPLEdBQUdFLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsV0FDaEIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBQyxVQUFSO0FBQW1CLFFBQUUsRUFBRSxFQUF2QjtBQUEyQixRQUFFLEVBQUUsRUFBL0I7QUFBbUMsUUFBRSxFQUFFLEVBQXZDO0FBQTJDLFFBQUUsRUFBRSxDQUEvQztBQUFrRCxRQUFFLEVBQUUsQ0FBdEQ7QUFBeUQsU0FBRyxZQUFLQSxJQUFJLENBQUNHLE1BQVYsZ0JBQXNCSCxJQUFJLENBQUNJLE1BQTNCLENBQTVEO0FBQWlHLFdBQUssRUFBRUMsOERBQXhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFEO0FBQU0sVUFBSSxFQUFFTCxJQUFaO0FBQWtCLFdBQUssRUFBRU0sOERBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLG9EQUFELENBQU0sTUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWNOLElBQUksQ0FBQ08sUUFBbkIsQ0FERixFQUVFLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHFEQUFEO0FBQU8sZUFBUyxFQUFDLE1BQWpCO0FBQXdCLGFBQU8sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUksRUFBRVAsSUFBSSxDQUFDQyxZQUFMLENBQWtCTyxNQUFsQixHQUEyQixFQUE3QixJQUFtQ1IsSUFBSSxDQUFDQyxZQUF4QyxHQUNBRCxJQUFJLENBQUNDLFlBQUwsQ0FBa0JRLFNBQWxCLENBQTRCLENBQTVCLEVBQThCLEVBQTlCLElBQW9DLEtBSHhDLENBREYsRUFPRSxNQUFDLHFEQUFEO0FBQU8sZUFBUyxFQUFDLEVBQWpCO0FBQW9CLGFBQU8sRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRUksRUFBRVQsSUFBSSxDQUFDVSxPQUFMLENBQWFGLE1BQWIsR0FBc0IsRUFBeEIsSUFBOEJSLElBQUksQ0FBQ1UsT0FBbkMsR0FDQVYsSUFBSSxDQUFDVSxPQUFMLENBQWFELFNBQWIsQ0FBdUIsQ0FBdkIsRUFBeUIsRUFBekIsSUFBK0IsS0FEL0IsRUFFQUUsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVEsQ0FBQ0MscUJBQVQsR0FBaUNDLEtBQTdDLENBSkosRUFQRixFQWNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHZixJQUFJLENBQUNnQixRQURSLENBZEYsQ0FGRixDQURGLENBRGdCO0FBQUEsR0FBbEIsQ0FISixDQUZGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0YsRUFnQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDUixDQUhGLEVBcUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBNkMsTUFBRSxFQUFFLENBQWpEO0FBQW9ELE1BQUUsRUFBRSxDQUF4RDtBQUEyRCxNQUFFLEVBQUUsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDRixDQURGLENBREYsQ0FMRixDQURGO0FBbURELENBckRELEMsQ0F1REE7QUFDQTtBQUNBOzs7S0F6RE16QixPO0FBMkRTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgcGFya1N0eWxlLCB3b3JkU3R5bGUgfSBmcm9tICcuLi9zdHlsZXMvdXRpbFN0eWxlLmpzJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IGdldFBhcmssIHRpdGxlRGVzY3JpcHRpb24sIGgxTWFwcGluZywgcGFnZURlc2NyaXB0aW9uIH0gZnJvbSAnLi9hcGlDb21wb25lbnRzL2Z1bmN0aW9uQ29udGV4dEpzb24uanMnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbi8vIGJvb3RzdHJhcFxuaW1wb3J0IHsgQ2FyZCwgQ29sLCBSb3csIENvbnRhaW5lciwgQmFkZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IENvbnRhY3QgPSAocHJvcHMsIHt0aXRsZSA9ICdDb250YWN0IHRvIHRoZSBwYXJrJywgaDFfaWQgPSA1LCBhcnJfaWQgPSA1fSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlICsgJy4gICAnICsgdGl0bGVEZXNjcmlwdGlvbigpfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgIWdldFBhcmsoKSA/IHBhZ2VEZXNjcmlwdGlvbigpIDogZ2V0UGFyaygpLm1hcChwYXJrID0+IChwYXJrLmludHJvZHVjdGlvbikpICsgJy4nICsgcGFnZURlc2NyaXB0aW9uKCkgfS8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrJyBtZD17MX0gbGc9ezF9IHhsPXsxfT5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEwfSBsZz17MTB9IHhsPXsxMH0+XG4gICAgICAgICAgICAgIHsgIWgxTWFwcGluZygpID8gbnVsbCA6IGgxTWFwcGluZyhoMV9pZCwgYXJyX2lkKSB9XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIWdldFBhcmsoKSA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICAgICAgICAgICAgZ2V0UGFyaygpLm1hcChwYXJrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbCBpZD0nZ2V0V2lkdGgnIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSB4bD17NH0ga2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9IHN0eWxlPXt3b3JkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHBhcms9e3Bhcmt9IHN0eWxlPXtwYXJrU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSGVhZGVyPntwYXJrLmFyZWFOYW1lfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPSdtci0yJyB2YXJpYW50PSdpbmZvJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDIwKSA/IHBhcmsuaW50cm9kdWN0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDIwKSArICcuLi4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPScnIHZhcmlhbnQ9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIShwYXJrLmFkZHJlc3MubGVuZ3RoID4gMjApID8gcGFyay5hZGRyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmsuYWRkcmVzcy5zdWJzdHJpbmcoMCwyMCkgKyAnLi4uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdldFdpZHRoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYXJrLnBheUd1aWRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrJyBtZD17MX0gbGc9ezF9IHhsPXsxfT48L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBDb250YWN0LnBvc3QoJy8nLCAocmVxLHJlcykgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhyZXEpXG4vLyB9KVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})