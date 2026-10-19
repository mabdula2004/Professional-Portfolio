/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";
import { projectScreenshots } from "@/lib/project-screenshots";
import { ProjectScreenshotReel } from "@/components/project-screenshot-reel";

function ProjectPreview({ slug }: { slug: string }) {
  if (projectScreenshots[slug]) return <ProjectScreenshotReel slug={slug} />;
  return null;
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return <div className="project-showcase">
    {projects.map((project, index) => <article
      className={`showcase-card accent-${project.accent}${index === 0 ? " showcase-primary" : ""}`}
      key={project.slug}
    >
      <div className={`showcase-preview preview-${project.slug}`} aria-hidden="true"><ProjectPreview slug={project.slug} /></div>
      <div className="showcase-copy">
        <div className="showcase-meta"><span>{project.eyebrow}</span>{project.private ? <span className="showcase-private"><LockKeyhole size={12} /> Private</span> : <span>{project.year}</span>}</div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="showcase-tags" aria-label="Technologies">{project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="showcase-footer">
          <a className="showcase-details-link" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}>
            <span>{project.private ? "Project overview" : "Explore project"}</span><span className="showcase-arrow"><ArrowUpRight size={19} /></span>
          </a>
          <div className="showcase-live-links">
            {project.live && <a className="showcase-live-link" href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} ${project.dashboard ? "app" : "live demo"} (opens in a new tab)`}>{project.dashboard ? "APP" : "Live demo"} <ArrowUpRight size={15} aria-hidden="true" /></a>}
            {project.dashboard && <a className="showcase-live-link" href={project.dashboard} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} dashboard (opens in a new tab)`}>Dashboard <ArrowUpRight size={15} aria-hidden="true" /></a>}
          </div>
        </div>
      </div>
    </article>)}
  </div>;
}
