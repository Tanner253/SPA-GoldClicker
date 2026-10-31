import { crew } from '../content'
import { Chip, Room, RoomHead, Sprite } from './Kit'

export function Crew() {
  return (
    <Room id="crew" tone="clay">
      <RoomHead eyebrow={crew.eyebrow} title={crew.title} lede={crew.lede} kind="building" />
      <h3 className="heading-chip reveal">
        {crew.classesTitle}
        <Chip kind="planned" />
      </h3>
      <ul className="crew-grid stagger">
        {crew.classes.map((member) => (
          <li key={member.title} className="crew-card pressable">
            <Sprite name={member.sprite} size={96} />
            <h4>{member.title}</h4>
            <p>{member.text}</p>
          </li>
        ))}
      </ul>
      <div className="pair">
        <div className="card reveal">
          <h3>{crew.frontTitle}</h3>
          <p>{crew.frontText}</p>
        </div>
        <div className="card reveal">
          <h3>{crew.rescueTitle}</h3>
          <p>{crew.rescueText}</p>
        </div>
      </div>
    </Room>
  )
}
