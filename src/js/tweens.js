function loadGsapIntroScrollTween() {
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
    tl.to('.bg-black-img', { scale: 1.1, y: 160, transformOrigin: '50% 50%' });

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
    var tl_char = gsap.timeline(),
        mySplitText = new SplitText("#quote", { type: "words,chars" }),
        chars = mySplitText.chars; //an array of all the divs that wrap each character
    console.log(chars);
    gsap.set("#quote", { perspective: 400 });

    tl_char.staggerFrom(chars, 0.2, {opacity:0, y:50, ease: 'power4'}, 0.09);

}

export { loadGsapIntroScrollTween, loadGsapIntroTextTween };
