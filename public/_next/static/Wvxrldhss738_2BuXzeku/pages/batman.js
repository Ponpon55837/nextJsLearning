(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3Z9Z":function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),l=t.n(r),o=t("q1tI"),c=t.n(o),i=t("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,o=a.noGutters,f=a.as,d=void 0===f?"div":f,v=Object(s.a)(a,["bsPrefix","className","noGutters","as"]),m=Object(i.a)(t,"row"),p=m+"-cols",b=[];return u.forEach((function(a){var e,t=v[a];delete v[a];var n="xs"!==a?"-"+a:"";null!=(e=null!=t&&"object"===typeof t?t.cols:t)&&b.push(""+p+n+"-"+e)})),c.a.createElement(d,Object(n.a)({ref:e},v,{className:l.a.apply(void 0,[r,m,o&&"no-gutters"].concat(b))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},e.a=f},Bjnu:function(a,e,t){"use strict";t.r(e);var n=t("o0o1"),s=t.n(n),r=t("q1tI"),l=t.n(r),o=t("CafY"),c=t("YFqc"),i=t.n(c),u=t("8Kt/"),f=t.n(u),d=t("vcXL"),v=t.n(d),m=t("7vrA"),p=t("3Z9Z"),b=t("JI6e"),h=t("sjrs"),w=l.a.createElement,x=function(a,e){var t=e.title,n=void 0===t?"Batman TV show menu":t;return w(l.a.Fragment,null,w(f.a,null,w("title",null,n)),w(o.a,null,w(m.a,{fluid:!0},w(p.a,null,w(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:2,xl:2}),w(b.a,{xs:12,sm:12,md:10,lg:8,xl:8},w("h1",null,"Batman TV Shows"),w("ul",null,a.shows.map((function(a){return w(h.a,{variant:"flush",key:a.id},w(h.a.Item,null,w(i.a,{href:"/batman/[id]",as:"/batman/".concat(a.id)},w("a",null,a.name))))})))),w(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:2,xl:2})))))};x.getInitialProps=function(){var a,e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(v()("https://api.tvmaze.com/search/shows?q=batman"));case 2:return a=t.sent,t.next=5,s.a.awrap(a.json());case 5:return e=t.sent,console.log("Show data fetched. Count: ".concat(e.length)),t.abrupt("return",{shows:e.map((function(a){return a.show}))});case 8:case"end":return t.stop()}}),null,null,null,Promise)},e.default=x},JI6e:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),l=t.n(r),o=t("q1tI"),c=t.n(o),i=t("vUet"),u=["xl","lg","md","sm","xs"],f=c.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.className,o=a.as,f=void 0===o?"div":o,d=Object(s.a)(a,["bsPrefix","className","as"]),v=Object(i.a)(t,"col"),m=[],p=[];return u.forEach((function(a){var e,t,n,s=d[a];if(delete d[a],null!=s&&"object"===typeof s){var r=s.span;e=void 0===r||r,t=s.offset,n=s.order}else e=s;var l="xs"!==a?"-"+a:"";null!=e&&m.push(!0===e?""+v+l:""+v+l+"-"+e),null!=n&&p.push("order"+l+"-"+n),null!=t&&p.push("offset"+l+"-"+t)})),m.length||m.push(v),c.a.createElement(f,Object(n.a)({},d,{ref:e,className:l.a.apply(void 0,[r].concat(m,p))}))}));f.displayName="Col",e.a=f},rsHa:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batman",function(){return t("Bjnu")}])},sjrs:function(a,e,t){"use strict";var n=t("wx14"),s=t("zLVn"),r=t("TSYQ"),l=t.n(r),o=t("q1tI"),c=t.n(o),i=(t("2W6z"),t("JCAc")),u=t("vUet"),f=t("rQNl"),d=t("VWqr"),v=t("ILyh"),m=c.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.active,i=a.disabled,f=a.className,m=a.variant,p=a.action,b=a.as,h=a.eventKey,w=a.onClick,x=Object(s.a)(a,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.a)(t,"list-group-item");var j=Object(o.useCallback)((function(a){if(i)return a.preventDefault(),void a.stopPropagation();w&&w(a)}),[i,w]);return c.a.createElement(d.a,Object(n.a)({ref:e},x,{eventKey:Object(v.b)(h,x.href),as:b||(p?x.href?"a":"button":"div"),onClick:j,className:l()(f,t,r&&"active",i&&"disabled",m&&t+"-"+m,p&&t+"-action")}))}));m.defaultProps={variant:null,active:!1,disabled:!1},m.displayName="ListGroupItem";var p=m,b=c.a.forwardRef((function(a,e){var t,r=Object(i.a)(a,{activeKey:"onSelect"}),o=r.className,d=r.bsPrefix,v=r.variant,m=r.horizontal,p=r.as,b=void 0===p?"div":p,h=Object(s.a)(r,["className","bsPrefix","variant","horizontal","as"]);return d=Object(u.a)(d,"list-group"),t=m?!0===m?"horizontal":"horizontal-"+m:null,c.a.createElement(f.a,Object(n.a)({ref:e},h,{as:b,className:l()(o,d,v&&d+"-"+v,t&&d+"-"+t)}))}));b.defaultProps={variant:null,horizontal:null},b.displayName="ListGroup",b.Item=p;e.a=b},vcXL:function(a,e,t){"use strict";var n=self.fetch.bind(self);a.exports=n,a.exports.default=a.exports}},[["rsHa",0,1,2,3,4,5,6]]]);