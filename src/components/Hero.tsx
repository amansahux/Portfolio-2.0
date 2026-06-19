"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Quote } from "lucide-react";
import HeroImage from "../assets/Hero.bg.png";
import HeroSmallImage from "../assets/Hero.small.bg.png";


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
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-end pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          alt="Aman Sahu Background"
          src={HeroImage}
          fill
          className=" hidden md:block object-cover object-[calc(50%-100px)_center]  lg:object-[calc(50%+250px)_center]"
          placeholder="blur"
          priority
        />
        <Image
          alt="Aman Sahu Background"
          src={HeroSmallImage}
          fill
          className=" md:hidden object-cover"
          placeholder="blur"
          priority
        />
        {/* Dark overlays to ensure the white text is perfectly readable on top of the image */}
        <div className="absolute inset-0 bg-background/10 md:bg-background/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
        <div className="max-w-2xl">
          <div className="hero-element flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_white]"></span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest uppercase">
              Available for work
            </span>
          </div>
          <h1 className="hero-element text-gradient-silver font-display-xl text-[60px] md:text-display-xl mb-4 leading-none text-on-surface">
            AMAN <br />
            <span className="text-gradient-silver">SAHU</span>
          </h1>
          <div className="hero-element flex items-center gap-4 mb-8">
            <span className="w-8 h-px bg-outline-variant  hidden sm:block"></span>
            <p className="font-headline-md text-headline-md text-on-surface-variant">
              Mern Developer, Jharkhand
            </p>
          </div>

          <div className=" hidden lg:block hero-element glass-card p-8 rounded-xl border-l-4 border-l-primary mb-12">
            <Quote className="text-primary w-8 h-8 mb-4" />
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed italic opacity-90">
              Crafting seamless web applications that combine technical
              excellence with user-focused experiences. Dedicated to developing
              MERN systems built for performance, growth, and reliability.
            </p>
          </div>

          <div className="hero-element flex flex-wrap gap-6">
            <button className="primary-glow-btn cursor-pointer text-on-primary px-10 py-5 rounded-full font-label-caps text-label-caps uppercase font-extrabold transition-all duration-300">
              Hire Me
            </button>
            <button 
              onClick={() => {
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo("#work");
                } else {
                  const target = document.querySelector("#work");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="border border-outline-variant cursor-pointer text-on-surface px-10 py-5 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:text-primary transition-all duration-300"
            >
              View Projects
            </button>
          </div>
        </div>

        <div className="hero-element mt-20 md:absolute md:bottom-0 md:right-0 flex flex-col items-end">
          <p className="font-display-xl text-headline-lg text-on-surface">
            $20<span className="text-headline-md opacity-60">.00</span>
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
