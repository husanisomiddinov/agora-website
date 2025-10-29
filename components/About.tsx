'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">
            Building the future of learning
          </h2>
          <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Named after the ancient Greek gathering places where knowledge was shared freely,
            Project Agora continues this tradition in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-cream border border-cream-dark hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-crimson-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-crimson-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-text-primary mb-3">Our Vision</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              A world where every person has access to personalized, world-class education that adapts to their unique needs and aspirations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-cream border border-cream-dark hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-crimson-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-crimson-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-text-primary mb-3">Our Approach</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              We combine cutting-edge AI with proven learning science to create experiences that are both deeply personal and rigorously effective.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 rounded-xl bg-cream border border-cream-dark hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-crimson-500/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-crimson-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-text-primary mb-3">Our Commitment</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Every decision we make prioritizes learner success, accessibility, and the advancement of human knowledge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
