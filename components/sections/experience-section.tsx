import { FadeIn } from '@/components/fade-in'
import { WORK_EXPERIENCE } from '@/app/data'
import { WorkExperienceItem } from '@/components/work-experience-item'

export function ExperienceSection() {
  if (WORK_EXPERIENCE.length === 0) return null

  return (
    <FadeIn>
      <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
      <div className="flex flex-col space-y-2">
        {WORK_EXPERIENCE.map((job) => (
          <WorkExperienceItem key={job.id} job={job} />
        ))}
      </div>
    </FadeIn>
  )
}
