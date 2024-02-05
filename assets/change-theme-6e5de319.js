import{a as C,i as g}from"./vendor-0a7943b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const l=C.create({baseURL:"https://energyflow.b.goit.study/api/"}),c=document.querySelector(".render-btn-list-pagination"),j=(t,e,a)=>{let s="";if(t===1){c.innerHTML=` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let n=t<2?t:3;for(let o=0;o<n;o++){let r=e;o===0&&r--,o===1&&(r=e),o===2&&r++;let m=` <li>
        <button data-num="${o}"
          class="render-pagination-btn"
          type="button"
        >${r}</button></li>`;s+=m}c.innerHTML=s,c.children[1].children[0].classList.add("render-pagination-btn-active"),c.children[0].children[0].textContent==="0"?c.children[e-1].children[0].remove():parseInt(e)===t&&c.children[2].children[0].remove()};function K(t){t.hidden=!1,t.style.display="block"}function z(t){t.hidden=!0,t.style.display="none"}const i="/my-project-js-01/assets/symbol-defs-092448a0.svg",T=async t=>{try{return await l.get("filters",{params:t})}catch(e){console.log(e)}},B=async t=>{try{return await l.get("exercises",{params:t})}catch(e){console.log(e)}},M=async()=>{try{return await l.get("quote")}catch(t){console.log(t)}},D=async t=>{try{return await l.get(`exercises/${t}`)}catch(e){console.log(e)}},I=async(t,e)=>{try{return(await l.patch(`exercises/${t}/rating`,e)).status}catch(a){return a.response.status}},y={getFilters:T,getWorkout:B,getQuote:M,getCartById:D,getResultPatchRating:I},f=document.querySelector(".modal-rating-background"),k=document.querySelector(".modal-trane-background"),h=document.querySelector(".modal-rating-form"),O=document.querySelector(".modal-rating-btn-close"),A=document.querySelectorAll(".modal-rating-svg-star"),u=()=>{k.classList.add("modal-trane-background-active"),f.classList.remove("modal-rating-background-active"),A.forEach(t=>t.classList.remove("modal-rating-svg-star-gold")),h.reset()},S=t=>{t.key==="Escape"&&u(),removeEventListener("keydown",S)},R=t=>{t.target===t.currentTarget&&u()},_=()=>u(),G=t=>{k.classList.remove("modal-trane-background-active"),f.classList.add("modal-rating-background-active"),h.dataset.id=t.target.dataset.id,addEventListener("keydown",S),f.addEventListener("click",R)},F=async t=>{if(t.preventDefault(),t.target.radiostar.value&&t.target.email.value&&t.target.comment.value){const e={rate:parseInt(t.target.radiostar.value),email:t.target.email.value,review:t.target.comment.value},a=await y.getResultPatchRating(t.target.dataset.id,e);a===200?(g.success({position:"topCenter",message:"Thank you for appreciating the exercise"}),u(),t.target.reset()):a===409&&g.error({position:"topCenter",message:"You can rate this exercise only once"})}else g.error({position:"topCenter",message:"Please fill in all fields"})};O.addEventListener("click",_);h.addEventListener("submit",F);const N=t=>{const e=[`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`],a=`${i}#icon-star-gold`,s=parseFloat(t);return e.forEach((n,o)=>{o+1<=s&&(e[o]=a)}),e.reduce((n,o)=>n+` <li>
                <svg height="18" width="18">
                  <use href="${o}"></use>
                </svg>
              </li>`,"")},W=async t=>{const e=document.querySelector(".modal-trane-background"),a=JSON.parse(localStorage.getItem("favorites"))||[],{data:{gifUrl:s,name:n,rating:o,target:r,bodyPart:m,equipment:q,popularity:w,burnedCalories:L}}=await y.getCartById(t),x=a.includes(t)?"Remove&nbsp;to&nbsp;favorites&nbsp;":"Add&nbsp;to&nbsp;favorites&nbsp;",E=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="${i}#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${s}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">${n}</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${o}</p>
          <ul class="modal-trane-list-stars">${N(o)}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${r}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${m}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${q}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${w}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${L}</p>
        </li>
      </ul>
      <p class="modal-trane-text"></p>
      <ul class="modal-trane-list-btn">
        <li>
          <button class="modal-trane-btn-add-favorites" type="button">
            ${x} <svg height="24" width="24">
            <use href="${i}#icon-heart"></use> </svg>
          </button>
        </li>
        <li>
          <button class="modal-trane-btn-rating" type="button" data-id="${t}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;e.innerHTML=E},P=document.querySelector(".burger-menu-block"),J=document.querySelector(".button-burger"),Q=document.querySelector(".burger-menu__btn-close"),Y=document.body,$=()=>{P.classList.toggle("is-hidden"),Y.classList.toggle("no-scroll")};J.addEventListener("click",$);Q.addEventListener("click",$);const b=document.querySelector(".hero-third-container-text")||document.querySelector(".favorite-quote__text"),v=document.querySelector(".hero-third-container-author")||document.querySelector(".favorite-quote__autor"),p="key-quote",V=async()=>{if((await JSON.parse(localStorage.getItem(p))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const e=await y.getQuote(),a={author:e.data.author,quote:e.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(p,JSON.stringify(a)),b.textContent=a.quote,v.textContent=a.author}else{const e=JSON.parse(localStorage.getItem(p));b.textContent=e.quote,v.textContent=e.author}},H=document.querySelector(".change"),d=document.querySelector("#dynamicStyles");H.addEventListener("click",()=>{console.log(d.href),d.href==="http://localhost:5173/css/layout/favorite-section.css"?d.href="./css/layout/dark-theme.css":d.href="./css/layout/favorite-section.css"});export{l as a,j as b,y as c,W as g,z as h,i,V as n,G as o,K as s};
//# sourceMappingURL=change-theme-6e5de319.js.map
