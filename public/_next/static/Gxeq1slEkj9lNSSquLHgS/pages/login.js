(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3Z9Z":function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),s=t("TSYQ"),i=t.n(s),n=t("q1tI"),c=t.n(n),o=t("vUet"),d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.noGutters,m=e.as,u=void 0===m?"div":m,b=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(o.a)(t,"row"),v=f+"-cols",p=[];return d.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+v+r+"-"+a)})),c.a.createElement(u,Object(r.a)({ref:a},b,{className:i.a.apply(void 0,[s,f,n&&"no-gutters"].concat(p))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),s=t("TSYQ"),i=t.n(s),n=t("q1tI"),c=t.n(n),o=t("vUet"),d=t("YdCC"),m=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:i()(a.className,e)}))}))},u=t("Wzyw"),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.variant,d=e.as,m=void 0===d?"img":d,u=Object(l.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(t,"card-img");return c.a.createElement(m,Object(r.a)({ref:a,className:i()(n?b+"-"+n:b,s)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=m("h5"),p=m("h6"),x=Object(d.a)("card-body"),y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,m=e.text,b=e.border,f=e.body,v=e.children,p=e.as,y=void 0===p?"div":p,O=Object(l.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(o.a)(t,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return c.a.createElement(u.a.Provider,{value:N},c.a.createElement(y,Object(r.a)({ref:a},O,{className:i()(s,j,d&&"bg-"+d,m&&"text-"+m,b&&"border-"+b)}),f?c.a.createElement(x,null,v):v))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=f,y.Title=Object(d.a)("card-title",{Component:v}),y.Subtitle=Object(d.a)("card-subtitle",{Component:p}),y.Body=x,y.Link=Object(d.a)("card-link",{Component:"a"}),y.Text=Object(d.a)("card-text",{Component:"p"}),y.Header=Object(d.a)("card-header"),y.Footer=Object(d.a)("card-footer"),y.ImgOverlay=Object(d.a)("card-img-overlay");a.a=y},JI6e:function(e,a,t){"use strict";var r=t("wx14"),l=t("zLVn"),s=t("TSYQ"),i=t.n(s),n=t("q1tI"),c=t.n(n),o=t("vUet"),d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,m=void 0===n?"div":n,u=Object(l.a)(e,["bsPrefix","className","as"]),b=Object(o.a)(t,"col"),f=[],v=[];return d.forEach((function(e){var a,t,r,l=u[e];if(delete u[e],null!=l&&"object"===typeof l){var s=l.span;a=void 0===s||s,t=l.offset,r=l.order}else a=l;var i="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+b+i:""+b+i+"-"+a),null!=r&&v.push("order"+i+"-"+r),null!=t&&v.push("offset"+i+"-"+t)})),f.length||f.push(b),c.a.createElement(m,Object(r.a)({},u,{ref:a,className:i.a.apply(void 0,[s].concat(f,v))}))}));m.displayName="Col",a.a=m},O2ls:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),l=t.n(r),s=t("3Hq7"),i=t("7vrA"),n=t("3Z9Z"),c=t("JI6e"),o=t("wx14"),d=t("zLVn"),m=t("TSYQ"),u=t.n(m),b=(t("K9S6"),t("17x9")),f=t.n(b),v={type:f.a.string.isRequired,as:f.a.elementType},p=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,s=e.className,i=e.type,n=Object(d.a)(e,["as","className","type"]);return l.a.createElement(r,Object(o.a)({},n,{ref:a,className:u()(s,i&&i+"-feedback")}))}));p.displayName="Feedback",p.propTypes=v,p.defaultProps={type:"valid"};var x=p,y=l.a.createContext({controlId:void 0}),O=t("vUet"),j=l.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,c=e.isValid,m=e.isInvalid,b=e.isStatic,f=e.as,v=void 0===f?"input":f,p=Object(d.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(r.useContext)(y),j=x.controlId,N=x.custom?[i,"custom-control-input"]:[s,"form-check-input"],P=N[0],h=N[1];return s=Object(O.a)(P,h),l.a.createElement(v,Object(o.a)({},p,{ref:a,id:t||j,className:u()(n,s,c&&"is-valid",m&&"is-invalid",b&&"position-static")}))}));j.displayName="FormCheckInput",j.defaultProps={type:"checkbox"};var N=j,P=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,n=e.htmlFor,c=Object(d.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(r.useContext)(y),b=m.controlId,f=m.custom?[s,"custom-control-label"]:[t,"form-check-label"],v=f[0],p=f[1];return t=Object(O.a)(v,p),l.a.createElement("label",Object(o.a)({},c,{ref:a,htmlFor:n||b,className:u()(i,t)}))}));P.displayName="FormCheckLabel";var h=P,w=l.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.inline,c=e.disabled,m=e.isValid,b=e.isInvalid,f=e.feedback,v=e.className,p=e.style,j=e.title,P=e.type,w=e.label,E=e.children,C=e.custom,I=e.as,g=void 0===I?"input":I,F=Object(d.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===P||C,R=k?[i,"custom-control"]:[s,"form-check"],L=R[0],V=R[1];s=Object(O.a)(L,V);var T=Object(r.useContext)(y).controlId,S=Object(r.useMemo)((function(){return{controlId:t||T,custom:k}}),[T,k,t]),B=null!=w&&!1!==w&&!E,z=l.a.createElement(N,Object(o.a)({},F,{type:"switch"===P?"checkbox":P,ref:a,isValid:m,isInvalid:b,isStatic:!B,disabled:c,as:g}));return l.a.createElement(y.Provider,{value:S},l.a.createElement("div",{style:p,className:u()(v,s,k&&"custom-"+P,n&&s+"-inline")},E||l.a.createElement(l.a.Fragment,null,z,B&&l.a.createElement(h,{title:j},w),(m||b)&&l.a.createElement(x,{type:m?"valid":"invalid"},f))))}));w.displayName="FormCheck",w.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},w.Input=N,w.Label=h;var E=w,C=l.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,c=e.isValid,m=e.isInvalid,b=e.lang,f=e.as,v=void 0===f?"input":f,p=Object(d.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(r.useContext)(y),j=x.controlId,N=x.custom?[i,"custom-file-input"]:[s,"form-control-file"],P=N[0],h=N[1];return s=Object(O.a)(P,h),l.a.createElement(v,Object(o.a)({},p,{ref:a,id:t||j,type:"file",lang:b,className:u()(n,s,c&&"is-valid",m&&"is-invalid")}))}));C.displayName="FormFileInput";var I=C,g=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,n=e.htmlFor,c=Object(d.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),m=Object(r.useContext)(y),b=m.controlId,f=m.custom?[s,"custom-file-label"]:[t,"form-file-label"],v=f[0],p=f[1];return t=Object(O.a)(v,p),l.a.createElement("label",Object(o.a)({},c,{ref:a,htmlFor:n||b,className:u()(i,t),"data-browse":c["data-browse"]}))}));g.displayName="FormFileLabel";var F=g,k=l.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.disabled,c=e.isValid,m=e.isInvalid,b=e.feedback,f=e.className,v=e.style,p=e.label,j=e.children,N=e.custom,P=e.lang,h=e["data-browse"],w=e.as,E=void 0===w?"div":w,C=e.inputAs,g=void 0===C?"input":C,k=Object(d.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),R=N?[i,"custom"]:[s,"form-file"],L=R[0],V=R[1];s=Object(O.a)(L,V);var T=Object(r.useContext)(y).controlId,S=Object(r.useMemo)((function(){return{controlId:t||T,custom:N}}),[T,N,t]),B=null!=p&&!1!==p&&!j,z=l.a.createElement(I,Object(o.a)({},k,{ref:a,isValid:c,isInvalid:m,disabled:n,as:g,lang:P}));return l.a.createElement(y.Provider,{value:S},l.a.createElement(E,{style:v,className:u()(f,s,N&&"custom-file")},j||l.a.createElement(l.a.Fragment,null,N?l.a.createElement(l.a.Fragment,null,z,B&&l.a.createElement(F,{"data-browse":h},p)):l.a.createElement(l.a.Fragment,null,B&&l.a.createElement(F,null,p),z),(c||m)&&l.a.createElement(x,{type:c?"valid":"invalid"},b))))}));k.displayName="FormFile",k.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},k.Input=I,k.Label=F;var R=k,L=(t("2W6z"),l.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,n=e.bsCustomPrefix,c=e.type,m=e.size,b=e.id,f=e.className,v=e.isValid,p=e.isInvalid,x=e.plaintext,j=e.readOnly,N=e.custom,P=e.as,h=void 0===P?"input":P,w=Object(d.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(r.useContext)(y).controlId,C=N?[n,"custom"]:[i,"form-control"],I=C[0],g=C[1];if(i=Object(O.a)(I,g),x)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===c){var F;(F={})[i+"-file"]=!0,t=F}else if("range"===c){var k;(k={})[i+"-range"]=!0,t=k}else if("select"===h&&N){var R;(R={})[i+"-select"]=!0,R[i+"-select-"+m]=m,t=R}else{var L;(L={})[i]=!0,L[i+"-"+m]=m,t=L}return l.a.createElement(h,Object(o.a)({},w,{type:c,ref:a,readOnly:j,id:b||E,className:u()(f,t,v&&"is-valid",p&&"is-invalid")}))})));L.displayName="FormControl",L.Feedback=x;var V=L,T=l.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,n=e.controlId,c=e.as,m=void 0===c?"div":c,b=Object(d.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(O.a)(t,"form-group");var f=Object(r.useMemo)((function(){return{controlId:n}}),[n]);return l.a.createElement(y.Provider,{value:f},l.a.createElement(m,Object(o.a)({},b,{ref:a,className:u()(s,t)}),i))}));T.displayName="FormGroup";var S=T,B=l.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,n=e.column,m=e.srOnly,b=e.className,f=e.htmlFor,v=Object(d.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=Object(r.useContext)(y).controlId;i=Object(O.a)(i,"form-label");var x="col-form-label";"string"===typeof n&&(x=x+"-"+n);var j=u()(b,i,m&&"sr-only",n&&x);return f=f||p,n?l.a.createElement(c.a,Object(o.a)({as:"label",className:j,htmlFor:f},v)):l.a.createElement(s,Object(o.a)({ref:a,className:j,htmlFor:f},v))}));B.displayName="FormLabel",B.defaultProps={column:!1,srOnly:!1};var z=B,G=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,i=void 0===s?"small":s,n=e.muted,c=Object(d.a)(e,["bsPrefix","className","as","muted"]);return t=Object(O.a)(t,"form-text"),l.a.createElement(i,Object(o.a)({},c,{ref:a,className:u()(r,t,n&&"text-muted")}))}));G.displayName="FormText";var H=G,q=l.a.forwardRef((function(e,a){return l.a.createElement(E,Object(o.a)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=E.Input,q.Label=E.Label;var Y=q,_=t("YdCC"),Z=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,s=e.className,i=e.validated,n=e.as,c=void 0===n?"form":n,m=Object(d.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(O.a)(t,"form"),l.a.createElement(c,Object(o.a)({},m,{ref:a,className:u()(s,i&&"was-validated",r&&t+"-inline")}))}));Z.displayName="Form",Z.defaultProps={inline:!1},Z.Row=Object(_.a)("form-row"),Z.Group=S,Z.Control=V,Z.Check=E,Z.File=R,Z.Switch=Y,Z.Label=z,Z.Text=H;var A=Z,J=t("dbZe"),M=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,s=e.size,i=e.active,n=e.className,c=e.block,m=e.type,b=e.as,f=Object(d.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(O.a)(t,"btn"),p=u()(n,v,i&&"active",v+"-"+r,c&&v+"-block",s&&v+"-"+s);if(f.href)return l.a.createElement(J.a,Object(o.a)({},f,{as:b,ref:a,className:u()(p,f.disabled&&"disabled")}));a&&(f.ref=a),b||(f.type=m);var x=b||"button";return l.a.createElement(x,Object(o.a)({},f,{className:p}))}));M.displayName="Button",M.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var Q=M,U=t("6xyR"),W=l.a.createElement,D={width:"auto",height:"auto"},X={marginTop:"10px"},K={background:"#EDBDCA"};a.default=function(e){return W(s.a,null,W(i.a,null,W(n.a,null,W(c.a,{xs:0,sm:0,md:1,lg:2,xl:2}),W(c.a,{xs:12,sm:12,md:10,lg:8,xl:8},W(n.a,null,W(c.a,{xs:12,sm:12,md:12,lg:12,xl:6,style:X},W(U.a,{style:D},W(U.a.Header,{style:K},"Login"),W(U.a.Body,null,W(A,null,W(A.Group,{controlId:"formBasicEmail"},W(A.Label,null,"Email address"),W(A.Control,{type:"email",placeholder:"Enter email"}),W(A.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),W(A.Group,{controlId:"formBasicPassword"},W(A.Label,null,"Password"),W(A.Control,{type:"password",placeholder:"Password"})),W(A.Group,{controlId:"formBasicCheckbox"},W(A.Check,{type:"checkbox",label:"Check me out"})),W(Q,{variant:"primary",type:"submit"},"Submit"))))),W(c.a,{xs:12,sm:12,md:12,lg:12,xl:6,style:X},W(U.a,{style:D},W(U.a.Header,{style:K},"Regist"),W(U.a.Body,null,W(A,null,W(A.Group,{controlId:"formBasicEmail"},W(A.Label,null,"Email address"),W(A.Control,{type:"email",placeholder:"Enter email"}),W(A.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),W(A.Group,{controlId:"formBasicPassword"},W(A.Label,null,"Password"),W(A.Control,{type:"password",placeholder:"Password"})),W(Q,{variant:"primary",type:"submit"},"Regist")))))),W("br",null),W("br",null),W("br",null)),W(c.a,{xs:0,sm:0,md:1,lg:2,xl:2}))))}},u6Hu:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t("O2ls")}])}},[["u6Hu",0,2,1,3]]]);