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
  dashboard?: string;
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
      "An academic project management platform with AI-assisted topic recommendations, project submissions and supervision workflows.",
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
    role: "Full-stack application design and implementation across the React interface, Firebase authentication and data layer, and Python/FastAPI AI services.",
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
      "A healthcare appointment management application with dedicated patient, doctor and administrator workflows.",
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
    purpose: "Provide a role-based application for appointment scheduling, clinical workflows and administrative management.",
    role: "Full-stack design and development across the React interface, Supabase data model, authentication and protected workflows.",
    technicalDecisions: ["Dedicated workspaces for patient, doctor and admin roles", "PostgreSQL and Row Level Security for protected data access", "Server-validated booking logic and automated Playwright checks"],
    futureWork: ["Expand notification and communication workflows", "Improve analytics for doctors and administrators", "Prepare a production deployment and monitored test environment"],
    github: "https://github.com/mabdula2004/Multi-Role-Healthcare-Appointment-Management",
    live: "https://medora-healthcare-appointment-manag.vercel.app/",
    featured: true,
    featuredOrder: 2,
    accent: "cyan",
  },
  {
    slug: "velora-store",
    title: "VELORA Fashion Store",
    eyebrow: "React E-Commerce Application",
    summary:
      "A responsive React shopping application with product search, wishlist and cart management, checkout validation and accessible controls.",
    description:
      "VELORA is a frontend project demonstrating reusable React components and e-commerce functionality. It includes collection pages, search, filtering, sorting, product variants and persistent browser-local shopping state.",
    status: "Frontend complete",
    year: "2026",
    stack: ["React", "JavaScript", "Vite", "Responsive UI"],
    highlights: [
      "Dedicated men, women and new-arrivals routes",
      "Search, filtering, sorting and product-variant logic",
      "Wishlist, shopping bag and checkout validation",
      "Accessible labels, keyboard focus and reduced-motion support",
    ],
    problem: "Online shopping interfaces require consistent product discovery, selection and checkout workflows across screen sizes.",
    purpose: "Demonstrate React component architecture, state management and responsive e-commerce workflows.",
    role: "Frontend architecture, responsive interface development and interaction design.",
    technicalDecisions: ["Reusable React components across collections and product flows", "Browser-local persistence for wishlist and bag state", "Accessible focus, labels and reduced-motion behavior"],
    futureWork: ["Connect production-ready authentication and backend data", "Add payment-provider integration", "Publish final performance and accessibility results"],
    github: "https://github.com/mabdula2004/velora-react-shoping-store",
    accent: "amber",
  },
  {
    slug: "roadwatch",
    title: "RoadWatch",
    eyebrow: "Confidential Project",
    summary: "Private project. Details are not publicly shared.",
    description: "Project information is confidential.",
    status: "Private",
    year: "2026",
    stack: [],
    highlights: [],
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
    slug: "hirely-job-portal",
    title: "Hirely — Multi-Role Job Portal",
    eyebrow: "React Recruitment Platform",
    summary:
      "A recruitment platform demo with candidate, recruiter and administrator workspaces for job discovery, application tracking and hiring management.",
    description:
      "Hirely is a React and JavaScript frontend project that organizes recruitment workflows into three dedicated workspaces. Candidates explore jobs and manage applications, recruiters review applicants and coordinate hiring, and administrators oversee platform operations. The current version uses synthetic data for interactive product demonstrations.",
    status: "Interactive frontend demo",
    year: "2026",
    stack: ["React", "JavaScript", "Framer Motion", "Vite"],
    highlights: [
      "Candidate workspace for job discovery, saved jobs, applications, interviews and career profiles",
      "Recruiter workspace for job management, applicant pipelines, talent search and hiring analytics",
      "Administrator workspace for user management, company verification, moderation and audit logs",
      "Light and dark themes, mobile navigation and animated workspace transitions",
    ],
    problem: "Recruitment involves different information and tasks for job seekers, recruiters and administrators. A shared interface needs to keep each role's navigation and workflows clear without mixing unrelated operations.",
    purpose: "Demonstrate a multi-role recruitment interface with distinct candidate, recruiter and administrator journeys, reusable React components and consistent interaction patterns.",
    role: "Frontend architecture, React component development and interaction design for the candidate, recruiter and administrator workspaces.",
    technologies: ["React 18", "JavaScript", "Vite", "Framer Motion", "Lucide React", "CSS"],
    technicalDecisions: [
      "Separate workspace layouts and page modules organize candidate, recruiter and administrator functionality.",
      "Reusable components provide consistent job cards, tables, status indicators, settings and modal dialogs.",
      "React state manages navigation, role selection and interface interactions; localStorage preserves theme preferences and saved jobs.",
      "Framer Motion provides page transitions and notifications, alongside light and dark themes and mobile navigation.",
    ],
    verification: [
      "Dedicated page modules implement candidate, recruiter and administrator demo workspaces.",
      "Public job discovery includes search, work-mode filtering and saved-job state.",
      "Shared components implement job cards, applicant-pipeline summaries, analytics displays and demo dialogs.",
    ],
    limitations: [
      "Jobs, companies, applications, messages and analytics currently use synthetic demonstration data.",
      "Role selection is a demo interaction; production authentication, authorization and backend persistence are not implemented in the current repository.",
    ],
    futureWork: [
      "Connect persistent job, company and application data to a backend service.",
      "Implement authenticated accounts and server-enforced access for each role.",
      "Integrate real application submissions, interview coordination and messaging.",
    ],
    github: "https://github.com/mabdula2004/hirely-multi-role-job-hunt-portal",
    live: "https://hirely-job-portal-delta.vercel.app",
    featured: true,
    featuredOrder: 4,
    accent: "lime",
  },
  {
    slug: "roamly-travel-booking",
    title: "Roamly Travel Booking",
    eyebrow: "Full-Stack Travel Application",
    summary:
      "A travel booking application with database-backed listings, saved trips and server-validated booking calculations.",
    description:
      "Roamly is a React travel booking application with a dedicated Supabase backend. Visitors can search and filter curated journeys, while authenticated users can save trips, create bookings and review booking history. PostgreSQL functions validate departure dates and calculate authoritative pricing on the server.",
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
    eyebrow: "React Restaurant Application",
    summary:
      "A React restaurant application with menu discovery, dish customisation, persistent favourites and bag, and a complete demo checkout experience.",
    description:
      "EMBER° brings menu browsing, configurable dishes, delivery or collection preferences and guest checkout into one React application. It integrates a Supabase client for public menu data and authentication, with a sample catalogue fallback. Demo orders, receipts and tracking are stored in the browser; the deployed preview does not process payments or send orders to a restaurant.",
    status: "Live customer preview · Demo checkout",
    year: "2026",
    stack: ["React", "JavaScript", "Supabase", "Vite"],
    technologies: ["React", "JavaScript", "React Router", "Vite", "Supabase", "CSS", "Lucide Icons"],
    highlights: [
      "Searchable menu with category, dietary and price-sorting controls",
      "Dish pages with portions, extras, instructions and quantity selection",
      "Persistent saved dishes and shopping bag with calculated GBP totals",
      "Delivery or collection preferences, kitchen selection and discount validation",
      "Guest checkout, itemised receipts, order history and interactive tracking demonstrations",
      "Account screens, restaurant story, locations and accessible customer navigation",
    ],
    problem: "Restaurant ordering interfaces need to keep menu discovery, dish options, delivery preferences and checkout totals consistent throughout the customer journey.",
    purpose: "Demonstrate a complete React customer ordering workflow with reusable components, persistent state, validated pricing and a clear separation between preview behaviour and live backend services.",
    role: "React interface development, routing, cart and pricing logic, Supabase client integration and deployment.",
    technicalDecisions: [
      "React Router separates menu, dish, checkout, account and order routes within one application.",
      "Browser storage preserves favourites, configured bag items and demo order snapshots across visits.",
      "Shared pricing logic calculates portions, extras, discounts and delivery charges in British pounds.",
      "A sample catalogue keeps the customer preview usable when the Supabase menu service is unavailable.",
      "Connected authentication is kept distinct from the browser-local demo profile and checkout.",
    ],
    verification: [
      "Captured eight screens from the deployed customer application, including menu, dish configuration, shopping bag and checkout.",
      "Confirmed that saving a dish updates the favourites page and adding an item updates the shopping bag.",
      "Verified the checkout preview displays the selected dish, delivery charge and calculated GBP total.",
    ],
    limitations: [
      "Checkout saves demo orders in browser storage; payment processing and restaurant dispatch are not connected.",
      "Tracking is an interactive preview rather than a live delivery service.",
      "Menu availability and connected authentication depend on the Supabase service; a fallback menu remains available.",
    ],
    futureWork: [
      "Connect authenticated server-persisted orders and restaurant fulfilment workflows.",
      "Integrate payment processing and live order-status notifications.",
      "Replace concept kitchens and sample menu information with verified restaurant data.",
    ],
    github: "https://github.com/mabdula2004/Restaurant-Ordering-Application",
    live: "https://ember-restaurant-ordering.vercel.app/",
    featured: true,
    featuredOrder: 5,
    accent: "amber",
  },
  {
    slug: "atelier-luxury-commerce",
    title: "ATELIER 01 Luxury Commerce",
    eyebrow: "Full-Stack Commerce Platform",
    summary:
      "An e-commerce application with authentication, persistent cart and wishlist data, checkout and account management.",
    description:
      "ATELIER 01 is a React e-commerce project backed by Supabase. It includes a database-driven catalog, product discovery, authentication, persistent cart and wishlist data, profile and avatar management, order creation and responsive end-to-end QA.",
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
  { group: "Frontend Development", items: ["React", "React Native", "JavaScript", "TypeScript", "HTML", "CSS"] },
  { group: "Backend & Databases", items: ["Firebase", "Supabase", "PostgreSQL", "MySQL", "Authentication", "REST APIs"] },
  { group: "Programming & AI Integration", items: ["Python", "AI Integration"] },
  { group: "Development Tools", items: ["Git", "GitHub", "VS Code", "Android Studio", "Google Colab"] },
];

export const githubRepositories: GitHubRepository[] = [
  { name: "Medora Healthcare Platform", repository: "Multi-Role-Healthcare-Appointment-Management", category: "React + Supabase", description: "A multi-role healthcare system for patients, doctors and administrators." },
  { name: "Roamly Travel Booking", repository: "Travel-Booking-Application", category: "React + Supabase", description: "A travel application with destination search, saved trips and booking workflows." },
  { name: "EMBER° Restaurant Ordering", repository: "Restaurant-Ordering-Application", category: "React + Supabase", description: "A React restaurant application with menu discovery, configurable dishes and demo checkout." },
  { name: "ATELIER 01 Luxury Commerce", repository: "luxury-Ecommerce-with-Backend-", category: "React + Supabase", description: "A luxury commerce platform with authentication, checkout and account workflows." },
  { name: "AI-Powered FYP Portal", repository: "AI-powered-FYP-Suggestion-Submission-Portal", category: "React + AI", description: "A final-year project suggestion and submission workflow for students and supervisors." },
  { name: "My Projects", repository: "My-Projects", category: "Project Collection", description: "A collection of development exercises and project experiments." },
  { name: "Modern Login UI Interface", repository: "modern_login_ui_interface", category: "Interface Design", description: "A focused authentication interface and responsive layout study." },
  { name: "Modern Login UI", repository: "modern_login_ui", category: "Interface Design", description: "A reusable login interface project with responsive layouts." },
  { name: "UI App", repository: "ui_app", category: "Mobile UI", description: "A mobile application demonstrating interface layout and component composition." },
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
  { name: "Watch UI Project", repository: "watch-steroid", category: "Interface Design", description: "A watch interface design and frontend development project." },
  { name: "E-Commerce", repository: "E-Commerce", category: "Commerce", description: "An e-commerce interface exploring product and shopping workflows." },
  { name: "Wallpaper App", repository: "wallpaper_app", category: "Mobile App", description: "A mobile experience for browsing and presenting wallpapers." },
  { name: "Fitness App", repository: "Fitness_App", category: "Health & Fitness", description: "A fitness-oriented application and mobile interface exercise." },
  { name: "HTML & CSS", repository: "HTML_CSS", category: "Frontend Foundations", description: "A collection of responsive web layouts and frontend practice." },
  { name: "International Languages", repository: "internation_languages", category: "Education", description: "A language-learning application and interface concept." },
  { name: "React Journey", repository: "React_journey", category: "React", description: "Hands-on React exercises documenting continued frontend learning." },
  { name: "Hirely — Multi-Role Job Portal", repository: "hirely-multi-role-job-hunt-portal", category: "React + JavaScript", description: "A recruitment platform demo with candidate, recruiter and administrator workspaces." },
  { name: "React Learning Roadmap", repository: "react-learning-roadmap", category: "Learning", description: "A structured repository for React learning goals and progression." },
  { name: "VELORA Fashion Store", repository: "velora-react-shoping-store", category: "React Commerce", description: "A responsive React shopping application with product browsing and cart interactions." },
  { name: "Professional Portfolio", repository: "Professional-Portfolio", category: "React Portfolio", description: "The source repository for this multi-page professional portfolio and case-study system." },
];
