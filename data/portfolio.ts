export const personal = {
  name: "Muhammad Bin Djafar Almasyhur",
  shortName: "Muhammad",
  role: "Fullstack Developer",
  tagline: "Building scalable systems. Shipping reliable products.",
  subTagline: "Golang · Next.js · TypeScript",
  availability: "Open to remote opportunities",
  location: "Malang, Indonesia",
  timezone: "WIB (UTC+7)",
  email: "muhammadmasyhur2@gmail.com",
  github: "https://github.com/madmasyhur2",
  linkedin: "https://www.linkedin.com/in/muhammad-bin-djafar-almasyhur-368228195/",
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "Fullstack Developer with production experience building scalable web applications and automating business-critical workflows. Graduated cum laude in Computer Science from Brawijaya University (GPA 3.80/4.00).",
    "Currently building an educational management system using Golang and Next.js — handling everything from system architecture to frontend delivery. Previously at MAYFEYR Worldwide, where I engineered automation pipelines that reduced manual operational time by ~80% and cut Shopify go-live wait times by over 50%.",
    "Based in Malang, Indonesia (UTC+7). Comfortable with async-first remote workflows, written communication, and cross-timezone collaboration.",
  ],
};

export const projects = [
  {
    title: "Educational Management System",
    slug: "edu-management",
    description:
      "Comprehensive school management platform for educators and parents. Architected the full system from scratch — RESTful APIs in Golang (Gin), interactive frontend in Next.js + TypeScript, and a robust RBAC authentication mechanism handling multi-role access control.",
    stack: ["Golang", "Gin", "Next.js", "TypeScript", "PostgreSQL", "RBAC", "JWT"],
    status: "In Progress",
    github: null,
    demo: null,
    highlight: "Full-ownership project — architecture, backend, and frontend",
    featured: true,
  },
  {
    title: "E-Commerce Automation Tools",
    slug: "ecommerce-tools",
    description:
      "Internal tooling suite at MAYFEYR Worldwide for competitor price comparison and dynamic pricing. Built end-to-end automated pipelines that reduced manual operational time by ~80% and developed an internal tool cutting Shopify go-live wait times by over 50%.",
    stack: ["Python", "GraphQL", "JavaScript", "Shopify API", "n8n"],
    status: "Shipped",
    github: null,
    demo: null,
    highlight: "~80% reduction in manual ops time",
    featured: true,
  },
  {
    title: "Batik Diffusion Model",
    slug: "batik-diffusion",
    description:
      "Engineered a fine-tuning pipeline for generative AI models (Stable Diffusion, DreamBooth) to produce authentic Indonesian Batik patterns. Applied computer vision evaluation metrics and expert validation to ensure output quality. Academic thesis project.",
    stack: ["Python", "PyTorch", "Stable Diffusion", "DreamBooth", "HuggingFace"],
    status: "Completed",
    github: "https://github.com/madmasyhur2/dreambooth-batik",
    demo: "https://genbatik.ub.ac.id/",
    highlight: "Fine-tuned diffusion model for cultural pattern generation",
    featured: true,
  },
  {
    title: "EasyRent POS Platform",
    slug: "easyrent",
    description:
      "Full-stack Point-of-Sale platform built from scratch with integrated payment gateway. Designed MySQL database architecture, implemented core backend modules, integrated Midtrans API for secure payments, and wrote White-box and Black-box test suites.",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript", "Midtrans API"],
    status: "Completed",
    github: "https://github.com/meterai07/easyrent",
    demo: null,
    highlight: "End-to-end POS with payment gateway integration",
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
    stack: ["Golang", "Discord-go", "REST API", "Cron Jobs", ],
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
      "Developed and maintained scalable web applications integrating frontend dashboards with backend e-commerce endpoints using Python, JavaScript, and GraphQL.",
      "Engineered end-to-end automated systems that reduced manual operational time by ~80% by translating business requirements into production pipelines.",
      "Built an internal tool that cut Shopify go-live wait times by over 50% through optimized deployment workflows.",
      "Debugged and optimized database queries powering competitor price comparison and dynamic pricing algorithms.",
    ],
  },
  {
    company: "PT Suitmedia Kreasi Indonesia",
    role: "Software Engineer Intern",
    period: "Sept 2024 – Dec 2024",
    location: "Onsite",
    bullets: [
      "Developed secure, enterprise-grade APIs using .NET and C#, integrating JWT authentication and WebSockets for real-time data communication.",
      "Monitored and optimized backend system performance within a 10+ developer agile team.",
      "Maintained structured CI/CD and Git version control workflows across cross-functional teams.",
    ],
  },
  {
    company: "PT ADMA Digital Solusi",
    role: "Full-Stack Web Developer Intern",
    period: "Feb 2024 – Jun 2024",
    location: "Onsite",
    bullets: [
      "Architected and built a comprehensive POS platform from scratch using Laravel, JavaScript, and MySQL based on client specifications.",
      "Delivered 37 complex task modules within a strict 14-week sprint cycle.",
      "Collaborated with UI/UX designers and technical writers to deploy end-to-end features.",
    ],
  },
];

export const skills: Record<string, string[]> = {
  Backend: ["Golang (Gin)", "Python (FastAPI)", "Node.js", ".NET (C#)", "Laravel (PHP)"],
  Frontend: ["Next.js", "React", "TypeScript", "JavaScript"],
  Database: ["PostgreSQL", "MySQL", "MongoDB", "MSSQL"],
  APIs: ["REST", "GraphQL", "WebSocket", "JWT"],
  DevOps: ["Docker", "Git", "CI/CD", "n8n", "Appsmith"],
  "AI / ML": ["PyTorch", "Stable Diffusion", "DreamBooth", "HuggingFace", "LLaVA"],
};
