import { status } from '../content'

export function Status() {
  return (
    <section className="status">
      <div className="status-inner reveal">
        <p className="badge">{status.version}</p>
        <h2>{status.title}</h2>
        <p className="status-text">{status.text}</p>
        <div className="status-lists">
          <div>
            <h3>{status.newLabel}</h3>
            <ul>
              {status.newItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{status.nextLabel}</h3>
            <ul>
              {status.nextItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
