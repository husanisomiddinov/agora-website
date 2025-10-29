'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: "Adaptive Learning Paths",
    description: "Our AI analyzes your progress and adapts content in real-time, ensuring you're always challenged at the right level. Every learner gets a unique journey tailored to their goals and pace."
  },
  {
    title: "Expert-Designed Curriculum",
    description: "Content created by leading educators and industry professionals, combining academic rigor with practical application. Learn from the best, at your own pace."
  },
  {
    title: "Interactive Experiences",
    description: "Move beyond passive learning with hands-on projects, real-world simulations, and collaborative challenges that reinforce understanding and build practical skills."
  },
  {
    title: "Progress Tracking",
    description: "Detailed analytics and insights help you understand your learning patterns, celebrate achievements, and identify areas for growth with precision."
  },
  {
    title: "Community Support",
    description: "Join a global network of learners and mentors. Share knowledge, collaborate on projects, and grow together in a supportive environment."
  },
  {
    title: "Accessible Anywhere",
    description: "Learn on your schedule, from any device. Our platform works seamlessly across desktop, tablet, and mobile, keeping your progress synchronized."
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-text-primary mb-4 leading-tight">
            Education designed for how you learn
          </h2>
          <p className="text-base text-text-secondary leading-relaxed">
            Every aspect of Project Agora is built to adapt to your unique learning style, pace, and goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <h3 className="text-lg font-serif text-text-primary mb-3 group-hover:text-crimson-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
