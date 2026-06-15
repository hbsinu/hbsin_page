import { motion } from 'framer-motion'
import './HeroSection.css'

function HeroSection({ content }) {
  return (
    <motion.header
      className="hero section"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <p className="hero-eyebrow">{content.eyebrow}</p>
      <h1>{content.title}</h1>
      <p className="hero-description">{content.description}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href={content.primaryCta.href}>
          {content.primaryCta.label}
        </a>
        <a className="btn btn-ghost" href={content.secondaryCta.href}>
          {content.secondaryCta.label}
        </a>
      </div>

      <a className="hero-scroll" href={content.scrollCta.href} aria-label={content.scrollCta.ariaLabel}>
        <span>{content.scrollCta.label}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </motion.header>
  )
}

export default HeroSection
