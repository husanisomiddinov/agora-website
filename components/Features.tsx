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
    <section id="features" className="py-24 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
            Education designed for how you learn
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Every aspect of Project Agora is built to adapt to your unique learning style, pace, and goals.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-300 pb-10 last:border-0">
              <h3 className="text-xl font-serif text-text-primary mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
