"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";
import Snitch from "../../assets/Snitch.png";

gsap.registerPlugin(ScrollTrigger);

const defaultProjects = [
  {
    category: "E-COMMERCE SHOP",
    title: "SNITCH",
    description:
      "SNITCH is a full-stack fashion e-commerce platform. Designed with separate buyer and seller experiences, it offers features such as wishlist management, secure checkout, order tracking, inventory management, seller analytics, and revenue insights. While building SNITCH, I focused on creating a scalable architecture, reusable component systems, responsive user interfaces, and production-oriented backend workflows. This project strengthened my understanding of real-world application development, performance optimization, system design, and the challenges involved in transforming an idea into a complete product.",
    tags: [
      "React js",
      "Express js",
      "MongoDB",
      "Tailwind",
      "Redux Toolkit",
      "Redis",
      "RazorPay",
    ],
    imageSrc:
      "https://ik.imagekit.io/sg9dyvpi0/Snitch.png?updatedAt=1781880770155",
    imageAlt: "SNITCH",
    demoUrl: "https://snitch-kd3p.onrender.com",
    codeUrl: "https://github.com/amansahux/Snitch",
  },
  {
    category: "AI POWERED ",
    title: "RESUME BUILDER",
    description:
      "Built an AI-powered Resume Builder that enables users to create professional, ATS-optimized resumes through an intuitive and responsive interface. Integrated AI assistance to generate tailored summaries, skills, and work experience content, improving resume quality and reducing manual effort. Developed features including real-time resume preview, multiple customizable templates, secure data persistence, and PDF export. Focused on delivering a seamless user experience while leveraging modern full-stack technologies and AI capabilities.",
    tags: ["Next js", "TypeScript", "TAILWIND CSS", "GOOGLE GEMINI" ,"Framer Motion"],
    imageSrc:
      "https://ik.imagekit.io/sg9dyvpi0/Resume%20Builder.png?updatedAt=1781882255849",
    imageAlt: "RESUME BUILDER",
    demoUrl: "https://resume-builder-nu-woad-89.vercel.app",
    codeUrl: "https://github.com/amansahux/Resume-Builder",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const extraProjectsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // If projects list length <= 2, show all and hide the button.
  // Otherwise, show first 2 initially and show the button.
  const hasExtraProjects = defaultProjects.length > 2;
  const initialProjects = defaultProjects.slice(0, 2);
  const extraProjects = defaultProjects.slice(2);

  // Header and section ScrollTrigger reveal animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        // opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    if (isAnimating || !extraProjectsRef.current) return;
    setIsAnimating(true);

    if (isExpanded) {
      // Collapse Animation
      const el = extraProjectsRef.current;

      // Animate extra cards outwards first
      gsap.to(".extra-project-item", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "power2.in",
      });

      // Animate container height to 0
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.6,
        delay: 0.15,
        ease: "power3.inOut",
        onComplete: () => {
          setIsExpanded(false);
          setIsAnimating(false);
          // Scroll back to the button or section if off-screen
          if (buttonRef.current) {
            buttonRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
          // Refresh triggers since layout height has decreased
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 100);
        },
      });
    } else {
      // Expand Animation
      setIsExpanded(true);

      // We wait for a tick so that React renders the extra projects DOM elements,
      // allowing scrollHeight calculation.
      setTimeout(() => {
        if (!extraProjectsRef.current) return;
        const el = extraProjectsRef.current;

        // Temporarily set overflow-hidden to calculate natural height
        el.style.display = "block";
        el.style.height = "auto";
        const naturalHeight = el.scrollHeight;

        // Reset to initial animated states
        gsap.set(el, { height: 0, opacity: 0 });
        gsap.set(".extra-project-item", { y: 50, opacity: 0 });

        // Expand height and opacity of container
        gsap.fromTo(
          el,
          { height: 0, opacity: 0 },
          {
            height: naturalHeight,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            onComplete: () => {
              // Set height back to auto so it stays responsive
              el.style.height = "auto";
              setIsAnimating(false);
              // Refresh ScrollTriggers since layout height has increased
              ScrollTrigger.refresh();
            },
          },
        );

        // Staggered fade and rise of the extra cards
        gsap.fromTo(
          ".extra-project-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.1,
            stagger: 0.15,
            ease: "power2.out",
          },
        );
      }, 0);
    }
  };

  return (
    <section ref={sectionRef} className="py-section-gap relative" id="work">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <ProjectsHeader />

        {/* Initial Projects */}
        <ProjectsGrid projects={initialProjects} startIndex={0} />

        {/* Extra Projects (GSAP Animated Wrapper) */}
        {hasExtraProjects && (
          <div
            ref={extraProjectsRef}
            className="overflow-hidden"
            style={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              display: isExpanded ? "block" : "none",
            }}
          >
            {/* Added pt-32 to preserve section gap (space-y-32) between project cards */}
            <div className="pt-32 space-y-32">
              {extraProjects.map((project, idx) => (
                <div key={idx} className="extra-project-item">
                  <ProjectsGrid projects={[project]} startIndex={2 + idx} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explore All Work / Show Less Button */}
        {hasExtraProjects && (
          <div className="mt-32 text-center reveal">
            <button
              ref={buttonRef}
              onClick={handleToggle}
              className="border primary-glow-btn primary-glow-btn:hover text-black px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:bg-white/5 transition-all duration-300 tracking-widest backdrop-blur-md cursor-pointer"
            >
              {isExpanded ? "Show Less" : "Explore All Work"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
