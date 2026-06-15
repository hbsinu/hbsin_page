import { motion } from 'framer-motion'
import './ExperienceSection.css'
import SectionHeading from './SectionHeading'

function isNAValue(value) {
  return typeof value === 'string' && value.trim().toUpperCase() === 'NA'
}

function renderDate(date) {
  const parts = date.split(/\s*-\s*/)

  if (parts.length < 2) {
    return date
  }

  const first = parts[0]
  const second = parts.slice(1).join(' - ')

  return (
    <span className="experience-date-range">
      <span className="experience-date-first">{first}</span>
      <span className="experience-date-second">- {second}</span>
    </span>
  )
}

function renderDescription(description) {
  if (typeof description !== 'string') {
    return description
  }

  return description.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index < description.split('\n').length - 1 && <br />}
    </span>
  ))
}

function ExperienceSection({ content }) {
  return (
    <motion.section
      className="section section-light experience"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      id="experience"
    >
      <div className="experience-layout">
        <div className="experience-intro">
          <SectionHeading eyebrow={content.heading} title={content.title} description={content.body} />
          <a className="btn btn-primary experience-resume" href={content.resume.href}>
            {content.resume.label}
          </a>
        </div>

        <div className="experience-timeline" aria-label="Work experience timeline">
          {content.items.map((item) => {
            const showDate = !isNAValue(item.date)
            const showCompany = !isNAValue(item.company)

            return (
              <article className="experience-item" key={`${item.role}-${item.company}`}>
                <p className="experience-date">{showDate ? renderDate(item.date) : ''}</p>
                <span className="experience-dot" aria-hidden="true" />
                <div className="experience-card">
                  <h3>{showCompany ? `${item.role} at ${item.company}` : item.role}</h3>
                  <p>{renderDescription(item.description)}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

export default ExperienceSection
