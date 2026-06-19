"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
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
    <main className="selection:bg-primary-container selection:text-on-primary overflhidden">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Services />
      <FeaturedProjects />
      <StatsSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
