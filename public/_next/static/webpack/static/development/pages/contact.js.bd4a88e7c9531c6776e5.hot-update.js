webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson, ifElseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ifElseFunc\", function() { return ifElseFunc; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, webAtThisMointorSize.width, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, // 如果螢幕尺寸沒有超過1200px，顯示完整的Introduction\n    webAtThisMointorSize.width >= 1200 && park.introduction.length > 20 ? park.introduction.substring(0, 19) + '...' : webAtThisMointorSize.width >= 1200 && park.introduction.length <= 20 ? park.introduction : 768 < webAtThisMointorSize.width < 1200 && park.introduction.length > 26 ? park.introduction.substring(0, 25) + '...' : 768 < webAtThisMointorSize.width < 1200 && park.introduction.length <= 26 ? park.introduction : webAtThisMointorSize.width < 768 ? park.introduction : park.introduction), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 19\n      }\n    }, !(park.address.length > 19) ? park.address : park.address.substring(0, 19), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 21\n      }\n    }), !(park.address.length > 19) ? '' : park.address.substring(19, 100))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar ifElseFunc = function ifElseFunc(mointorSize, changeVar) {\n  if (mointorSize.width >= 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (mointorSize.width >= 1200 && changeVar.length < 20) {\n    return changeVar;\n  } else if (768 < mointorSize.width < 1200 && changeVar.length > 20) {\n    return changeVar.substring(0, 19) + '...';\n  } else if (768 < mointorSize.width < 1200 && changeVar.length < 20) {\n    return changeVar;\n  } else if (mointorSize.width <= 768 && changeVar.length > 26) {\n    return changeVar.substring(0, 25) + '...';\n  } else if (mointorSize.width <= 768 && changeVar.length < 26) {\n    return changeVar;\n  } else {\n    return changeVar;\n  }\n}; // const switchCase = (switchSize) => {\n//   switch(switchSize.value) {\n//       case 'Admin':\n//         return (park.introduction)\n//       case 'Manager':\n//         return (park.introduction.substring(0,19) + '...')\n//       default:\n//         return (park.introduction)\n//     }\n//   }\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsImdldFBhcmsiLCJtYXAiLCJwYXJrIiwiYXJlYUlkIiwicGFya0lkIiwid29yZFN0eWxlIiwicGFya1N0eWxlIiwiQ2FyZCIsIkhlYWRlciIsImFyZWFOYW1lIiwiaW50cm9kdWN0aW9uIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYWRkcmVzcyIsInBheUd1aWRlIiwiaXNDbGllbnQiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaWZFbHNlRnVuYyIsIm1vaW50b3JTaXplIiwiY2hhbmdlVmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxvQkFBb0IsR0FBR0MsYUFBYSxFQUExQztBQUNBLFNBQ0UsbUVBQ0dELG9CQUFvQixDQUFDRSxLQUR4QixFQUdJLENBQUNDLHVFQUFPLEVBQVIsR0FBYSxhQUFiLEdBQ0FBLHVFQUFPLEdBQUdDLEdBQVYsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsV0FDaEIsTUFBQyxtREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQWEsUUFBRSxFQUFFLEVBQWpCO0FBQXFCLFFBQUUsRUFBRSxFQUF6QjtBQUE2QixRQUFFLEVBQUUsQ0FBakM7QUFBb0MsUUFBRSxFQUFFLENBQXhDO0FBQTJDLFNBQUcsWUFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBhcmsgfSBmcm9tICcuL2Z1bmN0aW9uQ29udGV4dEpzb24uanMnXG5pbXBvcnQgeyBwYXJrU3R5bGUsIHdvcmRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy91dGlsU3R5bGUuanMnXG5pbXBvcnQgeyBSb3csIENvbCwgQWNjb3JkaW9uLCBDYXJkLCBCYWRnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RKc29uID0gKCkgPT4ge1xuICBjb25zdCB3ZWJBdFRoaXNNb2ludG9yU2l6ZSA9IHVzZVdpbmRvd1NpemUoKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7d2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGh9XG4gICAgICB7XG4gICAgICAgICFnZXRQYXJrKCkgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgZ2V0UGFyaygpLm1hcChwYXJrID0+IChcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSB4bD17NH0ga2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9IHN0eWxlPXt3b3JkU3R5bGV9PlxuICAgICAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PSdmYWxzZSc+XG4gICAgICAgICAgICAgIDxDYXJkIHBhcms9e3Bhcmt9IHN0eWxlPXtwYXJrU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICB7cGFyay5hcmVhTmFtZX1cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPSd0ZXh0LW11dGVkIG0tMic+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPSdtci0yIG1iLTEnIHZhcmlhbnQ9J2luZm8nPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6J6i5bmV5bC65a+45rKS5pyJ6LaF6YGOMTIwMHB477yM6aGv56S65a6M5pW055qESW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoID49IDEyMDApICYmIChwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPiAyMCkgP1xuICAgICAgICAgICAgICAgICAgICAgIChwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbiAgICAgICAgICAgICAgICAgICAgICA6ICh3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwKSAmJiAocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoIDw9IDIwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcGFyay5pbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA6ICg3NjggPCB3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA8IDEyMDApICYmIChwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPiAyNikgPyAocGFyay5pbnRyb2R1Y3Rpb24uc3Vic3RyaW5nKDAsMjUpICsgJy4uLicpXG4gICAgICAgICAgICAgICAgICAgICAgOiAoNzY4IDwgd2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPCAxMjAwKSAmJiAocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoIDw9IDI2KSA/XG4gICAgICAgICAgICAgICAgICAgICAgcGFyay5pbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA6ICh3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA8IDc2OCkgPyBwYXJrLmludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDogcGFyay5pbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9JycgdmFyaWFudD0nc2Vjb25kYXJ5Jz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICEocGFyay5hZGRyZXNzLmxlbmd0aCA+IDE5KSA/IHBhcmsuYWRkcmVzcyA6XG4gICAgICAgICAgICAgICAgICAgICAgcGFyay5hZGRyZXNzLnN1YnN0cmluZygwLDE5KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgIShwYXJrLmFkZHJlc3MubGVuZ3RoID4gMTkpID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgIHBhcmsuYWRkcmVzcy5zdWJzdHJpbmcoMTksMTAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgIDwvQ2FyZC5TdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLkNvbGxhcHNlIGV2ZW50S2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9PlxuICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cbiAgICAgICAgICAgICAgICAgICAge3BhcmsucGF5R3VpZGV9XG4gICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgdXNlV2luZG93U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgaXNDbGllbnQgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0J1xuXG4gIGNvbnN0IGdldFNpemUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lcldpZHRoIDogdW5kZWZpbmVkLFxuICAgICAgaGVpZ2h0OiBpc0NsaWVudCA/IHdpbmRvdy5pbm5lckhlaWdodCA6IHVuZGVmaW5lZFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKGdldFNpemUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzQ2xpZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICBzZXRXaW5kb3dTaXplKGdldFNpemUoKSlcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKVxuICB9LCBbXSkgLy8gRW1wdHkgYXJyYXkgZW5zdXJlcyB0aGF0IGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuXG4gIHJldHVybiB3aW5kb3dTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpZkVsc2VGdW5jID0gKG1vaW50b3JTaXplLCBjaGFuZ2VWYXIpID0+IHtcbiAgaWYobW9pbnRvclNpemUud2lkdGggPj0gMTIwMCAmJiBjaGFuZ2VWYXIubGVuZ3RoID4gMjApIHtcbiAgICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbiAgfVxuICBlbHNlIGlmIChtb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPCAyMCl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSBpZiAoNzY4IDwgbW9pbnRvclNpemUud2lkdGggPCAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPiAyMCl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIuc3Vic3RyaW5nKDAsMTkpICsgJy4uLicpXG4gIH1cbiAgZWxzZSBpZiAoNzY4IDwgbW9pbnRvclNpemUud2lkdGggPCAxMjAwICYmIGNoYW5nZVZhci5sZW5ndGggPCAyMCl7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSBpZiAobW9pbnRvclNpemUud2lkdGggPD0gNzY4ICYmIGNoYW5nZVZhci5sZW5ndGggPiAyNil7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIuc3Vic3RyaW5nKDAsMjUpICsgJy4uLicpXG4gIH1cbiAgZWxzZSBpZiAobW9pbnRvclNpemUud2lkdGggPD0gNzY4ICYmIGNoYW5nZVZhci5sZW5ndGggPCAyNil7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuIChjaGFuZ2VWYXIpXG4gIH1cbn1cblxuLy8gY29uc3Qgc3dpdGNoQ2FzZSA9IChzd2l0Y2hTaXplKSA9PiB7XG4vLyAgIHN3aXRjaChzd2l0Y2hTaXplLnZhbHVlKSB7XG4vLyAgICAgICBjYXNlICdBZG1pbic6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24pXG4vLyAgICAgICBjYXNlICdNYW5hZ2VyJzpcbi8vICAgICAgICAgcmV0dXJuIChwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})