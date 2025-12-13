'use client'

import { Magnetic } from '@/components/ui/magnetic'
import { SKILLS } from '@/app/data'

export function SkillsSection() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-4">
      {SKILLS.map((skill) => (
        <Magnetic key={skill} springOptions={{ bounce: 0 }}>
          <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm dark:bg-zinc-800 dark:text-zinc-100">
            {skill}
          </span>
        </Magnetic>
      ))}
    </div>
  )
}
