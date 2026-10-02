import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, GraduationCap } from "lucide-react";
import { coreSkills } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="inner-main page-shell">
      <section className="page-intro about-intro">
        <p className="section-index">About / 01</p>
        <h1>Curiosity turned into a way of building.</h1>
        <div className="intro-columns">
          <p className="lead">I&apos;m a full-stack developer who enjoys turning ideas and interface designs into responsive, connected applications.</p>
          <div className="rich-copy">
            <p>My strongest foundation is in frontend development with React, but my work increasingly connects that experience to authentication, databases, APIs and AI integrations.</p>
            <p>I learn by building. That has taken me from C++ and Flutter applications to React product experiences, Firebase-backed academic systems and an AI-powered final-year project.</p>
          </div>
        </div>
      </section>

      <section className="profile-band">
        <div className="profile-monogram">MA<span>Full-stack developer</span></div>
        <div className="profile-statement">
          <span>Lahore, Pakistan</span>
          <blockquote>“I care about the details that make software easier to understand, easier to use and easier to trust.”</blockquote>
        </div>
      </section>

      <section className="section compact-section">
        <div className="section-heading"><p className="section-index">02 / How I work</p><h2>Practical thinking, visible progress.</h2></div>
        <div className="principles-grid">
          <article><Compass /><h3>Start with the problem</h3><p>I clarify the real user goal before choosing the interface, data model or technology.</p></article>
          <article><BookOpen /><h3>Learn through shipping</h3><p>I turn new concepts into working projects, then improve them through review and iteration.</p></article>
          <article><GraduationCap /><h3>Build on fundamentals</h3><p>Computer science, programming and software-engineering foundations guide my implementation decisions.</p></article>
        </div>
      </section>

      <section className="section compact-section skill-section">
        <div className="section-heading"><p className="section-index">03 / Toolkit</p><h2>Technologies I work with.</h2></div>
        <div className="skill-list">
          {coreSkills.map((skill) => <div key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
        </div>
      </section>

      <section className="inline-cta">
        <div><p className="section-index">Next</p><h2>See how these skills come together.</h2></div>
        <Link className="button primary" href="/projects">Explore projects <ArrowUpRight size={17} /></Link>
      </section>
    </main>
  );
}
