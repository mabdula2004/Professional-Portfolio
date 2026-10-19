import type { Metadata } from "next";
import { ArrowUpRight, Code2 } from "lucide-react";
import { RepositoryScrollStack } from "@/components/repository-scroll-stack";
import { githubRepositories } from "@/lib/portfolio-data";
import activity from "@/lib/github-repository-activity.json";
import { sortRepositories } from "@/lib/repository-order";

export const metadata: Metadata = { title: "Projects" };
const repositories = sortRepositories(githubRepositories, activity);

export default function ProjectsPage() {
  return (
    <main className="inner-main page-shell projects-page">
      <section className="page-intro projects-intro">
        <p className="section-index">Project Portfolio</p>
        <h1>Development Projects</h1>
        <p className="lead narrow">Academic and personal projects in web development, mobile applications, databases and AI integration. Explore the projects and their source repositories.</p>
      </section>
      <RepositoryScrollStack repositories={repositories} />
      <a className="github-archive-link" href="https://github.com/mabdula2004?tab=repositories" target="_blank" rel="noreferrer"><Code2 size={17} /> View GitHub Profile <ArrowUpRight size={15} /></a>
    </main>
  );
}
