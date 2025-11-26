type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = []

export const WORK_EXPERIENCE: WorkExperience[] = []

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'My Side Project Started Planning For Me',
    description: 'How AI is changing the way we design',
    link: '/blog/my-side-project-started-planning-for-me',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Udit19199',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/UditAga84007584',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/uditagarwal19199/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/udit19199',
  },
]

export const EMAIL = 'udit19199@gmail.com'
