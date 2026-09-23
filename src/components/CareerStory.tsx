const milestones = [
  { year: '2019', title: 'Learning through design', description: 'My career began in UI/UX at GoodApps, translating user needs into wireframes, interfaces, and visual systems.' },
  { year: '2021', title: 'Designing while studying', description: 'I began my Computer Science degree while continuing part-time design work—bringing real product experience into the classroom.' },
  { year: '2025', title: 'Crossing into development', description: 'An internship and an AI-focused thesis made the shift concrete: from designing interfaces to building complete Laravel and React applications.' },
  { year: 'Now', title: 'Owning the full product', description: 'Today I work across web and mobile—from APIs and databases to production interfaces, deployment, code review, and client collaboration.' },
]

export function CareerStory() {
  return (
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
        {milestones.map((milestone) => (
          <li key={milestone.year}>
            <span className="timeline-year">{milestone.year}</span>
            <div><h3>{milestone.title}</h3><p>{milestone.description}</p></div>
          </li>
        ))}
      </ol>
    </section>
  )
}
