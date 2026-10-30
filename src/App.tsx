import { Community } from './components/Community'
import { Footer } from './components/Footer'
import { Game } from './components/Game'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Legacy } from './components/Legacy'
import { Rebuild } from './components/Rebuild'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Legacy />
        <Game />
        <Rebuild />
        <Community />
      </main>
      <Footer />
    </>
  )
}
