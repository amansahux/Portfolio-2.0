"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileCode2, Network, Server, Database } from "lucide-react";
import ReactLogo from "./logos/ReactLogo";
import ExpressLogo from "./logos/ExpressLogo";
import MongoDBLogo from "./logos/MongoDBLogo";
import JsLogo from "./logos/JsLogo";
import { NodeJsLogo } from "./logos/NodeJsLogo";

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
    {
      name: "MongoDB",
      percent: "80%",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-30 h-30"
        />
      ),
    },
    {
      name: "Express.js",
      percent: "85%",
      icon: (
        <img
          src="https://cdn.simpleicons.org/express/ffffff"
          alt="Express.js"
          className="h-40 w-40"
        />
      ),
    },

    {
      name: "React.js",
      percent: "85%",
      icon: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          alt="React.js"
          className="h-40 w-40"
        />
      ),
    },

    {
      name: "Node.js",
      percent: "80%",
      icon: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="h-40 w-40"
        />
      ),
    },
    {
      name: "Next.js",
      percent: "75%",
      icon: (
        <img
          src="https://cdn.simpleicons.org/nextdotjs/ffffff"
          alt="Next.js"
          className="h-40 w-40"
        />
      ),
    },
    {
      name: "JavaScript",
      percent: "90%",
      icon: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="h-40 w-40"
        />
      ),
    },
    {
      name: "Git",
      percent: "85%",
      icon: (
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
          alt="Git"
          className="h-40 w-40"
        />
      ),
    },
    {
      name: "Redux Toolkit",
      percent: "80%",
      icon: (
        <img
          src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.svg"
          alt="Redux"
          className="h-40 w-40"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      percent: "90%",
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          alt="Tailwind CSS"
          className="h-40 w-40"
        />
      ),
    },

    {
      name: "Redis",
      percent: "80%",
      icon: (
        <img
          src="https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
          alt="Redis"
          className="h-40 w-40"
        />
      ),
    },
    {
      name: "GitHub",
      percent: "75%",
      icon: (
        <img
          src="https://cdn.simpleicons.org/github/ffffff"
          alt="GitHub"
          className="h-40 w-40"
        />
      ),
    },

    {
      name: "GSAP",
      percent: "60%",
      icon: (
        <img
          src="https://cdn.simpleicons.org/greensock/88CE02"
          alt="GSAP"
          className="h-40 w-40"
        />
      ),
    },
  ];

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
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="tech-card glass-card p-8 group hover:bg-white/5 transition-all duration-500 rounded-xl flex flex-col justify-between aspect-square"
            >
              <div className="flex justify-center items-center">
                {" "}
                {tech.icon}
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
