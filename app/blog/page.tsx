import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Project Agora',
  description: 'Insights on AI-powered education and the future of learning',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-display font-serif mb-4">Blog</h1>
        <p className="text-body-lg text-text-secondary mb-12">
          Insights on AI-powered education and the future of learning
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-8 bg-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-h2 mb-2 group-hover:text-crimson-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-small text-text-tertiary mb-4">
                  {post.date} • By {post.author}
                </p>
                <p className="text-body text-text-secondary mb-4">{post.excerpt}</p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-crimson-50 text-crimson-500 rounded-full text-small"
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
