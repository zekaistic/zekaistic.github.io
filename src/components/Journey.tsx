import { journey } from "../data/journey";

export function Journey() {
  return (
    <div>
      <div className="section-title-row">
        <div>
          <p className="section-title">My Journey</p>
          <h2 className="section-label">A quick look at my path thus far</h2>
        </div>
        <a
          className="contact-icon-link journey-resume-link"
          href="/resume.pdf"
          download
        >
          <span className="contact-icon-label">Resume</span>
        </a>
      </div>

      <div className="timeline">
        {journey.map((item) => (
          <article key={item.year + item.title} className="timeline-row">
            <div className="timeline-year">
              <span className="timeline-year-pill">{item.year}</span>
            </div>
            <div className="timeline-content card">
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-organization">{item.organization}</p>
              <p className="timeline-description">{item.description}</p>
              {item.projects && (
                <ul className="timeline-projects">
                  {item.projects.map((project) => (
                    <li key={project}>{project}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

