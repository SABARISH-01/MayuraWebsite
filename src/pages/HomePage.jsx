import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ImpactStats from '../components/ImpactStats'
import WhyChooseUs from '../components/WhyChooseUs'
import Careers from '../components/Careers'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ImpactStats />
      <WhyChooseUs />
      <Careers />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default HomePage
