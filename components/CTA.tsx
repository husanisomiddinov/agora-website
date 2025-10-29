'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-crimson-500 to-crimson-600 rounded-xl p-8 md:p-12 lg:p-16 text-white"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"></div>

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
              Ready to transform your learning journey?
            </h2>
            <p className="text-base mb-10 opacity-90 leading-relaxed">
              Join thousands of learners already experiencing personalized, AI-powered education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-crimson-500 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-xl"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
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
