/* eslint-disable @next/next/no-html-link-for-pages */
import { ArrowUpRight, Code2, Database, Sparkles } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { ExpertiseExplorer } from "@/components/expertise-explorer";
import { FeaturedProjects } from "@/components/featured-projects";

const featured = projects
  .filter((project) => project.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

const technologies = ["React", "React Native", "JavaScript", "TypeScript", "Firebase", "Supabase", "MySQL", "PostgreSQL", "REST APIs", "AI Integration"];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero page-shell">
        <div className="hero-copy">
          <p className="kicker"><span /> Professional Portfolio</p>
          <p className="hero-name"><span className="hero-name-first">Muhammad</span>{" "}<span className="hero-name-last">Abdullah</span></p>
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
              <p>&nbsp;&nbsp;frontend: [<em>&quot;React&quot;</em>, <em>&quot;React Native&quot;</em>],</p>
              <p>&nbsp;&nbsp;backend: [<em>&quot;Supabase&quot;</em>, <em>&quot;PostgreSQL&quot;</em>],</p>
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
        <div className="technology-marquee">
          <div className="technology-track">
            {[0, 1].map((copy) => (
              <ul className="technology-sequence" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {technologies.map((technology) => <li key={technology}>{technology}<span aria-hidden="true">◆</span></li>)}
              </ul>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="section-heading split-heading project-section-heading">
          <div><p className="section-index">Project Portfolio</p><h2>Featured Projects</h2></div>
          <p>Selected academic and personal projects demonstrating frontend development, mobile applications, database integration and AI functionality.</p>
        </div>
        <FeaturedProjects projects={featured} />
        <a className="text-link" href="/projects">View All Projects <ArrowUpRight size={16} /></a>
      </section>

      <section className="section expertise-section" aria-labelledby="expertise-title">
        <div className="page-shell">
          <div className="section-heading expertise-heading"><p className="section-index">Skills</p><h2 id="expertise-title">Technical Expertise</h2></div>
          <ExpertiseExplorer />
        </div>
      </section>

    </main>
  );
}
