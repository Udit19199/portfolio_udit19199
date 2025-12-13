import { FadeIn } from '@/components/fade-in'
import { PROJECTS } from '@/app/data'
import { ProjectVideo } from '@/components/project-video'

export function ProjectsSection() {
  return (
    <FadeIn>
      <h3 className="mb-5 text-lg font-medium">Selected Projects</h3>
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="p-6 rounded-2xl bg-black/10 dark:bg-black/10 backdrop-blur-md border border-white/[0.1] dark:border-white/[0.1] shadow-lg relative transition-all duration-300 ease-in-out hover:border-white/30 hover:shadow-xl"
          >
            <div className="space-y-4">
              {project.video && (
                <div className="relative rounded-xl bg-zinc-50/20 p-1 ring-1 ring-zinc-200/20 ring-inset dark:bg-zinc-950/20 dark:ring-zinc-800/20">
                  <ProjectVideo src={project.video} />
                </div>
              )}
              <div>
                <a
                  className="font-base group relative mb-3 inline-block font-[450] text-white"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-white transition-all duration-200 group-hover:max-w-full"></span>
                </a>
                <p className="text-base text-white/80 leading-relaxed">
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}
