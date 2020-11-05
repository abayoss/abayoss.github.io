const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.bg-black-img',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        markers: true,
        id:"black_img"
    },
});
tl.to('.bg-black-img', { scale: 1.1, y: 100, x:-100 })

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#img-paralax-col',
        start: '30% bottom',
        end: '130% top',
        scrub: true,
        markers: true,
        id:"project_img"
    },
});
tl2.to('#img-paralax', { y: 60 })

SmoothScroll({ animationTime : 1000, stepSize: 70 });
