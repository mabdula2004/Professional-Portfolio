/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight, Code2, Database, Layers3, Lock, Sparkles, Wrench } from "lucide-react";
import { coreSkills, projects } from "@/lib/portfolio-data";

const featured = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

const technologies = ["React", "React Native", "JavaScript", "TypeScript", "Firebase", "Supabase", "MySQL", "PostgreSQL", "REST APIs", "AI Integration"];
const expertiseIcons = [Layers3, Database, Sparkles, Wrench];

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="kicker"><span /> Professional Portfolio</p>
          <h1>Full Stack Developer</h1>
          <p className="hero-summary">
            I&apos;m Muhammad Abdullah, a Computer Science graduate with internship experience in web and mobile development. My projects apply React, React Native, databases, APIs and AI integration.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/projects">View Projects <ArrowUpRight size={17} /></a>
            <a className="button secondary" href="mailto:mabdullah17jun@gmail.com">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Technology overview">
          <div className="orbit-card main-card">
            <div className="code-window-top"><span /><span /><span /><small>product.tsx</small></div>
            <div className="code-lines">
              <p><b>const</b> developer = &#123;</p>
              <p>&nbsp;&nbsp;focus: <em>&quot;Web &amp; mobile development&quot;</em>,</p>
              <p>&nbsp;&nbsp;frontend: [<em>&quot;React&quot;</em>, <em>&quot;TypeScript&quot;</em>],</p>
              <p>&nbsp;&nbsp;backend: [<em>&quot;Firebase&quot;</em>, <em>&quot;Supabase&quot;</em>],</p>
              <p>&nbsp;&nbsp;integration: <em>&quot;AI applications&quot;</em></p>
              <p>&#125;;</p>
            </div>
            <div className="build-status"><span /> Open to development opportunities</div>
          </div>
          <div className="floating-chip chip-react"><Code2 size={16} /> React</div>
          <div className="floating-chip chip-data"><Database size={16} /> Data</div>
          <div className="floating-chip chip-ai"><Sparkles size={16} /> AI</div>
          <div className="visual-glow" />
        </div>
      </section>

      <section className="technology-band" aria-label="Core technologies">
        <div className="page-shell technology-band-inner">
          <p>Technology Stack</p>
          <ul className="technology-list">
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
      </section>

      <section className="section page-shell">
        <div className="section-heading split-heading project-section-heading">
          <div><p className="section-index">Project Portfolio</p><h2>Featured Projects</h2></div>
          <p>Selected academic and personal projects demonstrating frontend development, mobile applications, database integration and AI functionality.</p>
        </div>
        <div className="project-grid featured-project-grid">
          {featured.map((project, index) => {
            const cardContent = <>
              <div className="project-number">0{index + 1}</div>
              {project.private ? <span className="privacy-badge"><Lock size={13} /> Private · In Development</span> : null}
              <div className="project-art" aria-hidden="true">
                <span className="art-grid" />
                <strong>{project.title.split(" ").slice(0, 2).join(" ")}</strong>
                <small>{project.eyebrow}</small>
              </div>
              <div className="project-copy">
                <p>{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <span>{project.summary}</span>
                <div className="tag-row">{project.stack.slice(0, 3).map((item) => <small key={item}>{item}</small>)}</div>
              </div>
              {project.private ? <Lock className="project-lock" size={19} /> : <ArrowUpRight className="project-arrow" size={20} />}
            </>;

            return (
              <a className={`project-card ${project.private ? "private-project-card" : ""} accent-${project.accent}`} href={`/projects/${project.slug}`} key={project.slug} aria-label={project.private ? `${project.title}, private project in development` : project.title}>
                {cardContent}
              </a>
            );
          })}
        </div>
        <a className="text-link" href="/projects">View All Projects <ArrowUpRight size={16} /></a>
      </section>

      <section className="section expertise-section" aria-labelledby="expertise-title">
        <div className="page-shell">
          <div className="section-heading expertise-heading"><p className="section-index">Skills</p><h2 id="expertise-title">Technical Expertise</h2></div>
          <div className="expertise-grid">
            {coreSkills.map((skill, index) => {
              const Icon = expertiseIcons[index] ?? Code2;
              return (
                <article className="expertise-card" key={skill.group}>
                  <div className="expertise-card-heading"><span className="expertise-icon"><Icon size={21} aria-hidden="true" /></span><h3>{skill.group}</h3></div>
                  <ul className="expertise-tags">{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
