import { motion } from 'framer-motion'
import './StatsSection.css'

function StatsSection({ stats }) {
  return (
    <section className="section stats" aria-label="Portfolio metrics">
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.article
            key={item.id}
            className="stat-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
