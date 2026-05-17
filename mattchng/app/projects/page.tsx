/// <reference types="react" />
import React from "react";
import Navbar from "@/components/Navbar";

const projects: {
  title: string;
  date: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}[] = [
  {
    title: "orbit - ai interview prep assistant",
    date: "",
    description: "",
    tags: ["next.js", "fastapi", "python", "google gemini", "livekit"],
    links: [
      { label: "slides", href: "/OrbitPresentation.pdf" },
      { label: "github", href: "https://github.com/axie22/Orbit" },
    ],
  },
  {
    title: "pr analysis github app",
    date: "",
    description: "",
    tags: ["typescript", "react", "playwright", "google gemini"],
    links: [
      { label: "live", href: "https://aura-aolmw.ondigitalocean.app/" },
      { label: "github", href: "https://github.com/axie22/Aura" },
    ],
  },
  {
    title: "marketing genai - ml model",
    date: "",
    description: "",
    tags: ["python", "pytorch", "scikit-learn", "pandas"],
    links: [
      { label: "github", href: "https://github.com/jia-q1/TrustworthyLab_GES_Hackathon" },
    ],
  },
  {
    title: "maps routing project",
    date: "",
    description: "work in progress",
    tags: [],
    links: [],
  },
  {
    title: "social cooking app",
    date: "",
    description: "work in progress",
    tags: [],
    links: [],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 pb-16 fade-in">
          <h1 className="heading-primary">Projects</h1>
          <div className="space-y-5">
            {projects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="flex justify-between items-start gap-4">
                  <p className="item-title">{project.title}</p>
                  <span className="item-sub whitespace-nowrap">{project.date}</span>
                </div>
                <p className="item-sub mt-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="flex gap-4 mt-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-[var(--accent)] hover:opacity-70 transition-opacity text-sm"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
