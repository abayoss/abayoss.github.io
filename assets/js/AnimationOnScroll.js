const slideRight = {
  origin: "left",
  delay: 800,
  duration:200,
  // reset: true,
  interval: 400
};
const slideLeft = {
  origin: "right",
  // delay: 900,
  // reset: true,
  interval: 800
};
const slideUp = {
  distance: "100%",
  origin: "bottom",
  delay: 800,
  // reset: true,
  interval: 800
};
ScrollReveal({ mobile: false, opacity: 0, distance: "6%" });
ScrollReveal().reveal(".slideRight ,.Grey, .uk-inline", slideRight);
ScrollReveal().reveal(".slideLeft", slideLeft);
ScrollReveal().reveal(".slideUp", slideUp);
