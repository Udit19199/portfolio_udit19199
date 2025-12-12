import { getSortedPostsData } from '@/lib/blog'
import { FadeInStagger } from '@/components/fade-in'
import { HeroSection } from '@/components/sections/hero-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ConnectSection } from '@/components/sections/connect-section'

export default function Page() {
  const blogPosts = getSortedPostsData()

  return (
    <FadeInStagger className="space-y-24">
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection posts={blogPosts} />
      <ConnectSection />
    </FadeInStagger>
  )
}
