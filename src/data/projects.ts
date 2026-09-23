import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    number: '01',
    title: 'TopIT',
    description: 'A TOPCIT reviewer that uses AI to create questions and adjust each test based on the student’s performance.',
    image: '/TOPIT.jpg',
    imageAlt: 'TopIT reviewer system shown on a laptop',
    tags: ['Laravel', 'React', 'FastAPI', 'RAG'],
    accent: '#ff4d25',
    links: [
      { label: 'Frontend', href: 'https://github.com/cedecj042/TopIT-Inertia-React' },
      { label: 'API', href: 'https://github.com/cedecj042/TopIT-API' },
    ],
  },
  {
    number: '02',
    title: 'SideQuest Pickleball',
    description: 'A website where players can view pickleball courts, check schedules, and make a booking.',
    image: '/sidequest.png',
    imageAlt: 'SideQuest Pickleball court booking website',
    tags: ['Web Design', 'Development', 'Booking'],
    accent: '#ff3151',
    links: [{ label: 'Visit website', href: 'https://sidequestpickleball.com' }],
  },
  {
    number: '03',
    title: 'Readingful',
    description: 'A reading practice platform for children with stories, activities, and tools for students and administrators.',
    image: '/readingful.png',
    imageAlt: 'Readingful reading practice website for kids',
    tags: ['Education', 'Product Design', 'Development'],
    accent: '#79a95b',
    links: [{ label: 'Visit website', href: 'https://readingful.com' }],
  },
  {
    number: '04',
    title: 'BizExpense',
    description: 'An expense tracker for small businesses with reports and charts that make expenses easier to understand.',
    image: '/BizExpense.jpg',
    imageAlt: 'BizExpense business expense tracking application',
    tags: ['Expense Tracking', 'Analytics', 'Full Stack'],
    accent: '#5bd5a6',
    links: [{ label: 'View on GitHub', href: 'https://github.com/cedecj042/BizExpense' }],
  },
]
