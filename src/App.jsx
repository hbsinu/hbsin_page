import { useEffect, useState } from 'react'
import './App.css'
import './components/shared.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import CtaSection from './components/CtaSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import OfferSection from './components/OfferSection'
import Preloader from './components/Preloader'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import { siteContent } from './content/siteContent'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => {
      setIsLoading(false)
    }, 900)

    return () => window.clearTimeout(loaderTimer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="portfolio-app">
      <main>
        <HeroSection content={siteContent.hero} />
        <AboutSection content={siteContent.about} services={siteContent.services} />
        <ExperienceSection content={siteContent.experience} />
        <OfferSection content={siteContent.offerings} />
        {/* <StatsSection stats={siteContent.stats} /> */}
        {/* <SkillsSection content={siteContent.skills} /> */}
        <ProjectsSection content={siteContent.projects} />
        <CtaSection content={siteContent.cta} />
        <ContactSection content={siteContent.contact} />
      </main>

      <FooterSection content={siteContent.footer} />
    </div>
  )
}

export default App
