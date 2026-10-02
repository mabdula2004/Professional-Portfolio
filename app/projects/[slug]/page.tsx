import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="inner-main page-shell">
      <Link className="back-link" href="/projects"><ArrowLeft size={16} /> All projects</Link>
      <section className={`case-hero accent-${project.accent}`}>
        <div className="case-copy">
          <p className="section-index">{project.eyebrow} / {project.year}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <div className="case-actions">
            {project.github ? <a className="button primary" href={project.github} target="_blank" rel="noreferrer"><Code2 size={17} /> View repository</a> : <span className="status-pill">{project.status}</span>}
          </div>
        </div>
        <div className="case-art"><span>{project.title.split(" ").map((word) => word[0]).slice(0, 3).join("")}</span><small>{project.status}</small></div>
      </section>

      <section className="case-body">
        <aside><p>Role</p><strong>Design & development</strong><p>Year</p><strong>{project.year}</strong><p>Stack</p><div className="stack-column">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></aside>
        <div className="case-content">
          <p className="section-index">Overview</p>
          <h2>Turning the concept into a usable workflow.</h2>
          <p>{project.description}</p>
          <div className="highlight-panel">
            <h3>Key outcomes</h3>
            {project.highlights.map((item) => <div key={item}><CheckCircle2 size={19} /><span>{item}</span></div>)}
          </div>
          <p className="case-note">This case study will continue to evolve as new screenshots, deployment links and implementation details are published.</p>
        </div>
      </section>

      <section className="inline-cta">
        <div><p className="section-index">Continue</p><h2>Explore another project.</h2></div>
        <Link className="button primary" href="/projects">Project archive <ArrowUpRight size={17} /></Link>
      </section>
    </main>
  );
}
