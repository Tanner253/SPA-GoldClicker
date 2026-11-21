import { cta, links } from '../content'

// One of the game's own character strips, played at its 12 frames a second.
export function Miner({ strip, frames, scale = 4 }: { strip: string; frames: number; scale?: number }) {
  return (
    <span
      className="miner"
      aria-hidden="true"
      style={
        {
          '--strip': `url(/media/game/${strip}.png)`,
          '--frames': frames,
          '--scale': scale,
        } as React.CSSProperties
      }
    />
  )
}

export function PlayBadge({ community = false }: { community?: boolean }) {
  return (
    <div className="play">
      <div className="play-row">
        <a className="play-label" href={links.play} target="_blank" rel="noopener noreferrer">
          {cta.label}
        </a>
        <a className="play-web" href={links.web} target="_blank" rel="noopener noreferrer">
          {cta.web}
        </a>
      </div>
      <p className="play-note">{cta.note}</p>
      {community && (
        <ul className="community">
          {cta.community.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

type ScreenProps = { shot: string; clip?: string; alt: string; height?: number; eager?: boolean }

export function Screen({ shot, clip, alt, height = 1170, eager = false }: ScreenProps) {
  return (
    <figure className="screen reveal">
      <div className="screen-frame">
        <picture>
          {clip && <source srcSet={`/media/game/${clip}.webp`} media="(prefers-reduced-motion: no-preference)" />}
          <img
            src={`/media/game/${shot}.webp`}
            alt={alt}
            width="540"
            height={height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      </div>
    </figure>
  )
}
