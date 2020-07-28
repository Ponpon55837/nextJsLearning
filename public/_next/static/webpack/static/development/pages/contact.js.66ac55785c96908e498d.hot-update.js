webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, webAtThisMointorSize.width, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, // 如果螢幕尺寸沒有超過1200px，顯示完整的Introduction\n    // !(webAtThisMointorSize.width > 1200) ? park.introduction :\n    // !(park.introduction.length > 20) ? park.introduction :\n    // park.introduction.substring(0,19) + '...'\n    webAtThisMointorSize.width >= 1200 && park.introduction.length > 20 ? park.introduction.substring(0, 19) + '...' : webAtThisMointorSize.width >= 1200 && park.introduction.length <= 20 ? park.introduction : 768 < webAtThisMointorSize.width < 1200 && park.introduction.length > 26 ? park.introduction.substring(0, 25) + '...' : 768 < webAtThisMointorSize.width < 1200 && park.introduction.length <= 26 ? park.introduction : webAtThisMointorSize.width < 768 ? park.introduction : park.introduction), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 19\n      }\n    }, !(park.address.length > 19) ? park.address : park.address.substring(0, 19), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 21\n      }\n    }), !(park.address.length > 19) ? '' : park.address.substring(19, 100))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n}; // const switchCase = (switchSize) => {\n//   switch(switchSize.value) {\n//       case 'Admin':\n//         return (park.introduction)\n//       case 'Manager':\n//         return (park.introduction.substring(0,19) + '...')\n//       default:\n//         return (park.introduction)\n//     }\n//   }\n// }\n\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsImdldFBhcmsiLCJtYXAiLCJwYXJrIiwiYXJlYUlkIiwicGFya0lkIiwid29yZFN0eWxlIiwicGFya1N0eWxlIiwiQ2FyZCIsIkhlYWRlciIsImFyZWFOYW1lIiwiaW50cm9kdWN0aW9uIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYWRkcmVzcyIsInBheUd1aWRlIiwiaXNDbGllbnQiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQy9CLE1BQU1DLG9CQUFvQixHQUFHQyxhQUFhLEVBQTFDO0FBQ0EsU0FDRSxtRUFDR0Qsb0JBQW9CLENBQUNFLEtBRHhCLEVBR0ksQ0FBQ0MsdUVBQU8sRUFBUixHQUFhLGFBQWIsR0FDQUEsdUVBQU8sR0FBR0MsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSxXQUNoQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLEVBQXpCO0FBQTZCLFFBQUUsRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBMkMsU0FBRyxZQUFLQSxJQUFJLENBQUNDLE1BQVYsZ0JBQXNCRCxJQUFJLENBQUNFLE1B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ZW50cy9jb250YWN0SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQYXJrIH0gZnJvbSAnLi9mdW5jdGlvbkNvbnRleHRKc29uLmpzJ1xuaW1wb3J0IHsgcGFya1N0eWxlLCB3b3JkU3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbFN0eWxlLmpzJ1xuaW1wb3J0IHsgUm93LCBDb2wsIEFjY29yZGlvbiwgQ2FyZCwgQmFkZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBjb25zdCBDb250YWN0SnNvbiA9ICgpID0+IHtcbiAgY29uc3Qgd2ViQXRUaGlzTW9pbnRvclNpemUgPSB1c2VXaW5kb3dTaXplKClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3dlYkF0VGhpc01vaW50b3JTaXplLndpZHRofVxuICAgICAge1xuICAgICAgICAhZ2V0UGFyaygpID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgIGdldFBhcmsoKS5tYXAocGFyayA9PiAoXG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0geGw9ezR9IGtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfSBzdHlsZT17d29yZFN0eWxlfT5cbiAgICAgICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT0nZmFsc2UnPlxuICAgICAgICAgICAgICA8Q2FyZCBwYXJrPXtwYXJrfSBzdHlsZT17cGFya1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9PlxuICAgICAgICAgICAgICAgICAge3BhcmsuYXJlYU5hbWV9XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCBtLTInPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nbXItMiBtYi0xJyB2YXJpYW50PSdpbmZvJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOieouW5leWwuuWvuOaykuaciei2hemBjjEyMDBweO+8jOmhr+ekuuWujOaVtOeahEludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIC8vICEod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPiAxMjAwKSA/IHBhcmsuaW50cm9kdWN0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAvLyAhKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDIwKSA/IHBhcmsuaW50cm9kdWN0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJ1xuICAgICAgICAgICAgICAgICAgICAgICh3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA+PSAxMjAwKSAmJiAocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoID4gMjApID9cbiAgICAgICAgICAgICAgICAgICAgICAocGFyay5pbnRyb2R1Y3Rpb24uc3Vic3RyaW5nKDAsMTkpICsgJy4uLicpXG4gICAgICAgICAgICAgICAgICAgICAgOiAod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPj0gMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA8PSAyMCkgP1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmsuaW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgOiAoNzY4IDwgd2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPCAxMjAwKSAmJiAocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoID4gMjYpID8gKHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDI1KSArICcuLi4nKVxuICAgICAgICAgICAgICAgICAgICAgIDogKDc2OCA8IHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoIDwgMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA8PSAyNikgP1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmsuaW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgOiAod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPCA3NjgpID8gcGFyay5pbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICA6IHBhcmsuaW50cm9kdWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nJyB2YXJpYW50PSdzZWNvbmRhcnknPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgIShwYXJrLmFkZHJlc3MubGVuZ3RoID4gMTkpID8gcGFyay5hZGRyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmFkZHJlc3Muc3Vic3RyaW5nKDAsMTkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAhKHBhcmsuYWRkcmVzcy5sZW5ndGggPiAxOSkgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgcGFyay5hZGRyZXNzLnN1YnN0cmluZygxOSwxMDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cGFyay5wYXlHdWlkZX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnXG5cbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGlzQ2xpZW50ID8gd2luZG93LmlubmVyV2lkdGggOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSgpKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gIH0sIFtdKSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgcmV0dXJuIHdpbmRvd1NpemVcbn1cblxuLy8gY29uc3Qgc3dpdGNoQ2FzZSA9IChzd2l0Y2hTaXplKSA9PiB7XG4vLyAgIHN3aXRjaChzd2l0Y2hTaXplLnZhbHVlKSB7XG4vLyAgICAgICBjYXNlICdBZG1pbic6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24pXG4vLyAgICAgICBjYXNlICdNYW5hZ2VyJzpcbi8vICAgICAgICAgcmV0dXJuIChwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbi8vICAgICAgIGRlZmF1bHQ6XG4vLyAgICAgICAgIHJldHVybiAocGFyay5pbnRyb2R1Y3Rpb24pXG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})