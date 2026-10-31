import { status } from '../content'
import { Room, RoomHead } from './Kit'

export function Status() {
  return (
    <Room id="status" tone="dark">
      <RoomHead eyebrow={status.eyebrow} title={status.title} lede={status.lede} />
      <div className="status-grid stagger">
        {status.columns.map((column) => (
          <div key={column.title} className="card">
            <h3>{column.title}</h3>
            <ul>
              {column.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="muted reveal">{status.note}</p>
    </Room>
  )
}
