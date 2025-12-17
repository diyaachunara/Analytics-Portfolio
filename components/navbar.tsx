"use client"

import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-foreground/5 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent"
            >
              DC
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground-secondary hover:text-accent transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col space-y-1">
            <span className={`h-0.5 w-6 bg-accent transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 w-6 bg-accent ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-accent transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-foreground-secondary hover:text-accent transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
