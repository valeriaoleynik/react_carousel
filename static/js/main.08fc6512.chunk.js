(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),i=n(2),c=n(1),l=(n(9),n(10),n(0)),m=function(e){var t=e.images,n=e.step,a=e.frameSize,s=e.itemWidth,m=e.animationDuration,u=e.infinite,r=Object(c.useState)(0),b=Object(i.a)(r,2),j=b[0],o=b[1],g=t.length-a,p=s*a;return Object(l.jsxs)("div",{className:"Carousel",style:{width:"".concat(p,"px"),transition:"".concat(m,"ms")},children:[Object(l.jsx)("ul",{className:"Carousel__list",children:t.map((function(e,t){return Object(l.jsx)("li",{style:{transform:"translateX(".concat(-j*s,"px)")},children:Object(l.jsx)("img",{src:e,alt:"".concat(t+1),style:{width:"".concat(s,"px"),height:"".concat(s,"px")}})},e)}))}),Object(l.jsxs)("div",{className:"Carousel__buttons",children:[Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){o(0!==j?function(e){return Math.max(e-n,0)}:g)},disabled:0===j&&!u,children:"Prev"}),Object(l.jsx)("button",{"data-cy":"next",type:"button",className:"button",onClick:function(){o(j!==g?function(e){return Math.min(e+n,g)}:0)},disabled:j===g&&!u,children:"Next"})]})]})},u=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],r=function(){var e=Object(c.useState)(130),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(3),r=Object(i.a)(s,2),b=r[0],j=r[1],o=Object(c.useState)(3),g=Object(i.a)(o,2),p=g[0],h=g[1],x=Object(c.useState)(1e3),O=Object(i.a)(x,2),d=O[0],_=O[1],S=Object(c.useState)(!1),f=Object(i.a)(S,2),N=f[0],v=f[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",u.length," images"]}),Object(l.jsx)("div",{className:"App__settings Settings",children:Object(l.jsxs)("div",{className:"Settings__elements",children:[Object(l.jsxs)("label",{className:"Settings__element-label",children:["Item Width:",Object(l.jsx)("input",{className:"Settings__element-input",type:"number",min:"130",max:"260",step:"10",value:n,onChange:function(e){a(+e.target.value)}})]}),Object(l.jsxs)("label",{className:"Settings__element-label",children:["Frame Size:",Object(l.jsx)("input",{className:"Settings__element-input",type:"number",min:"1",max:u.length,value:b,onChange:function(e){j(+e.target.value)}})]}),Object(l.jsxs)("label",{className:"Settings__element-label",children:["Step:",Object(l.jsx)("input",{className:"Settings__element-input",type:"number",min:"1",max:u.length,value:p,onChange:function(e){h(+e.target.value)}})]}),Object(l.jsxs)("label",{className:"Settings__element-label",children:["Animation Duration:",Object(l.jsx)("input",{className:"Settings__element-input",type:"number",min:"0",max:"5000",step:"500",value:d,onChange:function(e){_(+e.target.value)}})]}),Object(l.jsxs)("label",{className:"Settings__element-label",children:["Infinite:",Object(l.jsx)("input",{className:"Settings__element-input",type:"checkbox",onChange:function(){return v(!N)}})]})]})}),Object(l.jsx)(m,{images:u,step:p,frameSize:b,itemWidth:n,animationDuration:d,infinite:N})]})};s.a.render(Object(l.jsx)(r,{}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.08fc6512.chunk.js.map