(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),s=t("TSYQ"),r=t.n(s),o=t("q1tI"),i=t.n(o),c=t("vUet"),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.noGutters,d=e.as,f=void 0===d?"div":d,v=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),m=Object(c.a)(t,"row"),b=m+"-cols",p=[];return u.forEach((function(e){var a,t=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+b+n+"-"+a)})),i.a.createElement(f,Object(n.a)({ref:a},v,{className:r.a.apply(void 0,[s,m,o&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},BR8T:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t("YbiN")}])},JI6e:function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),s=t("TSYQ"),r=t.n(s),o=t("q1tI"),i=t.n(o),c=t("vUet"),u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.as,d=void 0===o?"div":o,f=Object(l.a)(e,["bsPrefix","className","as"]),v=Object(c.a)(t,"col"),m=[],b=[];return u.forEach((function(e){var a,t,n,l=f[e];if(delete f[e],null!=l&&"object"===typeof l){var s=l.span;a=void 0===s||s,t=l.offset,n=l.order}else a=l;var r="xs"!==e?"-"+e:"";null!=a&&m.push(!0===a?""+v+r:""+v+r+"-"+a),null!=n&&b.push("order"+r+"-"+n),null!=t&&b.push("offset"+r+"-"+t)})),m.length||m.push(v),i.a.createElement(d,Object(n.a)({},f,{ref:a,className:r.a.apply(void 0,[s].concat(m,b))}))}));d.displayName="Col",a.a=d},YbiN:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return b}));var n=t("q1tI"),l=t.n(n),s=t("8Kt/"),r=t.n(s),o=t("kWUi"),i=t("OZiG"),c=t("CafY"),u=t("7vrA"),d=t("3Z9Z"),f=t("JI6e"),v=t("sjrs"),m=l.a.createElement,b=!0;a.default=function(e){var a=e.headers,t=e.title,n=void 0===t?"Blog Page":t;return m(l.a.Fragment,null,m(r.a,null,m("title",null,n)),m(c.a,null,m(u.a,{fluid:!0},m(d.a,null,m(f.a,{className:"d-none d-sm-none d-md-block",md:2,lg:2,xl:2},m(o.default,{headers:a})),m(f.a,{xs:12,sm:12,md:10,lg:8,xl:8},m("h1",null,"My Blog"),Object(i.getIndexHelloNextJs)()?Object(i.getIndexHelloNextJs)().map((function(e){return m(v.a,{variant:"flush",key:e.id},m(v.a.Item,null,m(i.PostLink,{key:e.id,post:e})))})):"Loading..."),m(f.a,{className:"d-none d-sm-none d-md-none d-lg-block",lg:2,xl:2})))))}},kWUi:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),s=(t("vcXL"),t("1N03")),r=t("YFqc"),o=t.n(r),i=t("sjrs"),c=l.a.createElement;a.default=function(e){var a=e.headers;return console.log(a),c(l.a.Fragment,null,c(i.a,{variant:"flush"},c(i.a.Item,null,a?a.map((function(e){return c(o.a,{href:e.url,key:e.id},c("a",{className:"nav-item nav-link",style:s.i},e.title))})):"Loading ...")))}},sjrs:function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),s=t("TSYQ"),r=t.n(s),o=t("q1tI"),i=t.n(o),c=(t("2W6z"),t("JCAc")),u=t("vUet"),d=t("rQNl"),f=t("VWqr"),v=t("ILyh"),m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,c=e.disabled,d=e.className,m=e.variant,b=e.action,p=e.as,x=e.eventKey,N=e.onClick,h=Object(l.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.a)(t,"list-group-item");var g=Object(o.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();N&&N(e)}),[c,N]);return i.a.createElement(f.a,Object(n.a)({ref:a},h,{eventKey:Object(v.b)(x,h.href),as:p||(b?h.href?"a":"button":"div"),onClick:g,className:r()(d,t,s&&"active",c&&"disabled",m&&t+"-"+m,b&&t+"-action")}))}));m.defaultProps={variant:null,active:!1,disabled:!1},m.displayName="ListGroupItem";var b=m,p=i.a.forwardRef((function(e,a){var t,s=Object(c.a)(e,{activeKey:"onSelect"}),o=s.className,f=s.bsPrefix,v=s.variant,m=s.horizontal,b=s.as,p=void 0===b?"div":b,x=Object(l.a)(s,["className","bsPrefix","variant","horizontal","as"]);return f=Object(u.a)(f,"list-group"),t=m?!0===m?"horizontal":"horizontal-"+m:null,i.a.createElement(d.a,Object(n.a)({ref:a},x,{as:p,className:r()(o,f,v&&f+"-"+v,t&&f+"-"+t)}))}));p.defaultProps={variant:null,horizontal:null},p.displayName="ListGroup",p.Item=b;a.a=p},vcXL:function(e,a,t){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["BR8T",0,1,2,3,4,5,6,7]]]);