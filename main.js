(()=>{"use strict";class e{constructor(e,t,n,l,o,c){this.title=e,this.description=t,this.dueDate=n,this.priority=l,this.project=o,this.complete=c}}let t=["Default project"],n=[];function l(e){e.forEach((e=>{if(null===document.getElementById(e)){const t=document.getElementById("content"),n=document.createElement("div"),l=document.createElement("ul"),o=document.createElement("h2");o.innerHTML=e,l.id=e,l.appendChild(o),n.appendChild(l),t.appendChild(n)}}))}function o(e){let t=document.getElementById("project");t.innerHTML="",e.forEach((e=>{let n=document.createElement("option");n.textContent=e,n.value=e,t.appendChild(n)}))}l(t),document.getElementById("newProject").addEventListener("click",(()=>{let e=prompt("Title:");t.push(e),console.log(t),l(t),o(t)})),document.getElementById("submit").addEventListener("click",(t=>{t.preventDefault();const l=new e;l.project=document.getElementById("project").value,l.title=document.getElementById("title").value,l.description=document.getElementById("description").value,l.dueDate=document.getElementById("dueDate").value,l.priority=document.getElementById("priority").value,l.complete=!1,function(e,t){if(null===document.getElementById(e)){const l=document.getElementById(t).appendChild(document.createElement("li")),o=document.createElement("input");o.type="checkbox",o.id=e,o.name=e,l.appendChild(o);let c=document.createTextNode(e);l.appendChild(c);let d=document.createElement("button");d.classList.add("more"),d.textContent="more",l.appendChild(d),console.log(l.innerText),d.addEventListener("click",(()=>{n.forEach((e=>{console.log(e.title),l.textContent===e.title+"moreX"&&alert(`Title: ${e.title} \n Description: ${e.description} \n Due: ${e.dueDate} \n Priority: ${e.priority}`)}))}));let i=document.createElement("button");i.classList.add("dlt"),i.textContent="X",l.appendChild(i),i.addEventListener("click",(()=>{for(let e=0;e<n.length;e++)n[e].title+"X"===i.parentElement.textContent&&n.splice(e,1);i.parentElement.remove()})),o.addEventListener("change",(()=>{for(let t=0;t<n.length;t++)n[t].title===e&&(o.checked&&(n[t].complete=!0,console.log(n),l.style.textDecoration="line-through"),!1===o.checked&&(n[t].complete=!1,console.log(n),l.style.textDecoration="none"))}))}}(l.title,l.project),n.push(l),console.log(l),console.log(n),document.getElementById("form").reset()})),document.getElementById("clear").addEventListener("click",(()=>{for(let e=n.length-1;e>=0;e--)!0===n[e].complete&&(document.getElementById(n[e].title).parentElement.remove(),n.splice(e,1))})),document.getElementById("delete").addEventListener("click",(()=>{let e=prompt("which project do you want to delete?");for(let n=0;n<t.length;n++)t[n]===e&&(document.getElementById(t[n]).parentElement.remove(),t.splice(n,1))})),o(t)})();