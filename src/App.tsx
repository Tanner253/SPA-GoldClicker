import { useEffect } from 'react'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Miner, PlayBadge } from './components/Kit'
import { DeepSurvivor } from './components/DeepSurvivor'
import { Loop } from './components/Loop'
import { Showcase } from './components/Showcase'
import { Stats } from './components/Stats'
import { Status } from './components/Status'
import { Themes } from './components/Themes'
import { modes, town, wardrobe } from './content'
import { initFeel } from './motion/feel'

export function App() {
  useEffect(() => initFeel(), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <DeepSurvivor />
        <Showcase id="modes" tone="clay" title={modes.title} lede={modes.lede} shots={modes.shots} />
        <Loop />
        <Features />
        <Showcase id="wardrobe" tone="space" title={wardrobe.title} lede={wardrobe.lede} shots={wardrobe.shots} />
        <Showcase id="town" tone="sky" title={town.title} lede={town.lede} shots={town.shots} />
        <Themes />
        <Status />
        <section className="closing">
          <div className="band band-clay" />
          <div className="closing-inner reveal">
            <Miner strip="emote_dance" frames={4} scale={5} />
            <PlayBadge community />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
