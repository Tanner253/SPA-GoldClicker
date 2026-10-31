import { links } from '../content'
import { Sprite } from './Kit'

const nav = [
  { href: '#mine', label: 'The mine' },
  { href: '#camp', label: 'Camp' },
  { href: '#crew', label: 'Crew' },
  { href: '#depth', label: 'Depth' },
  { href: '#town', label: 'Town' },
  { href: '#legacy', label: 'OG' },
]

export function Header({ onMap }: { onMap: () => void }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <Sprite name="miner" size={40} />
        <span>Gold Clicker Mining</span>
      </a>
      <nav aria-label="Main">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="btn btn-small btn-card header-map" type="button" onClick={onMap}>
          Map
        </button>
        <a className="btn btn-small btn-gold" href={links.discord} target="_blank" rel="noreferrer">
          Discord
        </a>
      </div>
    </header>
  )
}
