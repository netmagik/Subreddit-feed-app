(this["webpackJsonpreddit-feed-app"]=this["webpackJsonpreddit-feed-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),i=(n(11),n(4)),o=n.n(i),u=n(6),d=n(2),j=n(0);var l=function(e){return Object(j.jsx)("article",{children:Object(j.jsx)("a",{href:"https://reddit.com"+e.item.permalink,target:"_blank",rel:"noreferrer",children:Object(j.jsx)("h3",{children:e.item.title})})})};var h=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("webdev"),s=Object(d.a)(a,2),i=s[0],h=s[1],b=Object(c.useState)(!1),p=Object(d.a)(b,2),f=p[0],O=p[1];return Object(c.useEffect)((function(){var e=setTimeout((function(){Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/".concat(i,".json")).then((function(e){200===e.status?e.json().then((function(e){null!==e&&(r(e.data.children),console.log(e.data),O(!1))})):console.log(e.status)})).catch((function(e){console.log(e),O(!0)}));case 2:case"end":return e.stop()}}),e)})))()}),500);return function(){return clearTimeout(e)}}),[i]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("h1",{children:"REDDIT API - Subreddit"}),Object(j.jsx)("span",{className:"search-info",children:"Enter to Search for Subreddit"}),Object(j.jsx)("input",{type:"text",className:"subreddit_input",value:i,onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)("div",{className:"articles",children:null===n||f?Object(j.jsxs)("p",{className:"error",children:["There is either a typo or no Reddit found. ",Object(j.jsx)("br",{})]}):n.map((function(e,t){return Object(j.jsx)(l,{item:e.data},t)}))})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b4855ee1.chunk.js.map