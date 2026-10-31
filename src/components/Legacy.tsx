import { useEffect, useRef, useState } from 'react'
import { legacy, links, stats, timeline } from '../content'
import { prefersReducedMotion } from '../motion/feel'
import { Room, RoomHead } from './Kit'
import { TapBar } from './TapBar'

const CLIP_END = 12 // seconds; the original clip's last moments are not used here

function CountUp({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const element = useRef<HTMLElement>(null)
  const finalText = `${value.toFixed(decimals)}${suffix}`

  useEffect(() => {
    if (prefersReducedMotion()) return
    const target = element.current!
    let frame = 0
    const observer = new IntersectionObserver((entries) => {
      if (!entries[entries.length - 1].isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / 900)
        const eased = 1 - (1 - t) * (1 - t) * (1 - t)
        target.textContent = `${(value * eased).toFixed(decimals)}${suffix}`
        if (t < 1) frame = requestAnimationFrame(step)
      }
      frame = requestAnimationFrame(step)
    })
    observer.observe(target)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, suffix, decimals])

  return <strong ref={element}>{finalText}</strong>
}

function OldFootage() {
  const video = useRef<HTMLVideoElement>(null)
  const [near, setNear] = useState(false)
  const [still] = useState(prefersReducedMotion)

  useEffect(() => {
    const element = video.current!
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[entries.length - 1].isIntersecting
        if (visible) setNear(true)
        if (still) return
        if (visible) void element.play().catch(() => {})
        else element.pause()
      },
      { rootMargin: '200px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [still])

  return (
    <figure className="old-phone reveal">
      <div className="old-phone-screen">
        <video
          ref={video}
          src={near ? '/media/gameplay.mp4' : undefined}
          poster={near ? '/media/gameplay-poster.jpg' : undefined}
          width="540"
          height="960"
          muted
          loop
          playsInline
          controls={still}
          preload="metadata"
          aria-label={legacy.videoLabel}
          onTimeUpdate={(event) => {
            if (event.currentTarget.currentTime >= CLIP_END) event.currentTarget.currentTime = 0
          }}
        />
      </div>
      <figcaption>{legacy.videoCaption}</figcaption>
    </figure>
  )
}

export function Legacy() {
  return (
    <Room id="legacy" tone="bedrock">
      <RoomHead eyebrow={legacy.eyebrow} title={legacy.title} lede={legacy.lede} />

      <ul className="stat-grid stagger">
        {stats.map((stat) => (
          <li key={stat.label} className="stat">
            <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>

      <div className="legacy-museum">
        <OldFootage />
        <div className="reveal">
          <h3>{legacy.barTitle}</h3>
          <TapBar />
        </div>
      </div>

      <ol className="timeline stagger">
        {timeline.map((entry) => (
          <li key={entry.title} className="card">
            <span className="timeline-when">{entry.when}</span>
            <h4>{entry.title}</h4>
            <p>{entry.text}</p>
          </li>
        ))}
      </ol>

      <div className="card og-card reveal">
        <img src="/media/angel.webp" alt="" width="300" height="298" loading="lazy" />
        <div>
          <h3>{legacy.ogTitle}</h3>
          <p>{legacy.ogText}</p>
          <a className="btn btn-small btn-gold" href={links.discord} target="_blank" rel="noreferrer">
            {legacy.ogButton}
          </a>
        </div>
      </div>
    </Room>
  )
}
