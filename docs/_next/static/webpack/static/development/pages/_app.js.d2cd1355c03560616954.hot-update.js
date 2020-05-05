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
  label: '/'
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
  }, "nav.jsx-1769732738{position:fixed;top:0;width:100%;height:".concat(NAV_HEIGHT, "px;background:#141414;border-bottom:1px solid #000;}nav.jsx-1769732738>ul.jsx-1769732738{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;}ul.jsx-1769732738,li.jsx-1769732738{list-style-type:none;}li.jsx-1769732738{padding:24px 16px;}a.jsx-1769732738{color:#fff;-webkit-text-decoration:none;text-decoration:none;font-size:14px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWxhbmIvZGV2L2hhcHB5LWxpdHRsZS1zb3VuZC1jbG91ZHMvc3JjL2NvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCZ0IsQUFHd0IsQUFRRixBQU1RLEFBR0gsQUFHUCxXQUNVLElBcEJmLEdBaUJSLEdBaEJhLEFBYWIsV0Fad0MsNkJBbUJ2QixTQWxCSSxJQUtWLEVBY1gsT0FiWSxNQUxtQixJQU0vQix5QkFMQSIsImZpbGUiOiIvVXNlcnMvZHlsYW5iL2Rldi9oYXBweS1saXR0bGUtc291bmQtY2xvdWRzL3NyYy9jb21wb25lbnRzL25hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgeyBocmVmOiAnLycsIGxhYmVsOiAnLycgfSxcbiAgeyBocmVmOiAnL2Fib3V0JywgbGFiZWw6ICdhYm91dCcgfVxuXS5tYXAobGluayA9PiB7XG4gIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YDtcbiAgcmV0dXJuIGxpbms7XG59KTtcblxuZXhwb3J0IGNvbnN0IE5BVl9IRUlHSFQgPSA3MDtcblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICA8bmF2PlxuICAgIDx1bD5cbiAgICAgIHtsaW5rcy5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCB9KSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2tleX0+XG4gICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0gYXM9e2Ake3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke2hyZWZ9YH0+XG4gICAgICAgICAgICA8YT57bGFiZWx9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBuYXYge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogJHtOQVZfSEVJR0hUfXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTQxNDE0O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgICAgIH1cbiAgICAgIG5hdiA+IHVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgICAgdWwsXG4gICAgICBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgIH1cbiAgICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogMjRweCAxNnB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbmF2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIl19 */\n/*@ sourceURL=/Users/dylanb/dev/happy-little-sound-clouds/src/components/nav.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=_app.js.d2cd1355c03560616954.hot-update.js.map