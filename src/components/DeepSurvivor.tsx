import { deep } from '../content'
import { ShotRow } from './Showcase'

// The newest mode up top: its trailer, what it is, and four real moments from it.
export function DeepSurvivor() {
  return (
    <section className="deep" id="deep-survivor">
      <div className="deep-inner">
        <div className="deep-copy reveal">
          <p className="badge">{deep.badge}</p>
          <h2>{deep.title}</h2>
          <p className="lede">{deep.lede}</p>
          <ul className="deep-points">
            {deep.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <video
          className="deep-video reveal"
          src={`/media/game/${deep.video}.mp4`}
          poster={`/media/game/${deep.poster}.webp`}
          aria-label={deep.videoLabel}
          width="540"
          height="960"
          controls
          playsInline
          preload="none"
        />
      </div>
      <ShotRow shots={deep.shots} />
    </section>
  )
}
