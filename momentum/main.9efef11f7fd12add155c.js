(()=>{"use strict";var e={268:(e,t,o)=>{o.r(t)},177:(e,t,o)=>{o.r(t)},664:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showDate=void 0;const o=document.querySelector(".date");t.showDate=()=>{const e=(new Date).toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",hour:void 0,minute:void 0});o&&(o.textContent=e)}},678:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showGreeting=void 0;const n=o(977),r=document.querySelector(".greeting");t.showGreeting=()=>{const e=`Good ${(0,n.getTimeOfDay)()}`;r&&(r.textContent=e)}},48:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.changeSlide=t.setBg=void 0;const n=o(977),r=document.querySelector("body"),a=document.querySelector(".slide-next"),d=document.querySelector(".slide-prev");let s=(20,Math.ceil(20*Math.random()));t.setBg=()=>{const e=(0,n.getTimeOfDay)(),t=new Image,o=String(s).padStart(2,"0");t.src=`https://raw.githubusercontent.com/LenarFF/stage1-tasks/assets/images/${e}/${o}.jpg`,t.onload=()=>{r.style.backgroundImage=`url('${t.src}')`}};const i=()=>{s<20?s++:s=1,(0,t.setBg)()},c=()=>{s>1?s--:s=20,(0,t.setBg)()};t.changeSlide=()=>{a.addEventListener("click",i),d.addEventListener("click",c)}},58:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.showTime=void 0;const n=o(664),r=o(678),a=document.querySelector(".time");t.showTime=()=>{const e=(new Date).toLocaleTimeString();a&&(a.textContent=e),(0,n.showDate)(),(0,r.showGreeting)(),setTimeout(t.showTime,1e3)}},977:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeOfDay=void 0,t.getTimeOfDay=()=>{const e=(new Date).getHours();switch(!0){case e<6:return"night";case e<12:return"morning";case e<18:return"day";default:return"evening"}}},179:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addUserName=void 0;const o=document.querySelector(".name");t.addUserName=()=>{window.addEventListener("beforeunload",(function(){localStorage.setItem("name",o.value)})),window.addEventListener("load",(function(){localStorage.getItem("name")&&(o.value=localStorage.getItem("name"))}))}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o(268),o(177);const e=o(48),t=o(58),n=o(179);(0,t.showTime)(),(0,n.addUserName)(),(0,e.setBg)(),(0,e.changeSlide)()})()})();