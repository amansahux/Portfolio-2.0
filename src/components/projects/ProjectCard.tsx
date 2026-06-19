"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectProps {
  category: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  demoUrl?: string;
  codeUrl?: string;
  index: number;
}

export default function ProjectCard({
  category,
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  demoUrl = "#",
  codeUrl = "#",
  index,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply scroll entry animation if the card is in the initial view
    // (first 2 projects) to avoid conflict with expand animations
    if (index < 2) {
      const ctx = gsap.context(() => {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }, cardRef);

      return () => ctx.revert();
    }
  }, [index]);

  const formattedIndex = String(index + 1).padStart(2, "0");
  const isOdd = index % 2 !== 0;

  return (
    <div
      ref={cardRef}
      className="grid md:grid-cols-12 gap-12 lg:gap-20 items-center project-card reveal"
    >
      {/* Image Container */}
      <div
        className={`md:col-span-7 rounded-2xl overflow-hidden project-image-wrapper ${
          isOdd ? "order-1 md:order-2" : ""
        }`}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content Container */}
      <div className={`md:col-span-5 ${isOdd ? "order-2 md:order-1" : ""}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-label-caps text-2xl text-primary font-bold">
            {formattedIndex}
          </span>
          <span className="h-px bg-outline-variant flex-grow"></span>
          <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            {category}
          </span>
        </div>

        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">
          {title}
        </h3>

        <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="border border-outline-variant px-4 py-2 rounded-full text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider backdrop-blur-sm bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-8">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-white transition-colors animated-underline uppercase font-bold tracking-wider"
          >
            LIVE DEMO <ArrowUpRight className="w-[18px] h-[18px]" />
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors animated-underline uppercase font-bold tracking-wider"
          >
            VIEW CODE <Code2 className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>
    </div>
  );
}
