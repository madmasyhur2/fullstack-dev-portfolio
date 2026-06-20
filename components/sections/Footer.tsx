import { personal } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-6 py-8 md:px-10" aria-label="Footer">
      <div className="mx-auto flex max-w-shell flex-col items-center justify-between gap-2 text-xs text-text-muted sm:flex-row">
        <p>
          © {year} {personal.name}
        </p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
