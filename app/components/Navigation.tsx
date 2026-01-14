"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/products", label: "products" },
    { href: "/art", label: "art" },
    { href: "/glossary", label: "glossary" },
    { href: "/about", label: "about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-bold text-zinc-900 hover:opacity-70 transition-opacity"
            onClick={closeMenu}
          >
            Sarah Kim
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-900 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-sm font-medium text-zinc-900 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "close" : "menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-200 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div className="h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-3xl font-medium text-zinc-900 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
