export default function CTA() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
          Ready to transform your learning journey?
        </h2>
        <p className="text-lg text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands of learners already experiencing personalized, AI-powered education.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="#"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Get Started Free →
          </a>
          <a
            href="#"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Contact Sales →
          </a>
        </div>
        <p className="mt-8 text-sm text-text-tertiary">
          No credit card required · Start learning in minutes
        </p>
      </div>
    </section>
  )
}
