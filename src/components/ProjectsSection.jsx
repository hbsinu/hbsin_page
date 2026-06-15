import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './ProjectsSection.css'
import SectionHeading from './SectionHeading'

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

function ProjectsSection({ content }) {
  const [activeCategory, setActiveCategory] = useState(content.allLabel)

  const categories = useMemo(
    () => [content.allLabel, ...new Set(content.items.map((item) => item.category))],
    [content],
  )

  const filteredProjects =
    activeCategory === content.allLabel
      ? content.items
      : content.items.filter((item) => item.category === activeCategory)

  const getCardMode = (index) => {
    if (index < 2) {
      return index % 2 === 0 ? 'featured media-right' : 'featured media-left'
    }

    return 'compact'
  }

  return (
    <section className="section projects" id="projects">
      <SectionHeading eyebrow={content.heading} title={content.title} align="center" />

      <nav className="filters" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeCategory ? 'is-active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <motion.div className="project-grid" variants={gridVariants} initial="hidden" animate="show">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card ${getCardMode(index)}`}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 14, transition: { duration: 0.2 } }}
              whileHover={{ scale: 1.01, y: -3 }}
            >
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card-footer">
                  <a href={project.href}>See Project</a>
                </div>
              </div>

              <div className="project-visual" aria-hidden="true">
                <div className="project-visual-layer layer-main" />
                <div className="project-visual-layer layer-secondary" />
                <div className="project-visual-layer layer-tertiary" />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default ProjectsSection
