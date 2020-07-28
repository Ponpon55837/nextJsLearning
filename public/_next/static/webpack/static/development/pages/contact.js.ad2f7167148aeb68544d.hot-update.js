webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/functionContextJson.js":
/*!****************************************************!*\
  !*** ./pages/apiComponents/functionContextJson.js ***!
  \****************************************************/
/*! exports provided: API_URL, getHeader, getIndexHelloNextJs, getPark, getheadingH1, h1Mapping, handler, PostLink, pageDescription, titleDescription, footerDescription, webDescription, copyRight, getRandom, headerBar, ifElseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeader\", function() { return getHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexHelloNextJs\", function() { return getIndexHelloNextJs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPark\", function() { return getPark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getheadingH1\", function() { return getheadingH1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1Mapping\", function() { return h1Mapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostLink\", function() { return PostLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageDescription\", function() { return pageDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleDescription\", function() { return titleDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footerDescription\", function() { return footerDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"webDescription\", function() { return webDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyRight\", function() { return copyRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerBar\", function() { return headerBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifElseFunc\", function() { return ifElseFunc; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/headerlink.json */ \"./pages/api/headerlink.json\");\nvar _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headerlink.json */ \"./pages/api/headerlink.json\", 1);\n/* harmony import */ var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/indexHelloNextJs.json */ \"./pages/api/indexHelloNextJs.json\");\nvar _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/indexHelloNextJs.json */ \"./pages/api/indexHelloNextJs.json\", 1);\n/* harmony import */ var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/parkAPI.json */ \"./pages/api/parkAPI.json\");\nvar _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/parkAPI.json */ \"./pages/api/parkAPI.json\", 1);\n/* harmony import */ var _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/headingH1.json */ \"./pages/api/headingH1.json\");\nvar _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headingH1.json */ \"./pages/api/headingH1.json\", 1);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/functionContextJson.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n // 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情\n// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用\n// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL\n\nvar API_URL = \"http://localhost:1337\";\n\nvar getHeader = function getHeader() {\n  return _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__;\n}; // 使用function作爲api承接內容，在上方的return中map接到的值\n\nvar getIndexHelloNextJs = function getIndexHelloNextJs() {\n  return _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__;\n};\nvar getPark = function getPark() {\n  return _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__;\n};\nvar getheadingH1 = function getheadingH1() {\n  return _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__;\n};\nvar h1Mapping = function h1Mapping(h1_id, arr_id) {\n  // 這邊要特別注意，使用function進行return中render內容，如果內容包含其它function.map\n  // 需要被包含在<></>裡面，否則會被報錯顯示declare\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !getheadingH1() ? 'Loading ...' : getheadingH1().map(function (headingH1) {\n    return __jsx(\"h1\", {\n      className: !(headingH1.h1_id == h1_id && headingH1.arr[0].arr_id == arr_id) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.h1.hidden : !(h1_id == 1 && arr_id == 1) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingH1 : _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.divH1,\n      key: headingH1.h1_id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }\n    }, !(headingH1.h1_id == h1_id && headingH1.arr[0].arr_id == arr_id) ? null : headingH1.h1);\n  }));\n}; // for Header.js\n\nvar handler = function handler() {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n    pathname: '/',\n    query: {\n      name: 'Home',\n      title: 'Connect to Home Page'\n    }\n  });\n}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用\n\nvar PostLink = function PostLink(_ref) {\n  var post = _ref.post;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/batman/[id]\",\n    as: \"/batman/\".concat(post.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    title: \"Connect to \".concat(post.title, \" Page\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, post.title)));\n};\n_c = PostLink;\nvar pageDescription = function pageDescription() {\n  return \"This is the page for the website.This content to description this text website how to use.\";\n};\nvar titleDescription = function titleDescription() {\n  return \"The website is built by upfloor which is a work that train myself to be up floor.\";\n};\nvar footerDescription = function footerDescription() {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-block\",\n    sm: 12,\n    md: 12,\n    lg: 12,\n    xl: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }\n  }, // 判斷式先判斷webDescription()能不能執行，如果不能那麼顯示Loading ... ， 可以的話執行webDescription()\n  !webDescription() ? 'Loading ...' : webDescription()), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 12,\n    xl: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, !copyRight() ? 'Loading ...' : copyRight()));\n};\nvar webDescription = function webDescription() {\n  return \"Upfloor make nextjs (\\u0E51\\u2022\\u0E35_\\u0E40\\u2022\\u0E35\\u0E51)\";\n};\nvar copyRight = function copyRight() {\n  return \"Copyright \\xA9 2019-2020 Upfloor\";\n}; // 由list接入內容，這樣在return中才能使用\n\nvar getRandom = function getRandom(list) {\n  // Math.floor函式會回傳小於等於所給數字的最大整數。\n  // console.log(Math.floor(45.95)) => 45\n  // console.log(Math.floor(-8.77)) => -9\n  return list[Math.floor(Math.random() * list.length)];\n};\nvar headerBar = function headerBar() {\n  var randomText = ['NextJs', 'Bootstrap', 'ReactJs', 'JS'];\n  var randomWriter = ['Upfloor', 'StudioP', 'Learning', 'Frontend'];\n  return getRandom(randomText) + ' with ' + getRandom(randomWriter);\n}; // for contactJson page\n\nvar ifElseFunc = function ifElseFunc(mointorSize, changeVar) {\n  if (mointorSize.width >= 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (mointorSize.width >= 1200 && changeVar.length < 20) {\n    return changeVar;\n  } else if (990 < mointorSize.width < 1200 && changeVar.length > 25) {\n    return changeVar.substring(0, 24) + '...';\n  } else if (990 < mointorSize.width < 1200 && changeVar.length < 25) {\n    return changeVar;\n  } else if (910 < mointorSize.width < 990 && changeVar.length > 25) {\n    return changeVar.substring(0, 24) + '...';\n  } else if (910 < mointorSize.width < 990 && changeVar.length <= 25) {\n    return changeVar;\n  } else if (768 < mointorSize.width < 910 && changeVar.length > 27) {\n    return changeVar.substring(0, 26) + '...';\n  } else if (768 < mointorSize.width < 910 && changeVar.length <= 27) {\n    return changeVar;\n  } else if (mointorSize.width < 768) {\n    return changeVar;\n  } else {\n    return changeVar;\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PostLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2Z1bmN0aW9uQ29udGV4dEpzb24uanM/Mzk5OCJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImdldEhlYWRlciIsImhlYWRlcmxpbmsiLCJnZXRJbmRleEhlbGxvTmV4dEpzIiwiaW5kZXhIZWxsb05leHRKcyIsImdldFBhcmsiLCJwYXJrIiwiZ2V0aGVhZGluZ0gxIiwiaGVhZGluZ0gxSnNvbiIsImgxTWFwcGluZyIsImgxX2lkIiwiYXJyX2lkIiwibWFwIiwiaGVhZGluZ0gxIiwiYXJyIiwidXRpbFN0eWxlcyIsImgxIiwiaGlkZGVuIiwiZGl2SDEiLCJoYW5kbGVyIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwidGl0bGUiLCJQb3N0TGluayIsInBvc3QiLCJpZCIsInBhZ2VEZXNjcmlwdGlvbiIsInRpdGxlRGVzY3JpcHRpb24iLCJmb290ZXJEZXNjcmlwdGlvbiIsIndlYkRlc2NyaXB0aW9uIiwiY29weVJpZ2h0IiwiZ2V0UmFuZG9tIiwibGlzdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImhlYWRlckJhciIsInJhbmRvbVRleHQiLCJyYW5kb21Xcml0ZXIiLCJpZkVsc2VGdW5jIiwibW9pbnRvclNpemUiLCJjaGFuZ2VWYXIiLCJ3aWR0aCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBRUE7O0lBQ2VBLE8sR0FBWUMsdUI7O0FBRXBCLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDN0IsU0FBT0MsaURBQVA7QUFDRCxDQUZNLEMsQ0FJUDs7QUFDTyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDdkMsU0FBT0MsdURBQVA7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TixNQUFWLElBQW9CLEVBQXpELEVBQTREO0FBQy9ELFdBQVFNLFNBQVI7QUFDRCxHQUZJLE1BR0EsSUFBSUQsV0FBVyxDQUFDRSxLQUFaLEdBQW9CLEdBQXhCLEVBQTRCO0FBQy9CLFdBQVFELFNBQVI7QUFDRCxHQUZJLE1BR0E7QUFDSCxXQUFRQSxTQUFSO0FBQ0Q7QUFDRixDQS9CTSIsImZpbGUiOiIuL3BhZ2VzL2FwaUNvbXBvbmVudHMvZnVuY3Rpb25Db250ZXh0SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgaGVhZGVybGluayBmcm9tICcuLi9hcGkvaGVhZGVybGluay5qc29uJ1xuaW1wb3J0IGluZGV4SGVsbG9OZXh0SnMgZnJvbSAnLi4vYXBpL2luZGV4SGVsbG9OZXh0SnMuanNvbidcbmltcG9ydCBwYXJrIGZyb20gJy4uL2FwaS9wYXJrQVBJLmpzb24nXG5pbXBvcnQgaGVhZGluZ0gxSnNvbiBmcm9tICcuLi9hcGkvaGVhZGluZ0gxLmpzb24nXG5pbXBvcnQgeyB3b3JkQ2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3N0eWxlcy91dGlsU3R5bGUuanMnXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG4vLyDmiormiYDmnInkvb/nlKjlhafpg6hqc29u55qEZnVuY3Rpb27mlL7lnKjpgJnpgorvvIzpgJnmqKPopoHph43opIfkvb/nlKjlkbzlj6vkuI3nlKjkvZzlpJrppJjnmoTkuovmg4Vcbi8vIOS9huaYr+WmguaenOaYr+S9v+eUqGdldFN0YXRpY1Byb3BzIG9yIGdldEluaXRpYWxQcm9wcyBvciBnZXRTZXJ2ZXJTaWRlUHJvcHMgb3IgZ2V0U3RhdGljUGF0aOWJh+eEoeazleWmguatpOS9v+eUqFxuXG4vLyBBUElfVVJM54K6LmVudumAmeWAi+aqlOahiOS4reeahOe2suWdgOS+huS9v+eUqO+8jOaZrumAmuS9v+eUqOeahOeVq+aykuacieW9semfv++8jOS9huaYr+WmguaenOimgeS9v+eUqGltYWdl6YCZ56iuYXBp5Yyv5YWl55qE6Kmx77yM5bCx6ZyA6KaB5oyH5a6aQVBJX1VSTFxuZXhwb3J0IGNvbnN0IHsgQVBJX1VSTCB9ID0gcHJvY2Vzcy5lbnZcblxuZXhwb3J0IGNvbnN0IGdldEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIGhlYWRlcmxpbmtcbn1cblxuLy8g5L2/55SoZnVuY3Rpb27kvZzniLJhcGnmib/mjqXlhaflrrnvvIzlnKjkuIrmlrnnmoRyZXR1cm7kuK1tYXDmjqXliLDnmoTlgLxcbmV4cG9ydCBjb25zdCBnZXRJbmRleEhlbGxvTmV4dEpzID0gKCkgPT4ge1xuICByZXR1cm4gaW5kZXhIZWxsb05leHRKc1xufVxuXG5leHBvcnQgY29uc3QgZ2V0UGFyayA9ICgpID0+IHtcbiAgcmV0dXJuIHBhcmtcbn1cblxuZXhwb3J0IGNvbnN0IGdldGhlYWRpbmdIMSA9ICgpID0+IHtcbiAgcmV0dXJuIGhlYWRpbmdIMUpzb25cbn1cblxuZXhwb3J0IGNvbnN0IGgxTWFwcGluZyA9IChoMV9pZCwgYXJyX2lkKSA9PiB7XG4gIC8vIOmAmemCiuimgeeJueWIpeazqOaEj++8jOS9v+eUqGZ1bmN0aW9u6YCy6KGMcmV0dXJu5LitcmVuZGVy5YWn5a6577yM5aaC5p6c5YWn5a655YyF5ZCr5YW25a6DZnVuY3Rpb24ubWFwXG4gIC8vIOmcgOimgeiiq+WMheWQq+WcqDw+PC8+6KOh6Z2i77yM5ZCm5YmH5pyD6KKr5aCx6Yyv6aGv56S6ZGVjbGFyZVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgICFnZXRoZWFkaW5nSDEoKSA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICBnZXRoZWFkaW5nSDEoKS5tYXAoaGVhZGluZ0gxID0+IChcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgIShoZWFkaW5nSDEuaDFfaWQgPT0gaDFfaWQgJiYgaGVhZGluZ0gxLmFyclswXS5hcnJfaWQgPT0gYXJyX2lkKSA/IHV0aWxTdHlsZXMuaDEuaGlkZGVuIDpcbiAgICAgICAgICAgICAgIShoMV9pZCA9PSAxICYmIGFycl9pZCA9PSAxKSA/IHV0aWxTdHlsZXMuaGVhZGluZ0gxIDogdXRpbFN0eWxlcy5kaXZIMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAga2V5PXtoZWFkaW5nSDEuaDFfaWR9PlxuICAgICAgICAgICAgeyEoaGVhZGluZ0gxLmgxX2lkID09IGgxX2lkICYmIGhlYWRpbmdIMS5hcnJbMF0uYXJyX2lkID09IGFycl9pZCkgP1xuICAgICAgICAgICAgICBudWxsIDogaGVhZGluZ0gxLmgxfVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cblxuLy8gZm9yIEhlYWRlci5qc1xuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XG4gIFJvdXRlci5wdXNoKHtcbiAgICBwYXRobmFtZTogJy8nLFxuICAgIHF1ZXJ5OiB7XG4gICAgICBuYW1lOiAnSG9tZScsXG4gICAgICB0aXRsZTogJ0Nvbm5lY3QgdG8gSG9tZSBQYWdlJyxcbiAgICB9LFxuICB9KVxufVxuXG4vLyDnlbbkvZzpoY3lpJbmj5LlhaXnmoRsaW5r5L6G5L2/55So77yM6YCZ6KOh6Z2i55qEcG9zdC5pZO+8jHBvc3QudGl0bGXpg73mmK/ol4nnlLHooqttYXDpgLLkvobnmoRwb3N05YC85L2/55SoXG5leHBvcnQgY29uc3QgUG9zdExpbmsgPSAoeyBwb3N0IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmsgaHJlZj1cIi9iYXRtYW4vW2lkXVwiIGFzPXtgL2JhdG1hbi8ke3Bvc3QuaWR9YH0+XG4gICAgICAgIDxhIHRpdGxlPXtgQ29ubmVjdCB0byAke3Bvc3QudGl0bGV9IFBhZ2VgfT57cG9zdC50aXRsZX08L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHBhZ2VEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBgVGhpcyBpcyB0aGUgcGFnZSBmb3IgdGhlIHdlYnNpdGUuVGhpcyBjb250ZW50IHRvIGRlc2NyaXB0aW9uIHRoaXMgdGV4dCB3ZWJzaXRlIGhvdyB0byB1c2UuYFxuICApXG59XG5cbmV4cG9ydCBjb25zdCB0aXRsZURlc2NyaXB0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIGBUaGUgd2Vic2l0ZSBpcyBidWlsdCBieSB1cGZsb29yIHdoaWNoIGlzIGEgd29yayB0aGF0IHRyYWluIG15c2VsZiB0byBiZSB1cCBmbG9vci5gXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGZvb3RlckRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIGNsYXNzTmFtZT0nZC1ub25lIGQtc20tYmxvY2snIHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IHhsPXsxMn0+XG4gICAgICAgIHtcbiAgICAgICAgICAvLyDliKTmlrflvI/lhYjliKTmlrd3ZWJEZXNjcmlwdGlvbigp6IO95LiN6IO95Z+36KGM77yM5aaC5p6c5LiN6IO96YKj6bq86aGv56S6TG9hZGluZyAuLi4g77yMIOWPr+S7peeahOipseWft+ihjHdlYkRlc2NyaXB0aW9uKClcbiAgICAgICAgICAhd2ViRGVzY3JpcHRpb24oKSA/ICdMb2FkaW5nIC4uLicgOiB3ZWJEZXNjcmlwdGlvbigpXG4gICAgICAgIH1cbiAgICAgIDwvQ29sPlxuICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17MTJ9IHhsPXsxMn0+XG4gICAgICAgIHtcbiAgICAgICAgICAhY29weVJpZ2h0KCkgPyAnTG9hZGluZyAuLi4nIDogY29weVJpZ2h0KClcbiAgICAgICAgfVxuICAgICAgPC9Db2w+XG4gICAgPC9Sb3c+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHdlYkRlc2NyaXB0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIGBVcGZsb29yIG1ha2UgbmV4dGpzICjguZHigKLguLVf4LmA4oCi4Li14LmRKWBcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgY29weVJpZ2h0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIGBDb3B5cmlnaHQgwqkgMjAxOS0yMDIwIFVwZmxvb3JgXG4gIClcbn1cblxuLy8g55SxbGlzdOaOpeWFpeWFp+Wuue+8jOmAmeaoo+WcqHJldHVybuS4reaJjeiDveS9v+eUqFxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbSA9ICggbGlzdCApID0+IHtcbiAgLy8gTWF0aC5mbG9vcuWHveW8j+acg+WbnuWCs+Wwj+aWvOetieaWvOaJgOe1puaVuOWtl+eahOacgOWkp+aVtOaVuOOAglxuICAvLyBjb25zb2xlLmxvZyhNYXRoLmZsb29yKDQ1Ljk1KSkgPT4gNDVcbiAgLy8gY29uc29sZS5sb2coTWF0aC5mbG9vcigtOC43NykpID0+IC05XG4gIHJldHVybiAoXG4gICAgbGlzdFsgTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoICkgXVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBoZWFkZXJCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmRvbVRleHQgPSBbICdOZXh0SnMnLCAnQm9vdHN0cmFwJywgJ1JlYWN0SnMnLCAnSlMnIF1cbiAgY29uc3QgcmFuZG9tV3JpdGVyID0gWyAnVXBmbG9vcicsICdTdHVkaW9QJywgJ0xlYXJuaW5nJywgJ0Zyb250ZW5kJyBdXG5cbiAgcmV0dXJuIChcbiAgICBnZXRSYW5kb20ocmFuZG9tVGV4dCkgKyAnIHdpdGggJyArIGdldFJhbmRvbShyYW5kb21Xcml0ZXIpXG4gIClcbn1cblxuLy8gZm9yIGNvbnRhY3RKc29uIHBhZ2VcbmV4cG9ydCBjb25zdCBpZkVsc2VGdW5jID0gKG1vaW50b3JTaXplLCBjaGFuZ2VWYXIpID0+IHtcbiAgaWYobW9pbnRvclNpemUud2lkdGggPj0gMTIwMCAmJiBjaGFuZ2VWYXIubGVuZ3RoID4gMjApIHtcbiAgICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbiAgfVxuICBlbHNlIGlmIChtb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPCAyMCl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSBpZiAoOTkwIDwgbW9pbnRvclNpemUud2lkdGggPCAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPiAyNSl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIuc3Vic3RyaW5nKDAsMjQpICsgJy4uLicpXG4gIH1cbiAgZWxzZSBpZiAoOTkwIDwgbW9pbnRvclNpemUud2lkdGggPCAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPCAyNSl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSBpZiAoOTEwIDwgbW9pbnRvclNpemUud2lkdGggPCA5OTAgJiYgY2hhbmdlVmFyLmxlbmd0aCA+IDI1KXtcbiAgICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwyNCkgKyAnLi4uJylcbiAgfVxuICBlbHNlIGlmICg5MTAgPCBtb2ludG9yU2l6ZS53aWR0aCA8IDk5MCAmJiBjaGFuZ2VWYXIubGVuZ3RoIDw9IDI1KXtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxuICBlbHNlIGlmICg3NjggPCBtb2ludG9yU2l6ZS53aWR0aCA8IDkxMCAmJiBjaGFuZ2VWYXIubGVuZ3RoID4gMjcpe1xuICAgIHJldHVybiAoY2hhbmdlVmFyLnN1YnN0cmluZygwLDI2KSArICcuLi4nKVxuICB9XG4gIGVsc2UgaWYgKDc2OCA8IG1vaW50b3JTaXplLndpZHRoIDwgOTEwICYmIGNoYW5nZVZhci5sZW5ndGggPD0gMjcpe1xuICAgIHJldHVybiAoY2hhbmdlVmFyKVxuICB9XG4gIGVsc2UgaWYgKG1vaW50b3JTaXplLndpZHRoIDwgNzY4KXtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apiComponents/functionContextJson.js\n");

/***/ })

})