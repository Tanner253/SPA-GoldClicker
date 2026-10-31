// The dig, merge and panel moments from the art bake-off, in style A. Timings match the motion table in the style bible.
const SIZE = 480
const SCALE = 2
const TILE = 96
const SNAP = 6
const INK = '#1a1014'
const GOLD = ['#ffc93c', '#ffe08a', '#f0a92c']
const ROCK = ['#db8a60', '#ffc93c', '#7f3a26']
const GRAVITY = 26 * TILE
const POSE = 1000 / 12
const MINER = 96
const CREW = 96
const HAND = [30, -30]

const clamp01 = (t: number) => Math.min(1, Math.max(0, t))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const easeOut = (t: number) => 1 - (1 - t) * (1 - t)
const easeIn = (t: number) => t * t
const rand = (low: number, high: number) => low + Math.random() * (high - low)
const springUp = (t: number) => 1 - Math.exp(-8 * clamp01(t)) * Math.cos(9 * clamp01(t))
const snap = (value: number) => Math.round(value / SNAP) * SNAP
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

function keyed(t: number, stops: [number, number][]) {
  if (t <= stops[0][0]) return stops[0][1]
  for (let index = 1; index < stops.length; index++) {
    const [t0, v0] = stops[index - 1]
    const [t1, v1] = stops[index]
    if (t < t1) return lerp(v0, v1, easeOut((t - t0) / (t1 - t0)))
  }
  return stops[stops.length - 1][1]
}

type Art = Record<string, HTMLImageElement>
type Speck = { x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string; size: number }
type Float = { text: string; x: number; y: number; color: string; px: number; age: number }
type Ring = { x: number; y: number; age: number }

abstract class Stage {
  protected g: CanvasRenderingContext2D
  protected specks: Speck[] = []
  protected floats: Float[] = []
  protected rings: Ring[] = []
  protected shakeAge = Infinity
  protected shakeSize = 0

  constructor(
    canvas: HTMLCanvasElement,
    protected art: Art,
  ) {
    this.g = canvas.getContext('2d')!
  }

  abstract trigger(): void
  abstract update(dt: number, auto: boolean): void
  abstract busy(): boolean
  abstract draw(): void

  protected shake(size: number) {
    if (reducedMotion.matches) return
    this.shakeAge = 0
    this.shakeSize = size
  }

  protected burst(x: number, y: number, count: number, speed: number, colors: string[], size = 1) {
    for (let index = 0; index < count; index++) {
      const angle = rand(0, Math.PI * 2)
      const reach = Math.sqrt(Math.random()) * speed
      const life = rand(300, 650)
      this.specks.push({
        x: x + rand(-14, 14),
        y: y + rand(-14, 14),
        vx: Math.cos(angle) * reach,
        vy: Math.sin(angle) * reach - speed * 0.55,
        life,
        maxLife: life,
        color: colors[index % colors.length],
        size: size * rand(0.8, 1.25),
      })
    }
  }

  protected label(text: string, x: number, y: number, color: string, px: number) {
    this.floats.push({ text, x, y, color, px, age: 0 })
  }

  protected stepEffects(dt: number) {
    const seconds = dt / 1000
    this.shakeAge += dt
    for (const speck of this.specks) {
      speck.life -= dt
      speck.vy += GRAVITY * seconds
      speck.x += speck.vx * seconds
      speck.y += speck.vy * seconds
    }
    this.specks = this.specks.filter((speck) => speck.life > 0)
    for (const float of this.floats) float.age += dt
    this.floats = this.floats.filter((float) => float.age < 640)
    for (const ring of this.rings) ring.age += dt
    this.rings = this.rings.filter((ring) => ring.age < 260)
  }

  protected begin() {
    const { g } = this
    g.setTransform(SCALE, 0, 0, SCALE, 0, 0)
    g.globalAlpha = 1
    g.imageSmoothingEnabled = false
    if (this.shakeAge < 180) {
      const fall = 1 - this.shakeAge / 180
      const strength = fall * fall * this.shakeSize
      g.translate(snap(Math.sin(this.shakeAge * 0.11 + 1.3) * strength), snap(Math.cos(this.shakeAge * 0.093) * strength))
    }
  }

  protected endShake() {
    this.g.setTransform(SCALE, 0, 0, SCALE, 0, 0)
  }

  protected sprite(image: HTMLImageElement, x: number, y: number, width: number, height: number) {
    const w = snap(width)
    const h = snap(height)
    this.g.drawImage(image, snap(x) - w / 2, snap(y) - h / 2, w, h)
  }

  protected text(value: string, x: number, y: number, px: number, color: string, align: CanvasTextAlign = 'center') {
    const { g } = this
    g.font = `${px}px "Lilita One", sans-serif`
    g.textAlign = align
    g.textBaseline = 'middle'
    g.lineJoin = 'round'
    g.lineWidth = px * 0.24
    g.strokeStyle = INK
    g.strokeText(value, x, y)
    g.fillStyle = color
    g.fillText(value, x, y)
  }

  protected drawEffects() {
    const { g } = this
    for (const speck of this.specks) {
      const scale = lerp(0.4, 1, speck.life / speck.maxLife) * speck.size
      const size = scale > 0.7 ? 12 : 6
      g.fillStyle = speck.color
      g.fillRect(snap(speck.x) - size / 2, snap(speck.y) - size / 2, size, size)
    }
    for (const ring of this.rings) {
      const radius = lerp(26, 118, easeOut(ring.age / 260))
      g.fillStyle = GOLD[1]
      for (let index = 0; index < 28; index++) {
        const angle = (index / 28) * Math.PI * 2
        g.fillRect(snap(ring.x + Math.cos(angle) * radius) - 3, snap(ring.y + Math.sin(angle) * radius) - 3, 6, 6)
      }
    }
    for (const float of this.floats) {
      const p = float.age / 640
      g.globalAlpha = p > 0.66 ? (1 - p) / 0.34 : 1
      const pop = keyed(float.age, [
        [0, 0.6],
        [90, 1.18],
        [170, 1],
      ])
      this.text(float.text, float.x, snap(float.y - easeOut(p) * 48), float.px * pop, float.color)
      g.globalAlpha = 1
    }
  }
}

/* Dig: windup 90, strike 60, hit-stop 45, then shake, punch and particles. The third hit breaks the tile. */
const WINDUP = 90
const STRIKE = 60
const HITSTOP = 45
const RECOVER = 170
const IMPACT = WINDUP + STRIKE
const RELEASE = IMPACT + HITSTOP
const SWING_EVERY = 700
const BREAK_HOLD = 900
const DROP_AT = 40
const DROP = 170
const COIN_FLIGHT = 380
const TILE_NAMES = ['', '2', '3']
const CRACKS: [number, number][][][] = [
  [
    [
      [48, 8],
      [40, 30],
      [54, 44],
      [44, 62],
    ],
  ],
  [
    [
      [54, 44],
      [78, 50],
      [84, 72],
    ],
    [
      [40, 30],
      [18, 36],
      [12, 58],
    ],
    [
      [44, 62],
      [32, 86],
    ],
  ],
]

type Shard = { sx: number; sy: number; part: number; x: number; y: number; vx: number; vy: number; turn: number; spin: number; age: number }
type FlyingCoin = { age: number; x: number; y: number; bend: number; done: boolean }

function pickFrame(age: number) {
  if (age < POSE) return 0
  if (age < IMPACT) return 2
  if (age < RELEASE + POSE) return 3
  if (age < RELEASE + POSE * 2) return 2
  return 1
}

class DigStage extends Stage {
  private total = 240
  private shown = 240
  private bumpAge = Infinity
  private coins: FlyingCoin[] = []
  private shards: Shard[] = []
  private hits = 0
  private broken = false
  private brokenAge = 0
  private landed = false
  private swingAge = Infinity
  private sinceSwing = SWING_EVERY - 300
  private struck = true
  private pending = false
  private queued = false
  private flashAge = Infinity
  private punchAge = Infinity

  private reset() {
    this.hits = 0
    this.broken = false
    this.brokenAge = 0
    this.landed = false
    this.swingAge = Infinity
    this.sinceSwing = SWING_EVERY - 300
    this.struck = true
    this.pending = false
    this.queued = false
    this.flashAge = Infinity
    this.punchAge = Infinity
  }

  trigger() {
    if (this.pending) this.release()
    if (this.broken) this.reset()
    if (this.swingAge < WINDUP) this.swingAge = WINDUP
    if (this.swingAge < IMPACT) this.queued = true
    else this.startSwing()
  }

  private startSwing() {
    this.swingAge = 0
    this.sinceSwing = 0
    this.struck = false
  }

  private release() {
    this.pending = false
    this.punchAge = 0
    this.shake(this.hits >= 3 ? 16 : 9)
    this.burst(246, 318, 10 + Math.floor(rand(0, 5)), 430, ROCK)
    this.label('+2', 292, 296, '#fff8e7', 24)
    if (this.hits >= 3) this.breakTile()
  }

  private breakTile() {
    this.broken = true
    this.brokenAge = 0
    this.burst(240, 336, 14, 560, ROCK, 1.35)
    this.burst(240, 336, 9, 460, GOLD)
    const part = this.art.gold.naturalWidth / 2
    for (let index = 0; index < 4; index++) {
      const across = index % 2
      const down = index >> 1
      this.shards.push({
        sx: across * part,
        sy: down * part,
        part,
        x: 192 + across * 48 + 24,
        y: 288 + down * 48 + 24,
        vx: (across ? 1 : -1) * rand(170, 300),
        vy: -rand(240, 400) + down * 150,
        turn: 0,
        spin: (across ? 1 : -1) * rand(5, 10),
        age: 0,
      })
    }
    for (let index = 0; index < 6; index++) {
      this.coins.push({
        age: -index * 35,
        x: 240 + (index % 2 ? 1 : -1) * rand(34, 66),
        y: 336 + rand(-24, 12),
        bend: rand(-30, 90),
        done: false,
      })
    }
  }

  update(dt: number, auto: boolean) {
    this.swingAge += dt
    this.flashAge += dt
    if (!this.struck && this.swingAge >= IMPACT) {
      this.struck = true
      this.hits += 1
      this.flashAge = 0
      this.pending = true
    }
    if (this.pending && this.swingAge < RELEASE) return
    if (this.pending) this.release()

    this.stepEffects(dt)
    this.punchAge += dt
    this.bumpAge += dt
    this.stepPieces(dt)
    if (this.shown < this.total) this.shown += Math.ceil((this.total - this.shown) * 0.3)

    if (this.broken) {
      this.brokenAge += dt
      if (!this.landed && this.brokenAge >= DROP_AT + DROP) {
        this.landed = true
        this.shake(8)
        this.burst(240, 384, 6, 240, ROCK)
      }
      if (this.brokenAge >= BREAK_HOLD) this.reset()
      return
    }
    this.sinceSwing += dt
    if (this.swingAge < RELEASE) return
    if (this.queued) {
      this.queued = false
      this.startSwing()
    } else if (auto && this.sinceSwing >= SWING_EVERY) {
      this.startSwing()
    }
  }

  private stepPieces(dt: number) {
    const seconds = dt / 1000
    for (const shard of this.shards) {
      shard.age += dt
      shard.vy += GRAVITY * 0.7 * seconds
      shard.x += shard.vx * seconds
      shard.y += shard.vy * seconds
      shard.turn += shard.spin * seconds
    }
    this.shards = this.shards.filter((shard) => shard.age < 520)
    for (const coin of this.coins) {
      coin.age += dt
      if (!coin.done && coin.age >= COIN_FLIGHT) {
        coin.done = true
        this.total += 5
        this.bumpAge = 0
      }
    }
    this.coins = this.coins.filter((coin) => !coin.done)
  }

  busy() {
    return (
      this.swingAge < RELEASE + RECOVER ||
      this.broken ||
      this.coins.length > 0 ||
      this.shards.length > 0 ||
      this.specks.length > 0 ||
      this.floats.length > 0 ||
      this.queued
    )
  }

  draw() {
    this.begin()
    this.drawBoard()
    this.drawGoldTile()
    this.drawShards()
    this.drawMiner()
    this.drawEffects()
    this.drawCoins()
    this.endShake()
    this.drawCounter()
  }

  private drawBoard() {
    const { g, art } = this
    for (let row = -1; row <= 5; row++) {
      for (let col = -1; col <= 5; col++) {
        const hole = row === 3 && col === 2
        const name = row < 3 || hole ? 'wall' : row === 3 ? 'top' : 'mid'
        const variant = TILE_NAMES[((row + 1) * 7 + (col + 1) * 5) % 3]
        g.drawImage(art[name + variant], col * TILE, row * TILE, TILE, TILE)
      }
    }
  }

  private drawGoldTile() {
    if (this.broken) return
    const { g, art } = this
    const grow = keyed(this.punchAge, [
      [0, 0],
      [50, 14],
      [170, 0],
    ])
    const extra = Math.round(grow / 12) * 12
    const left = TILE * 2 - extra / 2
    const top = TILE * 3 - extra / 2
    const size = TILE + extra
    g.drawImage(art.gold, left, top, size, size)
    this.drawCracks(left, top, size / TILE)
    if (this.flashAge < 70) {
      g.globalAlpha = 0.85
      g.fillStyle = '#fff8e7'
      g.fillRect(left, top, size, size)
      g.globalAlpha = 1
    }
  }

  private drawCracks(left: number, top: number, scale: number) {
    const { g } = this
    g.fillStyle = '#2a120c'
    const stages = Math.min(this.hits, CRACKS.length)
    for (let stage = 0; stage < stages; stage++) {
      for (const path of CRACKS[stage]) {
        for (let index = 1; index < path.length; index++) {
          const [x0, y0] = path[index - 1]
          const [x1, y1] = path[index]
          const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 6)
          for (let step = 0; step <= steps; step++) {
            const x = snap(lerp(x0, x1, step / steps) * scale)
            const y = snap(lerp(y0, y1, step / steps) * scale)
            g.fillRect(left + x - 3, top + y - 3, 6, 6)
          }
        }
      }
    }
  }

  private drawShards() {
    const { g, art } = this
    for (const shard of this.shards) {
      const size = 48 * lerp(1, 0.6, shard.age / 520)
      g.save()
      g.translate(snap(shard.x), snap(shard.y))
      g.rotate((Math.round(shard.turn / (Math.PI / 2)) * Math.PI) / 2)
      const drawn = snap(size)
      g.drawImage(art.gold, shard.sx, shard.sy, shard.part, shard.part, -drawn / 2, -drawn / 2, drawn, drawn)
      g.restore()
    }
  }

  private minerPose() {
    const age = this.swingAge
    const land = this.brokenAge - DROP_AT - DROP
    if (this.broken && land >= 0 && land < POSE) return { sx: 1.25, sy: 0.75, shift: 0 }
    if (age < POSE) return { sx: 0.94, sy: 1.06, shift: 0 }
    if (age < RELEASE + POSE) return { sx: 1.06, sy: 0.94, shift: 6 }
    return { sx: 1, sy: 1, shift: 0 }
  }

  private drawMiner() {
    const { g, art } = this
    const pose = this.minerPose()
    const drop = this.broken ? TILE * easeIn(clamp01((this.brokenAge - DROP_AT) / DROP)) : 0
    const feet = 288 + snap(drop)
    const middle = 240 + pose.shift
    const w = snap(MINER * pose.sx)
    const h = snap(MINER * pose.sy)
    g.drawImage(art.miner, middle - w / 2, feet - h, w, h)
    const handX = middle + HAND[0]
    const handY = feet + HAND[1] * pose.sy
    g.drawImage(art.pick, pickFrame(this.swingAge) * 40, 0, 40, 40, snap(handX) - 120, snap(handY) - 120, 240, 240)
  }

  private drawCoins() {
    for (const coin of this.coins) {
      if (coin.age < 0) continue
      const t = easeIn(clamp01(coin.age / COIN_FLIGHT))
      const midX = coin.x + coin.bend
      const midY = coin.y - 190
      const x = (1 - t) * (1 - t) * coin.x + 2 * (1 - t) * t * midX + t * t * 356
      const y = (1 - t) * (1 - t) * coin.y + 2 * (1 - t) * t * midY + t * t * 34
      this.sprite(this.art.coin, x, y, 42, 42)
    }
  }

  private drawCounter() {
    const { g, art } = this
    const bump = keyed(this.bumpAge, [
      [0, 1.22],
      [140, 1],
    ])
    g.save()
    g.translate(398, 34)
    g.scale(bump, bump)
    g.fillStyle = 'rgba(26, 16, 20, .84)'
    g.beginPath()
    g.roundRect(-70, -22, 140, 44, 16)
    g.fill()
    g.drawImage(art.coin, -63, -16, 32, 32)
    this.text(String(this.shown), 60, 2, 26, GOLD[0], 'right')
    g.restore()
  }
}

/* Merge: lift 90, arc 220, squash 80, then tier 2 pops over 320 and holds 900. */
const LIFT = 90
const FLIGHT = 220
const SQUASH = 80
const MERGE_POP = 320
const MERGE_HOLD = 900
const MERGE_GAP = 500
const CONTACT = LIFT + FLIGHT
const BIRTH = CONTACT + SQUASH
const MERGE_END = BIRTH + MERGE_POP + MERGE_HOLD
const CELL_W = 136
const CELL_H = 112
const CELL_GAP = 8

const cellCenter = (col: number, row: number) => [
  28 + col * (CELL_W + CELL_GAP) + CELL_W / 2,
  64 + row * (CELL_H + CELL_GAP) + CELL_H / 2,
]

class MergeStage extends Stage {
  private age = Infinity
  private idle = MERGE_GAP - 300
  private born = false

  trigger() {
    this.age = 0
    this.born = false
    this.specks = []
    this.floats = []
    this.rings = []
  }

  update(dt: number, auto: boolean) {
    this.stepEffects(dt)
    if (this.age === Infinity) {
      this.idle += dt
      if (auto && this.idle >= MERGE_GAP) this.trigger()
      return
    }
    this.age += dt
    if (!this.born && this.age >= BIRTH) {
      this.born = true
      const [x, y] = cellCenter(2, 1)
      this.burst(x, y, 18, 480, GOLD)
      this.rings.push({ x, y, age: 0 })
      this.label('Level 2', x, y - 74, GOLD[0], 30)
      this.shake(7)
    }
    if (this.age >= MERGE_END) {
      this.age = Infinity
      this.idle = 0
    }
  }

  busy() {
    return this.age !== Infinity || this.specks.length > 0
  }

  private drawBackdrop() {
    const { g, art } = this
    for (let row = -1; row <= 5; row++) {
      for (let col = -1; col <= 5; col++) {
        g.drawImage(art['wall' + TILE_NAMES[((row + 1) * 7 + (col + 1) * 5) % 3]], col * TILE, row * TILE, TILE, TILE)
      }
    }
    g.imageSmoothingEnabled = true
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const [x, y] = cellCenter(col, row)
        g.drawImage(art.cell, x - CELL_W / 2, y - CELL_H / 2, CELL_W, CELL_H)
      }
    }
    g.imageSmoothingEnabled = false
  }

  private crew(image: HTMLImageElement, x: number, y: number, sx: number, sy: number) {
    this.sprite(image, x, y, CREW * sx, CREW * sy)
  }

  draw() {
    const { g, art } = this
    const t = this.age
    const [fromX, fromY] = cellCenter(0, 1)
    const [toX, toY] = cellCenter(2, 1)
    this.begin()
    this.drawBackdrop()
    if (t < BIRTH) {
      g.lineWidth = 6
      g.strokeStyle = GOLD[0]
      g.globalAlpha = clamp01(t / LIFT)
      g.beginPath()
      g.roundRect(toX - CELL_W / 2 + 3, toY - CELL_H / 2 + 3, CELL_W - 6, CELL_H - 6, 14)
      g.stroke()
      g.globalAlpha = 1
    }
    if (t === Infinity) {
      this.crew(art.tier1, fromX, fromY, 1, 1)
      this.crew(art.tier1, toX, toY, 1, 1)
    } else if (t < CONTACT) {
      this.crew(art.tier1, toX, toY, 1, 1)
      const p = easeIn(clamp01((t - LIFT) / FLIGHT))
      const lift = easeOut(clamp01(t / LIFT))
      const scale = t < LIFT ? lerp(1, 1.25, lift) : lerp(1.25, 1, p)
      const x = lerp(fromX, toX, p)
      const y = lerp(fromY, toY, p)
      g.fillStyle = 'rgba(0, 0, 0, .3)'
      g.beginPath()
      g.ellipse(snap(x), snap(y) + 46, 36 - 10 * lift * Math.sin(Math.PI * p), 9, 0, 0, Math.PI * 2)
      g.fill()
      this.crew(art.tier1, x, y - lift * 10 - Math.sin(Math.PI * p) * 84, scale, scale)
    } else if (t < BIRTH) {
      const sy = keyed(t - CONTACT, [
        [0, 1],
        [40, 0.68],
        [SQUASH, 0.6],
      ])
      this.crew(art.tier1, toX, toY + (1 - sy) * CREW * 0.5, 2 - sy, sy)
    } else {
      const scale = keyed(t - BIRTH, [
        [0, 0],
        [130, 1.3],
        [225, 0.92],
        [MERGE_POP, 1],
      ])
      if (scale > 0.02) this.crew(art.tier2, toX, toY, scale, scale)
      if ((t - BIRTH) / 70 < 1) {
        g.globalAlpha = 0.8
        g.fillStyle = '#fff8e7'
        g.beginPath()
        g.roundRect(toX - CELL_W / 2 + 2, toY - CELL_H / 2 + 2, CELL_W - 4, CELL_H - 4, 18)
        g.fill()
        g.globalAlpha = 1
      }
    }
    this.drawEffects()
    this.endShake()
  }
}

/* Button and panel: press 60, overshoot, scrim, three cards 70 apart with spring, hold 1200, flick out. */
const PRESS = 60
const SINK = 10
const CARD_AT = PRESS + 80
const CARD_GAP = 70
const CARD_TIME = 340
const CLOSE_AT = CARD_AT + CARD_GAP * 2 + CARD_TIME + 1200
const FLICK = 150
const PANEL_END = CLOSE_AT + FLICK + 40
const PANEL_GAP = 800
const PANEL_K = SIZE / 1080

class PanelStage extends Stage {
  private age = Infinity
  private idle = PANEL_GAP - 300

  trigger() {
    this.age = 0
  }

  update(dt: number, auto: boolean) {
    if (this.age === Infinity) {
      this.idle += dt
      if (auto && this.idle >= PANEL_GAP) this.trigger()
      return
    }
    this.age += dt
    if (this.age >= PANEL_END) {
      this.age = Infinity
      this.idle = 0
    }
  }

  busy() {
    return this.age !== Infinity
  }

  draw() {
    const { g, art } = this
    const t = this.age
    this.begin()
    g.imageSmoothingEnabled = true
    g.imageSmoothingQuality = 'high'
    g.drawImage(art.panelbg, 0, 0, SIZE, SIZE)
    const w = art.button.naturalWidth * PANEL_K
    const h = art.button.naturalHeight * PANEL_K
    const x = 450 * PANEL_K
    const y = 805 * PANEL_K
    g.fillStyle = '#140d12'
    g.beginPath()
    g.roundRect(x + 3, y + 3, w - 6, h - 6, 12)
    g.fill()
    const sink =
      t === Infinity
        ? 0
        : keyed(t, [
            [0, 0],
            [PRESS, SINK],
            [PRESS + 90, 0],
          ])
    const scale =
      t === Infinity
        ? 1
        : keyed(t, [
            [0, 1],
            [PRESS, 0.97],
            [PRESS + 70, 1.06],
            [PRESS + 170, 1],
          ])
    g.save()
    g.translate(x + w / 2, y + h / 2 + sink)
    g.scale(scale, scale)
    g.drawImage(art.button, -w / 2, -h / 2, w, h)
    g.restore()
    if (t === Infinity) return
    const open = clamp01((t - PRESS) / 120)
    const close = clamp01((t - CLOSE_AT) / FLICK)
    g.fillStyle = `rgba(10, 6, 12, ${0.68 * open * (1 - close)})`
    g.fillRect(0, 0, SIZE, SIZE)
    const cardW = art.card1.naturalWidth * PANEL_K
    const cardH = art.card1.naturalHeight * PANEL_K
    for (let index = 0; index < 3; index++) {
      const start = CARD_AT + index * CARD_GAP
      if (t < start) continue
      const slot = 72 + index * (cardH + 12)
      const away = easeIn(clamp01((t - CLOSE_AT - (2 - index) * 20) / FLICK))
      const cardY = lerp(SIZE + 16, slot, springUp((t - start) / CARD_TIME)) + away * (SIZE - slot + 16)
      g.drawImage(art[`card${index + 1}`], (SIZE - cardW) / 2, cardY, cardW, cardH)
    }
  }
}

export type Moment = 'dig' | 'merge' | 'panel'

const MOMENTS = { dig: DigStage, merge: MergeStage, panel: PanelStage }
const FILES: Record<string, string> = {
  wall: 'wall.png',
  wall2: 'wall2.png',
  wall3: 'wall3.png',
  top: 'top.png',
  top2: 'top2.png',
  top3: 'top3.png',
  mid: 'mid.png',
  mid2: 'mid2.png',
  mid3: 'mid3.png',
  gold: 'goldtile.png',
  miner: 'miner.png',
  pick: 'pick.webp',
  coin: 'coin.png',
  tier1: 'crew1.png',
  tier2: 'crew2.png',
  cell: 'cell.webp',
  panelbg: 'panelbg.webp',
  button: 'button.webp',
  card1: 'card1.webp',
  card2: 'card2.webp',
  card3: 'card3.webp',
}
const NEEDS: Record<Moment, string[]> = {
  dig: ['wall', 'wall2', 'wall3', 'top', 'top2', 'top3', 'mid', 'mid2', 'mid3', 'gold', 'miner', 'pick', 'coin'],
  merge: ['wall', 'wall2', 'wall3', 'tier1', 'tier2', 'cell'],
  panel: ['panelbg', 'button', 'card1', 'card2', 'card3'],
}

const images = new Map<string, Promise<HTMLImageElement>>()

function loadImage(name: string) {
  let image = images.get(name)
  if (!image) {
    image = new Promise((resolve, reject) => {
      const element = new Image()
      element.onload = () => resolve(element)
      element.onerror = reject
      element.src = `/media/game/${FILES[name]}`
    })
    images.set(name, image)
  }
  return image
}

async function loadArt(moment: Moment) {
  const entries = await Promise.all(NEEDS[moment].map(async (name) => [name, await loadImage(name)] as const))
  await document.fonts.load('30px "Lilita One"').catch(() => null) // a blocked font must not blank the stage
  return Object.fromEntries(entries) as Art
}

type Live = { stage: Stage; visible: boolean }

const live = new Set<Live>()
let last = 0
let looping = false

function wake() {
  if (looping) return
  looping = true
  last = performance.now()
  requestAnimationFrame(frame)
}

function frame(now: number) {
  const dt = Math.min(now - last, 50)
  last = now
  let running = false
  for (const entry of live) {
    const auto = entry.visible && !reducedMotion.matches
    if (auto || entry.stage.busy()) {
      entry.stage.update(dt, auto)
      entry.stage.draw()
      running = true
    }
  }
  looping = running
  if (running) requestAnimationFrame(frame)
}

export function mountStage(canvas: HTMLCanvasElement, moment: Moment, eager: boolean) {
  canvas.width = canvas.height = SIZE * SCALE
  let entry: Live | undefined
  let gone = false

  const seen = new IntersectionObserver(
    (entries) => {
      const visible = entries[entries.length - 1].isIntersecting
      if (entry) entry.visible = visible
      if (visible) wake()
    },
    { threshold: 0.15 },
  )

  const start = async () => {
    const art = await loadArt(moment)
    if (gone) return
    entry = { stage: new MOMENTS[moment](canvas, art), visible: false }
    live.add(entry)
    entry.stage.draw()
    seen.observe(canvas)
  }

  const near = new IntersectionObserver(
    (entries) => {
      if (!entries[entries.length - 1].isIntersecting) return
      near.disconnect()
      void start()
    },
    { rootMargin: '500px 0px' },
  )
  if (eager) void start()
  else near.observe(canvas)

  return {
    trigger() {
      if (!entry) return
      entry.stage.trigger()
      entry.stage.draw()
      wake()
    },
    destroy() {
      gone = true
      near.disconnect()
      seen.disconnect()
      if (entry) live.delete(entry)
    },
  }
}

reducedMotion.addEventListener('change', wake)
