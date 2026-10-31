import { secrets } from '../content'
import { useFound } from '../secrets'
import { Room, RoomHead, Sprite } from './Kit'

export function Secrets() {
  const found = useFound()
  const count = secrets.items.filter((item) => found.includes(item.id)).length

  return (
    <Room id="secrets" tone="dark">
      <RoomHead eyebrow={secrets.eyebrow} title={secrets.title} lede={secrets.lede} kind="planned" />
      <div className="card secret-card reveal">
        <h3>{secrets.pageTitle}</h3>
        <ul className="secret-slots">
          {secrets.items.map((item) => (
            <li key={item.id} className={found.includes(item.id) ? 'is-found' : ''}>
              <span className="icon-frame">
                <Sprite name={item.sprite} />
              </span>
            </li>
          ))}
        </ul>
        <p aria-live="polite">
          <strong>{count} of {secrets.items.length}.</strong> {count === secrets.items.length ? secrets.done : secrets.hint}
        </p>
      </div>
    </Room>
  )
}
