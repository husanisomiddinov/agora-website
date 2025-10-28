'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-text-primary hover:text-crimson-500 transition-colors">
            Project Agora
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#about"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/#team"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              Team
            </Link>
            <Link
              href="/#partners"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              Partners
            </Link>
            <Link
              href="/#programs"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              Programs
            </Link>
            <Link
              href="/blog"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm font-medium"
            >
              Blog
            </Link>
            <button className="px-6 py-2.5 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-sm font-medium shadow-lg shadow-crimson-500/20">
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-text-primary"
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
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-3 border-t border-gray-200 mt-4">
                <Link
                  href="/#about"
                  className="block text-text-secondary hover:text-text-primary py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#team"
                  className="block text-text-secondary hover:text-text-primary py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/#partners"
                  className="block text-text-secondary hover:text-text-primary py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  href="/#programs"
                  className="block text-text-secondary hover:text-text-primary py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Programs
                </Link>
                <Link
                  href="/blog"
                  className="block text-text-secondary hover:text-text-primary py-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <button className="w-full px-6 py-2.5 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-sm font-medium mt-2 shadow-lg shadow-crimson-500/20">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
