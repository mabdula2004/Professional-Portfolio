import type { Metadata } from "next";
import { Award, BriefcaseBusiness, Code2, Download, GraduationCap, Link2, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = { title: "Résumé" };

const education = [
  { degree: "Bachelor of Science in Computer Science", school: "COMSATS University Islamabad, Vehari Campus", dates: "Sep 2022 - Jul 2026", note: "CGPA 3.22 / 4.00" },
  { degree: "FSc Pre-Medical", school: "Govt Postgraduate College Vehari", dates: "Jun 2020 - May 2022", note: "" },
  { degree: "Matric Pre-Medical", school: "Govt Model Higher Secondary School Vehari", dates: "Mar 2018 - May 2020", note: "" },
];

const skills = [
  { group: "Languages", items: ["C++", "Python", "HTML", "CSS", "JavaScript", "TypeScript"] },
  { group: "Frameworks", items: ["React", "React Native", "Flutter"] },
  { group: "Backend & Data", items: ["Supabase", "Firebase", "Firestore", "MySQL", "PostgreSQL", "REST APIs", "FastAPI"] },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"] },
];

const projects = [
  { title: "AI-Powered FYP Suggestion & Submission Portal", text: "Built role-based Student, Supervisor, and Admin workflows with AI suggestions, semantic similarity checks, document processing, and milestone tracking.", stack: "React · Firebase · AI Model" },
  { title: "RoadWatch AI Traffic Violation Detection Platform", text: "Designed operational screens for traffic monitoring, incident review, evidence management, and AI-assisted violation detection.", stack: "React · AI Model · Supabase · PostgreSQL" },
  { title: "Multi-Role Healthcare Appointment Management", text: "Developed authenticated role-based booking workflows with PostgreSQL-backed scheduling and protected access.", stack: "React · Supabase" },
];

const experience = [
  {
    title: "React Developer (Intern)", company: "Sortup Pvt. Ltd.", location: "Lahore · On-site", dates: "Jul 2026 - Sep 2026",
    details: [
      "Contributed to React frontend development and learned to integrate the Supabase backend.",
      "Gained hands-on experience with React Native through mobile app project tasks.",
      "Collaborated with the development team on real projects and learned to manage software changes using Git and GitHub.",
    ],
  },
  {
    title: "Android App Development Intern", company: "We Connect", location: "Vehari · On-site", dates: "Jul 2024 - Sep 2024",
    details: [
      "Collaborated on mobile application tasks.",
      "Supported feature improvements, testing, and debugging.",
      "Helped refine performance and reliability while learning professional team workflows.",
    ],
  },
];

const certifications = [
  { title: "React JS for Beginners", provider: "Cursa" },
  { title: "React JS Complete", provider: "Cursa" },
  { title: "Node JS Beginner", provider: "Cursa" },
  { title: "Dart and Flutter: Mobile App Development", provider: "Udemy" },
  { title: "Mobile App Development with Flutter", provider: "Alison" },
  { title: "Machine Learning and AI coursework", provider: "Udemy" },
];

const strengths = ["Analytical Problem Solving", "Leadership", "Team Collaboration", "Self Motivation", "Discipline", "Ownership"];

export default function ResumePage() {
  return (
    <main className="inner-main page-shell resume-page resume-refresh">
      <section className="resume-hero">
        <div className="resume-identity">
          <span className="resume-monogram">MA</span>
          <div>
            <p className="section-index">Résumé / Web edition</p>
            <h1>Muhammad Abdullah</h1>
            <p className="lead">Full Stack Developer | React, React Native &amp; JavaScript</p>
          </div>
        </div>
        <a className="button primary resume-download" href="/Muhammad-Abdullah-CV.pdf" download><Download size={17} /> Download CV</a>
      </section>

      <section className="resume-contact-strip" aria-label="Contact information">
        <span><MapPin size={16} /> Lahore, Punjab, Pakistan</span>
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
              {certifications.map((certificate) => <article key={certificate.title}><strong>{certificate.title}</strong><span>{certificate.provider}</span></article>)}
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
            <p>I am a Computer Science graduate with Web and App development internship experience and a portfolio of 40+ academic and personal projects. Combines strong programming fundamentals with hands on experience building web, mobile, and AI enabled applications. Brings analytical problem solving, leadership qualities and a collaborative approach to technical challenges. Self motivated and disciplined, with a consistent work ethic, a strong sense of ownership and a commitment to turning ideas into practical user focused solutions.</p>
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
                <article key={project.title}><span>0{index + 1}</span><div><h3>{project.title}</h3><p>{project.text}</p><p className="resume-project-stack">{project.stack}</p></div></article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
