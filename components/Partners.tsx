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
    <section id="partners" className="py-24 px-6 bg-cream border-b border-gray-300">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text-primary mb-6 leading-tight">
            Our partners
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            We collaborate with leading institutions and organizations to deliver world-class educational experiences.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="border-l-2 border-gray-300 pl-6 hover:border-crimson-500 transition-colors">
              <h3 className="text-lg font-serif text-text-primary mb-1">
                {partner.name}
              </h3>
              <p className="text-sm text-text-tertiary">{partner.type}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-12 border-t border-gray-300">
          <p className="text-base text-text-secondary mb-4">
            Interested in partnering with us?
          </p>
          <a
            href="#"
            className="inline-block text-sm text-text-primary underline underline-offset-4 hover:text-crimson-500 transition-colors"
          >
            Become a Partner →
          </a>
        </div>
      </div>
    </section>
  )
}
