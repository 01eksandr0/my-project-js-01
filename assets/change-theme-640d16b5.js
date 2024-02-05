import{a as A,i as g}from"./vendor-0a7943b3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const l=A.create({baseURL:"https://energyflow.b.goit.study/api/"}),i=document.querySelector(".render-btn-list-pagination"),ee=(e,t,n)=>{let s="";if(e===1){i.innerHTML=` <li>
        <button 
          class="render-pagination-btn render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let a=e<2?e:3;for(let o=0;o<a;o++){let r=t;o===0&&r--,o===1&&(r=t),o===2&&r++;let m=` <li>
        <button data-num="${o}"
          class="render-pagination-btn"
          type="button"
        >${r}</button></li>`;s+=m}i.innerHTML=s,i.children[1].children[0].classList.add("render-pagination-btn-active"),i.children[0].children[0].textContent==="0"?i.children[t-1].children[0].remove():parseInt(t)===e&&i.children[2].children[0].remove()};function te(e){e.hidden=!1,e.style.display="block"}function oe(e){e.hidden=!0,e.style.display="none"}const c="/my-project-js-01/assets/symbol-defs-092448a0.svg",C=async e=>{try{return await l.get("filters",{params:e})}catch(t){console.log(t)}},B=async e=>{try{return await l.get("exercises",{params:e})}catch(t){console.log(t)}},M=async()=>{try{return await l.get("quote")}catch(e){console.log(e)}},D=async e=>{try{return await l.get(`exercises/${e}`)}catch(t){console.log(t)}},O=async(e,t)=>{try{return(await l.patch(`exercises/${e}/rating`,t)).status}catch(n){return n.response.status}},f={getFilters:C,getWorkout:B,getQuote:M,getCartById:D,getResultPatchRating:O},h=document.querySelector(".modal-rating-background"),S=document.querySelector(".modal-trane-background"),y=document.querySelector(".modal-rating-form"),F=document.querySelector(".modal-rating-btn-close"),R=document.querySelectorAll(".modal-rating-svg-star"),d=()=>{S.classList.add("modal-trane-background-active"),h.classList.remove("modal-rating-background-active"),R.forEach(e=>e.classList.remove("modal-rating-svg-star-gold")),y.reset()},q=e=>{e.key==="Escape"&&d(),removeEventListener("keydown",q)},_=e=>{e.target===e.currentTarget&&d()},N=()=>d(),ae=e=>{S.classList.remove("modal-trane-background-active"),h.classList.add("modal-rating-background-active"),y.dataset.id=e.target.dataset.id,addEventListener("keydown",q),h.addEventListener("click",_)},P=async e=>{if(e.preventDefault(),e.target.radiostar.value&&e.target.email.value&&e.target.comment.value){const t={rate:parseInt(e.target.radiostar.value),email:e.target.email.value,review:e.target.comment.value},n=await f.getResultPatchRating(e.target.dataset.id,t);n===200?(g.success({position:"topCenter",message:"Thank you for appreciating the exercise"}),d(),e.target.reset()):n===409&&g.error({position:"topCenter",message:"You can rate this exercise only once"})}else g.error({position:"topCenter",message:"Please fill in all fields"})};F.addEventListener("click",N);y.addEventListener("submit",P);const j=e=>{const t=[`${c}#icon-star`,`${c}#icon-star`,`${c}#icon-star`,`${c}#icon-star`,`${c}#icon-star`],n=`${c}#icon-star-gold`,s=parseFloat(e);return t.forEach((a,o)=>{o+1<=s&&(t[o]=n)}),t.reduce((a,o)=>a+` <li>
                <svg height="18" width="18">
                  <use href="${o}"></use>
                </svg>
              </li>`,"")},ne=async e=>{const t=document.querySelector(".modal-trane-background"),n=JSON.parse(localStorage.getItem("favorites"))||[],{data:{gifUrl:s,name:a,rating:o,target:r,bodyPart:m,equipment:L,popularity:T,burnedCalories:x}}=await f.getCartById(e),E=n.includes(e)?"Remove&nbsp;to&nbsp;favorites&nbsp;":"Add&nbsp;to&nbsp;favorites&nbsp;",I=`<div class="modal-trane">
    <button class="modal-trane-btn-close" type="button">
      <svg height="28" width="28" style="stroke: black">
        <use href="${c}#icon-x"></use>
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
          <ul class="modal-trane-list-stars">${j(o)}</ul>
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
          <p class="modal-trane-information-text">${T}</p>
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
            <use href="${c}#icon-heart"></use> </svg>
          </button>
        </li>
        <li>
          <button class="modal-trane-btn-rating" type="button" data-id="${e}">
            Give a rating
          </button>
        </li>
      </ul>
    </div>
  </div>`;t.innerHTML=I},H=document.querySelector(".burger-menu-block"),J=document.querySelector(".button-burger"),Q=document.querySelector(".burger-menu__btn-close"),Y=document.body,$=()=>{H.classList.toggle("is-hidden"),Y.classList.toggle("no-scroll")};J.addEventListener("click",$);Q.addEventListener("click",$);const v=document.querySelector(".hero-third-container-text")||document.querySelector(".favorite-quote__text"),b=document.querySelector(".hero-third-container-author")||document.querySelector(".favorite-quote__autor"),p="key-quote",re=async()=>{if((await JSON.parse(localStorage.getItem(p))||[]).date!==`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`){const t=await f.getQuote(),n={author:t.data.author,quote:t.data.quote,date:`${new Date().getDate()}:${new Date().getMonth()+1}:${new Date().getFullYear()}`};localStorage.setItem(p,JSON.stringify(n)),v.textContent=n.quote,b.textContent=n.author}else{const t=JSON.parse(localStorage.getItem(p));v.textContent=t.quote,b.textContent=t.author}},u=document.querySelector(".change"),U=document.querySelector(".page-link")||document.querySelector(".change"),k=document.querySelector(".collection-img");function K(){const e=document.getElementById("dynamicStyles");e?e.remove():w(),z()}function z(){u.checked?localStorage.setItem("darkThemeActivated","true"):localStorage.removeItem("darkThemeActivated")}async function w(){const e=await`<link rel="stylesheet" href="./css/layout/dark-theme.css" id='dynamicStyles'>`;document.querySelector("head").insertAdjacentHTML("afterend",e)}function G(){localStorage.getItem("darkThemeActivated")==="true"&&w()}function W(){const e=localStorage.getItem("darkThemeActivated");u.checked=e==="true"}function V(){localStorage.setItem("darkThemeActivated",u.checked.toString())}window.onload=function(){G(),W()};u.addEventListener("change",function(){V(),K()});function X(){localStorage.getItem("darkThemeActivated")?k.srcset="./img/favorite-hero/favorite-hero-img.jpg":k.srcset="./img/black-theme-img/favorite-img-desktop.jpg"}U.addEventListener("click",X);export{l as a,ee as b,f as c,ne as g,oe as h,c as i,re as n,ae as o,te as s};
//# sourceMappingURL=change-theme-640d16b5.js.map
