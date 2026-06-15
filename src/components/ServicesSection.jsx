import { motion } from 'framer-motion'
import './ServicesSection.css'
import SectionHeading from './SectionHeading'

function ServicesSection({ content }) {
  return (
    <section className="section services">
      <SectionHeading eyebrow={content.heading} title={content.title} align="center" />
      <div className="service-grid">
        {content.items.map((service, index) => (
          <motion.article
            className="service-card"
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
