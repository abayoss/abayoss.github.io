function loadGsapIntroScrollTween() {
    const isMobile = window.innerWidth < 737;
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
    tl_skill_bg.to('.bg-skills-img', { scale: isMobile ? 2 : 1.03, y: 220, transformOrigin: '50% 50%', rotation: 0, opacity: 1 });

    const tl_contact = gsap.timeline({
        scrollTrigger: {
            trigger: '#contact',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
            // markers: true,
            id: 'contact',
        },
    });
    tl_contact
        .from('.bg-contact-img', { scale: 1.2, y: -160, transformOrigin: '50% 50%'}, 0)
        .from('.row-contact-gsap', { y: 500 }, 0);


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

export { loadGsapIntroScrollTween };
