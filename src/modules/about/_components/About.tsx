"use client";

import Stats from "./Stats";
import { useRef } from "react";
import ImageCards from "./ImageCards";
import { useGsap } from "@/hooks/useGsap";
import Badge from "@/components/common/Badge";
import { aboutAnimations } from "./about.animation";
import { ABOUT_CONTENT } from "@/constants/about-constant";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGsap(aboutRef, (gsap) => {
    aboutAnimations(aboutRef.current!, gsap);
  });

  return (
    <section
      ref={aboutRef}
      className="py-[120px] bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Content */}
          <div className="flex flex-col gap-2">
            <div className="about-badge">
              <Badge title={ABOUT_CONTENT.badge} />
            </div>
            <h2
              id="about-heading"
              className="about-title font-medium text-[#101014] text-5xl leading-[1.2] flex flex-col gap-1"
            >
              {ABOUT_CONTENT.title.map((title, index) => (
                <span key={index} className="about-title-line">
                  {title}
                </span>
              ))}
            </h2>
          </div>

          {/* Right Content */}
          <div className="about-content">
            <p className="about-description font-normal text-xl leading-[170%] text-[#3D3D47] tracking-[-0.3px]">
              {ABOUT_CONTENT.description}
            </p>
          </div>
        </div>
      </div>
      {/* Image Cards Section */}
      <div className="mt-20">
        <ImageCards />
      </div>

      <div className="container mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-[120]">
          {ABOUT_CONTENT.stats.map((stat, index) => (
            <Stats
              key={index}
              count={stat.count}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
