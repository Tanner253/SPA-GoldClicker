// All site copy and links live here. Edit this file to change what the site says.

export const links = {
  privacy: '/privacy/',
  terms: '/terms/',
  deleteAccount: '/delete-account/',
  email: 'mailto:goldclickermining@gmail.com',
  play: 'https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker',
  x: 'https://x.com/GCM_SOL',
}

export const socials = [
  { label: 'X', href: links.x },
  { label: 'Discord', href: 'https://discord.gg/mvbx7J295m' },
  { label: 'Telegram', href: 'https://t.me/Gold_Clicker_Mining' },
  { label: 'Instagram', href: 'https://www.instagram.com/goldclickermining/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@osknyo' },
]

export const cta = {
  label: 'Get it on Google Play',
  note: 'Free to play, with optional ads and in-game purchases.',
}

export const hero = {
  badge: 'Free mining game',
  title: 'Gold Clicker Mining',
  lede: 'Merge miners. Smash rocks. Dive for gold. Come back stronger.',
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
  {
    id: 'town',
    tone: 'sky',
    title: 'Meet the neighbors',
    text: 'Between digs, walk the Town, hire a helper for your next run, and take on quests from the Mayor, Hattie and Pike.',
    shot: 'shot-town',
    height: 650,
    alt: 'The Town at dusk: miners outside a house, with a Good haul greeting in a speech bubble.',
  },
  {
    id: 'outfit',
    tone: 'slate',
    title: 'Dress for the job',
    text: 'Over 100 hats, coats, pets and moves, plus whole new looks for your camp. Looks only, so nobody gets stronger by being fancier.',
    shot: 'shot-outfit',
    height: 580,
    alt: 'The Outfitter: a miner in a hard hat outside the shop, trying on a look.',
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
    { id: 'dino', name: 'Dino Dig', line: 'Volcanoes, ferns and a very large dinosaur.', shot: 'theme-dino', alt: 'The Dino Dig camp: a volcano, palm trees and a long-necked dinosaur around a golden rock, with a crew of miners on the board.', height: 1096 },
    { id: 'pyramid', name: 'Pyramid Gold', line: 'Pyramids, camels and a desert sunset.', shot: 'theme-pyramid', alt: 'The Pyramid Gold camp: pyramids, a camel and palm trees at sunset around a sandy rock, with a bandaged crew of miners on the board.', height: 1096 },
    { id: 'graveyard', name: 'Graveyard Shift', line: 'A full moon, a creepy hearse and a crew of zombies.', shot: 'theme-graveyard', alt: 'The Graveyard Shift camp: a full moon, a hearse and gravestones around a mossy rock, with a crew of green zombie miners on the board.', height: 1096 },
  ] as Look[],
}

export const status = {
  version: 'Version 2.1.4',
  title: 'Rebuilt from the ground up',
  text: 'Gold Clicker Mining has been remade from scratch, with new gameplay, new art and a new server, and it gets better with every update.',
  newLabel: 'New in this update',
  newItems: [
    'Bigger, rarer bosses, each with a face of their own',
    '16 kinds of stone to break as you go deeper',
    'Gem veins: rare rocks that pay out Gems on every tap',
    'Jelly Armada, the first full camp theme',
    '14 songs, with shuffle or your own pick',
    'A rebuilt skill Tree and a weekly Deepest Dive board',
  ],
  nextLabel: 'What we’re working on',
  nextItems: ['Friends', 'Guilds', 'Open chat', 'Digging with friends'],
}
