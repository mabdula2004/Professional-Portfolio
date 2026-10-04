/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, ImageIcon, Lock } from "lucide-react";
import { projects } from "@/lib/portfolio-data";

const caseStudies = projects.filter((project) => project.featured);

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project" };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) notFound();
  const hasEvidence = Boolean(project.verification?.length || project.limitations?.length);
  const screenshotSection = hasEvidence ? "06" : "05";
  const futureSection = hasEvidence ? "07" : "06";

  return (
    <main className="inner-main page-shell case-study-page">
      <a className="back-link" href="/"><ArrowLeft size={16} /> Featured projects</a>

      <section className={`case-hero ${project.private ? "private-case-hero" : ""} accent-${project.accent}`}>
        <div className="case-copy">
          <p className="section-index">{project.eyebrow} / {project.year}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
          <div className="case-actions">
            {project.private ? (
              <span className="status-pill private-status"><Lock size={14} /> {project.status}</span>
            ) : project.github ? (
              <a className="button primary" href={project.github} target="_blank" rel="noreferrer"><Code2 size={17} /> View repository</a>
            ) : (
              <span className="status-pill">{project.status}</span>
            )}
          </div>
        </div>
        <div className={`case-art ${project.private ? "private-case-art" : ""}`}>
          {project.private ? <Lock className="private-case-lock" aria-hidden="true" /> : <span>{project.title.split(" ").map((word) => word[0]).slice(0, 3).join("")}</span>}
          <small>{project.private ? "Protected project in active development" : project.status}</small>
        </div>
      </section>

      <section className="case-overview-grid">
        <aside>
          <div><p>My role</p><strong>{project.role ?? "Design and development"}</strong></div>
          <div><p>Current status</p><strong>{project.status}</strong></div>
          <div><p>Technologies</p><div className="stack-column">{(project.technologies ?? project.stack).map((item) => <span key={item}>{item}</span>)}</div></div>
        </aside>

        <div className="case-narrative">
          <article>
            <p className="section-index">01 / Problem</p>
            <h2>The context behind the build</h2>
            <p>{project.problem ?? project.summary}</p>
          </article>
          <article>
            <p className="section-index">02 / Purpose</p>
            <h2>What the product is meant to improve</h2>
            <p>{project.purpose ?? project.description}</p>
          </article>
        </div>
      </section>

      <section className="case-detail-grid">
        <article className="case-detail-card">
          <p className="section-index">03 / Main functionality</p>
          <h2>Core product workflows</h2>
          <div className="case-check-list">
            {project.highlights.map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}
          </div>
        </article>
        <article className="case-detail-card">
          <p className="section-index">04 / Technical decisions</p>
          <h2>How the solution is structured</h2>
          <div className="case-check-list">
            {(project.technicalDecisions ?? project.stack.map((item) => `${item} selected for its role in the product workflow`)).map((item) => <div key={item}><Code2 size={18} /><span>{item}</span></div>)}
          </div>
        </article>
      </section>

      {hasEvidence ? (
        <section className="case-detail-grid case-evidence-grid">
          <article className="case-detail-card">
            <p className="section-index">05 / Implementation evidence</p>
            <h2>What is present in the repository</h2>
            <div className="case-check-list">
              {project.verification?.map((item) => <div key={item}><CheckCircle2 size={18} /><span>{item}</span></div>)}
            </div>
          </article>
          <article className="case-detail-card case-boundary-card">
            <p className="section-index">Current boundaries</p>
            <h2>What is not being overstated</h2>
            <div className="case-boundary-list">
              {project.limitations?.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
            </div>
          </article>
        </section>
      ) : null}

      <section className="case-visual-section">
        <div>
          <p className="section-index">{screenshotSection} / Screenshots</p>
          <h2>Visual documentation</h2>
          <p>{project.private ? "RoadWatch visuals remain protected while implementation and integration testing continue." : "Final product screens will be added as the public case-study documentation is completed."}</p>
        </div>
        <div className="case-visual-placeholder"><ImageIcon size={32} /><span>{project.private ? "Private until release" : "Screenshots coming soon"}</span></div>
      </section>

      <section className="case-future-section">
        <div><p className="section-index">{futureSection} / Future improvements</p><h2>What comes next</h2></div>
        <div className="case-future-list">
          {(project.futureWork ?? ["Continue refining the implementation", "Add visual documentation", "Publish deployment details when ready"]).map((item, index) => (
            <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
          ))}
        </div>
      </section>

      <section className="inline-cta">
        <div><p className="section-index">Continue</p><h2>Explore the public project archive</h2></div>
        <a className="button primary" href="/projects">View all repositories <ArrowUpRight size={17} /></a>
      </section>
    </main>
  );
}
