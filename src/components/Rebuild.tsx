import { rebuild } from '../content'

export function Rebuild() {
  return (
    <section className="rebuild" id="rebuild">
      <div className="section-inner rebuild-layout">
        <figure className="rebuild-sheep">
          <img
            src="/media/sheep.webp"
            alt="The banker sheep from the prestige screen"
            width="640"
            height="640"
            loading="lazy"
          />
          <figcaption>Back soon</figcaption>
        </figure>
        <div>
          <p className="eyebrow">The rebuild</p>
          <h2>Same game. Stronger foundations.</h2>
          <p className="section-lede">
            The tap, upgrade and prestige loop you know is the heart of it. Everything underneath is
            being rewritten.
          </p>
          <ul className="rebuild-list">
            {rebuild.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <p className="rebuild-note">
            These are our plans for the new version. There's no release date yet, and the community
            will hear first.
          </p>
        </div>
      </div>
    </section>
  )
}
