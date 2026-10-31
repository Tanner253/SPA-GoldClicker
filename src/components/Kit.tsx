import { useEffect, useRef, type ReactNode } from 'react'
import { markFound, useFound } from '../secrets'
import { notes, secrets, stop, type StopId } from '../content'
import { mountStage, type Moment } from '../motion/stages'

export function Sprite({ name, size = 64, alt = '' }: { name: string; size?: number; alt?: string }) {
  return (
    <img
      className="sprite"
      src={`/media/game/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      draggable="false"
    />
  )
}

export function Chip({ kind }: { kind: 'building' | 'planned' }) {
  return <span className={`chip chip-${kind}`}>{kind === 'building' ? 'In development' : 'Coming'}</span>
}

export function RoomHead({ eyebrow, title, lede, kind }: { eyebrow: string; title: string; lede: string; kind?: 'building' | 'planned' }) {
  return (
    <header className="room-head reveal">
      <p className="eyebrow">
        {eyebrow}
        {kind && <Chip kind={kind} />}
      </p>
      <h2>{title}</h2>
      <p className="lede">{lede}</p>
    </header>
  )
}

export function Room({ id, tone, children }: { id: StopId; tone: 'clay' | 'slate' | 'dark' | 'bedrock'; children: ReactNode }) {
  const { depth, zone } = stop(id)
  return (
    <section className={`room room-${tone}`} id={id} data-depth={depth} data-zone={zone}>
      <div className="wrap">{children}</div>
    </section>
  )
}

export function Screen({ name, alt, live = false, wide = false }: { name: string; alt: string; live?: boolean; wide?: boolean }) {
  return (
    <figure className={`screen reveal${wide ? ' screen-wide' : ''}`}>
      <div className="screen-frame">
        <img src={`/media/game/screen-${name}.webp`} alt={alt} width="720" height="1560" loading="lazy" decoding="async" />
      </div>
      <figcaption>{live ? notes.live : notes.mockup}</figcaption>
    </figure>
  )
}

export function Stage({ moment, label, hint, eager = false }: { moment: Moment; label: string; hint?: string; eager?: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const handle = useRef<ReturnType<typeof mountStage> | null>(null)

  useEffect(() => {
    handle.current = mountStage(canvas.current!, moment, eager)
    return () => handle.current?.destroy()
  }, [moment, eager])

  return (
    <figure className="stage-card">
      <button
        className="stage"
        type="button"
        aria-label={label}
        onPointerDown={(event) => {
          if (event.button === 0) handle.current?.trigger()
        }}
        onClick={(event) => {
          if (event.detail === 0) handle.current?.trigger() // keyboard press; a tap already fired on pointerdown
        }}
      >
        <canvas ref={canvas} />
      </button>
      {hint && <figcaption>{hint}</figcaption>}
    </figure>
  )
}

export function Band({ tone, tag, children }: { tone: 'clay' | 'slate' | 'lift' | 'bedrock'; tag?: string; children?: ReactNode }) {
  return (
    <div className={`band band-${tone}`}>
      {tag && <span className="band-tag">{tag}</span>}
      {children}
    </div>
  )
}

export function Secret({ id, className }: { id: string; className: string }) {
  const found = useFound()
  const secret = secrets.items.find((item) => item.id === id)!
  const isFound = found.includes(id)

  return (
    <button
      className={`secret ${className}${isFound ? ' is-found' : ''}`}
      type="button"
      aria-label={isFound ? `${secret.label}, found` : secret.label}
      onClick={() => markFound(id)}
    >
      <Sprite name={secret.sprite} size={48} />
      {isFound && <span className="secret-note">{secret.found}</span>}
    </button>
  )
}
