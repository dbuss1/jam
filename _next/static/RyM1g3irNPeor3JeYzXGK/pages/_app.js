(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"16Al":function(e,t,n){"use strict";var a=n("WbBG");function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,s){if(s!==a){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n,n}},"17x9":function(e,t,n){e.exports=n("16Al")()},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},IlR1:function(e,t,n){"use strict";n.r(t);var a=n("UXZV"),r=n.n(a);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=n("MX0m"),i=n.n(s),c=n("q1tI"),l=n.n(c),p=n("8Kt/"),u=n.n(p),f=n("fyf7"),d=n("X7BR"),m=n("q4wV"),x=n.n(m),h=l.a.createElement,v=function(){var e=Object(c.useRef)({}),t=Object(c.useContext)(f.a),n=t.curTrack,a=t.status,r=t.setStatus,o=t.setElapsed,s=t.duration,i=t.setDuration,l=t.seekingTo,p=t.setSeekingTo;Object(c.useEffect)(function(){a===d.b.PAUSED?e.current.pause():a===d.b.PLAYING&&e.current.play()},[e,a,n]),Object(c.useEffect)(function(){e&&x()(l)&&(e.current.currentTime=l,o(l),p(void 0))},[e,l]);return h("audio",{ref:e,src:n.url,onLoadedMetadata:function(e){var t=e.target;t.duration&&s!==t.duration&&i(t.duration)},onTimeUpdate:function(e){var t=e.target;o(t.currentTime)},onEnded:function(){r(d.b.PAUSED)}})},y=n("YFqc"),b=n.n(y),g=l.a.createElement,w=[{href:"/",label:"Home"},{href:"/about",label:"About"}].map(function(e){return e.key="nav-link-".concat(e.href,"-").concat(e.label),e}),j=70,k=function(){return g("nav",{className:"jsx-234928241"},g("ul",{className:"jsx-234928241"},w.map(function(e){var t=e.key,n=e.href,a=e.label;return g("li",{key:t,className:"jsx-234928241"},g(b.a,{href:n},g("a",{className:"jsx-234928241"},a)))})),g(i.a,{id:"234928241"},["nav.jsx-234928241{position:fixed;top:0;width:100%;height:".concat(j,"px;background:#141414;border-bottom:1px solid #000;}"),"nav.jsx-234928241>ul.jsx-234928241{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0;padding:0;}","ul.jsx-234928241,li.jsx-234928241{list-style-type:none;}","li.jsx-234928241{padding:24px 16px;}","a.jsx-234928241{color:#fff;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]))};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=l.a.createElement("path",{d:"M60.54 512c-17.06 0-30.43-13.86-30.43-31.56V31.55C30.12 13.86 43.48 0 60.55 0A32.94 32.94 0 0177 4.52L465.7 229c10.13 5.85 16.18 16 16.18 27s-6 21.2-16.18 27L77 507.48A32.92 32.92 0 0160.55 512z"});var N=function(e){return l.a.createElement("svg",O({"data-name":"Layer 1",viewBox:"0 0 512 512"},e),E)};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var _=l.a.createElement("path",{d:"M395 512a73.14 73.14 0 01-73.14-73.14V73.14a73.14 73.14 0 11146.29 0v365.72A73.14 73.14 0 01395 512zM117 512a73.14 73.14 0 01-73.14-73.14V73.14a73.14 73.14 0 11146.29 0v365.72A73.14 73.14 0 01117 512z"});var P=function(e){return l.a.createElement("svg",T({"data-name":"Layer 1",viewBox:"0 0 512 512"},e),_)};function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=l.a.createElement("path",{d:"M481.76 510.43c17 0 30.24-13.78 30.24-31.36V32.93c0-17.58-13.28-31.36-30.25-31.36a32.73 32.73 0 00-16.3 4.49L128.61 229.12c-10.07 5.81-16.08 15.88-16.08 26.88s6 21.07 16.08 26.87l336.84 223.07a32.72 32.72 0 0016.3 4.49z"}),C=l.a.createElement("path",{d:"M61.94 499.51a61.94 61.94 0 0061.94-61.93V74.42A61.94 61.94 0 000 74.42v363.16a61.94 61.94 0 0061.94 61.93z"});var A=function(e){return l.a.createElement("svg",S({"data-name":"Layer 1",viewBox:"0 0 512 512"},e),L,C)};function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var U=l.a.createElement("path",{d:"M30.24 510.43c-17 0-30.24-13.78-30.24-31.36V32.93C0 15.35 13.28 1.57 30.25 1.57a32.73 32.73 0 0116.3 4.49l336.84 223.06c10.07 5.81 16.08 15.86 16.08 26.88s-6 21.07-16.08 26.87L46.55 505.94a32.72 32.72 0 01-16.3 4.49z"}),I=l.a.createElement("path",{d:"M450.06 499.51a61.94 61.94 0 01-61.94-61.93V74.42a61.94 61.94 0 01123.88 0v363.16a61.94 61.94 0 01-61.94 61.93z"});var R=function(e){return l.a.createElement("svg",M({"data-name":"Layer 1",viewBox:"0 0 512 512"},e),U,I)};function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var V=l.a.createElement("rect",{width:512,height:512,rx:68.27,ry:68.27});var z=function(e){return l.a.createElement("svg",B({"data-name":"Layer 1",viewBox:"0 0 512 512"},e),V)},F=l.a.createElement,W={play:N,pause:P,skipBackward:A,skipForward:R,stop:z},Y=function(e){var t=e.type,n=e.size,a=void 0===n?14:n,r=e.color,o=void 0===r?"white":r,s=W[t];return F(l.a.Fragment,null,F(s,{className:i.a.dynamic([["3741810554",[a,a,o,o,o,o]]])}),F(i.a,{id:"3741810554",dynamic:[a,a,o,o,o,o]},["svg.__jsx-style-dynamic-selector{height:".concat(a,"px;width:").concat(a,"px;fill:").concat(o," !important;stroke:").concat(o," !important;}"),"svg.__jsx-style-dynamic-selector *.__jsx-style-dynamic-selector{fill:".concat(o," !important;stroke:").concat(o," !important;}")]))},D=n("mOuQ"),G=l.a.createElement,q=50,K=function(){var e=Object(c.useRef)(null),t=Object(c.useContext)(f.a),n=t.elapsed,a=t.duration,r=t.setSeekingTo;return G("div",{ref:e,onClick:function(t){var n=(t.clientX-e.current.offsetLeft)/e.current.offsetWidth;n=Math.max(0,n),n=Math.min(1,n),r(n*a)},className:i.a.dynamic([["3875853921",[n/a*100,10,10,n/a*100,5,4]]])+" progress-bar"},G("div",{className:i.a.dynamic([["3875853921",[n/a*100,10,10,n/a*100,5,4]]])+" progress-bg"}),G("div",{className:i.a.dynamic([["3875853921",[n/a*100,10,10,n/a*100,5,4]]])+" progress-fg"}),G("div",{className:i.a.dynamic([["3875853921",[n/a*100,10,10,n/a*100,5,4]]])+" ball"}),G(i.a,{id:"3875853921",dynamic:[n/a*100,10,10,n/a*100,5,4]},[".progress-bar.__jsx-style-dynamic-selector{width:100%;min-width:100px;margin:0 12px;padding:8px 0;position:relative;cursor:pointer;}",".progress-bg.__jsx-style-dynamic-selector{background-color:#ccc;width:100%;height:1px;}",".progress-fg.__jsx-style-dynamic-selector{background-color:orange;width:".concat(n/a*100,"%;height:1px;margin-top:-1px;}"),".ball.__jsx-style-dynamic-selector{border-radius:50%;width:".concat(10,"px;height:").concat(10,"px;background:orange;position:absolute;left:calc(").concat(n/a*100,"% - ").concat(5,"px);top:").concat(4,"px;}")]))},X=function(){var e=Object(c.useContext)(f.a),t=e.status,n=e.setStatus,a=e.curTrack,r=e.elapsed,o=e.duration,s=t===d.b.PLAYING;return G("div",{className:"jsx-2626562378 currently-playing"},G("div",{className:"jsx-2626562378 content"},G("div",{className:"jsx-2626562378 controls"},G("button",{className:"jsx-2626562378"},G(Y,{type:"skipBackward"})),G("button",{onClick:function(){return n(s?d.b.PAUSED:d.b.PLAYING)},className:"jsx-2626562378"},G(Y,{type:s?"pause":"play"})),G("button",{className:"jsx-2626562378"},G(Y,{type:"skipForward"}))),G("div",{className:"jsx-2626562378 progress-bar-wrapper"},G("span",{className:"jsx-2626562378"},Object(D.a)(r||0)),G(K,null),G("span",{className:"jsx-2626562378"},Object(D.a)(o||0))),G("div",{className:"jsx-2626562378 details"},G("span",{className:"jsx-2626562378 artist"},a.artist),G("span",{className:"jsx-2626562378 song"},a.title))),G(i.a,{id:"2626562378"},[".currently-playing.jsx-2626562378{position:fixed;bottom:0;height:".concat(q,"px;width:100%;background:#141414;border-top:1px solid #000;}"),".content.jsx-2626562378{height:".concat(q,"px;max-width:1000px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}"),".controls.jsx-2626562378{margin:0 1rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".controls.jsx-2626562378 button.jsx-2626562378{border:none;outline:none;background:none;margin:0 8px;padding:0;cursor:pointer;}",".progress-bar-wrapper.jsx-2626562378{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}",".progress-bar-wrapper.jsx-2626562378 span.jsx-2626562378{font-size:12px;}",".details.jsx-2626562378{margin:0 1rem;width:360px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".details.jsx-2626562378 span.jsx-2626562378{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}",".details.jsx-2626562378 .artist.jsx-2626562378{color:#ccc;font-size:80%;}"]))},H=l.a.createElement;t.default=function(e){var t=e.Component,n=e.pageProps,a=Object(c.useState)(d.a),r=a[0],s=a[1],l=Object(c.useState)(),p=l[0],m=l[1],x=Object(c.useState)({}),h=x[0],y=x[1],b=Object(c.useState)(),g=b[0],w=b[1],O=Object(c.useState)(0),E=O[0],N=O[1],T=Object(c.useState)(),_=T[0],P=T[1],S=Object(c.useState)(),L=S[0],C=S[1];return H(f.a.Provider,{value:{tracks:r,setTracks:s,curTrack:h,setCurTrack:y,status:p,setStatus:m,previousTrackId:g,elapsed:E,setElapsed:N,duration:_,setDuration:P,seekingTo:L,setSeekingTo:C,changeTrack:function(e){e.id!==h.id&&(w(h.id),N(0),y(e),m(d.b.PLAYING))}}},H(u.a,null,H("title",{className:i.a.dynamic([["2873399176",[j+16,q+16]]])},"\ud83c\udf36\ufe0f \ud83d\udc05")),H(k,null),H(t,o({},n,{className:i.a.dynamic([["2873399176",[j+16,q+16]]])+" "+(n&&null!=n.className&&n.className||"")})),H(X,null),H(v,null),H(i.a,{id:"2873399176",dynamic:[j+16,q+16]},["body{background:#282831;color:white;margin:".concat(j+16,"px 0 ").concat(q+16,"px;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;}")]))}},KkdS:function(e,t,n){var a=n("Y7ZC"),r=n("5T2Y").isFinite;a(a.S,"Number",{isFinite:function(e){return"number"==typeof e&&r(e)}})},WbBG:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("/HRN"),r=n("WaGi"),o=n("ZDA2"),s=n("/+P4"),i=n("N9n2"),c=n("5Uuq"),l=n("KI45");t.__esModule=!0,t.default=void 0;var p,u=l(n("LX0d")),f=n("CxY0"),d=c(n("q1tI")),m=(l(n("17x9")),l(n("nOHt"))),x=(n("P5f7"),n("g/15"));function h(e){return e&&"object"===typeof e?(0,x.formatWithValidation)(e):e}var v=new u.default,y=window.IntersectionObserver;function b(){return p||(y?p=new y(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var g=function(e){function t(e){var n;return a(this,t),(n=o(this,s(t).call(this,e))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(e){var t=null,n=null,a=null;return function(r,o){if(a&&r===t&&o===n)return a;var s=e(r,o);return t=r,n=o,a=s,s}}(function(e,t){return{href:h(e),as:t?h(t):t}}),n.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,r=t.target;if("A"!==a||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=n.formatUrls(n.props.href,n.props.as),s=o.href,i=o.as;if(function(e){var t=(0,f.parse)(e,!1,!0),n=(0,f.parse)((0,x.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var c=window.location.pathname;s=(0,f.resolve)(c,s),i=i?(0,f.resolve)(c,i):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=i.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](s,i,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==e.prefetch,n}return i(t,e),r(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),v.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,f.resolve)(e,t);m.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),s={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch()},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=r||a),d.default.cloneElement(o,s)}}]),t}(d.Component);g.propTypes=void 0;var w=g;t.default=w},ioPa:function(e,t,n){n("KkdS"),e.exports=n("WEpk").Number.isFinite},q4wV:function(e,t,n){e.exports=n("ioPa")}},[["GcxT",0,1]]]);