(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(9),s=c.n(a),i=(c(28),c(12)),l=(c(29),c(50)),u=c(3),o=function(e){return Object(u.jsx)("div",{className:"display",children:Object(u.jsx)("div",{style:e.counter===e.maxValue?{color:"red"}:{color:""},children:e.error?e.error:e.counter})})},j=c(51),b=function(e){return Object(u.jsx)(j.a,{variant:"contained",color:"primary",size:"small",onClick:e.click,disabled:e.disable,children:e.title})};var d=function(){var e=Object(r.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(0),s=Object(i.a)(a,2),j=s[0],d=s[1],O=Object(r.useState)(1),m=Object(i.a)(O,2),v=m[0],x=m[1],p=Object(r.useState)(""),f=Object(i.a)(p,2),h=f[0],g=f[1],N=!1;v<=j&&(N=!0),j<0&&(N=!0);var S=function(){localStorage.setItem("maxValue",JSON.stringify(v)),localStorage.setItem("minValue",JSON.stringify(j))};Object(r.useEffect)((function(){var e=localStorage.getItem("minValue"),t=localStorage.getItem("maxValue");if(e){var c=JSON.parse(e);n(c),d(c)}if(t){var r=JSON.parse(t);x(r)}}),[]);var y=!1;c>=v&&(y=!0);var k=!1;return j>=v&&(k=!0),j<0&&(k=!0),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(l.a,{elevation:6,square:!0,className:"paper",children:[Object(u.jsxs)("div",{className:"inputs",children:[Object(u.jsx)("div",{children:"max value:"}),Object(u.jsx)("input",{className:N?"inputError":"",type:"number",value:v,onInput:function(e){return x(e.currentTarget.valueAsNumber)}}),Object(u.jsx)("div",{children:"start value:"}),Object(u.jsx)("input",{className:N?"inputError":"",type:"number",value:j,onChange:function(e){return d(e.currentTarget.valueAsNumber)}})]}),Object(u.jsx)("div",{className:"controls",children:Object(u.jsx)(b,{title:"set",click:function(){j>=v?g("error"):(n(j),S(),g(""))},disable:k})})]}),Object(u.jsxs)(l.a,{elevation:6,square:!0,className:"paper",children:[Object(u.jsx)(o,{counter:c,maxValue:v,error:h}),Object(u.jsxs)("div",{className:"controls",children:[Object(u.jsx)(b,{counter:c,maxValue:v,title:"incr",click:function(){return n(c+1)},disable:y}),Object(u.jsx)(b,{title:"reset",click:function(){j>=v?d(0):j<0?(d(0),n(0)):n(j),v<1&&x(1)}})]})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,52)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root")),O()}},[[35,1,2]]]);
//# sourceMappingURL=main.9ee6b65a.chunk.js.map