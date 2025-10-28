'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-crimson-500 to-crimson-600 rounded-3xl p-12 md:p-16 lg:p-20 text-white"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"></div>

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Ready to transform your learning journey?
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
              Join thousands of learners already experiencing personalized, AI-powered education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-crimson-500 rounded-xl hover:bg-cream transition-colors text-lg font-medium shadow-xl"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors text-lg font-medium"
              >
                Contact Sales →
              </motion.button>
            </div>

            <p className="mt-8 text-sm opacity-75">
              No credit card required • Start learning in minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
