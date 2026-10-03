"use client";

import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  percent: string;
  iconSrc: string;
  iconAlt: string;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name: "MongoDB",
    percent: "80%",
    iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    iconAlt: "MongoDB",
  },
  {
    name: "Express.js",
    percent: "85%",
    iconSrc: "https://cdn.simpleicons.org/express/ffffff",
    iconAlt: "Express.js",
  },
  {
    name: "React.js",
    percent: "85%",
    iconSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    iconAlt: "React.js",
  },
  {
    name: "Node.js",
    percent: "80%",
    iconSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    iconAlt: "Node.js",
  },
  {
    name: "Next.js",
    percent: "75%",
    iconSrc: "https://cdn.simpleicons.org/nextdotjs/ffffff",
    iconAlt: "Next.js",
  },
  {
    name: "TypeScript",
    percent: "80%",
    iconSrc: "https://cdn.simpleicons.org/typescript",
    iconAlt: "TypeScript",
  },
  {
    name: "Redux Toolkit",
    percent: "80%",
    iconSrc: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg",
    iconAlt: "Redux",
  },
  {
    name: "Redis",
    percent: "80%",
    iconSrc: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    iconAlt: "Redis",
  },
  {
    name: "GSAP",
    percent: "70%",
    iconSrc: "https://cdn.simpleicons.org/greensock/88CE02",
    iconAlt: "GSAP",
  },
  {
    name: "GEN AI",
    percent: "60%",
    iconSrc: "https://ik.imagekit.io/sg9dyvpi0/Screenshot_2026-07-28_162233-removebg-preview.png",
    iconAlt: "GEN AI",
  },
  {
    name: "LangChain",
    percent: "60%",
    iconSrc: "https://ik.imagekit.io/sg9dyvpi0/Screenshot_2026-07-28_162452-removebg-preview.png",
    iconAlt: "LangChain",
  },
  {
    name: "Git",
    percent: "85%",
    iconSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    iconAlt: "Git",
  },
  {
    name: "GitHub",
    percent: "75%",
    iconSrc: "https://cdn.simpleicons.org/github/ffffff",
    iconAlt: "GitHub",
  },
  {
    name: "Tailwind CSS",
    percent: "90%",
    iconSrc: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    iconAlt: "Tailwind CSS",
  },
  {
    name: "Docker",
    percent: "85%",
    iconSrc: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    iconAlt: "Docker",
  },
  {
    name: "TanStack Query",
    percent: "85%",
    iconSrc: "https://cdn.simpleicons.org/reactquery",
    iconAlt: "TanStack Query",
  },
  {
    name: "Postman",
    percent: "90%",
    iconSrc: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    iconAlt: "Postman",
  },
  {
    name: "JavaScript",
    percent: "90%",
    iconSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    iconAlt: "JavaScript",
  },
  {
    name: "Socket.IO",
    percent: "85%",
    iconSrc: "https://ik.imagekit.io/sg9dyvpi0/image_b1maohNkD.png",
    iconAlt: "Socket.IO",
  },
  {
    name: "Antigravity",
    percent: "80%",
    iconSrc: "https://antigravity.google/assets/image/antigravity-logo.png",
    iconAlt: "Antigravity",
  },
];

function TechnologiesComponent() {
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

  return (
    <section
      ref={sectionRef}
      className="py-section-gap bg-surface-container-lowest"
      id="skills"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <p className="tech-header font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
            Arsenal
          </p>
          <h2 className="tech-header font-headline-lg text-headline-lg text-on-surface">
            Core Technologies
          </h2>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-fr items-stretch"
        >
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="tech-card glass-card p-8 group hover:bg-white/5 transition-all duration-500 rounded-xl flex flex-col justify-between h-full"
            >
              {/* Icon wrapper with fixed dimensions */}
              <div className="flex justify-center items-center mb-4">
                <div className="w-16 h-16 md:h-20 md:w-20 lg:h-25 lg:w-25 xl:w-30 xl:h-30 flex items-center justify-center">
                  <img
                    src={tech.iconSrc}
                    alt={tech.iconAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h4 className="font-headline-md text-body-lg font-bold mb-2">
                  {tech.name}
                </h4>
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

export default memo(TechnologiesComponent);
