"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[673],{713:function(e,n,t){t.d(n,{Hg:function(){return s},IQ:function(){return p},Jh:function(){return l},XT:function(){return i},s_:function(){return f}});var r=t(861),c=t(757),a=t.n(c),u="https://api.themoviedb.org/3",o="bc1a38dbf70e6a30c3ffc04bb2eb445c",s=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/trending/movie/day?language=en-US&api_key=").concat(o));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(n,"&page=1"));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(o));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(o));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},673:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(791),c=t(861),a=t(439),u=t(757),o=t.n(u),s=t(87),i=t(689),f=t(713),p="Movies_movies_list__dUKOB",l="Movies_movies_item__xO9oe",v="Movies_search_form__GfWPy",h="Movies_search_fild__r6DfM",m="Movies_search_btn__Em850",_=t(184),d=v,x=h,y=m,w=p,b=l;var k=function(){var e=(0,s.lr)(),n=(0,a.Z)(e,2),t=n[0],u=n[1],p=(0,r.useState)([]),l=(0,a.Z)(p,2),v=l[0],h=l[1],m=(0,i.TH)();return(0,r.useEffect)((function(){var e,n=null!==(e=t.get("query"))&&void 0!==e?e:[];function r(){return(r=(0,c.Z)(o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,f.XT)(n);case 2:t=e.sent,r=t.results,h(r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[t]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.search.value;u({query:n.trim()})},className:d,children:[(0,_.jsx)("input",{type:"text",name:"search",className:x,autoComplete:"off",placeholder:"Search movies"}),(0,_.jsx)("button",{type:"submit",className:y,children:"Search"})]}),(0,_.jsx)("ul",{className:w,children:v.map((function(e){var n;return(0,_.jsx)(s.rU,{to:"".concat(e.id),state:{from:m},className:b,children:(0,_.jsx)("li",{children:null!==(n=e.original_title)&&void 0!==n?n:e.original_name})},e.id)}))})]})};var g=function(){return(0,_.jsx)(k,{})}},861:function(e,n,t){function r(e,n,t,r,c,a,u){try{var o=e[a](u),s=o.value}catch(i){return void t(i)}o.done?n(s):Promise.resolve(s).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var u=e.apply(n,t);function o(e){r(u,c,a,o,s,"next",e)}function s(e){r(u,c,a,o,s,"throw",e)}o(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=673.b54d132d.chunk.js.map