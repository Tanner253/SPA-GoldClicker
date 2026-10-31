import { depth } from '../content'
import { Chip, Room, RoomHead, Screen, Sprite } from './Kit'

export function Depth() {
  return (
    <Room id="depth" tone="slate">
      <RoomHead eyebrow={depth.eyebrow} title={depth.title} lede={depth.lede} kind="building" />

      <div className="depth-screens">
        <Screen name="mine" alt={depth.clayAlt} />
        <Screen name="slate" alt={depth.slateAlt} />
        <Screen name="slate-live" alt={depth.liveAlt} live />
      </div>

      <h3 className="reveal">{depth.sitesTitle}</h3>
      <ol className="sites stagger">
        {depth.sites.map((site) => (
          <li key={site.name} className="site">
            <span className="site-swatch" style={{ background: site.swatch }} aria-hidden="true" />
            <div>
              <div className="site-name">
                <h4>{site.name}</h4>
                <Chip kind={site.status} />
              </div>
              <p>{site.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="muted reveal">{depth.sitesNote}</p>

      <div className="split">
        <div className="split-copy">
          <h3 className="reveal">{depth.treeTitle}</h3>
          <p className="reveal">{depth.treeText}</p>
          <ul className="rows stagger">
            {depth.extras.map((item) => (
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
          <p className="muted reveal">{depth.flavor}</p>
        </div>
        <Screen name="tree" alt={depth.treeAlt} />
      </div>
    </Room>
  )
}
