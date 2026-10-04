import { ArrowUpRight, Code2, Database, Layers3, Lock, Sparkles, Wrench } from "lucide-react";
import { GitHubRepoCount } from "@/components/github-repo-count";
import { coreSkills, projects } from "@/lib/portfolio-data";

const featured = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export default function Home() {
  return (
    <main>
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="kicker"><span /> Open to full-stack opportunities</p>
          <h1>I build digital products that feel clear, fast and genuinely useful</h1>
          <p className="hero-summary">
            I&apos;m Muhammad Abdullah, a full-stack developer focused on React and TypeScript—connecting polished interfaces with authentication, databases, APIs and AI-powered features.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button secondary" href="/contact">Start a conversation</a>
          </div>
          <div className="hero-proof" aria-label="Quick profile facts">
            <div><strong>3.22</strong><span>CGPA / 4.0</span></div>
            <div><strong><GitHubRepoCount /></strong><span>Public GitHub repositories</span></div>
            <div><strong>2026</strong><span>BSCS graduate</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Technology overview">
          <div className="orbit-card main-card">
            <div className="code-window-top"><span /><span /><span /><small>product.tsx</small></div>
            <div className="code-lines">
              <p><b>const</b> developer = &#123;</p>
              <p>&nbsp;&nbsp;focus: <em>&quot;Full-stack products&quot;</em>,</p>
              <p>&nbsp;&nbsp;frontend: [<em>&quot;React&quot;</em>, <em>&quot;TypeScript&quot;</em>],</p>
              <p>&nbsp;&nbsp;backend: [<em>&quot;Firebase&quot;</em>, <em>&quot;Supabase&quot;</em>],</p>
              <p>&nbsp;&nbsp;edge: <em>&quot;AI integrations&quot;</em></p>
              <p>&#125;;</p>
            </div>
            <div className="build-status"><span /> Ready to build</div>
          </div>
          <div className="floating-chip chip-react"><Code2 size={16} /> React</div>
          <div className="floating-chip chip-data"><Database size={16} /> Data</div>
          <div className="floating-chip chip-ai"><Sparkles size={16} /> AI</div>
          <div className="visual-glow" />
        </div>
      </section>

      <section className="marquee" aria-label="Core technologies">
        <div>React <span>◆</span> TypeScript <span>◆</span> Firebase <span>◆</span> Supabase <span>◆</span> REST APIs <span>◆</span> AI Integration</div>
      </section>

      <section className="section page-shell">
        <div className="section-heading split-heading project-section-heading">
          <div><p className="section-index">01 / Selected work</p><h2>Projects with a reason to exist</h2></div>
          <p>From academic systems to commerce experiences, each project is a focused exercise in turning a real workflow into a usable product.</p>
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

            return project.private ? (
              <article className={`project-card private-project-card accent-${project.accent}`} key={project.slug} aria-label={`${project.title}, private project in development`}>
                {cardContent}
              </article>
            ) : (
              <a className={`project-card accent-${project.accent}`} href={`/projects/${project.slug}`} key={project.slug}>
                {cardContent}
              </a>
            );
          })}
        </div>
        <a className="text-link" href="/projects">View the complete project archive <ArrowUpRight size={16} /></a>
      </section>

      <section className="section muted-section">
        <div className="page-shell">
          <div className="section-heading"><p className="section-index">02 / Capabilities</p><h2>One product mindset, across the stack</h2></div>
          <div className="capability-grid">
            {coreSkills.map((skill, index) => {
              const icons = [<Layers3 key="i" />, <Database key="i" />, <Sparkles key="i" />, <Wrench key="i" />];
              return <article key={skill.group}><div className="capability-icon">{icons[index]}</div><h3>{skill.group}</h3><p>{skill.items.join(" · ")}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section page-shell cta-panel">
        <p className="section-index">03 / What&apos;s next</p>
        <h2>Looking for someone who can learn fast and ship thoughtfully?</h2>
        <p>I&apos;m currently exploring full-stack development opportunities where strong frontend craft and practical product thinking matter.</p>
        <a className="button light" href="/contact">Let&apos;s talk <ArrowUpRight size={17} /></a>
      </section>
    </main>
  );
}
