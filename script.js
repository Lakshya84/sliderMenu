var menu = document.querySelector("#nav i");
var close = document.querySelector(".left-side i");

var tl = gsap.timeline();
tl.to(".left-side", {
  right: 0,
  duration: 0.2,
});

tl.from(".left-side h4", {
  x: 600,
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
});

tl.from(".left-side i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
