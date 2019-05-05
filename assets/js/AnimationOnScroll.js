const slideRight = {
  origin: "left",
  delay: 600,
  // reset: true,
  interval: 100
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
ScrollReveal().reveal(".slideRight", slideRight);
ScrollReveal().reveal(".slideLeft", slideLeft);
ScrollReveal().reveal(".slideUp", slideUp);
