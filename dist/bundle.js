(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>d});var o=n(81),i=n.n(o),r=n(645),c=n.n(r)()(i());c.push([t.id,"body {\n    padding: 0;\n    margin: 0;\n}\n\n#content {\n    display: grid;\n}\n\n#header {\n    background-color: tomato;\n    grid-column: 1 / 4;\n    grid-row: 1 / 2;\n    height: 10vh;\n    width: 100vw;\n    text-align: center;\n    position: relative;\n}\n\n#projectSide {\n    background-color: rgba(211, 211, 211, 0.424);\n    opacity: 0.9;\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n    height: 90vh;\n    width: 20vw;\n}\n\n#toDoSide {\n    background-color: white;\n    grid-column: 2 / 4;\n    grid-row: 2 / 4;\n    width: 80vw;\n    position: relative;\n}\n\n#mainProjectList {\n    list-style: none;\n}\n\n.projectTitle {\n    font-size: 20px;\n    cursor: pointer;\n}\n\n.projectTitle:hover {\n    color: tomato;\n    text-decoration: underline;\n}\n\n#newToDo {\n    color: white;\n    font-size: 35px;\n    text-align: center;\n    position: absolute;\n    top: 2vh;\n    left: 90vw;\n    width: 40px;\n    height: 40px;\n    border: 2px solid white;\n    border-radius: 40%;\n    padding-bottom: 3px;\n    cursor: pointer;\n    opacity: 0.8;\n}\n\n#newToDo:hover {\n    border: 4px solid lightblue;\n    color: lightblue;\n    font-weight: 900;\n}\n\n#popUpToDo {\n    width: 500px;\n    height: 400px;\n    background-color: lightgray;\n    opacity: 0.8;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    position: absolute;\n    left: 20vw;\n    top: 10vh;\n    border-radius: 15px;\n    padding: 10px;\n    border: 2px solid tomato;\n}\n\n#inputTitle {\n    width: 25vw;\n    height: 5vh;\n    font-size: 30px;\n    align-self: center;\n    border-radius: 5px;\n}\n\n#inputDescription {\n    height: 20vh;\n    border-radius: 5px;\n}\n\n.priority {\n    font-size: 25px;\n    text-align: center;\n}\n\n#btnPlace {\n    display: flex;\n    gap: 10px;\n}\n\n#createToDo {\n    width: 15vw;\n    height: 3vh;\n    border: 2px solid tomato;\n    text-align: center;\n    padding: 15px;\n    font-size: 25px;\n    margin-top: 50px;\n    margin-left: 20px;\n    transition: 0.1s;\n}\n\n#createToDo:hover {\n    background-color: lightgreen;\n}\n\n#cancelToDo {\n    width: 15vw;\n    height: 3vh;\n    border: 2px solid tomato;\n    text-align: center;\n    padding: 15px;\n    font-size: 25px;\n    margin-top: 50px;\n    margin-left: 40px;\n    transition: 0.1s;\n}\n\n#cancelToDo:hover {\n    background-color: tomato;\n}\n\n.toDoTask {\n    display: flex;\n    border-bottom: 1px solid gray;\n    height: 8vh;\n    gap: 10px;\n}\n\n.doneToDo {\n    height: 2em;\n    width: 2em;\n    align-self: center;\n    margin-left: 20px;\n    padding: 5px;\n}\n\n.toDoTaskTitle {\n    font-size: 30px;\n    align-self: center;\n}\n\n.toDoTaskPriority {\n    font-size: 30px;\n    align-self: center;\n    margin-left: auto;\n    margin-right: 50px;\n}\n\n#createProject {\n    font-size: 20px;\n    font-weight: 900;\n    margin-left: 25px;\n}\n\n#createProject:hover {\n    border: 1px solid black;\n    border-radius: 10px;\n    padding: 10px;\n    padding-left: 30px;\n    background-color: tomato;\n    opacity: 0.8;\n    margin-right: 20px;\n}\n\n#newProjectWindow {\n    width: 200px;\n    height: 100px;\n}\n\n#newProjectInput {\n    width: 15vw;\n    height: 5vh;\n    margin-left: 2vw;\n    font-size: 4vh;\n}\n\n#newProjectButtonPlace {\n    display: flex;\n    gap: 1vw;\n    margin-top: 15px;\n}\n\n#newProjectCreateButton {\n    border: 1px solid black;\n    border-radius: 10px;\n    text-align: center;\n    width: 8vw;\n    height: 3vh;\n    font-size: 20px;\n    margin-left: 10px;\n    padding: 5px;\n    background-color: lightgreen;\n}\n\n#newProjectCreateButton:hover {\n    background-color: greenyellow;\n    font-weight: 900;\n    border: 3px solid black;\n}\n\n#cancelNewProject {\n    border: 1px solid black;\n    border-radius: 10px;\n    text-align: center;\n    width: 8vw;\n    height: 3vh;\n    font-size: 20px;\n    margin-left: 10px;\n    padding: 5px;\n    background-color: lightpink;\n}\n\n#cancelNewProject:hover {\n    background-color: pink;\n    font-weight: 900;\n    border: 3px solid black;\n}",""]);const d=c},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(o)for(var d=0;d<this.length;d++){var a=this[d][0];null!=a&&(c[a]=!0)}for(var l=0;l<t.length;l++){var s=[].concat(t[l]);o&&c[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),i&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=i):s[4]="".concat(i)),e.push(s))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var r={},c=[],d=0;d<t.length;d++){var a=t[d],l=o.base?a[0]+o.base:a[0],s=r[l]||0,p="".concat(l," ").concat(s);r[l]=s+1;var u=n(p),m={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var h=i(m,o);o.byIndex=d,e.splice(d,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=o(t=t||[],i=i||{});return function(t){t=t||[];for(var c=0;c<r.length;c++){var d=n(r[c]);e[d].references--}for(var a=o(t,i),l=0;l<r.length;l++){var s=n(r[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}r=a}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t=function(){const t=document.getElementById("content"),e=document.createElement("div");e.setAttribute("id","projectSide");const n=document.createElement("div");n.setAttribute("id","toDoSide");const o=document.createElement("div");o.setAttribute("id","header");const i=()=>{const t=document.createElement("div");t.setAttribute("id","newToDo"),t.textContent="+",o.appendChild(t)};return{makeStuff:()=>{t.appendChild(o),(()=>{const t=document.createElement("h1");t.textContent="my To-do List",o.appendChild(t)})(),i(),t.appendChild(e),t.appendChild(n)},makeBtn:i}}();let e=[];const o=(t,e,n)=>({title:t,description:e,priority:n}),i=t=>{e.push(t)},r=o("Buy milk","need some stuff","High");i(r);const c=()=>{const t=document.getElementById("toDoSide");for(;t.firstChild;)t.removeChild(t.firstChild);for(let n=0;n<e.length;n++){const o=document.createElement("div");o.classList.add("toDoTask"),o.setAttribute("data-index-number",n);const i=document.createElement("input");i.setAttribute("type","radio"),i.classList.add("doneToDo"),i.setAttribute("data-index-number",n),o.appendChild(i);const r=document.createElement("div");r.classList.add("toDoTaskTitle"),r.textContent=e[n].title,o.appendChild(r);const c=document.createElement("div");c.classList.add("toDoTaskPriority"),c.textContent=e[n].priority,o.appendChild(c),t.appendChild(o)}d()},d=()=>{const t=document.querySelectorAll(".doneToDo");for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(t){setTimeout((function(){e.splice(t.target.dataset.indexNumber,1),c()}),300)}))};var a=n(379),l=n.n(a),s=n(795),p=n.n(s),u=n(569),m=n.n(u),h=n(565),g=n.n(h),f=n(216),v=n.n(f),x=n(589),b=n.n(x),y=n(426),w={};w.styleTagTransform=b(),w.setAttributes=g(),w.insert=m().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=v(),l()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals,t.makeStuff(),document.getElementById("newToDo").addEventListener("click",(function(){const t=document.getElementById("toDoSide"),e=document.createElement("div");e.setAttribute("id","popUpToDo");const n=document.createElement("input");n.setAttribute("id","inputTitle"),n.setAttribute("placeholder","Title"),e.appendChild(n);const r=document.createElement("textarea");r.setAttribute("id","inputDescription"),r.setAttribute("placeholder","Description of the task"),e.appendChild(r);const d=document.createElement("div");d.classList.add("priority"),d.textContent="Low priority";const a=document.createElement("input");a.setAttribute("type","radio"),a.setAttribute("name","choosePriority"),d.appendChild(a),e.appendChild(d);const l=document.createElement("div");l.classList.add("priority"),l.textContent="Medium priority";const s=document.createElement("input");s.setAttribute("type","radio"),s.setAttribute("name","choosePriority"),l.appendChild(s),e.appendChild(l);const p=document.createElement("div");p.classList.add("priority"),p.textContent="High priority";const u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","choosePriority"),p.appendChild(u),e.appendChild(p);const m=document.createElement("div");m.setAttribute("id","btnPlace");const h=document.createElement("div");h.setAttribute("id","createToDo"),h.textContent="Create new",h.onclick=function(){let t;a.checked?t="Low":s.checked?t="Medium":u.checked&&(t="High");const d=o(n.value,r.value,t);i(d),c(),e.remove(e)},m.appendChild(h);const g=document.createElement("div");g.setAttribute("id","cancelToDo"),g.textContent="Cancel",g.onclick=function(){e.remove(e)},m.appendChild(g),e.appendChild(m),t.appendChild(e)})),c();const C=(t=>{const e=document.getElementById("projectSide"),n=document.createElement("div");n.setAttribute("id","mainProjectList"),e.appendChild(n);const o=()=>{const t=document.getElementById("newProjectInput"),e=document.createElement("ul");e.classList.add("projectTitle"),e.textContent=t.value;const o=document.createElement("li");o.appendChild(e),n.appendChild(o)};return{mainProject:()=>{const t=document.createElement("ul");t.classList.add("projectTitle"),t.textContent="My tasks";const e=document.createElement("li");e.appendChild(t),n.appendChild(e)},projectBtn:()=>{const t=document.createElement("div");t.setAttribute("id","createProject"),t.textContent="+ Add Project",t.onclick=function(){(()=>{const t=document.createElement("li");t.setAttribute("id","newProjectWindow");const e=document.createElement("input");e.setAttribute("id","newProjectInput"),t.appendChild(e);const i=document.createElement("div");i.setAttribute("id","newProjectButtonPlace"),t.appendChild(i);const r=document.createElement("div");r.setAttribute("id","newProjectCreateButton"),r.textContent="Add",r.onclick=function(){o(),t.remove(t)},i.appendChild(r);const c=document.createElement("div");c.setAttribute("id","cancelNewProject"),c.textContent="Cancel",c.onclick=function(){t.remove(t)},i.appendChild(c),n.appendChild(t)})()};const e=document.createElement("li");e.appendChild(t),n.appendChild(e)}}})();C.projectBtn(),C.mainProject()})()})();