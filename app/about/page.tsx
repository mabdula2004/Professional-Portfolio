/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, Braces, Code2, Compass, GraduationCap, Layers3, MessageSquareMore, Smartphone } from "lucide-react";

import { EducationJourney } from "@/components/education-journey";

export const metadata: Metadata = { title: "About" };

const highlights = [
  { label: "Web Development", value: "React", icon: Code2 },
  { label: "Mobile Development", value: "React Native", icon: Smartphone },
  { label: "Primary Language", value: "JavaScript", icon: Braces },
  { label: "Graduation", value: "July 2026", icon: GraduationCap },
];


export default function AboutPage() {
  return (
    <main className="inner-main page-shell about-page about-refresh">
      <section className="about-profile-grid">
        <div className="about-portrait">
          <img className="about-profile-photo" src="/muhammad-abdullah-illustrated-portrait.png" alt="Illustrated portrait of Muhammad Abdullah" width={1254} height={1254} fetchPriority="high" />
        </div>

        <div className="about-profile-copy">
          <p className="section-index">About me</p>
          <h1>Professional Profile</h1>
          <p className="lead">I am a Computer Science graduate with Web and App development internship experience and a portfolio of 40+ academic and personal projects.</p>
          <p>Combines strong programming fundamentals with hands on experience building web, mobile, and AI enabled applications. Brings analytical problem solving, leadership qualities and a collaborative approach to technical challenges. Self motivated and disciplined, with a consistent work ethic, a strong sense of ownership and a commitment to turning ideas into practical user focused solutions.</p>
          <a className="button primary" href="/projects">View Projects <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="about-highlights" aria-label="Professional highlights">
        {highlights.map(({ label, value, icon: Icon }) => (
          <article key={label}>
            <Icon size={19} />
            <div><span>{label}</span><strong>{value}</strong></div>
          </article>
        ))}
      </section>

      <EducationJourney />

      <section className="section compact-section about-work-section">
        <div className="section-heading about-section-heading">
          <p className="section-index">Development Approach</p>
          <h2>Problem Solving &amp; Implementation</h2>
        </div>
        <div className="about-work-grid">
          <article><Compass /><span>01</span><h3>Requirements Analysis</h3><p>I identify user requirements, application workflows and technical constraints before implementation.</p></article>
          <article><Layers3 /><span>02</span><h3>Development &amp; Testing</h3><p>I implement reusable components, integrate application data and test functionality across relevant workflows.</p></article>
          <article><MessageSquareMore /><span>03</span><h3>Review &amp; Refinement</h3><p>I evaluate feedback, resolve defects and refine usability and implementation quality.</p></article>
        </div>
      </section>

      <section className="about-next-step">
        <BookOpenCheck size={22} />
        <div><p className="section-index">Project Portfolio</p><h2>Academic &amp; Personal Projects</h2></div>
        <a className="text-link" href="/projects">View Projects <ArrowUpRight size={16} /></a>
      </section>
    </main>
  );
}
