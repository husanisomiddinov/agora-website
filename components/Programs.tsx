'use client'

import { motion } from 'framer-motion'

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
    <section id="programs" className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">
            Programs we offer
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Expertly designed programs that adapt to your learning pace and goals, with hands-on projects and real-world applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white border border-cream-dark hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full bg-crimson-500/10 text-crimson-600 text-xs font-medium">
                  {program.level}
                </span>
                <span className="text-xs text-text-secondary">{program.duration}</span>
              </div>

              <h3 className="text-xl font-serif text-text-primary mb-3 group-hover:text-crimson-500 transition-colors">
                {program.title}
              </h3>

              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {program.description}
              </p>

              <div className="space-y-1.5 mb-6">
                <p className="text-xs font-medium text-text-primary mb-2">What you'll learn:</p>
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-crimson-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs text-text-secondary">{highlight}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-4 py-2 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-xs font-medium shadow-lg shadow-crimson-500/20">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 rounded-xl bg-white border border-cream-dark"
        >
          <h3 className="text-xl font-serif text-text-primary mb-3">
            Not sure which program is right for you?
          </h3>
          <p className="text-sm text-text-secondary mb-6 max-w-xl mx-auto">
            Take our free assessment to get personalized program recommendations based on your goals and experience.
          </p>
          <button className="px-6 py-2.5 border-2 border-crimson-500 text-crimson-500 rounded-lg hover:bg-crimson-50 transition-all text-sm font-medium">
            Take Assessment →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
