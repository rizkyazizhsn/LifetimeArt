export const aboutAnimations = (
  root: HTMLElement,
  gsap: GSAP
) => {
  const badge = root.querySelector('.about-badge');
  const titleLines = root.querySelectorAll('.about-title-line');
  const description = root.querySelector('.about-description');

  if (!badge || !titleLines.length || !description) return;

  // Create main timeline
  const tl: GSAPTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    }
  });

  // Set initial states
  gsap.set([badge, ...titleLines, description], {
    opacity: 0,
  });

  gsap.set([badge, ...titleLines], {
    y: 30,
  });

  gsap.set(description, {
    x: 50,
  });

  // Animate badge first
  tl.to(badge, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
  })

  // Animate title lines with stagger
  .to(titleLines, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
  }, "-=0.4")

  // Animate description from right
  .to(description, {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out",
  }, "-=0.3");

  return tl;
};
