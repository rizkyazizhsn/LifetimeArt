import { gsap } from "@/lib/gsap.config";

export const heroAnimations = (root: HTMLElement) => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  const q = gsap.utils.selector(root);

  tl.from(q(".status-pill"), {
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
  }, "+=0.4")
    .from(q(".hero-headline-line"), {
      y: 20,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power4.inOut",
    }, "-=0.5")
    .from(q(".hero-paragraph"), { opacity: 0, y: 20, duration: 0.7 }, "-=0.3")
    .from(q(".hero-cta-btn"), { opacity: 0, y: 20, duration: 0.7 }, "-=0.5")
    .from(q(".hero-image"), { opacity: 0, scale: 1.1, duration: 2, ease: "power4.inOut" }, "-=1.5")
    .from(
      q(".testimonial-card"),
      { x: 50, y: 50, opacity: 0, duration: 0.8 },
      "-=0.5"
    );

  gsap.to(q(".hero-image"), {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: root,
      start: "top bottom",
      end: "bottom top",
      scrub: 0.5,
      invalidateOnRefresh: true
    },
  });

  return tl;
};
