(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery;return n||a&&(void 0!==o&&o)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))}},"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"3Hq7":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),s=n("wx14"),c=n("zLVn"),l=n("TSYQ"),u=n.n(l),f=n("JCAc"),d=n("YdCC"),p=n("vUet"),v=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,i=Object(c.a)(e,["bsPrefix","className","as"]);n=Object(p.a)(n,"navbar-brand");var l=o||(i.href?"a":"span");return a.a.createElement(l,Object(s.a)({},i,{ref:t,className:u()(r,n)}))}));v.displayName="NavbarBrand";var h=v,m=n("vYJ8"),b=a.a.createContext(null),y=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=Object(c.a)(e,["children","bsPrefix"]);return r=Object(p.a)(r,"navbar-collapse"),a.a.createElement(b.Consumer,null,(function(e){return a.a.createElement(m.a,Object(s.a)({in:!(!e||!e.expanded)},o),a.a.createElement("div",{ref:t,className:r},n))}))}));y.displayName="NavbarCollapse";var x=y,g=n("ZCiN"),E=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.children,l=e.label,f=e.as,d=void 0===f?"button":f,v=e.onClick,h=Object(c.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(p.a)(n,"navbar-toggler");var m=Object(r.useContext)(b)||{},y=m.onToggle,x=m.expanded,E=Object(g.a)((function(e){v&&v(e),y&&y()}));return"button"===d&&(h.type="button"),a.a.createElement(d,Object(s.a)({},h,{ref:t,onClick:E,"aria-label":l,className:u()(o,n,!x&&"collapsed")}),i||a.a.createElement("span",{className:n+"-icon"}))}));E.displayName="NavbarToggle",E.defaultProps={label:"Toggle navigation"};var O=E,w=n("ILyh"),j=a.a.forwardRef((function(e,t){var n=Object(f.a)(e,{expanded:"onToggle"}),o=n.bsPrefix,i=n.expand,l=n.variant,d=n.bg,v=n.fixed,h=n.sticky,m=n.className,y=n.children,x=n.as,g=void 0===x?"nav":x,E=n.expanded,O=n.onToggle,j=n.onSelect,N=n.collapseOnSelect,C=Object(c.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]);o=Object(p.a)(o,"navbar");var k=Object(r.useCallback)((function(){j&&j.apply(void 0,arguments),N&&E&&O(!1)}),[j,N,E,O]);void 0===C.role&&"nav"!==g&&(C.role="navigation");var S=o+"-expand";"string"===typeof i&&(S=S+"-"+i);var P=Object(r.useMemo)((function(){return{onToggle:function(){return O(!E)},bsPrefix:o,expanded:E}}),[o,E,O]);return a.a.createElement(b.Provider,{value:P},a.a.createElement(w.a.Provider,{value:k},a.a.createElement(g,Object(s.a)({ref:t},C,{className:u()(m,o,i&&S,l&&o+"-"+l,d&&"bg-"+d,h&&"sticky-"+h,v&&"fixed-"+v)}),y)))}));j.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},j.displayName="Navbar",j.Brand=h,j.Toggle=O,j.Collapse=x,j.Text=Object(d.a)("navbar-text",{Component:"span"});var N=j,C=(n("K9S6"),n("Wzyw")),k=n("rQNl"),S=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,i=e.as,l=void 0===i?"div":i,f=Object(c.a)(e,["bsPrefix","className","children","as"]);return n=Object(p.a)(n,"nav-item"),a.a.createElement(l,Object(s.a)({},f,{ref:t,className:u()(r,n)}),o)}));S.displayName="NavItem";var P=S,I=n("dbZe"),_=n("VWqr"),T={disabled:!1,as:I.a},A=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,i=e.href,l=e.eventKey,f=e.onSelect,d=e.as,v=Object(c.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.a)(n,"nav-link"),a.a.createElement(_.a,Object(s.a)({},v,{href:i,ref:t,eventKey:l,as:d,disabled:r,onSelect:f,className:u()(o,n,r&&"disabled")}))}));A.displayName="NavLink",A.defaultProps=T;var D=A,R=a.a.forwardRef((function(e,t){var n,o,i,l=Object(f.a)(e,{activeKey:"onSelect"}),d=l.as,v=void 0===d?"div":d,h=l.bsPrefix,m=l.variant,y=l.fill,x=l.justify,g=l.navbar,E=l.className,O=l.children,w=l.activeKey,j=Object(c.a)(l,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]);h=Object(p.a)(h,"nav");var N=Object(r.useContext)(b),S=Object(r.useContext)(C.a);return N?(o=N.bsPrefix,g=null==g||g):S&&(i=S.cardHeaderBsPrefix),a.a.createElement(k.a,Object(s.a)({as:v,ref:t,activeKey:w,className:u()(E,(n={},n[h]=!g,n[o+"-nav"]=g,n[i+"-"+m]=!!i,n[h+"-"+m]=!!m,n[h+"-fill"]=y,n[h+"-justified"]=x,n))},j),O)}));R.displayName="Nav",R.defaultProps={justify:!1,fill:!1},R.Item=P,R.Link=D;var L=R,q=a.a.createElement,M={background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",position:"sticky",top:"0",width:"100%",transition:"all 0.5s",zIndex:"1"},K=function(){return q(N,{collapseOnSelect:!0,expand:"lg",style:M},q(N.Brand,{href:"#home"},"NextJS with Bootstrap"),q(N.Toggle,{"aria-controls":"responsive-navbar-nav"}),q(N.Collapse,{id:"responsive-navbar-nav"},q(L,{className:"mr-auto"},q(i.a,{href:"/"},q("a",{className:"nav-item nav-link "},"Home")),q(i.a,{href:"/about"},q("a",{className:"nav-item nav-link "},"About")),q(i.a,{href:"/batman"},q("a",{className:"nav-item nav-link "},"Batman")),q(i.a,{href:"/contact"},q("a",{className:"nav-item nav-link "},"Contact")),q(i.a,{href:"/login"},q("a",{className:"nav-item nav-link "},"Login")))))},U=n("7vrA"),V=a.a.createElement,F={height:"auto",bottom:"0",width:"100%",background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",textAlign:"center",paddingTop:"25px",paddingBottom:"25px",position:"fixed"},Q=function(){return V("footer",{className:"footer",style:F},V(U.a,null,V("span",{className:"text-muted"},"Upfloor make nextjs (\u0e51\u2022\u0e35_\u0e40\u2022\u0e35\u0e51)")))},z=n("8Kt/"),W=n.n(z),Y=n("3Z9Z"),B=n("JI6e"),J=n("sjrs"),H=a.a.createElement;t.a=function(e){return H("div",null,H(W.a,null,H("title",null,"My first NextJS project"),H("link",{href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"})),H(K,null),H("br",null),H(U.a,null,H(Y.a,null,H(B.a,{xs:0,sm:0,md:3,lg:3,xl:3},H(J.a,null,H(J.a.Item,null,"Cras justo odio"))),H(B.a,{xs:12,sm:12,md:8,lg:8,xl:8},e.children),H(B.a,{xs:0,sm:0,md:1,lg:1,xl:1}))),H("br",null),H(Q,null))}},"3Z9Z":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.noGutters,f=e.as,d=void 0===f?"div":f,p=Object(a.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(l.a)(n,"row"),h=v+"-cols",m=[];return u.forEach((function(e){var t,n=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&m.push(""+h+r+"-"+t)})),c.a.createElement(d,Object(r.a)({ref:t},p,{className:i.a.apply(void 0,[o,v,s&&"no-gutters"].concat(m))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},t.a=f},"7vrA":function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,s=e.as,u=void 0===s?"div":s,f=e.className,d=Object(a.a)(e,["bsPrefix","fluid","as","className"]),p=Object(l.a)(n,"container"),v="string"===typeof o?"-"+o:"-fluid";return c.a.createElement(u,Object(r.a)({ref:t},d,{className:i()(f,o?""+p+v:p)}))}));u.displayName="Container",u.defaultProps={fluid:!1},t.a=u},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI")),o=r(n("Xuae")),i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var l=f[s];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=a.props[l],d=r[l]||new Set;d.has(u)?o=!1:(d.add(u),r[l]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var p=o.default();function v(e){var t=e.children;return a.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}v.rewind=p.rewind,t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},F9IU:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);t.a=a},ILyh:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n("q1tI"),a=n.n(r).a.createContext(),o=function(e,t){return null!=e?String(e):t||null};t.a=a},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function c(e,t){return Object.keys(t).reduce((function(n,c){var l,u=n,f=u[i(c)],d=u[c],p=Object(a.a)(u,[i(c),c].map(s)),v=t[c],h=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],s=a[1],c=void 0!==e,l=r.current;return r.current=c,!c&&l&&i!==t&&s(t),[c?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),s(e)}),[n])]}(d,f,e[v]),m=h[0],b=h[1];return Object(r.a)({},p,((l={})[c]=m,l[v]=b,l))}),e)}n("dI71");function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function u(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function f(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}l.__suppressDeprecationWarning=!0,u.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0},JI6e:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=n("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.as,f=void 0===s?"div":s,d=Object(a.a)(e,["bsPrefix","className","as"]),p=Object(l.a)(n,"col"),v=[],h=[];return u.forEach((function(e){var t,n,r,a=d[e];if(delete d[e],null!=a&&"object"===typeof a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";null!=t&&v.push(!0===t?""+p+i:""+p+i+"-"+t),null!=r&&h.push("order"+i+"-"+r),null!=n&&h.push("offset"+i+"-"+n)})),v.length||v.push(p),c.a.createElement(f,Object(r.a)({},d,{ref:t,className:i.a.apply(void 0,[o].concat(v,h))}))}));f.displayName="Col",t.a=f},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.default)((function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}))};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,i=n.allowFallback,s=void 0!==i&&i,c=n.displayName,l=void 0===c?e.name||e.displayName:c,u=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!s?a.default.forwardRef(u):function(e){return u(e,null)},{displayName:l,propTypes:r,defaultProps:o})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,i,s],u=0;(c=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},Qg85:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),o=n("Bnag");e.exports=function(e){return r(e)||a(e)||o()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},VWqr:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=n("ZCiN"),u=n("F9IU"),f=n("ILyh"),d=c.a.forwardRef((function(e,t){var n=e.active,o=e.className,d=e.tabIndex,p=e.eventKey,v=e.onSelect,h=e.onClick,m=e.as,b=Object(a.a)(e,["active","className","tabIndex","eventKey","onSelect","onClick","as"]),y=Object(f.b)(p,b.href),x=Object(s.useContext)(f.a),g=Object(s.useContext)(u.a),E=n;g&&(b.role||"tablist"!==g.role||(b.role="tab"),b["data-rb-event-key"]=y,b.id=g.getControllerId(y),b["aria-controls"]=g.getControlledId(y),E=null==n&&null!=y?g.activeKey===y:n),"tab"===b.role&&(b.tabIndex=E?d:-1,b["aria-selected"]=E);var O=Object(l.a)((function(e){h&&h(e),null!=y&&(v&&v(y,e),x&&x(y,e))}));return c.a.createElement(m,Object(r.a)({},b,{ref:t,onClick:O,className:i()(o,E&&"active")}))}));d.defaultProps={disabled:!1},t.a=d},Wzyw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=a.a.createContext(null)},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),a=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),l=n("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),d=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){i(v,l);var f,p=(f=v,function(){var e,t=c(f);if(u()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function v(e){var o;return r(this,v),o=p.call(this,e),d&&(t.add(a(o)),n(a(o))),o}return o(v,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(v,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),v}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=/-(.)/g;var c=n("q1tI"),l=n.n(c),u=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,o=n.displayName,s=void 0===o?f(e):o,c=n.Component,d=void 0===c?"div":c,p=n.defaultProps,v=l.a.forwardRef((function(t,n){var o=t.className,s=t.bsPrefix,c=t.as,f=void 0===c?d:c,p=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(u.a)(s,e);return l.a.createElement(f,Object(r.a)({ref:n,className:i()(o,v)},p))}));return v.defaultProps=p,v.displayName=s,v}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),a=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),s=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var f,d=u(n("q1tI")),p=n("QmWs"),v=n("g/15"),h=l(n("nOHt")),m=n("elyg");function b(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new Map,x=window.IntersectionObserver,g={};function E(){return f||(x?f=new x((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){o(u,e);var t,l=(t=u,function(){var e,n=s(t);if(c()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return i(this,e)});function u(e){var t;return r(this,u),(t=l.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,s=o.as;if(function(e){var t=(0,p.parse)(e,!1,!0),n=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),s=s?(0,p.resolve)(c,s):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=s.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,p.resolve)(e,n);return[a,r?(0,p.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&x&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=E();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),a=r.href,o=r.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var i=d.Children.only(t),s={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||a);var c=n("P5f7").rewriteUrlForNextExport;return s.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=c(s.href)),d.default.cloneElement(i,s)}}]),u}(d.Component);t.default=O},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),i=n.n(o),s=n("Qg85");function c(e){return!e||"#"===e.trim()}var l=i.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(l||c(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return c(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:Object(s.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var s=a||"<<anonymous>>",c=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+s+"`."):null;for(var l=arguments.length,u=Array(l>6?l-6:0),f=6;f<l;f++)u[f-6]=arguments[f];return e.apply(void 0,[n,r,s,o,c].concat(u))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},rQNl:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=Function.prototype.bind.call(Function.prototype.call,[].slice);var i=n("q1tI"),s=n.n(i);var c=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var l=function(e,t){return Object(i.useMemo)((function(){return function(e,t){var n=c(e),r=c(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},u=n("F9IU"),f=n("ILyh"),d=s.a.createContext(null),p=function(){},v=s.a.forwardRef((function(e,t){var n,c,v=e.as,h=void 0===v?"ul":v,m=e.onSelect,b=e.activeKey,y=e.role,x=e.onKeyDown,g=Object(a.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),E=Object(i.useReducer)((function(e){return!e}),!1)[1],O=Object(i.useRef)(!1),w=Object(i.useContext)(f.a),j=Object(i.useContext)(d);j&&(y=y||"tablist",b=j.activeKey,n=j.getControlledId,c=j.getControllerId);var N=Object(i.useRef)(null),C=function(e){if(!N.current)return null;var t,n,r=(t=N.current,n="[data-rb-event-key]:not(.disabled)",o(t.querySelectorAll(n))),a=N.current.querySelector(".active"),i=r.indexOf(a);if(-1===i)return null;var s=i+e;return s>=r.length&&(s=0),s<0&&(s=r.length-1),r[s]},k=function(e,t){null!=e&&(m&&m(e,t),w&&w(e,t))};Object(i.useEffect)((function(){if(N.current&&O.current){var e=N.current.querySelector("[data-rb-event-key].active");e&&e.focus()}O.current=!1}));var S=l(t,N);return s.a.createElement(f.a.Provider,{value:k},s.a.createElement(u.a.Provider,{value:{role:y,activeKey:Object(f.b)(b),getControlledId:n||p,getControllerId:c||p}},s.a.createElement(h,Object(r.a)({},g,{onKeyDown:function(e){var t;switch(x&&x(e),e.key){case"ArrowLeft":case"ArrowUp":t=C(-1);break;case"ArrowRight":case"ArrowDown":t=C(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),O.current=!0,E())},ref:S,role:y}))))}));t.a=v},sjrs:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),s=n("q1tI"),c=n.n(s),l=(n("2W6z"),n("JCAc")),u=n("vUet"),f=n("rQNl"),d=n("VWqr"),p=n("ILyh"),v=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.active,l=e.disabled,f=e.className,v=e.variant,h=e.action,m=e.as,b=e.eventKey,y=e.onClick,x=Object(a.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);n=Object(u.a)(n,"list-group-item");var g=Object(s.useCallback)((function(e){if(l)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[l,y]);return c.a.createElement(d.a,Object(r.a)({ref:t},x,{eventKey:Object(p.b)(b,x.href),as:m||(h?x.href?"a":"button":"div"),onClick:g,className:i()(f,n,o&&"active",l&&"disabled",v&&n+"-"+v,h&&n+"-action")}))}));v.defaultProps={variant:null,active:!1,disabled:!1},v.displayName="ListGroupItem";var h=v,m=c.a.forwardRef((function(e,t){var n,o=Object(l.a)(e,{activeKey:"onSelect"}),s=o.className,d=o.bsPrefix,p=o.variant,v=o.horizontal,h=o.as,m=void 0===h?"div":h,b=Object(a.a)(o,["className","bsPrefix","variant","horizontal","as"]);return d=Object(u.a)(d,"list-group"),n=v?!0===v?"horizontal":"horizontal-"+v:null,c.a.createElement(f.a,Object(r.a)({ref:t},b,{as:m,className:i()(s,d,p&&d+"-"+p,n&&d+"-"+n)}))}));m.defaultProps={variant:null,horizontal:null},m.displayName="ListGroup",m.Item=h;t.a=m},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("wx14"),n("QA0p");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},vYJ8:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("dI71"),i=n("TSYQ"),s=n.n(i);function c(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var l=/([A-Z])/g;var u=/^ms-/;function f(e){return function(e){return e.replace(l,"-$1").toLowerCase()}(e).replace(u,"-ms-")}var d=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var p=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(f(t))||function(e,t){return c(e).getComputedStyle(e,t)}(e).getPropertyValue(f(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!d.test(e))}(a)?n+=f(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(f(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},v=!("undefined"===typeof window||!window.document||!window.document.createElement),h=!1,m=!1;try{var b={get passive(){return h=!0},get once(){return m=h=!0}};v&&(window.addEventListener("test",b,b),window.removeEventListener("test",b,!0))}catch(F){}var y=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!m){var a=r.once,o=r.capture,i=n;!m&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,h?r:o)}e.addEventListener(t,n,r)};var x=function(e,t,n,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var g=function(e,t,n,r){return y(e,t,n,r),function(){x(e,t,n,r)}};v&&window;function E(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=g(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}var O=function(e,t,n){null==n&&(n=function(e){var t=p(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var r=E(e,n),a=g(e,"transitionend",t);return function(){r(),a()}},w=n("q1tI"),j=n.n(w),N=(n("17x9"),n("i8i4")),C=n.n(N),k=!1,S=j.a.createContext(null),P="unmounted",I="exited",_="entering",T="entered",A=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a=I,r.appearStatus=_):a=T:a=t.unmountOnExit||t.mountOnEnter?P:I,r.state={status:a},r.nextCallback=null,r}Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===P?{status:I}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==_&&n!==T&&(t=_):n!==_&&n!==T||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=C.a.findDOMNode(this);t===_?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===I&&this.setState({status:P})},n.performEnter=function(e,t){var n=this,r=this.props.enter,a=this.context?this.context.isMounting:t,o=this.getTimeouts(),i=a?o.appear:o.enter;!t&&!r||k?this.safeSetState({status:T},(function(){n.props.onEntered(e)})):(this.props.onEnter(e,a),this.safeSetState({status:_},(function(){n.props.onEntering(e,a),n.onTransitionEnd(e,i,(function(){n.safeSetState({status:T},(function(){n.props.onEntered(e,a)}))}))})))},n.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n&&!k?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:I},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:I},(function(){t.props.onExited(e)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===P)return null;var t=this.props,n=t.children,r=Object(a.a)(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"===typeof n)return j.a.createElement(S.Provider,{value:null},n(e,r));var o=j.a.Children.only(n);return j.a.createElement(S.Provider,{value:null},j.a.cloneElement(o,r))},t}(j.a.Component);function D(){}A.contextType=S,A.propTypes={},A.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:D,onEntering:D,onEntered:D,onExit:D,onExiting:D,onExited:D},A.UNMOUNTED=0,A.EXITED=1,A.ENTERING=2,A.ENTERED=3,A.EXITING=4;var R,L=A,q=n("Qg85");var M={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};var K=((R={})[I]="collapse",R.exiting="collapsing",R[_]="collapsing",R[T]="collapse show",R),U={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,dimension:"height",getDimensionValue:function(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=M[e];return n+parseInt(p(t,r[0]),10)+parseInt(p(t,r[1]),10)}},V=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(e){e.style[t.getDimension()]="0"},t.handleEntering=function(e){var n=t.getDimension();e.style[n]=t._getScrollDimensionValue(e,n)},t.handleEntered=function(e){e.style[t.getDimension()]=null},t.handleExit=function(e){var n=t.getDimension();e.style[n]=t.props.getDimensionValue(n,e)+"px",e.offsetHeight},t.handleExiting=function(e){e.style[t.getDimension()]=null},t}Object(o.a)(t,e);var n=t.prototype;return n.getDimension=function(){return"function"===typeof this.props.dimension?this.props.dimension():this.props.dimension},n._getScrollDimensionValue=function(e,t){return e["scroll"+t[0].toUpperCase()+t.slice(1)]+"px"},n.render=function(){var e=this,t=this.props,n=t.onEnter,o=t.onEntering,i=t.onEntered,c=t.onExit,l=t.onExiting,u=t.className,f=t.children,d=Object(a.a)(t,["onEnter","onEntering","onEntered","onExit","onExiting","className","children"]);delete d.dimension,delete d.getDimensionValue;var p=Object(q.a)(this.handleEnter,n),v=Object(q.a)(this.handleEntering,o),h=Object(q.a)(this.handleEntered,i),m=Object(q.a)(this.handleExit,c),b=Object(q.a)(this.handleExiting,l);return j.a.createElement(L,Object(r.a)({addEndListener:O},d,{"aria-expanded":d.role?d.in:null,onEnter:p,onEntering:v,onEntered:h,onExit:m,onExiting:b}),(function(t,n){return j.a.cloneElement(f,Object(r.a)({},n,{className:s()(u,f.props.className,K[t],"width"===e.getDimension()&&"width")}))}))},t}(j.a.Component);V.defaultProps=U;t.a=V},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);