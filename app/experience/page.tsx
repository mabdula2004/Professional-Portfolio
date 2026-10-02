import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Experience & Education" };

const milestones = [
  { date: "2026", title: "Full-stack portfolio development", subtitle: "Independent project work", body: "Building production-style React experiences while expanding into TypeScript, Supabase, authentication and end-to-end application workflows." },
  { date: "2025–26", title: "AI-Powered FYP Portal", subtitle: "Final Year Project", body: "Designing a centralized project-suggestion and submission system for students and supervisors at COMSATS University Islamabad, Vehari Campus." },
  { date: "2024", title: "Flutter & Firebase applications", subtitle: "Mobile application development", body: "Built student and teacher experiences featuring role-based authentication, Firestore data, courses, announcements and performance tracking." },
  { date: "2022–26", title: "BS Computer Science", subtitle: "COMSATS University Islamabad", body: "Computer science education spanning algorithms, databases, software engineering, operating systems, artificial intelligence and machine learning." },
];

export default function ExperiencePage() {
  return (
    <main className="inner-main page-shell">
      <section className="page-intro">
        <p className="section-index">Experience & education</p>
        <h1>A path shaped by coursework, ambitious projects and consistent practice.</h1>
      </section>
      <section className="timeline">
        {milestones.map((item, index) => <article key={item.title}><div className="timeline-marker"><span>0{index + 1}</span></div><p className="timeline-date">{item.date}</p><div><p className="eyebrow">{item.subtitle}</p><h2>{item.title}</h2><p>{item.body}</p></div></article>)}
      </section>
      <section className="education-panel">
        <div><p className="section-index">Education</p><h2>Bachelor of Science in Computer Science</h2><p>COMSATS University Islamabad · September 2022 – September 2026</p></div>
        <div className="gpa-badge"><strong>3.22</strong><span>CGPA / 4.0</span></div>
      </section>
      <section className="inline-cta"><div><p className="section-index">Evidence</p><h2>See the work behind the timeline.</h2></div><Link className="button primary" href="/projects">View projects <ArrowUpRight size={17} /></Link></section>
    </main>
  );
}
