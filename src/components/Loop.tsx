import { loop } from '../content'

export function Loop() {
  return (
    <section className="loop" id="how">
      <div className="loop-inner reveal">
        <h2>{loop.title}</h2>
        <ol className="loop-steps">
          {loop.steps.map((step, index) => (
            <li key={step.title}>
              <span className="loop-number" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="loop-note">{loop.note}</p>
      </div>
    </section>
  )
}
