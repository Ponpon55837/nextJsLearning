webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/apiComponents/contactJson.js":
/*!********************************************!*\
  !*** ./pages/apiComponents/contactJson.js ***!
  \********************************************/
/*! exports provided: ContactJson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContactJson\", function() { return ContactJson; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionContextJson.js */ \"./pages/apiComponents/functionContextJson.js\");\n/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utilStyle.js */ \"./styles/utilStyle.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ponpon55837/program/nextJsPublic/next-learn-demo/next_9.4/pages/apiComponents/contactJson.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ContactJson = function ContactJson() {\n  _s();\n\n  var size = useWindowSize();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])() ? 'Loading ...' : Object(_functionContextJson_js__WEBPACK_IMPORTED_MODULE_1__[\"getPark\"])().map(function (park) {\n    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n      xs: 12,\n      sm: 12,\n      md: 12,\n      lg: 6,\n      xl: 4,\n      key: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"wordStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"], {\n      defaultActiveKey: \"false\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"], {\n      park: park,\n      style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_2__[\"parkStyle\"],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 15\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Toggle, {\n      as: react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Header,\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }\n    }, park.areaName), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Subtitle, {\n      className: \"text-muted m-2\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"mr-2 mb-1\",\n      variant: \"info\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, !(size.width > 1200) && !(park.introduction.length > 19) ? park.introduction : park.introduction.substring(0, 19) + '...', __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 21\n      }\n    }), !(park.introduction.length > 19) ? '' : park.introduction.substring(19, 100)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Badge\"], {\n      className: \"\",\n      variant: \"secondary\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 19\n      }\n    }, !(park.address.length > 19) ? park.address : park.address.substring(0, 19), __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }\n    }), !(park.address.length > 19) ? '' : park.address.substring(19, 100))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Accordion\"].Collapse, {\n      eventKey: \"\".concat(park.areaId, \" + \").concat(park.parkId),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }\n    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Card\"].Body, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 19\n      }\n    }, park.payGuide)))));\n  }));\n};\n\n_s(ContactJson, \"/dTDjnwlNGsRzu12Dr5t7HJe8sA=\", false, function () {\n  return [useWindowSize];\n});\n\n_c = ContactJson;\n\nvar useWindowSize = function useWindowSize() {\n  _s2();\n\n  var isClient = true;\n\n  var getSize = function getSize() {\n    return {\n      width: isClient ? window.innerWidth : undefined,\n      height: isClient ? window.innerHeight : undefined\n    };\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getSize),\n      windowSize = _useState[0],\n      setWindowSize = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!isClient) {\n      return false;\n    }\n\n    function handleResize() {\n      setWindowSize(getSize());\n    }\n\n    window.addEventListener('resize', handleResize);\n    return function () {\n      return window.removeEventListener('resize', handleResize);\n    };\n  }, []); // Empty array ensures that effect is only run on mount and unmount\n\n  return windowSize;\n};\n\n_s2(useWindowSize, \"BavKeL6E6tNTiGKbwq7Pn4eTing=\");\n\nvar _c;\n\n$RefreshReg$(_c, \"ContactJson\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzPzY0MzYiXSwibmFtZXMiOlsiQ29udGFjdEpzb24iLCJzaXplIiwidXNlV2luZG93U2l6ZSIsImdldFBhcmsiLCJtYXAiLCJwYXJrIiwiYXJlYUlkIiwicGFya0lkIiwid29yZFN0eWxlIiwicGFya1N0eWxlIiwiQ2FyZCIsIkhlYWRlciIsImFyZWFOYW1lIiwid2lkdGgiLCJpbnRyb2R1Y3Rpb24iLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJhZGRyZXNzIiwicGF5R3VpZGUiLCJpc0NsaWVudCIsImdldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1c2VTdGF0ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHQyxhQUFhLEVBQTFCO0FBRUEsU0FDRSxtRUFFSSxDQUFDQyx1RUFBTyxFQUFSLEdBQWEsYUFBYixHQUNBQSx1RUFBTyxHQUFHQyxHQUFWLENBQWMsVUFBQUMsSUFBSTtBQUFBLFdBQ2hCLE1BQUMsbURBQUQ7QUFBSyxRQUFFLEVBQUUsRUFBVDtBQUFhLFFBQUUsRUFBRSxFQUFqQjtBQUFxQixRQUFFLEVBQUUsRUFBekI7QUFBNkIsUUFBRSxFQUFFLENBQWpDO0FBQW9DLFFBQUUsRUFBRSxDQUF4QztBQUEyQyxTQUFHLFlBQUtBLElBQUksQ0FBQ0MsTUFBVixnQkFBc0JELElBQUksQ0FBQ0UsTUFBM0IsQ0FBOUM7QUFBbUYsV0FBSyxFQUFFQyw4REFBMUY7QUFBQTtBQUFB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QXVCQyxTQURqQztBQUVMQyxZQUFNLEVBQUVMLFFBQVEsR0FBR0UsTUFBTSxDQUFDSSxXQUFWLEdBQXdCRjtBQUZuQyxLQUFQO0FBSUQsR0FMRDs7QUFIMEIsa0JBVVVHLHNEQUFRLENBQUNOLE9BQUQsQ0FWbEI7QUFBQSxNQVVuQk8sVUFWbUI7QUFBQSxNQVVQQyxhQVZPOztBQVkxQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDVixRQUFMLEVBQWU7QUFDYixhQUFPLEtBQVA7QUFDRDs7QUFFRCxhQUFTVyxZQUFULEdBQXdCO0FBQ3RCRixtQkFBYSxDQUFDUixPQUFPLEVBQVIsQ0FBYjtBQUNEOztBQUVEQyxVQUFNLENBQUNVLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRCxZQUFsQztBQUNBLFdBQU87QUFBQSxhQUFNVCxNQUFNLENBQUNXLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQyxDQUFOO0FBQUEsS0FBUDtBQUNELEdBWFEsRUFXTixFQVhNLENBQVQsQ0FaMEIsQ0F1Qm5COztBQUVQLFNBQU9ILFVBQVA7QUFDRCxDQTFCRDs7SUFBTXpCLGEiLCJmaWxlIjoiLi9wYWdlcy9hcGlDb21wb25lbnRzL2NvbnRhY3RKc29uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldFBhcmsgfSBmcm9tICcuL2Z1bmN0aW9uQ29udGV4dEpzb24uanMnXG5pbXBvcnQgeyBwYXJrU3R5bGUsIHdvcmRTdHlsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy91dGlsU3R5bGUuanMnXG5pbXBvcnQgeyBSb3csIENvbCwgQWNjb3JkaW9uLCBDYXJkLCBCYWRnZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RKc29uID0gKCkgPT4ge1xuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICAhZ2V0UGFyaygpID8gJ0xvYWRpbmcgLi4uJyA6XG4gICAgICAgIGdldFBhcmsoKS5tYXAocGFyayA9PiAoXG4gICAgICAgICAgPENvbCB4cz17MTJ9IHNtPXsxMn0gbWQ9ezEyfSBsZz17Nn0geGw9ezR9IGtleT17YCR7cGFyay5hcmVhSWR9ICsgJHtwYXJrLnBhcmtJZH1gfSBzdHlsZT17d29yZFN0eWxlfT5cbiAgICAgICAgICAgIDxBY2NvcmRpb24gZGVmYXVsdEFjdGl2ZUtleT0nZmFsc2UnPlxuICAgICAgICAgICAgICA8Q2FyZCBwYXJrPXtwYXJrfSBzdHlsZT17cGFya1N0eWxlfT5cbiAgICAgICAgICAgICAgICA8QWNjb3JkaW9uLlRvZ2dsZSBhcz17Q2FyZC5IZWFkZXJ9IGV2ZW50S2V5PXtgJHtwYXJrLmFyZWFJZH0gKyAke3BhcmsucGFya0lkfWB9PlxuICAgICAgICAgICAgICAgICAge3BhcmsuYXJlYU5hbWV9XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24uVG9nZ2xlPlxuICAgICAgICAgICAgICAgIDxDYXJkLlN1YnRpdGxlIGNsYXNzTmFtZT0ndGV4dC1tdXRlZCBtLTInPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nbXItMiBtYi0xJyB2YXJpYW50PSdpbmZvJz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICEoc2l6ZS53aWR0aCA+IDEyMDApICYmICEocGFyay5pbnRyb2R1Y3Rpb24ubGVuZ3RoID4gMTkpID8gcGFyay5pbnRyb2R1Y3Rpb24gOlxuICAgICAgICAgICAgICAgICAgICAgIHBhcmsuaW50cm9kdWN0aW9uLnN1YnN0cmluZygwLDE5KSArICcuLi4nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAhKHBhcmsuaW50cm9kdWN0aW9uLmxlbmd0aCA+IDE5KSA/ICcnIDpcbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmludHJvZHVjdGlvbi5zdWJzdHJpbmcoMTksMTAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGNsYXNzTmFtZT0nJyB2YXJpYW50PSdzZWNvbmRhcnknPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgIShwYXJrLmFkZHJlc3MubGVuZ3RoID4gMTkpID8gcGFyay5hZGRyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICBwYXJrLmFkZHJlc3Muc3Vic3RyaW5nKDAsMTkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAhKHBhcmsuYWRkcmVzcy5sZW5ndGggPiAxOSkgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgcGFyay5hZGRyZXNzLnN1YnN0cmluZygxOSwxMDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgPC9DYXJkLlN1YnRpdGxlPlxuICAgICAgICAgICAgICAgIDxBY2NvcmRpb24uQ29sbGFwc2UgZXZlbnRLZXk9e2Ake3BhcmsuYXJlYUlkfSArICR7cGFyay5wYXJrSWR9YH0+XG4gICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICB7cGFyay5wYXlHdWlkZX1cbiAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uLkNvbGxhcHNlPlxuICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnXG5cbiAgY29uc3QgZ2V0U2l6ZSA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6IGlzQ2xpZW50ID8gd2luZG93LmlubmVyV2lkdGggOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoZ2V0U2l6ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICAgIHNldFdpbmRvd1NpemUoZ2V0U2l6ZSgpKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpXG4gIH0sIFtdKSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50IGFuZCB1bm1vdW50XG5cbiAgcmV0dXJuIHdpbmRvd1NpemVcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/apiComponents/contactJson.js\n");

/***/ })

})