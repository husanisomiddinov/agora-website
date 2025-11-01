'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-gray-300">
      <nav className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <img
              src="/picture/a6.jpg"
              alt="Project Agora Logo"
              className="h-12 w-auto"
            />
            <span className="text-2xl font-serif text-text-primary">Agora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/#about"
              className="text-sm text-text-secondary hover:text-crimson-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#programs"
              className="text-sm text-text-secondary hover:text-crimson-500 transition-colors"
            >
              Programs
            </Link>
            <Link
              href="/resources"
              className="text-sm text-text-secondary hover:text-crimson-500 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className="text-sm text-text-secondary hover:text-crimson-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#team"
              className="text-sm text-text-secondary hover:text-crimson-500 transition-colors"
            >
              Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 text-text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-1 border-t border-gray-300 mt-4">
            <Link
              href="/#about"
              className="block text-sm text-text-secondary hover:text-crimson-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#programs"
              className="block text-sm text-text-secondary hover:text-crimson-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            <Link
              href="/resources"
              className="block text-sm text-text-secondary hover:text-crimson-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/blog"
              className="block text-sm text-text-secondary hover:text-crimson-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#team"
              className="block text-sm text-text-secondary hover:text-crimson-500 py-2"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
