"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Quote } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and upward motion
      gsap.from(".hero-element", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.5,
      });

      // Subtle float animation for the image container is handled via CSS class `animate-float` or GSAP
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-end pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-2/3 h-full z-0 pointer-events-none md:block hidden animate-float">
        <div className="relative w-full h-full">
          <Image
            alt="Aman Sahu Portrait"
            className="absolute right-0 bottom-0 w-full h-auto object-cover hero-mask scale-110 origin-bottom-right"
            src="https://lh3.googleusercontent.com/aida/AP1WRLtYLfA7HKpsjxf-ER1G5wj-t1d0FAz-F3Q1pVtF744YsnuXegLA52FoZOHoiKPjCk0ZaIvE3QPi7sBR8uKsfD025tSUIK8J-ZLJtb6iQS4g80KNUEhQg8zv8QkKkx4K5A_wvvp1jxWJLB5PbgGJGePI1q_wQzTot_xLHpGzY5Wb1OXdCghX1gYscaRl41WzYOnFoFwAXBOiBuUbchSOYJU5efzVPjsPxJmriwA9ziYqnFuZxDAlmznI7Q"
            width={1000}
            height={1000}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent"></div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
        <div className="max-w-2xl">
          <div className="hero-element flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_white]"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
              Available for work
            </span>
          </div>
          <h1 className="hero-element font-display-xl text-[60px] md:text-display-xl mb-4 leading-none text-on-surface">
            AMAN <br />
            <span className="text-gradient-silver">SAHU</span>
          </h1>
          <div className="hero-element flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-outline-variant"></span>
            <p className="font-headline-md text-headline-md text-on-surface-variant">
              Mern Developer, Jharkhand
            </p>
          </div>
          
          <div className="hero-element glass-card p-8 rounded-xl border-l-4 border-l-primary mb-12">
            <Quote className="text-primary w-10 h-10 mb-4" />
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed italic opacity-90">
              Engineering digital experiences that bridge the gap between complex logic and human-centered design. Specialized in crafting robust, scalable full-stack applications with the MERN ecosystem.
            </p>
          </div>
          
          <div className="hero-element flex flex-wrap gap-6">
            <button className="primary-glow-btn text-on-primary px-10 py-5 rounded-full font-label-caps text-label-caps uppercase font-extrabold transition-all duration-300">
              Hire Me
            </button>
            <button className="border border-outline-variant text-on-surface px-10 py-5 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:text-primary transition-all duration-300">
              View Projects
            </button>
          </div>
        </div>
        
        <div className="hero-element mt-20 md:absolute md:bottom-20 md:right-margin-desktop flex flex-col items-end">
          <p className="font-display-xl text-headline-lg text-on-surface">
            $75<span className="text-headline-md opacity-60">.00</span>
          </p>
          <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
            Hourly Rate
          </p>
        </div>
      </div>
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
