webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/*! exports provided: NAV_HEIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_HEIGHT", function() { return NAV_HEIGHT; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dylanb/dev/happy-little-sound-clouds/src/components/nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var links = [{
  href: '/',
  label: 'music'
}, {
  href: '/about',
  label: 'about'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});
var NAV_HEIGHT = 70;

var Nav = function Nav() {
  return __jsx("nav", {
    className: "jsx-1769732738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1769732738",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return __jsx("li", {
      key: key,
      className: "jsx-1769732738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: href,
      as: "".concat("").concat(href),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-1769732738",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, label)));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1769732738",
    __self: this
  }, "nav.jsx-1769732738{position:fixed;top:0;width:100%;height:".concat(NAV_HEIGHT, "px;background:#141414;border-bottom:1px solid #000;}nav.jsx-1769732738>ul.jsx-1769732738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;}ul.jsx-1769732738,li.jsx-1769732738{list-style-type:none;}li.jsx-1769732738{padding:24px 16px;}a.jsx-1769732738{color:#fff;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWxhbmIvZGV2L2hhcHB5LWxpdHRsZS1zb3VuZC1jbG91ZHMvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHd0IsQUFRRixBQU1RLEFBR0gsQUFHUCxXQUNVLElBcEJmLEdBaUJSLEdBaEJhLEFBYWIsV0Fad0MsNkJBbUJ2QixTQWxCSSxJQUtWLEVBY1gsT0FiWSxNQUxtQixJQU0vQix5QkFMQSIsImZpbGUiOiIvVXNlcnMvZHlsYW5iL2Rldi9oYXBweS1saXR0bGUtc291bmQtY2xvdWRzL3NyYy9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnLycsIGxhYmVsOiAnbXVzaWMnIH0sXG4gIHsgaHJlZjogJy9hYm91dCcsIGxhYmVsOiAnYWJvdXQnIH1cbl0ubWFwKGxpbmsgPT4ge1xuICBsaW5rLmtleSA9IGBuYXYtbGluay0ke2xpbmsuaHJlZn0tJHtsaW5rLmxhYmVsfWA7XG4gIHJldHVybiBsaW5rO1xufSk7XG5cbmV4cG9ydCBjb25zdCBOQVZfSEVJR0hUID0gNzA7XG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPG5hdj5cbiAgICA8dWw+XG4gICAgICB7bGlua3MubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtrZXl9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGFzPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9JHtocmVmfWB9PlxuICAgICAgICAgICAgPGE+e2xhYmVsfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgbmF2IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6ICR7TkFWX0hFSUdIVH1weDtcbiAgICAgICAgYmFja2dyb3VuZDogIzE0MTQxNDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gICAgICB9XG4gICAgICBuYXYgPiB1bCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgIHVsLFxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L25hdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcbiJdfQ== */\n/*@ sourceURL=/Users/dylanb/dev/happy-little-sound-clouds/src/components/nav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.db83eb003621c56f0b01.hot-update.js.map