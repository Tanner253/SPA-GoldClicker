import { features } from '../content'
import { Screen } from './Kit'

export function Features() {
  return (
    <>
      {features.map((feature, index) => (
        <div key={feature.id}>
          <div className={`band band-${feature.tone === 'slate' ? 'slate' : 'clay'}`} />
          <section className={`feature feature-${feature.tone}`} id={feature.id}>
            <div className={`feature-inner${index % 2 ? ' feature-flip' : ''}`}>
              <div className="feature-copy reveal">
                <h2>{feature.title}</h2>
                <p className="lede">{feature.text}</p>
              </div>
              {feature.shot ? (
                <Screen shot={feature.shot} clip={feature.clip} alt={feature.alt} height={feature.height} />
              ) : (
                <img className="feature-sprite reveal" src={`/media/game/${feature.sprite}.png`} alt={feature.alt} width="192" height="192" loading="lazy" />
              )}
            </div>
          </section>
        </div>
      ))}
    </>
  )
}
