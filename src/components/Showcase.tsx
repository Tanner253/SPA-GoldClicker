import type { Shot } from '../content'
import { Screen } from './Kit'

// A row of phones you swipe on a phone and see side by side on a wide screen, each with a title and one line.
export function ShotRow({ shots }: { shots: Shot[] }) {
  return (
    <ul className="tour">
      {shots.map((item) => (
        <li key={item.shot}>
          <Screen shot={item.shot} alt={item.alt} height={item.height ?? 960} />
          {item.tag && <p className="badge shot-tag">{item.tag}</p>}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  )
}

type ShowcaseProps = { id: string; tone: 'clay' | 'slate' | 'space' | 'sky'; title: string; lede: string; shots: Shot[] }

export function Showcase({ id, tone, title, lede, shots }: ShowcaseProps) {
  return (
    <div>
      <div className={`band band-${tone === 'clay' ? 'clay' : 'slate'}`} />
      <section className={`feature feature-${tone}`} id={id}>
        <div className="themes-inner">
          <div className="themes-head reveal">
            <h2>{title}</h2>
            <p className="lede">{lede}</p>
          </div>
          <ShotRow shots={shots} />
        </div>
      </section>
    </div>
  )
}
