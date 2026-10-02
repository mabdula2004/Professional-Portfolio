export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: string;
  year: string;
  stack: string[];
  highlights: string[];
  github?: string;
  featured?: boolean;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "fyp-intelligence-portal",
    title: "AI-Powered FYP Suggestion & Submission Portal",
    eyebrow: "Final Year Project",
    summary:
      "A centralized academic platform that studies prior projects to suggest stronger, less repetitive final-year project directions.",
    description:
      "Designed for students and supervisors at COMSATS University Islamabad, Vehari Campus. The platform brings project discovery, submission, supervision and quality checks into one workflow, using previous source code and project documents as context for smarter suggestions.",
    status: "Repository publishing soon",
    year: "2026",
    stack: ["React", "AI integration", "Database", "Authentication"],
    highlights: [
      "Novel project-direction suggestions informed by prior academic work",
      "Centralized student and supervisor submission workflow",
      "Automated document and project-quality checks",
      "Designed to reduce duplicate or overly similar project ideas",
    ],
    featured: true,
    accent: "violet",
  },
  {
    slug: "velora-store",
    title: "VELORA Fashion Store",
    eyebrow: "React Commerce Experience",
    summary:
      "A premium responsive shopping interface with real product discovery, wishlist, bag, checkout validation and accessible interaction states.",
    description:
      "VELORA is a production-style frontend demonstration built to explore reusable React architecture and realistic commerce interactions. The experience includes dedicated collections, live search, filtering, sorting, product variants and persistent browser-local shopping state.",
    status: "Frontend complete",
    year: "2026",
    stack: ["React", "JavaScript", "Vite", "Responsive UI"],
    highlights: [
      "Dedicated men, women and new-arrivals routes",
      "Search, filtering, sorting and product-variant logic",
      "Wishlist, shopping bag and checkout validation",
      "Accessible labels, keyboard focus and reduced-motion support",
    ],
    github: "https://github.com/mabdula2004/velora-react-shoping-store",
    featured: true,
    accent: "amber",
  },
  {
    slug: "roadwatch",
    title: "RoadWatch",
    eyebrow: "TypeScript Application",
    summary:
      "A TypeScript-based product project currently being prepared as a complete portfolio case study.",
    description:
      "RoadWatch is an active project built with a modern TypeScript interface stack. Its final problem statement, feature set, user workflow and project outcomes will be documented here after the project brief is confirmed.",
    status: "Case study details coming soon",
    year: "2026",
    stack: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    highlights: [
      "Modern TypeScript application structure",
      "Responsive component-based interface",
      "Active development with iterative Git history",
      "Full feature breakdown to be added from the confirmed brief",
    ],
    github: "https://github.com/mabdula2004/watchRoad",
    featured: true,
    accent: "green",
  },
  {
    slug: "student-learning-platform",
    title: "Student Learning Platform",
    eyebrow: "Flutter + Firebase",
    summary:
      "A role-based academic application connecting students and teachers through courses, announcements, approvals and performance tracking.",
    description:
      "A mobile learning system with separate student and teacher experiences. It uses Firebase authentication and data storage for role-aware access, course management, announcements, student requests and topic-level learning progress.",
    status: "Academic project",
    year: "2024",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore"],
    highlights: [
      "Separate student and teacher workflows",
      "Firebase authentication with role-based access",
      "Course requests, approvals and announcements",
      "Topic-level progress and student performance views",
    ],
    github: "https://github.com/mabdula2004/STUDENT-side",
    accent: "cyan",
  },
  {
    slug: "david-ai-assistant",
    title: "David AI Voice Assistant",
    eyebrow: "Python Automation",
    summary:
      "A voice-driven desktop assistant that routes natural-language commands to search, media, messaging and operating-system actions.",
    description:
      "David combines speech recognition, text-to-speech, a Flask command layer and desktop automation. It supports information retrieval, media control, screenshots, camera access and common system tasks through a voice-first interface.",
    status: "Completed project",
    year: "2025",
    stack: ["Python", "Flask", "REST API", "Automation"],
    highlights: [
      "Wake-word and voice-command workflow",
      "Flask API connecting interface and command router",
      "Media, browser and desktop application controls",
      "Listening, processing and speaking interface states",
    ],
    accent: "green",
  },
  {
    slug: "react-30-day-challenge",
    title: "React 30-Day Portfolio Challenge",
    eyebrow: "Active Build Series",
    summary:
      "A structured learning series focused on shipping polished React interfaces and progressively adding logic, mobile and full-stack capabilities.",
    description:
      "An active repository documenting consistent project-based learning. Early builds focus on reusable React interfaces and responsive design; later work expands into JavaScript logic, React Native and Supabase-backed application features.",
    status: "In progress",
    year: "2026",
    stack: ["React", "JavaScript", "Responsive UI", "Supabase"],
    highlights: [
      "Project-based progression from UI foundations to application logic",
      "Reusable component and responsive layout practice",
      "Light and dark themes where appropriate",
      "Public Git history documenting continued development",
    ],
    github: "https://github.com/mabdula2004/react-30-day-portfolio",
    accent: "lime",
  },
];

export const coreSkills = [
  { group: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive UI"] },
  { group: "Backend & data", items: ["Firebase", "Supabase", "PostgreSQL", "MySQL", "Authentication", "REST APIs"] },
  { group: "AI & programming", items: ["AI integrations", "Python", "C++", "Gemini API", "Sentence Transformers"] },
  { group: "Tools", items: ["Git", "GitHub", "Vite", "VS Code", "WordPress", "SEO"] },
];
