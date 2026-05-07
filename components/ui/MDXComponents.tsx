import type { ComponentPropsWithoutRef } from 'react'

type HTMLProps<T extends keyof JSX.IntrinsicElements> = ComponentPropsWithoutRef<T>

export const MDXComponents = {
  h2: (props: HTMLProps<'h2'>) => (
    <h2
      className="font-display text-2xl font-bold text-[#F0EEE6] mt-10 mb-4 leading-snug"
      {...props}
    />
  ),
  h3: (props: HTMLProps<'h3'>) => (
    <h3
      className="font-display text-xl font-semibold text-[#F0EEE6] mt-8 mb-3 leading-snug"
      {...props}
    />
  ),
  h4: (props: HTMLProps<'h4'>) => (
    <h4
      className="font-display text-lg font-semibold text-[#F0EEE6] mt-6 mb-2"
      {...props}
    />
  ),
  p: (props: HTMLProps<'p'>) => (
    <p
      className="font-sans text-[#8A887F] leading-7 mb-5"
      {...props}
    />
  ),
  code: (props: HTMLProps<'code'>) => (
    <code
      className="font-mono text-sm bg-[#1A1A1A] text-[#E8FF57] px-1.5 py-0.5 rounded border border-[#222220]"
      {...props}
    />
  ),
  pre: (props: HTMLProps<'pre'>) => (
    <pre
      className="bg-[#111111] border border-[#222220] rounded-lg p-4 overflow-x-auto mb-6 text-sm font-mono text-[#8A887F] leading-relaxed"
      {...props}
    />
  ),
  a: (props: HTMLProps<'a'>) => (
    <a
      className="text-[#E8FF57] underline underline-offset-2 hover:text-[#B8CC3A] transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props: HTMLProps<'ul'>) => (
    <ul
      className="list-disc list-inside font-sans text-[#8A887F] space-y-2 mb-5 leading-7"
      {...props}
    />
  ),
  ol: (props: HTMLProps<'ol'>) => (
    <ol
      className="list-decimal list-inside font-sans text-[#8A887F] space-y-2 mb-5 leading-7"
      {...props}
    />
  ),
  li: (props: HTMLProps<'li'>) => (
    <li className="font-sans text-[#8A887F]" {...props} />
  ),
  blockquote: (props: HTMLProps<'blockquote'>) => (
    <blockquote
      className="border-l-2 border-[#E8FF57]/40 pl-4 italic text-[#8A887F] my-6 font-sans"
      {...props}
    />
  ),
  hr: () => (
    <hr className="border-t border-[#222220] my-8" />
  ),
  table: (props: HTMLProps<'table'>) => (
    <div className="overflow-x-auto mb-6">
      <table
        className="w-full text-sm font-mono border-collapse border border-[#222220]"
        {...props}
      />
    </div>
  ),
  th: (props: HTMLProps<'th'>) => (
    <th
      className="border border-[#222220] px-4 py-2 text-left text-[#F0EEE6] bg-[#1A1A1A] font-semibold"
      {...props}
    />
  ),
  td: (props: HTMLProps<'td'>) => (
    <td
      className="border border-[#222220] px-4 py-2 text-[#8A887F]"
      {...props}
    />
  ),
  strong: (props: HTMLProps<'strong'>) => (
    <strong className="text-[#F0EEE6] font-semibold" {...props} />
  ),
}
