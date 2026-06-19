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
      "Designed and developed SNITCH, a scalable multi-role e-commerce platform featuring luxury UI/UX, secure payment integration, order lifecycle management, inventory tracking, wishlist system, and real-time seller analytics.",
    tags: [
      "React js",
      "Express js",
      "MongoDB",
      "Tailwind",
      "Redux Toolkit",
      "Redis",
      "RazorPay",
    ],
    imageSrc: { Snitch },
    imageAlt: "SNITCH",
    demoUrl: "#",
    codeUrl: "#",
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
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    category: "CLOUDOPS PLATFORM",
    title: "CloudSync SaaS Portal",
    description:
      "A real-time DevOps metrics monitoring dashboard built with Next.js, WebSockets, and Redis. Features real-time charting, log streaming, and automated alerts.",
    tags: ["Next.js", "Redis", "WebSockets"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHWofg_JlnWAhufsq5dlUfJNQorSAVmvcw_G6cuzaI318nhKgfdDhMJGn3gmVNQo_Z6lYW3kP51y9B6-JqigpCQtbyjmkWwqzle8sYmI8w-OkBpscQnm4Yj0Pedj1y9miVWFyiJH4C9yptCjSsUii5o6j7KyapJK_8DW__Zl1pNLi1mm_FfA_UqdvxGLJdrHvouPGPXFXLlrnQea0yyvums683TLROGYNwrMf5ixY6Vkh2BAec4JU0CVMDKuR6tvCKHfKyFc-sfSE",
    imageAlt:
      "A futuristic dashboard UI design for a high-end fintech platform, featuring dark-mode aesthetics with glowing silver data visualizations and translucent frosted glass panels.",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    category: "DEVELOPER TOOLING",
    title: "DevStream Platform",
    description:
      "An interactive code playground and live streaming platform for developers. Includes real-time collaborative editing, video integration, and sandboxed execution.",
    tags: ["React.js", "WebRTC", "Docker"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoWqgY487-bk68cXtVTsBGhXfZBHnOVK_vx3r9x4bFoXawb2W6Th15e8e2JUtqaKIVLywvBUOZxbOKG1mUYxfOrX_8IMO2BBN_rhpMgHF0GaBXayySHz3iFwJ-PQ_qvSuz2K7COtBFzyaC9wZMW21m0rn7w5ldBS0Uo9qowSFauYVbCQQgkjEO8tZxn8pfYL6iMY6ibnoiGg222SbhIdImI55FfCs7pgcupHUF8wgFWuBBGpadiPpn0bZlKjfBW4aCvejN16wSUfU",
    imageAlt:
      "A professional SaaS platform landing page design displayed on a sleek laptop screen. The design uses a sophisticated color scheme of ink-black and vibrant silver accents.",
    demoUrl: "#",
    codeUrl: "#",
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
        opacity: 0,
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
