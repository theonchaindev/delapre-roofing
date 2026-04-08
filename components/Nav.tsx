"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? "bg-transparent"
          : "bg-dark-900/95 backdrop-blur-md border-b border-dark-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="https://cdn.prod.website-files.com/6495714d052e260635f92d73/6495adf8a369ca9b9e409fd2_White%20logo%20-%20no%20background.svg"
            alt="Delapre Roofing"
            width={240}
            height={64}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-gold-400"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-dark-900 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Schedule a Meeting
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-dark-800 border-t border-dark-600 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm ${pathname === l.href ? "text-gold-400" : "text-neutral-300"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex w-fit items-center bg-gold-500 text-dark-900 text-sm font-semibold px-5 py-2.5 rounded-lg"
          >
            Schedule a Meeting
          </Link>
        </div>
      </div>
    </header>
  );
}
