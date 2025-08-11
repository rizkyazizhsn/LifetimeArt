"use client";

import { MENU_LIST } from "@/constants/navbar-constant";
import { useGsap } from "@/hooks/useGsap";
import Image from "next/image";
import { useRef } from "react";
import Logo from "./Logo";

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
        <Logo className="navbar-logo" />
        {/* Navigation */}
        <ul className="flex items-center gap-[30px]">
          {MENU_LIST.map(({ title, href }) => (
            <li key={href} className="nav-item p-2.5">
              <a href={href} className="nav-link" role="menuItem" aria-label={`Navigate to ${title} section`}>
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
