import { HashRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Ticker from './components/Ticker'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import JoinUs from './components/JoinUs'
import Footer from './components/Footer'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <Navbar />
        <Ticker />
        <main className="divide-y divide-kuba-border">
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Team />
          <Reviews />
          <FAQ />
          <JoinUs />
        </main>
        <Footer />
      </HashRouter>
    </MotionConfig>
  )
}

export default App
