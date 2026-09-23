import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    number: '01',
    title: 'TopIT',
    description: 'A personalized TOPCIT reviewer that combines retrieval-augmented generation with computerized adaptive testing to create a smarter, more focused study experience.',
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
    description: 'A lively court discovery and booking experience built to help players spend less time planning and more time playing.',
    image: '/sidequest.png',
    imageAlt: 'SideQuest Pickleball court booking website',
    tags: ['Web Design', 'Development', 'Booking'],
    accent: '#ff3151',
    links: [{ label: 'Visit website', href: 'https://sidequestpickleball.com' }],
  },
  {
    number: '03',
    title: 'Readingful',
    description: 'A playful reading platform for kids, designed to turn practice into an inviting, story-led experience that feels easy to return to.',
    image: '/readingful.png',
    imageAlt: 'Readingful reading practice website for kids',
    tags: ['Education', 'Product Design', 'Development'],
    accent: '#79a95b',
    links: [{ label: 'Visit website', href: 'https://readingful.com' }],
  },
  {
    number: '04',
    title: 'BizExpense',
    description: 'A straightforward expense tracker for small businesses, with reporting and analytics that make day-to-day financial management clearer.',
    image: '/BizExpense.jpg',
    imageAlt: 'BizExpense business expense tracking application',
    tags: ['Expense Tracking', 'Analytics', 'Full Stack'],
    accent: '#5bd5a6',
    links: [{ label: 'View on GitHub', href: 'https://github.com/cedecj042/BizExpense' }],
  },
]
