import { useEffect, useRef, useState } from 'react'
import { cta, links, nav } from '../content'

// Which section sits under the header now, and whether the page has scrolled at all.
function useScrollState() {
  const [state, setState] = useState({ active: '', scrolled: false })
  useEffect(() => {
    let queued = 0
    const update = () => {
      queued = 0
      let active = ''
      for (const link of nav.links) {
        const element = document.getElementById(link.id)
        if (element && element.getBoundingClientRect().top <= 140) active = link.id
      }
      const scrolled = window.scrollY > 8
      setState((old) => (old.active === active && old.scrolled === scrolled ? old : { active, scrolled }))
    }
    const queue = () => {
      if (!queued) queued = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    return () => {
      cancelAnimationFrame(queued)
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
    }
  }, [])
  return state
}

// The sticky header: the game's name, a few sections, the Play button, and a menu sheet on a phone.
export function Header() {
  const { active, scrolled } = useScrollState()
  const [open, setOpen] = useState(false)
  const sheet = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = sheet.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label={nav.name}>
          <img src="/media/icon-192.png" alt="" width="36" height="36" />
          <span className="brand-name">{nav.name}</span>
        </a>
        <nav className="header-links" aria-label="Sections">
          {nav.links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'active' : ''} aria-current={active === link.id ? 'true' : undefined}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-play" href={links.play} target="_blank" rel="noopener noreferrer">
            <span className="play-long">{nav.play}</span>
            <span className="play-short">{nav.playShort}</span>
          </a>
          <button type="button" className="menu-button" onClick={() => setOpen(true)} aria-label="Open the menu">
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <dialog ref={sheet} className="sheet" onClose={close} onClick={(event) => event.target === sheet.current && close()}>
        <div className="sheet-top">
          <h2>{nav.menu}</h2>
          <button type="button" className="sheet-close" onClick={close} aria-label="Close the menu">
            ✕
          </button>
        </div>
        <ul className="sheet-links">
          {nav.links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="sheet-actions">
          <a className="play-label" href={links.play} target="_blank" rel="noopener noreferrer">
            {cta.label}
          </a>
          <a className="play-web" href={links.web} target="_blank" rel="noopener noreferrer">
            {nav.web}
          </a>
          <ul className="community">
            {cta.community.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  )
}
