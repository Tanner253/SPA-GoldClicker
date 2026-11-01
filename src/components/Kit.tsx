import { cta } from '../content'

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

export function PlayBadge() {
  return (
    <div className="play">
      <p className="play-label">{cta.label}</p>
      <p className="play-note">{cta.note}</p>
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
