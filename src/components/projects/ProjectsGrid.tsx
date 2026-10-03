"use client";

import React, { memo } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";

interface ProjectsGridProps {
  projects: Omit<ProjectProps, "index">[];
  startIndex?: number;
}

function ProjectsGridComponent({
  projects,
  startIndex = 0,
}: ProjectsGridProps) {
  return (
    <div className="space-y-32">
      {projects.map((project, idx) => (
        <ProjectCard
          key={project.slug || project.title || idx}
          {...project}
          index={startIndex + idx}
        />
      ))}
    </div>
  );
}

export default memo(ProjectsGridComponent);
