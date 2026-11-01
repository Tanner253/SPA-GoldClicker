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
              <Screen shot={feature.shot} alt={feature.alt} height={feature.height} />
            </div>
          </section>
        </div>
      ))}
    </>
  )
}
