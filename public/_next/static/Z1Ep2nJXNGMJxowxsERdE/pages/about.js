(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Juyh:function(t,n,e){"use strict";e.r(n);var a=e("o0o1"),r=e.n(a),u=e("q1tI"),o=e.n(u),s=e("3Hq7"),l=e("vcXL"),c=e.n(l),i=o.a.createElement,p=function(t){return i(s.a,null,i("h1",null,"This is the about page"),i("ul",{className:"list-group"},t.data.map((function(t){return i("li",{className:"list-group-item",key:t.id},i("h3",null,t.title),i("h3",null,i("a",{href:t.url},t.thumbnailUrl)))}))))};p.getInitialProps=function(){var t,n;return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.awrap(c()("https://jsonplaceholder.typicode.com/photos"));case 2:return t=e.sent,e.next=5,r.a.awrap(t.json());case 5:return n=e.sent,console.log("Show data fetched. Count: ".concat(n.length)),e.abrupt("return",{data:n});case 8:case"end":return e.stop()}}),null,null,null,Promise)},n.default=p},rB5V:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e("Juyh")}])},vcXL:function(t,n,e){"use strict";var a=self.fetch.bind(self);t.exports=a,t.exports.default=t.exports}},[["rB5V",0,2,1,3]]]);