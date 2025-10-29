import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Project Agora',
  description: 'Insights on AI-powered education and the future of learning',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">Blog</h1>
        <p className="text-base text-text-secondary mb-12 max-w-2xl leading-relaxed">
          Insights on AI-powered education and the future of learning
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-6 bg-white rounded-xl border border-cream-dark hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-serif text-text-primary mb-2 group-hover:text-crimson-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-text-tertiary mb-4">
                  {post.date} • By {post.author}
                </p>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">{post.excerpt}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-crimson-500/10 text-crimson-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
