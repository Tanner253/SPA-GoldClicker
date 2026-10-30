import { links } from '../content'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <img src="/media/icon-192.png" alt="" width="44" height="44" />
        <span>Gold Clicker Mining</span>
      </a>
      <nav aria-label="Main">
        <a href="#legacy">Our story</a>
        <a href="#game">The game</a>
        <a href="#rebuild">The rebuild</a>
        <a className="btn btn-small btn-green" href={links.discord} target="_blank" rel="noreferrer">
          Discord
        </a>
      </nav>
    </header>
  )
}
