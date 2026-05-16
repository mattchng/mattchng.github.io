"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const pathname = usePathname();
    const tabs = [
        { href: "/about", label: "about" },
        { href: "/experience", label: "experience" },
        { href: "/photography", label: "photography" },
        { href: "/random", label: "random" },
    ];

    return (
        <header className="minimal-navbar">
            <div className="brand">Matthew Cheng</div>
            <nav className="nav-vertical">
                <ThemeToggle />
                {tabs.map((t) => {
                    const active = pathname === t.href;
                    return (
                        <Link
                            key={t.href}
                            href={t.href}
                            className={`nav-link ${active ? 'active' : ''}`}
                        >
                            {t.label}
                        </Link>
                    );
                })}
                <a
                    href="/Matthew_Cheng_Website_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link flex items-center gap-1.5"
                >
                    resume
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline"
                    >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="9" y1="11" x2="15" y2="11" />
                        <line x1="9" y1="14" x2="15" y2="14" />
                        <line x1="9" y1="17" x2="15" y2="17" />

                    </svg>
                </a>
            </nav>
        </header>
    );
}
