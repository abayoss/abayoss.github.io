const slideRight = {
  origin: "left",
  delay: 800,
  duration:200,
  // reset: true,
  interval: 400
};
const slideLeft = {
  origin: "right",
  // delay: 600,
  // reset: true,
  interval: 600
};
const slideUp = {
  distance: "100%",
  origin: "bottom",
  // delay: 600,
  // reset: true,
  interval: 600
};
ScrollReveal({ mobile: false, opacity: 0, distance: "6%" });
ScrollReveal().reveal(".slideRight ,.Grey, .uk-inline", slideRight);
ScrollReveal().reveal(".slideLeft", slideLeft);
ScrollReveal().reveal(".slideUp", slideUp);
ScrollReveal().reveal(".blackBack", {
  scale: 1.1
});
