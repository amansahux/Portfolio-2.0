"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the text content
      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      // Animate the progress bars
      gsap.from(".skill-progress-bar", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        width: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });

      // Stagger reveal the cards
      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "MERN Stack", percent: "90%" },
    { label: "React/Next", percent: "95%" },
    { label: "Backend Ops", percent: "85%" },
    { label: "Architecture", percent: "80%" },
  ];

  return (
    <section ref={sectionRef} className="py-section-gap" id="about">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="about-text font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
              About Me
            </p>
            <h2 className="about-text font-headline-lg text-headline-lg text-on-surface mb-8">
              My Experience And Expertise With{" "}
              <span className="text-on-surface-variant">Development Tools</span> Used Throughout My Career.
            </h2>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card glass-card p-6 rounded-lg text-center hover:scale-105 transition-transform silver-glow">
                <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-4">
                  {stat.label}
                </h3>
                <p className="text-headline-md font-bold text-on-surface">{stat.percent}</p>
                <div className="w-full bg-surface-container-highest h-1.5 mt-4 rounded-full overflow-hidden">
                  <div 
                    className="skill-progress-bar skill-progress h-full" 
                    style={{ width: stat.percent }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
