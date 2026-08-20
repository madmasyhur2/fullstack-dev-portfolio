import type { ReactNode } from 'react'
import Navbar from '@/components/ui/Navbar'

/* The blog routes render outside app/page.tsx, so they need their own mount of
   the site nav — without it the only way back is the inline back link. */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
