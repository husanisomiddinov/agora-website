'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-cream">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-500/5 via-transparent to-pink-500/5"></div>

      <div className="relative max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-crimson-500/10 border border-crimson-500/20 text-crimson-600 text-sm mb-8 font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-crimson-500 animate-pulse"></span>
            Transforming Education with AI
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-text-primary mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto">
            The future of{' '}
            <span className="text-crimson-500">
              learning
            </span>{' '}
            is here
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Project Agora is a knowledge institution pioneering personalized, AI-powered education that evolves with every student.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-crimson-500 text-white rounded-xl hover:bg-crimson-600 transition-all text-lg font-medium shadow-lg shadow-crimson-500/20"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-crimson-500 text-crimson-500 rounded-xl hover:bg-crimson-50 transition-all text-lg font-medium"
            >
              Watch Demo →
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-serif font-bold text-crimson-500 mb-2">10K+</div>
            <div className="text-base text-text-secondary">Active learners worldwide</div>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-serif font-bold text-crimson-500 mb-2">95%</div>
            <div className="text-base text-text-secondary">Student success rate</div>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-5xl font-serif font-bold text-crimson-500 mb-2">50+</div>
            <div className="text-base text-text-secondary">Expert-designed programs</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
