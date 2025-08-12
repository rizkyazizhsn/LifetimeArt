"use client";

import gsap from "gsap";
import Image from "next/image";
import StatusPill from "./StatusPill";
import { useEffect, useRef } from "react";
import { heroAnimations } from "./hero.animation";
import IconButton from "@/components/common/IconButton";
import { HERO_CONTENT } from "@/constants/hero.constant";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      heroAnimations(heroRef.current as HTMLDivElement);
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={heroRef} className="bg-[#101014] text-white py-8">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center justify-between">
        {/* Left Content */}
        <div className="space-y-6">
          <StatusPill title="Available for work" />

          <h1 className="hero-headline text-[56px] font-medium leading-[120%]">
            {HERO_CONTENT.headline.map((line, index) => (
              <span key={index} className="hero-headline-line">
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="hero-paragraph text-xl text-[#D0D1DB] leading-[170%] -tracking-[0.3px] w-3/4 mt-6">
            {HERO_CONTENT.description}
          </p>

          <IconButton className="hero-cta-btn mt-14">
            {HERO_CONTENT.cta}
          </IconButton>
        </div>

        {/* Right Content */}
        <div className="rounded-xl overflow-hidden relative w-[652px] h-[835px] place-self-end">
          {/* Overlay */}
          <div className="absolute z-10 top-0 bg-linear-to-b from-[#101014] to-[#10101400] w-full opacity-80 h-[167px]" />
          <Image
            src={HERO_CONTENT.image.src}
            width={HERO_CONTENT.image.width}
            height={HERO_CONTENT.image.height}
            alt={HERO_CONTENT.image.alt}
            className="hero-image size-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
