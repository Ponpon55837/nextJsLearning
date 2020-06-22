webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utilStyle.js */ "./styles/utilStyle.js");
/* harmony import */ var _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout.module.css */ "./styles/layout.module.css");
/* harmony import */ var _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // bootstrap



var Footer = function Footer() {
  return __jsx("footer", {
    className: _styles_layout_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_1__["fatFooter"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "text-muted",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Upfloor make nextjs (\u0E51\u2022\u0E35_\u0E40\u2022\u0E35\u0E51)")));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/layout.module.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/layout.module.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".layout_container__1LfYE {\n  max-width: 36rem;\n  padding: 0 1rem;\n  margin: 3rem auto 6rem;\n}\n\n.layout_header__1OJ41 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.layout_headerImage__jSguI {\n  width: 6rem;\n  height: 6rem;\n}\n\n.layout_headerHomeImage__3w_dQ {\n  width: 8rem;\n  height: 8rem;\n}\n\n.layout_backToHome__knf4J {\n  margin: 3rem 0 0;\n}\n\n.layout_footer__ktNG5 {\n  \n}\n", "",{"version":3,"sources":["/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/styles/layout.module.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;AAEA","file":"layout.module.css","sourcesContent":[".container {\n  max-width: 36rem;\n  padding: 0 1rem;\n  margin: 3rem auto 6rem;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.headerImage {\n  width: 6rem;\n  height: 6rem;\n}\n\n.headerHomeImage {\n  width: 8rem;\n  height: 8rem;\n}\n\n.backToHome {\n  margin: 3rem 0 0;\n}\n\n.footer {\n  \n}\n"]}]);
// Exports
exports.locals = {
	"container": "layout_container__1LfYE",
	"header": "layout_header__1OJ41",
	"headerImage": "layout_headerImage__jSguI",
	"headerHomeImage": "layout_headerHomeImage__3w_dQ",
	"backToHome": "layout_backToHome__knf4J",
	"footer": "layout_footer__ktNG5"
};

/***/ }),

/***/ "./styles/layout.module.css":
/*!**********************************!*\
  !*** ./styles/layout.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/layout.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/layout.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/layout.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=index.js.f34b49b100998b387e3c.hot-update.js.map