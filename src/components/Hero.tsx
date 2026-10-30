import { links } from '../content'
import { TapBar } from './TapBar'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="og-badge">OG since 2025</p>
          <h1>
            <span className="stroke-text">Gold Clicker Mining</span>
            <span className="hero-kicker">is coming back</span>
          </h1>
          <p className="lede">
            68,000+ downloads. One very tappable gold bar. Now the whole game is being rebuilt from
            the ground up.
          </p>
          <div className="hero-actions">
            <a className="btn btn-green" href={links.discord} target="_blank" rel="noreferrer">
              Join the Discord
            </a>
            <a className="btn btn-gold" href="#game">
              See the game
            </a>
          </div>
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Rebuild in progress. No date yet.
          </p>
        </div>
        <TapBar />
      </div>
      <div className="hills" aria-hidden="true" />
    </section>
  )
}
