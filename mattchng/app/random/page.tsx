import React from "react";
import Navbar from "@/components/Navbar";

export default function RandomPage() {
    return (
        <div className="max-w-2xl w-full">
            <div className="min-h-screen">
                <Navbar />
                <main className="pt-24 px-6 pb-16 fade-in">
                    <h1 className="heading-primary">Random</h1>
                    <p className="body-text mt-4">other random things here.</p>
                </main>
            </div>
        </div>
    );
}