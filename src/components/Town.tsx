import { town } from '../content'
import { Room, RoomHead, Sprite } from './Kit'

export function Town() {
  return (
    <Room id="town" tone="slate">
      <RoomHead eyebrow={town.eyebrow} title={town.title} lede={town.lede} kind="planned" />
      <ul className="town-grid stagger">
        {town.items.map((item) => (
          <li key={item.title} className="card town-card pressable">
            <span className="icon-frame">
              <Sprite name={item.sprite} />
            </span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
      <p className="muted reveal">{town.note}</p>
    </Room>
  )
}
