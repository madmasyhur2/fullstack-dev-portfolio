# Muhammad Bin Djafar Almasyhur — Portfolio

Personal portfolio website built with **Next.js 14 (App Router)**, **Tailwind CSS v3**, and **Framer Motion**. Features a dark editorial-technical aesthetic with electric lime accents.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript) |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Lucide React + inline SVGs |
| Contact | EmailJS (client-side, no backend) |
| Fonts | Syne (headings) + DM Sans (body) |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm run start
```

## EmailJS Configuration

The contact form uses [EmailJS](https://www.emailjs.com/) for client-side email delivery — no backend needed.

### Steps

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** (Gmail, Outlook, etc.) and note the **Service ID**
3. Create an **Email Template** with these template variables:
   - `{{from_name}}` — sender's name
   - `{{reply_to}}` — sender's email
   - `{{message}}` — message body
4. Note your **Template ID** and **Public Key** (from Account → API Keys)
5. Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxx
```

> **Note:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Customization

### Replacing the Resume

Replace `public/resume.pdf` with your actual resume PDF file. Keep the filename `resume.pdf`.

### Updating Personal Info

All content is centralized in `data/portfolio.ts`. Edit:

- `personal` — name, email, GitHub, LinkedIn, location
- `about.paragraphs` — bio text
- `projects` — project entries
- `experience` — work history
- `skills` — categorized tech stack

### Updating Metadata & OG

After your domain is set, update `app/layout.tsx`:

```typescript
metadataBase: new URL('https://your-domain.com'),
```

## Deployment to Vercel

### Option A: CLI

```bash
npm install -g vercel
vercel --prod
```

### Option B: GitHub Integration

1. Push to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard (Settings → Environment Variables):
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Deploy

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, metadata, font injection
│   ├── page.tsx            # Single-page, imports all sections
│   └── globals.css         # Tailwind directives + CSS design tokens
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── Navbar.tsx
│       ├── ProjectCard.tsx
│       ├── ExperienceItem.tsx
│       └── SkillBadge.tsx
├── data/
│   └── portfolio.ts        # All content as typed constants
├── public/
│   └── resume.pdf          # Replace with your actual resume
└── .env.local.example      # Environment variable template
```

## License

Personal portfolio — all rights reserved by Muhammad Bin Djafar Almasyhur.
