"use client";

import React from "react";

export default function ProjectsHeader() {
  return (
    <div className="grid md:grid-cols-12 gap-8 items-end mb-24 reveal">
      <div className="md:col-span-8">
        <p className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em] mb-4">
          Case Studies
        </p>
        <h2 className="font-headline-lg text-[56px] leading-[1.1] font-bold text-on-surface">
          Featured Projects
        </h2>
      </div>
    </div>
  );
}
