const stackGroups = [
  { label: 'Frontend', tools: ['React', 'TypeScript', 'Inertia.js', 'HTML', 'CSS'] },
  { label: 'Backend', tools: ['PHP', 'Laravel', 'Python', 'FastAPI', '.NET'] },
  { label: 'Mobile and data', tools: ['React Native', 'MySQL', 'REST APIs', 'ChromaDB'] },
  { label: 'Tools', tools: ['Docker', 'Git', 'GitHub', 'Figma', 'Cloudflare'] },
]

export function TechStack() {
  return (
    <section className="tech-stack" aria-labelledby="stack-title">
      <div className="stack-heading">
        <p>Tech stack</p>
        <div>
          <h2 id="stack-title">Tools I use to<br />build products.</h2>
          <p>I work across the interface, backend, mobile apps, databases, and deployment.</p>
        </div>
      </div>
      <div className="stack-grid">
        {stackGroups.map((group, index) => (
          <article className="stack-group" key={group.label}>
            <span>0{index + 1}</span>
            <h3>{group.label}</h3>
            <ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
