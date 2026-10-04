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
  problem?: string;
  purpose?: string;
  role?: string;
  technologies?: string[];
  technicalDecisions?: string[];
  verification?: string[];
  limitations?: string[];
  futureWork?: string[];
  github?: string;
  live?: string;
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
      "Built for COMSATS University Islamabad, Vehari Campus, this role-aware portal connects project discovery, group formation, project locking, milestone submission and academic supervision. Students receive skill-aware recommendations and AI assistance, while supervisors can import project documents, review requests and monitor progress from a dedicated workspace.",
    status: "Public repository · In development",
    year: "2026",
    stack: ["React", "AI integration", "Database", "Authentication"],
    highlights: [
      "Protected student, supervisor and administrator workspaces with university-domain authentication",
      "Student profiles, three-member groups, project discovery and supervisor-approved locking",
      "PDF-assisted project import, editable extraction and five-phase milestone tracking",
      "Skill-aware recommendations, contextual AI assistance and semantic similarity checks",
    ],
    problem: "FYP selection and supervision can become fragmented across documents, messages and manual approvals. Students need a clearer way to find ideas that match their skills without repeating earlier work, while supervisors need one place to publish projects, resolve selection requests and follow each group's progress.",
    purpose: "Create one academic workflow where students can build a group, discover or refine a suitable project, request approval and submit milestones while supervisors and administrators retain control over project quality, access and final decisions.",
    role: "Full-stack product design and implementation across the React interface, Firebase authentication and data layer, and Python/FastAPI AI services.",
    technologies: ["React", "Vite", "Firebase Auth", "Cloud Firestore", "FastAPI", "Gemini API", "Sentence Transformers", "Tailwind CSS"],
    technicalDecisions: [
      "React, React Router and Zustand organize protected student, supervisor and administrator workspaces without mixing role-specific navigation.",
      "Firebase Authentication, Firestore security rules and real-time listeners support university-domain access and live project, group, request, milestone and notification state.",
      "FastAPI separates document extraction, OCR, semantic similarity, learning-roadmap generation and administrative user operations from the React client.",
      "The all-MiniLM-L6-v2 sentence-transformer model and cosine similarity compare project titles, descriptions and features to surface possible overlap.",
      "Gemini supports recommendations, PDF structuring, idea refinement and roadmaps, with a local skill-and-domain scoring fallback when AI recommendations are unavailable.",
    ],
    verification: [
      "Role guards and dedicated routes are implemented for student, supervisor and administrator journeys.",
      "Group creation, invite-code joining, a three-member limit, project lock requests and approval or rejection flows are connected through Firestore.",
      "Approved projects generate a five-phase milestone plan with submission links, supervisor feedback and notifications.",
      "FastAPI endpoints implement PDF text extraction with OCR fallback, semantic similarity checks and skill-gap roadmap generation.",
    ],
    limitations: [
      "The repository currently represents an in-development prototype rather than a production deployment.",
      "Automated test coverage, continuous integration and complete deployment documentation are not yet included.",
      "AI and document-storage operations need final server-side security hardening before a public release.",
    ],
    futureWork: [
      "Move all generative-AI and file-storage operations behind authenticated server-side endpoints.",
      "Add strict response-schema validation, stronger error handling and auditable supervisor actions.",
      "Build unit, integration and end-to-end tests for authentication, permissions, locking and milestone workflows.",
      "Complete production deployment, observability, setup documentation and final interface screenshots.",
    ],
    github: "https://github.com/mabdula2004/AI-powered-FYP-Suggestion-Submission-Portal",
    live: "https://fyp-proj-module.vercel.app/login",
    featured: true,
    featuredOrder: 1,
    accent: "violet",
  },
  {
    slug: "medora-healthcare",
    title: "Medora Healthcare Platform",
    eyebrow: "Multi-Role Full-Stack System",
    summary:
      "A full-stack healthcare appointment platform unifying patient care, doctor workflows and administrative operations in one role-aware product.",
    description:
      "Medora is a React and Supabase healthcare workflow system built as one application with dedicated patient, doctor and admin workspaces. It combines clinician discovery and appointment booking with clinical records, prescriptions, messaging, availability, verification and platform operations, backed by PostgreSQL, Row Level Security and protected server-side workflows.",
    status: "Full-stack project · Tested",
    year: "2026",
    stack: ["React", "Supabase", "PostgreSQL", "Playwright"],
    highlights: [
      "Patient, doctor and admin workspaces in one role-aware application",
      "Server-validated appointment booking, pricing and slot protection",
      "Supabase Auth, PostgreSQL and Row Level Security authorization",
      "Responsive end-to-end workflows with automated Playwright QA",
    ],
    problem: "Healthcare appointment workflows often become fragmented across patient booking, doctor availability and administrative verification.",
    purpose: "Create one role-aware product where patients, doctors and administrators can complete their work without losing context between separate systems.",
    role: "Full-stack design and development across the React interface, Supabase data model, authentication and protected workflows.",
    technicalDecisions: ["Dedicated workspaces for patient, doctor and admin roles", "PostgreSQL and Row Level Security for protected data access", "Server-validated booking logic and automated Playwright checks"],
    futureWork: ["Expand notification and communication workflows", "Improve analytics for doctors and administrators", "Prepare a production deployment and monitored test environment"],
    github: "https://github.com/mabdula2004/Multi-Role-Healthcare-Appointment-Management",
    featured: true,
    featuredOrder: 2,
    accent: "cyan",
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
    problem: "Fashion storefronts can look polished while still making discovery, selection and checkout feel disconnected or difficult to use.",
    purpose: "Demonstrate a cohesive React commerce experience with realistic browsing and shopping interactions across responsive screens.",
    role: "Frontend architecture, responsive interface development and product interaction design.",
    technicalDecisions: ["Reusable React components across collections and product flows", "Browser-local persistence for wishlist and bag state", "Accessible focus, labels and reduced-motion behavior"],
    futureWork: ["Connect production-ready authentication and backend data", "Add payment-provider integration", "Publish final performance and accessibility results"],
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
    problem: "Road-safety reporting needs a mobile experience that is fast, clear and reliable enough to support real-world use.",
    purpose: "Develop and validate the core mobile experience before connecting the completed design to the prepared backend services.",
    role: "Product design, React Native interface implementation and proof-of-concept validation.",
    technicalDecisions: ["React Native with Expo for a focused cross-platform workflow", "Private development while implementation and testing continue", "Proof of concept used to validate the main product direction"],
    futureWork: ["Integrate the completed interface with the prepared Supabase backend", "Run full workflow and device testing after integration", "Publish a wider case study only when the product is ready"],
    private: true,
    featured: true,
    featuredOrder: 3,
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
    problem: "Tutorial-based learning can create isolated knowledge without showing whether concepts can be applied consistently in real interfaces.",
    purpose: "Turn a structured learning roadmap into a visible series of shipped React builds that documents progress and practical application.",
    role: "Independent planning, interface development, iteration and public documentation.",
    technicalDecisions: ["Progressive build scope from interface fundamentals to application logic", "Reusable components and responsive layout practice", "Public Git history used as a transparent learning record"],
    futureWork: ["Complete the remaining challenge projects", "Add more TypeScript and React Native builds", "Introduce deeper Supabase-backed application workflows"],
    github: "https://github.com/mabdula2004/react-30-day-portfolio",
    featured: true,
    featuredOrder: 4,
    accent: "lime",
  },
  {
    slug: "roamly-travel-booking",
    title: "Roamly Travel Booking",
    eyebrow: "Full-Stack Travel Experience",
    summary:
      "An editorial travel discovery and booking product with live catalog data, saved journeys and secure server-calculated bookings.",
    description:
      "Roamly combines an image-led React booking experience with a dedicated Supabase backend. Visitors can search and filter curated journeys, while authenticated users can save trips, create bookings and review booking history. PostgreSQL functions validate departure dates and calculate authoritative pricing on the server.",
    status: "Full-stack project",
    year: "2026",
    stack: ["React", "Supabase", "PostgreSQL", "Playwright"],
    highlights: [
      "Responsive journey discovery, filtering and booking flows",
      "Supabase authentication and owner-protected saved journeys",
      "Database-calculated totals through a secure booking function",
      "Desktop, tablet and mobile interaction testing with Playwright",
    ],
    github: "https://github.com/mabdula2004/Travel-Booking-Application",
    accent: "green",
  },
  {
    slug: "ember-restaurant-ordering",
    title: "EMBER° Restaurant Ordering",
    eyebrow: "Full-Stack Ordering Experience",
    summary:
      "A premium responsive restaurant storefront with a live menu, product discovery, cart interactions and a secure Supabase data model.",
    description:
      "EMBER° pairs an editorial restaurant interface with Supabase-backed menu and category data. The customer experience includes search, filtering and a calculated cart, while the PostgreSQL schema provides protected profiles, favorites, orders and order items ready for authenticated workflows.",
    status: "Full-stack project",
    year: "2026",
    stack: ["React", "Supabase", "PostgreSQL", "Responsive UI"],
    highlights: [
      "Live Supabase menu and category data",
      "Search, category filtering and interactive cart calculations",
      "Row Level Security for user-owned profile and order data",
      "Production-oriented relational model for ordering workflows",
    ],
    github: "https://github.com/mabdula2004/Restaurant-Ordering-Application",
    accent: "amber",
  },
  {
    slug: "atelier-luxury-commerce",
    title: "ATELIER 01 Luxury Commerce",
    eyebrow: "Full-Stack Commerce Platform",
    summary:
      "A client-ready luxury fashion store with authenticated shopping, persistent cart and wishlist state, checkout and account management.",
    description:
      "ATELIER 01 translates editorial fashion direction into a complete React commerce experience backed by Supabase. It includes a database-driven catalog, product discovery, authentication, persistent cart and wishlist data, profile and avatar management, order creation and responsive end-to-end QA.",
    status: "Full-stack project · Tested",
    year: "2026",
    stack: ["React", "Supabase", "PostgreSQL", "Playwright"],
    highlights: [
      "Supabase-backed catalog, authentication, cart and wishlist",
      "Checkout creates protected orders and line-item records",
      "Private account, profile, avatar storage and order history",
      "Row Level Security plus automated desktop and mobile QA",
    ],
    github: "https://github.com/mabdula2004/luxury-Ecommerce-with-Backend-",
    accent: "violet",
  },
];

export const coreSkills = [
  { group: "Frontend", items: ["React", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Responsive UI"] },
  { group: "Backend & data", items: ["Firebase", "Supabase", "PostgreSQL", "MySQL", "Authentication", "REST APIs"] },
  { group: "AI & programming", items: ["AI integrations", "Python", "C++", "Gemini API", "Sentence Transformers"] },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"] },
];

export const githubRepositories: GitHubRepository[] = [
  { name: "Medora Healthcare Platform", repository: "Multi-Role-Healthcare-Appointment-Management", category: "React + Supabase", description: "A multi-role healthcare system for patients, doctors and administrators." },
  { name: "Roamly Travel Booking", repository: "Travel-Booking-Application", category: "React + Supabase", description: "An editorial travel discovery and secure booking experience." },
  { name: "EMBER° Restaurant Ordering", repository: "Restaurant-Ordering-Application", category: "React + Supabase", description: "A full-stack restaurant storefront with live menu and ordering data." },
  { name: "ATELIER 01 Luxury Commerce", repository: "luxury-Ecommerce-with-Backend-", category: "React + Supabase", description: "A luxury commerce platform with authentication, checkout and account workflows." },
  { name: "AI-Powered FYP Portal", repository: "AI-powered-FYP-Suggestion-Submission-Portal", category: "React + AI", description: "A final-year project suggestion and submission workflow for students and supervisors." },
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
  { name: "Professional Portfolio", repository: "Professional-Portfolio", category: "React Portfolio", description: "The source repository for this multi-page professional portfolio and case-study system." },
];
