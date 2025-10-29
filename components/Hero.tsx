'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-cream">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-500/5 via-transparent to-pink-500/5"></div>

      <div className="relative max-w-6xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-text-primary mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
            The future of{' '}
            <span className="text-crimson-500">
              learning
            </span>{' '}
            is here
          </h1>

          <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            Project Agora is a knowledge institution pioneering personalized, AI-powered education that evolves with every student.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-crimson-500 text-white rounded-lg hover:bg-crimson-600 transition-all text-sm font-medium shadow-lg shadow-crimson-500/20"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-crimson-500 text-crimson-500 rounded-lg hover:bg-crimson-50 transition-all text-sm font-medium"
            >
              Watch Demo →
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-xl bg-white border border-cream-dark shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-serif font-bold text-crimson-500 mb-1">10K+</div>
            <div className="text-sm text-text-secondary">Active learners worldwide</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-cream-dark shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-serif font-bold text-crimson-500 mb-1">95%</div>
            <div className="text-sm text-text-secondary">Student success rate</div>
          </div>
          <div className="p-6 rounded-xl bg-white border border-cream-dark shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl font-serif font-bold text-crimson-500 mb-1">50+</div>
            <div className="text-sm text-text-secondary">Expert-designed programs</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
