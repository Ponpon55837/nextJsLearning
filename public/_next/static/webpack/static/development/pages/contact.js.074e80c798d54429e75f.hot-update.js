webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, webAtThisMointorSize.width, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, // 如果螢幕尺寸沒有超過1200px，顯示完整的Introduction\n    // !(webAtThisMointorSize.width > 1200) ? park.introduction :\n    // !(park.introduction.length > 20) ? park.introduction :\n    // park.introduction.substring(0,19) + '...'\n    webAtThisMointorSize.width >= 1200 && park.introduction.length > 20 ? park.introduction.substring(0, 19) + '...' : webAtThisMointorSize.width >= 1200 && park.introduction.length <= 20 ? park.introduction : 768 < webAtThisMointorSize.width < 1200 && park.introduction.length > 26 ? park.introduction.substring(0, 25) + '...' : 768 < webAtThisMointorSize.width < 1200 && park.introduction.length <= 26 ? park.introduction : ''), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 19\n      }\n    }, !(park.address.length > 19) ? park.address : park.address.substring(0, 19), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 21\n      }\n    }), !(park.address.length > 19) ? '' : park.address.substring(19, 100))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n}; // const switchCase = (switchSize) => {\n//   switch(switchSize.value) {\n//       case 'Admin':\n//         return (park.introduction)\n//       case 'Manager':\n//         return (park.introduction.substring(0,19) + '...')\n//       default:\n//         return (park.introduction)\n//     }\n//   }\n// }\n\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsImdldFBhcmsiLCJtYXAiLCJwYXJrIiwiYXJlYUlkIiwicGFya0lkIiwid29yZFN0eWxlIiwicGFya1N0eWxlIiwiQ2FyZCIsIkhlYWRlciIsImFyZWFOYW1lIiwiaW50cm9kdWN0aW9uIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYWRkcmVzcyIsInBheUd1aWRlIiwiaXNDbGllbnQiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQy9CLE1BQU1DLG9CQUFvQixHQUFHQyxhQUFhLEVBQTFDO0FBQ0EsU0FDRSxtRUFDR0Qsb0JBQW9CLENBQUNFLEtBRHhCLEVBR0ksQ0FBQ0MsdUVBQU8sRUFBUixHQUFhLGFBQWIsR0FDQUEsdUVBQU8sR0FBR0MsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSxXQUNoQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLEVBQXpCO0FBQTZCLFFBQUUsRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBMkMsU0FBRyxZQUFLQSxJQUFJLENBQUNDLE1BQVYsZ0JBQXNCRCxJQUFJLENBQUNFLE1B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RixDQWhDRixDQURGLENBREYsQ0FEZ0I7QUFBQSxHQUFsQixDQUpKLENBREY7QUFvREQsQ0F0RE07O0dBQU1sQixXO1VBQ2tCRSxhOzs7S0FEbEJGLFc7O0FBd0RiLElBQU1FLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUMxQixNQUFNaUIsUUFBUSxPQUFkOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEIsV0FBTztBQUNMakIsV0FBSyxFQUFFZ0IsUUFBUSxHQUFHRSxNQUFNLENBQUNDLFVBQVYsR0FBdUJDLFNBRGpDO0FBRUxDLFlBQU0sRUFBRUwsUUFBUSxHQUFHRSxNQUFNLENBQUNJLFdBQVYsR0FBd0JGO0FBRm5DLEtBQVA7QUFJRCxHQUxEOztBQUgwQixrQkFVVUcsc0RBQVEsQ0FBQ04sT0FBRCxDQVZsQjtBQUFBLE1BVW5CTyxVQVZtQjtBQUFBLE1BVVBDLGFBVk87O0FBWTFCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNWLFFBQUwsRUFBZTtBQUNiLGFBQU8sS0FBUDtBQUNEOztBQUVELGFBQVNXLFlBQVQsR0FBd0I7QUFDdEJGLG1CQUFhLENBQUNSLE9BQU8sRUFBUixDQUFiO0FBQ0Q7O0FBRURDLFVBQU0sQ0FBQ1UsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NELFlBQWxDO0FBQ0EsV0FBTztBQUFBLGFBQU1ULE1BQU0sQ0FBQ1csbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDLENBQU47QUFBQSxLQUFQO0FBQ0QsR0FYUSxFQVdOLEVBWE0sQ0FBVCxDQVowQixDQXVCbkI7O0FBRVAsU0FBT0gsVUFBUDtBQUNELENBMUJELEMsQ0E0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0lBdENNekIsYSIsImZpbGUiOiIuL3BhZ2VzL2FwaUNvbXBvbmVudHMvY29udGFjdEpzb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZ2V0UGFyayB9IGZyb20gJy4vZnVuY3Rpb25Db250ZXh0SnNvbi5qcydcbmltcG9ydCB7IHBhcmtTdHlsZSwgd29yZFN0eWxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxTdHlsZS5qcydcbmltcG9ydCB7IFJvdywgQ29sLCBBY2NvcmRpb24sIENhcmQsIEJhZGdlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG5leHBvcnQgY29uc3QgQ29udGFjdEpzb24gPSAoKSA9PiB7XG4gIGNvbnN0IHdlYkF0VGhpc01vaW50b3JTaXplID0gdXNlV2luZG93U2l6ZSgpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aH1cbiAgICAgIHtcbiAgICAgICAgIWdldFBhcmsoKSA/ICdMb2FkaW5nIC4uLicgOlxuICAgICAgICBnZXRQYXJrKCkubWFwKHBhcmsgPT4gKFxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXsxMn0gbGc9ezZ9IHhsPXs0fSBrZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0gc3R5bGU9e3dvcmRTdHlsZX0+XG4gICAgICAgICAgICA8QWNjb3JkaW9uIGRlZmF1bHRBY3RpdmVLZXk9J2ZhbHNlJz5cbiAgICAgICAgICAgICAgPENhcmQgcGFyaz17cGFya30gc3R5bGU9e3BhcmtTdHlsZX0+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Ub2dnbGUgYXM9e0NhcmQuSGVhZGVyfSBldmVudEtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfT5cbiAgICAgICAgICAgICAgICAgIHtwYXJrLmFyZWFOYW1lfVxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLlRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8Q2FyZC5TdWJ0aXRsZSBjbGFzc05hbWU9J3RleHQtbXV0ZWQgbS0yJz5cbiAgICAgICAgICAgICAgICAgIDxCYWRnZSBjbGFzc05hbWU9J21yLTIgbWItMScgdmFyaWFudD0naW5mbyc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzonqLluZXlsLrlr7jmspLmnInotoXpgY4xMjAwcHjvvIzpoa/npLrlrozmlbTnmoRJbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAvLyAhKHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoID4gMTIwMCkgPyBwYXJrLmludHJvZHVjdGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgLy8gIShwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPiAyMCkgPyBwYXJrLmludHJvZHVjdGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgLy8gcGFyay5pbnRyb2R1Y3Rpb24uc3Vic3RyaW5nKDAsMTkpICsgJy4uLidcbiAgICAgICAgICAgICAgICAgICAgICAod2ViQXRUaGlzTW9pbnRvclNpemUud2lkdGggPj0gMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDIwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgKHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDE5KSArICcuLi4nKVxuICAgICAgICAgICAgICAgICAgICAgIDogKHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoID49IDEyMDApICYmIChwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPD0gMjApID9cbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmludHJvZHVjdGlvblxuICAgICAgICAgICAgICAgICAgICAgIDogKDc2OCA8IHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoIDwgMTIwMCkgJiYgKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDI2KSA/IChwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwyNSkgKyAnLi4uJylcbiAgICAgICAgICAgICAgICAgICAgICA6ICg3NjggPCB3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA8IDEyMDApICYmIChwYXJrLmludHJvZHVjdGlvbi5sZW5ndGggPD0gMjYpID9cbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmludHJvZHVjdGlvbiA6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPScnIHZhcmlhbnQ9J3NlY29uZGFyeSc+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAhKHBhcmsuYWRkcmVzcy5sZW5ndGggPiAxOSkgPyBwYXJrLmFkZHJlc3MgOlxuICAgICAgICAgICAgICAgICAgICAgIHBhcmsuYWRkcmVzcy5zdWJzdHJpbmcoMCwxOSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICEocGFyay5hZGRyZXNzLmxlbmd0aCA+IDE5KSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmFkZHJlc3Muc3Vic3RyaW5nKDE5LDEwMClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L0NhcmQuU3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbi5Db2xsYXBzZSBldmVudEtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtwYXJrLnBheUd1aWRlfVxuICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uQ29sbGFwc2U+XG4gICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IHVzZVdpbmRvd1NpemUgPSAoKSA9PiB7XG4gIGNvbnN0IGlzQ2xpZW50ID0gdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCdcblxuICBjb25zdCBnZXRTaXplID0gKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogaXNDbGllbnQgPyB3aW5kb3cuaW5uZXJIZWlnaHQgOiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZShnZXRTaXplKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0NsaWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93U2l6ZShnZXRTaXplKCkpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSlcbiAgfSwgW10pIC8vIEVtcHR5IGFycmF5IGVuc3VyZXMgdGhhdCBlZmZlY3QgaXMgb25seSBydW4gb24gbW91bnQgYW5kIHVubW91bnRcblxuICByZXR1cm4gd2luZG93U2l6ZVxufVxuXG4vLyBjb25zdCBzd2l0Y2hDYXNlID0gKHN3aXRjaFNpemUpID0+IHtcbi8vICAgc3dpdGNoKHN3aXRjaFNpemUudmFsdWUpIHtcbi8vICAgICAgIGNhc2UgJ0FkbWluJzpcbi8vICAgICAgICAgcmV0dXJuIChwYXJrLmludHJvZHVjdGlvbilcbi8vICAgICAgIGNhc2UgJ01hbmFnZXInOlxuLy8gICAgICAgICByZXR1cm4gKHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDE5KSArICcuLi4nKVxuLy8gICAgICAgZGVmYXVsdDpcbi8vICAgICAgICAgcmV0dXJuIChwYXJrLmludHJvZHVjdGlvbilcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})