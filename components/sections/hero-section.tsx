import { SkillsSection } from '@/components/sections/skills-section'

export function HeroSection() {
  return (
    <section className='mb-24'>
      <div className="flex-1">
        <p className="text-zinc-600 dark:text-zinc-400">
          Building reliable backend systems with clean code, clear intent, and zero drama.
        </p>
        <div className="mt-6">
          <SkillsSection />
        </div>
      </div>
    </section>
  )
}
