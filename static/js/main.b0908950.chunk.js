(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(28)},15:function(e,t,n){},16:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),l=n.n(o),r=(n(15),n(2)),s=(n(16),n(9)),i=n(8),u=n.n(i),d=(n(25),function(e){var t=e.statusFilter,n=e.setstatusFilter,o=e.todos,l=e.setTodos,r=e.input,i=e.setInput,d=Object(a.useRef)(null),m=[Object(a.useRef)(null),Object(a.useRef)(null),Object(a.useRef)(null)],f=["All","Active","Completed"];Object(a.useEffect)((function(){p()}),[]);var p=function(){f.forEach((function(e,n){e===t&&(d.current.style.left=m[n].current.offsetLeft+"px",d.current.style.width=m[n].current.clientWidth+"px")}))};return window.addEventListener("resize",p),c.a.createElement("div",{className:"form"},c.a.createElement("div",{className:"form--filter"},c.a.createElement("ul",null,f.map((function(e,a){return c.a.createElement("li",{onClick:function(t){!function(e,t){d.current.style.left=e.target.offsetLeft+"px",d.current.style.width=m[t].current.clientWidth+"px"}(t,a),n(e)},className:t===f[a]?"form--filter_active":"",key:a,ref:m[a]},e)}))),c.a.createElement("div",{id:"stick",ref:d})),"Completed"!==t?c.a.createElement("form",{className:"form--input"},c.a.createElement("input",{type:"text",placeholder:"Add details",value:r,onChange:function(e){i(e.target.value)}}),c.a.createElement("button",{className:"btn",onClick:function(e){e.preventDefault(),""!==r&&(l([].concat(Object(s.a)(o),[{text:r,completed:!1,id:u.a.generate()}])),i(""))}},"Add")):c.a.createElement("div",null))}),m=(n(26),function(e){var t=e.todos,n=e.setTodos,a=e.statusFilter,o=e.filteredTodo;return c.a.createElement("div",{className:"todoList"},o.map((function(e){return c.a.createElement(p,{key:e.id,statusFilter:a,todo:e,todos:t,setTodos:n})})),"Completed"===a?c.a.createElement("div",{className:"todoList--btn"},c.a.createElement("button",{className:"btn--delete",onClick:function(){n(t.filter((function(e){return!1===e.completed})))}},c.a.createElement("span",{className:"material-icons todoItem--trashIcon"},"delete_outline"),"delete all")):c.a.createElement("div",null))}),f=n(5),p=(n(27),function(e){var t=e.statusFilter,n=e.todo,a=e.todos,o=e.setTodos,l=function(){o(a.map((function(e){return e.id===n.id?Object(f.a)(Object(f.a)({},e),{},{completed:!n.completed}):e})))};return c.a.createElement("div",{className:"todoItem"},c.a.createElement("div",{className:"todoItem--left"},n.completed?c.a.createElement("input",{type:"checkbox",className:"todoItem--checkbox",onClick:l,checked:"checked"}):c.a.createElement("input",{type:"checkbox",className:"todoItem--checkbox",onClick:l}),c.a.createElement("p",{className:"todoItem--content ".concat(n.completed?"stroke":"")},n.text)),c.a.createElement("div",{className:"todoItem--right"},"Completed"===t?c.a.createElement("span",{className:"material-icons todoItem--trashIcon",onClick:function(){o(a.filter((function(e){return e.id!==n.id})))}},"delete_outline"):c.a.createElement("div",null)))});var E=function(){var e=Object(a.useState)("All"),t=Object(r.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),s=Object(r.a)(l,2),i=s[0],u=s[1],f=Object(a.useState)([]),p=Object(r.a)(f,2),E=p[0],b=p[1],v=Object(a.useState)([]),O=Object(r.a)(v,2),h=O[0],N=O[1];Object(a.useEffect)((function(){j()}),[]),Object(a.useEffect)((function(){I(),k()}),[n,E]);var k=function(){localStorage.setItem("todos",JSON.stringify(E))},j=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var e=localStorage.getItem("todos",JSON.stringify(E));b(JSON.parse(e))}},I=function(){switch(n){case"Completed":N(E.filter((function(e){return!0===e.completed})));break;case"Active":N(E.filter((function(e){return!1===e.completed})));break;default:N(E)}};return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"#todo"),c.a.createElement(d,{statusFilter:n,setstatusFilter:o,input:i,setInput:u,todos:E,setTodos:b}),c.a.createElement(m,{statusFilter:n,todos:E,setTodos:b,filteredTodo:h}))};l.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b0908950.chunk.js.map