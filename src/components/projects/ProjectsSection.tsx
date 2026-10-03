"use client";

import React, { useRef, useState, useEffect, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsGrid from "./ProjectsGrid";
import { projectsData as defaultProjects } from "../../data/projects";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_PROJECTS = defaultProjects.slice(0, 2);
const EXTRA_PROJECTS = defaultProjects.slice(2);
const HAS_EXTRA_PROJECTS = defaultProjects.length > 2;

function ProjectsSectionComponent() {
  const sectionRef = useRef<HTMLElement>(null);
  const extraProjectsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

      // Wait for React to render extra projects DOM elements before calculating height
      setTimeout(() => {
        if (!extraProjectsRef.current) return;
        const el = extraProjectsRef.current;

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
              el.style.height = "auto";
              setIsAnimating(false);
              ScrollTrigger.refresh();
            },
          }
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
          }
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
        <ProjectsGrid projects={INITIAL_PROJECTS} startIndex={0} />

        {/* Extra Projects (GSAP Animated Wrapper) */}
        {HAS_EXTRA_PROJECTS && (
          <div
            ref={extraProjectsRef}
            className="overflow-hidden"
            style={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
              display: isExpanded ? "block" : "none",
            }}
          >
            {/* Added pt-32 to preserve section gap between project cards */}
            <div className="pt-32 space-y-32">
              {EXTRA_PROJECTS.map((project, idx) => (
                <div key={project.slug || idx} className="extra-project-item">
                  <ProjectsGrid projects={[project]} startIndex={2 + idx} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Explore All Work / Show Less Button */}
        {HAS_EXTRA_PROJECTS && (
          <div className="mt-32 text-center reveal">
            <button
              ref={buttonRef}
              onClick={handleToggle}
              className="border primary-glow-btn text-black px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:bg-white/5 transition-all duration-300 tracking-widest backdrop-blur-md cursor-pointer"
            >
              {isExpanded ? "Show Less" : "Explore All Work"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default memo(ProjectsSectionComponent);
