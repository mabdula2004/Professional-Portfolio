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
  private?: boolean;
  featured?: boolean;
  featuredOrder?: number;
  accent: string;
};

export type GitHubRepository = {
  name: string;
  repository: string;
  category: string;
  description: string;
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
    featuredOrder: 1,
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
    featuredOrder: 5,
    accent: "amber",
  },
  {
    slug: "roadwatch",
    title: "RoadWatch",
    eyebrow: "Private Mobile Project",
    summary:
      "A private React Native product currently in development. Technical details are available on request.",
    description:
      "RoadWatch is being developed privately while implementation and testing continue. A public case study will be released when the product is ready.",
    status: "Private · In Development",
    year: "2026",
    stack: ["React Native", "Expo", "TypeScript"],
    highlights: [
      "Private repository",
      "Interface design complete",
      "Implementation in progress",
      "Public case study planned after release",
    ],
    private: true,
    featured: true,
    featuredOrder: 2,
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
    featured: true,
    featuredOrder: 3,
    accent: "lime",
  },
];

export const coreSkills = [
  { group: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive UI"] },
  { group: "Backend & data", items: ["Firebase", "Supabase", "PostgreSQL", "MySQL", "Authentication", "REST APIs"] },
  { group: "AI & programming", items: ["AI integrations", "Python", "C++", "Gemini API", "Sentence Transformers"] },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"] },
];

export const githubRepositories: GitHubRepository[] = [
  { name: "My Projects", repository: "My-Projects", category: "Project Collection", description: "A collection of development exercises and project experiments." },
  { name: "Modern Login UI Interface", repository: "modern_login_ui_interface", category: "Interface Design", description: "A focused authentication interface and responsive layout study." },
  { name: "Modern Login UI", repository: "modern_login_ui", category: "Interface Design", description: "A polished login experience built as a reusable UI exercise." },
  { name: "UI App", repository: "ui_app", category: "Mobile UI", description: "A mobile application focused on practical interface composition." },
  { name: "Dice App", repository: "Dice-app", category: "Interactive App", description: "A compact interactive dice application and logic exercise." },
  { name: "Xylophone", repository: "Xylophone", category: "Mobile App", description: "An audio-based mobile application built around touch interaction." },
  { name: "Quiz App", repository: "Quiz_App", category: "Interactive App", description: "A question-and-answer application with score-oriented interaction." },
  { name: "GitHub Profile", repository: "mabdula2004", category: "Developer Profile", description: "The source repository behind my GitHub profile presentation." },
  { name: "BMI App", repository: "BMI-App", category: "Mobile Utility", description: "A health utility for calculating and presenting body-mass index." },
  { name: "Table Generator App", repository: "Table-Generator-App", category: "Learning Utility", description: "An interactive multiplication-table generator and practice project." },
  { name: "Weather App", repository: "Weather-App", category: "Mobile App", description: "A weather application presenting forecast information in a mobile UI." },
  { name: "Todo App", repository: "todo_app", category: "Productivity", description: "A compact task-management application for everyday planning." },
  { name: "Firebase CRUD", repository: "simple__read-write-update-delete__using__Firebase", category: "Firebase", description: "A focused create, read, update and delete workflow using Firebase." },
  { name: "Teacher App", repository: "Teacher", category: "Education", description: "The teacher-facing side of a role-based academic application." },
  { name: "Student Learning Platform", repository: "STUDENT-side", category: "Education", description: "The student-facing experience for courses, requests and progress." },
  { name: "Watch UI Project", repository: "watch-steroid", category: "Interface Design", description: "A watch-inspired interface and frontend presentation project." },
  { name: "E-Commerce", repository: "E-Commerce", category: "Commerce", description: "An e-commerce interface exploring product and shopping workflows." },
  { name: "Wallpaper App", repository: "wallpaper_app", category: "Mobile App", description: "A mobile experience for browsing and presenting wallpapers." },
  { name: "Fitness App", repository: "Fitness_App", category: "Health & Fitness", description: "A fitness-oriented application and mobile interface exercise." },
  { name: "HTML & CSS", repository: "HTML_CSS", category: "Frontend Foundations", description: "A collection of responsive web layouts and frontend practice." },
  { name: "International Languages", repository: "internation_languages", category: "Education", description: "A language-learning application and interface concept." },
  { name: "React Journey", repository: "React_journey", category: "React", description: "Hands-on React exercises documenting continued frontend learning." },
  { name: "React 30-Day Portfolio", repository: "react-30-day-portfolio", category: "React", description: "A public build series focused on consistent React practice." },
  { name: "React Learning Roadmap", repository: "react-learning-roadmap", category: "Learning", description: "A structured repository for React learning goals and progression." },
  { name: "VELORA Fashion Store", repository: "velora-react-shoping-store", category: "React Commerce", description: "A responsive React shopping experience with product interactions." },
];
