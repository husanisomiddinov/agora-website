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
    <article className="min-h-screen py-20 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">{post.title}</h1>
          <p className="text-sm text-text-tertiary">
            {post.date} • By {post.author}
          </p>
        </header>

        <div className="prose prose-lg max-w-none bg-white p-8 rounded-xl border border-cream-dark">
          <MDXRemote source={post.content} />
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-cream-dark">
            <p className="text-xs text-text-tertiary mb-3">Tags:</p>
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
          </div>
        )}
      </div>
    </article>
  )
}
