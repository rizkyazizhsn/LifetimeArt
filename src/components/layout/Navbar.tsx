"use client";

import { MENU_LIST } from "@/constants/navbar-constant";
import { useGsap } from "@/hooks/useGsap";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGsap(navbarRef, (gsap) => {
    gsap.from(".navbar-logo", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.1,
      delay: 0.3,
    });
  });

  return (
    <header
      ref={navbarRef}
      className={`container fixed inset-x-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        className={[
          "flex items-center justify-between transition-all duration-500 ease-in-out",
          isScrolled ? "py-5" : "py-10",
        ].join(" ")}
      >
        {/* Logo */}
        <Logo className="navbar-logo" />
        {/* Navigation */}
        <ul className="flex items-center gap-[30px]">
          {MENU_LIST.map(({ title, href }) => (
            <li key={href} className="nav-item p-2.5">
              <a
                href={href}
                className="nav-link"
                role="menuItem"
                aria-label={`Navigate to ${title} section`}
              >
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
