// The site's one bit of shared motion: things spring up from below as they scroll in, with the style bible's timing.
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function initFeel() {
  if (prefersReducedMotion()) return

  const items = document.querySelectorAll('.reveal')
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
    if (item.getBoundingClientRect().top < window.innerHeight) continue
    item.classList.add('pre-reveal')
    observer.observe(item)
  }

  return () => observer.disconnect()
}
