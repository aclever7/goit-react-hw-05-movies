"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{4578:function(n,e,t){t.r(e),t.d(e,{Home:function(){return q},MoviePage:function(){return Q},SearchMovie:function(){return $}});var r,i,a,o,s,c,u,l,d,p,f,h=t(5861),x=t(9439),m=t(7757),v=t.n(m),g=t(3623),w=t(501),j=t(6871),Z=t(2730),b=t(168),y=t(6444),k=y.ZP.li(r||(r=(0,b.Z)(["\n  @media screen and (max-width: 767px) {\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-direction: flow;\n    flex-basis: calc(100% / 3 - 32px);\n    width: 213.3px;\n    margin-left: 32px;\n    margin-top: 32px;\n  }\n\n  @media screen and (min-width: 1024px) {\n    flex-basis: calc(100% / 4 - 16px);\n    width: 228px;\n    margin-left: 16px;\n  }\n"]))),_=(0,y.ZP)(Z.Z)(i||(i=(0,b.Z)(["\n  line-height: 1.2;\n\n  .ant-card-body {\n    padding: 10px;\n    overflow: hidden;\n    flex-grow: 1;\n  }\n\n  .ant-card-meta-description {\n    white-space: nowrap;\n    overflow-x: hidden;\n  }\n"]))),P=y.ZP.img(a||(a=(0,b.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  flex-grow: 1;\n  @media screen and (min-width: 768px) {\n    height: 320px;\n  }\n  @media screen and (min-width: 1024px) {\n    height: 340px;\n  }\n"]))),S=t(184),C=Z.Z.Meta,I=function(n){var e=n.id,t=n.title,r=n.img,i=(0,j.TH)(),a=r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://www.remosoftware.com/info/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png";return(0,S.jsx)(k,{children:(0,S.jsx)(w.rU,{to:"/movies/".concat(e),state:{from:i},children:(0,S.jsx)(_,{hoverable:!0,cover:(0,S.jsx)(P,{alt:t,src:a}),children:(0,S.jsx)(C,{title:t,description:t})})})})},E=y.ZP.ul(o||(o=(0,b.Z)(["\n  padding: 0;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin-left: -32px;\n    margin-top: -32px;\n  }\n  @media screen and (min-width: 1024px) {\n    margin-left: -16px;\n  }\n"]))),T=function(n){var e=n.list;return(0,S.jsx)(S.Fragment,{children:!!e&&(0,S.jsx)(E,{children:e.map((function(n){var e=n.id,t=n.original_title,r=n.original_name,i=n.poster_path,a=t||r;return(0,S.jsx)(I,{id:e,title:a,img:i},e)}))})})},z=t(2791),M=y.ZP.section(s||(s=(0,b.Z)(["\n  padding-top: 30px;\n  padding-bottom: 30px;\n"]))),W=function(n){var e=n.children;return(0,S.jsx)(M,{children:e})},G=t(9364),R=t(9421),U=t(4307),q=function(){var n=(0,z.useState)(),e=(0,x.Z)(n,2),t=e[0],r=e[1],i=(0,z.useState)(),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=(0,z.useState)(),u=(0,x.Z)(c,2),l=u[0],d=u[1],p=(0,w.lr)(),f=(0,x.Z)(p,2),m=f[0],j=f[1],Z=m.get("page");console.log(t),(0,z.useEffect)((function(){!Z&&j({page:1})}),[j,Z]),(0,z.useEffect)((function(){function n(){return(n=(0,h.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G.rj(Z);case 3:e=n.sent,d(e.total_pages),r(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),s("An error has occured");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[Z]);return(0,S.jsx)(W,{children:(0,S.jsxs)(g.W,{children:[!!t&&(0,S.jsx)(T,{list:t}),!!o&&(0,S.jsx)(R.Z,{description:o}),!!t&&(0,S.jsx)(U.Z,{defaultCurrent:Z,total:l,onChange:function(n){j({page:n}),window.scrollTo(0,0)},style:{display:"flex",justifyContent:"center"}})]})})},A=y.ZP.div(c||(c=(0,b.Z)(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  margin-bottom: 20px;\n"]))),H=y.ZP.h1(u||(u=(0,b.Z)([""]))),L=y.ZP.div(l||(l=(0,b.Z)(["\n  width: 30%;\n  margin-right: 30px;\n"]))),N=y.ZP.img(d||(d=(0,b.Z)(["\n  display: inline-block;\n  border: 1px solid #716f6f;\n  padding: 5px;\n  width: 100%;\n"]))),O=y.ZP.div(p||(p=(0,b.Z)(["\ndisplay; block;\nwidth: 100%;\nfont-size: 18px;\n\n& .ant-descriptions-item {\n    padding-bottom: 8px;\n};\n\n& .ant-descriptions-item-content {\n    font-size: 18px;\n};\n\n& .ant-descriptions-item-label {\n    font-size: 18px;\n    font-weight: 700;\n}\n"]))),V=y.ZP.div(f||(f=(0,b.Z)(["\n  font-size: 18px;\n"]))),B=t(394),D=function(n){var e,t=n.movie,r=t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://www.remosoftware.com/info/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png";return(0,S.jsxs)(g.W,{children:[(0,S.jsx)(H,{children:null===t||void 0===t?void 0:t.original_title}),(0,S.jsxs)(A,{children:[(0,S.jsx)(L,{children:(0,S.jsx)(N,{src:r,alt:null===t||void 0===t?void 0:t.original_title})}),(0,S.jsx)(O,{children:(0,S.jsxs)(B.Z,{column:1,children:[(0,S.jsxs)(B.Z.Item,{label:"Rating",children:[null===t||void 0===t?void 0:t.vote_average," (",null===t||void 0===t?void 0:t.vote_count,")"]}),(0,S.jsx)(B.Z.Item,{label:"Release date",children:t.release_date?t.release_date.slice(0,4):""}),(0,S.jsx)(B.Z.Item,{label:"Country",children:null===t||void 0===t||null===(e=t.production_countries[0])||void 0===e?void 0:e.name}),(0,S.jsx)(B.Z.Item,{label:"Production companies",children:null===t||void 0===t?void 0:t.production_companies.map((function(n){return n.name})).join(", ")}),(0,S.jsx)(B.Z.Item,{label:"Genres",children:null===t||void 0===t?void 0:t.genres.map((function(n){return n.name})).join(", ")}),(0,S.jsx)(B.Z.Item,{label:"Genres",children:null===t||void 0===t?void 0:t.status}),(0,S.jsxs)(B.Z.Item,{label:"Genres",children:[null===t||void 0===t?void 0:t.runtime," min."]})]})})]}),(0,S.jsxs)(V,{children:[(0,S.jsx)("h2",{children:"About:"}),(0,S.jsx)("p",{children:t.overview})]})]})},F=t(6899),Y=t(435),K=t(9372),J=t(7106),Q=function(){var n=(0,z.useState)(),e=(0,x.Z)(n,2),t=e[0],r=e[1],i=(0,z.useState)(),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=(0,j.UO)().movieId,u=(0,j.TH)().state,l=F.Z.TabPane,d=(0,j.s0)();(0,z.useEffect)((function(){function n(){return(n=(0,h.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G.Pg(c);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),s("No info about this movie");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[c]);return(0,S.jsxs)(W,{children:[(0,S.jsx)(g.W,{children:(0,S.jsx)(Y.Z,{type:"text ",icon:(0,S.jsx)(K.Z,{}),onClick:function(){null!==u&&void 0!==u&&u.from?d(u.from.pathname+u.from.search):d("/")},children:"Go back"})}),!!t&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(D,{movie:t}),(0,S.jsx)(g.W,{children:(0,S.jsxs)(F.Z,{activeKey:"3",onChange:function(n){"1"===n?d("/movies/".concat(c,"/cast"),{state:{from:u.from}}):"2"===n&&d("/movies/".concat(c,"/reviews"),{state:{from:u.from}})},children:[(0,S.jsx)(l,{tab:"Cast"},"1"),(0,S.jsx)(l,{tab:"Reviews"},"2")]})}),(0,S.jsx)(z.Suspense,{fallback:(0,S.jsx)(J.Z,{style:{fontSize:36,display:"flex",justifyContent:"center"},spin:!0}),children:(0,S.jsx)(j.j3,{})})]}),!t&&(0,S.jsx)(R.Z,{description:o})]})},X=t(7031).Z.Search,$=function(){var n=(0,z.useState)(!1),e=(0,x.Z)(n,2),t=e[0],r=e[1],i=(0,z.useState)(),a=(0,x.Z)(i,2),o=a[0],s=a[1],c=(0,z.useState)(),u=(0,x.Z)(c,2),l=u[0],d=u[1],p=(0,z.useState)("TYPE MOVIE TITLE"),f=(0,x.Z)(p,2),m=f[0],j=f[1],Z=(0,w.lr)(),b=(0,x.Z)(Z,2),y=b[0],k=b[1],_=y.get("movie"),P=y.get("page");(0,z.useEffect)((function(){!P&&k({page:1})}),[k,P]),(0,z.useEffect)((function(){function n(){return(n=(0,h.Z)(v().mark((function n(){var e;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!1),r(!0),n.next=5,G.Ph(_,P);case 5:e=n.sent,d(e.total_pages),s(e.results),!e.results.length&&j("No movies were found with current query"),r(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),j("No movies were found with current query");case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))).apply(this,arguments)}_&&function(){n.apply(this,arguments)}()}),[_,P]);return(0,S.jsxs)(g.W,{children:[(0,S.jsx)(W,{children:(0,S.jsx)(X,{placeholder:"TYPE MOVIE TITLE",onSearch:function(n){k({movie:n,page:P})},enterButton:!0,loading:t,defaultValue:_})}),(0,S.jsxs)(W,{children:[!!o&&(0,S.jsx)(T,{list:o}),(!!m||!o)&&(0,S.jsx)(R.Z,{description:m}),!!o&&!!o.length&&(0,S.jsx)(U.Z,{defaultCurrent:P,total:l,onChange:function(n){k({movie:_,page:n}),window.scrollTo(0,0)},style:{display:"flex",justifyContent:"center"}})]})]})}},9364:function(n,e,t){t.d(e,{BA:function(){return d},Pg:function(){return l},Ph:function(){return f},Uj:function(){return p},rj:function(){return u}});var r=t(5861),i=t(7757),a=t.n(i),o=t(4569),s=t.n(o),c="907d92356ea975d8c4e764d27999a432";s().defaults.baseURL="https://api.themoviedb.org/";var u=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e||(e=1),n.next=3,s().get("3/trending/all/day?api_key=".concat(c,"&page=").concat(e));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/movie/".concat(e,"?api_key=").concat(c,"&append_to_response=videos"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("3/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=1&include_adult=false&page=").concat(t));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=578.fcc52784.chunk.js.map