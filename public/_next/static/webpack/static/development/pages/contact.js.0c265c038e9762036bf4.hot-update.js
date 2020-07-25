webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/contact.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n // bootstrap\n\n\n\nvar Contact = function Contact(props, _ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Contact to the park' : _ref$title,\n      _ref$h1_id = _ref.h1_id,\n      h1_id = _ref$h1_id === void 0 ? 5 : _ref$h1_id,\n      _ref$arr_id = _ref.arr_id,\n      arr_id = _ref$arr_id === void 0 ? 5 : _ref$arr_id;\n\n  // 使用useState來做按鈕開關控制\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"titleDescription\"])()), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])() ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"pageDescription\"])() : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])().map(function (park) {\n      return park.introduction;\n    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"pageDescription\"])(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 10,\n    lg: 10,\n    xl: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"h1Mapping\"])() ? null : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"h1Mapping\"])(h1_id, arr_id), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])() ? 'Loading ...' : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_5__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 21\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 23\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Header, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 25\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 25\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Badge\"], {\n      className: \"mr-2\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 27\n      }\n    }, park.introduction), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Text, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 27\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n      onClick: function onClick() {\n        return setOpen(function (prevOpen) {\n          return !prevOpen;\n        });\n      },\n      varient: \"outline-light\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 29\n      }\n    }, open ? 'Hide Details' : 'View Details')), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Collapse\"], {\n      \"in\": open,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 27\n      }\n    }, __jsx(\"div\", {\n      className: \"mt-4\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 29\n      }\n    }, park.payGuide))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Card\"].Footer, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 25\n      }\n    }, __jsx(\"cite\", {\n      title: \"Source Title\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 27\n      }\n    }, park.address))));\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 21\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  })))));\n}; // Contact.post('/', (req,res) => {\n//   console.log(req)\n// })\n\n\n_s(Contact, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsInByb3BzIiwidGl0bGUiLCJoMV9pZCIsImFycl9pZCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJ0aXRsZURlc2NyaXB0aW9uIiwiZ2V0UGFyayIsInBhZ2VEZXNjcmlwdGlvbiIsIm1hcCIsInBhcmsiLCJpbnRyb2R1Y3Rpb24iLCJoMU1hcHBpbmciLCJhcmVhSWQiLCJwYXJrSWQiLCJ3b3JkU3R5bGUiLCJwYXJrU3R5bGUiLCJhcmVhTmFtZSIsInByZXZPcGVuIiwicGF5R3VpZGUiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELFFBQW1FO0FBQUE7O0FBQUEsd0JBQTFEQyxLQUEwRDtBQUFBLE1BQTFEQSxLQUEwRCwyQkFBbEQscUJBQWtEO0FBQUEsd0JBQTNCQyxLQUEyQjtBQUFBLE1BQTNCQSxLQUEyQiwyQkFBbkIsQ0FBbUI7QUFBQSx5QkFBaEJDLE1BQWdCO0FBQUEsTUFBaEJBLE1BQWdCLDRCQUFQLENBQU87O0FBQ2pGO0FBRGlGLGtCQUV6REMsc0RBQVEsQ0FBQyxLQUFELENBRmlEO0FBQUEsTUFFMUVDLElBRjBFO0FBQUEsTUFFcEVDLE9BRm9FOztBQUlqRixTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUwsS0FBSyxHQUFHLE1BQVIsR0FBaUJNLDhGQUFnQixFQUF6QyxDQURGLEVBRUU7QUFBTSxZQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBTyxFQUFHLENBQUNDLHFGQUFPLEVBQVIsR0FBYUMsNkZBQWUsRUFBNUIsR0FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR00sSUFBSSxDQUFDUyxRQURSLENBREYsQ0FURixDQUZGLEVBaUJFLE1BQUMsb0RBQUQsQ0FBTSxNQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLFdBQUssRUFBQyxjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNEJULElBQUksQ0FBQ1UsT0FBakMsQ0FERixDQWpCRixDQURGLENBRGdCO0FBQUEsR0FBbEIsQ0FISixDQUZGLEVBZ0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0YsRUFnQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhDUixDQUhGLEVBcUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBNkMsTUFBRSxFQUFFLENBQWpEO0FBQW9ELE1BQUUsRUFBRSxDQUF4RDtBQUEyRCxNQUFFLEVBQUUsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDRixDQURGLENBREYsQ0FMRixDQURGO0FBbURELENBdkRELEMsQ0F5REE7QUFDQTtBQUNBOzs7R0EzRE10QixPOztLQUFBQSxPO0FBNkRTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBwYXJrU3R5bGUsIHdvcmRTdHlsZSB9IGZyb20gJy4uL3N0eWxlcy91dGlsU3R5bGUuanMnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgZ2V0UGFyaywgdGl0bGVEZXNjcmlwdGlvbiwgaDFNYXBwaW5nLCBwYWdlRGVzY3JpcHRpb24gfSBmcm9tICcuL2FwaUNvbXBvbmVudHMvZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuLy8gYm9vdHN0cmFwXG5pbXBvcnQgeyBDYXJkLCBDb2wsIFJvdywgQ29udGFpbmVyLCBCdXR0b24sIENvbGxhcHNlLCBCYWRnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3QgQ29udGFjdCA9IChwcm9wcywge3RpdGxlID0gJ0NvbnRhY3QgdG8gdGhlIHBhcmsnLCBoMV9pZCA9IDUsIGFycl9pZCA9IDV9KSA9PiB7XG4gIC8vIOS9v+eUqHVzZVN0YXRl5L6G5YGa5oyJ6YiV6ZaL6Zec5o6n5Yi2XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlICsgJy4gICAnICsgdGl0bGVEZXNjcmlwdGlvbigpfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgIWdldFBhcmsoKSA/IHBhZ2VEZXNjcmlwdGlvbigpIDogZ2V0UGFyaygpLm1hcChwYXJrID0+IChwYXJrLmludHJvZHVjdGlvbikpICsgJy4nICsgcGFnZURlc2NyaXB0aW9uKCkgfS8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrJyBtZD17MX0gbGc9ezF9IHhsPXsxfT5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEwfSBsZz17MTB9IHhsPXsxMH0+XG4gICAgICAgICAgICAgIHsgIWgxTWFwcGluZygpID8gbnVsbCA6IGgxTWFwcGluZyhoMV9pZCwgYXJyX2lkKSB9XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIWdldFBhcmsoKSA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICAgICAgICAgICAgZ2V0UGFyaygpLm1hcChwYXJrID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0geGw9ezR9IGtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfSBzdHlsZT17d29yZFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBwYXJrPXtwYXJrfSBzdHlsZT17cGFya1N0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj57cGFyay5hcmVhTmFtZX08L0NhcmQuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nbXItMicgdmFyaWFudD0naW5mbyc+e3BhcmsuaW50cm9kdWN0aW9ufTwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihwcmV2T3BlbiA9PiAhcHJldk9wZW4pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWVudD0nb3V0bGluZS1saWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG9wZW4gPyAnSGlkZSBEZXRhaWxzJyA6ICdWaWV3IERldGFpbHMnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BhcmsucGF5R3VpZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkZvb3Rlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpdGUgdGl0bGU9XCJTb3VyY2UgVGl0bGVcIj57cGFyay5hZGRyZXNzfTwvY2l0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdkLW5vbmUgZC1zbS1ub25lIGQtbWQtYmxvY2snIG1kPXsxfSBsZz17MX0geGw9ezF9PjwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbi8vIENvbnRhY3QucG9zdCgnLycsIChyZXEscmVzKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKHJlcSlcbi8vIH0pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})