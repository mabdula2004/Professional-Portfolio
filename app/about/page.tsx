/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, Braces, Code2, Compass, GraduationCap, Layers3, MessageSquareMore, Smartphone } from "lucide-react";

export const metadata: Metadata = { title: "About" };

const highlights = [
  { label: "Web Development", value: "React", icon: Code2 },
  { label: "Mobile Development", value: "React Native", icon: Smartphone },
  { label: "Primary Language", value: "JavaScript", icon: Braces },
  { label: "Graduation", value: "July 2026", icon: GraduationCap },
];

const journey = [
  {
    period: "2018 - 2022",
    title: "Pre-Medical Education",
    text: "Completed Matric and FSc in pre-medical studies, developing a foundation in scientific reasoning and analytical problem solving.",
  },
  {
    period: "2022 - 2026",
    title: "Bachelor of Science in Computer Science",
    text: "Studied at COMSATS University Islamabad, Vehari Campus, with academic and project work in programming, web development, mobile applications and artificial intelligence.",
  },
  {
    period: "Current Focus",
    title: "Web and Mobile Development",
    text: "My technical focus includes React, React Native and JavaScript, supported by TypeScript, authentication, database integration, REST APIs and AI applications.",
  },
];

export default function AboutPage() {
  return (
    <main className="inner-main page-shell about-page about-refresh">
      <section className="about-profile-grid">
        <div className="about-portrait">
          <img className="about-profile-photo" src="/muhammad-abdullah-portrait.png" alt="Muhammad Abdullah" width={1024} height={1024} fetchPriority="high" />
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

      <section className="section about-journey-section">
        <div className="section-heading about-section-heading">
          <p className="section-index">Background</p>
          <h2>Education &amp; Development</h2>
        </div>
        <div className="journey-list">
          {journey.map((item, index) => (
            <article key={item.period}>
              <div className="journey-marker">0{index + 1}</div>
              <span>{item.period}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

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
