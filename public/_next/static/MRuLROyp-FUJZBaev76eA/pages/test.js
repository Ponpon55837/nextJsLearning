(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6xyR":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),s=t("vUet"),u=t("YdCC"),d=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:o()(a.className,e)}))}))},m=t("Wzyw"),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.a)(t,"card-img");return c.a.createElement(d,Object(r.a)({ref:a,className:o()(i?b+"-"+i:b,l)},m))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=d("h5"),g=d("h6"),p=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:v}),x=Object(u.a)("card-subtitle",{Component:g}),O=Object(u.a)("card-link",{Component:"a"}),j=Object(u.a)("card-text",{Component:"p"}),h=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),P=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,v=e.children,g=e.as,y=void 0===g?"div":g,x=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.a)(t,"card"),j=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return c.a.createElement(m.a.Provider,{value:j},c.a.createElement(y,Object(r.a)({ref:a},x,{className:o()(l,O,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?c.a.createElement(p,null,v):v))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=f,P.Title=y,P.Subtitle=x,P.Body=p,P.Link=O,P.Text=j,P.Header=h,P.Footer=C,P.ImgOverlay=N;a.a=P},DZHF:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),s=t("JCAc"),u=t("vUet"),d=t("ILyh"),m=c.a.createContext(null);m.displayName="AccordionContext";var b=m;var f=c.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"button":t,o=e.children,s=e.eventKey,u=e.onClick,m=Object(n.a)(e,["as","children","eventKey","onClick"]),f=function(e,a){var t=Object(i.useContext)(b),r=Object(i.useContext)(d.a);return function(n){r&&r(e===t?null:e,n),a&&a(n)}}(s,u);return"button"===l&&(m.type="button"),c.a.createElement(l,Object(r.a)({ref:a,onClick:f},m),o)})),v=t("vYJ8"),g=c.a.forwardRef((function(e,a){var t=e.children,l=e.eventKey,o=Object(n.a)(e,["children","eventKey"]),s=Object(i.useContext)(b);return c.a.createElement(v.a,Object(r.a)({ref:a,in:s===l},o),c.a.createElement("div",null,c.a.Children.only(t)))}));g.displayName="AccordionCollapse";var p=g,y=c.a.forwardRef((function(e,a){var t=Object(s.a)(e,{activeKey:"onSelect"}),l=t.as,i=void 0===l?"div":l,m=t.activeKey,f=t.bsPrefix,v=t.children,g=t.className,p=t.onSelect,y=Object(n.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),x=o()(g,Object(u.a)(f,"accordion"));return c.a.createElement(b.Provider,{value:m||null},c.a.createElement(d.a.Provider,{value:p||null},c.a.createElement(i,Object(r.a)({ref:a},y,{className:x}),v)))}));y.displayName="Accordion",y.Toggle=f,y.Collapse=p;a.a=y},FCuQ:function(e,a,t){"use strict";t.r(a),t.d(a,"__N_SSG",(function(){return g}));var r=t("q1tI"),n=t.n(r),l=t("CafY"),o=t("8Kt/"),i=t.n(o),c=t("QFrx"),s=t("OZiG"),u=t("Z4Yb"),d=t.n(u),m=t("7vrA"),b=t("3Z9Z"),f=t("JI6e"),v=n.a.createElement,g=!0;a.default=function(e){var a=e.courses,t=e.products,r=e.categories,o=e.title,u=void 0===o?"Courses show menu":o,g=e.heading,p=void 0===g?"Course shows":g;return v(n.a.Fragment,null,v(i.a,null,v("title",null,u+".   "+Object(s.titleDescription)()),v("meta",{property:"og:description",content:!a+!t+!r?Object(s.pageDescription)():a.map((function(e){return e.title}))+"."+Object(s.pageDescription)()})),v(l.a,null,v(m.a,{fluid:!0},v(b.a,null,v(f.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1}),v(f.a,{xs:12,sm:12,md:10,lg:10,xl:10},v("h1",{className:d.a.headingH1},p),v(c.CourseJson,{courses:a}),v("hr",null),v(c.ProductJson,{products:t}),v("hr",null),v(c.CategoryJson,{categories:r})),v(f.a,{className:"d-none d-sm-none d-md-block",md:1,lg:1,xl:1})))))}},QFrx:function(e,a,t){"use strict";t.r(a),t.d(a,"CourseJson",(function(){return N})),t.d(a,"ProductJson",(function(){return P})),t.d(a,"CategoryJson",(function(){return w}));var r=t("q1tI"),n=t.n(r),l=(t("vcXL"),t("1N03")),o=t("Z4Yb"),i=t.n(o),c=t("OZiG"),s=t("3Z9Z"),u=t("JI6e"),d=t("sjrs"),m=t("wx14"),b=t("zLVn"),f=t("TSYQ"),v=t.n(f),g=t("17x9"),p=t.n(g),y=t("vUet"),x=(p.a.string,p.a.bool,p.a.bool,p.a.bool,p.a.bool,n.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,l=e.fluid,o=e.rounded,i=e.roundedCircle,c=e.thumbnail,s=Object(b.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(y.a)(t,"img");var u=v()(l&&t+"-fluid",o&&"rounded",i&&"rounded-circle",c&&t+"-thumbnail");return n.a.createElement("img",Object(m.a)({ref:a},s,{className:v()(r,u)}))})));x.displayName="Image",x.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var O=x,j=t("DZHF"),h=t("6xyR"),C=n.a.createElement,N=function(e){var a=e.courses;return console.log(a),C(n.a.Fragment,null,C(s.a,{style:l.h},a?a.map((function(e){return C(u.a,{xs:12,sm:6,md:4,lg:4,xl:3,key:e.id},C(d.a,{variant:"flush"},C(d.a.Item,{className:i.a.courseListGroupItem},C("div",{className:i.a.courseDiv},e.title),C("br",null),C(O,{className:i.a.courseIMG,src:c.API_URL+e.image.url?c.API_URL+e.image.url:null,rounded:!0,fluid:!0}),C("br",null),C("cite",{title:"Source Title"},e.published))))})):"Loading ..."))},P=function(e){var a=e.products;return console.log(a),C(n.a.Fragment,null,C(s.a,{style:l.h},a?a.map((function(e){return C(u.a,{xs:12,sm:12,md:12,lg:12,xl:12,key:e.id},C(j.a,{defaultActiveKey:"false"},C(h.a,null,C(j.a.Toggle,{as:h.a.Header,eventKey:e.id},e.title),C(j.a.Collapse,{eventKey:e.id},C(h.a.Body,null,e.description,C("br",null),C("br",null),(console.log(e.categories[0].id),e.categories[0].id?"Price: "+e.price:null),C("br",null),e.categories[0].id?"Category: "+e.categories[0].name:null,C("br",null),e.categories[0].id?"Quality: "+e.quality:null,C("br",null),1==!e.categories[0].id?null:"Create_at: "+e.categories[0].created_at)))))})):"Loading ..."))},w=function(e){var a=e.categories;return console.log(a),C(n.a.Fragment,null,C(s.a,{style:l.h},a?a.map((function(e){return C(u.a,{xs:12,sm:12,md:12,lg:6,xl:6,key:e.id},C(d.a,{variant:"flush"},C(d.a.Item,null,e.name,C("br",null),C("cite",{title:"Source Title"},e.created_at))))})):"Loading ..."))}},sjrs:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),l=t("TSYQ"),o=t.n(l),i=t("q1tI"),c=t.n(i),s=(t("2W6z"),t("JCAc")),u=t("vUet"),d=t("rQNl"),m=t("VWqr"),b=t("ILyh"),f={variant:void 0,active:!1,disabled:!1},v=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.active,s=e.disabled,d=e.className,f=e.variant,v=e.action,g=e.as,p=e.eventKey,y=e.onClick,x=Object(n.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.a)(t,"list-group-item");var O=Object(i.useCallback)((function(e){if(s)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[s,y]);return c.a.createElement(m.a,Object(r.a)({ref:a},x,{eventKey:Object(b.b)(p||null,x.href),as:g||(v?x.href?"a":"button":"div"),onClick:O,className:o()(d,t,l&&"active",s&&"disabled",f&&t+"-"+f,v&&t+"-action")}))}));v.defaultProps=f,v.displayName="ListGroupItem";var g=v,p={variant:void 0,horizontal:void 0},y=c.a.forwardRef((function(e,a){var t,l=Object(s.a)(e,{activeKey:"onSelect"}),i=l.className,m=l.bsPrefix,b=l.variant,f=l.horizontal,v=l.as,g=void 0===v?"div":v,p=Object(n.a)(l,["className","bsPrefix","variant","horizontal","as"]),y=Object(u.a)(m,"list-group");return t=f?!0===f?"horizontal":"horizontal-"+f:null,c.a.createElement(d.a,Object(r.a)({ref:a},p,{as:g,className:o()(i,y,b&&y+"-"+b,t&&y+"-"+t)}))}));y.defaultProps=p,y.displayName="ListGroup",y.Item=g;a.a=y},vcXL:function(e,a,t){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},"zl3/":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return t("FCuQ")}])}},[["zl3/",0,1,2,3,4,5]]]);