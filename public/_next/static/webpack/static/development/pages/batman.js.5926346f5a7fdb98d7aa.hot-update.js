webpackHotUpdate("static/development/pages/batman.js",{

/***/ "./pages/batman.js":
/*!*************************!*\
  !*** ./pages/batman.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/batman.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n // bootstrap\n\n\n\nvar Batman = function Batman(props, _ref) {\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? 'Batman TV show menu' : _ref$title,\n      _ref$h1_id = _ref.h1_id,\n      h1_id = _ref$h1_id === void 0 ? 4 : _ref$h1_id,\n      _ref$arr_id = _ref.arr_id,\n      arr_id = _ref$arr_id === void 0 ? 4 : _ref$arr_id;\n  // 當api抓取到值之後，props把接到的值map進li當中\n  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"titleDescription\"])()), __jsx(\"meta\", {\n    property: \"og:description\",\n    content: !props.shows ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"pageDescription\"])() : props.shows.map(function (show) {\n      return show.name;\n    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"pageDescription\"])(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 10,\n    lg: 10,\n    xl: 10,\n    className: \"bg-light\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"h1Mapping\"])() ? null : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_7__[\"h1Mapping\"])(h1_id, arr_id), __jsx(\"ul\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.ulDiv,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 15\n    }\n  }, !props.shows ? 'Loading ...' : props.shows.map(function (show) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"ListGroup\"], {\n      variant: \"flush\",\n      key: show.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"ListGroup\"].Item, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 23\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      href: \"/batman/[id]\",\n      as: \"/batman/\".concat(show.id),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 25\n      }\n    }, __jsx(\"a\", {\n      title: \"Connect to \".concat(show.name),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 27\n      }\n    }, show.name))));\n  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-none d-md-block\",\n    md: 1,\n    lg: 1,\n    xl: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  })))));\n}; // 使用非同步的方式讀取json的內容\n\n\n_c = Batman;\nBatman.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var res_batman, data_batman;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://api.tvmaze.com/search/shows?q=batman');\n\n        case 2:\n          res_batman = _context.sent;\n          _context.next = 5;\n          return res_batman.json();\n\n        case 5:\n          data_batman = _context.sent;\n          // 回報抓到幾個data值\n          console.log(\"Show data fetched. Count: \".concat(data_batman.length));\n          return _context.abrupt(\"return\", {\n            // 使用map來把值塞入，並且使用變數entry當作主詞來附帶api中的內容\n            shows: data_batman.map(function (entry) {\n              return entry.show;\n            })\n          });\n\n        case 8:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n})); // 如果看不懂 return裡面的  <Link href=\"/batman/[id]\" as={`/batman/${show.id}`}>\n// 下面是官網參考的範例我改成es6格式\n// import { useRouter } from 'next/router'\n// import Link from 'next/link'\n// import Header from '../../../components/header'\n//\n// const Post = () => {\n//   const router = useRouter()\n//   const { id } = router.query\n//\n//   return (\n//     <>\n//       <Header />\n//       <h1>Post: {id}</h1>\n//       <ul>\n//         <li>\n//           <Link href=\"/post/[id]/[comment]\" as={`/post/${id}/first-comment`}>\n//             <a>First comment</a>\n//           </Link>\n//         </li>\n//         <li>\n//           <Link href=\"/post/[id]/[comment]\" as={`/post/${id}/second-comment`}>\n//             <a>Second comment</a>\n//           </Link>\n//         </li>\n//       </ul>\n//     </>\n//   )\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Batman);\n\nvar _c;\n\n$RefreshReg$(_c, \"Batman\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9iYXRtYW4uanM/MDYzOSJdLCJuYW1lcyI6WyJCYXRtYW4iLCJwcm9wcyIsInRpdGxlIiwiaDFfaWQiLCJhcnJfaWQiLCJ0aXRsZURlc2NyaXB0aW9uIiwic2hvd3MiLCJwYWdlRGVzY3JpcHRpb24iLCJtYXAiLCJzaG93IiwibmFtZSIsImgxTWFwcGluZyIsInV0aWxTdHlsZXMiLCJ1bERpdiIsImlkIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2giLCJyZXNfYmF0bWFuIiwianNvbiIsImRhdGFfYmF0bWFuIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImVudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsUUFBcUU7QUFBQSx3QkFBM0RDLEtBQTJEO0FBQUEsTUFBM0RBLEtBQTJELDJCQUFuRCxxQkFBbUQ7QUFBQSx3QkFBNUJDLEtBQTRCO0FBQUEsTUFBNUJBLEtBQTRCLDJCQUFwQixDQUFvQjtBQUFBLHlCQUFqQkMsTUFBaUI7QUFBQSxNQUFqQkEsTUFBaUIsNEJBQVIsQ0FBUTtBQUNsRjtBQUNBO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFGLEtBQUssR0FBRyxNQUFSLEdBQWlCRyw4RkFBZ0IsRUFBekMsQ0FERixFQUVFO0FBQU0sWUFBUSxFQUFDLGdCQUFmO0FBQWdDLFdBQU8sRUFBRyxDQUFDSixLQUFLLENBQUNLLEtBQVAsR0FBZUMsNkZBQWUsRUFBOUIsR0FBbUNOLEtBQUssQ0FBQ0ssS0FBTixDQUFZRSxHQUFaLENBQWdCLFVBQUFDLElBQUk7QUFBQSxhQUFLQSxJQUFJLENBQUNDLElBQVY7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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekIsRyxDQWNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2VULHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmF0bWFuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyB0aXRsZURlc2NyaXB0aW9uLCBoMU1hcHBpbmcsIHBhZ2VEZXNjcmlwdGlvbiB9IGZyb20gJy4vYXBpQ29tcG9uZW50cy9mdW5jdGlvbkNvbnRleHRKc29uLmpzJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG4vLyBib290c3RyYXBcbmltcG9ydCB7IExpc3RHcm91cCwgQ29sLCBSb3csIENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuY29uc3QgQmF0bWFuID0gKHByb3BzLCB7IHRpdGxlID0gJ0JhdG1hbiBUViBzaG93IG1lbnUnLCBoMV9pZCA9IDQsIGFycl9pZCA9IDQgfSkgPT4ge1xuICAvLyDnlbZhcGnmipPlj5bliLDlgLzkuYvlvozvvIxwcm9wc+aKiuaOpeWIsOeahOWAvG1hcOmAsmxp55W25LitXG4gIC8vIOmAmeijoWhyZWbngrpwYWdlcy9wL1tpZF0uanPkvYbmmK/lvozpnaLkvb/nlKhhc+S+huS7o+abv+eCumFwaeS4reeahGlk5YC8XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3RpdGxlICsgJy4gICAnICsgdGl0bGVEZXNjcmlwdGlvbigpfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXsgIXByb3BzLnNob3dzID8gcGFnZURlc2NyaXB0aW9uKCkgOiBwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoc2hvdy5uYW1lKSkgKyAnLicgKyBwYWdlRGVzY3JpcHRpb24oKSB9Lz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb250YWluZXIgZmx1aWQ+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPSdkLW5vbmUgZC1zbS1ub25lIGQtbWQtYmxvY2snIG1kPXsxfSBsZz17MX0geGw9ezF9PlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTB9IGxnPXsxMH0geGw9ezEwfSBjbGFzc05hbWU9J2JnLWxpZ2h0Jz5cbiAgICAgICAgICAgICAgeyAhaDFNYXBwaW5nKCkgPyBudWxsIDogaDFNYXBwaW5nKGgxX2lkLCBhcnJfaWQpIH1cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17dXRpbFN0eWxlcy51bERpdn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgIXByb3BzLnNob3dzID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgICAgICAgICAgICBwcm9wcy5zaG93cy5tYXAoIHNob3cgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlzdEdyb3VwIHZhcmlhbnQ9XCJmbHVzaFwiIGtleT17c2hvdy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9iYXRtYW4vW2lkXVwiIGFzPXtgL2JhdG1hbi8ke3Nob3cuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRpdGxlPXtgQ29ubmVjdCB0byAke3Nob3cubmFtZX1gfT57c2hvdy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT0nZC1ub25lIGQtc20tbm9uZSBkLW1kLWJsb2NrJyBtZD17MX0gbGc9ezF9IHhsPXsxfT48L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyDkvb/nlKjpnZ7lkIzmraXnmoTmlrnlvI/oroDlj5Zqc29u55qE5YWn5a65XG5CYXRtYW4uZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIC8vIOS9v+eUqGZldGNo5L6G5oqT5Y+WYXBp5Lit55qE5YC8XG4gIGNvbnN0IHJlc19iYXRtYW4gPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKVxuICAvLyDmjIflrprorormlbhkYXRh5L6G6Z2e5ZCM5q2l6YCZ5YCLYXBp5YC8XG4gIGNvbnN0IGRhdGFfYmF0bWFuID0gYXdhaXQgcmVzX2JhdG1hbi5qc29uKClcbiAgLy8g5Zue5aCx5oqT5Yiw5bm+5YCLZGF0YeWAvFxuICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGFfYmF0bWFuLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgLy8g5L2/55SobWFw5L6G5oqK5YC85aGe5YWl77yM5Lim5LiU5L2/55So6K6K5pW4ZW50cnnnlbbkvZzkuLvoqZ7kvobpmYTluLZhcGnkuK3nmoTlhaflrrlcbiAgICBzaG93czogZGF0YV9iYXRtYW4ubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4gIH1cbn1cblxuLy8g5aaC5p6c55yL5LiN5oeCIHJldHVybuijoemdoueahCAgPExpbmsgaHJlZj1cIi9iYXRtYW4vW2lkXVwiIGFzPXtgL2JhdG1hbi8ke3Nob3cuaWR9YH0+XG4vLyDkuIvpnaLmmK/lrpjntrLlj4PogIPnmoTnr4TkvovmiJHmlLnmiJBlczbmoLzlvI9cblxuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuLy9cbi8vIGNvbnN0IFBvc3QgPSAoKSA9PiB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4vLyAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxuLy9cbi8vICAgcmV0dXJuIChcbi8vICAgICA8PlxuLy8gICAgICAgPEhlYWRlciAvPlxuLy8gICAgICAgPGgxPlBvc3Q6IHtpZH08L2gxPlxuLy8gICAgICAgPHVsPlxuLy8gICAgICAgICA8bGk+XG4vLyAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1tpZF0vW2NvbW1lbnRdXCIgYXM9e2AvcG9zdC8ke2lkfS9maXJzdC1jb21tZW50YH0+XG4vLyAgICAgICAgICAgICA8YT5GaXJzdCBjb21tZW50PC9hPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICAgPGxpPlxuLy8gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9zdC9baWRdL1tjb21tZW50XVwiIGFzPXtgL3Bvc3QvJHtpZH0vc2Vjb25kLWNvbW1lbnRgfT5cbi8vICAgICAgICAgICAgIDxhPlNlY29uZCBjb21tZW50PC9hPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC8+XG4vLyAgIClcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBCYXRtYW5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/batman.js\n");

/***/ })

})