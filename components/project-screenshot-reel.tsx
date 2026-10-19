"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { projectScreenshots } from "@/lib/project-screenshots";

export function ProjectScreenshotReel({ slug }: { slug: string }) {
  const project = projectScreenshots[slug];
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || !project || project.screens.length < 2) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .15 });
    observer.observe(element);
    const timer = window.setInterval(() => {
      const card = element.closest(".showcase-card, a");
      if (!visible || reducedMotion.matches || document.hidden || card?.matches(":hover, :focus-within")) return;
      setActive((previous) => (previous + 1) % project.screens.length);
    }, 4500);
    return () => { window.clearInterval(timer); observer.disconnect(); };
  }, [project]);

  if (!project) return null;
  const screen = project.screens[active];
  return <div className="showcase-browser showcase-site-browser" ref={root}>
    <div className="showcase-browser-bar"><span /><span /><span /><small>{project.label}</small></div>
    <div className="showcase-capture"><img key={screen.src} src={screen.src} alt="" loading="lazy" decoding="async" className={screen.fit === "contain" ? "capture-contain" : ""} /></div>
    <div className="showcase-screen-label">{screen.label}</div>
  </div>;
}
