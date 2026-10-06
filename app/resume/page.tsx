import type { Metadata } from "next";
import { Award, BriefcaseBusiness, Code2, Download, GraduationCap, Link2, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Résumé" };

const education = [
  { degree: "BS Computer Science", school: "COMSATS University Islamabad", dates: "Sep 2022 - 1 Aug 2026", note: "CGPA 3.22 / 4.0" },
  { degree: "FSc Pre-Medical", school: "Govt Postgraduate College Vehari", dates: "Jun 2020 - May 2022", note: "" },
  { degree: "Matric Pre-Medical", school: "Govt Model Higher Secondary School Vehari", dates: "Mar 2018 - May 2020", note: "" },
];

const skills = [
  { group: "Core Technologies", items: ["React", "React Native"] },
  { group: "Languages", items: ["JavaScript (primary)", "TypeScript", "C++", "Python", "Dart"] },
  { group: "Backend & Data", items: ["Supabase", "Firebase Auth", "Firestore", "PostgreSQL", "MySQL", "REST APIs", "FastAPI"] },
  { group: "AI Integration", items: ["Gemini API", "Sentence Transformers"] },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"] },
];

const projects = [
  { title: "AI-Powered FYP Suggestion & Submission Portal", text: "React-based academic workflow connecting project discovery, submissions and AI-assisted quality support.", year: "2026" },
  { title: "Multi-Role Healthcare Appointment Management", text: "React and Supabase platform with patient, doctor and admin workflows, authentication and protected data.", year: "2026" },
  { title: "RoadWatch", text: "Private React Native and Expo product in active development; design and proof-of-concept validation completed.", year: "2026" },
];

const strengths = ["Problem Solving", "Team Collaboration", "Debugging", "Responsive UI", "Agile Workflow", "Communication"];

export default function ResumePage() {
  return (
    <main className="inner-main page-shell resume-page resume-refresh">
      <section className="resume-hero">
        <div className="resume-identity">
          <span className="resume-monogram">MA</span>
          <div>
            <p className="section-index">Résumé / Web edition</p>
            <h1>Muhammad Abdullah</h1>
            <p className="lead">Full-Stack Developer focused on React, React Native and JavaScript</p>
          </div>
        </div>
        <a className="button primary resume-download" href="/Muhammad-Abdullah-CV.pdf" download><Download size={17} /> Download CV</a>
      </section>

      <section className="resume-contact-strip" aria-label="Contact information">
        <span><MapPin size={16} /> Lahore, Pakistan</span>
        <a href="mailto:mabdullah17jun@gmail.com"><Mail size={16} /> mabdullah17jun@gmail.com</a>
        <a href="https://wa.me/923202929447" target="_blank" rel="noreferrer"><MessageCircle size={16} /> +92 320 2929447</a>
        <a href="https://github.com/mabdula2004" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a>
        <a href="https://www.linkedin.com/in/muhammad-abdula-17jun/" target="_blank" rel="noreferrer"><Link2 size={16} /> LinkedIn</a>
      </section>

      <div className="resume-modern-layout">
        <aside className="resume-sidebar">
          <section className="resume-panel">
            <div className="resume-section-title"><Sparkles size={18} /><h2>Core Skills</h2></div>
            <div className="resume-skill-groups">
              {skills.map((skill) => <div key={skill.group}><h3>{skill.group}</h3><div>{skill.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><Award size={18} /><h2>Certifications</h2></div>
            <div className="certificate-list">
              <article><strong>React JS for Beginners</strong><span>Completed certification</span></article>
              <article><strong>React JS Complete</strong><span>Cursa</span></article>
            </div>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><Sparkles size={18} /><h2>Strengths</h2></div>
            <div className="strength-list">{strengths.map((strength) => <span key={strength}>{strength}</span>)}</div>
          </section>
        </aside>

        <div className="resume-main-column">
          <section className="resume-panel resume-profile-panel">
            <p className="section-index">Professional introduction</p>
            <h2>Frontend craft with practical full-stack understanding</h2>
            <p>I build responsive web and mobile products with React and React Native, using JavaScript as my core language and TypeScript where additional structure improves the codebase. My project work includes authentication, databases, APIs and AI integrations, with a strong focus on clear user flows and reliable implementation.</p>
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
            <div className="resume-section-title"><BriefcaseBusiness size={18} /><h2>Internship Experience</h2></div>
            <div className="resume-experience-card">
              <div><h3>Android App Development Intern</h3><p>We Connect Software House</p></div>
              <time>Jul - Sep 2024</time>
              <ul>
                <li>Collaborated with the development team on Android application work.</li>
                <li>Supported interface implementation, debugging, testing and performance improvements.</li>
                <li>Participated in project meetings, feedback cycles and practical team workflows.</li>
              </ul>
            </div>
          </section>

          <section className="resume-panel">
            <div className="resume-section-title"><BriefcaseBusiness size={18} /><h2>Selected Projects</h2></div>
            <div className="resume-project-list">
              {projects.map((project, index) => (
                <article key={project.title}><span>0{index + 1}</span><div><h3>{project.title}</h3><p>{project.text}</p></div><time>{project.year}</time></article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
