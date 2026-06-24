"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import ProjectsSection from "@/components/projects/ProjectsSection";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  function handleLoading() {
    gsap.to(loaderRef.current, {
      yPercent: -100,
      duration: 1,
      delay: 0.2,
      ease: "power4.inOut",
      onComplete: () => {
        setIsReady(true);
      },
    });
  }
  useEffect(() => {
    if (isReady && (window as any).lenis) {
      (window as any).lenis.start();
    }
  }, [isReady]);

 useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          handleLoading();
        }
        return prev + 1;
      });
    }, 50);

    // Initialize smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Make lenis globally accessible for components like Navbar
    (window as any).lenis = lenis;
    lenis.stop()

    function raf(time: number) {
      lenis.raf(time);
      // Keep GSAP ScrollTrigger in sync with Lenis smooth scrolling
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.update();
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <main className="selection:bg-primary-container selection:text-on-primary overflow-hidden">
     <div
        ref={loaderRef}
        className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden"
      >
        {/* Subtle ambient glow in the background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Number Display */}
         <div className="flex items-baseline mb-6 font-space-grotesk">
            <span className="text-8xl md:text-9xl lg:text-[180px] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 select-none pr-4">
              {Math.min(progress, 100)}
            </span>
            <span className="text-2xl md:text-4xl lg:text-6xl font-light text-white/30 ml-0 md:ml-2 select-none">
              %
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-[200px] md:w-[300px] h-[2px] bg-white/10 rounded-full relative overflow-hidden mb-8">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-white/20 via-white to-white/80 shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
          </div>

          {/* Loading Text */}
          <p className="uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-xs text-white/40 font-light select-none">
            Initializing Experience
          </p>
        </div>
      </div>
     <Navbar isReady={isReady} />
      <Hero isReady={isReady} />
      <About />
      <Technologies />
      <Services />
      <ProjectsSection />
      <StatsSection />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
