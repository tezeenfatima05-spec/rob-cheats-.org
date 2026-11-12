import type { BlogPostFull } from './types';

export const blogPosts: BlogPostFull[] = [
  {
    tag: 'Features',
    title: 'ROB RUN cheats features: aimbot, ESP, loot radar, and more',
    slug: 'rob-run-features-overview',
    image: '/images/blog/rob-run-player-esp-guide.png',
    desc: 'Overview of ROB RUN soft aimbot, player ESP, vehicle ESP, loot radar, 2D radar, and misc assists.',
    date: 'Nov 10, 2026',
    readTime: '8 min read',
    body: [
      {
        type: 'p',
        text: 'ROB RUN cheats on PC combine awareness tools with soft aimbot and recoil control. This guide maps each module to real heist, chase, and hideout scenarios so you know what to enable first.',
      },
      { type: 'h2', text: 'Player and vehicle ESP' },
      {
        type: 'p',
        text: 'Player ESP covers boxes, skeletons, health, armor, role tags, and wanted state. Vehicle ESP adds occupancy, lock state, and fuel readouts. Start with shorter max distance and teammate ignore enabled.',
      },
      { type: 'h2', text: 'Loot, radar, and misc' },
      {
        type: 'p',
        text: 'Loot markers highlight cash, weapons, safes, and objectives. The 2D radar layers players, vehicles, and stash pings. Misc options include no recoil, soft no spread, movement assist, and stream-proof overlay.',
      },
      {
        type: 'p',
        text: 'Ready to purchase? Visit the [ROB RUN product page](/products/rob-run-cheats/rob-run/) and complete checkout when status is online.',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'ROB RUN player ESP setup for readable overlays',
    slug: 'rob-run-player-esp-guide',
    image: '/images/blog/rob-run-player-esp-guide.png',
    desc: 'Configure criminal, cop, and civilian ESP colors, distance caps, and role tags without cluttering the screen.',
    date: 'Nov 9, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Readable player ESP wins more fights than turning on every box at once. Use corner boxes for distant targets and full boxes when you push a hideout entrance.',
      },
      { type: 'h2', text: 'Role tags and colors' },
      {
        type: 'p',
        text: 'Assign unique visible and hidden colors for cops, criminals, and civilians. Enable wanted state and held-weapon readouts only if you can still track crosshair movement.',
      },
      { type: 'h2', text: 'Distance and arrows' },
      {
        type: 'p',
        text: 'Cap max player distance during chases so the overlay stays light. Out-of-screen arrows help when you rotate between garage markers and street fights.',
      },
    ],
  },
  {
    tag: 'Setup',
    title: 'ROB RUN soft aimbot: FOV, smooth, and target priority',
    slug: 'rob-run-aimbot-setup',
    image: '/images/blog/rob-run-aimbot-setup.png',
    desc: 'Tune aim key, FOV ring, bone selection, visible check, and target priority for PC sessions.',
    date: 'Nov 8, 2026',
    readTime: '7 min read',
    body: [
      {
        type: 'p',
        text: 'Soft aimbot on ROB RUN should feel like assist, not snap. Begin with a narrow FOV, high smooth value, and visible check enabled.',
      },
      { type: 'h2', text: 'Bones and priorities' },
      {
        type: 'p',
        text: 'Chest or closest bone is safer for public lobbies than hard head lock. Use closest or lowest-health priority depending on whether you chase or defend.',
      },
      { type: 'h2', text: 'Teammates and civilians' },
      {
        type: 'p',
        text: 'Ignore teammates, clan, and optional civilians before raising FOV. Draw FOV only while tuning so spectators and clips stay clean.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'ROB RUN loot and stash radar tips',
    slug: 'rob-run-loot-radar-tips',
    image: '/images/blog/rob-run-loot-radar-tips.png',
    desc: 'Filter cash, weapons, hideouts, and heist objectives on world ESP and 2D radar.',
    date: 'Nov 7, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Loot ESP shines when you layer filters instead of showing every pickup on the map. Enable cash and weapon drops first, then add safe and workbench markers for base raids.',
      },
      { type: 'h2', text: 'Radar layering' },
      {
        type: 'p',
        text: 'On 2D radar, toggle vehicles and objectives separately during police chases. Shorter radar range keeps the overlay readable in dense city fights.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'ROB RUN Cloud DMA requirements',
    slug: 'rob-run-cloud-dma-requirements',
    image: '/images/blog/rob-run-cloud-dma-requirements.png',
    desc: 'Hardware, firmware, and setup steps before pairing Cloud DMA with ROB RUN modules.',
    date: 'Nov 6, 2026',
    readTime: '6 min read',
    body: [
      {
        type: 'p',
        text: 'Cloud DMA is for supported hardware setups—not a replacement for reading ROB RUN patch status. Run the portal compatibility scan before checkout.',
      },
      { type: 'h2', text: 'Pairing with ROB RUN' },
      {
        type: 'p',
        text: 'After firmware sync, enable ESP and aimbot modules only when the status banner shows online. See the [Cloud DMA product page](/products/rob-run-cheats/cloud-dma/) for feature scope.',
      },
    ],
  },
  {
    tag: 'Guides',
    title: 'HWID spoofer guide before a new ROB RUN account',
    slug: 'rob-run-hwid-spoofer-guide',
    image: '/images/blog/rob-run-aimbot-setup.png',
    desc: 'When to spoof disk and MAC identifiers, and how to verify before matchmaking.',
    date: 'Nov 5, 2026',
    readTime: '5 min read',
    body: [
      {
        type: 'p',
        text: 'Spoof when fresh ROB RUN accounts fail on one PC but work elsewhere. Account-only bans need a different path than hardware recovery.',
      },
      { type: 'h2', text: 'Verification steps' },
      {
        type: 'p',
        text: 'Create a restore point, run the spoofer, cold reboot, and confirm identifiers changed in the portal report before launching Steam.',
      },
    ],
  },
];
