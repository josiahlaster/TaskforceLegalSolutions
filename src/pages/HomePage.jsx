import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import HowWeHelp from '../components/HowWeHelp'
import Pricing from '../components/Pricing'
import './HomePage.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <Hero />
      <About />
      <Services />
      <HowWeHelp />
      <Pricing />
    </main>
  )
}
