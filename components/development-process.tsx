import { ArrowRight, CheckCheck, ClipboardList, Code2, GitBranch, Layers3, MessagesSquare, Repeat2, Search } from "lucide-react";

const steps = [
  { title: "Understand the Problem", icon: Search, focus: "Requirements", text: "I identify the users, the problem they face and the constraints, then define what a successful solution needs to achieve." },
  { title: "Plan the Next Increment", icon: ClipboardList, focus: "Prioritisation", text: "I break the scope into manageable tasks, prioritise the essential workflow and set clear acceptance criteria for the next change." },
  { title: "Design the Solution", icon: Layers3, focus: "Interface & data", text: "I map user journeys, plan reusable components and structure the data and access rules before implementation." },
  { title: "Implement & Integrate", icon: Code2, focus: "Development", text: "I build the interface in small increments, connect authentication, databases and APIs, and use Git to track each change." },
  { title: "Test & Validate", icon: CheckCheck, focus: "Quality", text: "I check functionality, responsive behaviour, permissions and edge cases against the requirements, then resolve defects." },
  { title: "Review & Refine", icon: MessagesSquare, focus: "Feedback", text: "I review the working result, use feedback to improve the solution and carry the next priorities into another iteration." },
];

export function DevelopmentProcess() {
  return (
    <section className="section compact-section development-process" aria-labelledby="development-process-title">
      <div className="development-process-heading">
        <div className="section-heading about-section-heading">
          <p className="section-index">Development Approach</p>
          <h2 id="development-process-title">Problem Solving &amp; Implementation</h2>
          <p className="development-process-intro">I work from a clearly defined problem towards a practical solution through small implementation steps, validation and continuous refinement.</p>
        </div>
        <aside className="development-method" aria-label="Development method">
          <span className="development-method-label"><GitBranch size={15} aria-hidden="true" /> Agile-inspired</span>
          <h3>Iterative Development</h3>
          <p>Each increment produces something I can test and review. The findings guide the next improvement.</p>
          <div className="development-cycle" aria-label="Understand, build, validate, refine and repeat">
            <span>Understand</span><ArrowRight aria-hidden="true" /><span>Build</span><ArrowRight aria-hidden="true" /><span>Validate</span><ArrowRight aria-hidden="true" /><span>Refine</span>
          </div>
          <span className="development-feedback"><Repeat2 size={15} aria-hidden="true" /> Feedback informs the next iteration</span>
        </aside>
      </div>
      <ol className="development-steps">
        {steps.map(({ title, icon: Icon, focus, text }, index) => <li className="development-step" key={title}>
          <div className="development-step-top"><span className="development-step-icon"><Icon size={22} aria-hidden="true" /></span><span className="development-step-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></div>
          <p className="development-step-focus">{focus}</p>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>)}
      </ol>
    </section>
  );
}
