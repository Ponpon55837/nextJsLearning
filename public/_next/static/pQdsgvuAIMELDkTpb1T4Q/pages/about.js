(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3Z9Z":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.noGutters,d=e.as,f=void 0===d?"div":d,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(i.a)(t,"row"),m=v+"-cols",p=[];return u.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+m+r+"-"+a)})),o.a.createElement(f,Object(r.a)({ref:a},b,{className:c.a.apply(void 0,[l,v,s&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("vUet"),u=t("YdCC"),d=function(e){return o.a.forwardRef((function(a,t){return o.a.createElement("div",Object(r.a)({},a,{ref:t,className:c()(a.className,e)}))}))},f=t("Wzyw"),b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(t,"card-img");return o.a.createElement(d,Object(r.a)({ref:a,className:c()(s?b+"-"+s:b,l)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,m=d("h5"),p=d("h6"),x=Object(u.a)("card-body"),y=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,u=e.bg,d=e.text,b=e.border,v=e.body,m=e.children,p=e.as,y=void 0===p?"div":p,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(i.a)(t,"card"),h=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return o.a.createElement(f.a.Provider,{value:h},o.a.createElement(y,Object(r.a)({ref:a},O,{className:c()(l,j,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),v?o.a.createElement(x,null,m):m))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=v,y.Title=Object(u.a)("card-title",{Component:m}),y.Subtitle=Object(u.a)("card-subtitle",{Component:p}),y.Body=x,y.Link=Object(u.a)("card-link",{Component:"a"}),y.Text=Object(u.a)("card-text",{Component:"p"}),y.Header=Object(u.a)("card-header"),y.Footer=Object(u.a)("card-footer"),y.ImgOverlay=Object(u.a)("card-img-overlay");a.a=y},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("JCAc"),u=t("vUet"),d=t("ILyh"),f=o.a.createContext(null);var b=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"button":t,c=e.children,i=e.eventKey,u=e.onClick,b=Object(n.a)(e,["as","children","eventKey","onClick"]),v=function(e,a){var t=Object(s.useContext)(f),r=Object(s.useContext)(d.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(i,u);return"button"===l&&(b.type="button"),o.a.createElement(l,Object(r.a)({ref:a,onClick:v},b),c)})),v=t("vYJ8"),m=o.a.forwardRef((function(e,a){var t=e.children,l=e.eventKey,c=Object(n.a)(e,["children","eventKey"]),i=Object(s.useContext)(f);return o.a.createElement(v.a,Object(r.a)({ref:a,in:i===l},c),o.a.createElement("div",null,o.a.Children.only(t)))}));m.displayName="AccordionCollapse";var p=m,x=o.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),l=t.as,s=void 0===l?"div":l,b=t.activeKey,v=t.bsPrefix,m=t.children,p=t.className,x=t.onSelect,y=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return v=Object(u.a)(v,"accordion"),o.a.createElement(f.Provider,{value:b},o.a.createElement(d.a.Provider,{value:x},o.a.createElement(s,Object(r.a)({ref:a},y,{className:c()(p,v)}),m)))}));x.Toggle=b,x.Collapse=p;a.a=x},EXQO:function(e,a,t){"use strict";t.r(a),t.d(a,"ReposJson",(function(){return i})),t.d(a,"SubscribersJson",(function(){return u}));var r=t("q1tI"),n=t.n(r),l=(t("vcXL"),t("JI6e")),c=t("DZHF"),s=t("6xyR"),o=n.a.createElement,i=function(e){var a=e.repos;return o(l.a,{xs:12,sm:12,md:12,lg:12,xl:12},o(c.a,{defaultActiveKey:a.svn_url},o(s.a,null,o(c.a.Toggle,{as:s.a.Header,eventKey:a.svn_url},a.svn_url),o(c.a.Collapse,{eventKey:a.svn_url},o(s.a.Body,null,o("a",{href:a.subscribers_url},a.homepage))))))},u=function(e){var a=e.subscribers;return o(n.a.Fragment,null,o(l.a,{xs:12,sm:12,md:12,lg:12,xl:12},a?a.map((function(e){return o(c.a,{defaultActiveKey:e.id,key:e.id},o(s.a,null,o(c.a.Toggle,{as:s.a.Header,eventKey:e.id},e.login),o(c.a.Collapse,{eventKey:e.id},o(s.a.Body,null,o("a",{href:e.url},e.login)))))})):"Loading..."))}},JI6e:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("vUet"),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,d=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(i.a)(t,"col"),v=[],m=[];return u.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var l=n.span;a=void 0===l||l,t=n.offset,r=n.order}else a=n;var c="xs"!==e?"-"+e:"";null!=a&&v.push(!0===a?""+b+c:""+b+c+"-"+a),null!=r&&m.push("order"+c+"-"+r),null!=t&&m.push("offset"+c+"-"+t)})),v.length||v.push(b),o.a.createElement(d,Object(r.a)({},f,{ref:a,className:c.a.apply(void 0,[l].concat(v,m))}))}));d.displayName="Col",a.a=d},Juyh:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return b}));var r=t("q1tI"),n=t.n(r),l=t("CafY"),c=t("8Kt/"),s=t.n(c),o=t("EXQO"),i=t("7vrA"),u=t("3Z9Z"),d=t("JI6e"),f=n.a.createElement,b=!0;a.default=function(e){var a=e.repos,t=e.subscribers,r=e.title,c=void 0===r?"About this url page":r;return f(n.a.Fragment,null,f(s.a,null,f("title",null,c)),f(l.a,null,f(i.a,{fluid:!0},f(u.a,null,f(d.a,{className:"d-none d-sm-none d-md-block",md:1,lg:2,xl:2}),f(d.a,{xs:12,sm:12,md:10,lg:8,xl:8},f("h1",null,"This is the about page"),f(o.ReposJson,{repos:a}),f("br",null),f(o.SubscribersJson,{subscribers:t})),f(d.a,{className:"d-none d-sm-none d-md-block",md:1,lg:2,xl:2})))))}},rB5V:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["rB5V",0,1,2,3,4,5,6]]]);