(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),i=t.n(o),s=t("vUet"),d=t("YdCC"),u=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(n.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t("Wzyw"),m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(s.a)(t,"card-img");return i.a.createElement(u,Object(n.a)({ref:a,className:l()(o?m+"-"+o:m,c)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var f=m,v=u("h5"),p=u("h6"),O=Object(d.a)("card-body"),g=Object(d.a)("card-title",{Component:v}),j=Object(d.a)("card-subtitle",{Component:p}),y=Object(d.a)("card-link",{Component:"a"}),x=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),h=Object(d.a)("card-footer"),C=Object(d.a)("card-img-overlay"),w=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,m=e.border,f=e.body,v=e.children,p=e.as,g=void 0===p?"div":p,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.a)(t,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return i.a.createElement(b.a.Provider,{value:x},i.a.createElement(g,Object(n.a)({ref:a},j,{className:l()(c,y,d&&"bg-"+d,u&&"text-"+u,m&&"border-"+m)}),f?i.a.createElement(O,null,v):v))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=f,w.Title=g,w.Subtitle=j,w.Body=O,w.Link=y,w.Text=x,w.Header=N,w.Footer=h,w.ImgOverlay=C;a.a=w},ALdH:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("CafY"),l=t("8Kt/"),o=t.n(l),i=(t("vcXL"),t("OZiG")),s=t("ZDb6"),d=t("7vrA"),u=t("3Z9Z"),b=t("JI6e"),m=r.a.createElement;a.default=function(e,a){var t=a.title,n=void 0===t?"Contact to the park":t,l=a.h1_id,f=void 0===l?5:l,v=a.arr_id,p=void 0===v?5:v;return m(r.a.Fragment,null,m(o.a,null,m("title",null,n+".   "+Object(i.titleDescription)()),m("meta",{property:"og:description",content:Object(i.getPark)()?Object(i.getPark)().map((function(e){return e.introduction}))+"."+Object(i.pageDescription)():Object(i.pageDescription)()})),m(c.a,null,m(d.a,{fluid:!0},m(u.a,null,m(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1}),m(b.a,{xs:12,sm:12,md:10,lg:10,xl:10},Object(i.h1Mapping)()?Object(i.h1Mapping)(f,p):null,m(u.a,null,m(s.ContactJson,null)),m("br",null),m("br",null)),m(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1})))))}},DZHF:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),i=t.n(o),s=t("JCAc"),d=t("vUet"),u=t("ILyh"),b=i.a.createContext(null);b.displayName="AccordionContext";var m=b;var f=i.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,l=e.children,s=e.eventKey,d=e.onClick,b=Object(r.a)(e,["as","children","eventKey","onClick"]),f=function(e,a){var t=Object(o.useContext)(m),n=Object(o.useContext)(u.a);return function(r){n&&n(e===t?null:e,r),a&&a(r)}}(s,d);return"button"===c&&(b.type="button"),i.a.createElement(c,Object(n.a)({ref:a,onClick:f},b),l)})),v=t("vYJ8"),p=i.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,l=Object(r.a)(e,["children","eventKey"]),s=Object(o.useContext)(m);return i.a.createElement(v.a,Object(n.a)({ref:a,in:s===c},l),i.a.createElement("div",null,i.a.Children.only(t)))}));p.displayName="AccordionCollapse";var O=p,g=i.a.forwardRef((function(e,a){var t=Object(s.a)(e,{activeKey:"onSelect"}),c=t.as,o=void 0===c?"div":c,b=t.activeKey,f=t.bsPrefix,v=t.children,p=t.className,O=t.onSelect,g=Object(r.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),j=l()(p,Object(d.a)(f,"accordion"));return i.a.createElement(m.Provider,{value:b||null},i.a.createElement(u.a.Provider,{value:O||null},i.a.createElement(o,Object(n.a)({ref:a},g,{className:j}),v)))}));g.displayName="Accordion",g.Toggle=f,g.Collapse=O;a.a=g},ZDb6:function(e,a,t){"use strict";t.r(a),t.d(a,"ContactJson",(function(){return g}));var n=t("q1tI"),r=t.n(n),c=t("OZiG"),l=t("1N03"),o=t("JI6e"),i=t("DZHF"),s=t("6xyR"),d=t("wx14"),u=t("zLVn"),b=t("TSYQ"),m=t.n(b),f=t("vUet"),v=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,c=e.pill,l=e.className,o=e.as,i=void 0===o?"span":o,s=Object(u.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(f.a)(t,"badge");return r.a.createElement(i,Object(d.a)({ref:a},s,{className:m()(l,b,c&&b+"-pill",n&&b+"-"+n)}))}));v.displayName="Badge",v.defaultProps={pill:!1};var p=v,O=r.a.createElement,g=function(){return O(r.a.Fragment,null,Object(c.getPark)()?Object(c.getPark)().map((function(e){return O(o.a,{xs:12,sm:12,md:12,lg:6,xl:4,key:"".concat(e.areaId," + ").concat(e.parkId),style:l.k},O(i.a,{defaultActiveKey:"false"},O(s.a,{park:e,style:l.h},O(i.a.Toggle,{as:s.a.Header,eventKey:"".concat(e.areaId," + ").concat(e.parkId)},e.areaName),O(s.a.Subtitle,{className:"text-muted m-2"},O(p,{className:"mr-2 mb-1",variant:"info"},e.introduction.length>18?e.introduction.substring(0,19):e.introduction,O("br",null),e.introduction.length>19?e.introduction.substring(19,100):""),O(p,{className:"",variant:"secondary"},e.address.length>19?e.address.substring(0,19):e.address,O("br",null),e.address.length>19?e.address.substring(19,100):"")),O(i.a.Collapse,{eventKey:"".concat(e.areaId," + ").concat(e.parkId)},O(s.a.Body,null,e.payGuide)))))})):"Loading ...")}},lqnA:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t("ALdH")}])},vcXL:function(e,a,t){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["lqnA",0,1,2,3,4,5]]]);