const slideRight = {
    distance: '6%',
    origin: 'left',
    opacity: 0,
    delay: 400,
    // reset: true,
    interval: 600
};
const slideLeft = {
    distance: '6%',
    origin: 'right',
    opacity: 0,
    delay: 800,
    // reset: true,
    interval: 800
};
const slideUP = {
    distance: '6%',
    origin: 'down',
    opacity: 0,
    delay: 2000,
    // reset: true,
    interval: 600
};

ScrollReveal().reveal('.slideRight', slideRight);
ScrollReveal().reveal('.slideLeft', slideLeft);
ScrollReveal().reveal('.slideUP', slideUP);