"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Code2, Layers3, LayoutGrid } from "lucide-react";
import type { GitHubRepository } from "@/lib/portfolio-data";
import { repositoryFrame, repositoryProgress, splitRepositories, type RepositoryWithActivity } from "@/lib/repository-order";

function RepositoryCard({ repo }: { repo: GitHubRepository & { pushedAt?: string } }) {
  return (
    <a className="repo-card repo-stack-card" href={`https://github.com/mabdula2004/${repo.repository}`} target="_blank" rel="noreferrer">
      <div className="repo-card-top"><Code2 size={20} aria-hidden="true" />{repo.pushedAt ? <time dateTime={repo.pushedAt}>Updated {new Date(repo.pushedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time> : <span>GitHub repository</span>}</div>
      <p>{repo.category}</p>
      <h3>{repo.name}</h3>
      <span>{repo.description}</span>
      <strong>Open repository <ArrowUpRight size={16} aria-hidden="true" /></strong>
    </a>
  );
}

export function RepositoryScrollStack({ repositories }: { repositories: RepositoryWithActivity[] }) {
  const root = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const progressBar = useRef<HTMLDivElement>(null);
  const position = useRef(0);
  const stepDistance = useRef(600);
  const activeRef = useRef(0);
  const [layout, setLayout] = useState({ columns: 3, motion: false });
  const [showAll, setShowAll] = useState(false);
  const [fitsViewport, setFitsViewport] = useState(true);
  const [active, setActive] = useState(0);
  const groups = splitRepositories(repositories, layout.columns);
  const pinned = layout.motion && fitsViewport && !showAll && groups.length > 1;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setFitsViewport(true);
      setLayout({ columns: window.innerWidth < 640 ? 1 : window.innerWidth < 1000 ? 2 : 3, motion: !motion.matches && window.innerHeight >= 660 });
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    motion.addEventListener("change", update);
    return () => { window.removeEventListener("resize", update); motion.removeEventListener("change", update); };
  }, []);

  useEffect(() => {
    if (!pinned || !root.current || !stage.current) return;
    const element = root.current;
    const sticky = stage.current;
    let frame = 0;
    const paint = () => {
      frame = 0;
      const top = Number.parseFloat(window.getComputedStyle(sticky).top) || 96;
      const value = repositoryProgress(element.getBoundingClientRect().top, top, stepDistance.current, groups.length);
      position.current = value;
      const current = Math.round(value);
      panels.current.forEach((panel, index) => {
        if (!panel) return;
        const state = repositoryFrame(value, index);
        panel.style.transform = state.transform;
        panel.style.opacity = String(state.opacity);
        panel.style.visibility = state.visible ? "visible" : "hidden";
        panel.style.willChange = state.visible ? "transform, opacity" : "auto";
        panel.style.zIndex = String(state.zIndex);
      });
      if (progressBar.current) progressBar.current.style.transform = `scaleX(${groups.length === 1 ? 1 : value / (groups.length - 1)})`;
      if (activeRef.current !== current) { activeRef.current = current; setActive(current); }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(paint); };
    const measure = () => {
      const top = Number.parseFloat(window.getComputedStyle(sticky).top) || 96;
      if (sticky.offsetHeight + top > window.innerHeight - 12) { setFitsViewport(false); return; }
      stepDistance.current = Math.max(420, window.innerHeight * .72);
      element.style.setProperty("--stack-travel", `${(groups.length - 1) * stepDistance.current}px`);
      element.style.setProperty("--stack-stage-height", `${sticky.offsetHeight}px`);
      schedule();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(sticky);
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
    };
  }, [pinned, groups.length]);

  const move = (index: number) => {
    const element = root.current;
    const sticky = stage.current;
    if (!element || !sticky) return;
    const top = Number.parseFloat(window.getComputedStyle(sticky).top) || 96;
    const target = Math.max(0, Math.min(groups.length - 1, index));
    window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - top + target * stepDistance.current, behavior: "smooth" });
  };

  const toggleView = () => {
    const element = root.current;
    if (element) window.scrollTo({ top: window.scrollY + element.getBoundingClientRect().top - 96, behavior: "instant" });
    setShowAll(value => !value);
  };

  return (
    <section ref={root} className="repository-section repository-scroll" data-mode={pinned ? "stack" : "grid"} style={{ "--stack-columns": layout.columns } as CSSProperties} aria-labelledby="repository-title">
      <div className="repository-stage" ref={stage}>
        <div className="repository-stage-heading">
          <div className="section-heading repository-heading">
            <p className="section-index">GitHub projects</p>
            <h2 id="repository-title">Public repositories</h2>
            <p className="repository-description">Most recently updated projects first.</p>
          </div>
          {layout.motion && fitsViewport ? <button className="repository-view-toggle" onClick={toggleView} aria-pressed={showAll}>{showAll ? <Layers3 size={16} /> : <LayoutGrid size={16} />}{showAll ? "Stack view" : "View all"}</button> : null}
        </div>
        {pinned ? (
          <>
            <div className="repository-deck" onKeyDown={event => {
              if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(Math.round(position.current) + (event.key === "ArrowRight" ? 1 : -1)); }
            }}>
              {groups.map((group, index) => (
                <div className="repository-deck-group" key={group[0].repository} ref={element => { panels.current[index] = element; }} inert={index !== active} aria-hidden={index !== active}>
                  {group.map(repo => <RepositoryCard repo={repo} key={repo.repository} />)}
                </div>
              ))}
            </div>
            <div className="repository-stage-footer">
              <p className="repository-scroll-hint"><ArrowDown size={15} aria-hidden="true" /> Scroll to explore</p>
              <div className="repository-step-controls">
                <button aria-label="Previous projects" disabled={active === 0} onClick={() => move(active - 1)}><ArrowLeft size={18} /></button>
                <span aria-live="polite" aria-atomic="true">{active * layout.columns + 1}–{Math.min((active + 1) * layout.columns, repositories.length)} <span>of {repositories.length}</span></span>
                <button aria-label="Next projects" disabled={active === groups.length - 1} onClick={() => move(active + 1)}><ArrowRight size={18} /></button>
              </div>
            </div>
            <div className="repository-scroll-progress" aria-hidden="true"><div ref={progressBar} /></div>
          </>
        ) : <div className="repo-grid">{repositories.map(repo => <RepositoryCard repo={repo} key={repo.repository} />)}</div>}
      </div>
    </section>
  );
}
