import type { Metadata } from "next";
import { Award, BriefcaseBusiness, ArrowUpRight, Code2, GraduationCap, Link2, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";

import { education } from "@/lib/education";

export const metadata: Metadata = { title: "Résumé" };



const skills = [
  { group: "Languages", items: ["C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript", "Node.js"] },
  { group: "Frameworks", items: ["React", "React Native", "Flutter"] },
  { group: "Backend & Data", items: ["Supabase", "Firebase", "Firestore", "MySQL", "PostgreSQL", "REST APIs", "FastAPI"] },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"] },
];

const projects = [
  {
    title: "AI-Powered FYP Suggestion & Submission Portal",
    details: [
      "Built role-based Student, Supervisor and Admin workflows with AI suggestions, semantic similarity checks, PDF processing with OCR and milestone tracking.",
      "Added route guards with university-domain authentication, group formation, supervisor-approved project locking and five-phase milestone tracking secured with Firestore rules.",
    ],
    stack: "React · Firebase · FastAPI",
  },
  {
    title: "RoadWatch Traffic Monitoring Platform",
    details: [
      "Wrote the PRD, validated video-based violation detection through a proof of concept, designed the ERD and schema, created the app and dashboard UI in Magic Patterns, then implemented the application and integrated Supabase services.",
      "Developed a mobile app for reporters and a web dashboard for human reviewers.",
    ],
    stack: "React · React Native · Supabase · PostgreSQL",
  },
  {
    title: "Multi-Role Healthcare Appointment Management",
    details: [
      "Developed authenticated, role-based booking workflows with PostgreSQL scheduling, Row Level Security, server-validated bookings and Playwright end-to-end tests.",
      "Implemented four-step patient booking with database overlap prevention, private document storage and GitHub Actions running builds and Playwright tests across desktop, tablet and mobile.",
    ],
    stack: "React · Supabase · PostgreSQL",
  },
  {
    title: "Hirely Multi-Role Job Portal",
    details: [
      "Built Candidate, Recruiter and Admin workspaces covering job discovery, the applicant pipeline, messaging and analytics.",
      "Implemented an ATS pipeline, interview scheduling, a résumé centre, job alerts and admin moderation with audit logs, deployed on Vercel.",
    ],
    stack: "React · Supabase · PostgreSQL",
  },
];

const experience = [
  {
    title: "React Developer (Intern)", company: "Sortup Pvt. Ltd.", location: "Lahore · On-site", dates: "Aug 2026 - Oct 2026",
    details: [
      "Contributed to React frontend development and practised integrating backend services.",
      "Gained hands-on experience with React Native through mobile application projects.",
      "Collaborated with the development team on real projects and used Git and GitHub for code management.",
    ],
  },
  {
    title: "Android App Development (Intern)", company: "We Connect", location: "Vehari · On-site", dates: "Jul 2024 - Sep 2024",
    details: [
      "Collaborated on mobile application tasks.",
      "Supported feature improvements, testing, and debugging.",
      "Helped refine performance and reliability while learning professional team workflows.",
    ],
  },
];

const certifications: { title: string; provider: string; href?: string }[] = [
  { title: "React JS Complete", provider: "Cursa", href: "https://drive.google.com/file/d/1RYrVcvLU5weUz57YtYTInZ1gMs3afibh/view?usp=sharing" },
  { title: "React: All You Need to Know", provider: "Udemy", href: "https://drive.google.com/file/d/14W2hj1RsPnut9Q-oppHaFXd-GsFJVwox/view?usp=sharing" },
  { title: "Node JS Complete", provider: "Cursa", href: "https://drive.google.com/file/d/1eLyVG-UiOLP0pXVhJwiOBcs0wFZQebjf/view?usp=sharing" },
  { title: "Dart and Flutter: Mobile App Development", provider: "Udemy", href: "https://drive.google.com/file/d/1nPIXOiMdpZfow8xoecLKkpXnVApQ-NfS/view?usp=sharing" },
  { title: "Machine Learning and AI coursework", provider: "Udemy", href: "https://drive.google.com/file/d/1XwfyS_rJyQBpGrOOIzDm8_ACejgWCrfC/view?usp=sharing" },
  { title: "Mobile App Development with Flutter", provider: "Alison" },
];

const strengths = ["Problem Solving", "Team Collaboration", "Self Motivation", "Discipline", "Ownership", "Consistent Work Ethic"];

export default function ResumePage() {
  return (
    <main className="inner-main page-shell resume-page resume-refresh">
      <section className="resume-hero">
        <div className="resume-identity">
          <span className="resume-monogram">MA</span>
          <div>
            <p className="section-index">Résumé / Web edition</p>
            <h1>Muhammad Abdullah</h1>
            <p className="lead">Full Stack Developer</p>
          </div>
        </div>
      </section>

      <section className="resume-contact-strip" aria-label="Contact information">
        <span><MapPin size={16} /> Vehari, Punjab, Pakistan</span>
        <a href="mailto:mabdullah17jun@gmail.com"><Mail size={16} /> mabdullah17jun@gmail.com</a>
        <a href="https://wa.me/923202929447" target="_blank" rel="noreferrer"><MessageCircle size={16} /> +92 320 2929447</a>
        <a href="https://github.com/mabdula2004" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a>
        <a href="https://www.linkedin.com/in/muhammad-abdula-17jun/" target="_blank" rel="noreferrer"><Link2 size={16} /> LinkedIn</a>
        <a href="https://professional-portfolio-mabdula-17jun.vercel.app/" target="_blank" rel="noreferrer"><Link2 size={16} /> Portfolio</a>
      </section>

      <div className="resume-modern-layout">
        <aside className="resume-sidebar">
          <section className="resume-panel">
            <div className="resume-section-title"><Sparkles size={18} /><h2>Technical Skills</h2></div>
            <div className="resume-skill-groups">
              {skills.map((skill) => <div key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><Award size={18} /><h2>Certifications</h2></div>
            <div className="certificate-list">
              {certifications.map((certificate) => (
                <article key={certificate.title}>
                  <strong>{certificate.title}</strong><span>{certificate.provider}</span>
                  {certificate.href ? <a className="resume-certificate-link" href={certificate.href} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}>View certificate <ArrowUpRight size={14} aria-hidden="true" /></a> : null}
                </article>
              ))}
            </div>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><Sparkles size={18} /><h2>Strengths</h2></div>
            <div className="strength-list">{strengths.map((strength) => <span key={strength}>{strength}</span>)}</div>
          </section>
        </aside>

        <div className="resume-main-column">
          <section className="resume-panel resume-profile-panel">
            <p className="section-index">Profile</p>
            <h2>Professional Summary</h2>
            <p>I am a Full Stack Developer and recent Computer Science graduate with internships in React and Android development. At Sortup, I built frontend interfaces, connected Supabase backend services, and created and integrated backend APIs. I start with the problem and develop the complete solution: for my final-year project, I built an AI-powered FYP portal for my university, bringing scattered documents and manual approvals into one workflow with role-based access, AI project suggestions and semantic similarity checks. I am self-motivated and disciplined, with a consistent work ethic, a strong sense of ownership and a commitment to practical solutions.</p>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><GraduationCap size={19} /><h2>Education</h2></div>
            <div className="resume-timeline">
              {education.map((item) => (
                <article key={item.degree}>
                  <span className="timeline-dot" />
                  <div><h3>{item.degree}</h3><p>{item.school}{item.note ? ` · ${item.note}` : ""}</p></div>
                  <time>{item.dates}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><BriefcaseBusiness size={18} /><h2>Work Experience</h2></div>
            {experience.map((item) => (
              <div className="resume-experience-card" key={`${item.company}-${item.dates}`}>
                <div><h3>{item.title}</h3><p>{item.company} · {item.location}</p></div>
                <time>{item.dates}</time>
                <ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </div>
            ))}
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><BriefcaseBusiness size={18} /><h2>Selected Projects</h2></div>
            <div className="resume-project-list">
              {projects.map((project, index) => (
                <article key={project.title}><span>0{index + 1}</span><div><h3>{project.title}</h3><ul>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><p className="resume-project-stack">{project.stack}</p></div></article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
