gsap.registerPlugin(ScrollTrigger);
const time = 1;
const scrub = 3;
const startTrigger = "top 10%";

gsap.utils.toArray("section").forEach((section, i) => {
  let toggleActions = "restart reverse restart none";
  let distance = 500;

  let card1 =section.querySelector(".card__1");
  let card2 =section.querySelector(".card__2");
  let card3 =section.querySelector(".card__3");
  let card4 =section.querySelector(".card__4");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: card1,
      start: startTrigger,
      scrub: scrub,
      toggleActions: toggleActions,
    },
  })
  .to([card1, card2], { y: distance, duration: time })
  .to([card3, card4], { y: -distance, duration: time }, "<");
});
