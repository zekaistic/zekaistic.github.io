import { skills } from "../data/skills";

export function Skills() {
  return (
    <div>
      <div className="skills-container">
        <div className="skills-header" justify-content="center"> <h2 className="skills-heading">Here's a quick look at the tech/frameworks I have experience with and relevant coursework!</h2> </div>
      </div>
      <div className="skills-grid">
        <article className="card skills-card">
          <h3 className="skills-heading">Technical Skills</h3>
          <ul className="skills-list">
            {skills.technical.map((item) => (
              <li key={item} className="skills-item">
                <span className="skills-check" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="card skills-card">
          <h3 className="skills-heading">Relevant Coursework</h3>
          <ul className="skills-list">
            {skills.coursework.map((item) => (
              <li key={item} className="skills-item">
                <span className="skills-check" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

