import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { DISCORD_URL, PRODUCT_BASE, SUPPORT_EMAIL } from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: 'ROB Cheats',
    domain: 'robcheats.org',
    title: 'ROB RUN Cheats — Aimbot, Player ESP & Loot Radar',
    description:
      'ROB RUN cheats for PC with soft aimbot, player ESP, vehicle ESP, loot radar, 2D radar, no recoil, and Cloud DMA support at robcheats.org.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Products' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'ROB RUN — patch build online',
    eyebrow: '#1 Undetected Provider',
    titleLine1: 'ROB',
    titleLine2: 'WITH CHEATS',
    subtitle:
      'Soft aimbot, player ESP, vehicle tracking, loot radar, and misc assists for ROB RUN on Steam—configs, stream-proof overlay, and live support at robcheats.org.',
    ctaPrimary: 'View products',
    ctaDiscord: 'Join Discord',
    ctaSecondary: 'Buy now',
    ctaSecondaryHref: PRIMARY_CHECKOUT_PATH,
    modesLabel: 'ROB RUN focus',
    modes: ['Heists', 'Chases', 'Hideouts', 'Clan wars'],
    metrics: [
      { label: 'Stream-safe', strong: 'Yes' },
      { label: 'Patch speed', strong: '<24h' },
      { label: 'Users', strong: '300+' },
      { label: 'Live support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Aimbot, ESP, vehicle tracking, loot radar, and misc tools for ROB RUN on PC.',
    items: [
      {
        title: 'Soft Aimbot',
        subtitle: 'Precision without snap.',
        desc: 'Configurable aim assist for chases and firefights—FOV, smooth, and bone selection stay readable in the menu.',
        bullets: [
          'Aim key, FOV, and smooth sliders',
          'Head, neck, chest, or closest bone',
          'Visible check and target priority modes',
          'Ignore teammates, clan, and optional civilians',
          'Draw FOV ring for tuning sessions',
        ],
        tags: ['ROB RUN aimbot', 'soft aimbot', 'fov aimbot'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'See roles before contact.',
        desc: 'Track criminals, cops, and civilians with boxes, skeletons, and wanted state during heists and patrols.',
        bullets: [
          'Full or corner boxes with health and armor',
          'Name, alias, distance, and held weapon',
          'Role tags and vehicle occupancy',
          'Snaplines and out-of-screen arrows',
          'Visible and hidden color profiles',
        ],
        tags: ['ROB RUN ESP', 'player esp', 'wallhack'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Vehicle ESP',
        subtitle: 'Cars, locks, fuel.',
        desc: 'Spot getaway vehicles, occupied squad cars, and empty rides before you commit to a route.',
        bullets: [
          'Vehicle name, distance, and occupancy filter',
          'Locked or unlocked state readout',
          'Health and fuel where supported',
          'Garage and spawn markers',
        ],
        tags: ['vehicle esp', 'car tracking', 'garage markers'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Loot & World ESP',
        subtitle: 'Cash, stashes, objectives.',
        desc: 'Highlight valuable pickups, hideout doors, and heist markers without flooding the whole map.',
        bullets: [
          'Cash and valuable loot markers',
          'Weapon and ammo drops',
          'Safe, workbench, and hideout entrances',
          'Territory, capture, and NPC vendor markers',
          'Max world distance slider',
        ],
        tags: ['loot esp', 'stash esp', 'world esp'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: '2D Radar',
        subtitle: 'Map awareness overlay.',
        desc: 'Compact radar with range control and toggles for players, vehicles, loot, hideouts, and objectives.',
        bullets: [
          'Radar range and layer toggles',
          'Show players, vehicles, and loot',
          'Hideout and objective pings',
          'Pairs with ESP distance caps',
        ],
        tags: ['2d radar', 'loot radar', 'player radar'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Gameplay Misc',
        subtitle: 'Recoil, movement, keys.',
        desc: 'Quality-of-life assists and panic controls for long PC sessions.',
        bullets: [
          'No recoil and soft no spread',
          'Speed or movement assist toggle',
          'Custom crosshair and menu key',
          'Custom panic key',
          'Save and load config profiles',
        ],
        tags: ['no recoil', 'movement assist', 'config system'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Creators stay safe.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar safe modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['stream proof', 'obs safe', 'overlay'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Cloud DMA Ready',
        subtitle: 'Optional hardware path.',
        desc: 'Pair ROB RUN modules with Cloud DMA when supported hardware and firmware checks pass.',
        bullets: ['Portal compatibility checklist', 'Isolated ESP and aim pipeline', 'Engineering support in Discord'],
        tags: ['cloud dma', 'dma cheats', 'hardware'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch day ready.',
        desc: 'Same presets on every PC—portal updates track ROB RUN patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push after patches', 'Discord #status for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Ranked tooling backed by patches—not promises',
    subtitle:
      'Most ROB RUN cheat shops ship stale loaders, obvious automation, and ticket bots. We built robcheats.org around patch-day delivery, humanized scripts, and live operators.',
    usLabel: 'ROB Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'Builds pushed within hours of ROB RUN updates—check Discord #status before you launch.',
      },
      {
        title: 'Humanized scripts & delays',
        desc: 'Delay Setting, Target Selector and conservative defaults mimic high-MMR timing—not instant bot bursts that flood reports.',
      },
      {
        title: 'Live Discord operators',
        desc: 'Real engineers for loader setup, hero configs and HWID resets—24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS-safe modes—no risky DLL injection into the ROB RUN process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'Ranked, Turbo and per-hero profiles backup to the portal—same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through Discord ops—most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch turnaround',
        desc: 'Average time to ship a loader build after major ROB RUN or anti-cheat changes.',
      },
      {
        value: '24/7',
        title: 'Operator support',
        desc: 'Discord engineers on shift for setup, configs and account issues.',
      },
      {
        value: '300+',
        title: 'Active operators',
        desc: 'Steam PC players running scripts, map hack and utilities on robcheats.org.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and queue ROB RUN on Steam PC—with live Discord help if anything blocks you.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import ranked or Turbo presets, and tune scripts plus map hack sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & queue ROB RUN',
        desc: 'Check the live status banner, launch Steam ROB RUN, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching ROB RUN after updates.',
    items: ['Windows 10 & 11', 'Steam', 'ROB RUN client', 'Auto updater', 'Config cloud sync', 'Discord support', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'ROB RUN cheats',
    subtitle: 'Soft aimbot, ESP, vehicle tracking, loot radar, and gameplay assists for PC.',
    viewAll: 'View ROB RUN details',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        tier: 'Premium',
        name: 'ROB RUN',
        title: 'ROB RUN Cheats',
        desc: 'Full ROB RUN suite with aimbot, player ESP, vehicle ESP, loot markers, 2D radar, no recoil, and config save/load.',
        features: ['Soft aimbot & FOV', 'Player & role ESP', 'Vehicle ESP', 'Loot & stash radar', '2D radar overlay', 'Stream-proof mode'],
        more: 48,
        href: `${productBase}rob-run/`,
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'ROB RUN products',
    subtitle: 'ROB RUN cheats plus Cloud DMA and HWID Spoofer utilities.',
    viewAll: 'View all products',
    get: 'Get',
    explore: 'Explore',
    items: [
      {
        badge: 'Available',
        category: 'ROB RUN',
        title: 'ROB RUN Cheats',
        subtitle: 'Aimbot, ESP & radar',
        desc: 'Premium ROB RUN cheat software with player ESP, vehicle ESP, loot radar, soft aimbot, and misc assists.',
        features: ['Soft aimbot', 'Player ESP', 'Vehicle ESP', 'Loot radar'],
        more: 48,
        href: productBase,
      },
      {
        badge: 'Available',
        category: 'Hardware',
        title: 'Cloud DMA',
        subtitle: 'Isolated memory access',
        desc: 'Cloud DMA workflow for supported hardware—pair with ROB RUN ESP and aimbot modules when compatibility checks pass.',
        features: ['DMA firmware workflow', 'Hardware scan', 'ROB RUN module pairing', 'Portal setup guide'],
        more: 6,
        href: `${productBase}cloud-dma/`,
      },
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle: 'Clean slate for your PC',
        desc: 'Hardware ID tools for disk serials and MAC addresses—follow the portal guide before launching ROB RUN on a new account.',
        features: ['Spoofer & cleanup tools', 'Serial profile rotation', 'Compatibility scan', 'Post-spoof verification'],
        more: 9,
        href: `${productBase}hwid-spoofer/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Cheat codes, script setup, map hack config and patch-day checks for ROB RUN.',
    latestTitle: 'Latest articles',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [
      {
        tag: 'Features',
        title: 'ROB RUN cheats features: aimbot, ESP, loot radar, and more',
        slug: 'rob-run-features-overview',
        image: '/images/blog/rob-run-player-esp-guide.png',
        desc: 'Overview of ROB RUN soft aimbot, player ESP, vehicle ESP, loot radar, 2D radar, and misc assists.',
        date: 'Nov 10, 2026',
        readTime: '8 min read',
      },
      {
        tag: 'Setup',
        title: 'ROB RUN player ESP setup for readable overlays',
        slug: 'rob-run-player-esp-guide',
        image: '/images/blog/rob-run-player-esp-guide.png',
        desc: 'Configure criminal, cop, and civilian ESP colors, distance caps, and role tags.',
        date: 'Nov 9, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Setup',
        title: 'ROB RUN soft aimbot: FOV, smooth, and target priority',
        slug: 'rob-run-aimbot-setup',
        image: '/images/blog/rob-run-aimbot-setup.png',
        desc: 'Tune aim key, FOV ring, bone selection, visible check, and target priority.',
        date: 'Nov 8, 2026',
        readTime: '7 min read',
      },
      {
        tag: 'Guides',
        title: 'ROB RUN loot and stash radar tips',
        slug: 'rob-run-loot-radar-tips',
        image: '/images/blog/rob-run-loot-radar-tips.png',
        desc: 'Filter cash, weapons, hideouts, and heist objectives on world ESP and 2D radar.',
        date: 'Nov 7, 2026',
        readTime: '5 min read',
      },
      {
        tag: 'Guides',
        title: 'ROB RUN Cloud DMA requirements',
        slug: 'rob-run-cloud-dma-requirements',
        image: '/images/blog/rob-run-cloud-dma-requirements.png',
        desc: 'Hardware, firmware, and setup steps before pairing Cloud DMA with ROB RUN.',
        date: 'Nov 6, 2026',
        readTime: '6 min read',
      },
      {
        tag: 'Guides',
        title: 'HWID spoofer guide before a new ROB RUN account',
        slug: 'rob-run-hwid-spoofer-guide',
        image: '/images/blog/rob-run-aimbot-setup.png',
        desc: 'When to spoof disk and MAC identifiers, and how to verify before matchmaking.',
        date: 'Nov 5, 2026',
        readTime: '5 min read',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Scripts', title: 'Combos that adapt to your hero', desc: 'Auto Combo, Orbwalker, Smart Cast and Delay Setting in one scripts tab.' },
      { num: '02', label: 'Vision', title: 'Map hack that stays readable', desc: 'Filter by distance, team color, ward type and smoke alert sensitivity.' },
      { num: '03', label: 'Minimap', title: 'Runes and rotates on lock', desc: 'Rune timers, enemy hints and minimap hack on a compact overlay.' },
      { num: '04', label: 'ESP', title: 'Role-based player filters', desc: 'Cop, criminal, and civilian tags with distance and color profiles.' },
      { num: '05', label: 'Bots', title: 'Farm & lane automation', desc: 'Auto Farm Bot, stack timer and courier manager for efficient farming.' },
      { num: '06', label: 'Profiles', title: 'Configs for every session', desc: 'Heist, chase, and free-roam presets with cloud backup.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from purchase to a ROB RUN profile you can reuse every session.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Read the live banner on robcheats.org before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your tier',
        desc: 'Pick ROB RUN cheats, Cloud DMA, or HWID Spoofer—the product that matches your goal.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune delays in a practice lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save ranked and Turbo presets to the cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for how ROB RUN plays.',
    items: [
      { num: '01', title: 'Patch-day ready', desc: 'Patch notes hit Discord and the portal before the official blog—check before you queue ranked.' },
      { num: '02', title: 'Conservative defaults', desc: 'Start with safe script delays and map hack ranges, then tune up—not the other way around.' },
      { num: '03', title: 'Real operator support', desc: 'Stuck on loader or hero configs? Discord staff walk you through live—not copy-paste FAQs.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'ROB Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: 'support@robcheats.org',
        href: 'mailto:support@robcheats.org',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'messageCircle',
        title: 'Community Discord',
        desc: 'Live operators, setup help, and status updates 24/7.',
        linkLabel: 'Join Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on robcheats.org or via our secure checkout.' },
      { title: 'Platform', desc: 'ROB RUN on Steam, Windows 10 or 11 64-bit, and your game build.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if ROB RUN cheats are online?',
        a: 'The live status banner is on robcheats.org and in the Discord #status channel. Always check after a ROB RUN or anti-cheat update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our secure checkout. Follow the guide before launching ROB RUN.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party ROB RUN cheats?',
        a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'ROB RUN via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'ROB RUN cheats, Cloud DMA, and HWID Spoofer live at robcheats.org/products/rob-run-cheats with feature lists and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'ROB RUN cheats — aimbot, ESP, loot radar, and utilities for PC. robcheats.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/rob-run-cheats/rob-run/', label: 'ROB RUN cheats', ariaLabel: 'ROB RUN cheats' },
      { href: '/products/rob-run-cheats/', label: 'All products & utilities', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About ROB Cheats',
      description:
        'ROB Cheats provides ROB RUN cheat tiers, utility tools and PC support resources at robcheats.org.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'ROB Cheats is a PC-focused resource for ROB RUN players exploring aimbot, ESP, vehicle tracking, and loot radar workflows. We publish setup guides and live status notes so you can evaluate ROB RUN cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers ROB RUN cheats, Cloud DMA, and HWID Spoofer utilities. Blog articles explain ESP tuning, aimbot setup, and patch-day checks.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner and Discord #status before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through Discord and email support. Include your order email, Steam account, and Windows version when opening a ticket.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How ROB Cheats handles analytics, cookies, and contact data when you use robcheats.org.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages—we do not store payment card data on robcheats.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for ROB Cheats products and robcheats.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using robcheats.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell access to ROB RUN cheats and utility tools (Cloud DMA, HWID Spoofer) delivered through an operator portal and loader for Steam on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when ROB RUN or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. robcheats.org does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching ROB RUN.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, anti-cheat penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup—Steam ROB RUN on Windows 10/11, current loader from the portal, and the live status banner showing online when you started—contact us through the Support page. Include your order email, Windows version, ROB RUN build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for ROB RUN can conflict with game updates and anti-cheat systems. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'ROB Cheats Support',
      description:
        'Get support for loader, HWID, and checkout questions at robcheats.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Try Now',
    browseCheatsMobile: 'Start checkout',
    homeAria: 'ROB Cheats home',
    checkoutAria: 'Start checkout',
    discordAria: 'Join ROB Cheats on Discord',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
  },
};
