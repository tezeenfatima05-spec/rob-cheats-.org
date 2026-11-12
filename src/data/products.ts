import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

export const productRelatedBlogSlugs: Record<string, string[]> = {
  'rob-run': [
    'rob-run-player-esp-guide',
    'rob-run-aimbot-setup',
    'rob-run-loot-radar-tips',
    'rob-run-features-overview',
  ],
  'cloud-dma': ['rob-run-cloud-dma-requirements', 'rob-run-features-overview'],
  'hwid-spoofer': ['rob-run-hwid-spoofer-guide', 'rob-run-features-overview'],
};

const productBase = PRODUCT_BASE;
const gameplay = '/images/gameplay';

const galleryRaw = {
  s1: {
    src: `${gameplay}/rob-run-screenshot-1.png`,
    alt: 'ROB RUN player ESP with role tags and distance readouts',
    caption: 'Player ESP',
    captionDesc: 'Criminal, cop, and civilian tags with health bars and weapon readouts.',
  },
  s2: {
    src: `${gameplay}/rob-run-screenshot-2.png`,
    alt: 'ROB RUN soft aimbot FOV and target priority settings',
    caption: 'Soft aimbot',
    captionDesc: 'Adjustable FOV, smooth aim, and bone selection for PC sessions.',
  },
  s3: {
    src: `${gameplay}/rob-run-screenshot-3.png`,
    alt: 'ROB RUN loot and stash ESP markers on the map',
    caption: 'Loot & stash ESP',
    captionDesc: 'Cash, weapons, and hideout highlights with distance caps.',
  },
  s4: {
    src: `${gameplay}/rob-run-screenshot-4.png`,
    alt: 'ROB RUN vehicle ESP and 2D radar overlay',
    caption: 'Vehicle ESP & radar',
    captionDesc: 'Occupied vehicles, garage markers, and 2D radar filters.',
  },
};

type GalleryKey = keyof typeof galleryRaw;

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => ({ ...galleryRaw[k] }));
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'rob-run';
}

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review live status',
    desc: 'Check robcheats.org and Discord #status before purchase—especially after a ROB RUN or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your product',
    desc: 'Select ROB RUN cheats, Cloud DMA, or HWID Spoofer. Review feature lists before checkout.',
  },
  {
    num: '03',
    title: 'Complete checkout',
    desc: 'Use secure checkout, keep your order email handy, and confirm Windows version in Discord if needed.',
  },
  {
    num: '04',
    title: 'Load presets & test',
    desc: 'Follow the setup guide, save configs, and test overlays in a safe session before going live.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return { title: `How to get ${productName}`, steps: defaultAcquisitionSteps };
}

const sharedGoodToKnow =
  'ROB RUN receives frequent updates. Confirm module availability on robcheats.org before you purchase or launch. Overlay behavior may differ between heists, chases, and free-roam after patches.';

const sharedLimitations =
  'Third-party software in ROB RUN can violate platform terms and lead to bans or account action. You use this software at your own risk. Compatibility can change after game, anti-cheat, or Windows updates without notice.';

const robRunRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access for loader setup.' },
  { icon: 'reqSteam', text: 'ROB RUN on Steam with the latest client patch applied.' },
  { icon: 'reqSettings', text: 'Ability to follow portal setup steps and save config profiles.' },
  { icon: 'reqWifi', text: 'Stable internet for checkout, patch delivery, and Discord support.' },
  { icon: 'reqCpu', text: 'A PC that meets ROB RUN published hardware requirements.' },
];

const productContent: Record<
  string,
  Pick<
    ProductPage,
    'images' | 'goodToKnow' | 'limitations' | 'systemRequirements' | 'fullFeatures' | 'overview'
  >
> = {
  'rob-run': {
    images: slide('s1', 's2', 's3', 's4'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: robRunRequirements,
    fullFeatures: [
      'Enable aimbot with aim key, FOV, and smooth sliders',
      'Bone selection: head, neck, chest, closest',
      'Visible check and target priority modes',
      'Ignore teammates, clan, and optional civilians',
      'Draw FOV ring and panic key',
      'Player ESP: box, skeleton, health, armor, distance',
      'Role tags: criminal, cop, civilian, wanted state',
      'Vehicle ESP: name, distance, lock state, fuel',
      'Loot, stash, cash, and objective markers',
      '2D radar with range and layer toggles',
      'No recoil, soft no spread, movement assist toggle',
      'Stream-proof overlay, custom crosshair, save/load configs',
    ],
    overview: {
      title: 'Built for ROB RUN crime-sandbox sessions',
      paragraphs: [
        'ROB RUN cheats combine soft aimbot, player ESP, vehicle tracking, loot radar, and misc gameplay assists in one PC menu. Filters for cops, criminals, and civilians keep overlays readable during chases and heists.',
        'Cloud-backed configs let you move presets between rigs. Pair with Cloud DMA when you need hardware-isolated memory access—check requirements on the Cloud DMA product page first.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('s4', 's3', 's1'),
    goodToKnow:
      'Cloud DMA requires compatible firmware and a supported DMA card. Run the compatibility checklist in the portal before purchasing ROB RUN access.',
    limitations:
      'Cloud DMA does not guarantee undetected play. Hardware, firmware, and game updates can break compatibility without notice.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit host PC for DMA tooling.' },
      { icon: 'reqShieldGuide', text: 'Supported DMA hardware and firmware per portal checklist.' },
      { icon: 'reqWifi', text: 'Stable connection for cloud firmware sync and support.' },
    ],
    fullFeatures: [
      'Cloud DMA firmware workflow',
      'Hardware compatibility scan',
      'ROB RUN ESP and aimbot over DMA',
      'Isolated overlay pipeline',
      'Portal setup walkthrough',
      'Discord engineering support',
    ],
    overview: {
      title: 'Hardware-isolated ROB RUN access',
      paragraphs: [
        'Cloud DMA routes ROB RUN visuals and aim modules through supported DMA hardware instead of injecting into the game process. The portal documents firmware steps, compatibility checks, and how to pair DMA with your ROB RUN license.',
        'Use this product when you already run or plan to run a validated DMA setup. ROB RUN software features still require an active ROB RUN cheats license where applicable.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('s2', 's1', 's4'),
    goodToKnow:
      'Create a Windows restore point before spoofing. Run the compatibility scan, reboot cold, and verify identifiers changed before launching ROB RUN.',
    limitations:
      'Spoofing does not fix account-only bans. Do not stack multiple spoof tools. Shared work PCs may be unsuitable.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal guide before launching ROB RUN after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Post-spoof verification',
      'Discord recovery support',
    ],
    overview: {
      title: 'Hardware recovery before a new ROB RUN account',
      paragraphs: [
        'The HWID Spoofer helps when anti-cheat flags your PC but the Steam account is still clean. Disk and MAC tools ship with verification steps so you know identifiers changed before matchmaking.',
        'Use alongside conservative ROB RUN presets after spoofing—not as a substitute for reading live status on robcheats.org.',
      ],
    },
  },
};

const tierAbout: Record<string, ProductPage['about']> = {
  'rob-run': [
    {
      type: 'p',
      text: 'ROB RUN cheats focus on readable ESP, soft aimbot, and radar tools for crime-sandbox play—cops, robbers, vehicles, and loot in one overlay.',
    },
    { type: 'h2', text: 'Tune before you queue' },
    {
      type: 'p',
      text: 'Start with visible checks, teammate ignore, and shorter ESP distance. Raise FOV smoothing and radar range only after a few safe sessions.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  'rob-run': [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Aimbot, player ESP, vehicle ESP, world loot markers, 2D radar, no recoil, soft no spread, movement assist, stream-proof overlay, and config save/load ship in the ROB RUN package.',
    },
    { type: 'h2', text: 'Cloud DMA pairing' },
    {
      type: 'p',
      text: 'Need DMA isolation? Add Cloud DMA from the product hub and follow the compatibility guide before enabling ROB RUN modules.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'cloud-dma': [
    { type: 'h2', text: 'When to choose Cloud DMA' },
    {
      type: 'p',
      text: 'Pick Cloud DMA when you already operate supported DMA hardware and want ROB RUN ESP and aimbot data delivered outside the game process.',
    },
  ],
  'hwid-spoofer': [
    { type: 'h2', text: 'When to spoof' },
    {
      type: 'p',
      text: 'Spoof when new accounts fail instantly on one PC but work elsewhere—not for account-level bans alone.',
    },
  ],
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('s1', 's2', 's3', 's4', 's1', 's2');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'ROB RUN cheats, Cloud DMA, and HWID Spoofer for PC on robcheats.org.',
  buyUrl: checkoutPath('robRun'),
};
