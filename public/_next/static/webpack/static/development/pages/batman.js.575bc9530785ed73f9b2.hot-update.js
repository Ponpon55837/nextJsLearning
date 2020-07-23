webpackHotUpdate("static/development/pages/batman.js",{

/***/ "./pages/batman.js":
/*!*************************!*\
  !*** ./pages/batman.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/batman.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n // bootstrap\n\n\n\nvar Batman = function Batman(props, _ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Batman TV show menu' : _ref$title,\n      _ref$h1_id = _ref.h1_id,\n      h1_id = _ref$h1_id === void 0 ? 4 : _ref$h1_id,\n      _ref$arr_id = _ref.arr_id,\n      arr_id = _ref$arr_id === void 0 ? 4 : _ref$arr_id;\n  // 當api抓取到值之後，props把接到的值map進li當中\n  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"titleDescription\"])()), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: !props.shows ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"pageDescription\"])() : props.shows.map(function (show) {\n      return show.name;\n    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"pageDescription\"])(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    className: \"bg-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 10,\n    lg: 10,\n    xl: 10,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"h1Mapping\"])() ? null : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"h1Mapping\"])(h1_id, arr_id), __jsx(\"ul\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.ulDiv,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 15\n    }\n  }, !props.shows ? 'Loading ...' : props.shows.map(function (show) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"ListGroup\"], {\n      variant: \"flush\",\n      key: show.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"ListGroup\"].Item, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 23\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/batman/[id]\",\n      as: \"/batman/\".concat(show.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 25\n      }\n    }, __jsx(\"a\", {\n      title: \"Connect to \".concat(show.name),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 27\n      }\n    }, show.name))));\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  })))));\n}; // 使用非同步的方式讀取json的內容\n\n\n_c = Batman;\nBatman.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res_batman, data_batman;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');\n\n        case 2:\n          res_batman = _context.sent;\n          _context.next = 5;\n          return res_batman.json();\n\n        case 5:\n          data_batman = _context.sent;\n          // 回報抓到幾個data值\n          console.log(\"Show data fetched. Count: \".concat(data_batman.length));\n          return _context.abrupt(\"return\", {\n            // 使用map來把值塞入，並且使用變數entry當作主詞來附帶api中的內容\n            shows: data_batman.map(function (entry) {\n              return entry.show;\n            })\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})); // 如果看不懂 return裡面的  <Link href=\"/batman/[id]\" as={`/batman/${show.id}`}>\n// 下面是官網參考的範例我改成es6格式\n// import { useRouter } from 'next/router'\n// import Link from 'next/link'\n// import Header from '../../../components/header'\n//\n// const Post = () => {\n//   const router = useRouter()\n//   const { id } = router.query\n//\n//   return (\n//     <>\n//       <Header />\n//       <h1>Post: {id}</h1>\n//       <ul>\n//         <li>\n//           <Link href=\"/post/[id]/[comment]\" as={`/post/${id}/first-comment`}>\n//             <a>First comment</a>\n//           </Link>\n//         </li>\n//         <li>\n//           <Link href=\"/post/[id]/[comment]\" as={`/post/${id}/second-comment`}>\n//             <a>Second comment</a>\n//           </Link>\n//         </li>\n//       </ul>\n//     </>\n//   )\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Batman);\n\nvar _c;\n\n$RefreshReg$(_c, \"Batman\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9iYXRtYW4uanM/MDYzOSJdLCJuYW1lcyI6WyJCYXRtYW4iLCJwcm9wcyIsInRpdGxlIiwiaDFfaWQiLCJhcnJfaWQiLCJ0aXRsZURlc2NyaXB0aW9uIiwic2hvd3MiLCJwYWdlRGVzY3JpcHRpb24iLCJtYXAiLCJzaG93IiwibmFtZSIsImgxTWFwcGluZyIsInV0aWxTdHlsZXMiLCJ1bERpdiIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXNfYmF0bWFuIiwianNvbiIsImRhdGFfYmF0bWFuIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImVudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsUUFBcUU7QUFBQSx3QkFBM0RDLEtBQTJEO0FBQUEsTUFBM0RBLEtBQTJELDJCQUFuRCxxQkFBbUQ7QUFBQSx3QkFBNUJDLEtBQTRCO0FBQUEsTUFBNUJBLEtBQTRCLDJCQUFwQixDQUFvQjtBQUFBLHlCQUFqQkMsTUFBaUI7QUFBQSxNQUFqQkEsTUFBaUIsNEJBQVIsQ0FBUTtBQUNsRjtBQUNBO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLEtBQUssR0FBRyxNQUFSLEdBQWlCRyw4RkFBZ0IsRUFBekMsQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRyxDQUFDSixLQUFLLENBQUNLLEtBQVAsR0FBZUMsNkZBQWUsRUFBOUIsR0FBbUNOLEtBQUssQ0FBQ0ssS0FBTixDQUFZRSxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSxhQUFLQSxJQUFJLENBQUNDLElBQVY7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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCLEcsQ0FjQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlVCxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2JhdG1hbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgdGl0bGVEZXNjcmlwdGlvbiwgaDFNYXBwaW5nLCBwYWdlRGVzY3JpcHRpb24gfSBmcm9tICcuL2FwaUNvbXBvbmVudHMvZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuLy8gYm9vdHN0cmFwXG5pbXBvcnQgeyBMaXN0R3JvdXAsIENvbCwgUm93LCBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmNvbnN0IEJhdG1hbiA9IChwcm9wcywgeyB0aXRsZSA9ICdCYXRtYW4gVFYgc2hvdyBtZW51JywgaDFfaWQgPSA0LCBhcnJfaWQgPSA0IH0pID0+IHtcbiAgLy8g55W2YXBp5oqT5Y+W5Yiw5YC85LmL5b6M77yMcHJvcHPmiormjqXliLDnmoTlgLxtYXDpgLJsaeeVtuS4rVxuICAvLyDpgJnoo6FocmVm54K6cGFnZXMvcC9baWRdLmpz5L2G5piv5b6M6Z2i5L2/55SoYXPkvobku6Pmm7/ngrphcGnkuK3nmoRpZOWAvFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSArICcuICAgJyArIHRpdGxlRGVzY3JpcHRpb24oKX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ICFwcm9wcy5zaG93cyA/IHBhZ2VEZXNjcmlwdGlvbigpIDogcHJvcHMuc2hvd3MubWFwKHNob3cgPT4gKHNob3cubmFtZSkpICsgJy4nICsgcGFnZURlc2NyaXB0aW9uKCkgfS8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPSdiZy1saWdodCc+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrJyBtZD17MX0gbGc9ezF9IHhsPXsxfT5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEwfSBsZz17MTB9IHhsPXsxMH0+XG4gICAgICAgICAgICAgIHsgIWgxTWFwcGluZygpID8gbnVsbCA6IGgxTWFwcGluZyhoMV9pZCwgYXJyX2lkKSB9XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3V0aWxTdHlsZXMudWxEaXZ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICFwcm9wcy5zaG93cyA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICAgICAgICAgICAgcHJvcHMuc2hvd3MubWFwKCBzaG93ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cCB2YXJpYW50PVwiZmx1c2hcIiBrZXk9e3Nob3cuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYmF0bWFuL1tpZF1cIiBhcz17YC9iYXRtYW4vJHtzaG93LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0aXRsZT17YENvbm5lY3QgdG8gJHtzaG93Lm5hbWV9YH0+e3Nob3cubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9J2Qtbm9uZSBkLXNtLW5vbmUgZC1tZC1ibG9jaycgbWQ9ezF9IGxnPXsxfSB4bD17MX0+PC9Db2w+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuLy8g5L2/55So6Z2e5ZCM5q2l55qE5pa55byP6K6A5Y+WanNvbueahOWFp+WuuVxuQmF0bWFuLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAvLyDkvb/nlKhmZXRjaOS+huaKk+WPlmFwaeS4reeahOWAvFxuICBjb25zdCByZXNfYmF0bWFuID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbiAgLy8g5oyH5a6a6K6K5pW4ZGF0YeS+humdnuWQjOatpemAmeWAi2FwaeWAvFxuICBjb25zdCBkYXRhX2JhdG1hbiA9IGF3YWl0IHJlc19iYXRtYW4uanNvbigpXG4gIC8vIOWbnuWgseaKk+WIsOW5vuWAi2RhdGHlgLxcbiAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhX2JhdG1hbi5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIC8vIOS9v+eUqG1hcOS+huaKiuWAvOWhnuWFpe+8jOS4puS4lOS9v+eUqOiuiuaVuGVudHJ555W25L2c5Li76Kme5L6G6ZmE5bi2YXBp5Lit55qE5YWn5a65XG4gICAgc2hvd3M6IGRhdGFfYmF0bWFuLm1hcChlbnRyeSA9PiBlbnRyeS5zaG93KVxuICB9XG59XG5cbi8vIOWmguaenOeci+S4jeaHgiByZXR1cm7oo6HpnaLnmoQgIDxMaW5rIGhyZWY9XCIvYmF0bWFuL1tpZF1cIiBhcz17YC9iYXRtYW4vJHtzaG93LmlkfWB9PlxuLy8g5LiL6Z2i5piv5a6Y57ay5Y+D6ICD55qE56+E5L6L5oiR5pS55oiQZXM25qC85byPXG5cbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcidcbi8vXG4vLyBjb25zdCBQb3N0ID0gKCkgPT4ge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuLy8gICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcbi8vXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIDxIZWFkZXIgLz5cbi8vICAgICAgIDxoMT5Qb3N0OiB7aWR9PC9oMT5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdL1tjb21tZW50XVwiIGFzPXtgL3Bvc3QvJHtpZH0vZmlyc3QtY29tbWVudGB9PlxuLy8gICAgICAgICAgICAgPGE+Rmlyc3QgY29tbWVudDwvYT5cbi8vICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgICAgIDxsaT5cbi8vICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW2lkXS9bY29tbWVudF1cIiBhcz17YC9wb3N0LyR7aWR9L3NlY29uZC1jb21tZW50YH0+XG4vLyAgICAgICAgICAgICA8YT5TZWNvbmQgY29tbWVudDwvYT5cbi8vICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvPlxuLy8gICApXG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgQmF0bWFuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/batman.js\n");

/***/ })

})