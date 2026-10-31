import { useEffect, useRef, useState } from 'react'
import { stops } from '../content'
import { prefersReducedMotion } from '../motion/feel'

// The game's HUD, reading the page as a descent: depth and zone from the sections, air from how far down you are.
export function Hud({ onMap }: { onMap: () => void }) {
  const [showing, setShowing] = useState(false)
  const depthText = useRef<HTMLSpanElement>(null)
  const zoneText = useRef<HTMLSpanElement>(null)
  const airBar = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const marks = Array.from(document.querySelectorAll<HTMLElement>('[data-depth]'))
    let target = 0
    let shown = 0
    let frame = 0

    const paint = () => {
      frame = 0
      shown = prefersReducedMotion() ? target : shown + (target - shown) * 0.28
      if (Math.abs(target - shown) < 0.5) shown = target
      depthText.current!.textContent = `${Math.round(shown)}m`
      if (shown !== target) frame = requestAnimationFrame(paint)
    }

    const read = () => {
      const line = window.innerHeight * 0.35
      let index = 0
      marks.forEach((mark, at) => {
        if (mark.getBoundingClientRect().top <= line) index = at
      })
      const here = marks[index]
      const next = marks[index + 1]
      const from = Number(here.dataset.depth)
      if (next) {
        const top = here.getBoundingClientRect().top
        const span = next.getBoundingClientRect().top - top
        target = from + (Number(next.dataset.depth) - from) * Math.min(1, (line - top) / span)
      } else {
        target = from
      }
      zoneText.current!.textContent = here.dataset.zone ?? ''
      const room = document.documentElement.scrollHeight - window.innerHeight
      airBar.current!.style.transform = `scaleX(${Math.max(0.03, 1 - window.scrollY / room)})`
      setShowing(window.scrollY > window.innerHeight * 0.6)
      if (!frame) frame = requestAnimationFrame(paint)
    }

    read()
    window.addEventListener('scroll', read, { passive: true })
    window.addEventListener('resize', read)
    return () => {
      window.removeEventListener('scroll', read)
      window.removeEventListener('resize', read)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className={`hud${showing ? ' is-showing' : ''}`}>
      <button className="hud-pill pressable" type="button" onClick={onMap} aria-label="Open the mine map" tabIndex={showing ? 0 : -1}>
        <span className="hud-depth" ref={depthText}>
          0m
        </span>
        <span className="hud-zone" ref={zoneText} />
        <span className="hud-air" aria-hidden="true">
          <span ref={airBar} />
        </span>
      </button>
      <a className="btn btn-small btn-blue hud-lift" href="#top" tabIndex={showing ? 0 : -1}>
        Lift
      </a>
    </div>
  )
}

export function MineMap({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const element = dialog.current!
    if (!open) {
      if (element.open) element.close()
      return
    }
    element.showModal()
    // A history step lets Android's back button close the map instead of leaving the page.
    window.history.pushState({ mineMap: true }, '')
    window.addEventListener('popstate', onClose)
    return () => window.removeEventListener('popstate', onClose)
  }, [open, onClose])

  const leave = () => {
    if (window.history.state?.mineMap) window.history.back()
    else onClose()
  }

  const go = (id: string) => {
    window.history.replaceState(null, '', `#${id}`)
    onClose()
    document.getElementById(id)?.scrollIntoView()
  }

  return (
    <dialog
      className="mine-map"
      ref={dialog}
      aria-labelledby="mine-map-title"
      onCancel={(event) => {
        event.preventDefault()
        leave()
      }}
      onClick={(event) => {
        if (event.target === dialog.current) leave()
      }}
    >
      <div className="mine-map-card">
        <div className="mine-map-head">
          <h2 id="mine-map-title">Mine map</h2>
          <button className="btn btn-small btn-card" type="button" onClick={leave}>
            Close
          </button>
        </div>
        <ol>
          {stops.map((entry, index) => (
            <li key={entry.id} style={{ '--i': index } as React.CSSProperties}>
              <a
                className="pressable"
                href={`#${entry.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  go(entry.id)
                }}
              >
                <span className="map-depth">{entry.depth}m</span>
                <span className="map-title">{entry.title}</span>
                <span className="map-zone">{entry.zone}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </dialog>
  )
}
