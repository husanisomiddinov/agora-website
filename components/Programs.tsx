const programs = [
  {
    title: "Agora Regular",
    duration: "16 weeks",
    level: "Advanced",
    description: "Master the fundamentals of artificial intelligence and machine learning. Perfect for those starting their AI journey.",
    highlights: ["Creative Writing Curriculum", "Personal Hours", "Teacher Assistants", "College Essay Guidance"]
  },
  {
    title: "Agora College",
    duration: "16 weeks",
    level: "Advanced",
    description: "Deep dive into advanced ML techniques, deep learning architectures, and real-world applications.",
    highlights: ["Deep Learning", "NLP & Computer Vision", "Model Optimization", "Production Deployment"]
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
            Programs we offer
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            Expertly designed programs that adapt to your learning pace and goals, with hands-on projects and real-world applications.
          </p>
        </div>

        {/* Programs List */}
        <div className="space-y-12">
          {programs.map((program, index) => (
            <article key={index} className="border-b border-gray-300 pb-12 last:border-0">
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="text-2xl font-serif text-text-primary">
                  {program.title}
                </h3>
                <span className="text-sm text-text-tertiary">
                  {program.duration} · {program.level}
                </span>
              </div>

              <p className="text-base text-text-secondary mb-6 leading-relaxed">
                {program.description}
              </p>

              <div className="mb-6">
                <p className="text-sm font-medium text-text-primary mb-3">Includes:</p>
                <ul className="space-y-2">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-text-secondary pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-crimson-500">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#"
                className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
              >
                Learn more about {program.title} →
              </a>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <h3 className="text-xl font-serif text-text-primary mb-4">
            Not sure which program is right for you?
          </h3>
          <p className="text-base text-text-secondary mb-6 max-w-xl">
            Take our free assessment to get personalized program recommendations based on your goals and experience.
          </p>
          <a
            href="#"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Take Assessment →
          </a>
        </div>
      </div>
    </section>
  )
}
