(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3Z9Z":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),n=t("q1tI"),c=t.n(n),o=t("vUet"),d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.noGutters,m=e.as,u=void 0===m?"div":m,b=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(o.a)(t,"row"),v=f+"-cols",p=[];return d.forEach((function(e){var a,t=b[e];delete b[e];var l="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"===typeof t?t.cols:t)&&p.push(""+v+l+"-"+a)})),c.a.createElement(u,Object(l.a)({ref:a},b,{className:i.a.apply(void 0,[s,f,n&&"no-gutters"].concat(p))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},"6xyR":function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),n=t("q1tI"),c=t.n(n),o=t("vUet"),d=t("YdCC"),m=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(l.a)({},a,{ref:t,className:i()(a.className,e)}))}))},u=t("Wzyw"),b=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.variant,d=e.as,m=void 0===d?"img":d,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(t,"card-img");return c.a.createElement(m,Object(l.a)({ref:a,className:i()(n?b+"-"+n:b,s)},u))}));b.displayName="CardImg",b.defaultProps={variant:null};var f=b,v=m("h5"),p=m("h6"),x=Object(d.a)("card-body"),y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,m=e.text,b=e.border,f=e.body,v=e.children,p=e.as,y=void 0===p?"div":p,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),N=Object(o.a)(t,"card"),j=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:N+"-header"}}),[N]);return c.a.createElement(u.a.Provider,{value:j},c.a.createElement(y,Object(l.a)({ref:a},O,{className:i()(s,N,d&&"bg-"+d,m&&"text-"+m,b&&"border-"+b)}),f?c.a.createElement(x,null,v):v))}));y.displayName="Card",y.defaultProps={body:!1},y.Img=f,y.Title=Object(d.a)("card-title",{Component:v}),y.Subtitle=Object(d.a)("card-subtitle",{Component:p}),y.Body=x,y.Link=Object(d.a)("card-link",{Component:"a"}),y.Text=Object(d.a)("card-text",{Component:"p"}),y.Header=Object(d.a)("card-header"),y.Footer=Object(d.a)("card-footer"),y.ImgOverlay=Object(d.a)("card-img-overlay");a.a=y},JI6e:function(e,a,t){"use strict";var l=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),n=t("q1tI"),c=t.n(n),o=t("vUet"),d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,n=e.as,m=void 0===n?"div":n,u=Object(r.a)(e,["bsPrefix","className","as"]),b=Object(o.a)(t,"col"),f=[],v=[];return d.forEach((function(e){var a,t,l,r=u[e];if(delete u[e],null!=r&&"object"===typeof r){var s=r.span;a=void 0===s||s,t=r.offset,l=r.order}else a=r;var i="xs"!==e?"-"+e:"";null!=a&&f.push(!0===a?""+b+i:""+b+i+"-"+a),null!=l&&v.push("order"+i+"-"+l),null!=t&&v.push("offset"+i+"-"+t)})),f.length||f.push(b),c.a.createElement(m,Object(l.a)({},u,{ref:a,className:i.a.apply(void 0,[s].concat(f,v))}))}));m.displayName="Col",a.a=m},O2ls:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),r=t.n(l),s=t("CafY"),i=t("8Kt/"),n=t.n(i),c=t("7vrA"),o=t("3Z9Z"),d=t("JI6e"),m=t("wx14"),u=t("zLVn"),b=t("TSYQ"),f=t.n(b),v=(t("K9S6"),t("17x9")),p=t.n(v),x={type:p.a.string.isRequired,as:p.a.elementType},y=r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,s=e.className,i=e.type,n=Object(u.a)(e,["as","className","type"]);return r.a.createElement(l,Object(m.a)({},n,{ref:a,className:f()(s,i&&i+"-feedback")}))}));y.displayName="Feedback",y.propTypes=x,y.defaultProps={type:"valid"};var O=y,N=r.a.createContext({controlId:void 0}),j=t("vUet"),P=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,c=e.isValid,o=e.isInvalid,d=e.isStatic,b=e.as,v=void 0===b?"input":b,p=Object(u.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(l.useContext)(N),y=x.controlId,O=x.custom?[i,"custom-control-input"]:[s,"form-check-input"],P=O[0],h=O[1];return s=Object(j.a)(P,h),r.a.createElement(v,Object(m.a)({},p,{ref:a,id:t||y,className:f()(n,s,c&&"is-valid",o&&"is-invalid",d&&"position-static")}))}));P.displayName="FormCheckInput",P.defaultProps={type:"checkbox"};var h=P,w=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,n=e.htmlFor,c=Object(u.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),o=Object(l.useContext)(N),d=o.controlId,b=o.custom?[s,"custom-control-label"]:[t,"form-check-label"],v=b[0],p=b[1];return t=Object(j.a)(v,p),r.a.createElement("label",Object(m.a)({},c,{ref:a,htmlFor:n||d,className:f()(i,t)}))}));w.displayName="FormCheckLabel";var C=w,E=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.inline,c=e.disabled,o=e.isValid,d=e.isInvalid,b=e.feedback,v=e.className,p=e.style,x=e.title,y=e.type,P=e.label,w=e.children,E=e.custom,I=e.as,g=void 0===I?"input":I,F=Object(u.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===y||E,R=k?[i,"custom-control"]:[s,"form-check"],L=R[0],V=R[1];s=Object(j.a)(L,V);var T=Object(l.useContext)(N).controlId,S=Object(l.useMemo)((function(){return{controlId:t||T,custom:k}}),[T,k,t]),B=null!=P&&!1!==P&&!w,z=r.a.createElement(h,Object(m.a)({},F,{type:"switch"===y?"checkbox":y,ref:a,isValid:o,isInvalid:d,isStatic:!B,disabled:c,as:g}));return r.a.createElement(N.Provider,{value:S},r.a.createElement("div",{style:p,className:f()(v,s,k&&"custom-"+y,n&&s+"-inline")},w||r.a.createElement(r.a.Fragment,null,z,B&&r.a.createElement(C,{title:x},P),(o||d)&&r.a.createElement(O,{type:o?"valid":"invalid"},b))))}));E.displayName="FormCheck",E.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},E.Input=h,E.Label=C;var I=E,g=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.className,c=e.isValid,o=e.isInvalid,d=e.lang,b=e.as,v=void 0===b?"input":b,p=Object(u.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(l.useContext)(N),y=x.controlId,O=x.custom?[i,"custom-file-input"]:[s,"form-control-file"],P=O[0],h=O[1];return s=Object(j.a)(P,h),r.a.createElement(v,Object(m.a)({},p,{ref:a,id:t||y,type:"file",lang:d,className:f()(n,s,c&&"is-valid",o&&"is-invalid")}))}));g.displayName="FormFileInput";var F=g,k=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,n=e.htmlFor,c=Object(u.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),o=Object(l.useContext)(N),d=o.controlId,b=o.custom?[s,"custom-file-label"]:[t,"form-file-label"],v=b[0],p=b[1];return t=Object(j.a)(v,p),r.a.createElement("label",Object(m.a)({},c,{ref:a,htmlFor:n||d,className:f()(i,t),"data-browse":c["data-browse"]}))}));k.displayName="FormFileLabel";var R=k,L=r.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,n=e.disabled,c=e.isValid,o=e.isInvalid,d=e.feedback,b=e.className,v=e.style,p=e.label,x=e.children,y=e.custom,P=e.lang,h=e["data-browse"],w=e.as,C=void 0===w?"div":w,E=e.inputAs,I=void 0===E?"input":E,g=Object(u.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),k=y?[i,"custom"]:[s,"form-file"],L=k[0],V=k[1];s=Object(j.a)(L,V);var T=Object(l.useContext)(N).controlId,S=Object(l.useMemo)((function(){return{controlId:t||T,custom:y}}),[T,y,t]),B=null!=p&&!1!==p&&!x,z=r.a.createElement(F,Object(m.a)({},g,{ref:a,isValid:c,isInvalid:o,disabled:n,as:I,lang:P}));return r.a.createElement(N.Provider,{value:S},r.a.createElement(C,{style:v,className:f()(b,s,y&&"custom-file")},x||r.a.createElement(r.a.Fragment,null,y?r.a.createElement(r.a.Fragment,null,z,B&&r.a.createElement(R,{"data-browse":h},p)):r.a.createElement(r.a.Fragment,null,B&&r.a.createElement(R,null,p),z),(c||o)&&r.a.createElement(O,{type:c?"valid":"invalid"},d))))}));L.displayName="FormFile",L.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},L.Input=F,L.Label=R;var V=L,T=(t("2W6z"),r.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,n=e.bsCustomPrefix,c=e.type,o=e.size,d=e.id,b=e.className,v=e.isValid,p=e.isInvalid,x=e.plaintext,y=e.readOnly,O=e.custom,P=e.as,h=void 0===P?"input":P,w=Object(u.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(l.useContext)(N).controlId,E=O?[n,"custom"]:[i,"form-control"],I=E[0],g=E[1];if(i=Object(j.a)(I,g),x)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===c){var F;(F={})[i+"-file"]=!0,t=F}else if("range"===c){var k;(k={})[i+"-range"]=!0,t=k}else if("select"===h&&O){var R;(R={})[i+"-select"]=!0,R[i+"-select-"+o]=o,t=R}else{var L;(L={})[i]=!0,L[i+"-"+o]=o,t=L}return r.a.createElement(h,Object(m.a)({},w,{type:c,ref:a,readOnly:y,id:d||C,className:f()(b,t,v&&"is-valid",p&&"is-invalid")}))})));T.displayName="FormControl",T.Feedback=O;var S=T,B=r.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,n=e.controlId,c=e.as,o=void 0===c?"div":c,d=Object(u.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(j.a)(t,"form-group");var b=Object(l.useMemo)((function(){return{controlId:n}}),[n]);return r.a.createElement(N.Provider,{value:b},r.a.createElement(o,Object(m.a)({},d,{ref:a,className:f()(s,t)}),i))}));B.displayName="FormGroup";var z=B,G=r.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,i=e.bsPrefix,n=e.column,c=e.srOnly,o=e.className,b=e.htmlFor,v=Object(u.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),p=Object(l.useContext)(N).controlId;i=Object(j.a)(i,"form-label");var x="col-form-label";"string"===typeof n&&(x=x+"-"+n);var y=f()(o,i,c&&"sr-only",n&&x);return b=b||p,n?r.a.createElement(d.a,Object(m.a)({as:"label",className:y,htmlFor:b},v)):r.a.createElement(s,Object(m.a)({ref:a,className:y,htmlFor:b},v))}));G.displayName="FormLabel",G.defaultProps={column:!1,srOnly:!1};var Y=G,H=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,i=void 0===s?"small":s,n=e.muted,c=Object(u.a)(e,["bsPrefix","className","as","muted"]);return t=Object(j.a)(t,"form-text"),r.a.createElement(i,Object(m.a)({},c,{ref:a,className:f()(l,t,n&&"text-muted")}))}));H.displayName="FormText";var _=H,q=r.a.forwardRef((function(e,a){return r.a.createElement(I,Object(m.a)({},e,{ref:a,type:"switch"}))}));q.displayName="Switch",q.Input=I.Input,q.Label=I.Label;var Z=q,A=t("YdCC"),J=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,s=e.className,i=e.validated,n=e.as,c=void 0===n?"form":n,o=Object(u.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(j.a)(t,"form"),r.a.createElement(c,Object(m.a)({},o,{ref:a,className:f()(s,i&&"was-validated",l&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=Object(A.a)("form-row"),J.Group=z,J.Control=S,J.Check=I,J.File=V,J.Switch=Z,J.Label=Y,J.Text=_;var M=J,Q=t("dbZe"),U=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,s=e.size,i=e.active,n=e.className,c=e.block,o=e.type,d=e.as,b=Object(u.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(j.a)(t,"btn"),p=f()(n,v,i&&"active",v+"-"+l,c&&v+"-block",s&&v+"-"+s);if(b.href)return r.a.createElement(Q.a,Object(m.a)({},b,{as:d,ref:a,className:f()(p,b.disabled&&"disabled")}));a&&(b.ref=a),d||(b.type=o);var x=d||"button";return r.a.createElement(x,Object(m.a)({},b,{className:p}))}));U.displayName="Button",U.defaultProps={variant:"primary",active:!1,disabled:!1,type:"button"};var W=U,D=t("6xyR"),K=r.a.createElement,X={width:"auto",height:"auto"},$={marginTop:"10px"},ee={background:"#EDBDCA"};a.default=function(e,a){var t=a.title,l=void 0===t?"Login and Regist Page":t;return K(r.a.Fragment,null,K(n.a,null,K("title",null,l)),K(s.a,null,K(c.a,{fluid:!0},K(o.a,null,K(d.a,{className:"d-none d-sm-none d-md-block",md:2,lg:2,xl:2}),K(d.a,{xs:12,sm:12,md:8,lg:8,xl:8},K(o.a,null,K(d.a,{xs:12,sm:12,md:12,lg:6,xl:6,style:$},K(D.a,{style:X},K(D.a.Header,{style:ee},"Login"),K(D.a.Body,null,K(M,null,K(M.Group,{controlId:"formBasicEmail"},K(M.Label,null,"Email address"),K(M.Control,{type:"email",placeholder:"Enter email"}),K(M.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),K(M.Group,{controlId:"formBasicPassword"},K(M.Label,null,"Password"),K(M.Control,{type:"password",placeholder:"Password"})),K(M.Group,{controlId:"formBasicCheckbox"},K(M.Check,{type:"checkbox",label:"Check me out"})),K(W,{variant:"primary",type:"submit"},"Submit"))))),K(d.a,{xs:12,sm:12,md:12,lg:6,xl:6,style:$},K(D.a,{style:X},K(D.a.Header,{style:ee},"Regist"),K(D.a.Body,null,K(M,null,K(M.Group,{controlId:"formBasicEmail"},K(M.Label,null,"Email address"),K(M.Control,{type:"email",placeholder:"Enter email"}),K(M.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),K(M.Group,{controlId:"formBasicPassword"},K(M.Label,null,"Password"),K(M.Control,{type:"password",placeholder:"Password"})),K(W,{variant:"primary",type:"submit"},"Regist")))))),K("br",null),K("br",null),K("br",null)),K(d.a,{className:"d-none d-sm-none d-md-block",md:2,lg:2,xl:2})))))}},u6Hu:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t("O2ls")}])}},[["u6Hu",0,1,2,3,4,5,6]]]);