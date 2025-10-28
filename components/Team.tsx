'use client'

import { motion } from 'framer-motion'

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    bio: "Former Stanford AI researcher with 15+ years in educational technology. Passionate about democratizing access to world-class education.",
  },
  {
    name: "Marcus Johnson",
    role: "Chief Learning Officer",
    bio: "Educational psychologist and curriculum designer. Previously led learning initiatives at leading EdTech companies.",
  },
  {
    name: "Dr. Yuki Tanaka",
    role: "Head of AI Research",
    bio: "PhD in Machine Learning from MIT. Specializes in adaptive learning algorithms and personalized education systems.",
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Product",
    bio: "Product leader with experience building educational platforms used by millions. Focused on creating intuitive learning experiences.",
  }
]

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-text-primary mb-6 leading-tight">
            Meet the team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're a diverse group of educators, researchers, and technologists united by a shared mission to transform how the world learns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-shadow group"
            >
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-full bg-crimson-500/10 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl font-serif text-crimson-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-serif text-text-primary mb-1 group-hover:text-crimson-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-crimson-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
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
            Want to join our mission?
          </p>
          <button className="px-8 py-4 bg-crimson-500 text-white rounded-xl hover:bg-crimson-600 transition-all text-base font-medium shadow-lg shadow-crimson-500/20">
            View Open Positions →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
