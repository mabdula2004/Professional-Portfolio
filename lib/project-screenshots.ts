export type ProjectScreenshot = { src: string; label: string; fit?: "contain" | "cover" };

const fypScreens: [string, string][] = [
  ["student-dashboard", "Student · Dashboard"], ["student-browse-projects", "Student · Project discovery"],
  ["student-group", "Student · Groups"], ["student-ai-suggestions", "Student · Recommendations"],
  ["student-ai-chatbot", "Student · AI assistant"], ["supervisor-dashboard", "Supervisor · Dashboard"],
  ["supervisor-lock-requests", "Supervisor · Project requests"], ["supervisor-student-monitoring", "Supervisor · Progress"],
  ["supervisor-milestone-review", "Supervisor · Milestones"], ["supervisor-project-upload", "Supervisor · Project upload"],
  ["admin-dashboard", "Admin · Dashboard"], ["admin-students", "Admin · Students"],
  ["admin-supervisors", "Admin · Supervisors"], ["admin-add-supervisor", "Admin · Onboarding"],
  ["admin-system-config", "Admin · Configuration"],
];
const medoraScreens: [string, string][] = [
  ["live-home", "Public · Homepage"], ["patient-overview", "Patient · Overview"],
  ["doctor-overview", "Doctor · Overview"], ["admin-overview", "Admin · Overview"],
  ["live-doctors", "Public · Doctor directory"], ["patient-booking", "Patient · Appointment booking"],
  ["patient-records", "Patient · Records"], ["patient-messages", "Patient · Messages"],
  ["doctor-appointments", "Doctor · Appointments"], ["doctor-patients", "Doctor · Patients"],
  ["doctor-schedule", "Doctor · Schedule"], ["doctor-earnings", "Doctor · Earnings"],
  ["admin-doctors", "Admin · Doctor management"], ["admin-appointments", "Admin · Appointments"],
  ["admin-analytics", "Admin · Analytics"], ["admin-support", "Admin · Support"], ["admin-audit", "Admin · Audit activity"],
];
export const projectScreenshots: Record<string, { label: string; screens: ProjectScreenshot[] }> = {
  "fyp-intelligence-portal": { label: "FYP Intelligence Portal", screens: fypScreens.map(([file, label]) => ({ src: `/projects/fyp/${file}.png`, label })) },
  "medora-healthcare": { label: "Medora Healthcare", screens: medoraScreens.map(([file, label]) => ({ src: `/projects/medora/${file}.jpg`, label })) },
  "hirely-job-portal": { label: "Hirely Job Portal", screens: [
    { src: "/projects/hirely/home.png", label: "Public · Homepage" },
    { src: "/projects/hirely/dashboard.png", label: "Candidate · Dashboard" },
    { src: "/projects/hirely/jobs.png", label: "Candidate · Job discovery" },
    { src: "/projects/hirely/mobile.png", label: "Mobile · Homepage", fit: "contain" },
  ] },
  "velora-store": { label: "VELORA Fashion Store", screens: [{ src: "/projects/velora/home.jpg", label: "Storefront · Homepage" }] },
};
