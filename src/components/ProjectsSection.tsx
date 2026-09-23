import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <p>Selected work</p>
        <h2 id="work-title">Projects I have<br />worked on.</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}
