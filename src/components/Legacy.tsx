import { links, stats, timeline } from '../content'

export function Legacy() {
  return (
    <section className="legacy" id="legacy">
      <div className="section-inner">
        <p className="eyebrow">The OG clicker</p>
        <h2>We've been at this since 2025</h2>
        <p className="section-lede">
          Before the rebuild there was the original: built by one developer and kept alive by the
          players who kept tapping.
        </p>

        <ul className="stat-grid">
          {stats.map((stat) => (
            <li key={stat.label} className="stat-plate">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>

        <ol className="timeline">
          {timeline.map((entry) => (
            <li key={entry.title}>
              <span className="timeline-when">{entry.when}</span>
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
            </li>
          ))}
        </ol>

        <div className="og-card">
          <img src="/media/angel.webp" alt="" width="300" height="298" loading="lazy" />
          <div>
            <h3>Played the original?</h3>
            <p>You're the reason this is coming back. Come say hi and help shape what's next.</p>
            <a className="btn btn-green btn-small" href={links.discord} target="_blank" rel="noreferrer">
              Find the OGs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
