import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 bg-cream py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
          <Link href="/#about" className="text-sm text-text-secondary hover:text-crimson-500 transition-colors">
            About
          </Link>
          <Link href="/#team" className="text-sm text-text-secondary hover:text-crimson-500 transition-colors">
            Team
          </Link>
          <Link href="/#partners" className="text-sm text-text-secondary hover:text-crimson-500 transition-colors">
            Partners
          </Link>
          <Link href="/#programs" className="text-sm text-text-secondary hover:text-crimson-500 transition-colors">
            Programs
          </Link>
          <Link href="/resources" className="text-sm text-text-secondary hover:text-crimson-500 transition-colors">
            Resources
          </Link>
          <Link href="/blog" className="text-sm text-text-secondary hover:text-crimson-500 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-crimson-500 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-crimson-500 transition-colors"
            aria-label="Telegram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-crimson-500 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-text-tertiary">
            <a href="#" className="hover:text-crimson-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-crimson-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-crimson-500 transition-colors">Cookie Policy</a>
          </div>
          <p className="text-xs text-text-tertiary">
            © 2025 Project Agora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
