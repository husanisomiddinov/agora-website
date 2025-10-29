'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const featuredPosts = [
  {
    slug: "ai-education-future",
    title: "The Future of AI-Powered Education",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we learn and teach in the 21st century.",
    author: "Project Agora Team",
    date: "2025-01-15",
    tags: ["AI", "Education", "Innovation"]
  },
  {
    slug: "personalized-learning",
    title: "Why Personalized Learning Matters",
    excerpt: "Understanding the importance of adaptive education systems that cater to individual learning styles and paces.",
    author: "Dr. Sarah Chen",
    date: "2025-01-10",
    tags: ["Learning", "Technology"]
  },
  {
    slug: "getting-started",
    title: "Getting Started with Project Agora",
    excerpt: "A comprehensive guide to beginning your learning journey with Project Agora's AI-powered platform.",
    author: "Alex Rodriguez",
    date: "2025-01-05",
    tags: ["Guide", "Getting Started"]
  }
]

export default function BlogPreview() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">
              Latest insights
            </h2>
            <p className="text-base text-text-secondary max-w-2xl leading-relaxed">
              Thoughts on education, AI, and the future of learning.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:block px-6 py-3 border-2 border-crimson-500 text-crimson-500 rounded-lg hover:bg-crimson-50 transition-all text-sm font-medium"
          >
            View All Posts →
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="p-6 rounded-lg bg-cream border border-cream-dark hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    {post.tags && post.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-crimson-500/10 text-crimson-600 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-serif text-text-primary mb-3 group-hover:text-crimson-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-text-secondary mb-4 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-text-secondary pt-4 border-t border-cream-dark">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center md:hidden"
        >
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-sm font-medium shadow-lg shadow-crimson-500/20"
          >
            View All Posts →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
