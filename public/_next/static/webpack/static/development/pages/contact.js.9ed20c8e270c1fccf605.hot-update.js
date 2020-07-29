webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/functionContextJson.js":
/*!****************************************************!*\
  !*** ./pages/apiComponents/functionContextJson.js ***!
  \****************************************************/
/*! exports provided: API_URL, getHeader, getIndexHelloNextJs, getPark, getheadingH1, h1Mapping, handler, PostLink, pageDescription, titleDescription, footerDescription, webDescription, copyRight, getRandom, headerBar, ifElseFunc, useWindowSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHeader\", function() { return getHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexHelloNextJs\", function() { return getIndexHelloNextJs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPark\", function() { return getPark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getheadingH1\", function() { return getheadingH1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h1Mapping\", function() { return h1Mapping; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handler\", function() { return handler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PostLink\", function() { return PostLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pageDescription\", function() { return pageDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"titleDescription\", function() { return titleDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"footerDescription\", function() { return footerDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"webDescription\", function() { return webDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copyRight\", function() { return copyRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandom\", function() { return getRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerBar\", function() { return headerBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifElseFunc\", function() { return ifElseFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useWindowSize\", function() { return useWindowSize; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/headerlink.json */ \"./pages/api/headerlink.json\");\nvar _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headerlink.json */ \"./pages/api/headerlink.json\", 1);\n/* harmony import */ var _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/indexHelloNextJs.json */ \"./pages/api/indexHelloNextJs.json\");\nvar _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/indexHelloNextJs.json */ \"./pages/api/indexHelloNextJs.json\", 1);\n/* harmony import */ var _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/parkAPI.json */ \"./pages/api/parkAPI.json\");\nvar _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/parkAPI.json */ \"./pages/api/parkAPI.json\", 1);\n/* harmony import */ var _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/headingH1.json */ \"./pages/api/headingH1.json\");\nvar _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api/headingH1.json */ \"./pages/api/headingH1.json\", 1);\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/functionContextJson.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n // 把所有使用內部json的function放在這邊，這樣要重複使用呼叫不用作多餘的事情\n// 但是如果是使用getStaticProps or getInitialProps or getServerSideProps or getStaticPath則無法如此使用\n// API_URL為.env這個檔案中的網址來使用，普通使用的畫沒有影響，但是如果要使用image這種api匯入的話，就需要指定API_URL\n\nvar API_URL = \"http://localhost:1337\";\n\nvar getHeader = function getHeader() {\n  return _api_headerlink_json__WEBPACK_IMPORTED_MODULE_3__;\n}; // 使用function作爲api承接內容，在上方的return中map接到的值\n\nvar getIndexHelloNextJs = function getIndexHelloNextJs() {\n  return _api_indexHelloNextJs_json__WEBPACK_IMPORTED_MODULE_4__;\n};\nvar getPark = function getPark() {\n  return _api_parkAPI_json__WEBPACK_IMPORTED_MODULE_5__;\n};\nvar getheadingH1 = function getheadingH1() {\n  return _api_headingH1_json__WEBPACK_IMPORTED_MODULE_6__;\n};\nvar h1Mapping = function h1Mapping(h1_id, arr_id) {\n  // 這邊要特別注意，使用function進行return中render內容，如果內容包含其它function.map\n  // 需要被包含在<></>裡面，否則會被報錯顯示declare\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !getheadingH1() ? 'Loading ...' : getheadingH1().map(function (headingH1) {\n    return __jsx(\"h1\", {\n      className: !(headingH1.h1_id == h1_id && headingH1.arr[0].arr_id == arr_id) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.h1.hidden : !(h1_id == 1 && arr_id == 1) ? _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.headingH1 : _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.divH1,\n      key: headingH1.h1_id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }\n    }, !(headingH1.h1_id == h1_id && headingH1.arr[0].arr_id == arr_id) ? null : headingH1.h1);\n  }));\n}; // for Header.js\n\nvar handler = function handler() {\n  next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({\n    pathname: '/',\n    query: {\n      name: 'Home',\n      title: 'Connect to Home Page'\n    }\n  });\n}; // 當作額外插入的link來使用，這裡面的post.id，post.title都是藉由被map進來的post值使用\n\nvar PostLink = function PostLink(_ref) {\n  var post = _ref.post;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/batman/[id]\",\n    as: \"/batman/\".concat(post.id),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    title: \"Connect to \".concat(post.title, \" Page\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, post.title)));\n};\n_c = PostLink;\nvar pageDescription = function pageDescription() {\n  return \"This is the page for the website.This content to description this text website how to use.\";\n};\nvar titleDescription = function titleDescription() {\n  return \"The website is built by upfloor which is a work that train myself to be up floor.\";\n};\nvar footerDescription = function footerDescription() {\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    className: \"d-none d-sm-block\",\n    sm: 12,\n    md: 12,\n    lg: 12,\n    xl: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }, // 判斷式先判斷webDescription()能不能執行，如果不能那麼顯示Loading ... ， 可以的話執行webDescription()\n  !webDescription() ? 'Loading ...' : webDescription()), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 12,\n    lg: 12,\n    xl: 12,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }\n  }, !copyRight() ? 'Loading ...' : copyRight()));\n};\nvar webDescription = function webDescription() {\n  return \"Upfloor make nextjs (\\u0E51\\u2022\\u0E35_\\u0E40\\u2022\\u0E35\\u0E51)\";\n};\nvar copyRight = function copyRight() {\n  return \"Copyright \\xA9 2019-2020 Upfloor\";\n}; // 由list接入內容，這樣在return中才能使用\n\nvar getRandom = function getRandom(list) {\n  // Math.floor函式會回傳小於等於所給數字的最大整數。\n  // console.log(Math.floor(45.95)) => 45\n  // console.log(Math.floor(-8.77)) => -9\n  return list[Math.floor(Math.random() * list.length)];\n};\nvar headerBar = function headerBar() {\n  var randomText = ['NextJs', 'Bootstrap', 'ReactJs', 'JS'];\n  var randomWriter = ['Upfloor', 'StudioP', 'Learning', 'Frontend'];\n  return getRandom(randomText) + ' with ' + getRandom(randomWriter);\n}; // for contactJson page\n\nvar ifElseFunc = function ifElseFunc(mointorSize, changeVar) {\n  if (mointorSize.width >= 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (mointorSize.width >= 1200 && changeVar.length <= 20) {\n    return changeVar;\n  } else if (990 <= mointorSize.width < 1200 && changeVar.length > 27) {\n    return changeVar.substring(0, 26) + '...';\n  } else if (990 <= mointorSize.width < 1200 && changeVar.length <= 27) {\n    return changeVar;\n  } // else if (910 < mointorSize.width < 990 && changeVar.length > 27){\n  //   return (changeVar.substring(0,26) + '...')\n  // }\n  // else if (910 < mointorSize.width < 990 && changeVar.length <= 27){\n  //   return (changeVar)\n  // }\n  // else if (768 < mointorSize.width < 910 && changeVar.length > 29){\n  //   return (changeVar.substring(0,28) + '...')\n  // }\n  // else if (768 < mointorSize.width < 910 && changeVar.length <= 29){\n  //   return (changeVar)\n  // }\n  else if (mointorSize.width < 990) {\n      return changeVar;\n    } else {\n      return changeVar;\n    }\n}; // for windows mointorSize\n\nvar useWindowSize = function useWindowSize() {\n  _s();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"PostLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2Z1bmN0aW9uQ29udGV4dEpzb24uanM/Mzk5OCJdLCJuYW1lcyI6WyJBUElfVVJMIiwicHJvY2VzcyIsImdldEhlYWRlciIsImhlYWRlcmxpbmsiLCJnZXRJbmRleEhlbGxvTmV4dEpzIiwiaW5kZXhIZWxsb05leHRKcyIsImdldFBhcmsiLCJwYXJrIiwiZ2V0aGVhZGluZ0gxIiwiaGVhZGluZ0gxSnNvbiIsImgxTWFwcGluZyIsImgxX2lkIiwiYXJyX2lkIiwibWFwIiwiaGVhZGluZ0gxIiwiYXJyIiwidXRpbFN0eWxlcyIsImgxIiwiaGlkZGVuIiwiZGl2SDEiLCJoYW5kbGVyIiwiUm91dGVyIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJuYW1lIiwidGl0bGUiLCJQb3N0TGluayIsInBvc3QiLCJpZCIsInBhZ2VEZXNjcmlwdGlvbiIsInRpdGxlRGVzY3JpcHRpb24iLCJmb290ZXJEZXNjcmlwdGlvbiIsIndlYkRlc2NyaXB0aW9uIiwiY29weVJpZ2h0IiwiZ2V0UmFuZG9tIiwibGlzdCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImhlYWRlckJhciIsInJhbmRvbVRleHQiLCJyYW5kb21Xcml0ZXIiLCJpZkVsc2VGdW5jIiwibW9pbnRvclNpemUiLCJjaGFuZ2VWYXIiLCJ3aWR0aCIsInN1YnN0cmluZyIsInVzZVdpbmRvd1NpemUiLCJpc0NsaWVudCIsImdldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1c2VTdGF0ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7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TTtBQUNwQixXQUFPO0FBQ0xKLFdBQUssRUFBRUcsUUFBUSxHQUFHRSxNQUFNLENBQUNDLFVBQVYsR0FBdUJDLFNBRGpDO0FBRUxDLFlBQU0sRUFBRUwsUUFBUSxHQUFHRSxNQUFNLENBQUNJLFdBQVYsR0FBd0JGO0FBRm5DLEtBQVA7QUFJRCxHQUxEOztBQUhpQyxrQkFVR0csc0RBQVEsQ0FBQ04sT0FBRCxDQVZYO0FBQUEsTUFVMUJPLFVBVjBCO0FBQUEsTUFVZEMsYUFWYzs7QUFZakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ1YsUUFBTCxFQUFlO0FBQ2IsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsYUFBU1csWUFBVCxHQUF3QjtBQUN0QkYsbUJBQWEsQ0FBQ1IsT0FBTyxFQUFSLENBQWI7QUFDRDs7QUFFREMsVUFBTSxDQUFDVSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0QsWUFBbEM7QUFDQSxXQUFPO0FBQUEsYUFBTVQsTUFBTSxDQUFDVyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckMsQ0FBTjtBQUFBLEtBQVA7QUFDRCxHQVhRLEVBV04sRUFYTSxDQUFULENBWmlDLENBdUIxQjs7QUFFUCxTQUFPSCxVQUFQO0FBQ0QsQ0ExQk07O0dBQU1ULGEiLCJmaWxlIjoiLi9wYWdlcy9hcGlDb21wb25lbnRzL2Z1bmN0aW9uQ29udGV4dEpzb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBoZWFkZXJsaW5rIGZyb20gJy4uL2FwaS9oZWFkZXJsaW5rLmpzb24nXG5pbXBvcnQgaW5kZXhIZWxsb05leHRKcyBmcm9tICcuLi9hcGkvaW5kZXhIZWxsb05leHRKcy5qc29uJ1xuaW1wb3J0IHBhcmsgZnJvbSAnLi4vYXBpL3BhcmtBUEkuanNvbidcbmltcG9ydCBoZWFkaW5nSDFKc29uIGZyb20gJy4uL2FwaS9oZWFkaW5nSDEuanNvbidcbmltcG9ydCB7IHdvcmRDYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxTdHlsZS5qcydcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbi8vIOaKiuaJgOacieS9v+eUqOWFp+mDqGpzb27nmoRmdW5jdGlvbuaUvuWcqOmAmemCiu+8jOmAmeaoo+imgemHjeikh+S9v+eUqOWRvOWPq+S4jeeUqOS9nOWkmumkmOeahOS6i+aDhVxuLy8g5L2G5piv5aaC5p6c5piv5L2/55SoZ2V0U3RhdGljUHJvcHMgb3IgZ2V0SW5pdGlhbFByb3BzIG9yIGdldFNlcnZlclNpZGVQcm9wcyBvciBnZXRTdGF0aWNQYXRo5YmH54Sh5rOV5aaC5q2k5L2/55SoXG5cbi8vIEFQSV9VUkzngrouZW526YCZ5YCL5qqU5qGI5Lit55qE57ay5Z2A5L6G5L2/55So77yM5pmu6YCa5L2/55So55qE55Wr5rKS5pyJ5b2x6Z+/77yM5L2G5piv5aaC5p6c6KaB5L2/55SoaW1hZ2XpgJnnqK5hcGnljK/lhaXnmoToqbHvvIzlsLHpnIDopoHmjIflrppBUElfVVJMXG5leHBvcnQgY29uc3QgeyBBUElfVVJMIH0gPSBwcm9jZXNzLmVudlxuXG5leHBvcnQgY29uc3QgZ2V0SGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gaGVhZGVybGlua1xufVxuXG4vLyDkvb/nlKhmdW5jdGlvbuS9nOeIsmFwaeaJv+aOpeWFp+Wuue+8jOWcqOS4iuaWueeahHJldHVybuS4rW1hcOaOpeWIsOeahOWAvFxuZXhwb3J0IGNvbnN0IGdldEluZGV4SGVsbG9OZXh0SnMgPSAoKSA9PiB7XG4gIHJldHVybiBpbmRleEhlbGxvTmV4dEpzXG59XG5cbmV4cG9ydCBjb25zdCBnZXRQYXJrID0gKCkgPT4ge1xuICByZXR1cm4gcGFya1xufVxuXG5leHBvcnQgY29uc3QgZ2V0aGVhZGluZ0gxID0gKCkgPT4ge1xuICByZXR1cm4gaGVhZGluZ0gxSnNvblxufVxuXG5leHBvcnQgY29uc3QgaDFNYXBwaW5nID0gKGgxX2lkLCBhcnJfaWQpID0+IHtcbiAgLy8g6YCZ6YKK6KaB54m55Yil5rOo5oSP77yM5L2/55SoZnVuY3Rpb27pgLLooYxyZXR1cm7kuK1yZW5kZXLlhaflrrnvvIzlpoLmnpzlhaflrrnljIXlkKvlhbblroNmdW5jdGlvbi5tYXBcbiAgLy8g6ZyA6KaB6KKr5YyF5ZCr5ZyoPD48Lz7oo6HpnaLvvIzlkKbliYfmnIPooqvloLHpjK/poa/npLpkZWNsYXJlXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtcbiAgICAgICAgIWdldGhlYWRpbmdIMSgpID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgIGdldGhlYWRpbmdIMSgpLm1hcChoZWFkaW5nSDEgPT4gKFxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAhKGhlYWRpbmdIMS5oMV9pZCA9PSBoMV9pZCAmJiBoZWFkaW5nSDEuYXJyWzBdLmFycl9pZCA9PSBhcnJfaWQpID8gdXRpbFN0eWxlcy5oMS5oaWRkZW4gOlxuICAgICAgICAgICAgICAhKGgxX2lkID09IDEgJiYgYXJyX2lkID09IDEpID8gdXRpbFN0eWxlcy5oZWFkaW5nSDEgOiB1dGlsU3R5bGVzLmRpdkgxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBrZXk9e2hlYWRpbmdIMS5oMV9pZH0+XG4gICAgICAgICAgICB7IShoZWFkaW5nSDEuaDFfaWQgPT0gaDFfaWQgJiYgaGVhZGluZ0gxLmFyclswXS5hcnJfaWQgPT0gYXJyX2lkKSA/XG4gICAgICAgICAgICAgIG51bGwgOiBoZWFkaW5nSDEuaDF9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG4vLyBmb3IgSGVhZGVyLmpzXG5leHBvcnQgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcbiAgUm91dGVyLnB1c2goe1xuICAgIHBhdGhuYW1lOiAnLycsXG4gICAgcXVlcnk6IHtcbiAgICAgIG5hbWU6ICdIb21lJyxcbiAgICAgIHRpdGxlOiAnQ29ubmVjdCB0byBIb21lIFBhZ2UnLFxuICAgIH0sXG4gIH0pXG59XG5cbi8vIOeVtuS9nOmhjeWkluaPkuWFpeeahGxpbmvkvobkvb/nlKjvvIzpgJnoo6HpnaLnmoRwb3N0Lmlk77yMcG9zdC50aXRsZemDveaYr+iXieeUseiiq21hcOmAsuS+hueahHBvc3TlgLzkvb/nlKhcbmV4cG9ydCBjb25zdCBQb3N0TGluayA9ICh7IHBvc3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluayBocmVmPVwiL2JhdG1hbi9baWRdXCIgYXM9e2AvYmF0bWFuLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgPGEgdGl0bGU9e2BDb25uZWN0IHRvICR7cG9zdC50aXRsZX0gUGFnZWB9Pntwb3N0LnRpdGxlfTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgcGFnZURlc2NyaXB0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIGBUaGlzIGlzIHRoZSBwYWdlIGZvciB0aGUgd2Vic2l0ZS5UaGlzIGNvbnRlbnQgdG8gZGVzY3JpcHRpb24gdGhpcyB0ZXh0IHdlYnNpdGUgaG93IHRvIHVzZS5gXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHRpdGxlRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgYFRoZSB3ZWJzaXRlIGlzIGJ1aWx0IGJ5IHVwZmxvb3Igd2hpY2ggaXMgYSB3b3JrIHRoYXQgdHJhaW4gbXlzZWxmIHRvIGJlIHVwIGZsb29yLmBcbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZm9vdGVyRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdz5cbiAgICAgIDxDb2wgY2xhc3NOYW1lPSdkLW5vbmUgZC1zbS1ibG9jaycgc209ezEyfSBtZD17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAge1xuICAgICAgICAgIC8vIOWIpOaWt+W8j+WFiOWIpOaWt3dlYkRlc2NyaXB0aW9uKCnog73kuI3og73ln7fooYzvvIzlpoLmnpzkuI3og73pgqPpurzpoa/npLpMb2FkaW5nIC4uLiDvvIwg5Y+v5Lul55qE6Kmx5Z+36KGMd2ViRGVzY3JpcHRpb24oKVxuICAgICAgICAgICF3ZWJEZXNjcmlwdGlvbigpID8gJ0xvYWRpbmcgLi4uJyA6IHdlYkRlc2NyaXB0aW9uKClcbiAgICAgICAgfVxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXsxMn0geGw9ezEyfT5cbiAgICAgICAge1xuICAgICAgICAgICFjb3B5UmlnaHQoKSA/ICdMb2FkaW5nIC4uLicgOiBjb3B5UmlnaHQoKVxuICAgICAgICB9XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3Qgd2ViRGVzY3JpcHRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgYFVwZmxvb3IgbWFrZSBuZXh0anMgKOC5keKAouC4tV/guYDigKLguLXguZEpYFxuICApXG59XG5cbmV4cG9ydCBjb25zdCBjb3B5UmlnaHQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgYENvcHlyaWdodCDCqSAyMDE5LTIwMjAgVXBmbG9vcmBcbiAgKVxufVxuXG4vLyDnlLFsaXN05o6l5YWl5YWn5a6577yM6YCZ5qij5ZyocmV0dXJu5Lit5omN6IO95L2/55SoXG5leHBvcnQgY29uc3QgZ2V0UmFuZG9tID0gKCBsaXN0ICkgPT4ge1xuICAvLyBNYXRoLmZsb29y5Ye95byP5pyD5Zue5YKz5bCP5pa8562J5pa85omA57Wm5pW45a2X55qE5pyA5aSn5pW05pW444CCXG4gIC8vIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoNDUuOTUpKSA9PiA0NVxuICAvLyBjb25zb2xlLmxvZyhNYXRoLmZsb29yKC04Ljc3KSkgPT4gLTlcbiAgcmV0dXJuIChcbiAgICBsaXN0WyBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGggKSBdXG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGhlYWRlckJhciA9ICgpID0+IHtcbiAgY29uc3QgcmFuZG9tVGV4dCA9IFsgJ05leHRKcycsICdCb290c3RyYXAnLCAnUmVhY3RKcycsICdKUycgXVxuICBjb25zdCByYW5kb21Xcml0ZXIgPSBbICdVcGZsb29yJywgJ1N0dWRpb1AnLCAnTGVhcm5pbmcnLCAnRnJvbnRlbmQnIF1cblxuICByZXR1cm4gKFxuICAgIGdldFJhbmRvbShyYW5kb21UZXh0KSArICcgd2l0aCAnICsgZ2V0UmFuZG9tKHJhbmRvbVdyaXRlcilcbiAgKVxufVxuXG4vLyBmb3IgY29udGFjdEpzb24gcGFnZVxuZXhwb3J0IGNvbnN0IGlmRWxzZUZ1bmMgPSAobW9pbnRvclNpemUsIGNoYW5nZVZhcikgPT4ge1xuICBpZihtb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPiAyMCkge1xuICAgIHJldHVybiAoY2hhbmdlVmFyLnN1YnN0cmluZygwLDE5KSArICcuLi4nKVxuICB9XG4gIGVsc2UgaWYgKG1vaW50b3JTaXplLndpZHRoID49IDEyMDAgJiYgY2hhbmdlVmFyLmxlbmd0aCA8PSAyMCl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSBpZiAoOTkwIDw9IG1vaW50b3JTaXplLndpZHRoIDwgMTIwMCAmJiBjaGFuZ2VWYXIubGVuZ3RoID4gMjcpe1xuICAgIHJldHVybiAoY2hhbmdlVmFyLnN1YnN0cmluZygwLDI2KSArICcuLi4nKVxuICB9XG4gIGVsc2UgaWYgKDk5MCA8PSBtb2ludG9yU2l6ZS53aWR0aCA8IDEyMDAgJiYgY2hhbmdlVmFyLmxlbmd0aCA8PSAyNyl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgLy8gZWxzZSBpZiAoOTEwIDwgbW9pbnRvclNpemUud2lkdGggPCA5OTAgJiYgY2hhbmdlVmFyLmxlbmd0aCA+IDI3KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwyNikgKyAnLi4uJylcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg5MTAgPCBtb2ludG9yU2l6ZS53aWR0aCA8IDk5MCAmJiBjaGFuZ2VWYXIubGVuZ3RoIDw9IDI3KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhcilcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg3NjggPCBtb2ludG9yU2l6ZS53aWR0aCA8IDkxMCAmJiBjaGFuZ2VWYXIubGVuZ3RoID4gMjkpe1xuICAvLyAgIHJldHVybiAoY2hhbmdlVmFyLnN1YnN0cmluZygwLDI4KSArICcuLi4nKVxuICAvLyB9XG4gIC8vIGVsc2UgaWYgKDc2OCA8IG1vaW50b3JTaXplLndpZHRoIDwgOTEwICYmIGNoYW5nZVZhci5sZW5ndGggPD0gMjkpe1xuICAvLyAgIHJldHVybiAoY2hhbmdlVmFyKVxuICAvLyB9XG4gIGVsc2UgaWYgKG1vaW50b3JTaXplLndpZHRoIDwgOTkwKXtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxufVxuXG4vLyBmb3Igd2luZG93cyBtb2ludG9yU2l6ZVxuZXhwb3J0IGNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKSA9PiB7XG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcblxuICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKCkpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgfSwgW10pIC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICByZXR1cm4gd2luZG93U2l6ZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apiComponents/functionContextJson.js\n");

/***/ })

})