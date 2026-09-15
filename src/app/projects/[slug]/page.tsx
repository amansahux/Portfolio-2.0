import React from "react";
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <div className="pt-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-on-surface pb-32">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-primary mb-2">{project.category}</p>

        <div className="flex gap-2 mb-8 flex-wrap">
          {project.technologies.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/10 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.imageSrc && (
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="w-full max-w-3xl rounded-xl mb-8"
          />
        )}

        <p className="text-lg mb-8 leading-relaxed text-on-surface-variant">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-black transition"
          >
            Live Demo
          </a>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-outline-variant text-on-surface px-6 py-2 rounded hover:bg-white/10 transition"
          >
            View Code
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
