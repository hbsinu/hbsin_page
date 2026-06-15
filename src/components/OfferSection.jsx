import { motion } from 'framer-motion'
import './OfferSection.css'
import SectionHeading from './SectionHeading'

function OfferSection({ content }) {
  return (
    <motion.section
      className="section section-light offer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      id="offerings"
    >
      <div className="offer-layout">
        <div className="offer-intro">
          <SectionHeading eyebrow={content.heading} title={content.title} description={content.body} />
          <a className="btn btn-primary offer-cta" href={content.cta.href}>
            {content.cta.label}
          </a>
        </div>

        <div className="offer-cards" aria-label="Service offerings">
          {content.items.map((item) => (
            <article className={`offer-card offer-card--${item.tone}`} key={item.title}>
              <span className="offer-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default OfferSection
