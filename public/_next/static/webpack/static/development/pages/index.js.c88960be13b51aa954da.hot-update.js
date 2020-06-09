webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-bootstrap/esm/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Button.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/esm/SafeAnchor.js");






var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  type: 'button'
};
var Button = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'btn');
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix, active && 'active', prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SafeAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      as: as,
      ref: ref,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (!as) {
    props.type = type;
  }

  var Component = as || 'button';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _apiComponents_headerJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiComponents/headerJson.js */ "./pages/apiComponents/headerJson.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // bootstrap






var Home = function Home(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Index Page' : _ref$title;
  return __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.indexBG,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, title)), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "d-none d-sm-none d-md-block",
    md: 2,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.divH1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, "WelCome"), __jsx(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 23
    }
  }, "Blog"))), __jsx(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "d-none d-sm-none d-md-none d-lg-block",
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c88960be13b51aa954da.hot-update.js.map