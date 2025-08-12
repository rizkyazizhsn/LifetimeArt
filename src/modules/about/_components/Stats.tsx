import { useRef } from "react";
import { StatItem } from "@/types/about.types";
import { useGsap } from "@/hooks/useGsap";

const Stats = ({ count, title, description }: StatItem) => {
  const statsRef = useRef<HTMLDivElement>(null);

  useGsap(statsRef, (gsap, scrollTrigger) => {
    const tl: GSAPTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl.from(statsRef.current!.children, {
      opacity: 0,
      y: 30,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.15,
    });
  });

  return (
    <div ref={statsRef} className="flex flex-col gap-y-2 ">
      <h4 className="text-7xl leading-[170%] text-[#101014]">{count}</h4>
      <p className="font-semibold text-xl leading-8 text-[#101014]">{title}</p>
      <p className="text-base leading-4 text-[#3D3D47]">{description}</p>
    </div>
  );
};

export default Stats;
