(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),s=t.n(l),i=t("vUet"),d=t("YdCC"),u=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))},b=t("Wzyw"),f=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),f=Object(i.a)(t,"card-img");return s.a.createElement(u,Object(r.a)({ref:a,className:o()(l?f+"-"+l:f,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var v=f,m=u("h5"),p=u("h6"),y=Object(d.a)("card-body"),O=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,f=e.border,v=e.body,m=e.children,p=e.as,O=void 0===p?"div":p,j=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(t,"card"),g=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return s.a.createElement(b.a.Provider,{value:g},s.a.createElement(O,Object(r.a)({ref:a},j,{className:o()(c,x,d&&"bg-"+d,u&&"text-"+u,f&&"border-"+f)}),v?s.a.createElement(y,null,m):m))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=v,O.Title=Object(d.a)("card-title",{Component:m}),O.Subtitle=Object(d.a)("card-subtitle",{Component:p}),O.Body=y,O.Link=Object(d.a)("card-link",{Component:"a"}),O.Text=Object(d.a)("card-text",{Component:"p"}),O.Header=Object(d.a)("card-header"),O.Footer=Object(d.a)("card-footer"),O.ImgOverlay=Object(d.a)("card-img-overlay");a.a=O},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),s=t.n(l),i=t("JCAc"),d=t("vUet"),u=t("ILyh"),b=s.a.createContext(null);var f=s.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,o=e.children,i=e.eventKey,d=e.onClick,f=Object(n.a)(e,["as","children","eventKey","onClick"]),v=function(e,a){var t=Object(l.useContext)(b),r=Object(l.useContext)(u.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(i,d);return"button"===c&&(f.type="button"),s.a.createElement(c,Object(r.a)({ref:a,onClick:v},f),o)})),v=t("vYJ8"),m=s.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,o=Object(n.a)(e,["children","eventKey"]),i=Object(l.useContext)(b);return s.a.createElement(v.a,Object(r.a)({ref:a,in:i===c},o),s.a.createElement("div",null,s.a.Children.only(t)))}));m.displayName="AccordionCollapse";var p=m,y=s.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),c=t.as,l=void 0===c?"div":c,f=t.activeKey,v=t.bsPrefix,m=t.children,p=t.className,y=t.onSelect,O=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return v=Object(d.a)(v,"accordion"),s.a.createElement(b.Provider,{value:f},s.a.createElement(u.a.Provider,{value:y},s.a.createElement(l,Object(r.a)({ref:a},O,{className:o()(p,v)}),m)))}));y.Toggle=f,y.Collapse=p;a.a=y},EXQO:function(e,a,t){"use strict";t.r(a),t.d(a,"ReposJson",(function(){return i})),t.d(a,"SubscribersJson",(function(){return d}));var r=t("q1tI"),n=t.n(r),c=(t("vcXL"),t("JI6e")),o=t("6xyR"),l=t("DZHF"),s=n.a.createElement,i=function(e){var a=e.repos;return s(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},s(l.a,{defaultActiveKey:a.svn_url},s(o.a,null,s(l.a.Toggle,{as:o.a.Header,eventKey:a.svn_url},a.svn_url),s(l.a.Collapse,{eventKey:a.svn_url},s(o.a.Body,null,s("a",{href:a.subscribers_url},a.homepage))))))},d=function(e){var a=e.subscribers;return s(n.a.Fragment,null,s(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},a?a.map((function(e){return s(l.a,{defaultActiveKey:e.id},s(o.a,null,s(l.a.Toggle,{as:o.a.Header,eventKey:e.id},e.login),s(l.a.Collapse,{eventKey:e.id},s(o.a.Body,null,s("a",{href:e.url},e.login)))))})):"Loading..."))}},r6es:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apiComponents/reposJson",function(){return t("EXQO")}])},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["r6es",0,1,2,4]]]);