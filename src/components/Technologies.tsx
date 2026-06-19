"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileCode2, Network, Server, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".tech-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });

      gsap.from(".tech-progress", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 70%",
        },
        width: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const technologies = [
    { name: "JavaScript", percent: "95%", icon: <FileCode2 className="w-10 h-10 text-on-surface-variant group-hover:text-primary transition-colors" /> },
    { name: "React.js", percent: "92%", icon: <Network className="w-10 h-10 text-on-surface-variant group-hover:text-primary transition-colors" /> },
    { name: "Node.js", percent: "88%", icon: <Server className="w-10 h-10 text-on-surface-variant group-hover:text-primary transition-colors" /> },
    { name: "MongoDB", percent: "85%", icon: <Database className="w-10 h-10 text-on-surface-variant group-hover:text-primary transition-colors" /> },
  ];

  return (
    <section ref={sectionRef} className="py-section-gap bg-surface-container-lowest" id="skills">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <p className="tech-header font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
            Arsenal
          </p>
          <h2 className="tech-header font-headline-lg text-headline-lg text-on-surface">
            Core Technologies
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => (
            <div key={idx} className="tech-card glass-card p-8 group hover:bg-white/5 transition-all duration-500 rounded-xl flex flex-col justify-between aspect-square">
              {tech.icon}
              <div>
                <h4 className="font-headline-md text-body-lg font-bold mb-2">{tech.name}</h4>
                <div className="skill-bar w-full">
                  <div 
                    className="tech-progress skill-progress" 
                    style={{ width: tech.percent }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
