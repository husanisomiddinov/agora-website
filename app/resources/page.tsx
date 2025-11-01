const books = [
  {
    title: "The Future of AI-Powered Learning",
    author: "Project Agora Team",
    description: "A comprehensive guide to understanding how artificial intelligence is transforming education and creating personalized learning experiences for every student.",
    downloadLink: "#",
    pages: "280 pages",
    format: "PDF, EPUB",
    size: "5.2 MB"
  },
  // You can add more books here later
]

export default function ResourcesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-text-primary mb-6 leading-tight">
            Free Resources
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Access our collection of free educational materials, including books, guides, and learning resources designed to help you on your educational journey.
          </p>
        </div>

        {/* Books Section */}
        <div className="space-y-12 mb-16">
          {books.map((book, index) => (
            <article key={index} className="border-b border-gray-300 pb-12 last:border-0">
              <div className="flex gap-8 items-start">
                {/* Book Cover Placeholder */}
                <div className="w-32 h-44 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl font-serif text-text-primary mb-2">
                    {book.title}
                  </h2>
                  <p className="text-sm text-text-tertiary mb-4">
                    by {book.author}
                  </p>
                  <p className="text-base text-text-secondary mb-6 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-text-tertiary">
                    <span>{book.pages}</span>
                    <span>·</span>
                    <span>{book.format}</span>
                    <span>·</span>
                    <span>{book.size}</span>
                  </div>

                  <a
                    href={book.downloadLink}
                    className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
                  >
                    Download Free →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="pt-12 border-t border-gray-300">
          <h3 className="text-xl font-serif text-text-primary mb-4">
            Want to stay updated?
          </h3>
          <p className="text-base text-text-secondary mb-6 max-w-xl">
            Subscribe to our newsletter to get notified when we release new resources, books, and learning materials.
          </p>
          <a
            href="#"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Subscribe Now →
          </a>
        </div>
      </div>
    </div>
  )
}
