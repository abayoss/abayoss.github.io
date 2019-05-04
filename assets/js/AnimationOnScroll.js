const slideRight = {
    distance: '6%',
    origin: 'left',
    opacity: 0,
    delay: 600,
    // reset: true,
    interval: 400
};
const slideLeft = {
    distance: '6%',
    origin: 'right',
    opacity: 0,
    delay: 800,
    // reset: true,
    interval: 600
};
const slideUp = {
    distance: '100%',
    origin: 'bottom',
    opacity: 0,
    delay: 800,
    // reset: true,
    interval: 600
};

ScrollReveal().reveal('.slideRight', slideRight);
ScrollReveal().reveal('.slideLeft', slideLeft);
ScrollReveal().reveal('.slideUp', slideUp);