import { community, socials } from '../content'
import { Sprite } from './Kit'

export function Community() {
  return (
    <section className="community" id="community">
      <div className="wrap">
        <div className="community-miner">
          <Sprite name="crew1" size={96} />
        </div>
        <h2>{community.title}</h2>
        <p className="lede">{community.lede}</p>
        <ul className="social-list stagger">
          {socials.map((social) => (
            <li key={social.label}>
              <a className={`btn btn-${social.tone}`} href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
