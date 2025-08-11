export const imageCardsAnimations = (
  root: HTMLElement,
  gsap: GSAP,
  scrollSpeed: number = 50
) => {
  const track = root.querySelector('.image-cards-track') as HTMLElement;
  const cards = root.querySelectorAll('.image-card');

  if (!track || !cards.length) return;

  // Calculate dimensions for infinite scroll
  const cardWidth = 400;
  const gap = 32;
  const cardWithGap = cardWidth + gap;
  const totalCards = cards.length;
  const halfCards = totalCards / 2;
  const scrollDistance = halfCards * cardWithGap;

  // Set initial states
  gsap.set(root, {
    clipPath: "inset(0 100% 0 0)",
  });

  gsap.set(track, {
    x: 0,
  });

  // Create main timeline for scroll trigger
  const mainTl = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 85%",
      end: "bottom 15%",
      toggleActions: "play none none none",
    }
  });

  // Horizontal reveal animation (left to right)
  const revealTl = gsap.timeline();
  revealTl.to(root, {
    clipPath: "inset(0 0% 0 0)", // Reveal from left to right
    duration: 1.5,
    ease: "power3.out",
  });

  // Continuous auto-scroll animation (right to left)
  const scrollTl = gsap.timeline({
    repeat: -1,
    ease: "none"
  });

  scrollTl.to(track, {
    x: -scrollDistance,
    duration: scrollSpeed,
    ease: "none",
  });

  // Add both animations to main timeline to run simultaneously
  mainTl
    .add(revealTl, 0) // Start reveal immediately
    .add(scrollTl, 0.5); // Start scroll slightly after reveal begins

  // Pause/resume auto-scroll on hover
  // let isHovered = false;

  const handleMouseEnter = () => {
    scrollTl.timeScale(0)
    // if (!isHovered) {
    //   isHovered = true;
    // }
  };

  const handleMouseLeave = () => {
    scrollTl.timeScale(1)
    // if (isHovered) {
    //   isHovered = false;
    // }
  };

  root.addEventListener('mouseenter', handleMouseEnter);
  root.addEventListener('mouseleave', handleMouseLeave);

  // Individual card hover effects
  // cards.forEach((card) => {
  //   const image = card.querySelector('img');
  //   if (!image) return;

  //   card.addEventListener('mouseenter', () => {
  //     gsap.to(image, {
  //       scale: 1.05,
  //       duration: 0.3,
  //       ease: "power2.out"
  //     });
  //   });

  //   card.addEventListener('mouseleave', () => {
  //     gsap.to(image, {
  //       scale: 1,
  //       duration: 0.3,
  //       ease: "power2.out"
  //     });
  //   });
  // });

  // Cleanup function
  return () => {
    root.removeEventListener('mouseenter', handleMouseEnter);
    root.removeEventListener('mouseleave', handleMouseLeave);

    cards.forEach((card) => {
      const clonedCard = card.cloneNode(true);
      card.parentNode?.replaceChild(clonedCard, card);
    });

    mainTl.kill();
    revealTl.kill();
    scrollTl.kill();
  };
};
