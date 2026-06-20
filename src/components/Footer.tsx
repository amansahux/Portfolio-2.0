"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="bg-surface border-t border-surface-container-highest py-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-headline-md font-headline-md text-on-surface font-bold tracking-tighter">
          AMAN SAHU
        </div>
        <p className="font-body-md text-body-md font-label-caps text-label-caps text-on-surface-variant uppercase text-center md:text-left">
          © {new Date().getFullYear()} AMAN SAHU. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase"
            href="https://github.com/amansahux"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase"
            href="mailto:example@example.com"
          >
            Email
          </a>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#"
          onClick={handleBackToTop}
          className="text-on-surface-variant hover:text-primary transition-colors text-label-caps font-label-caps flex items-center justify-center gap-2"
        >
          BACK TO TOP <ChevronUp className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}
