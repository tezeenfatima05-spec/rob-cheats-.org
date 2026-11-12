/**
 * Central titles/descriptions for high-traffic routes.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'ROB RUN Cheats — Aimbot, Player ESP & Loot Radar',
    description:
      'ROB RUN cheats for PC featuring soft aimbot, player ESP, vehicle ESP, loot radar, 2D radar, no recoil, and Cloud DMA support at robcheats.org.',
  },
  '/products/rob-run-cheats/': {
    title: 'ROB RUN Cheats, Cloud DMA & HWID Spoofer',
    description:
      'ROB RUN premium cheats plus Cloud DMA and HWID Spoofer utilities for Steam on robcheats.org.',
  },
  '/products/rob-run-cheats/rob-run/': {
    title: 'ROB RUN Cheats | Aimbot, ESP & 2D Radar',
    description:
      'Full ROB RUN cheat menu: soft aimbot, player ESP, vehicle ESP, loot markers, radar, and misc assists.',
  },
  '/products/rob-run-cheats/cloud-dma/': {
    title: 'ROB RUN Cloud DMA | Hardware Isolated Access',
    description:
      'Cloud DMA workflow, firmware steps, and ROB RUN module pairing for supported DMA hardware.',
  },
  '/products/rob-run-cheats/hwid-spoofer/': {
    title: 'HWID Spoofer for ROB RUN PC Recovery',
    description:
      'Disk and MAC spoofing tools with verification steps before launching ROB RUN on a new account.',
  },
  '/products/rob-run-cheats/utilities/': {
    title: 'ROB RUN Utilities | Cloud DMA & HWID Spoofer',
    description:
      'Compare Cloud DMA and HWID Spoofer—when each utility fits and links to full product pages.',
  },
  '/blog/': {
    title: 'ROB RUN Cheats Guides & Setup Notes',
    description:
      'ESP setup, aimbot tuning, loot radar tips, and Cloud DMA requirements for ROB RUN cheats.',
  },
  '/forum/': {
    title: 'ROB RUN Community Forum | ROB Cheats',
    description: 'Discuss ROB RUN setups, ESP tuning, radar configs, and patch-day checks with other players.',
  },
  '/faq/': {
    title: 'FAQ | ROB RUN Cheats, Products & Setup',
    description:
      'Answers on ROB RUN cheats, Cloud DMA, HWID tools, checkout, and setup at robcheats.org.',
  },
  '/terms/': {
    title: 'Terms & Conditions | ROB Cheats',
    description: 'Purchase terms, license use, and refund policy for ROB Cheats products at robcheats.org.',
  },
  '/privacy/': {
    title: 'Privacy Policy | ROB Cheats',
    description: 'How robcheats.org uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About ROB Cheats',
    description: 'What ROB Cheats publishes: ROB RUN cheat software, utilities, guides, and status notes.',
  },
  '/support/': {
    title: 'Support | ROB Cheats',
    description: 'Get help with loader setup, HWID, and checkout for ROB RUN cheats and utilities.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
