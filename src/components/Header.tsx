const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <button
          className="brand"
          type="button"
          onClick={() => scrollToId("hero")}
        >
          <span className="brand-mark">zk</span>
          <span className="brand-text">
            <span className="brand-name">Yap Ze Kai</span>
          </span>
        </button>
        <nav className="nav">
          <button
            className="nav-link"
            type="button"
            onClick={() => scrollToId("skills")}
          >
            Skills
          </button>
          <button
            className="nav-link"
            type="button"
            onClick={() => scrollToId("journey")}
          >
            Journey
          </button>
          <button
            className="nav-link"
            type="button"
            onClick={() => scrollToId("contact")}
          >
            Connect
          </button>
        </nav>
      </div>
    </header>
  );
}

