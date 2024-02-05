import{a as x,i as m}from"./vendor-0a7943b3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const l=x.create({baseURL:"https://energyflow.b.goit.study/api/"}),c=document.querySelector(".render-btn-list-pagination"),j=(t,e,a)=>{let s="";if(t===1){c.innerHTML=` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let o=t<2?t:3;for(let n=0;n<o;n++){let r=e;n===0&&r--,n===1&&(r=e),n===2&&r++;let u=` <li>
        <button data-num="${n}"
          class="render-pagination-btn"
          type="button"
        >${r}</button></li>`;s+=u}c.innerHTML=s,c.children[1].children[0].classList.add("render-pagination-btn-active"),c.children[0].children[0].textContent==="0"?c.children[e-1].children[0].remove():parseInt(e)===t&&c.children[2].children[0].remove()};function K(t){t.hidden=!1,t.style.display="block"}function z(t){t.hidden=!0,t.style.display="none"}const i="/my-project-js-01/assets/symbol-defs-092448a0.svg",C=async t=>{try{return await l.get("filters",{params:t})}catch(e){console.log(e)}},T=async t=>{try{return await l.get("exercises",{params:t})}catch(e){console.log(e)}},B=async()=>{try{return await l.get("quote")}catch(t){console.log(t)}},M=async t=>{try{return await l.get(`exercises/${t}`)}catch(e){console.log(e)}},I=async(t,e)=>{try{return(await l.patch(`exercises/${t}/rating`,e)).status}catch(a){return a.response.status}},f={getFilters:C,getWorkout:T,getQuote:B,getCartById:M,getResultPatchRating:I},p=document.querySelector(".modal-rating-background"),v=document.querySelector(".modal-trane-background"),h=document.querySelector(".modal-rating-form"),D=document.querySelector(".modal-rating-btn-close"),O=document.querySelectorAll(".modal-rating-svg-star"),d=()=>{v.classList.add("modal-trane-background-active"),p.classList.remove("modal-rating-background-active"),O.forEach(t=>t.classList.remove("modal-rating-svg-star-gold")),h.reset()},k=t=>{t.key==="Escape"&&d(),removeEventListener("keydown",k)},A=t=>{t.target===t.currentTarget&&d()},R=()=>d(),G=t=>{v.classList.remove("modal-trane-background-active"),p.classList.add("modal-rating-background-active"),h.dataset.id=t.target.dataset.id,addEventListener("keydown",k),p.addEventListener("click",A)},_=async t=>{if(t.preventDefault(),t.target.radiostar.value&&t.target.email.value&&t.target.comment.value){const e={rate:parseInt(t.target.radiostar.value),email:t.target.email.value,review:t.target.comment.value},a=await f.getResultPatchRating(t.target.dataset.id,e);a===200?(m.success({position:"topCenter",message:"Thank you for appreciating the exercise"}),d(),t.target.reset()):a===409&&m.error({position:"topCenter",message:"You can rate this exercise only once"})}else m.error({position:"topCenter",message:"Please fill in all fields"})};D.addEventListener("click",R);h.addEventListener("submit",_);const F=t=>{const e=[`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`,`${i}#icon-star`],a=`${i}#icon-star-gold`,s=parseFloat(t);return e.forEach((o,n)=>{n+1<=s&&(e[n]=a)}),e.reduce((o,n)=>o+` <li>
                <svg height="18" width="18">
                  <use href="${n}"></use>
                </svg>
              </li>`,"")},W=async t=>{const e=document.querySelector(".modal-trane-background"),a=JSON.parse(localStorage.getItem("favorites"))||[],{data:{gifUrl:s,name:o,rating:n,target:r,bodyPart:u,equipment:q,popularity:S,burnedCalories:w}}=await f.getCartById(t),L=a.includes(t)?"Remove&nbsp;to&nbsp;favorites&nbsp;":"Add&nbsp;to&nbsp;favorites&nbsp;",E=`<div class="modal-trane">
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
        <h2 class="modal-trane-title">${o}</h2>
        <div class="modal-trane-rating-star">
          <p class="modal-trane-ratind">${n}</p>
          <ul class="modal-trane-list-stars">${F(n)}</ul>
        </div>
      </div>
      <ul class="modal-trane-list-information">
        <li>
          <p class="modal-trane-title-information">Target</p>
          <p class="modal-trane-information-text">${r}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Body Part</p>
          <p class="modal-trane-information-text">${u}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Equipment</p>
          <p class="modal-trane-information-text">${q}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Popular</p>
          <p class="modal-trane-information-text">${S}</p>
        </li>
        <li>
          <p class="modal-trane-title-information">Burned calories</p>
          <p class="modal-trane-information-text">${w}</p>
        </li>
      </ul>
      <p class="modal-trane-text"></p>
      <ul class="modal-trane-list-btn">
        <li>
          <button class="modal-trane-btn-add-favorites" type="button">
            ${L} <svg height="24" width="24">
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
  </div>`;e.innerHTML=E},N=document.querySelector(".burger-menu-block"),P=document.querySelector(".button-burger"),J=document.querySelector(".burger-menu__btn-close"),Q=document.body,$=()=>{N.classList.toggle("is-hidden"),Q.classList.toggle("no-scroll")};P.addEventListener("click",$);J.addEventListener("click",$);const y=document.querySelector(".hero-third-container-text")||document.querySelector(".favorite-quote__text"),b=document.querySelector(".hero-third-container-author")||document.querySelector(".favorite-quote__autor"),g="key-quote",V=async()=>{if((await JSON.parse(localStorage.getItem(g))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const e=await f.getQuote(),a={author:e.data.author,quote:e.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(g,JSON.stringify(a)),y.textContent=a.quote,b.textContent=a.author}else{const e=JSON.parse(localStorage.getItem(g));y.textContent=e.quote,b.textContent=e.author}},Y=document.querySelector(".change"),H=()=>{const t=document.getElementById("change");t.href="./css/layout/dark-theme.css"};Y.addEventListener("click",H);export{l as a,j as b,f as c,W as g,z as h,i,V as n,G as o,K as s};
//# sourceMappingURL=change-theme-3f25c1ab.js.map
