var f=Object.defineProperty;var g=(r,e,n)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n;var o=(r,e,n)=>(g(r,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();class u{constructor(e="",n="",s=!1){this._id=e,this._item=n,this._checked=s}get id(){return this._id}set id(e){this._id=e}get item(){return this._item}set item(e){this._item=e}get checked(){return this._checked}set checked(e){this._checked=e}}const l=class{constructor(e=[]){this._list=e}get list(){return this._list}load(){const e=localStorage.getItem("myList");if(typeof e!="string")return;JSON.parse(e).forEach(s=>{const t=new u(s._id,s._item,s._checked);l.instance.addItem(t)})}save(){localStorage.setItem("myList",JSON.stringify(this._list))}clearList(){this._list=[],this.save()}addItem(e){this._list.push(e),this.save()}removeItem(e){this._list=this._list.filter(n=>n.id!==e),this.save()}};let d=l;o(d,"instance",new l);const m=class{constructor(){o(this,"ul");this.ul=document.getElementById("listItems")}clear(){this.ul.innerHTML=""}render(e){this.clear(),e.list.forEach(n=>{const s=document.createElement("li");s.className="item";const t=document.createElement("input");t.type="checkbox",t.id=n.id,t.tabIndex=0,t.checked=n.checked,s.append(t),t.addEventListener("change",()=>{n.checked=!n.checked,e.save()});const i=document.createElement("label");i.htmlFor=n.id,i.textContent=n.item,s.append(i);const c=document.createElement("button");c.className="button",c.textContent="X",s.append(c),c.addEventListener("click",()=>{e.removeItem(n.id),this.render(e)}),this.ul.append(s)})}};let a=m;o(a,"instance",new m);const y=()=>{const r=d.instance,e=a.instance;document.getElementById("itemEntryForm").addEventListener("submit",t=>{t.preventDefault();const i=document.getElementById("newItem"),c=i.value.trim();if(!c)return;const h=r.list.length?parseInt(r.list[r.list.length-1].id)+1:1,p=new u(h.toString(),c);i.value="",r.addItem(p),e.render(r)});const s=document.getElementById("clearItemsButton");s==null||s.addEventListener("click",()=>{r.clearList(),e.clear()}),r.load(),e.render(r)};document.addEventListener("DOMContentLoaded",y);
