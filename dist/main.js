(()=>{"use strict";class e{constructor(e,t,n,o,l,c){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.project=l,this.complete=c}}let t=["Default project"],n=[];function o(e){e.forEach((e=>{if(null===document.getElementById(e)){const t=document.getElementById("content"),n=document.createElement("div"),o=document.createElement("ul"),l=document.createElement("h2");l.innerHTML=e,o.id=e,o.appendChild(l),n.appendChild(o),t.appendChild(n)}}))}function l(e){let t=document.getElementById("project");t.innerHTML="",e.forEach((e=>{let n=document.createElement("option");n.textContent=e,n.value=e,t.appendChild(n)}))}window.onload=e=>{localStorage.getItem("projects")&&(t=JSON.parse(localStorage.getItem("projects")),o(t))},o(t),document.getElementById("newProject").addEventListener("click",(()=>{let e=prompt("Title:");t.push(e),console.log(t),localStorage.setItem("projects",JSON.stringify(t)),console.log(JSON.parse(localStorage.getItem("projects"))),o(t),l(t)})),document.getElementById("submit").addEventListener("click",(t=>{t.preventDefault();const o=new e;o.project=document.getElementById("project").value,o.title=document.getElementById("title").value,o.description=document.getElementById("description").value,o.dueDate=document.getElementById("dueDate").value,o.priority=document.getElementById("priority").value,o.complete=!1,function(e,t){if(null===document.getElementById(e)){const o=document.getElementById(t).appendChild(document.createElement("li")),l=document.createElement("input");l.type="checkbox",l.id=e,l.name=e,o.appendChild(l);let c=document.createElement("p");c.innerHTML=e,o.appendChild(c);let d=document.createElement("button");d.classList.add("more"),d.textContent="more",o.appendChild(d),console.log(o.innerText),d.addEventListener("click",(()=>{n.forEach((e=>{console.log(e.title),c.textContent===e.title&&function(e){const t=document.getElementById("content"),n=document.createElement("div");n.appendChild(document.createElement("p")).textContent=`Title: ${e.title} \n Description: ${e.description} \n Due: ${e.dueDate} \n Priority: ${e.priority}`,n.id="popup",t.appendChild(n);const o=n.appendChild(document.createElement("button"));o.textContent="close popup",o.addEventListener("click",(()=>{n.remove()}))}(e)}))}));let i=document.createElement("button");i.classList.add("dlt"),i.textContent="X",o.appendChild(i),i.addEventListener("click",(()=>{for(let e=0;e<n.length;e++)n[e].title+"X"===i.parentElement.textContent&&n.splice(e,1);i.parentElement.remove()})),l.addEventListener("change",(()=>{for(let t=0;t<n.length;t++)n[t].title===e&&(l.checked&&(n[t].complete=!0,console.log(n),c.style.textDecoration="line-through"),!1===l.checked&&(n[t].complete=!1,console.log(n),c.style.textDecoration="none"))}))}}(o.title,o.project),n.push(o),console.log(localStorage),console.log(o),console.log(n),document.getElementById("form").reset()})),document.getElementById("clear").addEventListener("click",(()=>{for(let e=n.length-1;e>=0;e--)!0===n[e].complete&&(document.getElementById(n[e].title).parentElement.remove(),n.splice(e,1))})),document.getElementById("delete").addEventListener("click",(()=>{let e=prompt("which project do you want to delete?");for(let n=0;n<t.length;n++)t[n]===e&&(document.getElementById(t[n]).parentElement.remove(),t.splice(n,1));localStorage.setItem("projects",JSON.stringify(t)),l(t)})),l(t)})();