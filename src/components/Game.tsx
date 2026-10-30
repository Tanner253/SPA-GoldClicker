import { useState } from 'react'
import { features, steps } from '../content'

export function Game() {
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  return (
    <section className="game" id="game">
      <div className="section-inner">
        <p className="eyebrow">The game</p>
        <h2>Tap. Build. Prestige. Repeat.</h2>

        <div className="game-layout">
          <figure className="phone">
            <div className="phone-screen">
              <video
                src="/media/gameplay.mp4"
                poster="/media/gameplay-poster.jpg"
                width="540"
                height="960"
                muted
                loop
                playsInline
                autoPlay={!reduceMotion}
                controls={reduceMotion}
                preload="metadata"
                aria-label="Gameplay from the original Gold Clicker Mining"
              />
            </div>
            <figcaption>Footage from the original game</figcaption>
          </figure>

          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <h3 className="feature-heading">What made the original stick</h3>
        <ul className="feature-grid">
          {features.map((feature) => (
            <li key={feature.title} className="feature-card">
              <img src={feature.image} alt="" width="120" height="120" loading="lazy" />
              <h4>{feature.title}</h4>
              <p>{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
