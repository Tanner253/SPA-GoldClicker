// The site's shared motion kit: press response and list reveals, using the timings in the style bible.
const RELEASE_MS = 320

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function watchPresses() {
  let held: Element | null = null

  const press = (event: PointerEvent) => {
    if (event.button !== 0) return
    held = (event.target as Element).closest('.btn, .pressable')
    held?.classList.remove('is-up')
    held?.classList.add('is-down')
  }

  const release = () => {
    if (!held) return
    const element = held
    held = null
    element.classList.remove('is-down')
    element.classList.add('is-up')
    window.setTimeout(() => element.classList.remove('is-up'), RELEASE_MS)
  }

  document.addEventListener('pointerdown', press, { passive: true })
  document.addEventListener('pointerup', release, { passive: true })
  document.addEventListener('pointercancel', release, { passive: true })

  return () => {
    document.removeEventListener('pointerdown', press)
    document.removeEventListener('pointerup', release)
    document.removeEventListener('pointercancel', release)
  }
}

function watchReveals() {
  if (prefersReducedMotion()) return () => {}

  for (const list of document.querySelectorAll('.stagger')) {
    Array.from(list.children).forEach((item, index) => {
      ;(item as HTMLElement).style.setProperty('--i', String(Math.min(index, 7)))
    })
  }

  const items = document.querySelectorAll('.reveal, .stagger > *')
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -6% 0px' },
  )

  for (const item of items) {
    item.classList.add('pre-reveal')
    observer.observe(item)
  }

  return () => observer.disconnect()
}

export function initFeel() {
  const stopPresses = watchPresses()
  const stopReveals = watchReveals()
  return () => {
    stopPresses()
    stopReveals()
  }
}
