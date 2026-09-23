const milestones = [
  { year: '2019', role: 'UI and UX Designer', place: 'GoodApps Inc.', description: 'I started my career by creating wireframes, app screens, and visual designs based on user and business needs.' },
  { year: '2021', role: 'Computer Science Student', place: 'University of San Jose Recoletos', description: 'I studied Computer Science with a major in AI and Web Development. I also continued working part time as a UI and UX designer.' },
  { year: '2025', role: 'Full Stack Developer', place: 'Internship and thesis work', description: 'I moved into development through my internship and TopIT thesis. I started building complete apps with Laravel, React, Python, and AI tools.' },
  { year: 'Now', role: 'Full Stack and Mobile Developer', place: 'Production client work', description: 'I build and maintain web and mobile apps. I work on interfaces, APIs, databases, deployments, code reviews, and client updates.' },
]

export function CareerStory() {
  return (
    <section className="story" id="story" aria-labelledby="story-title">
      <div className="story-heading">
        <p className="story-label">My path</p>
        <div>
          <h2 id="story-title">From design to<br /><em>full stack development.</em></h2>
          <p className="story-lead">I started as a UI and UX designer. While studying Computer Science, I learned how to build the products I was designing. Today, I work across the full product.</p>
          <a className="resume-download" href="/Cedric-Oporto-Resume.pdf" download>Download my résumé <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <ol className="timeline">
        {milestones.map((milestone) => (
          <li key={milestone.year}>
            <span className="timeline-year">{milestone.year}</span>
            <span className="timeline-track" aria-hidden="true"><span /></span>
            <div className="timeline-content">
              <p className="timeline-place">{milestone.place}</p>
              <h3>{milestone.role}</h3>
              <p>{milestone.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
