import React from "react";
import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 pb-16 fade-in">
          <h1 className="heading-primary">Experience</h1>

          {/* WORK SECTION */}
          <section className="mb-16">
            <h2 className="section-label">WORK</h2>
            <div className="space-y-9">
              {/* Work Entry 1 */}
              <div>
                <p className="item-title">
                  built internal business analysis tools at Johnson & Johnson
                </p>
                <p className="item-sub">may 2025 – aug 2025</p>
              </div>

              {/* Work Entry 2 */}
              <div>
                <p className="item-title">
                  resolved software and hardware issues for faculty at NYU Tisch
                </p>
                <p className="item-sub">july 2024 – dec 2024</p>
              </div>

              {/* Work Entry 3 */}
              <div>
                <p className="item-title">
                  strategized and created marketing campaigns at MlVentures
                </p>
                <p className="item-sub">jun 2023 – aug 2023</p>
              </div>
            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section className="mb-16">
            <h2 className="section-label">PROJECTS</h2>
            <div className="space-y-10">
              {/* Project 1 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="item-title">maps routing project</p>
                  <p className="item-sub">work in progress</p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="item-title">orbit - ai interview prep assistant</p>
                  <p className="item-sub">next.js, fastapi, python, google gemini, livekit</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="/OrbitPresentation.pdf" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    slides
                  </a>
                  <a href="https://github.com/axie22/Orbit" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="item-title">pr analysis github app</p>
                  <p className="item-sub">typescript, react, playwright, google gemini</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://aura-aolmw.ondigitalocean.app/" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    live
                  </a>
                  <a href="https://github.com/axie22/Aura" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="item-title">marketing genai - ml model</p>
                  <p className="item-sub">python, pytorch, scikitlearn, pandas</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://github.com/jia-q1/TrustworthyLab_GES_Hackathon" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* LEADERSHIP SECTION */}
          <section className="mb-16">
            <h2 className="section-label">LEADERSHIP</h2>
            <div className="space-y-8">
              {/* Leadership Entry 1 */}
              <div>
                <p className="item-title">NYU Asian Cultural Union</p>
                <p className="item-sub">vice president of events, graphics lead</p>
              </div>
              {/* Leadership Entry 2 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="item-title">Tech@NYU Techtreks - Spocial</p>
                  <p className="item-sub">product manager</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://drive.google.com/drive/u/2/folders/1MP7ndfQHxM3BjPeGe9zSXEq2DNLV5b0D" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    figma
                  </a>
                  <a href="https://github.com/Spocial/Spocial" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    github
                  </a>
                </div>
              </div>            </div>
          </section>

          {/* HACKATHONS SECTION */}
          <section className="mb-16">
            <h2 className="section-label">HACKATHONS</h2>
            <div className="space-y-8">
              {/* Hackathon 1 */}
              <div className="flex justify-between items-start">
                <div>
                  <p className="item-title">marketing genai</p>
                  <p className="item-sub">#3 @ ges ucla hackathon</p>
                </div>
                <div className="flex gap-4 text-sm ml-4">
                  <a href="https://docs.google.com/presentation/d/1w_egcLTpV4xsWPrweq3rg8LH0nVrfPZ-32UfI5d9zoA/edit?usp=sharing" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    slides
                  </a>
                  <a href="https://dorahacks.io/hackathon/trustworthy-ai-gesucla/round-1-result-(top-5)" className="text-[var(--accent)] hover:opacity-70 transition-colors whitespace-nowrap">
                    dorahacks
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
