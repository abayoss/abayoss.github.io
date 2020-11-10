function loadGsapTweens() {
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
    tl_intro_bg.to('.bg-black-img', { scale: 1.1, y: 160, transformOrigin: '50% 50%'});
    
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
    tl_skill_bg.to('.bg-skills-img', { scale: 1.03, y: 400, transformOrigin: '50% 50%'});

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

export {loadGsapTweens};
