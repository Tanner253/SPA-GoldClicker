import { useEffect, useRef, useState, type MouseEvent } from 'react'

const STORAGE_KEY = 'gcm-site-nuggets'
const MAX_FLOATERS = 14

type Floater = { id: number; x: number; y: number }

function readSavedNuggets() {
  try {
    const saved = Number(localStorage.getItem(STORAGE_KEY))
    return Number.isSafeInteger(saved) && saved > 0 ? saved : 0
  } catch {
    return 0
  }
}

export function TapBar() {
  const [nuggets, setNuggets] = useState(readSavedNuggets)
  const [floaters, setFloaters] = useState<Floater[]>([])
  const nextFloaterId = useRef(0)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(nuggets))
    } catch {
      // Private windows can block storage. The counter still works for this visit.
    }
  }, [nuggets])

  const handleTap = (event: MouseEvent<HTMLButtonElement>) => {
    const box = event.currentTarget.getBoundingClientRect()
    // Keyboard presses report detail 0 and no pointer position, so float from the center.
    const fromKeyboard = event.detail === 0
    const floater = {
      id: nextFloaterId.current++,
      x: fromKeyboard ? box.width / 2 : event.clientX - box.left,
      y: fromKeyboard ? box.height / 2 : event.clientY - box.top,
    }
    setNuggets((count) => count + 1)
    setFloaters((current) => [...current, floater].slice(-MAX_FLOATERS))
  }

  const removeFloater = (id: number) => {
    setFloaters((current) => current.filter((floater) => floater.id !== id))
  }

  return (
    <div className="tap-stage">
      <div className="tap-rays" aria-hidden="true" />
      <button className="tap-bar" type="button" onClick={handleTap} aria-label="Tap the gold bar">
        <img src="/media/gold-bar.webp" alt="" width="760" height="792" draggable="false" />
        {floaters.map((floater) => (
          <span
            key={floater.id}
            className="tap-floater"
            style={{ left: floater.x, top: floater.y }}
            onAnimationEnd={() => removeFloater(floater.id)}
          >
            +1
          </span>
        ))}
      </button>
      <p className="tap-count">
        <strong>{nuggets.toLocaleString('en-US')}</strong> Gold Nuggets
      </p>
      <p className="tap-hint">{nuggets === 0 ? 'Go on, tap it.' : 'Old habits die hard.'}</p>
    </div>
  )
}
