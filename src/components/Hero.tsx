import { hero, links } from '../content'
import { Stage } from './Kit'

export function Hero() {
  return (
    <section className="hero" id="top" data-depth="0" data-zone="The surface">
      <div className="hero-inner">
        <div className="hero-title">
          <p className="og-badge">{hero.badge}</p>
          <h1>
            <span className="hero-name">{hero.title}</span>
            <span className="hero-kicker">{hero.kicker}</span>
          </h1>
        </div>
        <div className="hero-stage">
          <Stage moment="dig" label={hero.stageLabel} hint={hero.stageHint} eager />
        </div>
        <div className="hero-copy">
          <p className="lede">{hero.lede}</p>
          <div className="actions">
            <a className="btn btn-gold" href={links.discord} target="_blank" rel="noreferrer">
              Join the Discord
            </a>
            <a className="btn btn-card" href="#mine">
              See the game
            </a>
          </div>
          <p className="status-line">
            <span className="status-dot" aria-hidden="true" />
            {hero.status}
          </p>
        </div>
      </div>
    </section>
  )
}
