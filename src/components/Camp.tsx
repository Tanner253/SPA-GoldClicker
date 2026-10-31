import { camp } from '../content'
import { Room, RoomHead, Screen, Sprite, Stage } from './Kit'

export function Camp() {
  return (
    <Room id="camp" tone="clay">
      <div className="split">
        <Screen name="camp" alt={camp.screenAlt} />
        <div className="split-copy">
          <RoomHead eyebrow={camp.eyebrow} title={camp.title} lede={camp.lede} kind="building" />
          <div className="reveal">
            <Stage moment="merge" label={camp.stage} hint={camp.stageHint} />
          </div>
          <ul className="rows stagger">
            {camp.items.map((item) => (
              <li key={item.title} className="row-item pressable">
                <span className="icon-frame">
                  <Sprite name={item.sprite} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Room>
  )
}
