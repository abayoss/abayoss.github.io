function loadGsapTweens() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.bg-black-img',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            // markers: true,
            id: 'black_img',
        },
    });
    tl.to('.bg-black-img', { scale: 1.1, y: 160, transformOrigin: '50% 50%'});

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
