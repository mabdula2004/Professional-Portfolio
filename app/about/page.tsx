import type { Metadata } from "next";
import { ArrowUpRight, BookOpenCheck, Braces, Code2, Compass, GraduationCap, Layers3, MessageSquareMore, Smartphone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "About" };

const highlights = [
  { label: "Core Web", value: "React", icon: Code2 },
  { label: "Core Mobile", value: "React Native", icon: Smartphone },
  { label: "Core Language", value: "JavaScript", icon: Braces },
  { label: "Graduation", value: "August 2026", icon: GraduationCap },
];

const journey = [
  {
    period: "2018 - 2022",
    title: "A pre-medical foundation",
    text: "Matric and FSc in pre-medical studies developed the discipline, observation and curiosity that still shape how I approach technical problems.",
  },
  {
    period: "2022 - 2026",
    title: "Computer science became the direction",
    text: "At COMSATS University Islamabad, I built strong programming fundamentals and moved from mobile exercises to connected React products.",
  },
  {
    period: "Now",
    title: "Building across web and mobile",
    text: "My current focus is React, React Native and JavaScript, supported by TypeScript, authentication, databases, APIs and practical AI integration.",
  },
];

export default function AboutPage() {
  return (
    <main className="inner-main page-shell about-page about-refresh">
      <section className="about-profile-grid">
        <div className="about-portrait" aria-label="Muhammad Abdullah portrait placeholder">
          <div className="about-portrait-glow" />
          <div className="about-monogram">MA</div>
          <span>Professional portrait coming soon</span>
        </div>

        <div className="about-profile-copy">
          <p className="section-index">About me</p>
          <h1>From pre-medical studies to building digital products</h1>
          <p className="lead">I&apos;m Muhammad Abdullah, a full-stack developer in Lahore with a frontend-first foundation in React and React Native.</p>
          <p>I enjoy turning real problems into clear, responsive products and connecting the interface with authentication, databases, REST APIs and useful AI features. JavaScript is my core language, while TypeScript helps me build with more structure and confidence.</p>
          <Link className="button primary" href="/projects">View my work <ArrowUpRight size={17} /></Link>
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
          <p className="section-index">01 / My journey</p>
          <h2>A change in direction, built through consistent practice</h2>
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
          <p className="section-index">02 / How I work</p>
          <h2>A simple process for thoughtful progress</h2>
        </div>
        <div className="about-work-grid">
          <article><Compass /><span>01</span><h3>Understand the problem</h3><p>I clarify the user, the workflow and the real outcome before choosing the implementation.</p></article>
          <article><Layers3 /><span>02</span><h3>Build and test</h3><p>I turn the plan into reusable interfaces, connected data flows and working product behavior.</p></article>
          <article><MessageSquareMore /><span>03</span><h3>Improve through feedback</h3><p>I review the result, fix weak points and refine the experience through practical iteration.</p></article>
        </div>
      </section>

      <section className="about-next-step">
        <BookOpenCheck size={22} />
        <div><p className="section-index">Next</p><h2>See the projects behind the journey</h2></div>
        <Link className="text-link" href="/projects">Open project archive <ArrowUpRight size={16} /></Link>
      </section>
    </main>
  );
}
