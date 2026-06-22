import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Partners from './components/Partners'
import References from './components/References'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LegalModal, { type LegalDoc } from './components/LegalModal'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [legal, setLegal] = useState<LegalDoc | null>(null)
  useReveal()

  return (
    <>
      <a href="#leistungen" className="skip-link">
        Zum Inhalt springen
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <Services />
        <Partners />
        <References />
        <WhyUs />
        <Contact />
      </main>

      <Footer onOpenLegal={setLegal} />
      <LegalModal doc={legal} onClose={() => setLegal(null)} />
    </>
  )
}
