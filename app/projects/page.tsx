import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <main className="inner-main page-shell">
      <section className="page-intro projects-intro">
        <p className="section-index">Selected work / 2024–2026</p>
        <h1>Products, experiments and systems built to solve something real.</h1>
        <p className="lead narrow">A curated collection across full-stack web development, mobile applications, AI and interface engineering.</p>
      </section>

      <section className="archive-list">
        {projects.map((project, index) => (
          <Link href={`/projects/${project.slug}`} className={`archive-row accent-${project.accent}`} key={project.slug}>
            <div className="archive-index">0{index + 1}</div>
            <div className="archive-title"><p>{project.eyebrow}</p><h2>{project.title}</h2></div>
            <p className="archive-summary">{project.summary}</p>
            <div className="archive-meta"><span>{project.year}</span><div className="tag-row">{project.stack.slice(0, 2).map((item) => <small key={item}>{item}</small>)}</div></div>
            <ArrowUpRight size={22} />
          </Link>
        ))}
      </section>
    </main>
  );
}
