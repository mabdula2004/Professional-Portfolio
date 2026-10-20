"use client";
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectScreenshots } from "@/lib/project-screenshots";

export function ProjectImagePreview({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const project = projectScreenshots[slug];
  const root = useRef<HTMLElement>(null);
  const current = useRef(0);
  const request = useRef(0);
  const mounted = useRef(false);
  const [frame, setFrame] = useState<{ current: number; previous: number | null }>({ current: 0, previous: null });

  const showImage = useCallback(async (index: number) => {
    if (!project?.screens.length) return;
    const next = (index + project.screens.length) % project.screens.length;
    if (next === current.current) return;
    const id = ++request.current;
    const image = new Image();
    image.src = project.screens[next].src;
    try {
      await image.decode();
      if (!mounted.current || id !== request.current) return;
      const previous = current.current;
      current.current = next;
      setFrame({ current: next, previous });
    } catch {
      // Keep the current screenshot visible if the next asset cannot load.
    }
  }, [project]);

  useEffect(() => {
    const element = root.current;
    if (!element || !project) return;
    mounted.current = true;
    let visible = false;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }, { threshold: .15 });
    observer.observe(element);
    const timer = window.setInterval(() => {
      const target = element.closest(".showcase-card") ?? element;
      if (!visible || document.hidden || preference.matches || target.matches(":hover, :focus-within")) return;
      void showImage(current.current + 1);
    }, 3000);
    return () => {
      mounted.current = false;
      request.current++;
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [project, showImage]);

  if (!project?.screens.length) return null;
  const screen = project.screens[frame.current];
  const previous = frame.previous === null ? null : project.screens[frame.previous];

  return (
    <figure className={`project-image-preview${compact ? " project-image-preview-compact" : ""}`} ref={root} aria-hidden={compact || undefined} aria-label={compact ? undefined : `${project.label} screenshots`} tabIndex={compact ? undefined : 0}>
      <div className="project-image-stage">
        {previous ? <img className="project-image-previous" src={previous.src} alt="" aria-hidden="true" width={1440} height={900} /> : null}
        <img key={screen.src} className={`project-image-current${previous ? " is-changing" : ""}`} src={screen.src} alt={compact ? "" : `${screen.label} screenshot`} loading="lazy" decoding="async" width={1440} height={900} />
      </div>
      <figcaption className="project-image-caption">
        <span>{screen.label}</span>
        {!compact && project.screens.length > 1 ? <div className="project-image-controls">
          <button type="button" onClick={() => { void showImage(current.current - 1); }} aria-label={`Previous ${project.label} screenshot`}><ChevronLeft size={16} aria-hidden="true" /></button>
          <button type="button" onClick={() => { void showImage(current.current + 1); }} aria-label={`Next ${project.label} screenshot`}><ChevronRight size={16} aria-hidden="true" /></button>
        </div> : null}
      </figcaption>
    </figure>
  );
}
