import{c as C,b as F,a as I,i as g,h as T,s as D,g as _,o as H,n as z}from"./assets/change-theme-94ef65d7.js";import{i as f}from"./assets/vendor-0a7943b3.js";const v=async e=>{const t=a=>{const r=a;if(r==="Muscles")return r.toLowerCase();if(r==="Body parts")return"bodypart";if(r==="Equipment")return r.toLowerCase()},s={...e},n=await C.getFilters(s),c=n.data.results;return F(n.data.totalPages,e.page),c.reduce((a,r)=>a+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${r.name}">
            <img src="${r.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${r.name}</p>
              <p class="render-page-one-item-zones">${r.filter}</p>
            </div>
          </li>`,"")},j=document.querySelector(".render-page-one-list"),y=async e=>{const t=await e;j.innerHTML=t},E=document.querySelectorAll(".modal-rating-svg-star"),J=document.querySelector(".modal-rating-rating"),Y=e=>{if(e.target.nodeName==="INPUT"){J.textContent=`${e.target.value}.0`,E.forEach(t=>t.classList.remove("modal-rating-svg-star-gold"));for(let t=0;t<e.target.value;t++)E[t].classList.add("modal-rating-svg-star-gold")}},G=document.querySelector(".footer-input"),p=e=>{f.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},Q=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){p({message:"Email is required."});return}const s={email:t};if(G.checkValidity())try{const n=await I.post("subscription",s);console.log("Response:",n),n.status===201?p({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):p({message:"Subscription failed"})}catch(n){console.error("Error:",n),n.response&&n.response.status===409?p({message:"Email already exists. Please use a different email address."}):p({message:"An error occurred while processing your request."})}},q=e=>{if(e.muscles)return["muscles",e.muscles];if(e.bodypart)return["bodypart",e.bodypart];if(e.equipment)return["equipment",e.equipment]};function M(e,t){return e.map(({_id:s,bodyPart:n,name:c,target:o,rating:a,burnedCalories:r,time:U})=>`<li class="workout-card__item" data-filter="${q(t)[0]}" data-name="${q(t)[1]}" >
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${a.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="${g}#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="${g}#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>
			<button type="button" class="workout-card__link-start" data-id="${s}">
				Start
				<svg class="workout-card__link-icon" width="16" height="16" >
					<use class="icon-arrow" href="${g}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<h3 class="workout-card__title">
			<svg class="workout-card__title-icon">
				<use class="icon-icon" href="${g}#icon-icon"></use>
			</svg>
			${c[0].toUpperCase()+c.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${r} / ${U} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${n[0].toUpperCase()+n.slice(1)}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${o[0].toUpperCase()+o.slice(1)}
				</p>
			</li>
		</ul>

	</div>
</li>`).join("")}const V=document.querySelector(".render-page-one-list"),K=document.querySelector(".render-btn-list-pagination"),R=async(e,t)=>{try{const s=await C.getWorkout(e);V.innerHTML=M(s.data.results,e),s.data.totalPages===1&&T(K),F(s.data.totalPages,e.page,t)}catch(s){console.log(s)}},X=document.querySelector(".render-page-one-slesh"),L=document.querySelector(".render-page-one-title-part"),Z=e=>{e=e.split(""),e[0]=e[0].toUpperCase(),e=e.join(""),L.style.display="inline-block",X.style.display="inline-block",L.textContent=e},d=document.querySelector(".render-btn-list-pagination"),ee=document.querySelector(".render-page-one-list-btn"),te=document.querySelectorAll(".render-page-one-btn"),b=document.querySelector(".render-page-one-list"),O=document.querySelector(".form-search"),ne=document.querySelector(".render-page-one-slesh"),se=document.querySelector(".render-page-one-title-part");document.querySelectorAll(".render-pagination-btn");let $=0;b.addEventListener("click",w);const B=getComputedStyle(document.querySelector("body")).width,re=parseInt(B)<768?8:12,m={limit:re,page:1,filter:"Muscles"},oe=parseInt(B)<768?8:9,i={page:1,limit:oe},ae=e=>{e.target.nodeName==="BUTTON"&&(ne.style.display="none",se.style.display="none",d.style.display="flex",te.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),m.filter=e.target.textContent.trimStart().trimEnd(),m.page=1,y(v(m)),T(O),(i.muscles||i.bodypart||i.equipment)&&ie(i),i.page=1,d.removeEventListener("click",N),b.addEventListener("click",w),d.addEventListener("click",h))},h=e=>{m.page=parseInt(e.target.textContent),y(v(m))};d.addEventListener("click",h);ee.addEventListener("click",ae);function w(e){e.target.closest(".render-page-one-item")&&(Z(e.target.dataset.name),i[e.target.dataset.filter]=e.target.dataset.name,R(i),D(O),d.addEventListener("click",N),d.removeEventListener("click",h),b.removeEventListener("click",w))}function N(e){if(!e.target.closest(".render-pagination-btn"))return;i.page=e.target.textContent;const t=parseInt(e.target.dataset.num);$!==e.target.textContent&&R(i,t),$=e.target.textContent}function ie(e){delete e.muscles,delete e.bodypart,delete e.equipment}const k=document.querySelector(".modal-trane-background"),ce=document.querySelector(".render-page-one-list"),S=()=>{k.classList.remove("modal-trane-background-active"),document.removeEventListener("click",A),document.removeEventListener("keydown",P)},A=e=>{e.target===e.currentTarget&&S()},P=e=>{e.key==="Escape"&&S()},le=e=>{let t=JSON.parse(localStorage.getItem("favorites"))||[];t.includes(e)?(localStorage.setItem("favorites",JSON.stringify(t.splice(1,t.indexOf(e)))),f.error({title:"Error",message:"Delete in favorite",position:"topCenter"})):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),f.success({message:"Add favorite!",position:"topCenter"}))},de=async e=>{if(e.target.classList.contains("workout-card__link-start")){const t=e.target;_(t.dataset.id),await _(t.dataset.id);const s=document.querySelector(".modal-trane-btn-close"),n=document.querySelector(".modal-trane-btn-rating"),c=document.querySelector(".modal-trane-btn-add-favorites");k.classList.add("modal-trane-background-active"),k.addEventListener("click",A),addEventListener("keydown",P),s.addEventListener("click",S),n.addEventListener("click",H),c.addEventListener("click",()=>le(t.dataset.id))}};ce.addEventListener("click",de);const ue=document.querySelector(".render-page-one-list"),pe=document.querySelector(".render-btn-list-pagination"),me=()=>{const e=`<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;ue.innerHTML=e,pe.style.display="none"},ge=getComputedStyle(document.querySelector("body")).width,ye=parseInt(ge)<768?8:9,fe=document.querySelector(".form-search"),x=document.querySelector(".render-page-one-list"),l=document.querySelector(".render-btn-list-pagination"),ke=(e,t,s)=>{let n="";if(e===1){l.innerHTML=` <li>
        <button 
          class="render-pagination-btn-search render-pagination-btn-active"
          type="button"
        >1</button></li>`;return}let c=e<2?e:3;for(let o=0;o<c;o++){let a=t;o===0&&a--,o===1&&(a=t),o===2&&a++;let r=` <li>
        <button data-num="${o}"
          class="render-pagination-btn-search"
          type="button"
        >${a}</button></li>`;n+=r}l.innerHTML=n,l.children[1].children[0].classList.add("render-pagination-btn-active"),l.children[0].children[0].textContent==="0"?l.children[t-1].children[0].remove():parseInt(t)===e&&l.children[2].children[0].remove()},u={limit:ye,page:1},ve=async e=>await I.get("exercises",{params:e}),W=async()=>{l.style.display="flex";const e=await ve(u);if(!e.data.results.length){me();return}y(M(e.data.results,u)),ke(e.data.totalPages,u.page)},be=async e=>{e.preventDefault();const t=x.children[0].dataset.filter,s=x.children[0].dataset.name;u[t]=s,u.keyword=e.target.query.value,l.addEventListener("click",he),W()},he=e=>{u.page=parseInt(e.target.textContent),W()};fe.addEventListener("submit",be);const we=document.querySelector(".form"),Se=document.querySelector(".modal-rating-radio-list");z();y(v({page:1,filter:"Muscles"}));we.addEventListener("submit",Q);Se.addEventListener("click",Y);
//# sourceMappingURL=commonHelpers2.js.map
