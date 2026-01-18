import { createFileRoute } from '@tanstack/react-router'
import {
  Nav,
  Hero,
  TrustBadges,
  Products,
  About,
  WhyChooseUs,
  Contact,
  Footer,
} from '@/components/landing'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <TrustBadges />
        <Products />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
