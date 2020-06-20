webpackHotUpdate("static/development/pages/batman/[id].js",{

/***/ "./pages/batman/[id].js":
/*!******************************!*\
  !*** ./pages/batman/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utilStyle.js */ "./styles/utilStyle.js");
/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiComponents/functionContextJson.js */ "./pages/apiComponents/functionContextJson.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/batman/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






 // bootstrap



var IdPost = function IdPost(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'ID by index page' : _ref$title;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
      lineNumber: 16,
      columnNumber: 9
    }
  }, title), __jsx("meta", {
    property: "og:description",
    content: Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_4__["pageDescription"])(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: 0,
    sm: 0,
    md: 1,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: 12,
    sm: 12,
    md: 10,
    lg: 8,
    xl: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"], {
    border: "primary",
    style: {
      width: 'auto'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Header, {
    style: _styles_utilStyle_js__WEBPACK_IMPORTED_MODULE_3__["cardHeader"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 49
    }
  }, router.query.id)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Card"].Text, {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.markdown,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 19
    }
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {
    source: "This is our blog post.Yes. We can have a [link](/link).And we can have a title as well.### This is a title And here's the content.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: 0,
    sm: 0,
    md: 1,
    lg: 2,
    xl: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (IdPost); // import Layout from '../../components/MyLayout'
// import fetch from 'isomorphic-unfetch'
//
// // 這裡props作爲接收api內容的銜接變數
// const Post = (props) => {
//   return (
//     <Layout>
//       <h1>{props.show.name}</h1>
//       <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
//       {props.show.image ? <img src={props.show.image.medium} /> : null}
//     </Layout>
//   )
// }
//
// // 藉由fetch來抓取api中對應的id頁面並將值接入
// Post.getInitialProps = async function(context) {
//   // 解構id這個變數為context接到的全部內容底下的query值
//   const { id } = context.query
//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
//   const show = await res.json()
//
//   console.log(`Fetched show: ${show.name}`)
//
//   return { show }
// }
//
// export default Post

/***/ })

})
//# sourceMappingURL=[id].js.79fe502d782111d498a5.hot-update.js.map