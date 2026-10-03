import type { Metadata } from "next";
import { ArrowUpRight, Code2 } from "lucide-react";
import { githubRepositories, projects } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="inner-main page-shell">
      <section className="page-intro projects-intro">
        <p className="section-index">Selected work / 2024–2026</p>
        <h1>Products, experiments and systems built to solve something real.</h1>
        <p className="lead narrow">Six detailed case studies plus a complete archive of 27 public repositories across web, mobile, Firebase, AI and interface engineering.</p>
      </section>

      <section className="archive-list">
        {projects.map((project, index) => (
          <a href={`/projects/${project.slug}`} className={`archive-row accent-${project.accent}`} key={project.slug}>
            <div className="archive-index">0{index + 1}</div>
            <div className="archive-title"><p>{project.eyebrow}</p><h2>{project.title}</h2></div>
            <p className="archive-summary">{project.summary}</p>
            <div className="archive-meta"><span>{project.year}</span><div className="tag-row">{project.stack.slice(0, 2).map((item) => <small key={item}>{item}</small>)}</div></div>
            <ArrowUpRight size={22} />
          </a>
        ))}
      </section>

      <section className="section compact-section repository-section">
        <div className="section-heading split-heading">
          <div><p className="section-index">GitHub archive / 27 public repositories</p><h2>The complete public build history.</h2></div>
          <p>Every public repository is linked directly. Six private repositories are excluded because recruiters cannot access them.</p>
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
