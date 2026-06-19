"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="selection:bg-primary-container selection:text-on-primary overflow-x-hidden">
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
