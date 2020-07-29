webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/functionContextJson.js":
/*!****************************************************!*\
  !*** ./pages/apiComponents/functionContextJson.js ***!
  \****************************************************/
/*! exports provided: API_URL, getHeader, getIndexHelloNextJs, getPark, getheadingH1, h1Mapping, handler, PostLink, pageDescription, titleDescription, footerDescription, webDescription, copyRight, getRandom, headerBar, ifElseFunc, badgeAlert, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeader\", function() { return getHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexHelloNextJs\", function() { return getIndexHelloNextJs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPark\", function() { return getPark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getheadingH1\", function() { return getheadingH1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1Mapping\", function() { return h1Mapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostLink\", function() { return PostLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageDescription\", function() { return pageDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleDescription\", function() { return titleDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footerDescription\", function() { return footerDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"webDescription\", function() { return webDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyRight\", function() { return copyRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerBar\", function() { return headerBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifElseFunc\", function() { return ifElseFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"badgeAlert\", function() { return badgeAlert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowSize\", function() { return useWindowSize; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/headerlink.json */ \"./pages/api/headerlink.json\");\nvar _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headerlink.json */ \"./pages/api/headerlink.json\", 1);\n/* harmony import */ var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/indexHelloNextJs.json */ \"./pages/api/indexHelloNextJs.json\");\nvar _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/indexHelloNextJs.json */ \"./pages/api/indexHelloNextJs.json\", 1);\n/* harmony import */ var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/parkAPI.json */ \"./pages/api/parkAPI.json\");\nvar _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/parkAPI.json */ \"./pages/api/parkAPI.json\", 1);\n/* harmony import */ var _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/headingH1.json */ \"./pages/api/headingH1.json\");\nvar _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headingH1.json */ \"./pages/api/headingH1.json\", 1);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/functionContextJson.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n // 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情\n// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用\n// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL\n\nvar API_URL = \"http://localhost:1337\";\n\nvar getHeader = function getHeader() {\n  return _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__;\n}; // 使用function作爲api承接內容，在上方的return中map接到的值\n\nvar getIndexHelloNextJs = function getIndexHelloNextJs() {\n  return _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__;\n};\nvar getPark = function getPark() {\n  return _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__;\n};\nvar getheadingH1 = function getheadingH1() {\n  return _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__;\n};\nvar h1Mapping = function h1Mapping(h1_id, arr_id) {\n  // 這邊要特別注意，使用function進行return中render內容，如果內容包含其它function.map\n  // 需要被包含在<></>裡面，否則會被報錯顯示declare\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !getheadingH1() ? 'Loading ...' : getheadingH1().map(function (headingH1) {\n    return __jsx(\"h1\", {\n      className: !(headingH1.h1_id == h1_id && headingH1.arr[0].arr_id == arr_id) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.h1.hidden : !(h1_id == 1 && arr_id == 1) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingH1 : _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.divH1,\n      key: headingH1.h1_id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }\n    }, !(headingH1.h1_id == h1_id && headingH1.arr[0].arr_id == arr_id) ? null : headingH1.h1);\n  }));\n}; // for Header.js\n\nvar handler = function handler() {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n    pathname: '/',\n    query: {\n      name: 'Home',\n      title: 'Connect to Home Page'\n    }\n  });\n}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用\n\nvar PostLink = function PostLink(_ref) {\n  var post = _ref.post;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/batman/[id]\",\n    as: \"/batman/\".concat(post.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    title: \"Connect to \".concat(post.title, \" Page\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, post.title)));\n};\n_c = PostLink;\nvar pageDescription = function pageDescription() {\n  return \"This is the page for the website.This content to description this text website how to use.\";\n};\nvar titleDescription = function titleDescription() {\n  return \"The website is built by upfloor which is a work that train myself to be up floor.\";\n};\nvar footerDescription = function footerDescription() {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-block\",\n    sm: 12,\n    md: 12,\n    lg: 12,\n    xl: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, // 判斷式先判斷webDescription()能不能執行，如果不能那麼顯示Loading ... ， 可以的話執行webDescription()\n  !webDescription() ? 'Loading ...' : webDescription()), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 12,\n    xl: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, !copyRight() ? 'Loading ...' : copyRight()));\n};\nvar webDescription = function webDescription() {\n  return \"Upfloor make nextjs (\\u0E51\\u2022\\u0E35_\\u0E40\\u2022\\u0E35\\u0E51)\";\n};\nvar copyRight = function copyRight() {\n  return \"Copyright \\xA9 2019-2020 Upfloor\";\n}; // 由list接入內容，這樣在return中才能使用\n\nvar getRandom = function getRandom(list) {\n  // Math.floor函式會回傳小於等於所給數字的最大整數。\n  // console.log(Math.floor(45.95)) => 45\n  // console.log(Math.floor(-8.77)) => -9\n  return list[Math.floor(Math.random() * list.length)];\n};\nvar headerBar = function headerBar() {\n  var randomText = ['NextJs', 'Bootstrap', 'ReactJs', 'JS'];\n  var randomWriter = ['Upfloor', 'StudioP', 'Learning', 'Frontend'];\n  return getRandom(randomText) + ' with ' + getRandom(randomWriter);\n}; // for contactJson page\n\nvar ifElseFunc = function ifElseFunc(mointorSize, changeVar) {\n  if (mointorSize.width >= 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (mointorSize.width >= 1200 && changeVar.length <= 20) {\n    return changeVar;\n  } else if (990 <= mointorSize.width < 1200 && changeVar.length > 27) {\n    return changeVar.substring(0, 26) + '...';\n  } else {\n    return changeVar;\n  }\n};\nvar badgeAlert = function badgeAlert(inputAlert) {\n  alert(inputAlert);\n}; // for windows mointorSize\n\nvar useWindowSize = function useWindowSize() {\n  _s();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PostLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2Z1bmN0aW9uQ29udGV4dEpzb24uanM/Mzk5OCJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImdldEhlYWRlciIsImhlYWRlcmxpbmsiLCJnZXRJbmRleEhlbGxvTmV4dEpzIiwiaW5kZXhIZWxsb05leHRKcyIsImdldFBhcmsiLCJwYXJrIiwiZ2V0aGVhZGluZ0gxIiwiaGVhZGluZ0gxSnNvbiIsImgxTWFwcGluZyIsImgxX2lkIiwiYXJyX2lkIiwibWFwIiwiaGVhZGluZ0gxIiwiYXJyIiwidXRpbFN0eWxlcyIsImgxIiwiaGlkZGVuIiwiZGl2SDEiLCJoYW5kbGVyIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwidGl0bGUiLCJQb3N0TGluayIsInBvc3QiLCJpZCIsInBhZ2VEZXNjcmlwdGlvbiIsInRpdGxlRGVzY3JpcHRpb24iLCJmb290ZXJEZXNjcmlwdGlvbiIsIndlYkRlc2NyaXB0aW9uIiwiY29weVJpZ2h0IiwiZ2V0UmFuZG9tIiwibGlzdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImhlYWRlckJhciIsInJhbmRvbVRleHQiLCJyYW5kb21Xcml0ZXIiLCJpZkVsc2VGdW5jIiwibW9pbnRvclNpemUiLCJjaGFuZ2VWYXIiLCJ3aWR0aCIsInN1YnN0cmluZyIsImJhZGdlQWxlcnQiLCJpbnB1dEFsZXJ0IiwiYWxlcnQiLCJ1c2VXaW5kb3dTaXplIiwiaXNDbGllbnQiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7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UDtBQUlELEdBTEQ7O0FBSGlDLGtCQVVHRyxzREFBUSxDQUFDTixPQUFELENBVlg7QUFBQSxNQVUxQk8sVUFWMEI7QUFBQSxNQVVkQyxhQVZjOztBQVlqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYixhQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFTVyxZQUFULEdBQXdCO0FBQ3RCRixtQkFBYSxDQUFDUixPQUFPLEVBQVIsQ0FBYjtBQUNEOztBQUVEQyxVQUFNLENBQUNVLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNVCxNQUFNLENBQUNXLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FaaUMsQ0F1QjFCOztBQUVQLFNBQU9ILFVBQVA7QUFDRCxDQTFCTTs7R0FBTVQsYSIsImZpbGUiOiIuL3BhZ2VzL2FwaUNvbXBvbmVudHMvZnVuY3Rpb25Db250ZXh0SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGhlYWRlcmxpbmsgZnJvbSAnLi4vYXBpL2hlYWRlcmxpbmsuanNvbidcbmltcG9ydCBpbmRleEhlbGxvTmV4dEpzIGZyb20gJy4uL2FwaS9pbmRleEhlbGxvTmV4dEpzLmpzb24nXG5pbXBvcnQgcGFyayBmcm9tICcuLi9hcGkvcGFya0FQSS5qc29uJ1xuaW1wb3J0IGhlYWRpbmdIMUpzb24gZnJvbSAnLi4vYXBpL2hlYWRpbmdIMS5qc29uJ1xuaW1wb3J0IHsgd29yZENhcGl0YWxpemUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbFN0eWxlLmpzJ1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuLy8g5oqK5omA5pyJ5L2/55So5YWn6YOoanNvbueahGZ1bmN0aW9u5pS+5Zyo6YCZ6YKK77yM6YCZ5qij6KaB6YeN6KSH5L2/55So5ZG85Y+r5LiN55So5L2c5aSa6aSY55qE5LqL5oOFXG4vLyDkvYbmmK/lpoLmnpzmmK/kvb/nlKhnZXRTdGF0aWNQcm9wcyBvciBnZXRJbml0aWFsUHJvcHMgb3IgZ2V0U2VydmVyU2lkZVByb3BzIG9yIGdldFN0YXRpY1BhdGjliYfnhKHms5XlpoLmraTkvb/nlKhcblxuLy8gQVBJX1VSTOeCui5lbnbpgJnlgIvmqpTmoYjkuK3nmoTntrLlnYDkvobkvb/nlKjvvIzmma7pgJrkvb/nlKjnmoTnlavmspLmnInlvbHpn7/vvIzkvYbmmK/lpoLmnpzopoHkvb/nlKhpbWFnZemAmeeormFwaeWMr+WFpeeahOipse+8jOWwsemcgOimgeaMh+WumkFQSV9VUkxcbmV4cG9ydCBjb25zdCB7IEFQSV9VUkwgfSA9IHByb2Nlc3MuZW52XG5cbmV4cG9ydCBjb25zdCBnZXRIZWFkZXIgPSAoKSA9PiB7XG4gIHJldHVybiBoZWFkZXJsaW5rXG59XG5cbi8vIOS9v+eUqGZ1bmN0aW9u5L2c54iyYXBp5om/5o6l5YWn5a6577yM5Zyo5LiK5pa555qEcmV0dXJu5LitbWFw5o6l5Yiw55qE5YC8XG5leHBvcnQgY29uc3QgZ2V0SW5kZXhIZWxsb05leHRKcyA9ICgpID0+IHtcbiAgcmV0dXJuIGluZGV4SGVsbG9OZXh0SnNcbn1cblxuZXhwb3J0IGNvbnN0IGdldFBhcmsgPSAoKSA9PiB7XG4gIHJldHVybiBwYXJrXG59XG5cbmV4cG9ydCBjb25zdCBnZXRoZWFkaW5nSDEgPSAoKSA9PiB7XG4gIHJldHVybiBoZWFkaW5nSDFKc29uXG59XG5cbmV4cG9ydCBjb25zdCBoMU1hcHBpbmcgPSAoaDFfaWQsIGFycl9pZCkgPT4ge1xuICAvLyDpgJnpgoropoHnibnliKXms6jmhI/vvIzkvb/nlKhmdW5jdGlvbumAsuihjHJldHVybuS4rXJlbmRlcuWFp+Wuue+8jOWmguaenOWFp+WuueWMheWQq+WFtuWug2Z1bmN0aW9uLm1hcFxuICAvLyDpnIDopoHooqvljIXlkKvlnKg8PjwvPuijoemdou+8jOWQpuWJh+acg+iiq+WgsemMr+mhr+ekumRlY2xhcmVcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICAhZ2V0aGVhZGluZ0gxKCkgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgZ2V0aGVhZGluZ0gxKCkubWFwKGhlYWRpbmdIMSA9PiAoXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICEoaGVhZGluZ0gxLmgxX2lkID09IGgxX2lkICYmIGhlYWRpbmdIMS5hcnJbMF0uYXJyX2lkID09IGFycl9pZCkgPyB1dGlsU3R5bGVzLmgxLmhpZGRlbiA6XG4gICAgICAgICAgICAgICEoaDFfaWQgPT0gMSAmJiBhcnJfaWQgPT0gMSkgPyB1dGlsU3R5bGVzLmhlYWRpbmdIMSA6IHV0aWxTdHlsZXMuZGl2SDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGtleT17aGVhZGluZ0gxLmgxX2lkfT5cbiAgICAgICAgICAgIHshKGhlYWRpbmdIMS5oMV9pZCA9PSBoMV9pZCAmJiBoZWFkaW5nSDEuYXJyWzBdLmFycl9pZCA9PSBhcnJfaWQpID9cbiAgICAgICAgICAgICAgbnVsbCA6IGhlYWRpbmdIMS5oMX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbi8vIGZvciBIZWFkZXIuanNcbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xuICBSb3V0ZXIucHVzaCh7XG4gICAgcGF0aG5hbWU6ICcvJyxcbiAgICBxdWVyeToge1xuICAgICAgbmFtZTogJ0hvbWUnLFxuICAgICAgdGl0bGU6ICdDb25uZWN0IHRvIEhvbWUgUGFnZScsXG4gICAgfSxcbiAgfSlcbn1cblxuLy8g55W25L2c6aGN5aSW5o+S5YWl55qEbGlua+S+huS9v+eUqO+8jOmAmeijoemdoueahHBvc3QuaWTvvIxwb3N0LnRpdGxl6YO95piv6JeJ55Sx6KKrbWFw6YCy5L6G55qEcG9zdOWAvOS9v+eUqFxuZXhwb3J0IGNvbnN0IFBvc3RMaW5rID0gKHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYmF0bWFuL1tpZF1cIiBhcz17YC9iYXRtYW4vJHtwb3N0LmlkfWB9PlxuICAgICAgICA8YSB0aXRsZT17YENvbm5lY3QgdG8gJHtwb3N0LnRpdGxlfSBQYWdlYH0+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBwYWdlRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgYFRoaXMgaXMgdGhlIHBhZ2UgZm9yIHRoZSB3ZWJzaXRlLlRoaXMgY29udGVudCB0byBkZXNjcmlwdGlvbiB0aGlzIHRleHQgd2Vic2l0ZSBob3cgdG8gdXNlLmBcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdGl0bGVEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBgVGhlIHdlYnNpdGUgaXMgYnVpbHQgYnkgdXBmbG9vciB3aGljaCBpcyBhIHdvcmsgdGhhdCB0cmFpbiBteXNlbGYgdG8gYmUgdXAgZmxvb3IuYFxuICApXG59XG5cbmV4cG9ydCBjb25zdCBmb290ZXJEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBjbGFzc05hbWU9J2Qtbm9uZSBkLXNtLWJsb2NrJyBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICB7XG4gICAgICAgICAgLy8g5Yik5pa35byP5YWI5Yik5pa3d2ViRGVzY3JpcHRpb24oKeiDveS4jeiDveWft+ihjO+8jOWmguaenOS4jeiDvemCo+m6vOmhr+ekukxvYWRpbmcgLi4uIO+8jCDlj6/ku6XnmoToqbHln7fooYx3ZWJEZXNjcmlwdGlvbigpXG4gICAgICAgICAgIXdlYkRlc2NyaXB0aW9uKCkgPyAnTG9hZGluZyAuLi4nIDogd2ViRGVzY3JpcHRpb24oKVxuICAgICAgICB9XG4gICAgICA8L0NvbD5cbiAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezEyfSB4bD17MTJ9PlxuICAgICAgICB7XG4gICAgICAgICAgIWNvcHlSaWdodCgpID8gJ0xvYWRpbmcgLi4uJyA6IGNvcHlSaWdodCgpXG4gICAgICAgIH1cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCB3ZWJEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBgVXBmbG9vciBtYWtlIG5leHRqcyAo4LmR4oCi4Li1X+C5gOKAouC4teC5kSlgXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGNvcHlSaWdodCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBgQ29weXJpZ2h0IMKpIDIwMTktMjAyMCBVcGZsb29yYFxuICApXG59XG5cbi8vIOeUsWxpc3TmjqXlhaXlhaflrrnvvIzpgJnmqKPlnKhyZXR1cm7kuK3miY3og73kvb/nlKhcbmV4cG9ydCBjb25zdCBnZXRSYW5kb20gPSAoIGxpc3QgKSA9PiB7XG4gIC8vIE1hdGguZmxvb3Llh73lvI/mnIPlm57lgrPlsI/mlrznrYnmlrzmiYDntabmlbjlrZfnmoTmnIDlpKfmlbTmlbjjgIJcbiAgLy8gY29uc29sZS5sb2coTWF0aC5mbG9vcig0NS45NSkpID0+IDQ1XG4gIC8vIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoLTguNzcpKSA9PiAtOVxuICByZXR1cm4gKFxuICAgIGxpc3RbIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiBsaXN0Lmxlbmd0aCApIF1cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgaGVhZGVyQmFyID0gKCkgPT4ge1xuICBjb25zdCByYW5kb21UZXh0ID0gWyAnTmV4dEpzJywgJ0Jvb3RzdHJhcCcsICdSZWFjdEpzJywgJ0pTJyBdXG4gIGNvbnN0IHJhbmRvbVdyaXRlciA9IFsgJ1VwZmxvb3InLCAnU3R1ZGlvUCcsICdMZWFybmluZycsICdGcm9udGVuZCcgXVxuXG4gIHJldHVybiAoXG4gICAgZ2V0UmFuZG9tKHJhbmRvbVRleHQpICsgJyB3aXRoICcgKyBnZXRSYW5kb20ocmFuZG9tV3JpdGVyKVxuICApXG59XG5cbi8vIGZvciBjb250YWN0SnNvbiBwYWdlXG5leHBvcnQgY29uc3QgaWZFbHNlRnVuYyA9IChtb2ludG9yU2l6ZSwgY2hhbmdlVmFyKSA9PiB7XG4gIGlmKG1vaW50b3JTaXplLndpZHRoID49IDEyMDAgJiYgY2hhbmdlVmFyLmxlbmd0aCA+IDIwKSB7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIuc3Vic3RyaW5nKDAsMTkpICsgJy4uLicpXG4gIH1cbiAgZWxzZSBpZiAobW9pbnRvclNpemUud2lkdGggPj0gMTIwMCAmJiBjaGFuZ2VWYXIubGVuZ3RoIDw9IDIwKXtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxuICBlbHNlIGlmICg5OTAgPD0gbW9pbnRvclNpemUud2lkdGggPCAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPiAyNyl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIuc3Vic3RyaW5nKDAsMjYpICsgJy4uLicpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJhZGdlQWxlcnQgPSAoaW5wdXRBbGVydCkgPT4ge1xuICBhbGVydChpbnB1dEFsZXJ0KVxufVxuXG4vLyBmb3Igd2luZG93cyBtb2ludG9yU2l6ZVxuZXhwb3J0IGNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKSA9PiB7XG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcblxuICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKCkpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgfSwgW10pIC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICByZXR1cm4gd2luZG93U2l6ZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apiComponents/functionContextJson.js\n");

/***/ })

})