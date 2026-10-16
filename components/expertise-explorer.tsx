"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Atom, Braces, ChevronRight, Code2, Database, Layers3, Smartphone, Sparkles, Wrench } from "lucide-react";
import { coreSkills } from "@/lib/portfolio-data";

const domains = [
  { icon: Layers3, label: "Web & Mobile", description: "Responsive interfaces and cross-platform applications with reusable components and structured application logic.", symbols: [Atom, Smartphone] },
  { icon: Database, label: "Backend & Data", description: "Authentication, relational data and API integration for connected application workflows.", symbols: [Database, Database] },
  { icon: Sparkles, label: "Programming & AI", description: "Programming fundamentals and model integration applied to application features and information processing.", symbols: [Sparkles, Braces] },
  { icon: Wrench, label: "Development Tools", description: "Version control, development environments and tools used across web, mobile and AI project work.", symbols: [Code2, Code2] },
];

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
              <div className="expertise-featured-skills">
                {skill.items.slice(0, 2).map((item, itemIndex) => {
                  const Icon = domain.symbols[itemIndex];
                  return <div className="expertise-featured-skill" key={item}><span><Icon size={25} strokeWidth={1.6} aria-hidden="true" /></span><strong>{item}</strong></div>;
                })}
              </div>
              <ul className="expertise-supporting-skills" aria-label={`${skill.group} technologies`}>
                {skill.items.slice(2).map((item) => <li key={item}><span aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
