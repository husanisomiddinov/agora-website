import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Partners from '@/components/Partners'
import Programs from '@/components/Programs'
import BlogPreview from '@/components/BlogPreview'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Partners />
      <Programs />
      <BlogPreview />
      <CTA />
    </main>
  )
}
