webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _apiComponents_contactJson_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apiComponents/contactJson.js */ \"./pages/apiComponents/contactJson.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/contact.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n // bootstrap\n\n\n\nvar Contact = function Contact(props, _ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Contact to the park' : _ref$title,\n      _ref$h1_id = _ref.h1_id,\n      h1_id = _ref$h1_id === void 0 ? 5 : _ref$h1_id,\n      _ref$arr_id = _ref.arr_id,\n      arr_id = _ref$arr_id === void 0 ? 5 : _ref$arr_id;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"titleDescription\"])()), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"getPark\"])() ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"pageDescription\"])() : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"getPark\"])().map(function (park) {\n      return park.introduction;\n    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"pageDescription\"])(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 10,\n    lg: 10,\n    xl: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"h1Mapping\"])() ? null : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__[\"h1Mapping\"])(h1_id, arr_id), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, __jsx(_apiComponents_contactJson_js__WEBPACK_IMPORTED_MODULE_5__[\"ContactJson\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 21\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  })))));\n}; // Contact.post('/', (req,res) => {\n//   console.log(req)\n// })\n\n\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\nvar _c;\n\n$RefreshReg$(_c, \"Contact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb250YWN0LmpzPzAwYjciXSwibmFtZXMiOlsiQ29udGFjdCIsInByb3BzIiwidGl0bGUiLCJoMV9pZCIsImFycl9pZCIsInRpdGxlRGVzY3JpcHRpb24iLCJnZXRQYXJrIiwicGFnZURlc2NyaXB0aW9uIiwibWFwIiwicGFyayIsImludHJvZHVjdGlvbiIsImgxTWFwcGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsUUFBbUU7QUFBQSx3QkFBMURDLEtBQTBEO0FBQUEsTUFBMURBLEtBQTBELDJCQUFsRCxxQkFBa0Q7QUFBQSx3QkFBM0JDLEtBQTJCO0FBQUEsTUFBM0JBLEtBQTJCLDJCQUFuQixDQUFtQjtBQUFBLHlCQUFoQkMsTUFBZ0I7QUFBQSxNQUFoQkEsTUFBZ0IsNEJBQVAsQ0FBTztBQUVqRixTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUYsS0FBSyxHQUFHLE1BQVIsR0FBaUJHLDhGQUFnQixFQUF6QyxDQURGLEVBRUU7QUFBTSxZQUFRLEVBQUMsZ0JBQWY7QUFBZ0MsV0FBTyxFQUFHLENBQUNDLHFGQUFPLEVBQVIsR0FBYUMsNkZBQWUsRUFBNUIsR0FBaUNELHFGQUFPLEdBQUdFLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsYUFBS0EsSUFBSSxDQUFDQyxZQUFWO0FBQUEsS0FBbEIsSUFBNkMsR0FBN0MsR0FBbURILDZGQUFlLEVBQTdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFXLFNBQUssTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBNkMsTUFBRSxFQUFFLENBQWpEO0FBQW9ELE1BQUUsRUFBRSxDQUF4RDtBQUEyRCxNQUFFLEVBQUUsQ0FBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0UsTUFBQyxtREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLEVBQWpCO0FBQXFCLE1BQUUsRUFBRSxFQUF6QjtBQUE2QixNQUFFLEVBQUUsRUFBakM7QUFBcUMsTUFBRSxFQUFFLEVBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxDQUFDSSx1RkFBUyxFQUFWLEdBQWUsSUFBZixHQUFzQkEsdUZBQVMsQ0FBQ1IsS0FBRCxFQUFRQyxNQUFSLENBRG5DLEVBRUUsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQUtRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMUixDQUhGLEVBVUUsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUE2QyxNQUFFLEVBQUUsQ0FBakQ7QUFBb0QsTUFBRSxFQUFFLENBQXhEO0FBQTJELE1BQUUsRUFBRSxDQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FERixDQURGLENBTEYsQ0FERjtBQXdCRCxDQTFCRCxDLENBNEJBO0FBQ0E7QUFDQTs7O0tBOUJNSixPO0FBZ0NTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IGdldFBhcmssIHRpdGxlRGVzY3JpcHRpb24sIGgxTWFwcGluZywgcGFnZURlc2NyaXB0aW9uIH0gZnJvbSAnLi9hcGlDb21wb25lbnRzL2Z1bmN0aW9uQ29udGV4dEpzb24uanMnXG5pbXBvcnQgeyBDb250YWN0SnNvbiB9IGZyb20gJy4vYXBpQ29tcG9uZW50cy9jb250YWN0SnNvbi5qcydcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuLy8gYm9vdHN0cmFwXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5jb25zdCBDb250YWN0ID0gKHByb3BzLCB7dGl0bGUgPSAnQ29udGFjdCB0byB0aGUgcGFyaycsIGgxX2lkID0gNSwgYXJyX2lkID0gNX0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSArICcuICAgJyArIHRpdGxlRGVzY3JpcHRpb24oKX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ICFnZXRQYXJrKCkgPyBwYWdlRGVzY3JpcHRpb24oKSA6IGdldFBhcmsoKS5tYXAocGFyayA9PiAocGFyay5pbnRyb2R1Y3Rpb24pKSArICcuJyArIHBhZ2VEZXNjcmlwdGlvbigpIH0vPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2Qtbm9uZSBkLXNtLW5vbmUgZC1tZC1ibG9jaycgbWQ9ezF9IGxnPXsxfSB4bD17MX0+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMH0gbGc9ezEwfSB4bD17MTB9PlxuICAgICAgICAgICAgICB7ICFoMU1hcHBpbmcoKSA/IG51bGwgOiBoMU1hcHBpbmcoaDFfaWQsIGFycl9pZCkgfVxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDb250YWN0SnNvbiAvPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdkLW5vbmUgZC1zbS1ub25lIGQtbWQtYmxvY2snIG1kPXsxfSBsZz17MX0geGw9ezF9PjwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApXG59XG5cbi8vIENvbnRhY3QucG9zdCgnLycsIChyZXEscmVzKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKHJlcSlcbi8vIH0pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact.js\n");

/***/ })

})