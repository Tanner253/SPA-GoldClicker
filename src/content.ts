// All site copy and links live here. Edit this file to change what the site says.

export const links = {
  privacy: '/privacy/',
  terms: '/terms/',
  deleteAccount: '/delete-account/',
  email: 'mailto:goldclickermining@gmail.com',
  play: 'https://play.google.com/store/apps/details?id=com.osknyo.CryptonClicker',
  x: 'https://x.com/GCM_SOL',
}

export const cta = {
  label: 'Get it on Google Play',
  note: 'Free to play, with optional ads and in-game purchases.',
}

export const hero = {
  badge: 'Free mining game',
  title: 'Gold Clicker Mining',
  lede: 'Dig deep. Grab the gold. Get out before your air runs out.',
  clipAlt: 'A miner fighting Rockjaw, a huge stone jaw that bites down from the roof of the mine.',
}

export type Feature = {
  id: string
  tone: 'clay' | 'slate' | 'throat' | 'sky'
  title: string
  text: string
  shot: string
  height?: number
  alt: string
}

export const features: Feature[] = [
  {
    id: 'mine',
    tone: 'clay',
    title: 'Every dive is a dash',
    text: 'Carve your own way down. Scoop up gold and gems, watch your air, and dodge TNT, bats and falling boulders. Every lift deals a new card, so no two runs play the same.',
    shot: 'shot-mine',
    alt: 'A mine run in Clay Beds, with gold, gems and boulders in the rock around the miner.',
  },
  {
    id: 'camp',
    tone: 'clay',
    title: 'Merge your crew',
    text: 'Drop a miner on its match to make a stronger one. Send your crew at new kinds of stone and bosses with faces of their own, and they keep digging while you’re away.',
    shot: 'shot-camp',
    alt: 'The camp: a big rock above a bunkhouse full of miners at their bunks, with Hire and Dig buttons.',
  },
  {
    id: 'rockjaw',
    tone: 'throat',
    title: 'Beat Rockjaw',
    text: 'At 300m the rock grows teeth. Dodge the bite, knock the teeth out, and keep digging down through The Throat.',
    shot: 'shot-rockjaw',
    alt: 'The Rockjaw fight: a tooth knocked out of the huge stone jaw, with a gold ring around the hit.',
  },
  {
    id: 'town',
    tone: 'sky',
    title: 'Move into Town',
    text: 'Walk the street, climb the ladders and take on quests from the Mayor, Hattie and Pike.',
    shot: 'shot-town',
    alt: 'The Town: a timber headframe and bunting, with the miner and the Mayor side by side on the street.',
  },
  {
    id: 'outfit',
    tone: 'slate',
    title: 'Dress your miner',
    text: 'Over 100 hats, coats, pets and moves to find, plus whole new looks for your camp. Looks only, so nothing here changes how strong you are.',
    shot: 'shot-outfit',
    height: 862,
    alt: 'The Outfitter: a miner in a hard hat outside the shop, above a grid of hats to try on.',
  },
]

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
