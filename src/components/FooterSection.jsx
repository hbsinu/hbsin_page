import './FooterSection.css'

function FooterSection({ content }) {
  return (
    <footer className="footer">
      <small>{content.copyright}</small>
      <nav aria-label="Social links">
        {content.links.map((link) => (
          <a key={link.id} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default FooterSection
