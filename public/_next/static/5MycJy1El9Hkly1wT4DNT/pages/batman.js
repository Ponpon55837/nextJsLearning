(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3Z9Z":function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),o=t.n(r),l=t("q1tI"),c=t.n(l),i=t("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,l=a.noGutters,f=a.as,d=void 0===f?"div":f,m=Object(s.a)(a,["bsPrefix","className","noGutters","as"]),v=Object(i.a)(t,"row"),p=v+"-cols",b=[];return u.forEach((function(a){var e,t=m[a];delete m[a];var n="xs"!==a?"-"+a:"";null!=(e=null!=t&&"object"===typeof t?t.cols:t)&&b.push(""+p+n+"-"+e)})),c.a.createElement(d,Object(n.a)({ref:e},m,{className:o.a.apply(void 0,[r,v,l&&"no-gutters"].concat(b))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},e.a=f},Bjnu:function(a,e,t){"use strict";t.r(e);var n=t("o0o1"),s=t.n(n),r=t("q1tI"),o=t.n(r),l=t("CafY"),c=t("YFqc"),i=t.n(c),u=t("8Kt/"),f=t.n(u),d=t("vcXL"),m=t.n(d),v=t("OZiG"),p=t("7vrA"),b=t("3Z9Z"),h=t("JI6e"),w=t("sjrs"),x=o.a.createElement,j=function(a,e){var t=e.title,n=void 0===t?"Batman TV show menu":t;return x(o.a.Fragment,null,x(f.a,null,x("title",null,n),x("meta",{property:"og:description",content:a.shows?a.shows.map((function(a){return a.name}))+"."+Object(v.pageDescription)():Object(v.pageDescription)()})),x(l.a,null,x(p.a,{fluid:!0},x(b.a,null,x(h.a,{className:"d-none d-sm-none d-md-block",md:1,lg:2,xl:2}),x(h.a,{xs:12,sm:12,md:10,lg:8,xl:8},x("h1",null,"Batman TV Shows"),x("ul",null,a.shows.map((function(a){return x(w.a,{variant:"flush",key:a.id},x(w.a.Item,null,x(i.a,{href:"/batman/[id]",as:"/batman/".concat(a.id)},x("a",null,a.name))))})))),x(h.a,{className:"d-none d-sm-none d-md-block",md:1,lg:2,xl:2})))))};j.getInitialProps=function(){var a,e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(m()("https://api.tvmaze.com/search/shows?q=batman"));case 2:return a=t.sent,t.next=5,s.a.awrap(a.json());case 5:return e=t.sent,console.log("Show data fetched. Count: ".concat(e.length)),t.abrupt("return",{shows:e.map((function(a){return a.show}))});case 8:case"end":return t.stop()}}),null,null,null,Promise)},e.default=j},JI6e:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),o=t.n(r),l=t("q1tI"),c=t.n(l),i=t("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,l=a.as,f=void 0===l?"div":l,d=Object(s.a)(a,["bsPrefix","className","as"]),m=Object(i.a)(t,"col"),v=[],p=[];return u.forEach((function(a){var e,t,n,s=d[a];if(delete d[a],null!=s&&"object"===typeof s){var r=s.span;e=void 0===r||r,t=s.offset,n=s.order}else e=s;var o="xs"!==a?"-"+a:"";null!=e&&v.push(!0===e?""+m+o:""+m+o+"-"+e),null!=n&&p.push("order"+o+"-"+n),null!=t&&p.push("offset"+o+"-"+t)})),v.length||v.push(m),c.a.createElement(f,Object(n.a)({},d,{ref:e,className:o.a.apply(void 0,[r].concat(v,p))}))}));f.displayName="Col",e.a=f},rsHa:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batman",function(){return t("Bjnu")}])},sjrs:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),o=t.n(r),l=t("q1tI"),c=t.n(l),i=(t("2W6z"),t("JCAc")),u=t("vUet"),f=t("rQNl"),d=t("VWqr"),m=t("ILyh"),v=c.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.active,i=a.disabled,f=a.className,v=a.variant,p=a.action,b=a.as,h=a.eventKey,w=a.onClick,x=Object(s.a)(a,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.a)(t,"list-group-item");var j=Object(l.useCallback)((function(a){if(i)return a.preventDefault(),void a.stopPropagation();w&&w(a)}),[i,w]);return c.a.createElement(d.a,Object(n.a)({ref:e},x,{eventKey:Object(m.b)(h,x.href),as:b||(p?x.href?"a":"button":"div"),onClick:j,className:o()(f,t,r&&"active",i&&"disabled",v&&t+"-"+v,p&&t+"-action")}))}));v.defaultProps={variant:null,active:!1,disabled:!1},v.displayName="ListGroupItem";var p=v,b=c.a.forwardRef((function(a,e){var t,r=Object(i.a)(a,{activeKey:"onSelect"}),l=r.className,d=r.bsPrefix,m=r.variant,v=r.horizontal,p=r.as,b=void 0===p?"div":p,h=Object(s.a)(r,["className","bsPrefix","variant","horizontal","as"]);return d=Object(u.a)(d,"list-group"),t=v?!0===v?"horizontal":"horizontal-"+v:null,c.a.createElement(f.a,Object(n.a)({ref:e},h,{as:b,className:o()(l,d,m&&d+"-"+m,t&&d+"-"+t)}))}));b.defaultProps={variant:null,horizontal:null},b.displayName="ListGroup",b.Item=p;e.a=b},vcXL:function(a,e,t){"use strict";var n=self.fetch.bind(self);a.exports=n,a.exports.default=a.exports}},[["rsHa",0,1,2,3,4,5,6]]]);