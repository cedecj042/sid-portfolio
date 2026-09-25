import { ArrowIcon } from './ArrowIcon'

const otherProjects = [
  {
    title: 'School Admin',
    type: 'Dashboard',
    description: 'A school admin dashboard for students, teachers, schedules, and courses.',
    href: 'https://cedecj042.github.io/School/',
  },
  {
    title: 'Techboom',
    type: 'Landing page',
    description: 'A landing page for a digital agency and the services it offers.',
    href: 'https://cedecj042.github.io/techboom/',
  },
  {
    title: 'CSS Zen Garden',
    type: 'CSS exercise',
    description: 'A design exercise that shows how CSS can change the look of one HTML page.',
    href: 'https://cedecj042.github.io/zengarden/',
  },
  {
    title: 'N Queens',
    type: 'Algorithm demo',
    description: 'A small web app that solves the N Queens puzzle.',
    href: 'https://cedecj042.github.io/nqueens/',
  },
  {
    title: 'Calendar',
    type: 'Web utility',
    description: 'A simple monthly calendar with a quick way to return to today.',
    href: 'https://cedecj042.github.io/calendar/',
  },
]

export function OtherProjects() {
  return (
    <section className="other-projects" aria-labelledby="other-projects-title">
      <div className="other-heading">
        <p>Other projects</p>
        <div>
          <h2 id="other-projects-title">Small projects and<br />practice builds.</h2>
          <p>Simple websites and exercises I built while learning and trying new ideas.</p>
        </div>
      </div>
      <div className="other-grid">
        {otherProjects.map((project, index) => (
          <a href={project.href} target="_blank" rel="noreferrer" className="other-card" key={project.href}>
            <div className="other-card-top"><span>0{index + 1}</span><ArrowIcon /></div>
            <div>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
