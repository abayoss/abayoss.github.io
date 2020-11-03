// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.bg-black-img',
//         start: 'bottom 90%',
//         end: 'bottom top',
//         scrub: true,
//         // markers: true,
//     },
// });
// tl.to('.bg-black-img', { scale: 1.2, y: 100 })

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#section-paralax',
        start: 'top bottom',
        end: 'bottom 20%',
        scrub: true,
        markers: true,
    },
});
tl2.to('#img-paralax', {y: 100 })

SmoothScroll({ animationTime : 900, stepSize: 60 })
