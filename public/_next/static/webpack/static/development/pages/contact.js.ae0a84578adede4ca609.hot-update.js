webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var webAtThisMointorSize = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, // 如果螢幕尺寸沒有超過1200px，顯示完整的Introduction\n    webAtThisMointorSize.width > 1200 ? __jsx(SwitchCase, {\n      value: 'Admin',\n      changeVar: park.introduction,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 23\n      }\n    }) : 1200 > webAtThisMointorSize.width > 768 ? park.introduction : park.introduction.substring(0, 19) + '...'), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 19\n      }\n    }, !(park.address.length > 19) ? park.address : park.address.substring(0, 19), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }\n    }), !(park.address.length > 19) ? '' : park.address.substring(19, 100))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"R59AcEGtVlUUwkIfdksZ/Pk8Ap4=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar SwitchCase = function SwitchCase(switchSize, changeVar) {\n  switch (switchSize.value) {\n    case 'Admin':\n      return changeVar.substring(0, 19) + '...';\n\n    case 'Manager':\n      return changeVar;\n\n    default:\n      return changeVar;\n  }\n};\n\n_c2 = SwitchCase;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ContactJson\");\n$RefreshReg$(_c2, \"SwitchCase\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJ3ZWJBdFRoaXNNb2ludG9yU2l6ZSIsInVzZVdpbmRvd1NpemUiLCJnZXRQYXJrIiwibWFwIiwicGFyayIsImFyZWFJZCIsInBhcmtJZCIsIndvcmRTdHlsZSIsInBhcmtTdHlsZSIsIkNhcmQiLCJIZWFkZXIiLCJhcmVhTmFtZSIsIndpZHRoIiwiaW50cm9kdWN0aW9uIiwic3Vic3RyaW5nIiwiYWRkcmVzcyIsImxlbmd0aCIsInBheUd1aWRlIiwiaXNDbGllbnQiLCJnZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInVuZGVmaW5lZCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwidXNlU3RhdGUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsInVzZUVmZmVjdCIsImhhbmRsZVJlc2l6ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiU3dpdGNoQ2FzZSIsInN3aXRjaFNpemUiLCJjaGFuZ2VWYXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUMvQixNQUFNQyxvQkFBb0IsR0FBR0MsYUFBYSxFQUExQztBQUVBLFNBQ0UsbUVBRUksQ0FBQ0MsdUVBQU8sRUFBUixHQUFhLGFBQWIsR0FDQUEsdUVBQU8sR0FBR0MsR0FBVixDQUFjLFVBQUFDLElBQUk7QUFBQSxXQUNoQixNQUFDLG1EQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBYSxRQUFFLEVBQUUsRUFBakI7QUFBcUIsUUFBRSxFQUFFLEVBQXpCO0FBQTZCLFFBQUUsRUFBRSxDQUFqQztBQUFvQyxRQUFFLEVBQUUsQ0FBeEM7QUFBMkMsU0FBRyxZQUFLQSxJQUFJLENBQUNDLE1BQVYs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QztBQUVMQyxZQUFNLEVBQUVMLFFBQVEsR0FBR0UsTUFBTSxDQUFDSSxXQUFWLEdBQXdCRjtBQUZuQyxLQUFQO0FBSUQsR0FMRDs7QUFIMEIsa0JBVVVHLHNEQUFRLENBQUNOLE9BQUQsQ0FWbEI7QUFBQSxNQVVuQk8sVUFWbUI7QUFBQSxNQVVQQyxhQVZPOztBQVkxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYixhQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFTVyxZQUFULEdBQXdCO0FBQ3RCRixtQkFBYSxDQUFDUixPQUFPLEVBQVIsQ0FBYjtBQUNEOztBQUVEQyxVQUFNLENBQUNVLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNVCxNQUFNLENBQUNXLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FaMEIsQ0F1Qm5COztBQUVQLFNBQU9ILFVBQVA7QUFDRCxDQTFCRDs7SUFBTXpCLGE7O0FBNEJOLElBQU0rQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxVQUFELEVBQWFDLFNBQWIsRUFBMkI7QUFDNUMsVUFBT0QsVUFBVSxDQUFDRSxLQUFsQjtBQUNFLFNBQUssT0FBTDtBQUNFLGFBQVFELFNBQVMsQ0FBQ3BCLFNBQVYsQ0FBb0IsQ0FBcEIsRUFBc0IsRUFBdEIsSUFBNEIsS0FBcEM7O0FBQ0YsU0FBSyxTQUFMO0FBQ0UsYUFBUW9CLFNBQVI7O0FBQ0Y7QUFDRSxhQUFRQSxTQUFSO0FBTko7QUFRRCxDQVREOztNQUFNRixVIiwiZmlsZSI6Ii4vcGFnZXMvYXBpQ29tcG9uZW50cy9jb250YWN0SnNvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBnZXRQYXJrIH0gZnJvbSAnLi9mdW5jdGlvbkNvbnRleHRKc29uLmpzJ1xuaW1wb3J0IHsgcGFya1N0eWxlLCB3b3JkU3R5bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbFN0eWxlLmpzJ1xuaW1wb3J0IHsgUm93LCBDb2wsIEFjY29yZGlvbiwgQ2FyZCwgQmFkZ2UgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBjb25zdCBDb250YWN0SnNvbiA9ICgpID0+IHtcbiAgY29uc3Qgd2ViQXRUaGlzTW9pbnRvclNpemUgPSB1c2VXaW5kb3dTaXplKClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgICFnZXRQYXJrKCkgPyAnTG9hZGluZyAuLi4nIDpcbiAgICAgICAgZ2V0UGFyaygpLm1hcChwYXJrID0+IChcbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17MTJ9IGxnPXs2fSB4bD17NH0ga2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9IHN0eWxlPXt3b3JkU3R5bGV9PlxuICAgICAgICAgICAgPEFjY29yZGlvbiBkZWZhdWx0QWN0aXZlS2V5PSdmYWxzZSc+XG4gICAgICAgICAgICAgIDxDYXJkIHBhcms9e3Bhcmt9IHN0eWxlPXtwYXJrU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uVG9nZ2xlIGFzPXtDYXJkLkhlYWRlcn0gZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICB7cGFyay5hcmVhTmFtZX1cbiAgICAgICAgICAgICAgICA8L0FjY29yZGlvbi5Ub2dnbGU+XG4gICAgICAgICAgICAgICAgPENhcmQuU3VidGl0bGUgY2xhc3NOYW1lPSd0ZXh0LW11dGVkIG0tMic+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgY2xhc3NOYW1lPSdtci0yIG1iLTEnIHZhcmlhbnQ9J2luZm8nPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c6J6i5bmV5bC65a+45rKS5pyJ6LaF6YGOMTIwMHB477yM6aGv56S65a6M5pW055qESW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKHdlYkF0VGhpc01vaW50b3JTaXplLndpZHRoID4gMTIwMCkgP1xuICAgICAgICAgICAgICAgICAgICAgIDxTd2l0Y2hDYXNlIHZhbHVlPXsnQWRtaW4nfSBjaGFuZ2VWYXI9e3BhcmsuaW50cm9kdWN0aW9ufSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgKDEyMDAgPiB3ZWJBdFRoaXNNb2ludG9yU2l6ZS53aWR0aCA+NzY4KSA/IHBhcmsuaW50cm9kdWN0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nJyB2YXJpYW50PSdzZWNvbmRhcnknPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgIShwYXJrLmFkZHJlc3MubGVuZ3RoID4gMTkpID8gcGFyay5hZGRyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmFkZHJlc3Muc3Vic3RyaW5nKDAsMTkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAhKHBhcmsuYWRkcmVzcy5sZW5ndGggPiAxOSkgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgcGFyay5hZGRyZXNzLnN1YnN0cmluZygxOSwxMDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cGFyay5wYXlHdWlkZX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnXG5cbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGlzQ2xpZW50ID8gd2luZG93LmlubmVyV2lkdGggOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSgpKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gIH0sIFtdKSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgcmV0dXJuIHdpbmRvd1NpemVcbn1cblxuY29uc3QgU3dpdGNoQ2FzZSA9IChzd2l0Y2hTaXplLCBjaGFuZ2VWYXIpID0+IHtcbiAgc3dpdGNoKHN3aXRjaFNpemUudmFsdWUpIHtcbiAgICBjYXNlICdBZG1pbic6XG4gICAgICByZXR1cm4gKGNoYW5nZVZhci5zdWJzdHJpbmcoMCwxOSkgKyAnLi4uJylcbiAgICBjYXNlICdNYW5hZ2VyJzpcbiAgICAgIHJldHVybiAoY2hhbmdlVmFyKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gKGNoYW5nZVZhcilcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})