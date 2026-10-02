import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { coreSkills } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Résumé" };

export default function ResumePage() {
  return (
    <main className="inner-main page-shell resume-page">
      <section className="resume-header">
        <div><p className="section-index">Résumé / Web edition</p><h1>Muhammad Abdullah</h1><p className="lead">Full-Stack Developer</p></div>
        <div className="resume-contact"><span><MapPin size={16} /> Lahore, Pakistan</span><a href="mailto:muhammadabdula7874747@gmail.com"><Mail size={16} /> Email me</a></div>
      </section>
      <div className="resume-layout">
        <aside><section><h2>Links</h2><a href="https://github.com/mabdula2004" target="_blank" rel="noreferrer">github.com/mabdula2004</a><a href="https://www.linkedin.com/in/muhammad-abdullah-17jun" target="_blank" rel="noreferrer">LinkedIn profile</a></section><section><h2>Language</h2><p>English — Professional working proficiency</p></section></aside>
        <div className="resume-content">
          <section><h2>Profile</h2><p>Full-stack developer with a strong foundation in React, React Native, HTML, CSS, JavaScript and TypeScript. I build responsive, user-friendly applications and connect them with authentication, databases, APIs and AI-powered features.</p></section>
          <section><h2>Education</h2><div className="resume-entry"><div><h3>BS Computer Science</h3><p>COMSATS University Islamabad</p></div><span>Sep 2022 – Sep 2026</span></div></section>
          <section><h2>Core skills</h2><div className="resume-skill-grid">{coreSkills.map((skill) => <div key={skill.group}><h3>{skill.group}</h3><p>{skill.items.join(", ")}</p></div>)}</div></section>
          <section><h2>Selected projects</h2><div className="resume-entry"><div><h3>AI-Powered FYP Suggestion & Submission Portal</h3><p>Academic platform for project discovery, submission and quality support.</p></div><span>2026</span></div><div className="resume-entry"><div><h3>VELORA React Fashion Store</h3><p>Responsive product discovery and commerce experience.</p></div><span>2026</span></div><div className="resume-entry"><div><h3>Student Learning Platform</h3><p>Role-based Flutter and Firebase academic application.</p></div><span>2024</span></div></section>
        </div>
      </div>
      <section className="resume-note"><p>The downloadable ATS-ready CV will be added after the portfolio content review.</p><Link className="text-link" href="/contact">Request current profile <ArrowUpRight size={16} /></Link></section>
    </main>
  );
}
