import { themes } from '../content'
import { Screen } from './Kit'

// The camp themes section: Jelly Armada's tour, then one tile for every other look in content.ts.
export function Themes() {
  const { scenery, eye, crew, more } = themes
  return (
    <div>
      <div className="band band-slate" />
      <section className="feature feature-space" id="themes">
        <div className="themes-inner">
          <div className="themes-head reveal">
            <h2>{themes.title}</h2>
            <p className="lede">{themes.lede}</p>
            <p className="badge theme-name">{themes.tourName}</p>
            <p className="theme-line">{themes.tourLine}</p>
          </div>
          <ul className="tour">
            {[scenery, eye].map((step) => (
              <li key={step.shot}>
                <Screen shot={step.shot} alt={step.alt} height={1157} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
            <li className="tour-crew">
              <img className="crew-card reveal" src={`/media/game/${crew.shot}.webp`} alt={crew.alt} width="520" height="503" loading="lazy" decoding="async" />
              <h3>{crew.title}</h3>
              <p>{crew.text}</p>
            </li>
          </ul>
          {more.length > 0 && (
            <>
              <h3 className="more-title reveal">{themes.moreTitle}</h3>
              <ul className="tour tour-more">
                {more.map((look) => (
                  <li key={look.id}>
                    <Screen shot={look.shot} alt={look.alt} height={look.height ?? 1157} />
                    <h3>{look.name}</h3>
                    <p>{look.line}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
