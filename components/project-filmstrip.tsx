"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, type CSSProperties } from "react";
import { Film } from "lucide-react";
import { projectScreenshots } from "@/lib/project-screenshots";

export function ProjectFilmstrip({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const root = useRef<HTMLDivElement>(null);
  const project = projectScreenshots[slug];

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    let visible = false;
    const update = () => { element.dataset.animate = String(visible && !document.hidden); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .05 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  if (!project?.screens.length) return null;
  // A short gallery must still be wider than the viewport for a seamless loop.
  const screens = Array.from({ length: Math.max(4, project.screens.length) }, (_, index) => project.screens[index % project.screens.length]);

  return (
    <div className={`project-filmstrip${compact ? " filmstrip-compact" : ""}`} ref={root} data-animate="false" style={{ "--film-duration": `${screens.length * 7}s` } as CSSProperties} role={compact ? undefined : "region"} aria-label={compact ? undefined : `${project.label} screenshots. Focus here to pause the animation.`} aria-hidden={compact || undefined} tabIndex={compact ? undefined : 0}>
      <div className="filmstrip-heading"><Film size={15} aria-hidden="true" /><span>{project.label}</span><span className="filmstrip-heading-note">Application screens</span></div>
      <div className="filmstrip-window">
        <div className="filmstrip-track">
          {[0, 1].map(copy => <div className={`filmstrip-group${copy ? " filmstrip-copy" : ""}`} key={copy} aria-hidden={copy ? true : undefined}>
            {screens.map((screen, index) => <figure className="filmstrip-shot" key={`${copy}-${index}-${screen.src}`} aria-hidden={copy || index >= project.screens.length ? true : undefined}>
              <img src={screen.src} alt={copy || compact || index >= project.screens.length ? "" : `${screen.label} screenshot`} loading="lazy" decoding="async" width={1440} height={900} className={screen.fit === "contain" ? "filmstrip-contain" : undefined} />
              <figcaption>{screen.label}</figcaption>
            </figure>)}
          </div>)}
        </div>
      </div>
    </div>
  );
}
