import Link from 'next/link'

const featuredPosts = [
  {
    slug: "ai-education-future",
    title: "The Future of AI-Powered Education",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we learn and teach in the 21st century.",
    author: "Project Agora Team",
    date: "2025-01-15",
  },
  {
    slug: "personalized-learning",
    title: "Why Personalized Learning Matters",
    excerpt: "Understanding the importance of adaptive education systems that cater to individual learning styles and paces.",
    author: "Dr. Sarah Chen",
    date: "2025-01-10",
  },
  {
    slug: "getting-started",
    title: "Getting Started with Project Agora",
    excerpt: "A comprehensive guide to beginning your learning journey with Project Agora's AI-powered platform.",
    author: "Alex Rodriguez",
    date: "2025-01-05",
  }
]

export default function BlogPreview() {
  return (
    <section className="py-24 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
              Latest insights
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Thoughts on education, AI, and the future of learning.
            </p>
          </div>
        </div>

        {/* Posts List */}
        <div className="space-y-12">
          {featuredPosts.map((post) => (
            <article key={post.slug} className="border-b border-gray-300 pb-12 last:border-0">
              <Link href={`/blog/${post.slug}`} className="group">
                <h3 className="text-2xl font-serif text-text-primary mb-3 group-hover:text-crimson-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-base text-text-secondary mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-text-tertiary">
                  <span>{post.author}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <Link
            href="/blog"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
