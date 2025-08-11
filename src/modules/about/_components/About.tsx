"use client";

import { useRef } from "react";
import Badge from "@/components/common/Badge";
import { useGsap } from "@/hooks/useGsap";
import { aboutAnimations } from "./about.animation";
import ImageCards from "./ImageCards";
import Stats from "./Stats";

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useGsap(
    aboutRef,
    (gsap) => {
      aboutAnimations(aboutRef.current!, gsap);
    },
    []
  );

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
              <Badge title="About us" />
            </div>
            <h2
              id="about-heading"
              className="about-title font-medium text-[#101014] text-5xl leading-[1.2] flex flex-col gap-1"
            >
              <span className="about-title-line">Home</span>
              <span className="about-title-line">Improvement</span>
              <span className="about-title-line">Specialists</span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="about-content">
            <p className="about-description font-normal text-xl leading-[170%] text-[#3D3D47] tracking-[-0.3px]">
              Welcome to LifetimeArt , your trusted home improvement experts,
              dedicated to transforming homes with precision and care. With
              years of experience in building kitchens, bathrooms, garages, and
              more, we take pride in delivering top-quality craftsmanship and a
              seamless customer experience. Our mission is to bring your vision
              to life while ensuring clear communication and expert guidance at
              every step. Let&apos;s create a home you&apos;ll love!
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
          <Stats count={8} title="Years experience" description="Improving homes with expert craftsmanship for years" />
          <Stats count={26} title="Projects completed" description="Over 250 successful projects delivered with quality and care" />
          <Stats count={30} title="Skilled Tradespeople" description="Our team of 30 experts ensures top-quality results" />
          <Stats count={100} title="Client satisfaction" description="All of our clients are satisfied with our work and service" />
        </div>
      </div>
    </section>
  );
};

export default About;
