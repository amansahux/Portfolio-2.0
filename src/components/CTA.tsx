"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactModal from "./contact/ContactModal";
import Character from "../assets/Hero.bg.png";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        scale: 0.95,
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-section-gap relative overflow-hidden"
      id="contact"
    >
      <div className="absolute inset-0 z-0">
        <Image
          alt="Background Texture"
          src={Character}
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-[calc(50%-200px)_center] sm:object-[calc(50%-150px)_center]"
        />
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center">
        <h2 className="cta-element font-display-xl text-[48px] md:text-display-xl text-on-surface mb-12">
          LET'S BUILD <span className=" hidden xl:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span> SOMETHING <br />
          <span className="text-gradient-silver">AMAZING <span className=" hidden xl:inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;</span> TOGETHER</span>
        </h2>

        <div className="cta-element flex flex-wrap justify-center gap-8 lg:gap-60 items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="primary-glow-btn cursor-pointer text-on-primary px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-extrabold transition-all duration-300"
          >
            Contact Me
          </button>
          <a
            href="/Aman Resume.pdf"
            download="Aman Resume.pdf"
            className="border cursor-pointer border-outline-variant text-on-surface px-12 py-5 rounded-full font-label-caps text-label-caps uppercase font-bold hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-md"
          >
            Download Resume
          </a>
        </div>

        <div className="cta-element mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 pt-20 border-t border-white/5">
          <div className="text-left">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
              Location
            </p>
            <p className="font-headline-md text-body-lg font-bold text-on-surface">
              Jharkhand, India
            </p>
          </div>
          <div className="text-left">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
              Specialization
            </p>
            <p className="font-headline-md text-body-lg font-bold text-on-surface">
              MERN & UI Architecture
            </p>
          </div>
          <div className="text-left col-span-2 md:col-span-1">
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-2">
              Availability
            </p>
            <p className="font-headline-md text-body-lg font-bold text-primary">
              Open for new projects
            </p>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
