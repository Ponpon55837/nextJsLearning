(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"65eO":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),s=t.n(l),i=t("vUet"),u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,l=e.pill,u=e.className,f=e.as,d=void 0===f?"span":f,v=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),b=Object(i.a)(t,"badge");return s.a.createElement(d,Object(r.a)({ref:a},v,{className:o()(u,b,l&&b+"-pill",c&&b+"-"+c)}))}));u.displayName="Badge",u.defaultProps={pill:!1},a.a=u},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),s=t.n(l),i=t("vUet"),u=t("YdCC"),f=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))},d=t("Wzyw"),v=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,u=e.as,f=void 0===u?"img":u,d=Object(n.a)(e,["bsPrefix","className","variant","as"]),v=Object(i.a)(t,"card-img");return s.a.createElement(f,Object(r.a)({ref:a,className:o()(l?v+"-"+l:v,c)},d))}));v.displayName="CardImg",v.defaultProps={variant:null};var b=v,p=f("h5"),m=f("h6"),y=Object(u.a)("card-body"),x=Object(u.a)("card-title",{Component:p}),O=Object(u.a)("card-subtitle",{Component:m}),j=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),h=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),w=Object(u.a)("card-img-overlay"),N=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,u=e.bg,f=e.text,v=e.border,b=e.body,p=e.children,m=e.as,x=void 0===m?"div":m,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(i.a)(t,"card"),g=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(d.a.Provider,{value:g},s.a.createElement(x,Object(r.a)({ref:a},O,{className:o()(c,j,u&&"bg-"+u,f&&"text-"+f,v&&"border-"+v)}),b?s.a.createElement(y,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=b,N.Title=x,N.Subtitle=O,N.Body=y,N.Link=j,N.Text=g,N.Header=h,N.Footer=C,N.ImgOverlay=w;a.a=N},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),s=t.n(l),i=t("JCAc"),u=t("vUet"),f=t("ILyh"),d=s.a.createContext(null);d.displayName="AccordionContext";var v=d;var b=s.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,o=e.children,i=e.eventKey,u=e.onClick,d=Object(n.a)(e,["as","children","eventKey","onClick"]),b=function(e,a){var t=Object(l.useContext)(v),r=Object(l.useContext)(f.a);return function(n){r&&r(e===t?null:e,n),a&&a(n)}}(i,u);return"button"===c&&(d.type="button"),s.a.createElement(c,Object(r.a)({ref:a,onClick:b},d),o)})),p=t("vYJ8"),m=s.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,o=Object(n.a)(e,["children","eventKey"]),i=Object(l.useContext)(v);return s.a.createElement(p.a,Object(r.a)({ref:a,in:i===c},o),s.a.createElement("div",null,s.a.Children.only(t)))}));m.displayName="AccordionCollapse";var y=m,x=s.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),c=t.as,l=void 0===c?"div":c,d=t.activeKey,b=t.bsPrefix,p=t.children,m=t.className,y=t.onSelect,x=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),O=o()(m,Object(u.a)(b,"accordion"));return s.a.createElement(v.Provider,{value:d||null},s.a.createElement(f.a.Provider,{value:y||null},s.a.createElement(l,Object(r.a)({ref:a},x,{className:O}),p)))}));x.displayName="Accordion",x.Toggle=b,x.Collapse=y;a.a=x},EXQO:function(e,a,t){"use strict";t.r(a),t.d(a,"ReposJson",(function(){return u})),t.d(a,"SubscribersJson",(function(){return f}));var r=t("q1tI"),n=t.n(r),c=(t("vcXL"),t("JI6e")),o=t("DZHF"),l=t("6xyR"),s=t("65eO"),i=n.a.createElement,u=function(e){var a=e.repos;return i(c.a,{xs:12,sm:6,md:6,lg:4,xl:4},i(o.a,{defaultActiveKey:a.svn_url},i(l.a,null,i(o.a.Toggle,{as:l.a.Header,eventKey:a.svn_url},a.svn_url),i(o.a.Collapse,{eventKey:a.svn_url},i(l.a.Body,null,i("a",{href:a.subscribers_url,title:"Connect to ".concat(a.homepage," Page")},a.homepage)))),i("br",null)))},f=function(e){var a=e.subscribers;return i(n.a.Fragment,null,a?a.map((function(e){return i(c.a,{xs:12,sm:6,md:6,lg:4,xl:4,key:e.id},i(o.a,{defaultActiveKey:"false"},i(l.a,null,i(o.a.Toggle,{as:l.a.Header,eventKey:e.id},e.login),i(l.a.Subtitle,null,i(s.a,{className:"my-3 ml-3",variant:"info"},"ID:",e.id)),i(o.a.Collapse,{eventKey:e.id},i(l.a.Body,null,i("a",{href:e.url,title:"Connect to ".concat(e.login," Page")},e.login)))),i("br",null)))})):"Loading ...")}},JI6e:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),o=t.n(c),l=t("q1tI"),s=t.n(l),i=t("vUet"),u=["xl","lg","md","sm","xs"],f=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,f=void 0===l?"div":l,d=Object(n.a)(e,["bsPrefix","className","as"]),v=Object(i.a)(t,"col"),b=[],p=[];return u.forEach((function(e){var a,t,r,n=d[e];if(delete d[e],"object"===typeof n&&null!=n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var o="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+o:""+v+o+"-"+a),null!=r&&p.push("order"+o+"-"+r),null!=t&&p.push("offset"+o+"-"+t)})),b.length||b.push(v),s.a.createElement(f,Object(r.a)({},d,{ref:a,className:o.a.apply(void 0,[c].concat(b,p))}))}));f.displayName="Col",a.a=f},Qetd:function(e,a,t){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},TSYQ:function(e,a,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var r=arguments[a];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===c)for(var l in r)t.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(a,[]))||(e.exports=r)}()},r6es:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apiComponents/reposJson",function(){return t("EXQO")}])},vUet:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("wx14");var r=t("q1tI"),n=t.n(r),c=n.a.createContext({});c.Consumer,c.Provider;function o(e,a){var t=Object(r.useContext)(c);return e||t[a]||a}},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},wx14:function(e,a,t){"use strict";function r(){return(r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(a,"a",(function(){return r}))},zLVn:function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}t.d(a,"a",(function(){return r}))}},[["r6es",0,1,4]]]);