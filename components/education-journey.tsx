"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Code2, FlaskConical, GraduationCap, Microscope } from "lucide-react";
import { education } from "@/lib/education";
import { journeyDuration, journeyFrame, journeyPaths, journeyStops } from "@/lib/education-journey";

const stages = [
  { ...education[2], label: "Matric", icon: FlaskConical },
  {
    ...education[1], label: "FSc", icon: Microscope,
    description: "Pre-medical studies developed my scientific reasoning, careful observation and analytical problem solving. Combined with Computer Science, this foundation helps me understand healthcare workflows and translate domain requirements into practical applications, including appointment and patient information systems.",
  },
  { ...education[0], label: "BSCS", icon: GraduationCap },
  {
    label: "Development", icon: Code2, degree: "Web and Mobile Development", school: "Current Focus", dates: "Present", note: "",
    description: "My technical focus includes React, React Native and JavaScript, supported by TypeScript, authentication, database integration, REST APIs and AI applications.",
  },
];

export function EducationJourney() {
  const root = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const traveller = useRef<HTMLSpanElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const distance = useRef(1800);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(false);
  const [fits, setFits] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const pinned = motion && fits && !showAll;
  const TravellerIcon = stages[active].icon;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setMotion(!preference.matches && window.innerHeight >= 700); setFits(true); };
    update();
    preference.addEventListener("change", update);
    window.addEventListener("resize", update, { passive: true });
    return () => { preference.removeEventListener("change", update); window.removeEventListener("resize", update); };
  }, []);

  useEffect(() => {
    if (!pinned || !root.current || !sticky.current) return;
    const section = root.current;
    const panel = sticky.current;
    let frame = 0;
    let top = 96;
    const paint = () => {
      frame = 0;
      const progress = (top - section.getBoundingClientRect().top) / distance.current;
      const state = journeyFrame(progress);
      if (traveller.current) {
        traveller.current.style.left = `${state.point.x / 10}%`;
        traveller.current.style.top = `${state.point.y / 2.4}%`;
      }
      paths.current.forEach((path, index) => {
        if (path) path.style.strokeDashoffset = String(index < state.active ? 0 : index === state.active ? 1 - state.travel : 1);
      });
      if (activeRef.current !== state.active) { activeRef.current = state.active; setActive(state.active); }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(paint); };
    const measure = () => {
      top = Number.parseFloat(window.getComputedStyle(panel).top) || 96;
      if (panel.offsetHeight + top > window.innerHeight - 16) { setFits(false); return; }
      distance.current = Math.max(1500, window.innerHeight * 2.4);
      section.style.setProperty("--education-travel", `${distance.current}px`);
      section.style.setProperty("--education-stage-height", `${panel.offsetHeight}px`);
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const selectStage = (index: number) => {
    if (!pinned || !root.current || !sticky.current) return;
    const top = Number.parseFloat(window.getComputedStyle(sticky.current).top) || 96;
    window.scrollTo({ top: window.scrollY + root.current.getBoundingClientRect().top - top + index / journeyDuration * distance.current, behavior: "instant" });
  };

  const toggleView = () => {
    if (root.current) window.scrollTo({ top: window.scrollY + root.current.getBoundingClientRect().top - 96, behavior: "instant" });
    setShowAll(value => !value);
  };

  return (
    <section className="section about-journey-section education-journey" ref={root} data-mode={pinned ? "scroll" : "all"} aria-labelledby="education-heading">
      <div className="education-stage" ref={sticky}>
        <div className="education-heading-row">
          <div className="section-heading about-section-heading">
            <p className="section-index">Background</p>
            <h2 id="education-heading">Education &amp; Development</h2>
          </div>
          {motion && fits ? <button className="education-view-toggle" onClick={toggleView} aria-pressed={showAll}>{showAll ? "Animated journey" : "View full timeline"}</button> : null}
        </div>

        <div className="education-route" aria-label="Education path">
          <svg className="education-curve" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
            {journeyPaths.map((path, index) => <g key={path}>
              <path className="education-track" d={path} />
              <path className="education-track-fill" d={path} pathLength={1} strokeDasharray={1} strokeDashoffset={1} ref={element => { paths.current[index] = element; }} />
            </g>)}
          </svg>
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return <button key={stage.label} type="button" className="education-stop" style={{ left: `${journeyStops[index].x / 10}%`, top: `${journeyStops[index].y / 2.4}%` }} data-reached={!pinned || index <= active} aria-label={`${stage.degree}, ${stage.dates}`} aria-current={pinned && index === active ? "step" : undefined} aria-controls={`education-detail-${index}`} onClick={() => selectStage(index)} disabled={!pinned}>
              <span className="education-stop-icon"><Icon size={22} aria-hidden="true" /></span>
              <span className="education-stop-label">{stage.label}</span>
            </button>;
          })}
          {pinned ? <span className="education-traveller" ref={traveller} aria-hidden="true"><TravellerIcon size={23} /></span> : null}
        </div>

        <div className="education-details" aria-live={pinned ? "polite" : "off"} aria-atomic="true">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return <article className="education-detail" id={`education-detail-${index}`} key={stage.label} data-active={!pinned || index === active} inert={pinned && index !== active} aria-hidden={pinned && index !== active} aria-labelledby={`education-title-${index}`}>
              <div className="education-detail-top"><span className="education-detail-icon"><Icon size={22} aria-hidden="true" /></span><span className="journey-period">{stage.dates}</span></div>
              <h3 id={`education-title-${index}`}>{stage.degree}</h3>
              <p className="education-school">{stage.school}</p>
              {stage.note ? <p className="education-note">{stage.note}</p> : null}
              {"description" in stage ? <p className="education-focus">{stage.description}</p> : null}
            </article>;
          })}
        </div>
        {pinned ? <p className="education-scroll-hint"><ArrowDown size={15} aria-hidden="true" />{active === 3 ? "Continue scrolling" : "Scroll to follow my journey"}</p> : null}
      </div>
    </section>
  );
}
