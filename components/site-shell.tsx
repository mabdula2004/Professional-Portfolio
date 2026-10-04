/* eslint-disable @next/next/no-html-link-for-pages */
import { Download, Mail, Menu, Moon, Sun, X } from "lucide-react";

function GitHubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7C5.73.7.65 5.78.65 12.05c0 5.02 3.25 9.28 7.76 10.78.57.1.77-.25.77-.55v-2.18c-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.71.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.66 1.24 3.31.95.1-.74.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.61 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.44.11-3 0 0 .95-.3 3.12 1.16a10.84 10.84 0 0 1 5.68 0c2.17-1.47 3.12-1.16 3.12-1.16.62 1.56.23 2.71.11 3 .73.8 1.17 1.81 1.17 3.05 0 4.36-2.65 5.32-5.18 5.6.41.36.77 1.06.77 2.14v3.18c0 .31.2.66.78.55a11.36 11.36 0 0 0 7.75-10.78C23.35 5.78 18.27.7 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/resume", "Résumé"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-frame">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Muhammad Abdullah home">
          <span className="brand-mark">MA</span>
          <span className="brand-copy">
            <strong>Muhammad Abdullah</strong>
            <small>Full-Stack Developer</small>
          </span>
        </a>

        <nav className="main-nav desktop-nav" aria-label="Primary navigation">
          {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>

        <div className="header-actions">
          <div className="header-socials" aria-label="Professional links">
            <a className="icon-button social-icon" href="https://github.com/mabdula2004" target="_blank" rel="noreferrer" aria-label="GitHub profile" title="GitHub"><GitHubIcon /></a>
            <a className="icon-button social-icon" href="https://www.linkedin.com/in/muhammad-abdullah-17jun" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" title="LinkedIn"><LinkedInIcon /></a>
            <a className="icon-button social-icon" href="mailto:mabdullah17jun@gmail.com" aria-label="Email Muhammad Abdullah" title="Email"><Mail size={17} /></a>
          </div>
          <a className="header-cv-link" href="/Muhammad-Abdullah-CV.pdf" download><Download size={15} /> Download CV</a>
          <label className="icon-button theme-toggle" title="Toggle light and dark theme">
            <input type="checkbox" aria-label="Toggle light and dark theme" />
            <Sun className="theme-sun" size={18} />
            <Moon className="theme-moon" size={18} />
          </label>
          <details className="mobile-nav">
            <summary className="icon-button" aria-label="Toggle navigation"><Menu className="menu-open-icon" size={20} /><X className="menu-close-icon" size={20} /></summary>
            <nav className="main-nav" aria-label="Mobile navigation">
              {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
              <div className="mobile-socials">
                <a href="https://github.com/mabdula2004" target="_blank" rel="noreferrer"><GitHubIcon size={16} /> GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-abdullah-17jun" target="_blank" rel="noreferrer"><LinkedInIcon size={16} /> LinkedIn</a>
                <a href="mailto:mabdullah17jun@gmail.com"><Mail size={16} /> Email</a>
                <a href="/Muhammad-Abdullah-CV.pdf" download><Download size={16} /> CV</a>
              </div>
            </nav>
          </details>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-intro">
            <p className="footer-eyebrow">Full-Stack Developer</p>
            <h2>Let&apos;s build something useful</h2>
            <p>I create responsive React and TypeScript products backed by practical authentication, data and API workflows.</p>
            <a className="footer-contact" href="mailto:mabdullah17jun@gmail.com"><Mail size={17} /> Start a conversation</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
