import { useEffect, useRef, useState } from 'react'
import './App.css'

type Project = {
  number: string
  title: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  links: { label: string; href: string }[]
  accent: string
}

const projects: Project[] = [
  {
    number: '01', title: 'TopIT',
    description: 'A personalized TOPCIT reviewer that combines retrieval-augmented generation with computerized adaptive testing to create a smarter, more focused study experience.',
    image: '/TOPIT.jpg', imageAlt: 'TopIT reviewer system shown on a laptop',
    tags: ['Laravel', 'React', 'FastAPI', 'RAG'], accent: '#ff4d25',
    links: [
      { label: 'Frontend', href: 'https://github.com/cedecj042/TopIT-Inertia-React' },
      { label: 'API', href: 'https://github.com/cedecj042/TopIT-API' },
    ],
  },
  {
    number: '02', title: 'SideQuest Pickleball',
    description: 'A lively court discovery and booking experience built to help players spend less time planning and more time playing.',
    image: '/sidequest.png', imageAlt: 'SideQuest Pickleball court booking website',
    tags: ['Web Design', 'Development', 'Booking'], accent: '#ff3151',
    links: [{ label: 'Visit website', href: 'https://sidequestpickleball.com' }],
  },
  {
    number: '03', title: 'Readingful',
    description: 'A playful reading platform for kids, designed to turn practice into an inviting, story-led experience that feels easy to return to.',
    image: '/readingful.png', imageAlt: 'Readingful reading practice website for kids',
    tags: ['Education', 'Product Design', 'Development'], accent: '#79a95b',
    links: [{ label: 'Visit website', href: 'https://readingful.com' }],
  },
  {
    number: '04', title: 'BizExpense',
    description: 'A straightforward expense tracker for small businesses, with reporting and analytics that make day-to-day financial management clearer.',
    image: '/BizExpense.jpg', imageAlt: 'BizExpense business expense tracking application',
    tags: ['Expense Tracking', 'Analytics', 'Full Stack'], accent: '#5bd5a6',
    links: [{ label: 'View on GitHub', href: 'https://github.com/cedecj042/BizExpense' }],
  },
]

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 16 16 4M7 4h9v9" /></svg>
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project" style={{ '--project-accent': project.accent } as React.CSSProperties}>
      <div className="project-copy">
        <span className="project-number">{project.number} / 04</span>
        <div><h3>{project.title}</h3><p>{project.description}</p></div>
        <div className="project-meta">
          <ul aria-label="Project technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <div className="project-links">
            {project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowIcon /></a>)}
          </div>
        </div>
      </div>
      <div className="project-visual">
        <img src={project.image} alt={project.imageAlt} loading={project.number === '01' ? 'eager' : 'lazy'} />
      </div>
    </article>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const projectsRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a className="brand" href="#top" aria-label="Cedric, home">C<span>J</span></a>
        <nav aria-label="Primary navigation"><a href="#story">Story</a><a href="#work">Work</a><a className="resume-nav" href="/Cedric-Oporto-Resume.pdf" download>Résumé ↓</a></nav>
      </header>
      <main id="top">
        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow"><span /> Software developer · Philippines</p>
          <h1 id="intro-title">I build digital products that feel <em>clear, useful,</em> and human.</h1>
          <div className="intro-bottom">
            <p>I’m Cedric, a developer focused on thoughtful web experiences—from intelligent learning tools to platforms people use every day.</p>
            <button type="button" onClick={() => projectsRef.current?.scrollIntoView({ behavior: 'smooth' })}>Explore selected work <span aria-hidden="true">↓</span></button>
          </div>
        </section>
        <section className="story" id="story" aria-labelledby="story-title">
          <div className="story-heading">
            <p className="story-label">My path</p>
            <div>
              <h2 id="story-title">Design was the start.<br /><em>Building became the next step.</em></h2>
              <p className="story-lead">I started by shaping how digital products look and feel. Learning to build them turned that visual foundation into a full-stack practice.</p>
              <a className="resume-download" href="/Cedric-Oporto-Resume.pdf" download>Download my résumé <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <ol className="timeline">
            <li>
              <span className="timeline-year">2019</span>
              <div><h3>Learning through design</h3><p>My career began in UI/UX at GoodApps, translating user needs into wireframes, interfaces, and visual systems.</p></div>
            </li>
            <li>
              <span className="timeline-year">2021</span>
              <div><h3>Designing while studying</h3><p>I began my Computer Science degree while continuing part-time design work—bringing real product experience into the classroom.</p></div>
            </li>
            <li>
              <span className="timeline-year">2025</span>
              <div><h3>Crossing into development</h3><p>An internship and an AI-focused thesis made the shift concrete: from designing interfaces to building complete Laravel and React applications.</p></div>
            </li>
            <li>
              <span className="timeline-year">Now</span>
              <div><h3>Owning the full product</h3><p>Today I work across web and mobile—from APIs and databases to production interfaces, deployment, code review, and client collaboration.</p></div>
            </li>
          </ol>
        </section>
        <section className="work" id="work" ref={projectsRef} aria-labelledby="work-title">
          <div className="section-heading"><p>Selected work</p><h2 id="work-title">Four projects,<br />built with purpose.</h2></div>
          <div className="project-list">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </section>
      </main>
      <footer>
        <p>Have a project in mind?</p>
        <a href="https://github.com/cedecj042" target="_blank" rel="noreferrer">Let’s connect <ArrowIcon /></a>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Cedric</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  )
}

export default App
