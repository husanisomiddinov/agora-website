'use client'

import { motion } from 'framer-motion'

const programs = [
  {
    title: "AI Foundations",
    duration: "12 weeks",
    level: "Beginner",
    description: "Master the fundamentals of artificial intelligence and machine learning. Perfect for those starting their AI journey.",
    highlights: ["Neural Networks Basics", "Python Programming", "Data Science Fundamentals", "Hands-on Projects"]
  },
  {
    title: "Advanced Machine Learning",
    duration: "16 weeks",
    level: "Advanced",
    description: "Deep dive into advanced ML techniques, deep learning architectures, and real-world applications.",
    highlights: ["Deep Learning", "NLP & Computer Vision", "Model Optimization", "Production Deployment"]
  },
  {
    title: "Data Science Mastery",
    duration: "14 weeks",
    level: "Intermediate",
    description: "Comprehensive program covering data analysis, visualization, and statistical modeling for data-driven decision making.",
    highlights: ["Statistical Analysis", "Data Visualization", "Big Data Tools", "Business Intelligence"]
  },
]

export default function Programs() {
  return (
    <section id="programs" className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-text-primary mb-6 leading-tight">
            Programs we offer
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Expertly designed programs that adapt to your learning pace and goals, with hands-on projects and real-world applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-crimson-500/10 text-crimson-600 text-xs font-medium">
                  {program.level}
                </span>
                <span className="text-sm text-text-secondary">{program.duration}</span>
              </div>

              <h3 className="text-2xl font-serif text-text-primary mb-4 group-hover:text-crimson-500 transition-colors">
                {program.title}
              </h3>

              <p className="text-base text-text-secondary mb-6 leading-relaxed">
                {program.description}
              </p>

              <div className="space-y-2 mb-8">
                <p className="text-sm font-medium text-text-primary mb-3">What you'll learn:</p>
                {program.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-crimson-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-text-secondary">{highlight}</span>
                  </div>
                ))}
              </div>

              <button className="w-full px-6 py-3 bg-crimson-500 text-white rounded-xl hover:bg-crimson-600 transition-all text-sm font-medium shadow-lg shadow-crimson-500/20">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-12 rounded-2xl bg-white border border-gray-200"
        >
          <h3 className="text-3xl font-serif text-text-primary mb-4">
            Not sure which program is right for you?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Take our free assessment to get personalized program recommendations based on your goals and experience.
          </p>
          <button className="px-8 py-4 border-2 border-crimson-500 text-crimson-500 rounded-xl hover:bg-crimson-50 transition-all text-base font-medium">
            Take Assessment →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
