!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){var n,i,r,a,o,c,d,s,l,u,p,f,m={init:function(e){n=document.querySelector(e.el),i=e.currentPage||1,a=e.totalCount,o=e.limit,c=e.maxBtnLength,r=e.pageOnclick,s=e.start,l=e.end,u=e.next,p=e.pre,d=Math.ceil(a/o),v()}};function v(){if(n.innerHTML="",s||p){var e=document.createElement("div");if(s){var t=document.createElement("button");t.innerText="首页",t.dataset.page=1,t.classList.add("pager"),e.appendChild(t)}if(p){var a=document.createElement("button");a.innerText="上一页",a.dataset.page=i-1,a.classList.add("pager"),e.appendChild(a)}n.appendChild(e)}if(f=document.createElement("div"),n.appendChild(f),function(){f.innerHTML="";var e,t,n=Math.ceil(c/2);i<=n?(e=1,t=c):i>=d-n?(e=d-c,t=d):(e=i-(n-1),t=i+(n-1)),d<c&&(t=d);for(var r=e;r<=t;r++){var a=document.createElement("button");a.innerText=r,a.dataset.page=r,a.classList.add("pager"),r==i&&(a.style.background="#fefefe"),f.appendChild(a)}}(),l||u){var o=document.createElement("div");if(u){var m=document.createElement("button");m.innerText="下一页",m.dataset.page=i+1,m.classList.add("pager"),o.appendChild(m)}if(l){var h=document.createElement("button");h.innerText="尾页",h.dataset.page=d,h.classList.add("pager"),o.appendChild(h)}n.appendChild(o)}1==i&&(e.hidden=!0),i==d&&(o.hidden=!0),document.querySelectorAll(".pager").forEach(function(e){e.addEventListener("click",function(e){i=parseInt(e.currentTarget.dataset.page),r&&r(i,e),v()})})}e.exports=m},function(e,t){e.exports={set:function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)},get:function(e){var t=localStorage.getItem(e);return JSON.parse(t)}}},function(e,t){e.exports={findAndDelete:function(e,t){var n=e.indexOf(t);return-1!=n&&(e.splice(n,1),!0)}}},function(e,t,n){var i,r,a,o=n(2),c=n(1),d=[],s={add:function(e){o.findAndDelete(d,e),d.unshift(e),u(),l()},remove:p,clear:f,init:function(e){if(i=document.querySelector(e.el),r=e.onClick,a=e.onDelete,!e.el||!i)throw"Invalid root element";d=c.get("history_list")||[],l()}};function l(){i.innerHTML="",d.length>5&&(d=d.slice(0,5)),d.forEach(function(e){var t=document.createElement("div");t.innerHTML=`\n    <div class="text">${e}</div>\n    <div class="tool">\n      <span class="delete">删除</span>\n    </div>\n    `,t.classList.add("history"),i.appendChild(t),t.addEventListener("click",function(t){r&&r(e,t),i.hidden=!0}),t.querySelector(".delete").addEventListener("click",function(t){t.stopPropagation(),a&&a(e,t),p(e)})});var e=document.createElement("div");e.innerHTML="清空历史记录",e.classList.add("clear-history-list"),i.appendChild(e),e.addEventListener("click",function(e){f()}),0==d.length&&(e.hidden=!0)}function u(){c.set("history_list",d)}function p(e){o.findAndDelete(d,e),u(),l()}function f(){d=[],u(),l()}e.exports=s},function(e,t){e.exports={searchUser:function(e,t,n){e=Object.assign({},{keyword:"",page:1,limit:5},e),n=n||"get";var i=new XMLHttpRequest;i.open(n,"https://api.github.com/search/users?q="+e.keyword+"&page="+e.page+"&per_page="+e.limit),i.send(),i.addEventListener("load",function(){e.userList.innerHTML="";var n=JSON.parse(this.responseText);t(n)})}}},function(e,t){var n=document.getElementById("search-form"),i=document.getElementById("search-input"),r=document.getElementById("user-list"),a=document.getElementById("top"),o=document.getElementById("placeholer"),c=document.getElementById("amount"),d=document.getElementById("history-list"),s=document.getElementById("pagination-container");e.exports={form:n,input:i,placeholer:o,userList:r,top:a,history:d,renderUserList:function(e,t,n){var i=r.innerHTML;s.hidden=!0,e.forEach(function(e){i+=`\n        <div class="user">\n          <a class="avatar" target="_blank" href="${e.html_url}">\n            <img src="${e.avatar_url}">\n          </a>\n          <div class="info">\n            <div class="username">${e.login}</div>\n            <div><a target="_blank" href="${e.html_url}">${e.html_url}</a></div>\n          </div>\n        </div>\n        `}),r.innerHTML=i,c.innerHTML="共有"+t+"条结果",s.hidden=!1}}},function(e,t,n){var i,r,a=n(5),o=n(4),c=n(3),d=n(0),s=5;function l(){a.form.addEventListener("submit",function(e){e.preventDefault(),p(),f(),m()})}function u(){a.top.addEventListener("click",function(){window.scrollTo(0,0)})}function p(){i=1}function f(){a.userList.innerHTML=""}function m(){o.searchUser({keyword:a.input.value,page:i,limit:s,userList:a.userList},function(e){var t=e.items;(r=e.total_count)>1e3&&(r=1e3),a.renderUserList(t,r),d.init({el:"#pagination-container",currentPage:i,totalCount:r,limit:s,maxBtnLength:5,start:!0,end:!0,next:!0,pre:!0,pageOnclick:function(e,t){i=e,m()}})})}e.exports={addEvents:function(){l(),u(),c.init({el:"#history-list",onClick:function(e,t){a.input.value=e,p(),f(),m()}}),a.input.addEventListener("focus",function(){a.history.hidden=!1}),document.documentElement.addEventListener("click",function(e){var t=e.target,n=t.closest("#search-input"),i=t.closest("#history-list");n||i||(a.history.hidden=!0)})},detectSubmit:l,resetUserList:f,detectTop:u,resetPage:p}},function(e,t,n){n(6).addEvents()}]);