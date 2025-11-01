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
    <section id="team" className="py-24 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
            Meet the team
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            We're a diverse group of educators, researchers, and technologists united by a shared mission to transform how the world learns.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-10">
          {team.map((member, index) => (
            <div key={index} className="border-b border-gray-300 pb-10 last:border-0">
              <div className="flex gap-6 items-start">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                  <span className="text-3xl font-serif text-gray-400">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-serif text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-text-tertiary mb-4">
                    {member.role}
                  </p>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-gray-300">
          <p className="text-base text-text-secondary mb-4">
            Want to join our mission?
          </p>
          <a
            href="#"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            View Open Positions →
          </a>
        </div>
      </div>
    </section>
  )
}
