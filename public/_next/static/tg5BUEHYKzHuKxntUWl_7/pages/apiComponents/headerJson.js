(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kWUi:function(a,e,t){"use strict";t.r(e);var n=t("q1tI"),i=t.n(n),r=(t("vcXL"),t("1N03")),s=t("YFqc"),o=t.n(s),l=t("sjrs"),c=i.a.createElement;e.default=function(a){var e=a.headers;return console.log(e),c(i.a.Fragment,null,c(l.a,{variant:"flush"},c(l.a.Item,null,e?e.map((function(a){return c(o.a,{href:a.url,key:a.id},c("a",{className:"nav-item nav-link",style:r.i},a.title))})):"Loading ...")))}},"qv/w":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apiComponents/headerJson",function(){return t("kWUi")}])},sjrs:function(a,e,t){"use strict";var n=t("wx14"),i=t("zLVn"),r=t("TSYQ"),s=t.n(r),o=t("q1tI"),l=t.n(o),c=(t("2W6z"),t("JCAc")),u=t("vUet"),v=t("rQNl"),f=t("VWqr"),d=t("ILyh"),b=l.a.forwardRef((function(a,e){var t=a.bsPrefix,r=a.active,c=a.disabled,v=a.className,b=a.variant,p=a.action,m=a.as,h=a.eventKey,w=a.onClick,N=Object(i.a)(a,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.a)(t,"list-group-item");var j=Object(o.useCallback)((function(a){if(c)return a.preventDefault(),void a.stopPropagation();w&&w(a)}),[c,w]);return l.a.createElement(f.a,Object(n.a)({ref:e},N,{eventKey:Object(d.b)(h,N.href),as:m||(p?N.href?"a":"button":"div"),onClick:j,className:s()(v,t,r&&"active",c&&"disabled",b&&t+"-"+b,p&&t+"-action")}))}));b.defaultProps={variant:null,active:!1,disabled:!1},b.displayName="ListGroupItem";var p=b,m=l.a.forwardRef((function(a,e){var t,r=Object(c.a)(a,{activeKey:"onSelect"}),o=r.className,f=r.bsPrefix,d=r.variant,b=r.horizontal,p=r.as,m=void 0===p?"div":p,h=Object(i.a)(r,["className","bsPrefix","variant","horizontal","as"]);return f=Object(u.a)(f,"list-group"),t=b?!0===b?"horizontal":"horizontal-"+b:null,l.a.createElement(v.a,Object(n.a)({ref:e},h,{as:m,className:s()(o,f,d&&f+"-"+d,t&&f+"-"+t)}))}));m.defaultProps={variant:null,horizontal:null},m.displayName="ListGroup",m.Item=p;e.a=m},vcXL:function(a,e,t){"use strict";var n=self.fetch.bind(self);a.exports=n,a.exports.default=a.exports}},[["qv/w",0,1,3,2,5]]]);