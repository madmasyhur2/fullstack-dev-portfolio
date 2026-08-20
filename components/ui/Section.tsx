import type { ReactNode } from 'react'

/** Consistent section shell: anchor target, horizontal padding, vertical rhythm,
 *  and the shared max-width. Padding and rhythm step up mobile-first
 *  (phone → sm → md); keeping them in one place avoids the
 *  selector-specificity drift that creeps in when each section sets its own. */
export default function Section({
  id,
  children,
  className = '',
}: {
  id: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-shell">{children}</div>
    </section>
  )
}
