/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { ArrowUpRight, FileText, LockKeyhole, MapPin } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";
import { projectScreenshots } from "@/lib/project-screenshots";
import { ProjectScreenshotReel } from "@/components/project-screenshot-reel";

function ProjectPreview({ slug }: { slug: string }) {
  if (projectScreenshots[slug]) return <ProjectScreenshotReel slug={slug} />;
  if (slug === "roadwatch") {
    return <div className="roadwatch-preview">
      <div className="roadwatch-phone"><span className="phone-speaker" /><div className="preview-heading"><MapPin size={17} /><strong>RoadWatch</strong></div><div className="phone-report"><FileText size={25} /><strong>Incident report</strong><span>Capture evidence</span><span>Add location</span><span>Submit report</span></div></div>
      <div className="roadwatch-note"><LockKeyhole size={20} /><strong>Mobile development</strong><small>React Native · Expo</small><span>Private project</span></div>
    </div>;
  }
  return null;
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return <div className="project-showcase">
    {projects.map((project, index) => <a
      className={`showcase-card accent-${project.accent}${index === 0 ? " showcase-primary" : ""}`}
      href={`/projects/${project.slug}`}
      key={project.slug}
    >
      <div className={`showcase-preview preview-${project.slug}`} aria-hidden="true"><ProjectPreview slug={project.slug} /></div>
      <div className="showcase-copy">
        <div className="showcase-meta"><span>{project.eyebrow}</span>{project.private ? <span className="showcase-private"><LockKeyhole size={12} /> Private</span> : <span>{project.year}</span>}</div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="showcase-tags" aria-label="Technologies">{project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="showcase-footer"><span>{project.private ? "Project overview" : "Explore project"}</span><span className="showcase-arrow"><ArrowUpRight size={19} /></span></div>
      </div>
    </a>)}
  </div>;
}
