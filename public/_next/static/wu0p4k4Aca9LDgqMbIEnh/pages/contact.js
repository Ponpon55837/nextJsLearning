(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),o=t("q1tI"),d=t.n(o),i=t("vUet"),s=t("YdCC"),u=function(e){return d.a.forwardRef((function(a,t){return d.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))},b=t("Wzyw"),m=d.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,o=e.variant,s=e.as,u=void 0===s?"img":s,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),m=Object(i.a)(t,"card-img");return d.a.createElement(u,Object(r.a)({ref:a,className:l()(o?m+"-"+o:m,c)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var f=m,p=u("h5"),O=u("h6"),j=Object(s.a)("card-body"),g=Object(s.a)("card-title",{Component:p}),v=Object(s.a)("card-subtitle",{Component:O}),x=Object(s.a)("card-link",{Component:"a"}),y=Object(s.a)("card-text",{Component:"p"}),N=Object(s.a)("card-header"),w=Object(s.a)("card-footer"),k=Object(s.a)("card-img-overlay"),P=d.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.bg,u=e.text,m=e.border,f=e.body,p=e.children,O=e.as,g=void 0===O?"div":O,v=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(i.a)(t,"card"),y=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return d.a.createElement(b.a.Provider,{value:y},d.a.createElement(g,Object(r.a)({ref:a},v,{className:l()(c,x,s&&"bg-"+s,u&&"text-"+u,m&&"border-"+m)}),f?d.a.createElement(j,null,p):p))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=f,P.Title=g,P.Subtitle=v,P.Body=j,P.Link=x,P.Text=y,P.Header=N,P.Footer=w,P.ImgOverlay=k;a.a=P},ALdH:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("CafY"),l=t("8Kt/"),o=t.n(l),d=t("1N03"),i=(t("vcXL"),t("OZiG")),s=t("7vrA"),u=t("3Z9Z"),b=t("JI6e"),m=t("6xyR"),f=n.a.createElement;a.default=function(e,a){var t=a.title,r=void 0===t?"Contact to the park":t,l=a.h1_id,p=void 0===l?5:l,O=a.arr_id,j=void 0===O?5:O;return f(n.a.Fragment,null,f(o.a,null,f("title",null,r+".   "+Object(i.titleDescription)()),f("meta",{property:"og:description",content:Object(i.getPark)()?Object(i.getPark)().map((function(e){return e.introduction}))+"."+Object(i.pageDescription)():Object(i.pageDescription)()})),f(c.a,null,f(s.a,{fluid:!0},f(u.a,null,f(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1}),f(b.a,{xs:12,sm:12,md:10,lg:10,xl:10},Object(i.h1Mapping)()?Object(i.h1Mapping)(p,j):null,f(u.a,null,Object(i.getPark)()?Object(i.getPark)().map((function(e){return f(b.a,{xs:12,sm:12,md:12,lg:6,xl:4,key:"".concat(e.areaId," + ").concat(e.parkId),style:d.j},f(m.a,{park:e,style:d.g},f(m.a.Header,null,e.areaName),f(m.a.Body,null,f(m.a.Title,null,e.introduction),f(m.a.Text,null,e.payGuide)),f(m.a.Footer,null,f("cite",{title:"Source Title"},e.address))))})):"Loading ..."),f("br",null),f("br",null)),f(b.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1})))))}},lqnA:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t("ALdH")}])},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[["lqnA",0,1,2,3,4,5]]]);