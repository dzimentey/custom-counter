(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(9),s=n.n(a),u=(n(28),n(14)),i=(n(29),n(50)),l=n(3),o=function(e){return Object(l.jsx)("div",{className:"display",children:Object(l.jsx)("div",{style:e.counter===e.maxValue?{color:"red"}:{color:""},children:e.counter})})},j=n(51),b=function(e){return Object(l.jsx)(j.a,{variant:"contained",color:"primary",size:"small",onClick:e.click,disabled:!!e.counter&&e.counter===e.maxValue,children:e.value})};var d=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(0),s=Object(u.a)(a,2),j=s[0],d=s[1],v=Object(c.useState)(5),O=Object(u.a)(v,2),x=O[0],m=O[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)(i.a,{elevation:6,square:!0,className:"paper",children:[Object(l.jsxs)("div",{className:"inputs",children:[Object(l.jsx)("div",{children:"max value:"})," ",Object(l.jsx)("input",{type:"number",min:1,value:x,onInput:function(e){return m(e.currentTarget.valueAsNumber)}}),Object(l.jsx)("div",{children:"start value:"})," ",Object(l.jsx)("input",{type:"number",min:0,value:j,onChange:function(e){return d(e.currentTarget.valueAsNumber)}})]}),Object(l.jsx)("div",{className:"controls",children:Object(l.jsx)(b,{value:"set",click:function(){return r(j)}})})]}),Object(l.jsxs)(i.a,{elevation:6,square:!0,className:"paper",children:[Object(l.jsx)(o,{counter:n,maxValue:x}),Object(l.jsxs)("div",{className:"controls",children:[Object(l.jsx)(b,{counter:n,maxValue:x,value:"incr",click:function(){return r(n+1)}}),Object(l.jsx)(b,{value:"reset",click:function(){return r(j)}})]})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.77e8aec2.chunk.js.map