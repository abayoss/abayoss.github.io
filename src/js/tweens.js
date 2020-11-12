function loadGsapIntroScrollTween() {
    const tl_intro_bg = gsap.timeline({
        scrollTrigger: {
            trigger: '.bg-black-img',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            // markers: true,
            id: 'intro_img',
        },
    });
    tl_intro_bg.to('.bg-black-img', { scale: 1.1, y: 160, transformOrigin: '50% 50%' });

    const tl_skill_bg = gsap.timeline({
        scrollTrigger: {
            trigger: '#skill',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            // markers: true,
            id: 'skills_img',
        },
    });
    tl_skill_bg.to('.bg-skills-img', { scale: window.innerWidth < 737 ? 2 : 1.03, y: 220, transformOrigin: '50% 50%', rotation: 0 });

    // const tl2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '.img-paralax-col',
    //         start: 'top bottom',
    //         end: 'bottom top',
    //         scrub: true,
    //         markers: true,
    //         id: 'project_img',
    //     },
    // });
    // tl2.to('.img-paralax', { y: 60 });
}
function loadGsapIntroTextTween() {
    // var tl_char = gsap.timeline(),
    //     mySplitText = new SplitText("#quote", { type: "words,chars" }),
    //     chars = mySplitText.chars; //an array of all the divs that wrap each character
    // console.log(chars);
    // gsap.set("#quote", { perspective: 400 });

    // tl_char.staggerFrom(chars, 0.2, {opacity:0, y:50, ease: 'power4'}, 0.09);

    // gsap.set("#quote1", { perspective: 400 });
    // gsap.set("#quote2", { perspective: 400 });
    // tl_char.staggerFrom(SplitText1.chars, 0.2, { opacity: 0, y: 50, ease: 'power4' }, 0.039)
    //     .staggerFrom(SplitText2.chars, 0.2, { opacity: 0, y: 50, ease: 'power4' }, 0.039);
}

export { loadGsapIntroScrollTween, loadGsapIntroTextTween };
