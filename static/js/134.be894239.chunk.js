"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{446:function(t,e,n){n.d(e,{TP:function(){return l},rj:function(){return o},tx:function(){return v},z1:function(){return g},zv:function(){return h}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="https://api.themoviedb.org/",s="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzAyZDhkMzRkYzcyMjdiZTNjNzA5MzM2N2M4OGViZiIsInN1YiI6IjY0NzA5N2YwNzcwNzAwMDBhOTQ3ZGQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3KkCJqrVoPiUwfFpJk-pqYlEvN4ebC6X_KzPPDzK-s";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/trending/all/day?language=en-US"),{headers:{Accept:"application/json",Authorization:s}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/movie/").concat(e,"?language=en-US"),{headers:{Accept:"application/json",Authorization:s}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/movie/").concat(e,"/credits?language=en-US"),{headers:{Accept:"application/json",Authorization:s}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/movie/").concat(e,"/reviews?language=en-US&page=1"),{headers:{Accept:"application/json",Authorization:s}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"3/search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),{headers:{Accept:"application/json",Authorization:s}});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},134:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(87),o=n(689),p=n(446),l=n(184);e.default=function(){var t=(0,s.lr)(),e=(0,a.Z)(t,2),n=e[0],c=e[1],f=(0,i.useState)([]),h=(0,a.Z)(f,2),d=h[0],v=h[1],x=n.get("query"),g=(0,o.TH)();return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.z1)(x);case 3:e=t.sent,v(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}x&&function(){t.apply(this,arguments)}()}),[x]),(0,l.jsxs)("div",{children:[(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c({query:t.target.elements.inputText.value}),t.target.reset()},children:[(0,l.jsx)("input",{type:"text",name:"inputText"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]}),(0,l.jsx)("ul",{children:d.length>0&&d.map((function(t){return(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"".concat(t.id),state:{from:g},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=134.be894239.chunk.js.map