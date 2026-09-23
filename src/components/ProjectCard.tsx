import type { CSSProperties } from 'react'
import type { Project } from '../types/project'
import { ArrowIcon } from './ArrowIcon'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project" style={{ '--project-accent': project.accent } as CSSProperties}>
      <div className="project-copy">
        <span className="project-number">{project.number} / 04</span>
        <div><h3>{project.title}</h3><p>{project.description}</p></div>
        <div className="project-meta">
          <ul aria-label="Project technologies">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ArrowIcon /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="project-visual">
        <img src={project.image} alt={project.imageAlt} loading={project.number === '01' ? 'eager' : 'lazy'} />
      </div>
    </article>
  )
}
