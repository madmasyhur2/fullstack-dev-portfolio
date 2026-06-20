'use client'

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

/*
 * Scroll-triggered fade-in used by every section.
 * Spec: hidden { opacity: 0, y: 20 } → visible { opacity: 1, y: 0 },
 * duration 0.5s, children staggered 0.1s. All motion is gated behind
 * useReducedMotion() so reduced-motion users get an instant, static reveal.
 */

const EASE = [0.22, 1, 0.36, 1] as const
const DISTANCE = 20

// Trigger on the element's leading edge (root-margin based) rather than a
// percentage of its height — so a section taller than the viewport can never
// get stuck at opacity:0.
const viewport = { once: true, margin: '0px 0px -100px 0px' } as const

type MotionTag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'span' | 'h2' | 'p'

interface RevealProps extends HTMLMotionProps<'div'> {
  as?: MotionTag
  delay?: number
  children: ReactNode
}

export function Reveal({ as = 'div', delay = 0, children, ...rest }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as] as ElementType

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, delay, ease: EASE },
    },
  }

  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* Container that staggers its <Stagger.Item> children into view. */
export function Stagger({
  as = 'div',
  stagger = 0.1,
  children,
  ...rest
}: RevealProps & { stagger?: number }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] as ElementType

  const variants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : stagger },
    },
  }

  return (
    <Tag
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Tag>
  )
}

function StaggerItem({ as = 'div', children, ...rest }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as] as ElementType

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: EASE },
    },
  }

  return (
    <Tag variants={variants} {...rest}>
      {children}
    </Tag>
  )
}

Stagger.Item = StaggerItem
