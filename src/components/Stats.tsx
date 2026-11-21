import { stats } from '../content'

// The numbers strip under the hero. The figures and their sources are in content.ts.
export function Stats() {
  return (
    <section className="stats" aria-label="Gold Clicker Mining in numbers">
      <ul className="stats-list">
        {stats.items.map((item) => (
          <li key={item.label} className="reveal">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
      <p className="stats-note">{stats.asOf}</p>
    </section>
  )
}
