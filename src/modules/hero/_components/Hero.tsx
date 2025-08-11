"use client";

import gsap from "gsap";
import Image from "next/image";
import StatusPill from "./StatusPill";
import { useEffect, useRef } from "react";
import { heroAnimations } from "./hero.animation";
import IconButton from "@/components/common/IconButton";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      heroAnimations(heroRef.current!);
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="bg-[#101014] text-white py-8">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-between">
        {/* Left Content */}
        <div className="space-y-6">
          <StatusPill title="Available for work" />

          <h1 className="headline text-[56px] font-medium leading-[120%]">
            <span className="headline-line">Your trusted partner</span>
            <br />
            <span className="headline-line">for quality home improvement</span>
          </h1>

          <p className="paragraph text-xl text-[#D0D1DB] leading-[170%] -tracking-[0.3px] w-3/4">
            LifetimeArt delivers expert home improvements, creating beautiful
            and functional spaces with quality craftsmanship.
          </p>

          <IconButton className="cta-btn">Work with us</IconButton>
        </div>

        {/* Right Content */}
        <div className="rounded-xl overflow-hidden relative w-[652px] h-[835px] place-self-end">
          {/* Overlay */}
          <div className="absolute z-10 top-0 bg-linear-to-b from-[#101014] to-[#10101400] w-full opacity-80 h-[167px]" />
          <Image
            src={"/assets/hero.jpg"}
            width={652}
            height={835}
            alt="hero"
            className="hero-image size-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
