(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6xyR":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),i=t.n(o),s=t("vUet"),u=t("YdCC"),d=function(e){return i.a.forwardRef((function(a,t){return i.a.createElement("div",Object(n.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t("Wzyw"),v=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),v=Object(s.a)(t,"card-img");return i.a.createElement(d,Object(n.a)({ref:a,className:l()(o?v+"-"+o:v,c)},b))}));v.displayName="CardImg",v.defaultProps={variant:null};var f=v,m=d("h5"),p=d("h6"),g=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:m}),O=Object(u.a)("card-subtitle",{Component:p}),j=Object(u.a)("card-link",{Component:"a"}),x=Object(u.a)("card-text",{Component:"p"}),h=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),w=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,d=e.text,v=e.border,f=e.body,m=e.children,p=e.as,y=void 0===p?"div":p,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(s.a)(t,"card"),x=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return i.a.createElement(b.a.Provider,{value:x},i.a.createElement(y,Object(n.a)({ref:a},O,{className:l()(c,j,u&&"bg-"+u,d&&"text-"+d,v&&"border-"+v)}),f?i.a.createElement(g,null,m):m))}));w.displayName="Card",w.defaultProps={body:!1},w.Img=f,w.Title=y,w.Subtitle=O,w.Body=g,w.Link=j,w.Text=x,w.Header=h,w.Footer=C,w.ImgOverlay=N;a.a=w},DZHF:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),i=t.n(o),s=t("JCAc"),u=t("vUet"),d=t("ILyh"),b=i.a.createContext(null);b.displayName="AccordionContext";var v=b;var f=i.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,l=e.children,s=e.eventKey,u=e.onClick,b=Object(r.a)(e,["as","children","eventKey","onClick"]),f=function(e,a){var t=Object(o.useContext)(v),n=Object(o.useContext)(d.a);return function(r){n&&n(e===t?null:e,r),a&&a(r)}}(s,u);return"button"===c&&(b.type="button"),i.a.createElement(c,Object(n.a)({ref:a,onClick:f},b),l)})),m=t("vYJ8"),p=i.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,l=Object(r.a)(e,["children","eventKey"]),s=Object(o.useContext)(v);return i.a.createElement(m.a,Object(n.a)({ref:a,in:s===c},l),i.a.createElement("div",null,i.a.Children.only(t)))}));p.displayName="AccordionCollapse";var g=p,y=i.a.forwardRef((function(e,a){var t=Object(s.a)(e,{activeKey:"onSelect"}),c=t.as,o=void 0===c?"div":c,b=t.activeKey,f=t.bsPrefix,m=t.children,p=t.className,g=t.onSelect,y=Object(r.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),O=l()(p,Object(u.a)(f,"accordion"));return i.a.createElement(v.Provider,{value:b||null},i.a.createElement(d.a.Provider,{value:g||null},i.a.createElement(o,Object(n.a)({ref:a},y,{className:O}),m)))}));y.displayName="Accordion",y.Toggle=f,y.Collapse=g;a.a=y},EXQO:function(e,a,t){"use strict";t.r(a),t.d(a,"ReposJson",(function(){return s})),t.d(a,"SubscribersJson",(function(){return u}));var n=t("q1tI"),r=t.n(n),c=(t("vcXL"),t("JI6e")),l=t("DZHF"),o=t("6xyR"),i=r.a.createElement,s=function(e){var a=e.repos;return i(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},i(l.a,{defaultActiveKey:a.svn_url},i(o.a,null,i(l.a.Toggle,{as:o.a.Header,eventKey:a.svn_url},a.svn_url),i(l.a.Collapse,{eventKey:a.svn_url},i(o.a.Body,null,i("a",{href:a.subscribers_url,title:"Connect to ".concat(a.homepage," Page")},a.homepage))))))},u=function(e){var a=e.subscribers;return i(r.a.Fragment,null,i(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},a?a.map((function(e){return i(l.a,{defaultActiveKey:e.id,key:e.id},i(o.a,null,i(l.a.Toggle,{as:o.a.Header,eventKey:e.id},e.login),i(l.a.Collapse,{eventKey:e.id},i(o.a.Body,null,i("a",{href:e.url,title:"Connect to ".concat(e.login," Page")},e.login)))))})):"Loading ..."))}},Juyh:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return f}));var n=t("q1tI"),r=t.n(n),c=t("CafY"),l=t("8Kt/"),o=t.n(l),i=t("EXQO"),s=t("OZiG"),u=t("7vrA"),d=t("3Z9Z"),b=t("JI6e"),v=r.a.createElement,f=!0;a.default=function(e){var a=e.repos,t=e.subscribers,n=e.title,l=void 0===n?"About this url page":n,f=e.h1_id,m=void 0===f?3:f,p=e.arr_id,g=void 0===p?3:p;return v(r.a.Fragment,null,v(o.a,null,v("title",null,l+".   "+Object(s.titleDescription)()),v("meta",{property:"og:description",content:a.svn_url?a.svn_url+t.login+"."+Object(s.pageDescription)():Object(s.pageDescription)()})),v(c.a,null,v(u.a,{fluid:!0},v(d.a,null,v(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1}),v(b.a,{xs:12,sm:12,md:10,lg:10,xl:10},Object(s.h1Mapping)()?Object(s.h1Mapping)(m,g):null,v(i.ReposJson,{repos:a}),v("br",null),v(i.SubscribersJson,{subscribers:t})),v(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1})))))}},rB5V:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vcXL:function(e,a,t){"use strict";var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports}},[["rB5V",0,1,2,3,4,5]]]);