"use client";

import { useGsap } from "@/hooks/useGsap";
import { MENU_LIST } from "@/lib/constants";
import Image from "next/image";
import { useRef } from "react";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);

  useGsap(navbarRef, (gsap) => {
    gsap.from('.navbar-logo', {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.3,
    })
  }, [])
  
  return (
    <header ref={navbarRef} className="container fixed inset-x-0 z-30">
      <nav className="flex items-center justify-between py-10">
        {/* Logo */}
        <h1 className="navbar-logo flex items-center text-white font-medium text-[23px] gap-0.5">
          <Image src={"/assets/logo.svg"} width={32} height={32} alt="Logo" />
          LifetimeArt
        </h1>
        {/* Navigation */}
        <ul className="flex items-center gap-[30px]">
          {MENU_LIST.map(({ title, href }) => (
            <li key={href} className="nav-item p-2.5">
              <a href={href} className="nav-link">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
