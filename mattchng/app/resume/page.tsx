import React from "react";
import Navbar from "@/components/Navbar";

export default function ResumePage() {
  return (
    <div className="max-w-2xl w-full">
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 px-6 fade-in">
          <h1 className="heading-primary">Resume</h1>
          <p className="body-text mt-4">placeholder for resume content.</p>
        </main>
      </div>
    </div>
  );
}
