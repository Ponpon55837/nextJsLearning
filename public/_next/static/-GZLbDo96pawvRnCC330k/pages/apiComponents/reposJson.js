(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),o=a.n(c),s=a("q1tI"),l=a.n(s),i=a("vUet"),u=a("YdCC"),d=function(e){return l.a.forwardRef((function(t,a){return l.a.createElement("div",Object(r.a)({},t,{ref:a,className:o()(t.className,e)}))}))},f=a("Wzyw"),v=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),v=Object(i.a)(a,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:o()(s?v+"-"+s:v,c)},f))}));v.displayName="CardImg",v.defaultProps={variant:null};var b=v,p=d("h5"),m=d("h6"),y=Object(u.a)("card-body"),x=Object(u.a)("card-title",{Component:p}),O=Object(u.a)("card-subtitle",{Component:m}),j=Object(u.a)("card-link",{Component:"a"}),h=Object(u.a)("card-text",{Component:"p"}),g=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),N=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,u=e.bg,d=e.text,v=e.border,b=e.body,p=e.children,m=e.as,x=void 0===m?"div":m,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(i.a)(a,"card"),h=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return l.a.createElement(f.a.Provider,{value:h},l.a.createElement(x,Object(r.a)({ref:t},O,{className:o()(c,j,u&&"bg-"+u,d&&"text-"+d,v&&"border-"+v)}),b?l.a.createElement(y,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=b,N.Title=x,N.Subtitle=O,N.Body=y,N.Link=j,N.Text=h,N.Header=g,N.Footer=C,N.ImgOverlay=w;t.a=N},DZHF:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),o=a.n(c),s=a("q1tI"),l=a.n(s),i=a("JCAc"),u=a("vUet"),d=a("ILyh"),f=l.a.createContext(null);f.displayName="AccordionContext";var v=f;var b=l.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"button":a,o=e.children,i=e.eventKey,u=e.onClick,f=Object(n.a)(e,["as","children","eventKey","onClick"]),b=function(e,t){var a=Object(s.useContext)(v),r=Object(s.useContext)(d.a);return function(n){r&&r(e===a?null:e,n),t&&t(n)}}(i,u);return"button"===c&&(f.type="button"),l.a.createElement(c,Object(r.a)({ref:t,onClick:b},f),o)})),p=a("vYJ8"),m=l.a.forwardRef((function(e,t){var a=e.children,c=e.eventKey,o=Object(n.a)(e,["children","eventKey"]),i=Object(s.useContext)(v);return l.a.createElement(p.a,Object(r.a)({ref:t,in:i===c},o),l.a.createElement("div",null,l.a.Children.only(a)))}));m.displayName="AccordionCollapse";var y=m,x=l.a.forwardRef((function(e,t){var a=Object(i.a)(e,{activeKey:"onSelect"}),c=a.as,s=void 0===c?"div":c,f=a.activeKey,b=a.bsPrefix,p=a.children,m=a.className,y=a.onSelect,x=Object(n.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),O=o()(m,Object(u.a)(b,"accordion"));return l.a.createElement(v.Provider,{value:f||null},l.a.createElement(d.a.Provider,{value:y||null},l.a.createElement(s,Object(r.a)({ref:t},x,{className:O}),p)))}));x.displayName="Accordion",x.Toggle=b,x.Collapse=y;t.a=x},EXQO:function(e,t,a){"use strict";a.r(t),a.d(t,"ReposJson",(function(){return i})),a.d(t,"SubscribersJson",(function(){return u}));var r=a("q1tI"),n=a.n(r),c=(a("vcXL"),a("JI6e")),o=a("DZHF"),s=a("6xyR"),l=n.a.createElement,i=function(e){var t=e.repos;return l(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},l(o.a,{defaultActiveKey:t.svn_url},l(s.a,null,l(o.a.Toggle,{as:s.a.Header,eventKey:t.svn_url},t.svn_url),l(o.a.Collapse,{eventKey:t.svn_url},l(s.a.Body,null,l("a",{href:t.subscribers_url,title:"Connect to ".concat(t.homepage," Page")},t.homepage)))),l("br",null)))},u=function(e){var t=e.subscribers;return l(n.a.Fragment,null,l(c.a,{xs:12,sm:12,md:12,lg:12,xl:12},t?t.map((function(e){return l(o.a,{defaultActiveKey:e.id,key:e.id},l(s.a,null,l(o.a.Toggle,{as:s.a.Header,eventKey:e.id},e.login),l(o.a.Collapse,{eventKey:e.id},l(s.a.Body,null,l("a",{href:e.url,title:"Connect to ".concat(e.login," Page")},e.login)))),l("br",null))})):"Loading ..."))}},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),c=a("TSYQ"),o=a.n(c),s=a("q1tI"),l=a.n(s),i=a("vUet"),u=["xl","lg","md","sm","xs"],d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,s=e.as,d=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),v=Object(i.a)(a,"col"),b=[],p=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var c=n.span;t=void 0===c||c,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+v+o:""+v+o+"-"+t),null!=r&&p.push("order"+o+"-"+r),null!=a&&p.push("offset"+o+"-"+a)})),b.length||b.push(v),l.a.createElement(d,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[c].concat(b,p))}))}));d.displayName="Col",t.a=d},Qetd:function(e,t,a){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===c)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},r6es:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apiComponents/reposJson",function(){return a("EXQO")}])},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("wx14");var r=a("q1tI"),n=a.n(r),c=n.a.createContext({});c.Consumer,c.Provider;function o(e,t){var a=Object(r.useContext)(c);return e||a[t]||t}},vcXL:function(e,t,a){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},wx14:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}},[["r6es",0,1,4]]]);