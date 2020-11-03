const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#work',
        start: 'top 94%',
        end: 'bottom top',
        scrub: true,
        // markers: true,
    },
});
tl.to('.bg-black-img', { scale: 1.5 , y: 500});
// tl.to('.box', { rotation: 360, duration: 3 });
// tl.to('.box', { xPercent: 350, duration: 1 });
