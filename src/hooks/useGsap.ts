import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimateFn = (
  gsapInstance: typeof gsap,
  scrollTrigger: typeof ScrollTrigger
) => void;

export function useGsap<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  animateFn: AnimateFn,
  deps: unknown[] = []
) {
  useEffect(() => {
    if (!ref.current) return;
    if (typeof window === "undefined") return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    const ctx = gsap.context(() => {
      animateFn(gsap, ScrollTrigger);
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll()
        .filter((t) => t.trigger === ref.current)
        .forEach((trigger) => trigger.kill());
    };
  }, [ref, ...deps]);
}
