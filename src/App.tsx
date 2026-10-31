import { useCallback, useEffect, useState } from 'react'
import { Camp } from './components/Camp'
import { Characters } from './components/Characters'
import { Community } from './components/Community'
import { Crew } from './components/Crew'
import { Depth } from './components/Depth'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Hud, MineMap } from './components/Hud'
import { Band, Secret } from './components/Kit'
import { Legacy } from './components/Legacy'
import { Mine } from './components/Mine'
import { Secrets } from './components/Secrets'
import { Status } from './components/Status'
import { Town } from './components/Town'
import { initFeel } from './motion/feel'

export function App() {
  const [mapOpen, setMapOpen] = useState(false)
  const openMap = useCallback(() => setMapOpen(true), [])
  const closeMap = useCallback(() => setMapOpen(false), [])

  useEffect(() => initFeel(), [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header onMap={openMap} />
      <main id="main">
        <Hero />
        <Band tone="clay" tag="12m" />
        <Mine />
        <Band tone="clay" tag="40m">
          <Secret id="gem" className="secret-gem" />
        </Band>
        <Camp />
        <Band tone="clay" tag="66m" />
        <Crew />
        <Band tone="lift" />
        <Band tone="slate" tag="120m">
          <Secret id="miner" className="secret-miner" />
        </Band>
        <Depth />
        <Band tone="slate" tag="200m" />
        <Town />
        <Band tone="slate" tag="260m">
          <Secret id="bat" className="secret-bat" />
        </Band>
        <Characters />
        <Band tone="slate" tag="340m" />
        <Secrets />
        <Status />
        <Band tone="bedrock" tag="999m" />
        <Legacy />
        <Community />
      </main>
      <Footer />
      <Hud onMap={openMap} />
      <MineMap open={mapOpen} onClose={closeMap} />
    </>
  )
}
