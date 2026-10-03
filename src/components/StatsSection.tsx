"use client";

import React, { useRef, useEffect, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "10+", label: "Personal Projects" },
  { value: "1+", label: "Years of Learning" },
  { value: "20+", label: "Technologies Learned" },
  { value: "1000+", label: "Hours Coding" },
];

function StatsSectionComponent() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Count-up logic
      const statNumbers = gsap.utils.toArray<HTMLElement>(".stat-number");
      statNumbers.forEach((el) => {
        const targetStr = el.innerText;
        const targetValue = parseInt(targetStr.replace(/[^0-9]/g, ""), 10) || 0;
        const suffix = targetStr.replace(/[0-9]/g, "");

        gsap.fromTo(
          el,
          { innerText: "0" },
          {
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power1.inOut",
            onUpdate: function () {
              el.innerText =
                Math.round(Number(this.targets()[0].innerText)) + suffix;
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-surface-container-low border-y border-white/5"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item">
              <p className="stat-number font-display-xl text-headline-lg text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(StatsSectionComponent);
