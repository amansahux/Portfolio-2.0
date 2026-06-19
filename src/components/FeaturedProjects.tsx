"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      category: "E-COMMERCE ENGINE",
      title: "LuxeCart Headless Platform",
      description:
        "A high-performance headless commerce solution built with Next.js, Stripe, and Sanity.IO. Featuring micro-animations and zero-latency page transitions.",
      tags: ["Next.js", "Redux Toolkit", "Tailwind"],
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHWofg_JlnWAhufsq5dlUfJNQorSAVmvcw_G6cuzaI318nhKgfdDhMJGn3gmVNQo_Z6lYW3kP51y9B6-JqigpCQtbyjmkWwqzle8sYmI8w-OkBpscQnm4Yj0Pedj1y9miVWFyiJH4C9yptCjSsUii5o6j7KyapJK_8DW__Zl1pNLi1mm_FfA_UqdvxGLJdrHvouPGPXFXLlrnQea0yyvums683TLROGYNwrMf5ixY6Vkh2BAec4JU0CVMDKuR6tvCKHfKyFc-sfSE",
      imageAlt:
        "A futuristic dashboard UI design for a high-end fintech platform, featuring dark-mode aesthetics with glowing silver data visualizations and translucent frosted glass panels.",
      reversed: false,
    },
    {
      category: "SAAS DASHBOARD",
      title: "MetricsX Analytics",
      description:
        "Real-time data visualization dashboard for marketing teams. Implemented WebSocket connections for live updates and complex D3.js chart integrations.",
      tags: ["MongoDB", "Express", "Socket.io"],
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBoWqgY487-bk68cXtVTsBGhXfZBHnOVK_vx3r9x4bFoXawb2W6Th15e8e2JUtqaKIVLywvBUOZxbOKG1mUYxfOrX_8IMO2BBN_rhpMgHF0GaBXayySHz3iFwJ-PQ_qvSuz2K7COtBFzyaC9wZMW21m0rn7w5ldBS0Uo9qowSFauYVbCQQgkjEO8tZxn8pfYL6iMY6ibnoiGg222SbhIdImI55FfCs7pgcupHUF8wgFWuBBGpadiPpn0bZlKjfBW4aCvejN16wSUfU",
      imageAlt:
        "A professional SaaS platform landing page design displayed on a sleek laptop screen. The design uses a sophisticated color scheme of ink-black and vibrant silver accents.",
      reversed: true,
    },
  ];

  return (
    <section ref={sectionRef} className="py-section-gap" id="work">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <p className="projects-header font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
            Case Studies
          </p>
          <h2 className="projects-header font-headline-lg text-headline-lg text-on-surface">
            Featured Projects
          </h2>
        </div>
        
        <div className="space-y-20">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="projects-header primary-glow-btn text-on-primary px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-extrabold transition-all duration-300">
            See All My Work
          </button>
        </div>
      </div>
    </section>
  );
}
