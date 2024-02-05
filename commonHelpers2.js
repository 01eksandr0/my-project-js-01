import{c as C,b as F,a as I,i as p,h as T,s as D,g as _,o as z,n as H}from"./assets/change-theme-3f25c1ab.js";import{i as f}from"./assets/vendor-0a7943b3.js";const v=async e=>{const t=l=>{const n=l;if(n==="Muscles")return n.toLowerCase();if(n==="Body parts")return"bodypart";if(n==="Equipment")return n.toLowerCase()},s={...e},r=await C.getFilters(s),o=r.data.results;return F(r.data.totalPages,e.page),o.reduce((l,n)=>l+` <li class="render-page-one-item" data-filter="${t(e.filter)}" data-name="${n.name}">
            <img src="${n.imgUrl}" alt="" />
            <div class="render-page-one-img-container">
              <p class="render-page-one-item-title">${n.name}</p>
              <p class="render-page-one-item-zones">${n.filter}</p>
            </div>
          </li>`,"")},j=document.querySelector(".render-page-one-list"),g=async e=>{const t=await e;j.innerHTML=t},E=document.querySelectorAll(".modal-rating-svg-star"),J=document.querySelector(".modal-rating-rating"),Y=e=>{if(e.target.nodeName==="INPUT"){J.textContent=`${e.target.value}.0`,E.forEach(t=>t.classList.remove("modal-rating-svg-star-gold"));for(let t=0;t<e.target.value;t++)E[t].classList.add("modal-rating-svg-star-gold")}},G=document.querySelector(".footer-input"),d=e=>{f.show({position:"topRight",messageColor:"#FFFFFF",backgroundColor:"#EF4040",titleSize:"8px",closeOnEscape:!0,...e})},Q=async e=>{e.preventDefault();const t=e.target.email.value;if(!t.trim()){d({message:"Email is required."});return}const s={email:t};if(G.checkValidity())try{const r=await I.post("subscription",s);console.log("Response:",r),r.status===201?d({backgroundColor:"#7e847f",message:"We are excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You have just taken a significant step towards improving your fitness and well-being."}):d({message:"Subscription failed"})}catch(r){console.error("Error:",r),r.response&&r.response.status===409?d({message:"Email already exists. Please use a different email address."}):d({message:"An error occurred while processing your request."})}},q=e=>{if(e.muscles)return["muscles",e.muscles];if(e.bodypart)return["bodypart",e.bodypart];if(e.equipment)return["equipment",e.equipment]};function M(e,t){return e.map(({_id:s,bodyPart:r,name:o,target:y,rating:l,burnedCalories:n,time:U})=>`<li class="workout-card__item" data-filter="${q(t)[0]}" data-name="${q(t)[1]}" >
	<div class="workout-card__block">
		<div class="workout-card__block-top">
			<div class="workout-card__block_button-rating">
				<p class="workout-card__text-workout">Workout</p>
				<!-- <div class="workout-card__rating-block"> -->
				<p class="workout-card__rating-text"> ${l.toFixed(1)} </p>
				<svg class="workout-card__rating-icon">
					<use class="icon-star" href="${p}#icon-star-gold"></use>
				</svg>
				<svg class="workout-card__basket-icon" style="display: none">
					<use class="icon-basket" href="${p}#icon-trash"></use>
				</svg>
				<!-- </div> -->
			</div>
			<button type="button" class="workout-card__link-start" data-id="${s}">
				Start
				<svg class="workout-card__link-icon" width="16" height="16" style="stroke: #000; fill:#000">
					<use class="icon-arrow" href="${p}#icon-arrow"></use>
				</svg>
			</button>
		</div>

		<h3 class="workout-card__title">
			<svg class="workout-card__title-icon">
				<use class="icon-icon" href="${p}#icon-icon"></use>
			</svg>
			${o[0].toUpperCase()+o.slice(1)}
		</h3>

		<ul class="workout-card__statistic_list">
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Burned calories:</span> ${n} / ${U} min
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Body part:</span> ${r[0].toUpperCase()+r.slice(1)}
				</p>
			</li>
			<li class="workout-card__statistic_item">
				<p class="workout-card__statistic_text">
					<span class="secondary-color-text">Target:</span> ${y[0].toUpperCase()+y.slice(1)}
				</p>
			</li>
		</ul>

	</div>
</li>`).join("")}const V=document.querySelector(".render-page-one-list"),K=document.querySelector(".render-btn-list-pagination"),R=async(e,t)=>{try{const s=await C.getWorkout(e);V.innerHTML=M(s.data.results,e),s.data.totalPages===1&&T(K),F(s.data.totalPages,e.page,t)}catch(s){console.log(s)}},X=document.querySelector(".render-page-one-slesh"),L=document.querySelector(".render-page-one-title-part"),Z=e=>{e=e.split(""),e[0]=e[0].toUpperCase(),e=e.join(""),L.style.display="inline-block",X.style.display="inline-block",L.textContent=e},i=document.querySelector(".render-btn-list-pagination"),ee=document.querySelector(".render-page-one-list-btn"),te=document.querySelectorAll(".render-page-one-btn"),b=document.querySelector(".render-page-one-list"),O=document.querySelector(".form-search"),se=document.querySelector(".render-page-one-slesh"),re=document.querySelector(".render-page-one-title-part");document.querySelectorAll(".render-pagination-btn");let $=0;b.addEventListener("click",w);const P=getComputedStyle(document.querySelector("body")).width,ne=parseInt(P)<768?8:12,u={limit:ne,page:1,filter:"Muscles"},ae=parseInt(P)<768?8:9,a={page:1,limit:ae},oe=e=>{e.target.nodeName==="BUTTON"&&(se.style.display="none",re.style.display="none",i.style.display="flex",te.forEach(t=>t.classList.remove("render-page-one-btn-active")),e.target.classList.add("render-page-one-btn-active"),u.filter=e.target.textContent.trimStart().trimEnd(),u.page=1,g(v(u)),T(O),(a.muscles||a.bodypart||a.equipment)&&ie(a),a.page=1,i.removeEventListener("click",B),b.addEventListener("click",w),i.addEventListener("click",h))},h=e=>{u.page=parseInt(e.target.textContent),g(v(u))};i.addEventListener("click",h);ee.addEventListener("click",oe);function w(e){e.target.closest(".render-page-one-item")&&(Z(e.target.dataset.name),a[e.target.dataset.filter]=e.target.dataset.name,R(a),D(O),i.addEventListener("click",B),i.removeEventListener("click",h),b.removeEventListener("click",w))}function B(e){if(!e.target.closest(".render-pagination-btn"))return;a.page=e.target.textContent;const t=parseInt(e.target.dataset.num);$!==e.target.textContent&&R(a,t),$=e.target.textContent}function ie(e){delete e.muscles,delete e.bodypart,delete e.equipment}const k=document.querySelector(".modal-trane-background"),ce=document.querySelector(".render-page-one-list"),S=()=>{k.classList.remove("modal-trane-background-active"),document.removeEventListener("click",N),document.removeEventListener("keydown",A)},N=e=>{e.target===e.currentTarget&&S()},A=e=>{e.key==="Escape"&&S()},le=e=>{let t=JSON.parse(localStorage.getItem("favorites"))||[];t.includes(e)?(localStorage.setItem("favorites",JSON.stringify(t.splice(1,t.indexOf(e)))),f.error({title:"Error",message:"Delete in favorite",position:"topCenter"})):(t.push(e),localStorage.setItem("favorites",JSON.stringify(t)),f.success({message:"Add favorite!",position:"topCenter"}))},de=async e=>{if(e.target.classList.contains("workout-card__link-start")){const t=e.target;_(t.dataset.id),await _(t.dataset.id);const s=document.querySelector(".modal-trane-btn-close"),r=document.querySelector(".modal-trane-btn-rating"),o=document.querySelector(".modal-trane-btn-add-favorites");k.classList.add("modal-trane-background-active"),k.addEventListener("click",N),addEventListener("keydown",A),s.addEventListener("click",S),r.addEventListener("click",z),o.addEventListener("click",()=>le(t.dataset.id))}};ce.addEventListener("click",de);const ue=document.querySelector(".render-page-one-list"),pe=document.querySelector(".render-btn-list-pagination"),me=()=>{const e=`<p class="render-page-one-no">
  Unfortunately, <span class="render-page-one-no-part">no results</span> were
  found. You may want to consider other search options to find the exercise you
  are looking for. Our range is wide and you have the opportunity to find more
  options that suit your needs.
</p>`;ue.innerHTML=e,pe.style.display="none"},ge=getComputedStyle(document.querySelector("body")).width,ye=parseInt(ge)<768?8:9,fe=document.querySelector(".form-search"),x=document.querySelector(".render-page-one-list"),m=document.querySelector(".render-btn-list-pagination"),ke=(e,t)=>{let s="";for(let r=1;r<=e;r++){let o=` <li>
        <button
          class="render-pagination-btn-search"
          type="button"
        >${r}</button></li>`;s+=o}m.innerHTML=s,m.children[t-1].children[0].classList.add("render-pagination-btn-active")},c={limit:ye,page:1},ve=async e=>await I.get("exercises",{params:e}),W=async()=>{m.style.display="flex";const e=await ve(c);if(!e.data.results.length){me();return}g(M(e.data.results,c)),ke(e.data.totalPages,c.page)},be=async e=>{e.preventDefault();const t=x.children[0].dataset.filter,s=x.children[0].dataset.name;c[t]=s,c.keyword=e.target.query.value,m.addEventListener("click",he),W()},he=e=>{c.page=parseInt(e.target.textContent),W()};fe.addEventListener("submit",be);const we=document.querySelector(".form"),Se=document.querySelector(".modal-rating-radio-list");H();g(v({page:1,filter:"Muscles"}));we.addEventListener("submit",Q);Se.addEventListener("click",Y);
//# sourceMappingURL=commonHelpers2.js.map
