import{h as _,b as E,a as I,i as l,g as k,o as $,n as M}from"./assets/change-theme-63ee3484.js";import{i as p}from"./assets/vendor-0a7943b3.js";const P="/my-project-js-01/assets/favorite-dumbbell-325968d2.png",n=document.querySelector(".favorites-exercise-container"),g=document.querySelector(".render-btn-list-pagination"),f="favorites";let s=null;const T=getComputedStyle(document.querySelector("body")).width,q=parseInt(T)<768?8:9;let y=1;const d=8,w=async t=>{try{return(await I.get(`/exercises/${t}`)).data}catch(e){console.log(e)}},O=()=>{try{s=JSON.parse(localStorage.getItem(f))}catch(t){console.log(t)}return s},C=()=>{n.innerHTML="";const t=`<div class="favorites-exercise-not-found-container">
        <img
          class="favorites-exercise-img"
          src="${P}"
          alt="dumbbell"
        />
        <h3 class="favorites-exercise-not-found">
          It appears that you haven't added any exercises to your favorites yet.
          To get started, you can add exercises that you like to your favorites
          for easier access in the future.
        </h3>
      </div>`;n.insertAdjacentHTML("beforeend",t),_(g)},h=t=>{n.innerHTML="";const e=t.reduce((a,{_id:o,bodyPart:c,name:r,target:i,burnedCalories:L,time:x})=>a+`
        <li class="workout-card__item">
          <div class="workout-card__block">
            <div class="workout-card__block-top">
              <div class="workout-card__block_button-rating">
                <p class="workout-card__text-workout">
                  Workout
                </p>
                <div class="workout-card__rating-block">
                   <svg class="workout-card__basket-icon ${o}" width="24" height="24">
                    <use
                      class="icon-basket ${o}"
                      href="${l}#icon-trash"
                    ></use></svg>
                </div>
              </div>

              <button class="workout-card__link-start" data-id="${o}">
                Start
                <svg class="workout-card__link-icon" width="16" height='16'>
                  <use
                    class="icon-arrow"
                    href="${l}#icon-arrow"
                  ></use>
                </svg>
              </button>
            </div>

            <h3 class="workout-card__title">
              <svg class="workout-card__title-icon"  width="24" height="24">
                <use
                  class="icon-icon"
                  href="${l}#icon-icon"
                ></use>
              </svg>
              ${r[0].toUpperCase()+r.slice(1)}
            </h3>

            <ul class="workout-card__statistic_list">
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Burned calories:</span>
                  ${L} / ${x} min
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Body part:</span>
                  ${c}
                </p>
              </li>
              <li class="workout-card__statistic_item">
                <p class="workout-card__statistic_text">
                  <span class="secondary-color-text">Target:</span> ${i}
                </p>
              </li>
            </ul>
          </div>
        </li>`,"");n.insertAdjacentHTML("beforeend",e)};async function m(){if(O(),s!==null&&q===8&&s.length>8)N(y);else if(s!==null&&s.length!==0){const t=await Promise.all(s.map(e=>w(e)));h(t),_(g)}else C()}m();const F=t=>{t.preventDefault();const e=t.target;if(t.target.closest(".icon-basket ")){const o=e.classList[1],c=s.filter(r=>r!==o);localStorage.setItem(f,JSON.stringify(c)),m()}};n.addEventListener("click",F);async function N(t){const e=Math.ceil(s.length/d);E(e,t);const a=(t-1)*d,o=a+d,c=s.slice(a,o),r=await Promise.all(c.map(i=>w(i)));h(r)}g.addEventListener("click",t=>{y=Number(t.target.innerHTML),m()});const u=document.querySelector(".modal-trane-background"),D=document.querySelector(".favorites-exercise-container"),v=()=>{u.classList.remove("modal-trane-background-active"),document.removeEventListener("click",b),document.removeEventListener("keydown",S)},b=t=>{t.target===t.currentTarget&&v()},S=t=>{t.key==="Escape"&&v()},H=t=>{let e=JSON.parse(localStorage.getItem("favorites"))||[];e.includes(t)?(localStorage.setItem("favorites",JSON.stringify(e.splice(1,e.indexOf(t)))),p.error({title:"Error",message:"Delete in favorite",position:"topCenter"})):(e.push(t),localStorage.setItem("favorites",JSON.stringify(e)),p.success({message:"Add favorite!",position:"topCenter"}))},J=async t=>{if(t.target.classList.contains("workout-card__link-start")){const e=t.target;k(e.dataset.id),await k(e.dataset.id);const a=document.querySelector(".modal-trane-btn-close"),o=document.querySelector(".modal-trane-btn-rating"),c=document.querySelector(".modal-trane-btn-add-favorites");u.classList.add("modal-trane-background-active"),u.addEventListener("click",b),addEventListener("keydown",S),a.addEventListener("click",v),o.addEventListener("click",$),c.addEventListener("click",()=>H(e.dataset.id))}};D.addEventListener("click",J);M();
//# sourceMappingURL=commonHelpers.js.map
