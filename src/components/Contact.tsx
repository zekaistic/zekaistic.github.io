import { useState } from "react";

const EMAIL = "yapzekai11@gmail.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="contact card">
      <div className="section-title-row">
        <div>
          <h2 className="section-title">Let&apos;s Connect!</h2>
          <p className="section-subtitle">
            Reach out if you want to collaborate, need help with an idea, or
            just want to say hi.
          </p>
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-email-block">
          <p className="contact-label">Email</p>
          <div className="contact-email-row">
            <code className="contact-email">{EMAIL}</code>
            <button
              className="button-ghost contact-copy-button"
              type="button"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div className="contact-links">
          <p className="contact-label">Elsewhere</p>
          <div className="contact-links-row">
            <a
              className="contact-icon-link"
              href="https://github.com/zekaistic"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon contact-icon-github" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.55 1.07 1.55 1.07.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.43.21 2.49.11 2.75.64.71 1.02 1.62 1.02 2.74 0 3.95-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </span>
              <span className="contact-icon-label">GitHub</span>
            </a>
            <a
              className="contact-icon-link"
              href="https://www.linkedin.com/in/yapzekai/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact-icon contact-icon-linkedin" aria-hidden>
                <svg viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.25h4.4V23H.3V8.25zM8.34 8.25h4.22v2.01h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V23h-4.4v-7.4c0-1.77-.03-4.04-2.46-4.04-2.46 0-2.84 1.92-2.84 3.91V23H8.34V8.25z" />
                </svg>
              </span>
              <span className="contact-icon-label">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

