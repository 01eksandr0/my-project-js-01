import{S as d,i as u}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f=n=>n.reduce((o,e)=>(o.push(` <li class='list-item'><a  href="${e.largeImageURL}"><img width="360"
           height="200"   src="${e.webformatURL}" alt="${e.tags}"></a><div class="cont">
          <div class="mini-cont">
            <p><strong>Likes</strong></p>
            <p>${e.likes}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Views</strong></p>
            <p>${e.views}</p>
          </div>
          <div class="mini-cont">
            <p><strong>Comment</strong></p>
            <p>${e.comments}</p>
          </div>
          <div class="mini-cont">
             <p><strong>Downloads</strong></p>
            <p>${e.downloads}</p>
          </div>
        </div></li>`),o),[]),l=document.querySelector(".loader"),c=document.querySelector(".form"),a=document.querySelector(".list"),p=new d(".list a"),m=n=>{n.preventDefault(),a.children.length>0&&(a.innerHTML=""),l.style.display="inline-block";const o=new URLSearchParams({key:"41368993-aecccf11b76826fadfd0039f8",q:c.search.value,image_type:"photo",orientation:"horizontal",safesearch:!0});c.reset(),fetch(`https://pixabay.com/api/?${o}`).then(e=>e.json()).then(e=>{const s=f(e.hits);s.length<1?(u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.style.display="none"):(a.insertAdjacentHTML("afterbegin",s.join(" ")),l.style.display="none",p.refresh())}).catch(e=>console.log(e))};c.addEventListener("submit",m);
//# sourceMappingURL=commonHelpers.js.map
