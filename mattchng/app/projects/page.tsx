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
      title: "Orbit - ai interview prep assistant",
      date: "Sep 2025 - Present",
      description: "•	Architected full-stack, Dockerized microservices platform deployed to the cloud, totaling ~5,000 LOC across 24 commits \n•	Engineered real-time TTS voice pipeline using LiveKit and Google Cloud, achieving 2.83s average end-to-end latency \n•	Fine-tuned Gemini 2.5 model, improving accuracy and reducing average response length from 254 to 138 characters \n•	Built RAG system over DynamoDB with semantic search, reducing hallucinated code leakage from 17.5% (base) to 5.0% ",
      tags: ["next.js", "fastapi", "python", "google gemini", "livekit", "Vertex AI (Gemini)", "Docker"],
      links: [
        { label: "slides", href: "/OrbitPresentation.pdf" },
        { label: "github", href: "https://github.com/axie22/Orbit" },
      ],
    },
    {
      title: "Pr analysis github app",
      date: "Feb 2025 - Present",
      description: "App that streamlines code review by showing visual changes directly into video in PR",
      tags: ["typescript", "react", "playwright", "google gemini"],
      links: [
        { label: "live", href: "https://aura-aolmw.ondigitalocean.app/" },
        { label: "github", href: "https://github.com/axie22/Aura" },
      ],
    },
    {
      title: "Marketing genai - ml model",
      date: "Summer 2023",
      description: "Machine learning model for marketing analysis",
      tags: ["python", "pytorch", "scikit-learn", "pandas"],
      links: [
        { label: "github", href: "https://github.com/jia-q1/TrustworthyLab_GES_Hackathon" },
      ],
    },
    {
      title: "Maps routing project",
      date: "Present",
      description: "work in progress - NYC Subway Dynamic Mapper",
      tags: [],
      links: [],
    },
    {
      title: "Social cooking app",
      date: "Present",
      description: "work in progress - a social media platform for sharing recipes and cooking tips",
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
