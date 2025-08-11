import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";

export function useServiceAnimation() {
  const serviceRef = useRef<HTMLDivElement>(null);

  useGsap(serviceRef, (gsap, ScrollTrigger) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl.from(".service-badge", {
      y: 20,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    })
      .from(".service-title", {
        y: 20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      })
      .from(".service-paragraph", {
        y: 15,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
  }, []);

  return { serviceRef };
}
