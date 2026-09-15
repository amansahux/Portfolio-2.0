"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Terminal,
  Database,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ProjectItem } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

interface ProjectDetailViewProps {
  project: ProjectItem;
  allProjects: { slug: string; title: string }[];
}

export default function ProjectDetailView({
  project,
  allProjects,
}: ProjectDetailViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scroll and GSAP reveals
  useEffect(() => {
    // Reset scroll to top immediately on component mount / slug change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    (window as any).lenis = lenis;

    // Force Lenis to start at top 0 immediately
    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.update();
      }
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // GSAP ScrollTrigger Animations
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".stitch-hero-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      // Section reveals
      const sections = gsap.utils.toArray<HTMLElement>(".stitch-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
      ctx.revert();
    };
  }, [project.slug]);

  // Tech icon selector
  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("mongo") || t.includes("database") || t.includes("redis")) {
      return <Database className="w-3.5 h-3.5 text-outline" />;
    }
    if (t.includes("gemini") || t.includes("ai") || t.includes("framer")) {
      return <Sparkles className="w-3.5 h-3.5 text-outline" />;
    }
    if (t.includes("react") || t.includes("next") || t.includes("node") || t.includes("express")) {
      return <Terminal className="w-3.5 h-3.5 text-outline" />;
    }
    return <Code2 className="w-3.5 h-3.5 text-outline" />;
  };

  const nextProjectItem = allProjects.find((p) => p.slug === project.nextProject);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0e0e0e] text-on-surface selection:bg-surface-container-highest selection:text-primary font-body-md"
    >

      {/* MAIN CONTENT CONTAINER */}
      <main className="pt-14 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col gap-16 md:gap-24">
        {/* HEADER / SLUG SWITCHER BAR */}
        <section className="stitch-hero-item w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b hairline-border pb-6 pt-4">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary tracking-widest uppercase transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            BACK TO WORK
          </Link>

          {/* Reusable Slug Switcher Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded border hairline-border overflow-x-auto max-w-full">
            <span className="font-label-caps text-label-caps text-outline px-2 py-1 uppercase hidden md:inline-block">
              PROJECTS:
            </span>
            {allProjects.map((p) => {
              const isActive = p.slug === project.slug;
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className={`font-label-caps text-label-caps px-3 py-1 rounded transition-all whitespace-nowrap ${
                    isActive
                      ? "bg-surface-container-high text-primary border border-white/20 shadow-sm"
                      : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                  }`}
                >
                  [ {p.slug} ]
                </Link>
              );
            })}
          </div>
        </section>

        {/* ========================================================== */}
        {/* SECTION 01: CONTEXT & SCOPE */}
        {/* ========================================================== */}
        <section className="stitch-hero-item flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-label-caps text-label-caps text-secondary tracking-widest uppercase">
              <span className="px-2.5 py-1 rounded bg-surface-container-high border border-white/10 text-primary">
                {project.archiveLabel || `${project.number} // ARCHIVE`}
              </span>
              <span className="text-outline-variant">•</span>
              <span className="text-on-surface-variant">{project.category}</span>
            </div>

            <h1 className="font-headline-lg text-4xl sm:text-5xl md:text-[64px] leading-[1.1] tracking-tight text-primary font-bold">
              {project.title}
            </h1>

            <p className="font-body-md text-base md:text-lg text-secondary-fixed-dim max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Compact Inline Horizontal Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-4 px-5 rounded bg-surface-container-low border hairline-border metallic-bevel">
            <div className="flex flex-col gap-1 border-r hairline-border pr-2">
              <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                CLIENT
              </span>
              <span className="font-body-md text-body-md text-primary font-medium">
                {project.client}
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:border-r hairline-border pr-2">
              <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                TIMELINE
              </span>
              <span className="font-body-md text-body-md text-primary font-medium">
                {project.timeline}
              </span>
            </div>
            <div className="flex flex-col gap-1 border-r hairline-border pr-2">
              <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                ROLE
              </span>
              <span className="font-body-md text-body-md text-primary font-medium truncate">
                {project.role}
              </span>
            </div>
            <div className="flex flex-col gap-1 sm:border-r hairline-border pr-2">
              <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                TEAM
              </span>
              <span className="font-body-md text-body-md text-primary font-medium">
                {project.team}
              </span>
            </div>
            <div className="flex flex-col gap-1 border-r hairline-border pr-2">
              <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                YEAR
              </span>
              <span className="font-body-md text-body-md text-primary font-medium">
                {project.year}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                STATUS
              </span>
              <span className="font-body-md text-body-md text-primary font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
                {project.status}
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SECTION 02: PROCESS & STRATEGY */}
        {/* ========================================================== */}
        <section className="stitch-section flex flex-col gap-8 border-t hairline-border pt-12">
          <div className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
            02 // SYSTEM STRATEGY & STACK
          </div>

          {/* Concise Editorial Two-Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="flex flex-col gap-3">
              <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-semibold tracking-tight">
                THE PROBLEM
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-headline-lg text-2xl md:text-3xl text-primary font-semibold tracking-tight">
                APPROACH & ARCHITECTURE
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Clean Horizontal Minimal Tech Row */}
          <div className="pt-4 border-t hairline-border flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="font-label-caps text-label-caps text-outline uppercase mr-2">
              TECH STACK:
            </span>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="font-label-caps text-label-caps px-3 py-1.5 rounded bg-surface-container-high border hairline-border text-on-surface inline-flex items-center gap-1.5"
              >
                {getTechIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ========================================================== */}
        {/* SECTION 03: VISUALS & MEDIA */}
        {/* ========================================================== */}
        <section className="stitch-section flex flex-col gap-6 border-t hairline-border pt-12">
          <div className="flex items-center justify-between">
            <div className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
              03 // INTERFACE TELEMETRY & MEDIA
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              [ {project.media?.length || 1} CAPTURES ]
            </span>
          </div>

          {/* Dominant Large Widescreen Cinematic Mockup */}
          <div className="w-full rounded-xl overflow-hidden border hairline-border metallic-bevel chrome-glow bg-surface-container-lowest">
            <div className="p-3 bg-surface-container-low border-b hairline-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#353534]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#353534]"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#353534]"></span>
                <span className="font-label-caps text-label-caps text-outline ml-2">
                  {project.telemetryUrl || `${project.slug}.internal/telemetry-live`}
                </span>
              </div>
              <span className="font-label-caps text-label-caps text-secondary-fixed-dim hidden sm:inline-block">
                {project.telemetryStatus || "SYSTEM STATUS: ACTIVE"}
              </span>
            </div>

            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-surface-container overflow-hidden">
              <Image
                src={project.imageSrc || project.media[0]?.src}
                alt={project.imageAlt || project.title}
                fill
                priority
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* Two Balanced Supporting Screenshots (if available) */}
          {project.media && project.media.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.media.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border hairline-border bg-surface-container-low flex flex-col"
                >
                  <div className="p-3 border-b hairline-border flex items-center justify-between font-label-caps text-label-caps text-outline">
                    <span>
                      {item.figureLabel || `FIGURE 1.${idx + 1} — ${item.caption?.toUpperCase() || "INTERFACE CAPTURE"}`}
                    </span>
                    <span>{item.badge || "PRODUCTION"}</span>
                  </div>
                  <div className="aspect-[16/10] bg-surface-container-lowest relative overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="w-full h-full object-cover object-center hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================== */}
        {/* SECTION 04: RESULTS & IMPACT */}
        {/* ========================================================== */}
        <section className="stitch-section flex flex-col gap-8 border-t hairline-border pt-12">
          <div className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
            04 // VERIFIED BENCHMARKS & IMPACT
          </div>

          {/* Minimal Punchy Impact Metrics in Large Silver Typography */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-6">
            {project.results.map((res, idx) => (
              <div key={idx} className="flex flex-col gap-1 border-l-2 border-white/20 pl-4">
                <span className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-primary font-bold tracking-tight">
                  {res.value}
                </span>
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                  {res.label}
                </span>
                <span className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-snug mt-1">
                  {res.description}
                </span>
              </div>
            ))}
          </div>

          {/* Brief Qualitative Takeaway Banner */}
          <div className="p-5 rounded bg-surface-container border hairline-border flex items-start gap-4">
            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex flex-col gap-0.5">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                ENGINEERING OUTCOME
              </span>
              <p className="font-body-md text-body-md text-primary font-medium">
                {project.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SECTION 05: LINKS & ACCESS */}
        {/* ========================================================== */}
        <section className="stitch-section flex flex-col gap-8 border-t hairline-border pt-12 pb-4">
          <div className="flex items-center justify-between">
            <div className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
              05 // DEPLOYMENT & ARTIFACTS
            </div>
            <span className="font-label-caps text-label-caps text-outline">
              {project.versionLabel || "VERSION 2.0-PROD"}
            </span>
          </div>

          {/* Refined Luxury Silver Action Dock */}
          <div className="p-6 md:p-8 rounded-xl bg-surface-container-low border hairline-border metallic-bevel flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <h3 className="font-headline-lg text-2xl text-primary font-semibold">
                Inspect The Live Engine
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Production instances, source repositories, and full project documentation.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Live Button */}
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-[#e8e8e8] text-[#131313] font-label-caps text-label-caps font-semibold tracking-wider uppercase transition-all duration-300 chrome-glow-btn hover:scale-105 flex items-center gap-2"
              >
                <span>OPEN LIVE PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* GitHub Source */}
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded border border-[#a9a9a9]/40 bg-transparent text-[#e5e2e1] hover:border-primary hover:text-primary font-label-caps text-label-caps font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
              >
                <span>VIEW GITHUB SOURCE</span>
                <Code2 className="w-4 h-4" />
              </a>

              {/* Next Project Link if available */}
              {nextProjectItem && (
                <Link
                  href={`/projects/${nextProjectItem.slug}`}
                  className="text-on-surface-variant hover:text-primary font-label-caps text-label-caps tracking-widest uppercase transition-colors underline-offset-4 hover:underline py-2 px-1 flex items-center gap-1"
                >
                  <span>NEXT: {nextProjectItem.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
