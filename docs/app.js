(()=>{var e={534:()=>{!function(){"use strict";const e=document.querySelector("#scroll_down");e&&e.addEventListener("click",(function(){const e=document.documentElement.clientHeight-document.documentElement.clientHeight/3;!function t(){window.pageYOffset<e&&(window.scrollBy(0,10),setTimeout(t,0)),window.pageYOffset>e&&window.scrollTo(0,e)}()}))}()}},t={};function o(i){if(t[i])return t[i].exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}(()=>{"use strict";var e;o(534),e=()=>{SmoothScroll({stepSize:60,animationTime:1500}),new Vue({el:"#work",data:{ProjectsList:[]},mounted:function(){this.getProjects()},methods:{getProjects:function(){fetch("assets/data/prod/projects.json?"+Math.random()).then((e=>e.json())).then((e=>{this.ProjectsList=e.projects.slice(0,6),ScrollReveal().reveal(".reveal",{interval:500,delay:1e3}),ScrollReveal({mobile:!1,opacity:0,distance:"20%",duration:2e3}),ScrollReveal().reveal(".slideRight1",{origin:"left",delay:100,interval:100}),ScrollReveal().reveal(".slideRight2",{origin:"left",delay:1e3,interval:1e3}),ScrollReveal().reveal(".slideLeft1",{origin:"right",delay:100,interval:100}),ScrollReveal().reveal(".slideLeft2",{origin:"right",delay:1e3,interval:1e3}),ScrollReveal().reveal(".slideUp",{distance:"100%",origin:"bottom",delay:1e3}),gsap.timeline({scrollTrigger:{trigger:".bg-black-img",start:"top top",end:"bottom top",scrub:!0,id:"black_img"}}).to(".bg-black-img",{scale:1.1,y:160,transformOrigin:"50% 50%"}),setTimeout((()=>{var e,t;e=gsap.timeline(),t=new SplitText("#quote",{type:"words,chars"}).chars,console.log(t),gsap.set("#quote",{perspective:400}),e.staggerFrom(t,.2,{opacity:0,y:50,ease:"power4"},.09)}),1e3)}))}}})},"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)})()})();