(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{25:function(t,e,c){},35:function(t,e,c){},36:function(t,e,c){},37:function(t,e,c){},38:function(t,e,c){},39:function(t,e,c){},40:function(t,e,c){},41:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),r=c(18),s=c.n(r),a=c(3),j=c(8),o=c(2),b=(c(25),c(0));function d(){return Object(b.jsx)("header",{id:"header-shop",children:Object(b.jsx)("h3",{children:"Petok-Petok Fake Store"})})}function u(t){var e=t.sectionName,c=t.children,i=Object(n.useState)(0),r=Object(a.a)(i,2),s=r[0],j=r[1],o=Object(n.useState)(0),d=Object(a.a)(o,2),u=d[0],l=d[1],h=Object(n.useState)(0),O=Object(a.a)(h,2),x=O[0],p=O[1],f=Object(n.useState)(0),m=Object(a.a)(f,2),v=m[0],g=m[1];Object(n.useEffect)((function(){var t=document.getElementById("".concat(e,"-frame")).offsetWidth,c=document.getElementById("".concat(e,"-container")).offsetWidth;g(.9*t),p(c/(.9*t))}),[c]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"button",className:"left-button",onClick:function(){u>0&&(u<1?(j(0),l(0)):(j(s+v),l(u-1)))},children:Object(b.jsx)("i",{className:"material-icons arrow",children:"keyboard_arrow_left"})}),Object(b.jsx)("button",{type:"button",className:"right-button",onClick:function(){u<x&&(x-u<2?(j((x-1)*v*-1),l(x-1)):(j(s-v),l(u+1)))},children:Object(b.jsx)("i",{className:"material-icons arrow",children:"keyboard_arrow_right"})})]}),Object(b.jsx)("div",{id:"".concat(e,"-frame"),children:Object(b.jsx)("div",{id:"".concat(e,"-container"),style:{transform:"translateX(".concat(s,"px)")},children:c})})]})}function l(t){var e=t.item,c=e.title,n=e.image,i=e.price;return Object(b.jsxs)("div",{className:"item-card",children:[Object(b.jsx)(j.b,{to:"/shop/".concat(c),children:Object(b.jsx)("img",{src:n,alt:"".concat(c)})}),Object(b.jsxs)("p",{children:[c," ",i]})]})}function h(t){var e,c=t.cart,i=Object(n.useState)(!1),r=Object(a.a)(i,2),s=r[0],j=r[1];return Object(n.useEffect)((function(){!c.length>0?(j(!0),sessionStorage.clear()):j(!1)}),[]),Object(b.jsxs)("div",{id:"shop",children:[Object(b.jsx)(d,{}),Object(b.jsx)("p",{children:"Browse by product"}),Object(b.jsx)("h1",{children:s&&"There is an error occured"}),Object(b.jsx)(u,{sectionName:"shop",children:(e=c,e.map((function(t){return Object(b.jsx)(l,{item:t},t.title)})))})]})}function O(){return Object(b.jsxs)("div",{id:"home",children:[Object(b.jsx)("h1",{children:"Petok-petok Fake Store"}),Object(b.jsx)("p",{children:"A React Learning Project"}),Object(b.jsx)(j.b,{to:"/shop",children:"Shop"})]})}var x=c(17);var p=function(t){return Object(b.jsxs)("svg",Object(x.a)(Object(x.a)({viewBox:"0 0 512 512",fill:"currentColor",height:"1em",width:"1em"},t),{},{children:[Object(b.jsx)("path",{d:"M208 416 A32 32 0 0 1 176 448 A32 32 0 0 1 144 416 A32 32 0 0 1 208 416 z"}),Object(b.jsx)("path",{d:"M432 416 A32 32 0 0 1 400 448 A32 32 0 0 1 368 416 A32 32 0 0 1 432 416 z"}),Object(b.jsx)("path",{d:"M456.8 120.78a23.92 23.92 0 00-18.56-8.78H133.89l-6.13-34.78A16 16 0 00112 64H48a16 16 0 000 32h50.58l45.66 258.78A16 16 0 00160 368h256a16 16 0 000-32H173.42l-5.64-32h241.66A24.07 24.07 0 00433 284.71l28.8-144a24 24 0 00-5-19.93z"})]}))};function f(t){var e=t.cart,c=Object(n.useState)(!1),i=Object(a.a)(c,2),r=i[0],s=i[1],j=e.map((function(t){var e=t.title,c=t.price,n=t.quantity;return!n>0?null:Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"cart-list-item",children:[Object(b.jsxs)("div",{children:[e," "]}),Object(b.jsxs)("div",{children:["quantity: ",Object(b.jsx)("strong",{children:n})," ",Object(b.jsx)("br",{}),"each ",Object(b.jsxs)("strong",{children:["$",c]})]}),Object(b.jsxs)("div",{children:["total: ",Object(b.jsxs)("strong",{children:["$",c*n]})]})]})},e)})),o=e.reduce((function(t,e){return t+e.price*e.quantity}),0),d=function(){s(!r)};return r?Object(b.jsxs)("div",{id:"cart-detail",children:[j,Object(b.jsxs)("div",{id:"grand-total",children:["Grand total: ",Object(b.jsxs)("strong",{children:["$",o]})]}),Object(b.jsxs)("div",{id:"cart-button-container",children:[Object(b.jsx)("button",{type:"button",id:"cart-checkout",children:"Checkout"}),Object(b.jsx)("button",{type:"button",id:"close-cart-detail",onClick:d,children:"Close"})]})]}):Object(b.jsxs)("div",{id:"sticky-cart",children:[Object(b.jsx)("button",{type:"button",onClick:d,children:Object(b.jsx)(p,{fontSize:36})}),Object(b.jsxs)("span",{children:["$",o]})]})}var m=c(20);function v(t){var e=t.submit,c=t.qty,i=Object(n.useState)(0),r=Object(a.a)(i,2),s=r[0],j=r[1];Object(n.useEffect)((function(){j(c||0)}),[c]);return Object(b.jsxs)("div",{id:"cart-input",children:[Object(b.jsx)("p",{children:"Quantity:"}),Object(b.jsxs)("form",{id:"quantity-form",onSubmit:function(t){t.preventDefault(),e(s)},children:[Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("button",{type:"button",id:"dec-button",name:"decrement",onClick:function(){j(s-1)},children:"\u2212"}),Object(b.jsx)("input",{type:"number",value:s,name:"quantity",onChange:function(t){j(parseInt(t.target.value,10))},required:!0}),Object(b.jsx)("button",{type:"button",className:"inc-button",name:"increment",onClick:function(){j(s+1)},children:"+"})]}),Object(b.jsx)("button",{type:"submit",id:"submit-button",children:"Add to cart"})]})]})}function g(t){var e=Object(n.useState)([]),c=Object(a.a)(e,2),i=c[0],r=c[1],s=t.cartState,u=s.shoppingCart,l=s.setShoppingCart,h=Object(o.f)("/shop/:item/");Object(n.useEffect)((function(){var t=u.find((function(t){return t.title===h.params.item}));r(t)}),[u]);return Object(b.jsxs)("div",{id:"item-page",children:[Object(b.jsx)(d,{}),Object(b.jsxs)("div",{id:"item-container",children:[Object(b.jsx)("img",{id:"item-img",src:i.image,alt:i.title}),Object(b.jsxs)("div",{id:"item-detail",children:[Object(b.jsxs)("h3",{id:"item-title",children:[i.title," "]}),Object(b.jsx)("p",{id:"item-desc-title",children:"Description: "}),Object(b.jsx)("p",{id:"item-description",children:i.description}),Object(b.jsxs)("p",{children:["Price: ","$".concat(i.price)]}),Object(b.jsx)(v,{submit:function(t){var e=u.findIndex((function(t){return t.title===h.params.item}));if(-1!==e){var c=Object(m.a)(u);c[e].quantity=t,l(c)}},qty:i.quantity}),Object(b.jsxs)(j.b,{to:"/shop",children:[Object(b.jsx)("button",{type:"button",className:"back",children:Object(b.jsx)("i",{className:"material-icons arrow",children:"reply"})}),Object(b.jsx)("span",{children:"Go back"})]})]})]})]})}function y(){var t=Object(n.useState)(!1),e=Object(a.a)(t,2),c=e[0],i=e[1],r=Object(n.useState)(!1),s=Object(a.a)(r,2),j=s[0],o=s[1],b=function(t){var e=Object(n.useState)(JSON.parse(sessionStorage.getItem(t))),c=Object(a.a)(e,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){sessionStorage.setItem(t,JSON.stringify(i))}),[i]),i||j||(o(!0),r([])),[i,r]}("cart-storage"),d=Object(a.a)(b,2),u=d[0],l=d[1];return Object(n.useEffect)((function(){j&&(console.log("fetching"),fetch("https://fakestoreapi.com/products",{mode:"cors"}).then((function(t){if(!t.ok)throw new Error("Could not fetch products");return t.json()})).then((function(t){var e=t.map((function(t){var e=t;return e.quantity=0,e}));l(e),i(!0)})))}),[c]),[u,l]}var S=function(){var t=y(),e=Object(a.a)(t,2),c=e[0],n=e[1];return Object(b.jsxs)(j.a,{children:[Object(b.jsx)(f,{cart:c}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(O,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/shop",children:Object(b.jsx)(h,{cart:c})}),Object(b.jsx)(o.a,{exact:!0,path:"/shop/:item/",children:Object(b.jsx)(g,{cartState:{shoppingCart:c,setShoppingCart:n}})})]})]})};c(35),c(36),c(37),c(38),c(39),c(40);s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.705faf10.chunk.js.map