import { Menu, Moon, Sun, X } from "lucide-react";

const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/resume", "Résumé"],
  ["/contact", "Contact"],
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
          <label className="icon-button theme-toggle" title="Toggle light and dark theme">
            <input type="checkbox" aria-label="Toggle light and dark theme" />
            <Sun className="theme-sun" size={18} />
            <Moon className="theme-moon" size={18} />
          </label>
          <details className="mobile-nav">
            <summary className="icon-button" aria-label="Toggle navigation"><Menu className="menu-open-icon" size={20} /><X className="menu-close-icon" size={20} /></summary>
            <nav className="main-nav" aria-label="Mobile navigation">
              {nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
            </nav>
          </details>
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div>
          <span className="brand-mark small">MA</span>
          <p>Building thoughtful products across interfaces, data and AI.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/mabdula2004" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-17jun" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/contact">Contact</a>
        </div>
        <p className="footer-note">© 2026 Muhammad Abdullah</p>
      </footer>
    </div>
  );
}
