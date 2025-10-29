'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const books = [
  {
    title: "The Future of AI-Powered Learning",
    author: "Project Agora Team",
    description: "A comprehensive guide to understanding how artificial intelligence is transforming education and creating personalized learning experiences for every student.",
    downloadLink: "#",
    coverImage: "/books/ai-learning.jpg", // You'll need to add this image
    pages: "280 pages",
    format: "PDF, EPUB",
    size: "5.2 MB"
  },
  // You can add more books here later
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">
            Free Resources
          </h1>
          <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
            Access our collection of free educational materials, including books, guides, and learning resources designed to help you on your educational journey.
          </p>
        </motion.div>

        {/* Books Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-serif text-text-primary mb-6 leading-tight">
            Books
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white border border-cream-dark rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Book Cover Placeholder */}
                <div className="w-full h-64 bg-gradient-to-br from-crimson-500 to-crimson-600 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-serif text-text-primary mb-2 group-hover:text-crimson-500 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-xs text-crimson-500 font-medium mb-3">
                    by {book.author}
                  </p>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4 text-xs text-text-tertiary">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {book.pages}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {book.format}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-2.5 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-sm font-medium shadow-lg shadow-crimson-500/20"
                  >
                    Download Free →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { title: "Expert Advice", icon: "💡", description: "Coming soon" },
            { title: "Podcasts", icon: "🎙️", description: "Coming soon" },
            { title: "Free Lessons", icon: "📚", description: "Coming soon" }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-cream-dark rounded-xl text-center"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-serif text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 bg-white border border-cream-dark rounded-xl"
        >
          <h3 className="text-xl font-serif text-text-primary mb-3">
            Want to stay updated?
          </h3>
          <p className="text-sm text-text-secondary mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter to get notified when we release new resources, books, and learning materials.
          </p>
          <button className="px-6 py-2.5 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-sm font-medium shadow-lg shadow-crimson-500/20">
            Subscribe Now →
          </button>
        </motion.div>
      </div>
    </div>
  )
}
