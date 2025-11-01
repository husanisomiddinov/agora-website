import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Project Agora`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen pt-32 pb-24 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-text-tertiary mb-8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.author}</span>
          </div>

          {/* Featured Image Placeholder */}
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center mb-12">
            <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-300">
            <p className="text-sm text-text-secondary mb-4">Topics:</p>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm text-text-tertiary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
