import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Project Agora',
  description: 'Insights on AI-powered education and the future of learning',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-text-primary mb-6 leading-tight">Blog</h1>
        <p className="text-lg text-text-secondary mb-16 max-w-2xl leading-relaxed">
          Insights on AI-powered education and the future of learning
        </p>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-300 pb-12 last:border-0"
            >
              <Link href={`/blog/${post.slug}`} className="group">
                <div className="flex gap-8 items-start">
                  {/* Featured Image Placeholder */}
                  <div className="w-48 h-32 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-serif text-text-primary mb-3 group-hover:text-crimson-500 transition-colors">
                      {post.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-text-tertiary mb-4">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.author}</span>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
