import { useState } from 'react'
import { characters } from '../content'
import { Room, RoomHead, Sprite } from './Kit'

export function Characters() {
  const [look, setLook] = useState(characters.looks[0])

  return (
    <Room id="characters" tone="slate">
      <RoomHead eyebrow={characters.eyebrow} title={characters.title} lede={characters.lede} kind="planned" />
      <div className="dresser">
        <div className="card dresser-try reveal">
          <div className="dresser-stage" key={look.sprite}>
            <Sprite name={look.sprite} size={192} alt={`A miner in ${look.label}`} />
          </div>
          <h3>{characters.tryTitle}</h3>
          <div className="swatches" role="group" aria-label={characters.tryTitle}>
            {characters.looks.map((option) => (
              <button
                key={option.sprite}
                className="swatch pressable"
                type="button"
                style={{ background: option.color }}
                aria-label={option.label}
                aria-pressed={option.sprite === look.sprite}
                onClick={() => setLook(option)}
              />
            ))}
          </div>
          <p className="muted">{characters.tryText}</p>
        </div>
        <div>
          <ul className="slots stagger">
            {characters.slots.map((slot) => (
              <li key={slot}>{slot}</li>
            ))}
          </ul>
          <ul className="rule-list stagger">
            {characters.rules.map((rule) => (
              <li key={rule.title} className="card">
                <h4>{rule.title}</h4>
                <p>{rule.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Room>
  )
}
