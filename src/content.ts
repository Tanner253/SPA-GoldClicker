// All site copy and links live here. Edit this file to change what the site says.

export const links = {
  privacy: '/privacy/',
  terms: '/terms/',
  deleteAccount: '/delete-account/',
  email: 'mailto:goldclickermining@gmail.com',
}

export const cta = {
  label: 'Coming to Google Play',
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
    text: 'Carve your own way down. Scoop up gold and gems, watch your air, and dodge gas, bats and falling boulders.',
    shot: 'shot-mine',
    alt: 'A mine run in Clay Beds, with gold, gems, boulders and gas in the rock around the miner.',
  },
  {
    id: 'camp',
    tone: 'clay',
    title: 'Merge your crew',
    text: 'Drop a miner on its match to make a stronger one. Your bunkhouse fills up, and your crew keep digging while you’re away.',
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
    text: 'Over 100 hats, coats, pets and moves to find. Looks only, so nothing here changes how strong you are.',
    shot: 'shot-outfit',
    height: 862,
    alt: 'The Outfitter: a miner in a hard hat outside the shop, above a grid of hats to try on.',
  },
]
