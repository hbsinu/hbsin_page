import { motion } from 'framer-motion'
import './CtaSection.css'

function CtaSection({ content }) {
  return (
    <motion.section
      className="section cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      <a className="btn btn-primary" href={content.action.href}>
        {content.action.label}
      </a>
    </motion.section>
  )
}

export default CtaSection
