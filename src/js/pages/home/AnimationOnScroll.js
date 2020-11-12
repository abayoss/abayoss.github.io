const animateOnscroll = () => {
    const slideRight1 = {
        origin: 'left',
        delay: 100,
        interval: 100,
    };
    const slideRight2 = {
        origin: 'left',
        delay: 1000,
        interval: 1000,
    };
    const slideLeft1 = {
        origin: 'right',
        delay: 100,
        interval: 100,
    };
    const slideLeft2 = {
        origin: 'right',
        delay: 1000,
        interval: 1000,
    };
    const slideUp = {
        distance: '100%',
        origin: 'bottom',
        delay: 1000,
    };
    ScrollReveal().reveal('.reveal', { interval: 400, delay: 400 });
    ScrollReveal({
        mobile: false,
        opacity: 0,
        distance: '40%',
        duration: 1600,
    });
    ScrollReveal().reveal('.slideRight1', slideRight1);
    ScrollReveal().reveal('.slideRight2', slideRight2);
    ScrollReveal().reveal('.slideLeft1', slideLeft1);
    ScrollReveal().reveal('.slideLeft2', slideLeft2);
    ScrollReveal().reveal('.slideUp', slideUp);
};
export { animateOnscroll };
