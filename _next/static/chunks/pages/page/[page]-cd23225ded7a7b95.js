(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{6432:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page/[page]",function(){return n(3917)}])},5625:function(e,r,n){"use strict";var t=n(5893),s=n(1664),a=n.n(s),c=function(e){var r=e.pages,n=e.current_page,s=void 0===n?1:n;return(0,t.jsx)("div",{className:"flex items-center flex-wrap space-x-1 mt-8",children:r.map(function(e){return(0,t.jsx)(a(),{href:"/page/".concat(e),children:(0,t.jsx)("a",{className:"px-4 py-2 border border-emerald-400 hover:bg-black hover:text-emerald-200 ".concat(s==e&&"bg-black text-emerald-300"),children:e})},e)})})};r.Z=c},6987:function(e,r,n){"use strict";var t=n(5893),s=n(1664),a=n.n(s),c=function(e){var r=e.post;return(0,t.jsx)(a(),{href:"/posts/".concat(r.slug),children:(0,t.jsx)("a",{children:(0,t.jsxs)("div",{className:"px-2 py-4 text-slate-300",children:[(0,t.jsx)("h1",{className:"font-bold text-lg text-emerald-400",children:r.frontMatter.title}),(0,t.jsx)("span",{className:"text-emerald-500",children:r.frontMatter.date})]})})})};r.Z=c},2475:function(e,r,n){"use strict";n.d(r,{Z:function(){return i}});var t=n(5893),s=n(1664),a=n.n(s),c={PAGENATION_COUNT:6,range:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r-e+1;return Array.from({length:n},function(r,n){return e+n})},categories:["react","Java","Rust","Spring","Android","Docker","Git","JavaScript","Kubernetes","Laravel","Linux","Oracle","OS","SQL","Swagger","TypeScript","WordPress","WPF"]},i=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"text-emerald-500 mt-5 text-xl font-bold",children:"カテゴリー"}),c.categories.map(function(e){return(0,t.jsx)("div",{children:(0,t.jsx)("ul",{className:"list-none ml-3 mt-1",children:(0,t.jsx)("li",{children:(0,t.jsx)(a(),{href:"/categories/".concat(e),children:(0,t.jsx)("a",{className:"text-emerald-500 mt-5",children:e})})})})},e)})]})}},3917:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return l}});var t=n(5893),s=n(5625),a=n(6987),c=n(2475),i=function(e){var r=e.posts,n=e.pages,i=e.current_page;return(0,t.jsxs)("div",{className:"my-8 grid grid-cols-1 md:grid-cols-3",children:[(0,t.jsxs)("div",{className:"col-span-2",children:[r.map(function(e){return(0,t.jsx)(a.Z,{post:e},e.slug)}),(0,t.jsx)(s.Z,{pages:n,current_page:i})]}),(0,t.jsx)("div",{className:"col-span-1",children:(0,t.jsx)(c.Z,{})})]})},l=!0;r.default=i}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6432)}),_N_E=e.O()}]);