(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{RNiq:function(a,e,t){"use strict";t.r(e);var n=t("q1tI"),i=t.n(n),l=t("3Hq7"),r=t("YFqc"),s=t.n(r),o=t("8Kt/"),c=t.n(o),u=t("QAp/"),d=t("7vrA"),f=t("3Z9Z"),m=t("JI6e"),v=t("sjrs"),p=i.a.createElement,b=function(){return[{id:"hello-nextjs",title:"Hello Next.js"},{id:"learn-nextjs",title:"Learn Next.js is awesome"},{id:"deploy-nextjs",title:"Deploy apps with ZEIT"}]},h=function(a){var e=a.post;return p(s.a,{href:"/batman/[id]",as:"/batman/".concat(e.id)},p("a",null,e.title))},x=function(){return u},N={textTransform:"capitalize"};e.default=function(a){var e=a.title,t=void 0===e?"Index Title Page":e;return p(i.a.Fragment,null,p(c.a,null,p("title",null,t)),p(l.a,null,p(d.a,{fluid:!0},p(f.a,null,p(m.a,{className:"d-none d-sm-none d-md-block",md:2,lg:2,xl:2},p(v.a,{variant:"flush"},p(v.a.Item,null,x().map((function(a){return p(s.a,{href:a.link,key:a.id},p("a",{className:"nav-item nav-link",style:N},a.title))}))))),p(m.a,{xs:12,sm:12,md:10,lg:8,xl:8},p("h1",null,"My Blog"),b().map((function(a){return p(v.a,{variant:"flush",key:a.id},p(v.a.Item,null,p(h,{key:a.id,post:a})))}))),p(m.a,{xs:0,sm:0,md:0,lg:2,xl:2})))))}},"m0L+":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},sjrs:function(a,e,t){"use strict";var n=t("wx14"),i=t("zLVn"),l=t("TSYQ"),r=t.n(l),s=t("q1tI"),o=t.n(s),c=(t("2W6z"),t("JCAc")),u=t("vUet"),d=t("rQNl"),f=t("VWqr"),m=t("ILyh"),v=o.a.forwardRef((function(a,e){var t=a.bsPrefix,l=a.active,c=a.disabled,d=a.className,v=a.variant,p=a.action,b=a.as,h=a.eventKey,x=a.onClick,N=Object(i.a)(a,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.a)(t,"list-group-item");var j=Object(s.useCallback)((function(a){if(c)return a.preventDefault(),void a.stopPropagation();x&&x(a)}),[c,x]);return(o.a.createElement(f.a,Object(n.a)({ref:e},N,{eventKey:Object(m.b)(h,N.href),as:b||(p?N.href?"a":"button":"div"),onClick:j,className:r()(d,t,l&&"active",c&&"disabled",v&&t+"-"+v,p&&t+"-action")})))}));v.defaultProps={variant:null,active:!1,disabled:!1},v.displayName="ListGroupItem";var p=v,b=o.a.forwardRef((function(a,e){var t,l=Object(c.a)(a,{activeKey:"onSelect"}),s=l.className,f=l.bsPrefix,m=l.variant,v=l.horizontal,p=l.as,b=void 0===p?"div":p,h=Object(i.a)(l,["className","bsPrefix","variant","horizontal","as"]);return f=Object(u.a)(f,"list-group"),t=v?!0===v?"horizontal":"horizontal-"+v:null,o.a.createElement(d.a,Object(n.a)({ref:e},h,{as:b,className:r()(s,f,m&&f+"-"+m,t&&f+"-"+t)}))}));b.defaultProps={variant:null,horizontal:null},b.displayName="ListGroup",b.Item=p;e.a=b}},[["m0L+",0,2,1,3]]]);