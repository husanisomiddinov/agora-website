export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
            Building the future of learning
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Named after the ancient Greek gathering places where knowledge was shared freely,
            Project Agora continues this tradition in the digital age.
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-12">
          <div className="border-l-2 border-crimson-500 pl-6">
            <h3 className="text-xl font-serif text-text-primary mb-3">Our Vision</h3>
            <p className="text-base text-text-secondary leading-relaxed">
              A world where every person has access to personalized, world-class education that adapts to their unique needs and aspirations.
            </p>
          </div>

          <div className="border-l-2 border-crimson-500 pl-6">
            <h3 className="text-xl font-serif text-text-primary mb-3">Our Approach</h3>
            <p className="text-base text-text-secondary leading-relaxed">
              We combine cutting-edge AI with proven learning science to create experiences that are both deeply personal and rigorously effective.
            </p>
          </div>

          <div className="border-l-2 border-crimson-500 pl-6">
            <h3 className="text-xl font-serif text-text-primary mb-3">Our Commitment</h3>
            <p className="text-base text-text-secondary leading-relaxed">
              Every decision we make prioritizes learner success, accessibility, and the advancement of human knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
