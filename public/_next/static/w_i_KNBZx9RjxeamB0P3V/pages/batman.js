(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Bjnu:function(n,t,a){"use strict";a.r(t);var e=a("o0o1"),r=a.n(e),s=a("q1tI"),u=a.n(s),o=a("3Hq7"),c=a("YFqc"),l=a.n(c),i=a("vcXL"),p=a.n(i),w=a("sjrs"),f=u.a.createElement,h=function(n){return f(o.a,null,f("h1",null,"Batman TV Shows"),f("ul",null,n.shows.map((function(n){return f(w.a,{variant:"flush",key:n.id},f(w.a.Item,null,f(l.a,{href:"/batman/[id]",as:"/batman/".concat(n.id)},f("a",null,n.name))))}))))};h.getInitialProps=function(){var n,t;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.a.awrap(p()("https://api.tvmaze.com/search/shows?q=batman"));case 2:return n=a.sent,a.next=5,r.a.awrap(n.json());case 5:return t=a.sent,console.log("Show data fetched. Count: ".concat(t.length)),a.abrupt("return",{shows:t.map((function(n){return n.show}))});case 8:case"end":return a.stop()}}),null,null,null,Promise)},t.default=h},rsHa:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/batman",function(){return a("Bjnu")}])},vcXL:function(n,t,a){"use strict";var e=self.fetch.bind(self);n.exports=e,n.exports.default=n.exports}},[["rsHa",0,2,1,3]]]);