export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-text-primary mb-8 leading-tight tracking-tight">
          The future of{' '}
          <span className="text-crimson-500">learning</span>{' '}
          is here
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-3xl">
          Project Agora is a knowledge institution pioneering personalized, AI-powered education that evolves with every student.
        </p>

        {/* Simple CTA */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#programs"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Explore Programs →
          </a>
          <a
            href="/blog"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Read Our Blog →
          </a>
        </div>

        {/* Stats - Minimal Version */}
        <div className="border-t border-gray-300 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="text-4xl font-serif text-text-primary mb-2">10K+</div>
              <div className="text-sm text-text-secondary">Active learners worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-text-primary mb-2">95%</div>
              <div className="text-sm text-text-secondary">Student success rate</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-text-primary mb-2">50+</div>
              <div className="text-sm text-text-secondary">Expert-designed programs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
