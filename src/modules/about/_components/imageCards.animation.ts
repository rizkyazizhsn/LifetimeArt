export const imageCardsAnimations = (
  root: HTMLElement,
  gsap: GSAP,
  scrollSpeed: number = 80
) => {
  const track = root.querySelector(".image-cards-track") as HTMLElement;
  const cards = root.querySelectorAll(".image-card");

  if (!track || !cards.length) return;
  const cardWidth = 400;
  const gap = 32;
  const cardWithGap = cardWidth + gap;
  const totalCards = cards.length;
  const halfCards = totalCards / 2;
  const scrollDistance = halfCards * cardWithGap;

  gsap.set(track, {
    x: 0,
  });

  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none none",
    },
  });

  const fadeCardsTl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none none",
    },
  });
  fadeCardsTl.from(cards, {
    opacity: 0,
    x: -40,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15,
  });

  const scrollTl = gsap.timeline({
    repeat: -1,
    ease: "none",
  });

  scrollTl.to(track, {
    x: -scrollDistance,
    duration: scrollSpeed,
    ease: "none",
  });

  mainTl.add(scrollTl, 0.5);

  return () => {
    cards.forEach((card) => {
      const clonedCard = card.cloneNode(true);
      card.parentNode?.replaceChild(clonedCard, card);
    });

    mainTl.kill();
    scrollTl.kill();
  };
};
