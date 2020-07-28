webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson, ifElseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifElseFunc\", function() { return ifElseFunc; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, webAtThisMointorSize.width, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, // 如果螢幕尺寸沒有超過1200px，顯示完整的Introduction\n    // (webAtThisMointorSize.width >= 1200) && (park.introduction.length > 20) ?\n    // (park.introduction.substring(0,19) + '...')\n    // : (webAtThisMointorSize.width >= 1200) && (park.introduction.length <= 20) ?\n    // park.introduction\n    // : (768 < webAtThisMointorSize.width < 1200) && (park.introduction.length > 26) ? (park.introduction.substring(0,25) + '...')\n    // : (768 < webAtThisMointorSize.width < 1200) && (park.introduction.length <= 26) ?\n    // park.introduction\n    // : (webAtThisMointorSize.width < 768) ? park.introduction\n    // : park.introduction\n    ifElseFunc(webAtThisMointorSize, park.introduction)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 19\n      }\n    }, ifElseFunc(webAtThisMointorSize, park.address))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar ifElseFunc = function ifElseFunc(mointorSize, changeVar) {\n  if (mointorSize.width >= 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (mointorSize.width >= 1200 && changeVar.length < 20) {\n    return changeVar;\n  } // else if (990 < mointorSize.width < 1200 && changeVar.length > 25){\n  //   return (changeVar.substring(0,24) + '...')\n  // }\n  // else if (990 < mointorSize.width < 1200 && changeVar.length < 25){\n  //   return (changeVar)\n  // }\n  // else if (910 < mointorSize.width <= 990 && changeVar.length > 25){\n  //   return (changeVar.substring(0,24) + '...')\n  // }\n  // else if (910 < mointorSize.width <= 990 && changeVar.length < 25){\n  //   return (changeVar)\n  // }\n  // else if (768 < mointorSize.width <= 910 && changeVar.length > 27){\n  //   return (changeVar.substring(0,26) + '...')\n  // }\n  // else if (768 < mointorSize.width <= 910 && changeVar.length < 27){\n  //   return (changeVar)\n  // }\n  // else if (mointorSize.width < 768){\n  //   return (changeVar)\n  // }\n  else {\n      return changeVar;\n    }\n}; // const switchCase = (switchSize) => {\n//   switch(switchSize.value) {\n//       case 'Admin':\n//         return (park.introduction)\n//       case 'Manager':\n//         return (park.introduction.substring(0,19) + '...')\n//       default:\n//         return (park.introduction)\n//     }\n//   }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsImdldFBhcmsiLCJtYXAiLCJwYXJrIiwiYXJlYUlkIiwicGFya0lkIiwid29yZFN0eWxlIiwicGFya1N0eWxlIiwiQ2FyZCIsIkhlYWRlciIsImFyZWFOYW1lIiwiaWZFbHNlRnVuYyIsImludHJvZHVjdGlvbiIsImFkZHJlc3MiLCJwYXlHdWlkZSIsImlzQ2xpZW50IiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInVzZVN0YXRlIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vaW50b3JTaXplIiwiY2hhbmdlVmFyIiwibGVuZ3RoIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxvQkFBb0IsR0FBR0MsYUFBYSxFQUExQztBQUNBLFNBQ0UsbUVBQ0dELG9CQUFvQixDQUFDRSxLQUR4QixFQUdJLENBQUNDLHVFQUFPLEVBQVIsR0FBYSxhQUFiLEdBQ0FBLHVFQUFPLEdBQUdDLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsV0FDaEIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRSxFQUF6QjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsUUFBRSxFQUFFLENBQXhDO0FBQTJDLFNBQUcsWUFB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LEVBWE0sQ0FBVCxDQVowQixDQXVCbkI7O0FBRVAsU0FBT0gsVUFBUDtBQUNELENBMUJEOztJQUFNeEIsYTs7QUE0QkMsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2tCLFdBQUQsRUFBY0MsU0FBZCxFQUE0QjtBQUNwRCxNQUFHRCxXQUFXLENBQUM3QixLQUFaLElBQXFCLElBQXJCLElBQTZCOEIsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLEVBQW5ELEVBQXVEO0FBQ3JELFdBQVFELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFwQixFQUFzQixFQUF0QixJQUE0QixLQUFwQztBQUNELEdBRkQsTUFHSyxJQUFJSCxXQUFXLENBQUM3QixLQUFaLElBQXFCLElBQXJCLElBQTZCOEIsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLEVBQXBELEVBQXVEO0FBQzFELFdBQVFELFNBQVI7QUFDRCxHQUZJLENBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJLLE9Bd0JBO0FBQ0gsYUFBUUEsU0FBUjtBQUNEO0FBQ0YsQ0EvQk0sQyxDQWlDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvYXBpQ29tcG9uZW50cy9jb250YWN0SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQYXJrIH0gZnJvbSAnLi9mdW5jdGlvbkNvbnRleHRKc29uLmpzJ1xuaW1wb3J0IHsgcGFya1N0eWxlLCB3b3JkU3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbFN0eWxlLmpzJ1xuaW1wb3J0IHsgUm93LCBDb2wsIEFjY29yZGlvbiwgQ2FyZCwgQmFkZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBjb25zdCBDb250YWN0SnNvbiA9ICgpID0+IHtcbiAgY29uc3Qgd2ViQXRUaGlzTW9pbnRvclNpemUgPSB1c2VXaW5kb3dTaXplKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dlYkF0VGhpc01vaW50b3JTaXplLndpZHRofVxuICAgICAge1xuICAgICAgICAhZ2V0UGFyaygpID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgIGdldFBhcmsoKS5tYXAocGFyayA9PiAoXG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0geGw9ezR9IGtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfSBzdHlsZT17d29yZFN0eWxlfT5cbiAgICAgICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT0nZmFsc2UnPlxuICAgICAgICAgICAgICA8Q2FyZCBwYXJrPXtwYXJrfSBzdHlsZT17cGFya1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9PlxuICAgICAgICAgICAgICAgICAge3BhcmsuYXJlYU5hbWV9XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCBtLTInPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nbXItMiBtYi0xJyB2YXJpYW50PSdpbmZvJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOieouW5leWwuuWvuOaykuaciei2hemBjjEyMDBweO+8jOmhr+ekuuWujOaVtOeahEludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vICh3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwKSAmJiAocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoID4gMjApID9cbiAgICAgICAgICAgICAgICAgICAgICAvLyAocGFyay5pbnRyb2R1Y3Rpb24uc3Vic3RyaW5nKDAsMTkpICsgJy4uLicpXG4gICAgICAgICAgICAgICAgICAgICAgLy8gOiAod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPj0gMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA8PSAyMCkgP1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcmsuaW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgLy8gOiAoNzY4IDwgd2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPCAxMjAwKSAmJiAocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoID4gMjYpID8gKHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDI1KSArICcuLi4nKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIDogKDc2OCA8IHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoIDwgMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA8PSAyNikgP1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcmsuaW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgLy8gOiAod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPCA3NjgpID8gcGFyay5pbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAvLyA6IHBhcmsuaW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgaWZFbHNlRnVuYyh3ZWJBdFRoaXNNb2ludG9yU2l6ZSwgcGFyay5pbnRyb2R1Y3Rpb24pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPScnIHZhcmlhbnQ9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZkVsc2VGdW5jKHdlYkF0VGhpc01vaW50b3JTaXplLCBwYXJrLmFkZHJlc3MpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cGFyay5wYXlHdWlkZX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnXG5cbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGlzQ2xpZW50ID8gd2luZG93LmlubmVyV2lkdGggOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSgpKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gIH0sIFtdKSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgcmV0dXJuIHdpbmRvd1NpemVcbn1cblxuZXhwb3J0IGNvbnN0IGlmRWxzZUZ1bmMgPSAobW9pbnRvclNpemUsIGNoYW5nZVZhcikgPT4ge1xuICBpZihtb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPiAyMCkge1xuICAgIHJldHVybiAoY2hhbmdlVmFyLnN1YnN0cmluZygwLDE5KSArICcuLi4nKVxuICB9XG4gIGVsc2UgaWYgKG1vaW50b3JTaXplLndpZHRoID49IDEyMDAgJiYgY2hhbmdlVmFyLmxlbmd0aCA8IDIwKXtcbiAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxuICAvLyBlbHNlIGlmICg5OTAgPCBtb2ludG9yU2l6ZS53aWR0aCA8IDEyMDAgJiYgY2hhbmdlVmFyLmxlbmd0aCA+IDI1KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwyNCkgKyAnLi4uJylcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg5OTAgPCBtb2ludG9yU2l6ZS53aWR0aCA8IDEyMDAgJiYgY2hhbmdlVmFyLmxlbmd0aCA8IDI1KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhcilcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg5MTAgPCBtb2ludG9yU2l6ZS53aWR0aCA8PSA5OTAgJiYgY2hhbmdlVmFyLmxlbmd0aCA+IDI1KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwyNCkgKyAnLi4uJylcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg5MTAgPCBtb2ludG9yU2l6ZS53aWR0aCA8PSA5OTAgJiYgY2hhbmdlVmFyLmxlbmd0aCA8IDI1KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhcilcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg3NjggPCBtb2ludG9yU2l6ZS53aWR0aCA8PSA5MTAgJiYgY2hhbmdlVmFyLmxlbmd0aCA+IDI3KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwyNikgKyAnLi4uJylcbiAgLy8gfVxuICAvLyBlbHNlIGlmICg3NjggPCBtb2ludG9yU2l6ZS53aWR0aCA8PSA5MTAgJiYgY2hhbmdlVmFyLmxlbmd0aCA8IDI3KXtcbiAgLy8gICByZXR1cm4gKGNoYW5nZVZhcilcbiAgLy8gfVxuICAvLyBlbHNlIGlmIChtb2ludG9yU2l6ZS53aWR0aCA8IDc2OCl7XG4gIC8vICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIC8vIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbn1cblxuLy8gY29uc3Qgc3dpdGNoQ2FzZSA9IChzd2l0Y2hTaXplKSA9PiB7XG4vLyAgIHN3aXRjaChzd2l0Y2hTaXplLnZhbHVlKSB7XG4vLyAgICAgICBjYXNlICdBZG1pbic6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24pXG4vLyAgICAgICBjYXNlICdNYW5hZ2VyJzpcbi8vICAgICAgICAgcmV0dXJuIChwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})