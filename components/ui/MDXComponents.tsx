import type { ComponentPropsWithoutRef } from 'react'

type HTMLProps<T extends keyof JSX.IntrinsicElements> = ComponentPropsWithoutRef<T>

export const MDXComponents = {
  h2: (props: HTMLProps<'h2'>) => (
    <h2
      className="mt-10 mb-4 break-words font-display text-2xl font-semibold leading-snug text-text-primary"
      {...props}
    />
  ),
  h3: (props: HTMLProps<'h3'>) => (
    <h3
      className="mt-8 mb-3 break-words font-display text-xl font-semibold leading-snug text-text-primary"
      {...props}
    />
  ),
  h4: (props: HTMLProps<'h4'>) => (
    <h4
      className="mt-6 mb-2 break-words font-display text-lg font-semibold text-text-primary"
      {...props}
    />
  ),
  p: (props: HTMLProps<'p'>) => (
    <p className="mb-5 break-words leading-7 text-text-secondary" {...props} />
  ),
  // Inline code stays on text-primary rather than the accent: indigo is this
  // site's interactive colour, and a code pill is not a link.
  code: (props: HTMLProps<'code'>) => (
    <code
      className="break-words rounded border border-border bg-surface-raised px-1.5 py-0.5 font-mono text-sm text-text-primary"
      {...props}
    />
  ),
  // A fenced block renders as <code> inside <pre> and would otherwise inherit
  // the inline pill chrome above. The descendant resets strip it here, in the
  // one component that actually knows it is the parent — keying off MDX's
  // `language-*` class instead would miss a fence written without a language.
  pre: (props: HTMLProps<'pre'>) => (
    <pre
      className="mb-6 overflow-x-auto rounded-lg border border-border bg-surface p-3 font-mono text-[13px] leading-relaxed text-text-secondary sm:p-4 sm:text-sm sm:leading-relaxed [&_code]:rounded-none [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[length:inherit] [&_code]:text-inherit"
      {...props}
    />
  ),
  // accent-hover is darker than accent — right for a button fill, wrong for
  // text on a dark page — so the hover brightens to text-primary instead.
  a: (props: HTMLProps<'a'>) => (
    <a
      className="break-words break-anywhere text-accent underline underline-offset-2 transition-colors hover:text-text-primary"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props: HTMLProps<'ul'>) => (
    <ul
      className="mb-5 list-inside list-disc space-y-2 leading-7 text-text-secondary"
      {...props}
    />
  ),
  ol: (props: HTMLProps<'ol'>) => (
    <ol
      className="mb-5 list-inside list-decimal space-y-2 leading-7 text-text-secondary"
      {...props}
    />
  ),
  li: (props: HTMLProps<'li'>) => (
    <li className="break-words text-text-secondary" {...props} />
  ),
  blockquote: (props: HTMLProps<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-4 italic text-text-secondary"
      {...props}
    />
  ),
  hr: () => <hr className="my-8 border-t border-border" />,
  table: (props: HTMLProps<'table'>) => (
    <div className="mb-6 overflow-x-auto">
      <table className="w-full border-collapse border border-border text-sm" {...props} />
    </div>
  ),
  th: (props: HTMLProps<'th'>) => (
    <th
      className="border border-border bg-surface px-4 py-2 text-left font-semibold text-text-primary"
      {...props}
    />
  ),
  td: (props: HTMLProps<'td'>) => (
    <td className="border border-border px-4 py-2 text-text-secondary" {...props} />
  ),
  strong: (props: HTMLProps<'strong'>) => (
    <strong className="font-semibold text-text-primary" {...props} />
  ),
}
