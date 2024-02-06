import{a as I,i as g}from"./vendor-0a7943b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const c=I.create({baseURL:"https://energyflow.b.goit.study/api/"}),l=document.querySelector(".render-btn-list-pagination"),K=(t,e,n)=>{let s="";if(t===1){l.innerHTML=` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let a=t<2?t:3;for(let o=0;o<a;o++){let r=e;o===0&&r--,o===1&&(r=e),o===2&&r++;let m=` <li>
        <button data-num="${o}"
          class="render-pagination-btn"
          type="button"
        >${r}</button></li>`;s+=m}l.innerHTML=s,l.children[1].children[0].classList.add("render-pagination-btn-active"),l.children[0].children[0].textContent==="0"?l.children[e-1].children[0].remove():parseInt(e)===t&&l.children[2].children[0].remove()};function z(t){t.hidden=!1,t.style.display="block"}function G(t){t.hidden=!0,t.style.display="none"}const i="/my-project-js-01/assets/symbol-defs-092448a0.svg",T=async t=>{try{return await c.get("filters",{params:t})}catch(e){console.log(e)}},M=async t=>{try{return await c.get("exercises",{params:t})}catch(e){console.log(e)}},B=async()=>{try{return await c.get("quote")}catch(t){console.log(t)}},D=async t=>{try{return await c.get(`exercises/${t}`)}catch(e){console.log(e)}},O=async(t,e)=>{try{return(await c.patch(`exercises/${t}/rating`,e)).status}catch(n){return n.response.status}},h={getFilters:T,getWorkout:M,getQuote:B,getCartById:D,getResultPatchRating:O},f=document.querySelector(".modal-rating-background"),k=document.querySelector(".modal-trane-background"),y=document.querySelector(".modal-rating-form"),A=document.querySelector(".modal-rating-btn-close"),N=document.querySelectorAll(".modal-rating-svg-star"),u=()=>{k.classList.add("modal-trane-background-active"),f.classList.remove("modal-rating-background-active"),N.forEach(t=>t.classList.remove("modal-rating-svg-star-gold")),y.reset()},S=t=>{t.key==="Escape"&&u(),removeEventListener("keydown",S)},R=t=>{t.target===t.currentTarget&&u()},_=()=>u(),W=t=>{k.classList.remove("modal-trane-background-active"),f.classList.add("modal-rating-background-active"),y.dataset.id=t.target.dataset.id,addEventListener("keydown",S),f.addEventListener("click",R)},F=async t=>{if(t.preventDefault(),t.target.radiostar.value&&t.target.email.value&&t.target.comment.value){const e={rate:parseInt(t.target.radiostar.value),email:t.target.email.value,review:t.target.comment.value},n=await h.getResultPatchRating(t.target.dataset.id,e);n===200?(g.success({position:"topCenter",message:"Thank you for appreciating the exercise"}),u(),t.target.reset()):n===409&&g.error({position:"topCenter",message:"You can rate this exercise only once"})}else g.error({position:"topCenter",message:"Please fill in all fields"})};A.addEventListener("click",_);y.addEventListener("submit",F);const P=t=>{const e=[`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`],n=`${i}#icon-star-gold`,s=parseFloat(t);return e.forEach((a,o)=>{o+1<=s&&(e[o]=n)}),e.reduce((a,o)=>a+` <li>
                <svg height="18" width="18">
                  <use href="${o}"></use>
                </svg>
              </li>`,"")},V=async t=>{const e=document.querySelector(".modal-trane-background"),n=JSON.parse(localStorage.getItem("favorites"))||[],{data:{gifUrl:s,name:a,rating:o,target:r,bodyPart:m,equipment:L,popularity:w,burnedCalories:x}}=await h.getCartById(t),E=n.includes(t)?"Remove&nbsp;to&nbsp;favorites&nbsp;":"Add&nbsp;to&nbsp;favorites&nbsp;",C=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" >
        <use href="${i}#icon-x"></use>
      </svg>
    </button>
    <div class="modal-trane-img-container">
      <img src="${s}" alt="" />
    </div>
    <div>
      <div class="modal-trane-name-rating">
        <h2 class="modal-trane-title">${a}</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${o}</p>
          <ul class="modal-trane-list-stars">${P(o)}</ul>
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
          <p class="modal-trane-information-text">${L}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${w}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${x}</p>
        </li>
      </ul>
      <p class="modal-trane-text"></p>
      <ul class="modal-trane-list-btn">
        <li>
          <button class="modal-trane-btn-add-favorites" type="button">
            ${E} <svg height="24" width="24">
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
  </div>`;e.innerHTML=C},J=document.querySelector(".burger-menu-block"),Q=document.querySelector(".button-burger"),Y=document.querySelector(".burger-menu__btn-close"),H=document.body,$=()=>{J.classList.toggle("is-hidden"),H.classList.toggle("no-scroll")};Q.addEventListener("click",$);Y.addEventListener("click",$);const b=document.querySelector(".hero-third-container-text")||document.querySelector(".favorite-quote__text"),v=document.querySelector(".hero-third-container-author")||document.querySelector(".favorite-quote__autor"),p="key-quote",X=async()=>{if((await JSON.parse(localStorage.getItem(p))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const e=await h.getQuote(),n={author:e.data.author,quote:e.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(p,JSON.stringify(n)),b.textContent=n.quote,v.textContent=n.author}else{const e=JSON.parse(localStorage.getItem(p));b.textContent=e.quote,v.textContent=e.author}},d=document.body,q=parseInt(getComputedStyle(d).width)>768?document.querySelector(".change"):document.querySelector(".change-modal"),U=()=>{JSON.parse(localStorage.getItem("theme"))&&(d.classList.toggle("dark-mode"),q.checked=!0)};U();q.addEventListener("click",()=>{d.classList.toggle("dark-mode"),d.classList.contains("dark-mode")?localStorage.setItem("theme",!0):localStorage.setItem("theme",!1)});export{c as a,K as b,h as c,V as g,G as h,i,X as n,W as o,z as s};
//# sourceMappingURL=change-theme-94ef65d7.js.map
