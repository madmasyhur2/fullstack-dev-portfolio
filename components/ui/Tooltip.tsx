'use client'

import * as RTooltip from '@radix-ui/react-tooltip'
import type { ReactNode } from 'react'

/**
 * Thin styled wrapper over Radix Tooltip. Used to label the stack icons
 * (which carry no visible text). The trigger stays keyboard-focusable, so the
 * label is reachable on hover and on focus.
 */
export default function Tooltip({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <RTooltip.Root>
      <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
      <RTooltip.Portal>
        <RTooltip.Content
          side="top"
          sideOffset={8}
          className="z-50 select-none rounded-md border border-border bg-surface-raised px-2.5 py-1 text-xs font-medium text-text-primary shadow-card-hover"
        >
          {label}
          <RTooltip.Arrow className="fill-surface-raised" />
        </RTooltip.Content>
      </RTooltip.Portal>
    </RTooltip.Root>
  )
}

export const TooltipProvider = RTooltip.Provider
