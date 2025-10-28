'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: "Stanford University", type: "Academic Partner" },
  { name: "MIT Media Lab", type: "Research Partner" },
  { name: "Google for Education", type: "Technology Partner" },
  { name: "UNESCO", type: "Global Partner" },
  { name: "Khan Academy", type: "Content Partner" },
  { name: "Coursera", type: "Platform Partner" },
]

export default function Partners() {
  return (
    <section id="partners" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-text-primary mb-6 leading-tight">
            Our partners
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading institutions and organizations to deliver world-class educational experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border-2 border-gray-200 hover:border-crimson-500 transition-all hover:shadow-lg group"
            >
              <h3 className="text-xl font-serif text-text-primary mb-2 group-hover:text-crimson-500 transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-text-secondary">{partner.type}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-text-secondary mb-6">
            Interested in partnering with us?
          </p>
          <button className="px-8 py-4 border-2 border-crimson-500 text-crimson-500 rounded-xl hover:bg-crimson-50 transition-all text-base font-medium">
            Become a Partner →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
