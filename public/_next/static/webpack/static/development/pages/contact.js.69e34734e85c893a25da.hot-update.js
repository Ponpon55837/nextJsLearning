webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson, ifElseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifElseFunc\", function() { return ifElseFunc; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, webAtThisMointorSize.width, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, // 如果螢幕尺寸沒有超過1200px，顯示完整的Introduction\n    // (webAtThisMointorSize.width >= 1200) && (park.introduction.length > 20) ?\n    // (park.introduction.substring(0,19) + '...')\n    // : (webAtThisMointorSize.width >= 1200) && (park.introduction.length <= 20) ?\n    // park.introduction\n    // : (768 < webAtThisMointorSize.width < 1200) && (park.introduction.length > 26) ? (park.introduction.substring(0,25) + '...')\n    // : (768 < webAtThisMointorSize.width < 1200) && (park.introduction.length <= 26) ?\n    // park.introduction\n    // : (webAtThisMointorSize.width < 768) ? park.introduction\n    // : park.introduction\n    ifElseFunc(webAtThisMointorSize, park.introduction)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 19\n      }\n    }, ifElseFunc(webAtThisMointorSize, park.address))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar ifElseFunc = function ifElseFunc(mointorSize, changeVar) {\n  if (mointorSize.width >= 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (mointorSize.width >= 1200 && changeVar.length < 20) {\n    return changeVar;\n  } else if (990 < mointorSize.width < 1200 && changeVar.length > 25) {\n    return changeVar.substring(0, 24) + '...';\n  } else if (990 < mointorSize.width) {\n    return changeVar;\n  } else {\n    return changeVar;\n  }\n}; // const switchCase = (switchSize) => {\n//   switch(switchSize.value) {\n//       case 'Admin':\n//         return (park.introduction)\n//       case 'Manager':\n//         return (park.introduction.substring(0,19) + '...')\n//       default:\n//         return (park.introduction)\n//     }\n//   }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsImdldFBhcmsiLCJtYXAiLCJwYXJrIiwiYXJlYUlkIiwicGFya0lkIiwid29yZFN0eWxlIiwicGFya1N0eWxlIiwiQ2FyZCIsIkhlYWRlciIsImFyZWFOYW1lIiwiaWZFbHNlRnVuYyIsImludHJvZHVjdGlvbiIsImFkZHJlc3MiLCJwYXlHdWlkZSIsImlzQ2xpZW50IiwiZ2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ1bmRlZmluZWQiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInVzZVN0YXRlIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1vaW50b3JTaXplIiwiY2hhbmdlVmFyIiwibGVuZ3RoIiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxvQkFBb0IsR0FBR0MsYUFBYSxFQUExQztBQUNBLFNBQ0UsbUVBQ0dELG9CQUFvQixDQUFDRSxLQUR4QixFQUdJLENBQUNDLHVFQUFPLEVBQVIsR0FBYSxhQUFiLEdBQ0FBLHVFQUFPLEdBQUdDLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsV0FDaEIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRSxFQUF6QjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsUUFBRSxFQUFFLENBQXhDO0FBQTJDLFNBQUcsWUFB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LEVBWE0sQ0FBVCxDQVowQixDQXVCbkI7O0FBRVAsU0FBT0gsVUFBUDtBQUNELENBMUJEOztJQUFNeEIsYTs7QUE0QkMsSUFBTVksVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2tCLFdBQUQsRUFBY0MsU0FBZCxFQUE0QjtBQUNwRCxNQUFHRCxXQUFXLENBQUM3QixLQUFaLElBQXFCLElBQXJCLElBQTZCOEIsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLEVBQW5ELEVBQXVEO0FBQ3JELFdBQVFELFNBQVMsQ0FBQ0UsU0FBVixDQUFvQixDQUFwQixFQUFzQixFQUF0QixJQUE0QixLQUFwQztBQUNELEdBRkQsTUFHSyxJQUFJSCxXQUFXLENBQUM3QixLQUFaLElBQXFCLElBQXJCLElBQTZCOEIsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLEVBQXBELEVBQXVEO0FBQzFELFdBQVFELFNBQVI7QUFDRCxHQUZJLE1BR0EsSUFBSSxNQUFNRCxXQUFXLENBQUM3QixLQUFsQixHQUEwQixJQUExQixJQUFrQzhCLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixFQUF6RCxFQUE0RDtBQUMvRCxXQUFRRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBc0IsRUFBdEIsSUFBNEIsS0FBcEM7QUFDRCxHQUZJLE1BR0EsSUFBSSxNQUFNSCxXQUFXLENBQUM3QixLQUF0QixFQUE0QjtBQUMvQixXQUFROEIsU0FBUjtBQUNELEdBRkksTUFHQTtBQUNILFdBQVFBLFNBQVI7QUFDRDtBQUNGLENBaEJNLEMsQ0FrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2FwaUNvbXBvbmVudHMvY29udGFjdEpzb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0UGFyayB9IGZyb20gJy4vZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB7IHBhcmtTdHlsZSwgd29yZFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxTdHlsZS5qcydcbmltcG9ydCB7IFJvdywgQ29sLCBBY2NvcmRpb24sIENhcmQsIEJhZGdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgY29uc3QgQ29udGFjdEpzb24gPSAoKSA9PiB7XG4gIGNvbnN0IHdlYkF0VGhpc01vaW50b3JTaXplID0gdXNlV2luZG93U2l6ZSgpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aH1cbiAgICAgIHtcbiAgICAgICAgIWdldFBhcmsoKSA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICBnZXRQYXJrKCkubWFwKHBhcmsgPT4gKFxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9IHhsPXs0fSBrZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0gc3R5bGU9e3dvcmRTdHlsZX0+XG4gICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9J2ZhbHNlJz5cbiAgICAgICAgICAgICAgPENhcmQgcGFyaz17cGFya30gc3R5bGU9e3BhcmtTdHlsZX0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0NhcmQuSGVhZGVyfSBldmVudEtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfT5cbiAgICAgICAgICAgICAgICAgIHtwYXJrLmFyZWFOYW1lfVxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9J3RleHQtbXV0ZWQgbS0yJz5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9J21yLTIgbWItMScgdmFyaWFudD0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzonqLluZXlsLrlr7jmspLmnInotoXpgY4xMjAwcHjvvIzpoa/npLrlrozmlbTnmoRJbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAvLyAod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPj0gMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDIwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgLy8gKHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDE5KSArICcuLi4nKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIDogKHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoID49IDEyMDApICYmIChwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPD0gMjApID9cbiAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJrLmludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vIDogKDc2OCA8IHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoIDwgMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDI2KSA/IChwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwyNSkgKyAnLi4uJylcbiAgICAgICAgICAgICAgICAgICAgICAvLyA6ICg3NjggPCB3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA8IDEyMDApICYmIChwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPD0gMjYpID9cbiAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJrLmludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vIDogKHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoIDwgNzY4KSA/IHBhcmsuaW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgLy8gOiBwYXJrLmludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGlmRWxzZUZ1bmMod2ViQXRUaGlzTW9pbnRvclNpemUsIHBhcmsuaW50cm9kdWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nJyB2YXJpYW50PSdzZWNvbmRhcnknPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaWZFbHNlRnVuYyh3ZWJBdFRoaXNNb2ludG9yU2l6ZSwgcGFyay5hZGRyZXNzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5TdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9PlxuICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAge3BhcmsucGF5R3VpZGV9XG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgdXNlV2luZG93U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0J1xuXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lcldpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKGdldFNpemUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQ2xpZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBzZXRXaW5kb3dTaXplKGdldFNpemUoKSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICB9LCBbXSkgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuXG4gIHJldHVybiB3aW5kb3dTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpZkVsc2VGdW5jID0gKG1vaW50b3JTaXplLCBjaGFuZ2VWYXIpID0+IHtcbiAgaWYobW9pbnRvclNpemUud2lkdGggPj0gMTIwMCAmJiBjaGFuZ2VWYXIubGVuZ3RoID4gMjApIHtcbiAgICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbiAgfVxuICBlbHNlIGlmIChtb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPCAyMCl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSBpZiAoOTkwIDwgbW9pbnRvclNpemUud2lkdGggPCAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPiAyNSl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIuc3Vic3RyaW5nKDAsMjQpICsgJy4uLicpXG4gIH1cbiAgZWxzZSBpZiAoOTkwIDwgbW9pbnRvclNpemUud2lkdGgpe1xuICAgIHJldHVybiAoY2hhbmdlVmFyKVxuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiAoY2hhbmdlVmFyKVxuICB9XG59XG5cbi8vIGNvbnN0IHN3aXRjaENhc2UgPSAoc3dpdGNoU2l6ZSkgPT4ge1xuLy8gICBzd2l0Y2goc3dpdGNoU2l6ZS52YWx1ZSkge1xuLy8gICAgICAgY2FzZSAnQWRtaW4nOlxuLy8gICAgICAgICByZXR1cm4gKHBhcmsuaW50cm9kdWN0aW9uKVxuLy8gICAgICAgY2FzZSAnTWFuYWdlcic6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24uc3Vic3RyaW5nKDAsMTkpICsgJy4uLicpXG4vLyAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICByZXR1cm4gKHBhcmsuaW50cm9kdWN0aW9uKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})