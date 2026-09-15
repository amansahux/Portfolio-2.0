import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import ProjectDetailView from "@/components/project-detail/ProjectDetailView";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Aman Sahu`,
      description: project.description,
      images: [
        {
          url: project.imageSrc,
          alt: project.imageAlt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const allProjects = projectsData.map((p) => ({
    slug: p.slug,
    title: p.title,
  }));

  return (
    <>
      <ProjectDetailView project={project} allProjects={allProjects} />
      <Footer />
    </>
  );
}
