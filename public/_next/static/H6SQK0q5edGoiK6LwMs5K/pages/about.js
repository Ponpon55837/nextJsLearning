(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),u=t("YdCC"),d=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t("Wzyw"),f=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(i.a)(t,"card-img");return s.a.createElement(d,Object(r.a)({ref:a,className:l()(o?f+"-"+o:f,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var v=f,m=d("h5"),p=d("h6"),x=Object(u.a)("card-body"),h=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,f=e.border,v=e.body,m=e.children,p=e.as,h=void 0===p?"div":p,y=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(i.a)(t,"card"),O=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(b.a.Provider,{value:O},s.a.createElement(h,Object(r.a)({ref:a},y,{className:l()(c,j,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),v?s.a.createElement(x,null,m):m))}));h.displayName="Card",h.defaultProps={body:!1},h.Img=v,h.Title=Object(u.a)("card-title",{Component:m}),h.Subtitle=Object(u.a)("card-subtitle",{Component:p}),h.Body=x,h.Link=Object(u.a)("card-link",{Component:"a"}),h.Text=Object(u.a)("card-text",{Component:"p"}),h.Header=Object(u.a)("card-header"),h.Footer=Object(u.a)("card-footer"),h.ImgOverlay=Object(u.a)("card-img-overlay");a.a=h},Juyh:function(e,a,t){"use strict";t.r(a);var r=t("o0o1"),n=t.n(r),c=t("q1tI"),l=t.n(c),o=t("3Hq7"),s=t("vcXL"),i=t.n(s),u=t("8Kt/"),d=t.n(u),b=t("7vrA"),f=t("3Z9Z"),v=t("JI6e"),m=t("6xyR"),p=t("wx14"),x=t("zLVn"),h=t("TSYQ"),y=t.n(h),j=t("JCAc"),O=t("vUet"),g=t("ILyh"),w=l.a.createContext(null);var C=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,n=e.children,o=e.eventKey,s=e.onClick,i=Object(x.a)(e,["as","children","eventKey","onClick"]),u=function(e,a){var t=Object(c.useContext)(w),r=Object(c.useContext)(g.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(o,s);return"button"===r&&(i.type="button"),l.a.createElement(r,Object(p.a)({ref:a,onClick:u},i),n)})),N=t("vYJ8"),P=l.a.forwardRef((function(e,a){var t=e.children,r=e.eventKey,n=Object(x.a)(e,["children","eventKey"]),o=Object(c.useContext)(w);return l.a.createElement(N.a,Object(p.a)({ref:a,in:o===r},n),l.a.createElement("div",null,l.a.Children.only(t)))}));P.displayName="AccordionCollapse";var E=P,K=l.a.forwardRef((function(e,a){var t=Object(j.a)(e,{activeKey:"onSelect"}),r=t.as,n=void 0===r?"div":r,c=t.activeKey,o=t.bsPrefix,s=t.children,i=t.className,u=t.onSelect,d=Object(x.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return o=Object(O.a)(o,"accordion"),l.a.createElement(w.Provider,{value:c},l.a.createElement(g.a.Provider,{value:u},l.a.createElement(n,Object(p.a)({ref:a},d,{className:y()(i,o)}),s)))}));K.Toggle=C,K.Collapse=E;var T=K,I=l.a.createElement,R=function(e){var a=e.stars,t=e.title,r=void 0===t?"About this url page":t;return I(l.a.Fragment,null,I(d.a,null,I("title",null,r)),I(o.a,null,I(b.a,{fluid:!0},I(f.a,null,I(v.a,{xs:0,sm:0,md:1,lg:2,xl:2}),I(v.a,{xs:12,sm:12,md:10,lg:8,xl:8},I("h1",null,"This is the about page"),I(T,{defaultActiveKey:"0"},I(m.a,null,I(T.Toggle,{as:m.a.Header,eventKey:"0"},a.svn_url),I(T.Collapse,{eventKey:"0"},I(m.a.Body,null,I("a",{href:a.subscribers_url},a.homepage)))))),I(v.a,{xs:0,sm:0,md:1,lg:2,xl:2})))))};R.getInitialProps=function(e){var a,t;return n.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.req,r.next=3,n.a.awrap(i()("https://api.github.com/repos/zeit/next.js"));case 3:return a=r.sent,r.next=6,n.a.awrap(a.json());case 6:return t=r.sent,console.log("Show data fetched. Count: ".concat(t.length)),r.abrupt("return",{stars:t});case 9:case"end":return r.stop()}}),null,null,null,Promise)};a.default=R},NW6U:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["NW6U",0,2,1,3]]]);