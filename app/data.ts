
type Project = {
  name: string
  description: string
  link: string
  video?: string
  id: string
  tags: string[]
  wip?: boolean
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const SKILLS: string[] = [
  'TypeScript',
  'Javascript',
  'Python',
  'NodeJS',
  'PostgreSQL',

]

export const PROJECTS: Project[] = [
  {
    name: "Zoro",
    description: "An autonomous AI coding agent that helps developers scaffold, iterate, and debug projects directly from natural language instructions.",
    link: "https://github.com/Udit19199/zoro",
    id: "project_1",
    tags: ["AI", "LLM"]
  },
  {
    name: "Asteroids",
    description: "A modern take on the classic arcade shooter, built with Python and Pygame, featuring smooth controls and dynamic asteroid physics.",
    link: "https://github.com/Udit19199/Asteroids",
    id: "project_2",
    tags: ["Python", "Pygame"],
    wip: true
  },
  {
    name: "Aurora",
    description: "An AI-driven productivity system that transforms tasks into smart, adaptive schedules with automated planning and prioritization.",
    link: "https://github.com/Udit19199/aurora",
    id: "project_3",
    tags: ["AI", "TypeScript"],
    wip: true
  },
  {
    name: "Pokedex",
    description: "A feature-rich Pokédex built with TypeScript, delivering detailed Pokémon stats, visuals, and fast search powered by modern web tooling.",
    link: "https://github.com/Udit19199/pokedex",
    id: "project_4",
    tags: ["TypeScript"],
    wip: true
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = []


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
    label: 'Medium',
    link: 'https://medium.com/@udit-19199',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/udit19199',
  },
]

export const EMAIL = 'hello@uditagarwal.me'
