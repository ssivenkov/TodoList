(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{58:function(e,t,a){e.exports=a(70)},63:function(e,t,a){},64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),c=(a(63),a(39)),o=a(14),u=a(25),s=a(16),d=(a(64),a(103)),m=a(112),f=a(102);var b=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],b=o[1],v=function(){var t=r.trim();t?e.addItem(t):b(!0),l("")};return i.a.createElement("div",null,i.a.createElement(m.a,{value:r,onChange:function(e){b(!1),l(e.currentTarget.value)},onKeyPress:function(e){"Enter"===e.key&&v()},size:"small",error:u,helperText:u&&"Title is required!",label:"Title",variant:"outlined"}),i.a.createElement(f.a,{onClick:v,color:"primary",size:"small"},i.a.createElement(d.a,null)))};var v=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(e.title),o=Object(s.a)(c,2),u=o[0],d=o[1],f=function(){l(!1),e.changeTitle(u)};return r?i.a.createElement(m.a,{onChange:function(e){d(e.currentTarget.value)},value:u,onBlur:f,autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&f()}}):i.a.createElement("span",{onDoubleClick:function(){return l(!0)}},e.title)},E=a(113),h=a(105),j=a(104);var p=function(e){var t=e.tasks.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement(E.a,{size:"small",color:"primary",checked:t.isDone,onChange:function(a){return e.changeTaskStatus(t.id,a.currentTarget.checked,e.id)}}),i.a.createElement(v,{title:t.title,changeTitle:function(a){return e.changeTaskTitle(t.id,a,e.id)}}),i.a.createElement(f.a,{onClick:function(){return e.removeTask(t.id,e.id)},size:"small"},i.a.createElement(j.a,null)))}));return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(v,{title:e.title,changeTitle:function(t){return e.changeTodoListTitle(t,e.id)}}),i.a.createElement(f.a,{onClick:function(){return e.removeTodolist(e.id)},size:"small"},i.a.createElement(j.a,null))),i.a.createElement(b,{addItem:function(t){return e.addTask(t,e.id)}}),i.a.createElement("ul",{style:{listStyle:"none"}},t),i.a.createElement("div",null,i.a.createElement(h.a,{size:"small",variant:"contained",color:"all"===e.filter?"primary":"default",onClick:function(){return e.changeFilter("all",e.id)},style:{margin:"0 3px"}},"All"),i.a.createElement(h.a,{size:"small",variant:"contained",color:"active"===e.filter?"primary":"default",onClick:function(){return e.changeFilter("active",e.id)},style:{margin:"0 3px"}},"Active"),i.a.createElement(h.a,{size:"small",variant:"contained",color:"completed"===e.filter?"primary":"default",onClick:function(){return e.changeFilter("completed",e.id)}},"Completed")))},O=a(114),g=a(106),k=a(71),T=a(107),y=a(108),C=a(110),D=a(111),S=a(109);var w=function(){var e,t=Object(O.a)(),a=Object(O.a)(),n=i.a.useState([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),r=Object(s.a)(n,2),l=r[0],d=r[1],m=i.a.useState((e={},Object(u.a)(e,t,[{id:Object(O.a)(),title:"HTML&CSS",isDone:!0},{id:Object(O.a)(),title:"JS",isDone:!0},{id:Object(O.a)(),title:"React",isDone:!1}]),Object(u.a)(e,a,[{id:Object(O.a)(),title:"Beer",isDone:!0},{id:Object(O.a)(),title:"Fish",isDone:!0},{id:Object(O.a)(),title:"Meat",isDone:!1}]),e)),v=Object(s.a)(m,2),E=v[0],j=v[1],w=function(e,t){E[t]=E[t].filter((function(t){return t.id!==e})),j(Object(o.a)({},E))},x=function(e,t){var a={id:Object(O.a)(),title:e,isDone:!1};E[t]=[a].concat(Object(c.a)(E[t])),j(Object(o.a)({},E))},z=function(e,t,a){E[a]=E[a].map((function(a){return a.id===e?Object(o.a)({},a,{isDone:t}):a})),j(Object(o.a)({},E))},F=function(e,t,a){E[a]=E[a].map((function(a){return a.id===e?Object(o.a)({},a,{title:t}):a})),j(Object(o.a)({},E))},B=function(e,t){d(l.map((function(a){return a.id===t?Object(o.a)({},a,{filter:e}):a})))},I=function(e){d(l.filter((function(t){return t.id!==e})));var t=Object(o.a)({},E);delete t[e],j(t)},L=function(e,t){d(l.map((function(a){return a.id===t?Object(o.a)({},a,{title:e}):a})))},W=l.map((function(e){var t=E[e.id];return"active"===e.filter&&(t=E[e.id].filter((function(e){return!e.isDone}))),"completed"===e.filter&&(t=E[e.id].filter((function(e){return e.isDone}))),i.a.createElement(g.a,{item:!0,key:e.id},i.a.createElement(k.a,{elevation:5,style:{padding:"10px"}},i.a.createElement(p,{id:e.id,filter:e.filter,title:e.title,tasks:t,addTask:x,removeTask:w,removeTodolist:I,changeFilter:B,changeTaskStatus:z,changeTaskTitle:F,changeTodoListTitle:L})))}));return i.a.createElement("div",{className:"App"},i.a.createElement(T.a,{position:"static"},i.a.createElement(y.a,{style:{justifyContent:"space-between"}},i.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(S.a,null)),i.a.createElement(C.a,{variant:"h6"},"Todolists"),i.a.createElement(h.a,{variant:"outlined",color:"inherit"},"Login"))),i.a.createElement(D.a,{fixed:!0},i.a.createElement(g.a,{container:!0,style:{padding:"10px 0px"}},i.a.createElement(b,{addItem:function(e){var t=Object(O.a)(),a={id:t,title:e,filter:"all"};d([].concat(Object(c.a)(l),[a])),j(Object(o.a)({},E,Object(u.a)({},t,[])))}})),i.a.createElement(g.a,{container:!0,spacing:5},W)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.86580f8c.chunk.js.map