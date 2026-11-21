// All site copy and links live here. Edit this file to change what the site says.

export const links = {
  privacy: '/privacy/',
  terms: '/terms/',
  deleteAccount: '/delete-account/',
  email: 'mailto:goldclickermining@gmail.com',
  play: 'https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker',
  web: 'https://play.earngcm.fun/',
  discord: 'https://discord.gg/mvbx7J295m',
  x: 'https://x.com/GCM_SOL',
}

export const socials = [
  { label: 'X', href: links.x },
  { label: 'Discord', href: links.discord },
  { label: 'Telegram', href: 'https://t.me/Gold_Clicker_Mining' },
  { label: 'Instagram', href: 'https://www.instagram.com/goldclickermining/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@osknyo' },
]

// The sticky header: the game's name, a few sections, the Play button and a menu on a phone.
export const nav = {
  name: 'Gold Clicker Mining',
  links: [
    { id: 'deep-survivor', label: 'Deep Survivor' },
    { id: 'modes', label: 'Modes' },
    { id: 'wardrobe', label: 'Wardrobe' },
    { id: 'town', label: 'Town' },
    { id: 'news', label: 'What’s new' },
  ],
  play: 'Get the game',
  playShort: 'Play',
  web: 'Play in your browser',
  menu: 'Menu',
}

export const cta = {
  label: 'Get it on Google Play',
  web: 'Play free in your browser',
  note: 'Free to play, with optional ads and in-game purchases.',
  community: [
    { label: 'Join the Discord', href: links.discord },
    { label: 'Follow on X', href: links.x },
  ],
}

// The numbers strip under the hero. Every figure must be true: installs are the owner's figure, the rest are counts
// read from the game server on `asOf` (python GCM-Web/review.py insights, and an aggregate count of settled runs).
// Round down, and change `asOf` when you change a number.
export const stats = {
  asOf: 'Figures as of 20 November 2026.',
  items: [
    { value: '73,000+', label: 'installs' },
    { value: '26,000+', label: 'dives dug on the new server' },
    { value: '700,000+', label: 'merges in the last two weeks' },
    { value: '86,000+', label: 'monsters beaten in Deep Survivor' },
  ],
}

// A row of phone screenshots with a line each. Pictures are 540 wide webp files in public/media/game/.
export type Shot = { shot: string; title: string; text: string; alt: string; height?: number; tag?: string }

export const deep = {
  badge: 'New game mode',
  title: 'Deep Survivor',
  lede: 'Hold the cave for as long as you can. Monsters pour in every round, your pick swings by itself, and every level up hands you a new weapon or makes one stronger.',
  points: [
    'Team up with 2 to 4 players in co-op',
    'Servers in the US and Europe',
    'A boss every five rounds',
    'Evolve your weapons. Your pets fight too',
  ],
  video: 'ds-trailer',
  poster: 'ds-poster',
  videoLabel: 'Deep Survivor trailer: real gameplay of a miner holding off a cave full of monsters.',
  shots: [
    { shot: 'ds-boss', title: 'A boss every five rounds', text: 'Break it, then get ready for the next wave.', alt: 'Deep Survivor: a boss fight, with beams of light cutting through a crowd of monsters.' },
    { shot: 'ds-evolve', title: 'Evolve your weapons', text: 'Level up a weapon far enough and it turns into something much bigger.', alt: 'Deep Survivor: the Evolve card, with Prism Beam ready to evolve.' },
    { shot: 'ds-pets', title: 'Your pets fight too', text: 'Bring your pets down and they join the fight.', alt: 'Deep Survivor: a miner and pets fighting a crowd of monsters in a glowing cave.' },
    { shot: 'coop-party', title: 'Bring your friends', text: 'Share a party code, fill up to four seats and go down together.', alt: 'Deep Survivor co-op: the Play with Friends card with a party code and two of four seats filled.' },
  ] as Shot[],
}

export const modes = {
  title: 'More ways to play',
  lede: 'Your camp, your crew and your looks come with you into every mode.',
  shots: [
    { shot: 'rush-gates', title: 'Crew Rush', text: 'Steer your crew through the best gates, grow the crowd and smash the boss rock at the end.', alt: 'Crew Rush: a crowd of miners heading for a row of gates marked x2 and /2.' },
    { shot: 'rush-boss', title: 'Weekly Crew Rush board', text: 'Every run counts toward this week’s best. How far up can you get?', alt: 'Crew Rush: a huge crowd of miners charging a boss rock at the end of the tunnel.' },
    { shot: 'dash-station', title: 'Minecart Dash', text: 'Ride the rails, jump the gaps and grab the gold. Our next game mode.', alt: 'The Mine Entrance in Town, with the Minecart Dash station by the tracks.', tag: 'Coming soon' },
  ] as Shot[],
}

export const wardrobe = {
  title: 'The new Wardrobe',
  lede: 'Over 100 cosmetics to mix and match: hats, coats, tools, pets, mounts, auras and more. Pick Body A or Body B, tap anything to try it on, and save your favourite looks. Looks only, so nobody gets stronger by being fancier.',
  shots: [
    { shot: 'wardrobe-body-a', title: 'Body A', text: 'Try on anything before you buy it.', alt: 'The Wardrobe with Body A chosen, a miner in a yellow hard hat holding a pick.' },
    { shot: 'wardrobe-body-b', title: 'Body B', text: 'Every look fits both bodies.', alt: 'The Wardrobe with Body B chosen, the same outfit on the second body type.' },
    { shot: 'wardrobe-mount', title: 'Ride in style', text: 'Mounts, auras, trails and entrances for when you walk into Town.', alt: 'The Wardrobe showing a miner riding the Big Big Mole mount.' },
  ] as Shot[],
}

export const town = {
  title: 'A whole Town to explore',
  lede: 'Between digs, walk the Town with other players. Chat, form a party, train your pets and take on jobs from the locals.',
  shots: [
    { shot: 'town-map', title: 'The Town map', text: 'A hand-painted map of every room. Tap a place and walk straight there.', alt: 'The painted Town map, with the Tavern, Workshop, World Shaft, Market and other places marked.' },
    { shot: 'town-plaza', title: 'Parties and chat', text: 'Meet other miners in the Plaza, team up and dig together.', alt: 'The Town Plaza full of miners chatting under the World Shaft tower.' },
    { shot: 'pet-card', title: 'Pets with a bond', text: 'Raise your bond and your pet learns tricks and helps on your digs.', alt: 'A pet card for an owl at bond level 7, with its dig talent, Gem Nose.' },
    { shot: 'pet-toss', title: 'Train them every day', text: 'Play a quick round of Treat Toss to grow your bond.', alt: 'Treat Toss: a pet catching falling treats while dodging TNT.' },
  ] as Shot[],
}

export const hero = {
  badge: 'Free mining game',
  title: 'Gold Clicker Mining',
  lede: 'Merge miners. Smash rocks. Dive for gold. Now with Deep Survivor, Crew Rush and co-op with friends.',
  clipAlt: 'Real gameplay: miners merge on the camp board and a stronger miner pops out.',
}

export const loop = {
  title: 'How it works',
  steps: [
    { title: 'Tap and merge', text: 'Smash rocks at camp. Drop two matching miners together and a stronger one pops out.' },
    { title: 'Dig a run', text: 'Dive for gold and trapped miners. Get out before your air does.' },
    { title: 'Pick your card', text: 'Every lift deals you cards. Each one changes the run.' },
    { title: 'Come back stronger', text: 'Your gold and your rescues go straight back into camp.' },
  ],
  note: 'Then go again. The rock got tougher, and so did you.',
}

export type Feature = {
  id: string
  tone: 'clay' | 'slate' | 'throat' | 'sky'
  title: string
  text: string
  alt: string
  shot?: string
  clip?: string
  sprite?: string
  height?: number
}

export const features: Feature[] = [
  {
    id: 'camp',
    tone: 'clay',
    title: 'Two go in. A better one comes out.',
    text: 'Every tap on the rock crunches. Every merge pops. Fill your bunkhouse and your crew keeps swinging, even while you’re away.',
    shot: 'shot-board',
    height: 790,
    alt: 'The camp: a cracked rock above a bunkhouse full of miners at every level, with Hire and Dig buttons.',
  },
  {
    id: 'dive',
    tone: 'clay',
    title: 'No two dives are the same',
    text: 'Every run is a fresh mine. Chase gold, dodge TNT, bats and boulders, and pull trapped miners out to grow your crew. Just watch your air.',
    shot: 'shot-dig',
    clip: 'clip-dig',
    height: 960,
    alt: 'Real gameplay: a miner digs down through the rock past veins of gold.',
  },
  {
    id: 'lift',
    tone: 'slate',
    title: 'Bank it, or flip a card',
    text: 'Reach a lift and you choose: take your haul home, or keep digging with a new card in hand. Wide Bit clears both sides of you. Blast Suit shrugs off explosions. Over 40 cards to unlock, so every build digs differently.',
    shot: 'shot-lift',
    height: 670,
    alt: 'The Lift Station: three cards to flip, with Wide Bit turned over.',
  },
  {
    id: 'walls',
    tone: 'throat',
    title: 'Then the rock bites back',
    text: 'At camp, bosses stand in your way, each with a face of its own. In the mine, Rockjaw waits at 300m. Knock its teeth out and the shaft keeps going.',
    shot: 'shot-rockjaw',
    height: 580,
    alt: 'The Rockjaw fight: a miner on a row of teeth under a huge stone jaw.',
  },
  {
    id: 'strike',
    tone: 'clay',
    title: 'Stuck? Go on strike.',
    text: 'Hit a wall and fire a Strike. Your board clears, your front line stays, and your whole crew comes back hitting far harder.',
    shot: 'shot-strike',
    height: 790,
    alt: 'The camp just after a boss breaks, with the Strike button lit up beside the rock.',
  },
  {
    id: 'gems',
    tone: 'slate',
    title: 'Gem veins',
    text: 'Now and then a rare rock turns up packed with Gems. You get 15 seconds, and every tap pays. Go.',
    sprite: 'gem',
    alt: 'A big blue gem.',
  },
]

// Camp themes: whole new looks for the merge camp. Jelly Armada gets the full tour.
// To add a theme to "More looks", drop one picture in public/media/game/ and add one entry to `more`. It is a phone
// screenshot, 540 wide, and `shot` is its file name without the .webp.
export type Look = { id: string; name: string; line: string; shot: string; alt: string; height?: number }

export const themes = {
  title: 'Camp themes',
  lede: 'Whole new looks for your merge camp. New scenery to poke at, and a crew dressed to match. Looks only, so nobody gets stronger by being fancier.',
  tourName: 'Jelly Armada',
  tourLine: 'Saucers, aliens and one very shiny rock.',
  scenery: {
    title: 'Tap the scenery',
    text: 'Poke a planet, a saucer or a tiny alien. They talk back.',
    shot: 'theme-jelly-scenery',
    alt: 'The Jelly Armada camp: a crystal rock under a ringed planet, with alien saucers, speech bubbles and a crew of jelly miners on the board.',
  },
  eye: {
    title: 'Tap the eye',
    text: 'It hides the buttons, so you can see the whole camp.',
    shot: 'theme-jelly-eye',
    alt: 'The same Jelly Armada camp with the buttons hidden, showing the full scene.',
  },
  crew: {
    title: 'The crew dress to match',
    text: 'Every miner pulls on a jelly suit. Helmets keep their level colors.',
    shot: 'theme-jelly-crew',
    alt: 'Twelve jelly-blue miners, level 1 to 12, each in a different colored helmet.',
  },
  moreTitle: 'More looks',
  more: [
    { id: 'dino', name: 'Dino Dig', line: 'A jungle valley, a smoking volcano and a caveman crew.', shot: 'theme-dino', alt: 'The Dino Dig camp: a jungle valley with a smoking volcano and a herd on the hills around a golden rock, with a caveman crew on the board.', height: 1169 },
    { id: 'pyramid', name: 'Pyramid Gold', line: 'Pyramids at dusk, a camel caravan and a mummy crew.', shot: 'theme-pyramid', alt: 'The Pyramid Gold camp: pyramids at dusk and a camel caravan on the dunes around a sandy rock, with a mummy crew on the board.', height: 1169 },
    { id: 'graveyard', name: 'Graveyard Shift', line: 'A moonlit graveyard, a friendly ghost and a zombie crew.', shot: 'theme-graveyard', alt: 'The Graveyard Shift camp: a moonlit graveyard with bats and a friendly ghost around a mossy rock, with a zombie crew on the board.', height: 1169 },
  ] as Look[],
}

export const status = {
  version: 'Version 2.4.13',
  title: 'Rebuilt from the ground up, and growing fast',
  text: 'Gold Clicker Mining has been remade from scratch, with new gameplay, new art and a new server, and big updates keep landing.',
  newLabel: 'New lately',
  newItems: [
    'Deep Survivor, with co-op for 2 to 4 players',
    'Crew Rush and its weekly board',
    'A server in Europe for faster play',
    'The new Wardrobe, with Body A and Body B',
    'A painted Town map, pets to train, parties and chat',
    'Over 100 new cosmetics, from hats to mounts',
  ],
  nextLabel: 'What we’re working on',
  nextItems: ['Minecart Dash', 'More bosses and weapons for Deep Survivor', 'More looks for the Wardrobe'],
}
