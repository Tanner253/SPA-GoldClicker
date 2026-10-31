import { mine } from '../content'
import { Room, RoomHead, Screen, Sprite, Stage } from './Kit'

export function Mine() {
  return (
    <Room id="mine" tone="clay">
      <div className="split">
        <div className="split-copy">
          <RoomHead eyebrow={mine.eyebrow} title={mine.title} lede={mine.lede} kind="building" />
          <h3 className="reveal">{mine.legendTitle}</h3>
          <ul className="legend stagger">
            {mine.legend.map((item) => (
              <li key={item.title} className="legend-item pressable">
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
        <Screen name="mine" alt={mine.screenAlt} />
      </div>

      <div className="split split-flip">
        <Screen name="lift" alt={mine.liftAlt} />
        <div className="split-copy">
          <h3 className="reveal">{mine.liftTitle}</h3>
          <p className="reveal">{mine.liftText}</p>
          <div className="reveal">
            <Stage moment="panel" label={mine.liftStage} hint={mine.liftHint} />
          </div>
        </div>
      </div>
    </Room>
  )
}
