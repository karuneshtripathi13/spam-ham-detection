(this.webpackJsonpspam_detector=this.webpackJsonpspam_detector||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(7),s=n.n(r),a=(n(13),n(14),n(4)),o=n(2),j=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),s=Object(a.a)(r,2),j=s[0],d=s[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{id:"title",children:"SPAM HAM PREDICTOR"}),Object(o.jsx)("div",{id:"txt",children:"Enter Message"}),Object(o.jsx)("textarea",{id:"message","text-warp":!0,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{id:"check",onClick:function(e){e.preventDefault();var t={message:n};console.log(t);var c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("/getpred",c).then((function(e){return e.json()})).then((function(e){return d(e.result)}))},children:"Check"}),Object(o.jsx)("div",{className:""===j?"hidden":"show",children:j}),Object(o.jsx)("div",{id:"footer",children:"All rights reserved Copyright\xa9KT"})]})},d=n(8),h=n(1);var l=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(d.a,{children:Object(o.jsx)(h.c,{children:Object(o.jsx)(h.a,{path:"/",element:Object(o.jsx)(j,{})})})})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.45cdeab8.chunk.js.map