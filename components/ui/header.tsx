"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

interface HeaderProps {
  onBookConsultation: () => void;
}

export default function Header({ onBookConsultation }: HeaderProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define navigation links in a list
  const navLinks = [
    { text: "Solutions", href: "/#how-we-can-help" },
    { text: "Process", href: "/#process" },
    { text: "Integrations", href: "/#integrations" },
    { text: "Results", href: "/#testimonials" },
    { text: "About", href: "/#about" },
    { text: "Faqs", href: "/#faqs" },
    { text: "Contact", href: "/#contact" },
  ];
  


  return (
    <header className="sticky top-0 z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Hamburger menu button */}
          <button
            className="block text-gray-300 md:hidden"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden gap-3 md:flex">
            {navLinks.map(({ text, href }) => (
              <Link
                key={text}
                href={href}
                className="text-gray-300 transition hover:text-gray-200"
              >
                {text}
              </Link>
            ))}
          </nav>

          {/* Desktop sign in links */}
          <ul className="hidden flex-1 items-center justify-end gap-3 md:flex">
            <li>
              <button
                className="btn-sm group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto cursor-pointer"
                onClick={onBookConsultation}
              >
                <span className="relative inline-flex items-center">
                  Free AI Consultation
                </span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="mt-2 flex flex-col gap-3 bg-gray-800 p-4 md:hidden">
            {navLinks.map(({ text, href }) => (
              <Link
                key={text}
                href={href}
                className="text-gray-300 transition hover:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {text}
              </Link>
            ))}
            <Link
              href="#"
              className="text-gray-300 transition hover:text-gray-200"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation();
              }}
            >
              Free AI Consultation
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
