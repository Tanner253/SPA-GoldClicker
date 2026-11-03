import { useEffect } from 'react'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Miner, PlayBadge } from './components/Kit'
import { Loop } from './components/Loop'
import { Status } from './components/Status'
import { initFeel } from './motion/feel'

export function App() {
  useEffect(() => initFeel(), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <Loop />
        <Features />
        <Status />
        <section className="closing">
          <div className="band band-clay" />
          <div className="closing-inner reveal">
            <Miner strip="emote_dance" frames={4} scale={5} />
            <PlayBadge />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
