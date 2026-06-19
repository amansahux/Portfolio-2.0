"use client";

import React from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";

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
        <ProjectCard
          key={idx}
          {...project}
          index={startIndex + idx}
        />
      ))}
    </div>
  );
}
