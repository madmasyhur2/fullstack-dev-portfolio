// Single source of truth for all portfolio copy.
// Copy is final/approved — do not substitute placeholder text.

export const personal = {
  name: 'Muhammad Bin Djafar Almasyhur',
  shortName: 'Muhammad',
  role: 'AI Automation Engineer',
  subheadline:
    'AI Automation Engineer — agentic systems, LLM integration, and workflow automation built for production.',
  availability: 'Open to remote AI Automation / Applied AI Engineer roles.',
  email: 'muhammadmasyhur2@gmail.com',
  github: 'https://github.com/madmasyhur2',
  linkedin:
    'https://www.linkedin.com/in/muhammad-bin-djafar-almasyhur-368228195/',
  resumeUrl: '/resume.pdf',
}

// Rendered as three tiers for typographic hierarchy; concatenated they are the
// approved bio verbatim.
export const about = {
  lead: 'I build agentic systems and automation pipelines that eliminate operational bottlenecks — not just write code.',
  body: 'Production experience across LangGraph, FastAPI, n8n, and LLM APIs.',
  credential: 'CS graduate, Brawijaya University, GPA 3.80 Cumlaude.',
}

// `slug` keys into the inline brand SVGs in components/ui/StackIcons.tsx
export interface StackItem {
  name: string
  slug: string
}

export const stack: StackItem[] = [
  { name: 'Python', slug: 'python' },
  { name: 'LangGraph', slug: 'langgraph' },
  { name: 'FastAPI', slug: 'fastapi' },
  { name: 'n8n', slug: 'n8n' },
  { name: 'Make.com', slug: 'make' },
  { name: 'Gemini', slug: 'gemini' },
  { name: 'Claude API', slug: 'claude' },
  { name: 'Next.js', slug: 'nextjs' },
  { name: 'Go', slug: 'go' },
  { name: 'Docker', slug: 'docker' },
  { name: 'PostgreSQL', slug: 'postgresql' },
]

export type BentoArea = 'featured' | 'project2' | 'project3' | 'project4'

export interface Project {
  title: string
  badge: string
  // 'demo' tints the featured badge indigo; 'production' = emerald; 'research' = neutral
  badgeKind: 'demo' | 'production' | 'research'
  stack: string[]
  description: string
  github: string | null
  demo: string | null
  area: BentoArea
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Campaign Trust & Safety Review Agent',
    badge: 'Portfolio Demo · 2026',
    badgeKind: 'demo',
    stack: [
      'LangGraph',
      'FastAPI',
      'Gemini Flash/Pro',
      'Next.js',
      'Railway',
      'Vercel',
    ],
    description:
      'Full-stack LangGraph agentic system for campaign moderation. Multi-node orchestration with Gemini Flash for high-volume classification and Gemini Pro for final decision nodes. Next.js human-in-the-loop review interface with explicit human/AI approval boundaries. Deployed on Railway and Vercel.',
    // TODO(muhammad): add the real repo + live demo URLs once deployed.
    github: null,
    demo: null,
    area: 'featured',
    featured: true,
  },
  {
    title: 'MAYFEYR Worldwide — AI Automation Pipeline',
    badge: 'Production · Aug 2025 – Mar 2026',
    badgeKind: 'production',
    stack: ['Python', 'n8n', 'LLM Integration', 'Go', 'GraphQL'],
    description:
      'Shipped AI automation pipeline reducing daily manual operational time by ~80%. Automated Shopify go-live workflows cutting launch time by 50%+.',
    github: null,
    demo: null,
    area: 'project2',
  },
  {
    title: 'Batik Generative AI — Thesis Research',
    badge: 'Research · Apr – Aug 2025',
    badgeKind: 'research',
    stack: ['Stable Diffusion', 'DreamBooth', 'PyTorch', 'Python'],
    description:
      'Fine-tuned Stable Diffusion for domain-specific Batik pattern generation. Achieved 70% motif accuracy via domain expert validation.',
    github: 'https://github.com/madmasyhur2/dreambooth-batik',
    demo: 'https://genbatik.ub.ac.id/',
    area: 'project3',
  },
  {
    title: 'Integrated Education Information System',
    badge: 'Production · Mar 2026 – Present',
    badgeKind: 'production',
    stack: ['Golang/Gin', 'Next.js', 'PostgreSQL'],
    description:
      'Full-stack school management platform with RBAC across 3 user tiers. Built and used daily by Madrasah Al-Fath Malang teachers and staff.',
    github: null,
    demo: null,
    area: 'project4',
  },
]

export interface MoreWorkItem {
  title: string
  blurb: string
  stack: string[]
  github: string | null
}

export const moreWork: MoreWorkItem[] = [
  {
    title: 'EasyRent — POS Platform',
    blurb: 'Rental POS with Midtrans payments and full white/black-box test coverage.',
    stack: ['Laravel', 'MySQL', 'Midtrans'],
    github: 'https://github.com/meterai07/easyrent',
  },
  {
    title: 'Medifirst — Pharmacy POS',
    blurb: 'Multi-location pharmacy inventory, ordering, and reporting platform.',
    stack: ['Laravel', 'MySQL', 'JavaScript'],
    github: 'https://github.com/madmasyhur2/Medifirst',
  },
  {
    title: 'AI Tech News — Discord Bot',
    blurb: 'Scheduled bot aggregating and summarizing AI tech news into a curated feed.',
    stack: ['Go', 'discord-go', 'Cron'],
    github: 'https://github.com/JOUWAS/discord-ai-tech-news',
  },
]

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'MAYFEYR Worldwide',
    role: 'Fullstack Developer (AI Automation Focus)',
    period: 'Aug 2025 – Mar 2026',
    location: 'Remote · Singapore',
    bullets: [
      'Reduced manual operational time by ~80% via an AI automation pipeline.',
      'Cut Shopify store launch time 50%+ with automated go-live tooling.',
    ],
  },
  {
    company: 'PT Suitmedia Kreasi Indonesia',
    role: 'Software Engineer Intern',
    period: 'Sep 2024 – Dec 2024',
    location: 'Malang · Hybrid',
    bullets: [
      'Shipped JWT auth + WebSocket APIs in a 10-person Agile team.',
      'Maintained zero-regression CI/CD across sprint cycles.',
    ],
  },
  {
    company: 'PT ADMA Digital Solusi',
    role: 'Fullstack Developer Intern',
    period: 'Feb 2024 – Jun 2024',
    location: 'Surabaya',
    bullets: [
      'Delivered 37 feature modules end-to-end in 14 weeks on a POS platform.',
    ],
  },
]
