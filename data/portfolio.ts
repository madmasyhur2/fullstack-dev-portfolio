export const personal = {
  name: "Muhammad Bin Djafar Almasyhur",
  shortName: "Muhammad",
  role: "Fullstack Developer",
  tagline: "Building scalable systems. Shipping reliable products.",
  subTagline: "Production Golang APIs · Next.js Applications · TypeScript Systems",
  availability: "Open to remote opportunities",
  location: "Indonesia",
  timezone: "WIB (UTC+7)",
  email: "muhammadmasyhur2@gmail.com",
  github: "https://github.com/madmasyhur2",
  linkedin: "https://www.linkedin.com/in/muhammad-bin-djafar-almasyhur-368228195/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "Fullstack Developer who has shipped automation systems that cut manual operational time by 80%, reduced Shopify deployment cycles by 50%, and delivered 37 production modules across a 14-week sprint — graduating cum laude (3.80 GPA) in Computer Science from Brawijaya University along the way. Currently architecting a full educational management system in Golang and Next.js, owning everything from database schema to frontend delivery.",
    "Based in Indonesia (UTC+7). Comfortable with async-first remote workflows, written communication, and cross-timezone collaboration. Available for remote full-time roles.",
  ],
};

export const projects = [
  {
    title: "Educational Management System",
    slug: "edu-management",
    description:
      "Architected and built a multi-role school platform from zero — RESTful API layer in Golang (Gin), PostgreSQL schema design, JWT-based RBAC handling educator/parent/admin access tiers, and a Next.js + TypeScript frontend with dynamic scheduling and grade reporting modules. Full ownership: system design through deployment.",
    stack: ["Golang", "Gin", "Next.js", "TypeScript", "PostgreSQL", "JWT", "RBAC"],
    status: "In Progress",
    github: null,
    demo: null,
    highlight: "Solo architecture — backend, frontend, and auth system",
    featured: true,
  },
  {
    title: "E-Commerce Automation — MAYFEYR",
    slug: "ecommerce-tools",
    description:
      "Built internal tooling for competitor price scraping, dynamic pricing logic, and Shopify deployment pipelines using Python, GraphQL, and n8n. The automation pipeline replaced ~80% of previously manual operational work. A separate deployment tool cut Shopify store go-live time by >50% by eliminating manual handoff steps between staging and production.",
    stack: ["Python", "GraphQL", "JavaScript", "Shopify API", "n8n"],
    status: "Shipped",
    github: null,
    demo: null,
    highlight: "80% ops reduction · 50% faster Shopify go-live",
    featured: true,
  },
  {
    title: "Batik Diffusion Model",
    slug: "batik-diffusion",
    description:
      "Fine-tuned Stable Diffusion via DreamBooth on a custom Batik pattern dataset. Engineered the full training pipeline — data preprocessing, hyperparameter tuning, and evaluation using FID and CLIP scores. Validated outputs with textile domain experts. Academic thesis, published as part of Computer Science degree at Brawijaya University.",
    stack: ["Python", "PyTorch", "Stable Diffusion", "DreamBooth", "HuggingFace"],
    status: "Completed",
    github: "https://github.com/madmasyhur2/dreambooth-batik",
    demo: "https://genbatik.ub.ac.id/",
    highlight: "Custom fine-tuning pipeline · Expert-validated output quality",
    featured: true,
  },
  {
    title: "EasyRent POS Platform",
    slug: "easyrent",
    description:
      "Built a full POS system from scratch: Laravel backend, MySQL schema, Midtrans payment gateway integration, and a full White-box + Black-box test suite covering core transaction flows. Designed for a rental business client with specific inventory and billing requirements.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Midtrans API"],
    status: "Completed",
    github: "https://github.com/meterai07/easyrent",
    demo: null,
    highlight: "Payment gateway integration · Full test coverage",
    featured: false,
  },
  {
    title: "Pharmacy POS Platform",
    slug: "Medifirst",
    description:
      "Full-stack Point-of-Sale platform for pharmacy with features like multi-location inventory, stock management, order management, and reporting. Built with Laravel, Tailwind CSS, Javascript, JQuery, and MySQL.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "JQuery"],
    status: "Completed",
    github: "https://github.com/madmasyhur2/Medifirst",
    demo: null,
    highlight: "End to end pharmacy management system",
    featured: false,
  },
  {
    title: "Discord Bot",
    slug: "ai-tech-news",
    description:
      "Discord bot that aggregates AI Tech News and delivers it to users. Features a curated feed, summaries, and discussions on trending topics",
    stack: ["Golang", "Discord-go", "REST API", "Cron Jobs"],
    status: "Completed",
    github: "https://github.com/JOUWAS/discord-ai-tech-news",
    demo: null,
    highlight: "Scheduled Tech News Discord Bot",
    featured: false,
  },
];

export const experience = [
  {
    company: "MAYFEYR Worldwide Pte Ltd.",
    role: "Full-Stack Developer",
    period: "Aug 2025 – Mar 2026",
    location: "Remote",
    bullets: [
      "Engineered an end-to-end automation pipeline in Python + n8n that eliminated ~80% of manual operational work previously done by the ops team.",
      "Built a Shopify deployment tool that cut store go-live wait time by >50% by automating the staging-to-production handoff process.",
      "Designed and debugged GraphQL queries powering a competitor price comparison engine used for dynamic pricing across the product catalog.",
      "Integrated frontend dashboards with backend e-commerce endpoints, maintaining data consistency across Python APIs and JavaScript UI layers.",
    ],
  },
  {
    company: "PT Suitmedia Kreasi Indonesia",
    role: "Software Engineer Intern",
    period: "Sept 2024 – Dec 2024",
    location: "Onsite · Agile team of 10+ engineers",
    bullets: [
      "Built enterprise-grade REST APIs in .NET (C#) with JWT authentication and WebSocket support for real-time data streams.",
      "Contributed to a 10+ developer agile team, maintaining CI/CD pipelines and Git branching workflows across multiple concurrent feature branches.",
      "Identified and resolved backend performance bottlenecks that were causing latency spikes in production API responses.",
    ],
  },
  {
    company: "PT ADMA Digital Solusi",
    role: "Full-Stack Web Developer Intern",
    period: "Feb 2024 – Jun 2024",
    location: "Onsite",
    bullets: [
      "Delivered 37 full-stack task modules across a 14-week sprint cycle — averaging 2.6 shippable modules per week under client deadline pressure.",
      "Architected and built a POS platform from zero using Laravel, JavaScript, and MySQL, based directly on client-provided functional requirements.",
      "Coordinated with UI/UX designers to translate Figma specs into pixel-accurate, responsive frontend implementations.",
    ],
  },
];

export const skills: Record<string, string[]> = {
  "Primary Stack": [
    "Golang (Gin)",
    "Next.js",
    "TypeScript",
    "Python (FastAPI)",
    "PostgreSQL",
    "REST API",
    "GraphQL",
    "JWT / RBAC",
  ],
  "Also Ship With": [
    "Node.js",
    ".NET (C#)",
    "Laravel (PHP)",
    "MySQL",
    "MongoDB",
    "WebSocket",
    "Docker",
    "CI/CD",
  ],
  "Tooling & Automation": [
    "n8n",
    "Git",
    "Appsmith",
    "Vercel",
  ],
  "AI / ML": [
    "PyTorch",
    "Stable Diffusion",
    "DreamBooth",
    "HuggingFace",
    "Computer Vision",
  ],
};
