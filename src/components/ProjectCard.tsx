"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
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
  reversed?: boolean;
}

export default function ProjectCard({
  category,
  title,
  description,
  tags,
  imageSrc,
  imageAlt,
  reversed = false,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="grid md:grid-cols-2 gap-12 items-center">
      <div className={`rounded-2xl overflow-hidden glass-card group ${reversed ? "md:order-2" : ""}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={500}
          className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className={`${reversed ? "md:order-1 md:pr-12" : "md:pl-12"}`}>
        <span className="font-label-caps text-label-caps text-primary mb-4 block">
          {category}
        </span>
        <h3 className="font-headline-lg text-headline-lg text-on-surface mb-6">
          {title}
        </h3>
        <p className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
          {description}
        </p>
        
        <div className="flex gap-4 mb-10 flex-wrap">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-surface-container-high px-4 py-1.5 rounded-full text-label-caps font-label-caps text-on-surface-variant uppercase">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-6">
          <button className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:gap-4 transition-all">
            LIVE DEMO <ArrowUpRight className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-primary transition-all">
            VIEW CODE <Code2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
