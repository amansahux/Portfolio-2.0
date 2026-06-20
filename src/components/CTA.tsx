"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0.95,
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-section-gap relative overflow-hidden" id="contact">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Background Texture"
          src="https://lh3.googleusercontent.com/aida/AP1WRLtYLfA7HKpsjxf-ER1G5wj-t1d0FAz-F3Q1pVtF744YsnuXegLA52FoZOHoiKPjCk0ZaIvE3QPi7sBR8uKsfD025tSUIK8J-ZLJtb6iQS4g80KNUEhQg8zv8QkKkx4K5A_wvvp1jxWJLB5PbgGJGePI1q_wQzTot_xLHpGzY5Wb1OXdCghX1gYscaRl41WzYOnFoFwAXBOiBuUbchSOYJU5efzVPjsPxJmriwA9ziYqnFuZxDAlmznI7Q"
          fill
          className="w-full h-full object-cover opacity-5 grayscale scale-150 blur-sm"
        />
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h2 className="cta-element font-display-xl text-[48px] md:text-display-xl text-on-surface mb-12">
          LET'S BUILD SOMETHING <br />
          <span className="text-gradient-silver">AMAZING TOGETHER</span>
        </h2>
        
        <div className="cta-element flex flex-wrap justify-center gap-8 items-center">
          <button className="primary-glow-btn cursor-pointer text-on-primary px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-extrabold transition-all duration-300">
            Contact Me
          </button>
          <button className="border cursor-pointer border-outline-variant text-on-surface px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md">
            Download Resume
          </button>
        </div>
        
        <div className="cta-element mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
          <div className="text-left">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Location</p>
            <p className="font-headline-md text-body-lg font-bold text-on-surface">Jharkhand, India</p>
          </div>
          <div className="text-left">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Specialization</p>
            <p className="font-headline-md text-body-lg font-bold text-on-surface">MERN & UI Architecture</p>
          </div>
          <div className="text-left col-span-2 md:col-span-1">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">Availability</p>
            <p className="font-headline-md text-body-lg font-bold text-primary">Open for new projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
