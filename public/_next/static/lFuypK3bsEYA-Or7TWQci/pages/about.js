(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),u=t("YdCC"),d=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t("Wzyw"),f=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(i.a)(t,"card-img");return s.a.createElement(d,Object(r.a)({ref:a,className:l()(o?f+"-"+o:f,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var v=f,m=d("h5"),x=d("h6"),p=Object(u.a)("card-body"),O=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,f=e.border,v=e.body,m=e.children,x=e.as,O=void 0===x?"div":x,y=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(i.a)(t,"card"),h=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(b.a.Provider,{value:h},s.a.createElement(O,Object(r.a)({ref:a},y,{className:l()(c,j,u&&"bg-"+u,d&&"text-"+d,f&&"border-"+f)}),v?s.a.createElement(p,null,m):m))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=v,O.Title=Object(u.a)("card-title",{Component:m}),O.Subtitle=Object(u.a)("card-subtitle",{Component:x}),O.Body=p,O.Link=Object(u.a)("card-link",{Component:"a"}),O.Text=Object(u.a)("card-text",{Component:"p"}),O.Header=Object(u.a)("card-header"),O.Footer=Object(u.a)("card-footer"),O.ImgOverlay=Object(u.a)("card-img-overlay");a.a=O},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("JCAc"),u=t("vUet"),d=t("ILyh"),b=s.a.createContext(null);var f=s.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,l=e.children,i=e.eventKey,u=e.onClick,f=Object(n.a)(e,["as","children","eventKey","onClick"]),v=function(e,a){var t=Object(o.useContext)(b),r=Object(o.useContext)(d.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(i,u);return"button"===c&&(f.type="button"),s.a.createElement(c,Object(r.a)({ref:a,onClick:v},f),l)})),v=t("vYJ8"),m=s.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,l=Object(n.a)(e,["children","eventKey"]),i=Object(o.useContext)(b);return s.a.createElement(v.a,Object(r.a)({ref:a,in:i===c},l),s.a.createElement("div",null,s.a.Children.only(t)))}));m.displayName="AccordionCollapse";var x=m,p=s.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),c=t.as,o=void 0===c?"div":c,f=t.activeKey,v=t.bsPrefix,m=t.children,x=t.className,p=t.onSelect,O=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return v=Object(u.a)(v,"accordion"),s.a.createElement(b.Provider,{value:f},s.a.createElement(d.a.Provider,{value:p},s.a.createElement(o,Object(r.a)({ref:a},O,{className:l()(x,v)}),m)))}));p.Toggle=f,p.Collapse=x;a.a=p},EXQO:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=(t("vcXL"),t("JI6e")),l=t("6xyR"),o=t("DZHF"),s=n.a.createElement;a.default=function(e){var a=e.repos;return s(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},s(o.a,{defaultActiveKey:a.svn_url},s(l.a,null,s(o.a.Toggle,{as:l.a.Header,eventKey:a.svn_url},a.svn_url),s(o.a.Collapse,{eventKey:a.svn_url},s(l.a.Body,null,s("a",{href:a.subscribers_url},a.homepage))))))}},Juyh:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return f}));var r=t("q1tI"),n=t.n(r),c=t("3Hq7"),l=t("8Kt/"),o=t.n(l),s=t("EXQO"),i=t("7vrA"),u=t("3Z9Z"),d=t("JI6e"),b=n.a.createElement,f=!0;a.default=function(e){var a=e.repos,t=(e.repos_sub,e.title),r=void 0===t?"About this url page":t;return b(n.a.Fragment,null,b(o.a,null,b("title",null,r)),b(c.a,null,b(i.a,{fluid:!0},b(u.a,null,b(d.a,{xs:0,sm:0,md:1,lg:2,xl:2}),b(d.a,{xs:12,sm:12,md:10,lg:8,xl:8},b("h1",null,"This is the about page"),b(s.default,{repos:a}),b("br",null)),b(d.a,{xs:0,sm:0,md:1,lg:2,xl:2})))))}},NW6U:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["NW6U",0,1,2,3,4,5,6]]]);