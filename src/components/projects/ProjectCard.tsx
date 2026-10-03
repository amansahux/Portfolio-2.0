"use client";

import React, { useRef, useEffect, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectProps {
  slug?: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  technologies?: string[];
  imageSrc: string;
  imageAlt: string;
  demoUrl?: string;
  codeUrl?: string;
  index: number;
}

function ProjectCardComponent({
  slug,
  category,
  title,
  description,
  tags,
  technologies,
  imageSrc,
  imageAlt,
  index,
}: ProjectProps) {
  const displayTags = tags || technologies || [];
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
        {slug ? (
          <Link href={`/projects/${slug}`} className="block overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 ease-out cursor-pointer"
            />
          </Link>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}
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
          {slug ? (
            <Link href={`/projects/${slug}`} className="hover:text-primary transition-colors cursor-pointer">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        <p className="font-body-lg text-on-surface-variant mb-10 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {displayTags.map((tag, idx) => (
            <span
              key={idx}
              className="border border-outline-variant px-4 py-2 rounded-full text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider backdrop-blur-sm bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCardComponent);
