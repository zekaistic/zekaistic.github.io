import avatar from "./images/IMG_4531.JPG";

export function Hero() {
  return (
    <div className="grid-two hero-grid">
      <div className="hero-copy card hero-card">
        <div className="hero-pill-row">
          <span className="pill">
            <span className="pill-dot" />
            Looking for internships!
          </span>
        </div>
        <h1 className="hero-title">
          Hello, I&apos;m <span className="hero-highlight">Ze Kai!</span>
        </h1>
        <p className="hero-tagline">
          I'm a 22-year-old undergraduate at the National University of Singapore,
          pursuing a Bachelor of Computing in Computer Science.
        </p>
        <div className="hero-actions">
          <button
            className="button-primary"
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            Let&apos;s connect
            <span aria-hidden>→</span>
          </button>
          <button
            className="button-ghost"
            type="button"
            onClick={() =>
              document
                .getElementById("journey")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
          >
            View my journey
          </button>
        </div>
      </div>

      <aside className="hero-profile">
        <div className="hero-avatar card">
          <div
            className="hero-avatar-circle"
            style={{ backgroundImage: `url(${avatar})` }}
          />
          <div className="hero-avatar-ring" />
        </div>
        <div className="hero-meta card">
          <p className="hero-meta-title">What I enjoy</p>
          <p className="hero-meta-text">
            Designing and shipping products that have real-world impact. Photography. Travelling.
          </p>
        </div>
      </aside>
    </div>
  );
}

