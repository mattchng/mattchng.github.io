import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 pb-16 fade-in">
          <h1 className="heading-primary">hi, I'm matthew</h1>

          <div className="space-y-6">
            <p className="body-text">
              i'm currently a computer science & data science joint major at NYU. i have a passion for building and learning, and exploring how technology can enhance how people learn and work.
            </p>

            <p className="body-text">
              when i'm not building, you'll find me exploring new restaurants, reading, taking photos, or playing various sports.
            </p>

            <p className="body-text">
              there's always more to learn, and i'm always open to exploring new opportunities; feel free to connect with me!
            </p>

            <div className="pt-8 flex gap-8">
              <a href="https://github.com/mattchng" className="hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Image src="/github_logo.svg" alt="GitHub" width="24" height="24" />
              </a>
              <a href="https://www.linkedin.com/in/matthew-cheng4/" className="hover:opacity-70 transition-opacity" target="_blank" rel="noopener noreferrer">
                <Image src="/linkedin_icon.svg" alt="LinkedIn" width="24" height="24" />
              </a>
              <a href="mailto:mc9283@nyu.edu" className="hover:opacity-70 transition-opacity">
                <Image src="/email_icon.svg" alt="Email" width="24" height="24" />
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
