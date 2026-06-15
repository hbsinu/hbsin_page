import { motion } from 'framer-motion'
import './ContactSection.css'
import SectionHeading from './SectionHeading'

function ContactSection({ content }) {
  return (
    <motion.section
      className="section section-light contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55 }}
      id="contact"
    >
      <SectionHeading eyebrow={content.heading} title={content.title} description={content.description} />
      <div className="contact-layout">
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about your project" required />
          </label>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
        <aside className="contact-meta" aria-label="Contact details">
          <p>Email</p>
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </aside>
      </div>
    </motion.section>

 
  )
}

export default ContactSection
