"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // GSAP reveal animation on mount
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(targetId);
    } else {
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)] transition-all duration-300 ease-out ${
        isScrolled ? "py-4" : "h-20"
      }`}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-full">
        <div className="text-headline-md whitespace-nowrap font-headline-md font-bold tracking-tighter text-on-surface text-gradient-silver">
          AMAN SAHU
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#work"
            onClick={(e) => handleSmoothScroll(e, "#work")}
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-caps text-label-caps uppercase hover:scale-105"
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={(e) => handleSmoothScroll(e, "#skills")}
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-caps text-label-caps uppercase hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-caps text-label-caps uppercase hover:scale-105"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-300 font-label-caps text-label-caps uppercase hover:scale-105"
          >
            Contact
          </a>
          <button className="ml-4 whitespace-nowrap  cursor-pointer primary-glow-btn text-on-primary px-6 py-2.5 rounded-full font-label-caps text-label-caps uppercase font-bold transition-all duration-300">
            Let's Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
