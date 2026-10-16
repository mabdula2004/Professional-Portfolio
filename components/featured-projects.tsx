/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, CalendarDays, Check, FileText, HeartPulse, Users, LockKeyhole, MapPin, ShieldCheck, ShoppingBag, Sparkles } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

function ProjectPreview({ slug }: { slug: string }) {
  if (slug === "fyp-intelligence-portal") {
    return <div className="showcase-browser">
      <div className="showcase-browser-bar"><span /><span /><span /><small>FYP Intelligence Portal</small><ShieldCheck size={14} /></div>
      <img src="/projects/fyp/student-dashboard.png" alt="" width={1918} height={837} loading="lazy" />
      <div className="showcase-fyp-note"><Sparkles size={18} /><div><strong>AI-assisted discovery</strong><small>Ideas · Recommendations · Milestones</small></div></div>
    </div>;
  }
  if (slug === "medora-healthcare") {
    return <div className="showcase-workflow medora-workflow">
      <div className="preview-heading"><span className="preview-symbol"><HeartPulse size={21} /></span><div><strong>Medora</strong><small>Connected healthcare workflows</small></div><ShieldCheck size={19} /></div>
      <div className="medora-path"><span>Patient</span><ArrowRight size={15} /><span>Appointment</span><ArrowRight size={15} /><span>Doctor</span></div>
      <div className="preview-floating"><CalendarDays size={21} /><div><strong>Appointment management</strong><small>Availability &amp; protected booking</small></div><Check size={17} /></div>
    </div>;
  }
  if (slug === "roadwatch") {
    return <div className="roadwatch-preview">
      <div className="roadwatch-phone"><span className="phone-speaker" /><div className="preview-heading"><MapPin size={17} /><strong>RoadWatch</strong></div><div className="phone-report"><FileText size={25} /><strong>Incident report</strong><span>Capture evidence</span><span>Add location</span><span>Submit report</span></div></div>
      <div className="roadwatch-note"><LockKeyhole size={20} /><strong>Mobile development</strong><small>React Native · Expo</small><span>Private project</span></div>
    </div>;
  }
  if (slug === "hirely-job-portal") {
    return <div className="showcase-workflow hirely-preview">
      <div className="preview-heading"><BriefcaseBusiness size={20} /><strong>Hirely</strong><span className="hirely-demo-label">Recruitment workspace</span></div>
      <div className="hirely-roles"><span><Users size={15} />Candidate</span><span><BriefcaseBusiness size={15} />Recruiter</span><span><ShieldCheck size={15} />Admin</span></div>
      <div className="hirely-pipeline"><span>Discover</span><ArrowRight size={13} /><span>Apply</span><ArrowRight size={13} /><span>Interview</span></div>
      <div className="hirely-preview-caption"><Check size={12} /> Job discovery &amp; application tracking</div>
    </div>;
  }
  return <div className="showcase-workflow velora-preview"><div className="preview-heading"><strong className="velora-wordmark">VELORA</strong><ShoppingBag size={20} /></div><div className="velora-collection"><div><span>V</span><small>Product discovery</small></div><div><ShoppingBag size={35} strokeWidth={1} /><small>Shopping experience</small></div></div><div className="velora-features"><span>Collections</span><span>Wishlist</span><span>Checkout</span></div></div>;
}

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return <div className="project-showcase">
    {projects.map((project, index) => <a
      className={`showcase-card accent-${project.accent}${index === 0 ? " showcase-primary" : ""}`}
      href={`/projects/${project.slug}`}
      key={project.slug}
    >
      <div className={`showcase-preview preview-${project.slug}`} aria-hidden="true"><ProjectPreview slug={project.slug} /></div>
      <div className="showcase-copy">
        <div className="showcase-meta"><span>{project.eyebrow}</span>{project.private ? <span className="showcase-private"><LockKeyhole size={12} /> Private</span> : <span>{project.year}</span>}</div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="showcase-tags" aria-label="Technologies">{project.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}</ul>
        <div className="showcase-footer"><span>{project.private ? "Project overview" : "Explore project"}</span><span className="showcase-arrow"><ArrowUpRight size={19} /></span></div>
      </div>
    </a>)}
  </div>;
}
