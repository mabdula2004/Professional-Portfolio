import type { Metadata } from "next";
import { ArrowUpRight, Code2 } from "lucide-react";
import { githubRepositories } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="inner-main page-shell projects-page">
      <section className="page-intro projects-intro">
        <p className="section-index">Project Portfolio</p>
        <h1>Development Projects</h1>
        <p className="lead narrow">Academic and personal projects in web development, mobile applications, databases and AI integration. Each entry links to its source repository on GitHub.</p>
      </section>

      <section className="section compact-section repository-section">
        <div className="section-heading repository-heading">
          <p className="section-index">GitHub projects</p>
          <h2>Public repositories</h2>
          <p className="repository-description">Selected public repositories with project descriptions and source code. Private projects, including RoadWatch, are excluded from this collection.</p>
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
        <a className="github-archive-link" href="https://github.com/mabdula2004?tab=repositories" target="_blank" rel="noreferrer"><Code2 size={17} /> View GitHub Profile <ArrowUpRight size={15} /></a>
      </section>
    </main>
  );
}
