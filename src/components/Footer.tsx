import { links, socials } from '../content'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Gold Clicker Mining</p>
      <ul>
        {socials.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <a href={links.privacy}>Privacy</a>
        </li>
        <li>
          <a href={links.terms}>Terms</a>
        </li>
        <li>
          <a href={links.deleteAccount}>Delete your account</a>
        </li>
        <li>
          <a href={links.email}>Contact</a>
        </li>
      </ul>
    </footer>
  )
}
