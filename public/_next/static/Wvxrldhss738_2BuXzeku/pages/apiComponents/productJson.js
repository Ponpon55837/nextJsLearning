(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3Z9Z":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=["xl","lg","md","sm","xs"],u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.noGutters,u=e.as,f=void 0===u?"div":u,b=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(i.a)(t,"row"),m=v+"-cols",p=[];return d.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+m+r+"-"+a)})),s.a.createElement(f,Object(r.a)({ref:a},b,{className:l.a.apply(void 0,[c,v,o&&"no-gutters"].concat(p))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=t("YdCC"),u=function(e){return s.a.forwardRef((function(a,t){return s.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},f=t("Wzyw"),b=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,d=e.as,u=void 0===d?"img":d,f=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(i.a)(t,"card-img");return s.a.createElement(u,Object(r.a)({ref:a,className:l()(o?b+"-"+o:b,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,m=u("h5"),p=u("h6"),x=Object(d.a)("card-body"),y=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,u=e.text,b=e.border,v=e.body,m=e.children,p=e.as,y=void 0===p?"div":p,j=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(i.a)(t,"card"),h=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return s.a.createElement(f.a.Provider,{value:h},s.a.createElement(y,Object(r.a)({ref:a},j,{className:l()(c,O,d&&"bg-"+d,u&&"text-"+u,b&&"border-"+b)}),v?s.a.createElement(x,null,m):m))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=v,y.Title=Object(d.a)("card-title",{Component:m}),y.Subtitle=Object(d.a)("card-subtitle",{Component:p}),y.Body=x,y.Link=Object(d.a)("card-link",{Component:"a"}),y.Text=Object(d.a)("card-text",{Component:"p"}),y.Header=Object(d.a)("card-header"),y.Footer=Object(d.a)("card-footer"),y.ImgOverlay=Object(d.a)("card-img-overlay");a.a=y},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("JCAc"),d=t("vUet"),u=t("ILyh"),f=s.a.createContext(null);var b=s.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,l=e.children,i=e.eventKey,d=e.onClick,b=Object(n.a)(e,["as","children","eventKey","onClick"]),v=function(e,a){var t=Object(o.useContext)(f),r=Object(o.useContext)(u.a);return function(n){r(e===t?null:e,n),a&&a(n)}}(i,d);return"button"===c&&(b.type="button"),s.a.createElement(c,Object(r.a)({ref:a,onClick:v},b),l)})),v=t("vYJ8"),m=s.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,l=Object(n.a)(e,["children","eventKey"]),i=Object(o.useContext)(f);return s.a.createElement(v.a,Object(r.a)({ref:a,in:i===c},l),s.a.createElement("div",null,s.a.Children.only(t)))}));m.displayName="AccordionCollapse";var p=m,x=s.a.forwardRef((function(e,a){var t=Object(i.a)(e,{activeKey:"onSelect"}),c=t.as,o=void 0===c?"div":c,b=t.activeKey,v=t.bsPrefix,m=t.children,p=t.className,x=t.onSelect,y=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return v=Object(d.a)(v,"accordion"),s.a.createElement(f.Provider,{value:b},s.a.createElement(u.a.Provider,{value:x},s.a.createElement(o,Object(r.a)({ref:a},y,{className:l()(p,v)}),m)))}));x.Toggle=b,x.Collapse=p;a.a=x},E1B2:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apiComponents/productJson",function(){return t("hUUU")}])},JI6e:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),s=t.n(o),i=t("vUet"),d=["xl","lg","md","sm","xs"],u=s.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,f=Object(n.a)(e,["bsPrefix","className","as"]),b=Object(i.a)(t,"col"),v=[],m=[];return d.forEach((function(e){var a,t,r,n=f[e];if(delete f[e],null!=n&&"object"===typeof n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var l="xs"!==e?"-"+e:"";null!=a&&v.push(!0===a?""+b+l:""+b+l+"-"+a),null!=r&&m.push("order"+l+"-"+r),null!=t&&m.push("offset"+l+"-"+t)})),v.length||v.push(b),s.a.createElement(u,Object(r.a)({},f,{ref:a,className:l.a.apply(void 0,[c].concat(v,m))}))}));u.displayName="Col",a.a=u},hUUU:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=(t("vcXL"),t("DZHF")),l=t("6xyR"),o=t("3Z9Z"),s=t("JI6e"),i=n.a.createElement,d={paddingButtom:"1rem"};a.default=function(e){var a=e.products;return console.log(a),i(n.a.Fragment,null,i(o.a,{style:d},a?a.map((function(e){return i(s.a,{xs:12,sm:12,md:12,lg:12,xl:12,key:e.id},i(c.a,{defaultActiveKey:"false"},i(l.a,null,i(c.a.Toggle,{as:l.a.Header,eventKey:e.id},e.title),i(c.a.Collapse,{eventKey:e.id},i(l.a.Body,null,e.description,i("br",null),i("br",null),"Price:",e.price,i("br",null),i("cite",{title:"Source Title"},"Quality:",e.quality))))))})):"Loading ..."))}},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["E1B2",0,1,2,4]]]);