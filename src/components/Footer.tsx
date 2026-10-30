import { links } from '../content'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Gold Clicker Mining. All rights reserved.</p>
      <ul>
        <li>
          <a href={links.terms} target="_blank" rel="noreferrer">
            Terms and Privacy
          </a>
        </li>
        <li>
          <a href={links.email}>Contact</a>
        </li>
        <li>
          <a href={links.developer} target="_blank" rel="noreferrer">
            Looking for a developer?
          </a>
        </li>
      </ul>
    </footer>
  )
}
