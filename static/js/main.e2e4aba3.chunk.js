(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(4),o=n.n(r),l=(n(21),n(22),n(1)),a=function(){return Object(l.jsx)("div",{className:"header"})},s=(n(24),n(3)),d=(n(25),n.p+"static/media/icon-sun.910b1f9a.svg"),u=n.p+"static/media/icon-moon.6c03114b.svg",j=n(9),f=function e(){var t=this;Object(j.a)(this,e),this.baseStorage=localStorage,this.getData=function(e){return t.baseStorage.getItem(e)},this.setData=function(e,n){t.baseStorage.setItem(e,n)}},A=function(){var e=new f,t=Object(c.useState)(function(){var t=e.getData("todo-theme");return"light"===t||"dark"===t?t:"light"}()),n=Object(s.a)(t,2),i=n[0],r=n[1];Object(c.useEffect)((function(){document.body.dataset.theme=i}),[i]);return Object(l.jsxs)("div",{className:"todo-header d-flex justify-content-between align-items-center",children:[Object(l.jsx)("h1",{className:"todo-header__title",children:"TODO"}),Object(l.jsx)("img",{onClick:function(){r((function(t){var n="light"===t?"dark":"light";return e.setData("todo-theme",n),n}))},src:"light"===i?u:d,alt:"theme-selector"})]})},m=(n(26),function(e){var t=e.createNewItem,n=Object(c.useState)(""),i=Object(s.a)(n,2),r=i[0],o=i[1],a=Object(c.useRef)(null);return Object(l.jsxs)("form",{ref:a,onSubmit:function(e){var n;(e.preventDefault(),r.length>=4)?(t(r),o("")):null===(n=a.current)||void 0===n||n.classList.add("invalid")},className:"todo-form",action:"#",children:[Object(l.jsx)("input",{placeholder:"Create a new todo...",onInput:function(e){var t;null===(t=a.current)||void 0===t||t.classList.remove("invalid"),o(e.currentTarget.value)},value:r,type:"text"}),Object(l.jsxs)("span",{className:"todo-form__invalid-label",children:["Tasks must contain at least ",4," characters"]})]})}),b=n(2),O=(n(27),n(5)),v=(n(28),function(){return Object(l.jsx)("div",{className:"empty-item",children:"No items yet..."})}),x=function(e){var t=e.children,n=e.todos.map((function(e,n){return t(e,n)}));return Object(l.jsx)(O.c,{droppableId:"droppable",children:function(e){return Object(l.jsxs)("ul",Object(b.a)(Object(b.a)({ref:e.innerRef},e.droppableProps),{},{className:"todo-list",children:[n.length?n:Object(l.jsx)("li",{className:"todo-list__item",children:Object(l.jsx)(v,{})}),e.placeholder]}))}})},h=(n(35),n(36),function(e){var t=e.filter,n=e.setFilterType,c=function(e){e!==t&&n(e)};return Object(l.jsxs)("div",{className:"filter d-flex",children:[Object(l.jsx)("div",{"data-selected":"all"===t,className:"filter-item",onClick:function(){return c("all")},children:"All"}),Object(l.jsx)("div",{"data-selected":"active"===t,className:"filter-item",onClick:function(){return c("active")},children:"Active"}),Object(l.jsx)("div",{"data-selected":"completed"===t,className:"filter-item",onClick:function(){return c("completed")},children:"Completed"})]})}),p=function(e){var t=e.removeAllCompleted,n=e.activeTodosNumber,c=e.setFilterType,i=e.filter;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"todo-footer d-flex justify-content-between align-items-center",children:[Object(l.jsxs)("div",{className:"todo-footer__left",children:[n," items left"]}),Object(l.jsx)("div",{className:"todo-filter d-md-block d-none",children:Object(l.jsx)(h,{filter:i,setFilterType:c})}),Object(l.jsx)("div",{onClick:t,className:"todo-footer__clear",children:"Clear Completed"})]}),Object(l.jsx)("div",{className:"todo-filter__mobile d-md-none",children:Object(l.jsx)(h,{filter:i,setFilterType:c})}),Object(l.jsx)("div",{className:"todo-footer__label",children:"Drag and drop to reorder list"})]})},g=n(16),N=n(6),C=function e(t){Object(j.a)(this,e),this.id=+new Date,this.completed=!1,this.label=void 0,this.label=t},y=(n(37),n.p+"static/media/icon-cross.6ee81d30.svg"),E=function(e){var t=e.label,n=e.completed,c=e.toggleCompletion,i=e.removeItem,r=e.idx;return Object(l.jsxs)("div",{className:"todo-item d-flex justify-content-between align-items-center",children:[Object(l.jsxs)("div",{className:"todo-item__description d-flex align-items-center",children:[Object(l.jsxs)("div",{className:"todo-item__check",children:[Object(l.jsx)("input",{onChange:c,type:"checkbox",className:"checkbox",id:"complete-".concat(r),defaultChecked:n}),Object(l.jsx)("label",{htmlFor:"complete-".concat(r)})]}),Object(l.jsx)("div",{className:"todo-item__label ".concat(n?"completed":""),children:t})]}),Object(l.jsx)("img",{onClick:i,src:y,alt:"close-cross"})]})},D=function(){return function(e){var t=new f;return function(){var n=Object(c.useState)([new C("Create your first task")]),i=Object(s.a)(n,2),r=i[0],o=i[1];Object(c.useEffect)((function(){var e=t.getData("todo-app-list");if(e){var n=JSON.parse(e);o(n)}}),[]);var a=Object(c.useState)("all"),d=Object(s.a)(a,2),u=d[0],j=d[1],f=function(e){return r.filter((function(t){switch(e){case"all":return!0;case"active":return!t.completed;case"completed":return t.completed}return!0}))},A=function(e,t){var n=f(u),c=n[e].id,i=n[t].id;return[r.findIndex((function(e){return e.id===c})),r.findIndex((function(e){return e.id===i}))]},m=function(e,t){o((function(n){var c=n[e],i=[].concat(Object(N.a)(n.slice(0,e)),Object(N.a)(n.slice(e+1)));return i.splice(t,0,c),i}))};return Object(l.jsx)(e,{todos:f(u),activeTodosNumber:r.filter((function(e){return!e.completed})).length,createNewItem:function(e){o((function(n){var c=[].concat(Object(N.a)(n),[new C(e)]);return t.setData("todo-app-list",JSON.stringify(c)),c}))},filterType:u,onDragEnd:function(e){var t=e.destination,n=e.source;if(t&&t.index!==n.index){var c="all"===u?[n.index,t.index]:A(n.index,t.index),i=Object(s.a)(c,2),r=i[0],o=i[1];m(r,o)}},removeAllCompleted:function(){o((function(e){return e.filter((function(e){return!e.completed}))}))},renderTodos:function(e,t){var n=e.id,c=Object(g.a)(e,["id"]);return Object(l.jsx)(O.b,{draggableId:"".concat(n),index:t,children:function(e){return Object(l.jsx)("li",Object(b.a)(Object(b.a)(Object(b.a)({ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{className:"todo-list__item",children:Object(l.jsx)(E,Object(b.a)({removeItem:function(){return function(e){o((function(t){return t.filter((function(t){return t.id!==e}))}))}(n)},idx:t,toggleCompletion:function(){return function(e){o((function(t){var n=t.findIndex((function(t){return t.id===e})),c=t[n];return[].concat(Object(N.a)(t.slice(0,n)),[Object(b.a)(Object(b.a)({},c),{},{completed:!c.completed})],Object(N.a)(t.slice(n+1)))}))}(n)}},c))}))}},n)},setFilterType:j})}}}()((function(e){var t=e.onDragEnd,n=e.setFilterType,c=e.todos,i=e.removeAllCompleted,r=e.createNewItem,o=e.activeTodosNumber,a=e.filterType,s=e.renderTodos;return Object(l.jsxs)("div",{className:"todo-app",children:[Object(l.jsx)(A,{}),Object(l.jsx)(m,{createNewItem:r}),Object(l.jsx)(O.a,{onDragEnd:t,children:Object(l.jsx)(x,{todos:c,children:s})}),Object(l.jsx)(p,{activeTodosNumber:o,removeAllCompleted:i,setFilterType:n,filter:a})]})})),k=(n(38),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a,{}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10 col-12 todo__container",children:Object(l.jsx)(D,{})})})})]})}),T=n(15),B=n.n(T);o.a.render(Object(l.jsxs)(i.a.StrictMode,{children:[Object(l.jsx)(B.a,{url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABO1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////l9Pff8fS54ein2eOn2eL9/v684unr9vj7/f7c8PSl2eKHzNil2OLv+Prz+vue1eB3xdOq2uPm9Pf29/vy8/n3/Py13+eEyteZ097P6u/2+/zByeKOm8r8/f7u+Pq+4+qOz9uU0dzo9fjb4O5meLbh5fH0+vvV7fHx+fv8/P2Gk8Wbps+44eim2eLW2+xkdrXO1Oit3OWttthperja3u7u+Pn6+/2hrNJneLfFy+P7+/23v92IlcbN0ufx8/nj5/Kbp9BsfbltfrqAj8ORnsvg5PD+/v/v8ffQ1em0vduqtNfn6vS/61TcAAAAHHRSTlMAAAQqbK3Z8v0DN5ff+xqJ6jbC/kHBAjjp3qz8qSKHsgAAAAFiS0dEAf8CLd4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfiChMPAx5FOtlkAAABSUlEQVQ4y4WTZ2OCMBCGc4IMEXAPjB10771t7dLuXbv3/v+/oNigIYjN+4HcJU9CcgMhVxASxLAkK4oshUUhBIgVqBEtqmNXelSLqF4EwDBjmFHMNADoejyRxD4lE/EGAZCScICkFCGc/YHrDkHOACON2yhtOABkTNxWZgYQZHPeqWKH18tlAakas6ezi3E1FQl5Fuhm3LyARD0AsIs9vSSmIrJwC9DXPzA4NEx8C0ktwMjo2PiE3YgFkokxOdUEpmdm5+YXXEBGCjEWl5bpHVZKq2tlMq+gAjHWNza9r9jarpD5QuMX1Z3dv3Fvn72T3LzkweFRfSgd+xJGn3lyeuZ8K+csYNFAXVzWrqr+bDmBoqG+vqnd3t3bDOCE2push8en55fXNzZZTLrfPz6/vn+oX083t2C4JccvWm7Z8xuH33r85v2v/X8Bp/FiyVLnL/0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTAtMTlUMTU6MDM6MzArMDI6MDCzEaEaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTEwLTE5VDE1OjAzOjMwKzAyOjAwwkwZpgAAAFd6VFh0UmF3IHByb2ZpbGUgdHlwZSBpcHRjAAB4nOPyDAhxVigoyk/LzEnlUgADIwsuYwsTIxNLkxQDEyBEgDTDZAMjs1Qgy9jUyMTMxBzEB8uASKBKLgDqFxF08kI1lQAAAABJRU5ErkJggg=="}),Object(l.jsx)(k,{})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e2e4aba3.chunk.js.map