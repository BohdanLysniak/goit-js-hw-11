import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function c(s){const o="https://pixabay.com/api/",t=new URLSearchParams({key:"43011845-ca4f94d8d544ea7c100ad449b",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${t}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function l(s){if(s.length==0)iziToast.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});else{const o=s.map(t=>`<li class="photos-list-item">
  <a class="photos-list-link" href="${t.largeImageURL}">
  <img class="photo" src="${t.webformatURL}" alt="${t.tags}"/>
  </a>
  <ul class="photo-information-container">
  <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${t.likes}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${t.views}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${t.comments}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${t.downloads}</p></li>
  </ul>
  </li>`).join("");p.insertAdjacentHTML("beforeend",o)}}const m=document.querySelector(".search-form"),p=document.querySelector("gallery");m.addEventListener("submit",u);function u(s){s.preventDefault();const o=s.target.elements.search.value.trim();o!==""?c(o).then(t=>{l(t.hits)}):a.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
