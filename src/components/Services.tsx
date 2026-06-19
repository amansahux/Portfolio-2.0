"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CodeXml, Layers, Gauge } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end MERN development focusing on scalability, security, and ultra-fast performance metrics.",
      icon: <CodeXml className="w-8 h-8 group-hover:text-on-primary transition-colors" />,
    },
    {
      title: "UI Implementation",
      description: "Translating complex Figma designs into pixel-perfect, responsive React components with Tailwind CSS.",
      icon: <Layers className="w-8 h-8 group-hover:text-on-primary transition-colors" />,
    },
    {
      title: "Performance Audit",
      description: "Deep-dive optimization of Lighthouse scores, reducing TTI, and refining Core Web Vitals for maximum SEO.",
      icon: <Gauge className="w-8 h-8 group-hover:text-on-primary transition-colors" />,
    },
  ];

  return (
    <section ref={sectionRef} className="py-section-gap relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <p className="service-header font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
              What I Offer
            </p>
            <h2 className="service-header font-headline-lg text-headline-lg text-on-surface">
              High-Performance Digital Solutions
            </h2>
          </div>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="service-card p-10 glass-card rounded-xl group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-surface-container-high rounded-full flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                {service.icon}
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
