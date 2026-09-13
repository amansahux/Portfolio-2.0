"use client";

import React from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import Link from "next/link";

interface ProjectsGridProps {
  projects: Omit<ProjectProps, "index">[];
  startIndex?: number;
}

export default function ProjectsGrid({
  projects,
  startIndex = 0,
}: ProjectsGridProps) {
  return (
    <div className="space-y-32">
      {projects.map((project, idx) => (
        <Link key={idx} href={`/projects/${project.slug}`}>
        <ProjectCard
          key={idx}
          {...project}
          index={startIndex + idx}
        />
        </Link>
      ))}
    </div>
  );
}
