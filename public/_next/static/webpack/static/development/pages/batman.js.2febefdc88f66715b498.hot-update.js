webpackHotUpdate("static/development/pages/batman.js",{

/***/ "./pages/batman.js":
/*!*************************!*\
  !*** ./pages/batman.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiComponents/functionContextJson.js */ "./pages/apiComponents/functionContextJson.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


var _this = undefined,
    _jsxFileName = "/Users/ponpon55837/nextJsPublic/next-learn-demo/nextjs-blog/pages/batman.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // bootstrap



var Batman = function Batman(props, _ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Batman TV show menu' : _ref$title,
      _ref$h1_id = _ref.h1_id,
      h1_id = _ref$h1_id === void 0 ? 4 : _ref$h1_id,
      _ref$arr_id = _ref.arr_id,
      arr_id = _ref$arr_id === void 0 ? 4 : _ref$arr_id;
  // 當api抓取到值之後，props把接到的值map進li當中
  // 這裡href為pages/p/[id].js但是後面使用as來代替為api中的id值
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, title + '.   ' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_6__["titleDescription"])()), __jsx("meta", {
    property: "og:description",
    content: !props.shows ? Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_6__["pageDescription"])() : props.shows.map(function (show) {
      return show.name;
    }) + '.' + Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_6__["pageDescription"])(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    className: "d-none d-sm-none d-md-block",
    md: 1,
    lg: 1,
    xl: 1,
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
    lg: 10,
    xl: 10,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, !Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_6__["getheadingH1"])() ? 'Loading ...' : Object(_apiComponents_functionContextJson_js__WEBPACK_IMPORTED_MODULE_6__["getheadingH1"])().map(function (headingH1) {
    return __jsx("h1", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingH1,
      key: headingH1.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 19
      }
    }, !(headingH1.id == h1_id && headingH1.arr[0].id == arr_id) ? null : headingH1.h1);
  }), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, !props.shows ? 'Loading ...' : props.shows.map(function (show) {
    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"], {
      variant: "flush",
      key: show.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ListGroup"].Item, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 23
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/batman/[id]",
      as: "/batman/".concat(show.id),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 27
      }
    }, show.name))));
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    className: "d-none d-sm-none d-md-block",
    md: 1,
    lg: 1,
    xl: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })))));
}; // 使用非同步的方式讀取json的內容


Batman.getInitialProps = function _callee() {
  var res_batman, data_batman;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('https://api.tvmaze.com/search/shows?q=batman'));

        case 2:
          res_batman = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res_batman.json());

        case 5:
          data_batman = _context.sent;
          // 回報抓到幾個data值
          console.log("Show data fetched. Count: ".concat(data_batman.length));
          return _context.abrupt("return", {
            // 使用map來把值塞入，並且使用變數entry當作主詞來附帶api中的內容
            shows: data_batman.map(function (entry) {
              return entry.show;
            })
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}; // 如果看不懂 return裡面的  <Link href="/batman/[id]" as={`/batman/${show.id}`}>
// 下面是官網參考的範例我改成es6格式
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import Header from '../../../components/header'
//
// const Post = () => {
//   const router = useRouter()
//   const { id } = router.query
//
//   return (
//     <>
//       <Header />
//       <h1>Post: {id}</h1>
//       <ul>
//         <li>
//           <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
//             <a>First comment</a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
//             <a>Second comment</a>
//           </Link>
//         </li>
//       </ul>
//     </>
//   )
// }


/* harmony default export */ __webpack_exports__["default"] = (Batman);

/***/ })

})
//# sourceMappingURL=batman.js.2febefdc88f66715b498.hot-update.js.map