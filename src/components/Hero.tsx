import { hero } from '../content'
import { Miner, PlayBadge, Screen } from './Kit'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="badge">{hero.badge}</p>
          <h1>{hero.title}</h1>
          <p className="lede">{hero.lede}</p>
          <PlayBadge />
        </div>
        <div className="hero-screen">
          <Screen shot="shot-merge" clip="clip-merge" alt={hero.clipAlt} height={960} eager />
          <Miner strip="dig_down" frames={5} />
        </div>
      </div>
    </section>
  )
}
