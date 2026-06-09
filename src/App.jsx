import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

const projects = [
  {
    id: 1,
    title: 'React Weather Visualizer',
    description: 'Animated forecast dashboard with dynamic charts and theme switching.',
    category: 'React',
    url: 'https://example.com/react-weather',
    svgIconPath:
      'M20 11a7 7 0 1 0-13.9 1.2A4.8 4.8 0 0 0 7 21h10a4 4 0 1 0 .9-7.9',
  },
  {
    id: 2,
    title: 'UI Motion Playground',
    description: 'Micro-interaction demos focused on smooth transitions and fluid gestures.',
    category: 'UI/UX',
    url: 'https://example.com/ui-motion',
    svgIconPath:
      'M4 12h6l2-6 2 12 2-6h4M4 6h16M4 18h16',
  },
  {
    id: 3,
    title: 'Type-safe API Explorer',
    description: 'Modern developer docs interface with searchable examples and snippets.',
    category: 'React',
    url: 'https://example.com/api-explorer',
    svgIconPath:
      'M4 6h16v12H4zM8 10h8M8 14h5',
  },
  {
    id: 4,
    title: 'Landing Page Studio',
    description: 'Responsive marketing layout generator with reusable visual sections.',
    category: 'UI/UX',
    url: 'https://example.com/landing-studio',
    svgIconPath:
      'M3 7h18M3 12h18M3 17h18M7 3v18M17 3v18',
  },
  {
    id: 5,
    title: 'Design Token Inspector',
    description: 'Token browser for spacing, color, and typography systems in live themes.',
    category: 'Tooling',
    url: 'https://example.com/token-inspector',
    svgIconPath:
      'M12 3 4 7v10l8 4 8-4V7l-8-4zm0 0v18M4 7l8 4 8-4',
  },
  {
    id: 6,
    title: 'Interactive Data Board',
    description: 'Real-time KPI board with animated counters and filterable data cards.',
    category: 'Tooling',
    url: 'https://example.com/data-board',
    svgIconPath:
      'M5 19V9M12 19V5M19 19v-8',
  },
]

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

function App() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [],
  )

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="portfolio-app">
      <motion.header
        className="hero"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      >
        <p className="eyebrow">Animated Portfolio Hub</p>
        <h1>Developer Portfolio Links</h1>
        <p className="hero-copy">
          Explore interactive demos, UI experiments, and production-ready frontend builds.
        </p>
      </motion.header>

      <main>
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

        <motion.section
          className="project-grid"
          variants={gridVariants}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: 14, transition: { duration: 0.2 } }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="project-card"
              >
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={project.svgIconPath} />
                  </svg>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <span>{project.category}</span>
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.section>
      </main>

      <footer>
        <small>Built as a static-first portfolio hub for Cloudflare Pages.</small>
      </footer>
    </div>
  )
}

export default App
