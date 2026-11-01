import { links } from '../content'

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Gold Clicker Mining</p>
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
