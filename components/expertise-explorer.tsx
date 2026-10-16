"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Atom, Braces, ChevronRight, Code2, Database, FileCode2, Flame, GitBranch, FolderGit2, KeyRound, Layers3, Network, NotebookPen, Palette, Smartphone, Sparkles, Terminal, Wrench, Zap } from "lucide-react";
import { coreSkills } from "@/lib/portfolio-data";

const domains = [
  { icon: Layers3, label: "Web & Mobile", description: "Responsive interfaces and cross-platform applications with reusable components and structured application logic." },
  { icon: Database, label: "Backend & Data", description: "Authentication, relational data and API integration for connected application workflows." },
  { icon: Sparkles, label: "Programming & AI", description: "Programming fundamentals and model integration applied to application features and information processing." },
  { icon: Wrench, label: "Development Tools", description: "Version control, development environments and tools used across web, mobile and AI project work." },
];

const skillIcons = {
  React: Atom,
  "React Native": Smartphone,
  JavaScript: Braces,
  TypeScript: FileCode2,
  HTML: Code2,
  CSS: Palette,
  Firebase: Flame,
  Supabase: Zap,
  PostgreSQL: Database,
  MySQL: Database,
  Authentication: KeyRound,
  "REST APIs": Network,
  Python: Terminal,
  "AI Integration": Sparkles,
  Git: GitBranch,
  GitHub: FolderGit2,
  "VS Code": Code2,
  "Android Studio": Smartphone,
  "Google Colab": NotebookPen,
};

export function ExpertiseExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const domain = domains[active];
  const skill = coreSkills[active];
  const DomainIcon = domain.icon;

  function navigateTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % domains.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + domains.length) % domains.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = domains.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="expertise-workspace" data-domain={active}>
      <div className="expertise-navigation">
        <p className="expertise-nav-label">Areas of expertise</p>
        <div className="expertise-tabs" role="tablist" aria-label="Technical skill categories" aria-orientation="vertical">
          {domains.map(({ icon: Icon, label }, index) => (
            <button
              key={label}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`expertise-tab-${index}`}
              aria-controls={`expertise-panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => navigateTab(event, index)}
            >
              <span className="expertise-tab-icon"><Icon size={20} aria-hidden="true" /></span>
              <span>{label}</span>
              <ChevronRight size={16} className="expertise-tab-arrow" aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="expertise-navigation-note"><span aria-hidden="true" /> Academic &amp; personal project experience</div>
      </div>

      {domains.map((_, index) => (
        <div key={index} id={`expertise-panel-${index}`} role="tabpanel" aria-labelledby={`expertise-tab-${index}`} hidden={active !== index} tabIndex={0} className="expertise-panel">
          {active === index ? (
            <div className="expertise-panel-content">
              <div className="expertise-panel-art" aria-hidden="true"><span /><span /><DomainIcon size={106} strokeWidth={.8} /></div>
              <div className="expertise-panel-copy"><p className="expertise-panel-label">Technical skillset</p><h3>{skill.group}</h3><p>{domain.description}</p></div>
              <ul className="expertise-skill-grid" aria-label={`${skill.group} skills`}>
                {skill.items.map((item) => {
                  const Icon = skillIcons[item as keyof typeof skillIcons] ?? Code2;
                  return <li className="expertise-skill" key={item}><span><Icon size={22} strokeWidth={1.6} aria-hidden="true" /></span><strong>{item}</strong></li>;
                })}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
