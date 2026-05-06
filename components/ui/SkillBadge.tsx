'use client'

interface SkillBadgeProps {
  skill: string
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="font-mono text-xs text-[#8A887F] bg-[#1A1A1A] border border-[#222220] rounded px-3 py-1.5 hover:border-[#E8FF57]/40 hover:text-[#F0EEE6] transition-all duration-150 cursor-default select-none">
      {skill}
    </span>
  )
}
