"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });

      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: "David Chen",
      role: "CTO, Vortex Tech",
      quote:
        '"Aman\'s ability to take a vague concept and turn it into a high-performing full-stack application is unmatched. His technical depth in Node.js saved our product launch."',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC57a6pAt-R9FyzOG3Ffy5GwF-xDUIhVZwtQhng8LUnIxfaQSnXxL5JQQ4QbbNp7D5UZH6Hj7GHJDf4ym7Gg77s3PnBNPQHrDitcRF6bLF5S26H1aZQBZGvYqC47wUJu3Jd3wUJ7q9k_rhO0wmUcVi4F7KBzfqZFYCP4Wh1OvGtSfmsv6nbvzpLfjuKH6eUrKOpI00fwMeloSQaOKRICHfu0nVlp51NnaKP9AnhqTd7ONlFJflkNwnMx3J4tEBcZo625SVptlN4atA",
      className: "",
    },
    {
      name: "Sarah Miller",
      role: "Product Head, Lumina",
      quote:
        '"The attention to detail in the React implementation was astounding. It wasn\'t just about making it work; it was about making it a premium experience."',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDaK17Y4-2gETb-XNcBSBcwJhBKiWinA9040nyhglpOnA2VeYWvQcSNCrM6vNDtscjCkwZsvViTk0yoUgQU1UQ9rPZ8Mx9fbmSttnYL5GSzjkYqya_7kXSIkjSetwV06k_hSSuwwcKClH6Ph81U3VbduFZvB5wLs8UIYv2PAt2KLY4BNkIgVYyH9awic2AQSL8e7VEg3yHO3f7l8nuZAqMVtAJWekZLFy77bxKbpR2QtVJ1KdvdX1lC--vQMczBHm_tPAzZYIQxSO8",
      className: "border-t-2 border-t-primary",
    },
    {
      name: "James Wilson",
      role: "Founder, DevStream",
      quote:
        '"One of the best MERN developers I\'ve collaborated with. Clean code, great communication, and delivered ahead of schedule."',
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDYrRLXR2K6xdkwQ9HfFPJwrV_WGpzN3v8PKZxf1rulvjTRe0NoH2ADpi_8DkAQd1CXGt6Sykig-L-tAwoDKarBMd5lGMZUCLjIwQYa9BLx5qX_IJ4Ac5anE9hZ_6knTMVuAycKTyAj3-PYbtxyrhAmsK_zUHJ2iYJCTe_aCuPZfVyVAqq5Al48zaVV2GHbz8h6wpvgZ30T1I7ozRAC0snjbiNNpUTGN8doVvOlVxO-HsQ09s-8uQ_zBVcpJ1kldCmePNCBoRCtXI0",
      className: "",
    },
  ];

  return (
    <section ref={sectionRef} className="py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <p className="testimonial-header font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
            Recognition
          </p>
          <h2 className="testimonial-header font-headline-lg text-headline-lg text-on-surface">
            Trusted By Global Brands
          </h2>
        </div>
        
        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`testimonial-card glass-card p-10 rounded-xl relative silver-glow ${testimonial.className}`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden border border-white/10 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-body-lg font-bold text-on-surface">
                    {testimonial.name}
                  </h4>
                  <p className="text-label-caps text-on-surface-variant opacity-60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed italic">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
