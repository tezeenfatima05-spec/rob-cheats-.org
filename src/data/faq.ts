import type { IconName } from '../components/icons/types';
import { checkoutPath } from '../config/checkout';
import { blogPostPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'scripts' | 'safety' | 'products' | 'blog' | 'setup';

export interface SiteFaqItem {
  num?: string;
  q: string;
  a: string;
  aHtml?: string;
  topic: FaqTopic;
  icon: IconName;
}

function a(text: string) {
  return text;
}

function link(label: string, href: string) {
  return `<a href="${href}">${label}</a>`;
}

const productsHub = link('ROB RUN products', ROUTES.products);
const robRun = link('ROB RUN Cheats', productPath('rob-run'));
const cloudDma = link('Cloud DMA', productPath('cloud-dma'));
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const checkout = link('secure checkout', checkoutPath('robRun'));

const coreFaq: SiteFaqItem[] = [
  {
    num: '01',
    q: 'Where do I check if ROB RUN cheats are online?',
    a: 'The live status banner is on robcheats.org and in the Discord #status channel. Always check after a ROB RUN or anti-cheat update.',
    topic: 'safety',
    icon: 'faqStatus',
  },
  {
    num: '02',
    q: 'What happens after I buy?',
    a: 'Your portal unlocks the loader, setup guide, and config library. Follow the guide before launching ROB RUN.',
    aHtml: a(`Your portal unlocks the loader, setup guide, and config library via ${checkout}. Follow the guide before launching ROB RUN.`),
    topic: 'products',
    icon: 'faqAfterBuy',
  },
  {
    num: '03',
    q: 'Can I get banned using third-party ROB RUN cheats?',
    a: 'Yes—any modification carries risk. Anti-cheat and report systems evolve. Read current status and accept the risk before use.',
    topic: 'safety',
    icon: 'faqBanRisk',
  },
  {
    num: '04',
    q: 'Which platforms are supported?',
    a: 'ROB RUN via Steam on Windows 10/11 64-bit only. macOS and Linux are not supported.',
    topic: 'setup',
    icon: 'faqPlatforms',
  },
  {
    num: '05',
    q: 'Can I move my license to a new PC?',
    a: 'Yes—use the HWID reset in your portal or open a Discord ticket. Limits depend on your product.',
    topic: 'products',
    icon: 'faqLicenseMove',
  },
  {
    num: '06',
    q: 'Where are products listed?',
    a: 'ROB RUN cheats, Cloud DMA, and HWID Spoofer are on the products hub with feature lists and checkout.',
    aHtml: a(`${robRun}, ${cloudDma}, and ${hwid} live at ${productsHub}.`),
    topic: 'products',
    icon: 'faqProductsPage',
  },
  {
    q: 'Does ROB RUN include aimbot?',
    a: 'ROB RUN Cheats includes soft aimbot with FOV, smooth, bone selection, visible check, and target priority.',
    aHtml: a(`${robRun} includes soft aimbot with FOV, smooth, bone selection, visible check, and target priority modes.`),
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
  },
  {
    q: 'What player ESP options are included?',
    a: 'Boxes, skeleton, health, armor, role tags, wanted state, weapons, snaplines, and out-of-screen arrows.',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
  },
  {
    q: 'Do I need Cloud DMA?',
    a: 'Cloud DMA is optional for supported DMA hardware. Run the portal compatibility scan before pairing.',
    aHtml: a(`${cloudDma} is optional for supported DMA hardware. Run the portal compatibility scan before pairing with ROB RUN modules.`),
    topic: 'products',
    icon: 'faqExternalLoader',
  },
  {
    q: 'When should I use the HWID Spoofer?',
    a: 'When fresh ROB RUN accounts fail on one PC but work elsewhere—not for account-only bans alone.',
    aHtml: a(`Use ${hwid} when fresh ROB RUN accounts fail on one PC but work elsewhere—not for account-only bans alone.`),
    topic: 'products',
    icon: 'faqHwidWhen',
  },
];

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'products', 'esp', 'scripts', 'safety', 'setup'];
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Straight answers before checkout.',
  subtitle: 'Compatibility, bans, and access—no vague promises.',
};
export const CONTEXTUAL_FAQ_SECTION_COPY = SITE_FAQ_SECTION_COPY;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const topics = new Set<FaqTopic>(['all']);
  for (const item of items) topics.add(item.topic);
  return SITE_FAQ_FILTER_TOPICS.filter((t) => t === 'all' || topics.has(t));
}

export function getAllFaqs(): SiteFaqItem[] {
  return coreFaq;
}

export function getLandingFaqs(): SiteFaqItem[] {
  return coreFaq.slice(0, 6);
}

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return coreFaq.filter((f) => f.topic === 'esp' || f.topic === 'scripts' || f.topic === 'setup').slice(0, 4);
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  if (slug === 'cloud-dma') {
    return coreFaq.filter((f) => f.q.includes('Cloud DMA') || f.topic === 'products').slice(0, 4);
  }
  if (slug === 'hwid-spoofer') {
    return coreFaq.filter((f) => f.q.includes('HWID') || f.q.includes('license')).slice(0, 4);
  }
  return coreFaq.filter((f) => ['esp', 'scripts', 'safety', 'setup'].includes(f.topic)).slice(0, 5);
}

export const faqCompareRows = [
  { feature: 'Soft aimbot', icon: 'compareSoftAim' as const, robRun: true, cloudDma: true, hwid: false },
  { feature: 'Player ESP', icon: 'compareEsp' as const, robRun: true, cloudDma: true, hwid: false },
  { feature: 'Vehicle ESP', icon: 'compareRadar' as const, robRun: true, cloudDma: true, hwid: false },
  { feature: 'Loot & 2D radar', icon: 'compareLootEsp' as const, robRun: true, cloudDma: true, hwid: false },
  { feature: 'DMA hardware path', icon: 'compareDma' as const, robRun: false, cloudDma: true, hwid: false },
  { feature: 'HWID recovery tools', icon: 'compareHwid' as const, robRun: false, cloudDma: false, hwid: true },
];
