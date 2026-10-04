import type { Metadata } from "next";
import { ArrowUpRight, Code2, Lock } from "lucide-react";
import { GitHubRepoCount } from "@/components/github-repo-count";
import { githubRepositories, projects } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  const publicProjectCount = projects.filter((project) => !project.private).length;
  const privateProjectCount = projects.filter((project) => project.private).length;

  return (
    <main className="inner-main page-shell">
      <section className="page-intro projects-intro">
        <p className="section-index">Selected work / 2024–2026</p>
        <h1>Products, experiments and systems built to solve something real</h1>
        <p className="lead narrow">{publicProjectCount} detailed public case studies, {privateProjectCount} private in-development project, and a live GitHub profile with <GitHubRepoCount /> public repositories across full-stack web, mobile, Firebase, AI and interface engineering.</p>
      </section>

      <section className="archive-list">
        {projects.map((project, index) => {
          const rowContent = <>
            <div className="archive-index">0{index + 1}</div>
            <div className="archive-title"><p>{project.eyebrow}</p><h2>{project.title}</h2></div>
            <p className="archive-summary">{project.summary}</p>
            <div className="archive-meta">
              <span>{project.year}</span>
              {project.private ? <span className="privacy-inline"><Lock size={12} /> Private</span> : null}
              <div className="tag-row">{project.stack.slice(0, 2).map((item) => <small key={item}>{item}</small>)}</div>
            </div>
            {project.private ? <Lock size={20} /> : <ArrowUpRight size={22} />}
          </>;

          return project.private ? (
            <article className={`archive-row private-archive-row accent-${project.accent}`} key={project.slug} aria-label={`${project.title}, private project in development`}>
              {rowContent}
            </article>
          ) : (
            <a href={`/projects/${project.slug}`} className={`archive-row accent-${project.accent}`} key={project.slug}>
              {rowContent}
            </a>
          );
        })}
      </section>

      <section className="section compact-section repository-section">
        <div className="section-heading repository-heading">
          <p className="section-index">Selected GitHub work / {githubRepositories.length} repositories</p>
          <h2>A focused view of my public build history</h2>
          <p className="repository-description">The live profile count updates automatically. The selected repositories below are recruiter-accessible; private work is intentionally excluded.</p>
        </div>
        <div className="repo-grid">
          {githubRepositories.map((repo, index) => (
            <a className="repo-card" href={`https://github.com/mabdula2004/${repo.repository}`} target="_blank" rel="noreferrer" key={repo.repository}>
              <div className="repo-card-top"><span>{String(index + 1).padStart(2, "0")}</span><Code2 size={18} /></div>
              <p>{repo.category}</p>
              <h3>{repo.name}</h3>
              <span>{repo.description}</span>
              <strong>Open repository <ArrowUpRight size={15} /></strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
