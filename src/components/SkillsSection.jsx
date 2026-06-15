import { motion } from 'framer-motion'
import './SkillsSection.css'
import SectionHeading from './SectionHeading'

function SkillsSection({ content }) {
  return (
    <motion.section
      className="section section-light skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
    >
      <SectionHeading eyebrow={content.heading} title={content.title} />
      <div className="skills-list">
        {content.items.map((skill) => (
          <article className="skill-row" key={skill.id}>
            <div className="skill-meta">
              <h3>{skill.label}</h3>
              <span>{skill.value}%</span>
            </div>
            <div className="skill-track" aria-hidden="true">
              <motion.div
                className="skill-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.value}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.75, ease: 'easeOut' }}
              />
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillsSection
