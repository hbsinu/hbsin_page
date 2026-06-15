import { motion } from 'framer-motion'
import './AboutSection.css'
import SectionHeading from './SectionHeading'

function AboutSection({ content, services }) {
  return (
    <>
    <motion.section
      className="section section-light about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      id="about"
    >
      <div className="about">
        {/* <figure className="about-photo-frame">
          <img src={content.photo.src} alt={content.photo.alt} loading="lazy" />
        </figure> */}
      </div>
      {/* <ul className="about-highlights">
        {content.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </motion.section>
    <motion.section
      className="section section-light about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      id="about"
    >
    {/* <div className="about-services"> */}
        <SectionHeading
          className="about-heading-full"
          eyebrow={content.heading}
          title={content.title}
          description={content.body}
          align="center"
        />

        {/* <SectionHeading eyebrow={services.heading} title={services.title} align="center" /> */}
        <div className="about-service-grid" aria-label="What I do">
          {services.items.map((service, index) => (
            <motion.article
              className="about-service-card"
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
      {/* </div> */}
    </motion.section>
  </>
  )
}

export default AboutSection
