import { socials } from '../content'

export function Community() {
  return (
    <section className="community" id="community">
      <div className="section-inner">
        <img src="/media/kiwis.webp" alt="" width="110" height="110" loading="lazy" />
        <h2>Get back in the mine</h2>
        <p className="section-lede">Follow the rebuild and be first to hear when we're back.</p>
        <ul className="social-list">
          {socials.map((social) => (
            <li key={social.label}>
              <a className="btn btn-white" href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
