parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fHvw":[function(require,module,exports) {
module.exports={projects:[{image:"https://i.imgur.com/ZIi65is.png",title:"Dreamer",description:"A cool medium style blog to Write and share amazing stories and ideas you have been dreaming about!",live:"https://dream-vote.herokuapp.com/dreams",details:"https://github.com/abayoss/express-mongoose/blob/resume-reddit-voting/readme.md",source:"https://github.com/abayoss/express-mongoose/tree/resume-reddit-voting"},{image:"https://i.imgur.com/Tm4MI47.jpg",title:"ISIC School Schedular",description:"ASP Web app that allows multiple parties to organize a better School Schedule and help them keep track of every class group",details:"https://github.com/abayoss/ISIC_School_Scheduler/blob/master/readme.md",source:"https://github.com/abayoss/ISIC_School_Scheduler"},{image:"https://i.imgur.com/4YiTYda.png",title:"KTM showcase",description:"MEAN Stack app that shows you how to do client server interaction, and authentication, using the Http Client.",live:"https://meanfun-e1013.firebaseapp.com/",details:"https://github.com/abayoss/meanFun/blob/master/README.md",source:"https://github.com/abayoss/meanfun"},{image:"https://i.imgur.com/g8HtDv2.png",title:"SymFun Store",description:"symfony e-commerce web site with some cool functionalities, like: image upload, shopping cart 🛒 and Rating System ⭐",details:"https://github.com/abayoss/symFun/blob/master/README.md",source:"https://github.com/abayoss/symFun"},{image:"https://i.imgur.com/PpMcTcG.png",title:"Black Mambas",description:"Founded in 2015, Black Mambas is an american football team from Rabat Morocco, with a male & female section.",details:"https://github.com/abayoss/black-mambas-american-football/blob/master/README.md",live:"https://abayoss.github.io/black-mambas-american-football/",source:"https://github.com/abayoss/black-mambas-american-football"},{image:"https://i.imgur.com/t6P2l8T.png",title:"Angular Fire",description:"Angular and fire Store APP with some cool functionalities, like: real time update, image upload and User authentication",details:"https://github.com/abayoss/ngFire/blob/master/README.md",source:"https://github.com/abayoss/ngFire"},{image:"https://i.imgur.com/awasmha.png",title:"Angular fundamentals",description:"the fundamentals of using the Angular 2++ framework: syntax, form validation, http client and more interesting concepts",details:"https://github.com/abayoss/angularFun/blob/master/README.md",source:"https://github.com/abayoss/angularFun"}]};
},{}],"q2ic":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.animateOnscroll=void 0;var e=function(){ScrollReveal().reveal(".reveal",{interval:400,delay:400}),ScrollReveal({mobile:!1,opacity:0,distance:"40%",duration:1600}),ScrollReveal().reveal(".slideRight1",{origin:"left",delay:100,interval:100}),ScrollReveal().reveal(".slideRight2",{origin:"left",delay:1e3,interval:1e3}),ScrollReveal().reveal(".slideLeft1",{origin:"right",delay:100,interval:100}),ScrollReveal().reveal(".slideLeft2",{origin:"right",delay:1e3,interval:1e3}),ScrollReveal().reveal(".slideUp",{distance:"100%",origin:"bottom",delay:1e3})};exports.animateOnscroll=e;
},{}],"MMgo":[function(require,module,exports) {
"use strict";function t(){var t=window.innerWidth<737;gsap.timeline({scrollTrigger:{trigger:".bg-black-img",start:"top top",end:"bottom top",scrub:!0,id:"intro_img"}}).to(".bg-black-img",{scale:1.1,y:160,transformOrigin:"50% 50%"}),gsap.timeline({scrollTrigger:{trigger:"#skill",start:"top bottom",end:"bottom top",scrub:!0,id:"skills_img"}}).to(".bg-skills-img",{scale:t?2:1.03,y:220,transformOrigin:"50% 50%",rotation:0,opacity:1}),gsap.timeline({scrollTrigger:{trigger:"#contact",start:"top bottom",end:"bottom bottom",scrub:!0,id:"contact"}}).from(".bg-contact-img",{scale:1.2,y:-160,transformOrigin:"50% 50%"},0).from(".row-contact-gsap",{y:500},0)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.loadGsapIntroScrollTween=t;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=n(require("./data/prod/projects.json")),t=require("./js/pages/home/AnimationOnScroll"),o=require("./js/pages/home/tweens");function n(e){return e&&e.__esModule?e:{default:e}}console.log(e.default);var r=function(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)};r(function(){SmoothScroll({stepSize:60,animationTime:1500}),new Vue({el:"#work",data:{ProjectsList:[]},mounted:function(){this.getProjects()},methods:{getProjects:function(){this.ProjectsList=e.default.projects.slice(0,6),(0,t.animateOnscroll)(),(0,o.loadGsapIntroScrollTween)()}}})});
},{"./data/prod/projects.json":"fHvw","./js/pages/home/AnimationOnScroll":"q2ic","./js/pages/home/tweens":"MMgo"}]},{},["A2T1"], null)
//# sourceMappingURL=/app.9195c45e.js.map