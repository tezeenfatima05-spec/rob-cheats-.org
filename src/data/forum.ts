export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: input.upvotes,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'rob-run-player-esp-distance',
    title: 'What player ESP distance should I use first?',
    upvotes: 64,
    excerpt: 'Sample Q&A on readable ESP distance for chases and hideout pushes.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'ROB RUN player ESP setup',
    sourcePath: '/blog/rob-run-player-esp-guide/',
    answer:
      'Start around 150–200 meters with corner boxes only. Raise distance after you can track cops and criminals without losing aim focus.',
    detail: 'Enable role tags and wanted state only when the overlay still feels clean during a police chase.',
    tip: 'Use separate visible and hidden colors for cops vs criminals before increasing box thickness.',
  }),
  guideDiscussion({
    slug: 'rob-run-aimbot-fov-smooth',
    title: 'Recommended FOV and smooth for soft aimbot?',
    upvotes: 52,
    excerpt: 'Sample tuning notes for aim key, FOV ring, and visible check.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'ROB RUN soft aimbot setup',
    sourcePath: '/blog/rob-run-aimbot-setup/',
    answer: 'Keep FOV under 8–12° at first with smooth above 6. Visible check should stay on for public lobbies.',
    detail: 'Chest or closest bone is easier to justify than hard head lock when clips are reviewed.',
    tip: 'Ignore teammates and clan before you widen FOV or lower smooth.',
  }),
  guideDiscussion({
    slug: 'rob-run-loot-radar-filters',
    title: 'Which loot radar filters matter for heists?',
    upvotes: 41,
    excerpt: 'Sample discussion on cash, stash, and objective layers.',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    sourceTitle: 'ROB RUN loot and stash radar tips',
    sourcePath: '/blog/rob-run-loot-radar-tips/',
    answer: 'Enable cash and weapon drops first, then safes and hideout doors when you raid bases.',
    detail: 'Shorter max world distance keeps 2D radar readable during city fights.',
    tip: 'Toggle vehicle and objective layers separately during cop chases.',
  }),
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}

export const forumPosts: ForumPost[] = [
  ...additionalGuidePosts,
  {
    slug: 'patch-day-status-check',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Reminder: check status before every ROB RUN session',
    excerpt: 'Sample patch-day note—confirm loader build online after game updates.',
    author: 'status_bot',
    age: '1 day ago',
    commentsCount: 2,
    upvotes: 88,
    flair: 'Status',
    body: [
      'After a ROB RUN patch, wait for the robcheats.org banner and Discord #status to show green before enabling aimbot or ESP.',
      'Reload presets from the portal instead of copying old sliders from memory.',
    ],
    comments: [
      {
        author: 'guide_team',
        age: '1 day ago',
        score: 12,
        body: 'Conservative ESP distance and visible-only aimbot are good first tests after any update.',
      },
    ],
  },
  {
    slug: 'cloud-dma-compatibility-question',
    category: 'General',
    categoryTone: 'purple',
    title: 'Cloud DMA compatibility scan—what does it check?',
    excerpt: 'Sample explainer on firmware and hardware checks before ROB RUN pairing.',
    author: 'dma_helper',
    age: '3 days ago',
    commentsCount: 1,
    upvotes: 37,
    body: [
      'The portal scan validates supported firmware and DMA hardware before ROB RUN modules activate.',
      'See the Cloud DMA product page for the full checklist and setup order.',
    ],
    comments: [],
    sourceTitle: 'ROB RUN Cloud DMA requirements',
    sourcePath: '/blog/rob-run-cloud-dma-requirements/',
  },
  {
    slug: 'stream-proof-overlay-test',
    category: 'Community',
    categoryTone: 'green',
    title: 'Stream-proof overlay quick test workflow',
    excerpt: 'Sample creator checklist for OBS and Game Bar capture.',
    author: 'creator_ops',
    age: '4 days ago',
    commentsCount: 0,
    upvotes: 29,
    body: [
      'Enable stream proof, open a local recording, and confirm ESP does not appear on the captured feed.',
      'Re-test after toggling radar or loot layers—some modules need per-layer stream proof.',
    ],
    comments: [],
  },
];
