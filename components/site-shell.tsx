"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const next = saved === "light" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
  }

  return (
    <div className="site-frame">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Muhammad Abdullah home">
          <span className="brand-mark">MA</span>
          <span className="brand-copy">
            <strong>Muhammad Abdullah</strong>
            <small>Full-Stack Developer</small>
          </span>
        </Link>

        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          {nav.map(([href, label]) => {
            const active = href === "/" ? pathname === href : pathname.startsWith(href);
            return (
              <Link key={href} className={active ? "active" : ""} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
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
          <Link href="/contact">Contact</Link>
        </div>
        <p className="footer-note">© 2026 Muhammad Abdullah</p>
      </footer>
    </div>
  );
}
