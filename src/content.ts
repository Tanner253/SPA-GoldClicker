// All site copy and links live here. Edit this file to change what the site says.

export const links = {
  discord: 'https://discord.gg/mvbx7J295m',
  telegram: 'https://t.me/Gold_Clicker_Mining',
  instagram: 'https://www.instagram.com/goldclickermining/',
  tiktok: 'https://www.tiktok.com/@osknyo',
  terms: 'https://tanner253.github.io/crypton-clicker-privacy-policy/',
  developer: 'https://osknyo.com',
  email: 'mailto:goldclickermining@gmail.com',
}

export const notes = {
  mockup: 'Work in progress, drawn with the game’s own art.',
  live: 'Running in our test build.',
}

// Stops on the way down. They fill the mine map, and depth and zone also drive the HUD.
export const stops = [
  { id: 'mine', depth: 12, title: 'The mine', zone: 'Clay Beds' },
  { id: 'camp', depth: 40, title: 'The camp', zone: 'Clay Beds' },
  { id: 'crew', depth: 66, title: 'The crew', zone: 'Clay Beds' },
  { id: 'depth', depth: 120, title: 'The depth', zone: 'Slate Deep' },
  { id: 'town', depth: 200, title: 'The Town', zone: 'Slate Deep' },
  { id: 'characters', depth: 260, title: 'Characters', zone: 'Slate Deep' },
  { id: 'secrets', depth: 340, title: 'The secrets', zone: 'The dark' },
  { id: 'status', depth: 400, title: 'Where we are', zone: 'The dark' },
  { id: 'legacy', depth: 999, title: 'The OG game', zone: 'Bedrock' },
] as const

export type StopId = (typeof stops)[number]['id']

export const stop = (id: StopId) => stops.find((entry) => entry.id === id)!

export const hero = {
  badge: 'OG since 2025',
  title: 'Gold Clicker Mining',
  kicker: 'is coming back, and it goes deeper',
  lede: 'Dig down through the rock. Grab all you can carry. Head up while you still have air, or go one level deeper. We are rebuilding the whole game from the ground up.',
  status: 'In development. No release date yet.',
  stageHint: 'Tap the rock. Go on.',
  stageLabel: 'Dig the gold tile. Each tap swings the pick.',
}

export const mine = {
  eyebrow: 'The mine',
  title: 'Head up, or go deeper?',
  lede: 'Every run is a fresh shaft, nine tiles wide. You carve your own way down, scooping up gold and gems while your air drains. The lower you go, the more the rock fights back.',
  screenAlt: 'A mine run in Clay Beds: a miner digs gold ore at 33 metres, with an air bar and hearts at the top of the screen.',
  legendTitle: 'Learn to read the rock',
  legend: [
    { sprite: 'gold', title: 'Gold', text: 'The reason you came.' },
    { sprite: 'gem', title: 'Gems', text: 'Rare, shiny, worth the detour.' },
    { sprite: 'air', title: 'Air', text: 'Grab a bubble. Keep breathing.' },
    { sprite: 'gas', title: 'Gas', text: 'Best left alone.' },
    { sprite: 'bat', title: 'Bats', text: 'They move. So should you.' },
    { sprite: 'boulder', title: 'Boulders', text: 'Careful what you dig under.' },
  ],
  liftTitle: 'Every lift asks one question',
  liftText: 'Reach a lift and you choose. Head up and keep your haul, or stay down and pick one of three perks. Perks last one run, so no two dives play the same.',
  liftAlt: 'The Lift Station screen: a Head Up button above three perks, Power Drill, Lucky Vein and Blast Suit.',
  liftStage: 'Press the button to open a perk choice.',
  liftHint: 'Luck is mostly geology.',
}

export const camp = {
  eyebrow: 'The camp',
  title: 'Your camp remembers',
  lede: 'Every run leaves you with something, even a bad one. Back at camp you merge your crew, chip away at the Rock Face and get ready to go again.',
  stage: 'Merge two miners into one better miner.',
  stageHint: 'Two miners walk in. One better miner walks out.',
  items: [
    { sprite: 'crew2', title: 'Merge board', text: 'Drop a miner on its match to make a stronger one.' },
    { sprite: 'rock-clay', title: 'Rock Face', text: 'Aim for the moving weak spot. Careful taps beat fast ones.' },
    { sprite: 'crate', title: 'A camp that grows', text: 'New buildings appear as you play, one at a time.' },
  ],
  screenAlt: 'The camp screen: a cracked Rock Face above a merge board of miners, with Hire and Dig buttons.',
}

export const crew = {
  eyebrow: 'The crew',
  title: 'Nobody digs alone',
  lede: 'Most of your crew will be people you pulled out of the rock. Find a trapped miner on a run, get them home, and they work for you.',
  classesTitle: 'Six kinds of miner',
  classes: [
    { sprite: 'crew1', title: 'Digger', text: 'Hits rock. Enjoys it.' },
    { sprite: 'crew5', title: 'Blaster', text: 'Has never read the warning.' },
    { sprite: 'crew2', title: 'Medic', text: 'Mostly hands out bandages.' },
    { sprite: 'crew6', title: 'Prospector', text: 'Licks rocks. Is usually right.' },
    { sprite: 'crew3', title: 'Engineer', text: 'It worked yesterday.' },
    { sprite: 'crew4', title: 'Scout', text: 'Back in five. Probably.' },
  ],
  frontTitle: 'The front line',
  frontText: 'Your four best miners stand at the front of the board. They hit harder at camp and come along on your run, each with a job to do.',
  rescueTitle: 'Rescues',
  rescueText: 'Trapped miners sit behind a timber frame, deep in the rock. Going for one always takes you the long way round.',
}

export const depth = {
  eyebrow: 'The depth',
  title: 'It keeps going down',
  lede: 'One kind of rock gets old. So the mine is split into Sites, each with its own look, its own new danger and a boss at the bottom.',
  sitesTitle: 'Sites on the way down',
  sites: [
    { name: 'Topsoil', text: 'Learn to dig.', status: 'planned', swatch: '#8c5a33' },
    { name: 'Clay Beds', text: 'Gas pockets, and plenty of them.', status: 'building', swatch: '#a34e33' },
    { name: 'Slate Deep', text: 'Cave-ins and runaway rail carts.', status: 'building', swatch: '#3e4f6b' },
    { name: 'Crystal Dark', text: 'Crystals bounce your blasts back.', status: 'planned', swatch: '#4d3a78' },
    { name: 'Magma Core', text: 'The lava rises. You don’t get a vote.', status: 'planned', swatch: '#5e2b2b' },
  ] as { name: string; text: string; status: 'building' | 'planned'; swatch: string }[],
  sitesNote: 'Below that, we are still drawing the map.',
  clayAlt: 'A run through Clay Beds, in warm red rock.',
  slateAlt: 'A run through Slate Deep, in cold blue rock, with rails, timber and a red cart.',
  liveAlt: 'Slate Deep in the test build: a miner digs down through blue rock with gold and gems around them.',
  treeTitle: 'Build your own kind of miner',
  treeText: 'The Blueprint Tree is one huge web in six regions: Excavation, Survival, Prospecting, Demolition, Engineering and Command. You can’t own all of it, so two players will dig very differently.',
  treeAlt: 'The Blueprint Tree: a web of upgrades around a miner, with the Bore Head keystone selected.',
  extras: [
    { sprite: 'drill', title: 'Keystones', text: 'Big rule changes with a real cost. Bore Head digs down faster and sideways slower.' },
    { sprite: 'dynamite', title: 'Gadgets', text: 'Dynamite, rope, flares. Packed at camp and spent on purpose.' },
    { sprite: 'heart', title: 'Pressure', text: 'Want it harder? Stack on thin air, more gas or fewer lifts.' },
  ],
  flavor: 'Nobody ever asked the sideways people.',
}

export const town = {
  eyebrow: 'The Town',
  title: 'You will have neighbors',
  lede: 'Every camp will sit in a Town of about 30 players: a side-on street you can walk, jump and explore, with your neighbors’ characters around you. We are redesigning it right now, so there is nothing to show yet. This is the plan.',
  items: [
    { sprite: 'crew4', title: 'Hiring Hall', text: 'Borrow a neighbor’s best miner for a run. They can borrow yours.' },
    { sprite: 'trapped', title: 'Rescue Line', text: 'Lose a miner deep down and they wait in the Town’s shared shaft until a neighbor finds them.' },
    { sprite: 'rope', title: 'Town Shaft', text: 'Every run adds depth to a shared weekly shaft, with a boss for the whole Town.' },
    { sprite: 'crate', title: 'Requests', text: 'Short of ore or parts? Ask, and neighbors help out with what they can spare.' },
    { sprite: 'star', title: 'Places to hang out', text: 'Benches, a campfire, rooftops, and hidden ledges for anyone who can make the jump.' },
    { sprite: 'crew6', title: 'Quick chat', text: 'Preset phrases and emotes, so everyone can say hello in any language.' },
  ],
  note: 'Plans can change as we build it.',
}

export const characters = {
  eyebrow: 'Characters',
  title: 'One miner. Your look.',
  lede: 'You will have one character who walks the Town and leads your runs. What they wear shows up wherever other players see them.',
  tryTitle: 'Try a hat',
  tryText: 'Crew are one template in many colors, so everything fits everyone.',
  looks: [
    { sprite: 'crew1', label: 'Classic yellow', color: '#f7c948' },
    { sprite: 'crew2', label: 'Moss green', color: '#8bd17c' },
    { sprite: 'crew3', label: 'Rust orange', color: '#e8873a' },
    { sprite: 'crew4', label: 'Sky blue', color: '#49b9ec' },
    { sprite: 'crew5', label: 'Hazard red', color: '#e8553f' },
    { sprite: 'crew6', label: 'Chalk white', color: '#f2f2f2' },
  ],
  slots: ['Hat', 'Hair', 'Face', 'Coat', 'Boots', 'Tool', 'Back item', 'Pet'],
  rules: [
    { title: 'Looks only', text: 'Cosmetics never change how strong you are.' },
    { title: 'Worth showing off', text: 'Some hats only drop from bosses. If you see one, they beat it.' },
  ],
}

export const secrets = {
  eyebrow: 'The secrets',
  title: 'Some rooms aren’t on the map',
  lede: 'Vaults, shrines and flooded halls hide in the rock. Some items stay off every list until the day you dig one up. And something at the very bottom of the mine has started to stir.',
  pageTitle: 'This page has three of its own',
  hint: 'Keep an eye on the rock on your way down.',
  done: 'All three. You will do well down there.',
  items: [
    { id: 'gem', sprite: 'gem', label: 'A hidden gem', found: 'Shiny!' },
    { id: 'miner', sprite: 'trapped', label: 'A trapped miner', found: 'Thanks, pal.' },
    { id: 'bat', sprite: 'bat', label: 'A sleeping bat', found: 'Eep!' },
  ],
}

export const status = {
  eyebrow: 'Where we are',
  title: 'What’s real today',
  lede: 'The new game isn’t out yet, so here is exactly where it stands.',
  columns: [
    {
      title: 'Playable in our test build',
      items: ['Mine runs with lifts and perks', 'Camp with the merge board and Rock Face', 'Clay Beds and Slate Deep'],
    },
    {
      title: 'Being built now',
      items: ['A current, supported version of Unity', 'A new server to keep your saves safe', 'Scores checked by the server, not just the phone', 'The Blueprint Tree, finds and the first boss'],
    },
    {
      title: 'Coming later',
      items: ['The Town', 'Characters and cosmetics', 'Crew classes', 'Daily Shaft, leagues and ghost races', 'More Sites'],
    },
  ],
  note: 'Plans can change. There is no release date yet, and the community will hear first.',
}

export const legacy = {
  eyebrow: 'Bedrock',
  title: 'Where it all started',
  lede: 'Before the mine there was one very tappable gold bar. The original Gold Clicker Mining was built by one developer and kept alive by the players who kept tapping.',
  barTitle: 'Still tappable',
  videoCaption: 'Footage from the original game',
  videoLabel: 'Gameplay from the original Gold Clicker Mining',
  ogTitle: 'Played the original?',
  ogText: 'You’re the reason this is coming back. Come say hi and help shape what’s next.',
  ogButton: 'Find the OGs',
}

export const stats = [
  { value: 68.4, suffix: 'K', decimals: 1, label: 'Google Play downloads of the original' },
  { value: 26, suffix: '', decimals: 0, label: 'upgrades to grind' },
  { value: 1, suffix: '', decimals: 0, label: 'developer' },
]

export const timeline = [
  {
    when: 'April 2025',
    title: 'The first tap',
    text: 'One developer, one gold bar, and a lot of late nights in Unity.',
  },
  {
    when: 'Summer 2025',
    title: 'Live on Android',
    text: 'Gold Clicker hits the store and the leaderboards fill up fast.',
  },
  {
    when: 'The OG era',
    title: '68,000+ downloads',
    text: 'Players pile in, push the prestige ladder and keep on tapping.',
  },
  {
    when: 'Right now',
    title: 'The rebuild',
    text: 'The original is offline while the whole game gets rebuilt from the ground up.',
  },
]

export const community = {
  title: 'Get back in the mine',
  lede: 'Follow the rebuild and be first to hear when we’re back.',
}

export const socials = [
  { label: 'Discord', href: links.discord, tone: 'gold' },
  { label: 'Telegram', href: links.telegram, tone: 'card' },
  { label: 'Instagram', href: links.instagram, tone: 'card' },
  { label: 'TikTok', href: links.tiktok, tone: 'card' },
]
