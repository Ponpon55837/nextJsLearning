(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI")),o=a("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,r=void 0!==n&&n,o=e.hasQuery;return a||r&&(void 0!==o&&o)}t.isInAmpMode=c,t.useAmp=function(){return c(r.default.useContext(o.AmpStateContext))}},"2W6z":function(e,t,a){"use strict";var n=function(){};e.exports=n},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),i=a("q1tI"),l=a.n(i),u=a("vUet"),s=l.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.fluid,i=e.as,s=void 0===i?"div":i,f=e.className,d=Object(r.a)(e,["bsPrefix","fluid","as","className"]),v=Object(u.a)(a,"container"),b="string"===typeof o?"-"+o:"-fluid";return l.a.createElement(s,Object(n.a)({ref:t},d,{className:c()(f,o?""+v+b:v)}))}));s.displayName="Container",s.defaultProps={fluid:!1},t.a=s},"8Kt/":function(e,t,a){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI")),o=n(a("Xuae")),c=a("lwAK"),i=a("FYa8"),l=a("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var a=r.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(s,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var c=r.key.slice(r.key.indexOf("$")+1);e.has(c)?o=!1:e.add(c)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var i=0,l=f.length;i<l;i++){var u=f[i];if(r.props.hasOwnProperty(u))if("charSet"===u)a.has(u)?o=!1:a.add(u);else{var s=r.props[u],d=n[u]||new Set;d.has(s)?o=!1:(d.add(s),n[u]=d)}}}return o}}()).reverse().map((function(e,t){var a=e.key||t;return r.default.cloneElement(e,{key:a})}))}var v=o.default();function b(e){var t=e.children;return r.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(a){return r.default.createElement(v,{reduceComponentsToState:d,handleStateChange:a,inAmpMode:l.isInAmpMode(e)},t)}))}))}b.rewind=v.rewind,t.default=b},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},CafY:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("8Kt/"),c=a.n(o),i=a("YFqc"),l=a.n(i),u=a("wx14"),s=a("zLVn"),f=a("TSYQ"),d=a.n(f),v=a("JCAc"),b=a("YdCC"),p=a("vUet"),m=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,c=Object(s.a)(e,["bsPrefix","className","as"]);a=Object(p.a)(a,"navbar-brand");var i=o||(c.href?"a":"span");return r.a.createElement(i,Object(u.a)({},c,{ref:t,className:d()(n,a)}))}));m.displayName="NavbarBrand";var y=m,h=a("vYJ8"),O=r.a.createContext(null);O.displayName="NavbarContext";var j=O,g=r.a.forwardRef((function(e,t){var a=e.children,n=e.bsPrefix,o=Object(s.a)(e,["children","bsPrefix"]);return n=Object(p.a)(n,"navbar-collapse"),r.a.createElement(j.Consumer,null,(function(e){return r.a.createElement(h.a,Object(u.a)({in:!(!e||!e.expanded)},o),r.a.createElement("div",{ref:t,className:n},a))}))}));g.displayName="NavbarCollapse";var x=g,w=a("ZCiN"),C=r.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.children,i=e.label,l=e.as,f=void 0===l?"button":l,v=e.onClick,b=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(p.a)(a,"navbar-toggler");var m=Object(n.useContext)(j)||{},y=m.onToggle,h=m.expanded,O=Object(w.a)((function(e){v&&v(e),y&&y()}));return"button"===f&&(b.type="button"),r.a.createElement(f,Object(u.a)({},b,{ref:t,onClick:O,"aria-label":i,className:d()(o,a,!h&&"collapsed")}),c||r.a.createElement("span",{className:a+"-icon"}))}));C.displayName="NavbarToggle",C.defaultProps={label:"Toggle navigation"};var N=C,k=a("ILyh"),_=Object(b.a)("navbar-text",{Component:"span"}),I=r.a.forwardRef((function(e,t){var a=Object(v.a)(e,{expanded:"onToggle"}),o=a.bsPrefix,c=a.expand,i=a.variant,l=a.bg,f=a.fixed,b=a.sticky,m=a.className,y=a.children,h=a.as,O=void 0===h?"nav":h,g=a.expanded,x=a.onToggle,w=a.onSelect,C=a.collapseOnSelect,N=Object(s.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),_=Object(p.a)(o,"navbar"),I=Object(n.useCallback)((function(){w&&w.apply(void 0,arguments),C&&g&&x&&x(!1)}),[w,C,g,x]);void 0===N.role&&"nav"!==O&&(N.role="navigation");var P=_+"-expand";"string"===typeof c&&(P=P+"-"+c);var S=Object(n.useMemo)((function(){return{onToggle:function(){return x&&x(!g)},bsPrefix:_,expanded:!!g}}),[_,g,x]);return r.a.createElement(j.Provider,{value:S},r.a.createElement(k.a.Provider,{value:I},r.a.createElement(O,Object(u.a)({ref:t},N,{className:d()(m,_,c&&P,i&&_+"-"+i,l&&"bg-"+l,b&&"sticky-"+b,f&&"fixed-"+f)}),y)))}));I.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},I.displayName="Navbar",I.Brand=y,I.Toggle=N,I.Collapse=x,I.Text=_;var P=I,S=(a("K9S6"),a("Wzyw")),E=a("rQNl"),A=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.children,c=e.as,i=void 0===c?"div":c,l=Object(s.a)(e,["bsPrefix","className","children","as"]);return a=Object(p.a)(a,"nav-item"),r.a.createElement(i,Object(u.a)({},l,{ref:t,className:d()(n,a)}),o)}));A.displayName="NavItem";var K=A,q=a("dbZe"),M=a("VWqr"),R={disabled:!1,as:q.a},D=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.disabled,o=e.className,c=e.href,i=e.eventKey,l=e.onSelect,f=e.as,v=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return a=Object(p.a)(a,"nav-link"),r.a.createElement(M.a,Object(u.a)({},v,{href:c,ref:t,eventKey:i,as:f,disabled:n,onSelect:l,className:d()(o,a,n&&"disabled")}))}));D.displayName="NavLink",D.defaultProps=R;var T=D,L=r.a.forwardRef((function(e,t){var a,o,c,i=Object(v.a)(e,{activeKey:"onSelect"}),l=i.as,f=void 0===l?"div":l,b=i.bsPrefix,m=i.variant,y=i.fill,h=i.justify,O=i.navbar,g=i.className,x=i.children,w=i.activeKey,C=Object(s.a)(i,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),N=Object(p.a)(b,"nav"),k=!1,_=Object(n.useContext)(j),I=Object(n.useContext)(S.a);return _?(o=_.bsPrefix,k=null==O||O):I&&(c=I.cardHeaderBsPrefix),r.a.createElement(E.a,Object(u.a)({as:f,ref:t,activeKey:w,className:d()(g,(a={},a[N]=!k,a[o+"-nav"]=k,a[c+"-"+m]=!!c,a[N+"-"+m]=!!m,a[N+"-fill"]=y,a[N+"-justified"]=h,a))},C),x)}));L.displayName="Nav",L.defaultProps={justify:!1,fill:!1},L.Item=K,L.Link=T;var H=L,J=a("OZiG"),Y=a("1N03"),F=r.a.createElement,Z=function(){return F(P,{collapseOnSelect:!0,expand:"lg",style:Y.f},F(P.Brand,null,F("span",{onClick:J.handler},Object(J.headerBar)()?Object(J.headerBar)():"NextJS with Bootsrtap")),F(P.Toggle,{"aria-controls":"responsive-navbar-nav"}),F(P.Collapse,{id:"responsive-navbar-nav"},F(H,{className:"mr-auto"},Object(J.getHeader)()?Object(J.getHeader)().map((function(e){return F(l.a,{href:e.link,key:e.id},F("a",{className:"nav-item nav-link",title:"Connect to ".concat(e.title," Page"),style:Y.i},e.title))})):"Loading ...")))},W=a("DMma"),B=a.n(W),Q=a("Z4Yb"),V=a.n(Q),z=a("7vrA"),U=a("3Z9Z"),G=a("JI6e"),X=r.a.createElement,$=function(){return X("footer",{className:B.a.footer,style:Y.e},X(z.a,null,X(U.a,null,X(G.a,{xs:12,sm:12,md:6,lg:6,xl:6},X(U.a,null,Object(J.getHeader)()?Object(J.getHeader)().map((function(e){return X(G.a,{className:"d-none d-sm-block",sm:4,md:4,lg:3,xl:3,key:e.id},X(l.a,{href:e.link},X("a",{className:"nav-item nav-link",title:"Connect to ".concat(e.title," Page"),style:Y.i},e.title)))})):"Loading ...")),X(G.a,{xs:12,sm:12,md:6,lg:6,xl:6},X("span",{className:"text-muted ".concat(B.a.textModule," ").concat(V.a.footerDesSpan)},Object(J.footerDescription)()?Object(J.footerDescription)():"Loading ...")))))},ee=r.a.createElement;t.a=function(e){var t=e.children;return ee("div",null,ee(c.a,null,ee("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),ee("link",{rel:"shortcut icon",href:"../public/favicon.ico"}),ee("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),ee("meta",{charSet:"utf-8"})),ee(Z,null),ee("br",null),t||"Loading ...",ee("br",null),ee($,null))}},DMma:function(e,t,a){e.exports={container:"layout_container__1LfYE",header:"layout_header__1OJ41",headerImage:"layout_headerImage__jSguI",headerHomeImage:"layout_headerHomeImage__3w_dQ",backToHome:"layout_backToHome__knf4J",footer:"layout_footer__ktNG5"}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},F9IU:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n).a.createContext(null);t.a=r},FYa8:function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI"));t.HeadManagerContext=r.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},K9S6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,o.default)((function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];var r=null;return t.forEach((function(e){if(null==r){var t=e.apply(void 0,a);null!=t&&(r=t)}})),r}))};var n,r=a("pvIh"),o=(n=r)&&n.__esModule?n:{default:n};e.exports=t.default},RIqP:function(e,t,a){var n=a("Ijbi"),r=a("EbDI"),o=a("Bnag");e.exports=function(e){return n(e)||r(e)||o()}},VWqr:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("TSYQ"),c=a.n(o),i=a("q1tI"),l=a.n(i),u=a("ZCiN"),s=(a("2W6z"),a("F9IU")),f=a("ILyh"),d=l.a.forwardRef((function(e,t){var a=e.active,o=e.className,d=e.eventKey,v=e.onSelect,b=e.onClick,p=e.as,m=Object(r.a)(e,["active","className","eventKey","onSelect","onClick","as"]),y=Object(f.b)(d,m.href),h=Object(i.useContext)(f.a),O=Object(i.useContext)(s.a),j=a;if(O){m.role||"tablist"!==O.role||(m.role="tab");var g=O.getControllerId(y),x=O.getControlledId(y);m["data-rb-event-key"]=y,m.id=g||m.id,m["aria-controls"]=x||m["aria-controls"],j=null==a&&null!=y?O.activeKey===y:a}"tab"===m.role&&(m.tabIndex=j?m.tabIndex:-1,m["aria-selected"]=j);var w=Object(u.a)((function(e){b&&b(e),null!=y&&(v&&v(y,e),h&&h(y,e))}));return l.a.createElement(p,Object(n.a)({},m,{ref:t,onClick:w,className:c()(o,j&&"active")}))}));d.defaultProps={disabled:!1},t.a=d},Xuae:function(e,t,a){"use strict";var n=a("lwsE"),r=a("PJYZ"),o=a("W8MJ"),c=a("7W2i"),i=a("a1gu"),l=a("Nsbk"),u=a("RIqP");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var r=l(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return i(this,a)}}Object.defineProperty(t,"__esModule",{value:!0});var f=a("q1tI"),d=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(u(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return function(i){c(u,i);var l=s(u);function u(e){var o;return n(this,u),o=l.call(this,e),d&&(t.add(r(o)),a(r(o))),o}return o(u,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),o(u,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),u}(f.Component)}},YGJp:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI");function r(){return Object(n.useReducer)((function(e){return!e}),!1)[1]}},ZCiN:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI");var r=function(e){var t=Object(n.useRef)(e);return Object(n.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=r(e);return Object(n.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function r(e,t){return n(e.querySelectorAll(t))}},dbZe:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("q1tI"),c=a.n(o),i=a("Qg85");function l(e){return!e||"#"===e.trim()}var u=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"a":a,u=e.disabled,s=e.onKeyDown,f=Object(r.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,a=f.onClick;(u||l(t))&&e.preventDefault(),u?e.stopPropagation():a&&a(e)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),c.a.createElement(o,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(i.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));u.displayName="SafeAnchor",t.a=u},lcWJ:function(e,t,a){"use strict";var n=a("q1tI"),r=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(n.useMemo)((function(){return function(e,t){var a=r(e),n=r(t);return function(e){a&&a(e),n&&n(e)}}(e,t)}),[e,t])}},lwAK:function(e,t,a){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var r=n(a("q1tI"));t.AmpStateContext=r.createContext({})},pvIh:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,a,n,r,o,c){var i=r||"<<anonymous>>",l=c||n;if(null==a[n])return t?new Error("Required "+o+" `"+l+"` was not specified in `"+i+"`."):null;for(var u=arguments.length,s=Array(u>6?u-6:0),f=6;f<u;f++)s[f-6]=arguments[f];return e.apply(void 0,[a,n,i,o,l].concat(s))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a},e.exports=t.default},rQNl:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("Zeqi"),c=a("q1tI"),i=a.n(c),l=a("YGJp"),u=a("lcWJ"),s=a("F9IU"),f=a("ILyh"),d=i.a.createContext(null),v=function(){},b=i.a.forwardRef((function(e,t){var a,b,p=e.as,m=void 0===p?"ul":p,y=e.onSelect,h=e.activeKey,O=e.role,j=e.onKeyDown,g=Object(r.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),x=Object(l.a)(),w=Object(c.useRef)(!1),C=Object(c.useContext)(f.a),N=Object(c.useContext)(d);N&&(O=O||"tablist",h=N.activeKey,a=N.getControlledId,b=N.getControllerId);var k=Object(c.useRef)(null),_=function(e){var t=k.current;if(!t)return null;var a=Object(o.a)(t,"[data-rb-event-key]:not(.disabled)"),n=t.querySelector(".active");if(!n)return null;var r=a.indexOf(n);if(-1===r)return null;var c=r+e;return c>=a.length&&(c=0),c<0&&(c=a.length-1),a[c]},I=function(e,t){null!=e&&(y&&y(e,t),C&&C(e,t))};Object(c.useEffect)((function(){if(k.current&&w.current){var e=k.current.querySelector("[data-rb-event-key].active");e&&e.focus()}w.current=!1}));var P=Object(u.a)(t,k);return i.a.createElement(f.a.Provider,{value:I},i.a.createElement(s.a.Provider,{value:{role:O,activeKey:Object(f.b)(h),getControlledId:a||v,getControllerId:b||v}},i.a.createElement(m,Object(n.a)({},g,{onKeyDown:function(e){var t;switch(j&&j(e),e.key){case"ArrowLeft":case"ArrowUp":t=_(-1);break;case"ArrowRight":case"ArrowDown":t=_(1);break;default:return}t&&(e.preventDefault(),I(t.dataset.rbEventKey,e),w.current=!0,x())},ref:P,role:O}))))}));t.a=b}}]);