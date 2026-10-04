"use client";

/* eslint-disable @next/next/no-img-element */
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const screens = [
  { role: "Student", title: "Dashboard overview", src: "/projects/fyp/student-dashboard.png" },
  { role: "Student", title: "Project discovery", src: "/projects/fyp/student-browse-projects.png" },
  { role: "Student", title: "Group formation", src: "/projects/fyp/student-group.png" },
  { role: "Student", title: "AI project suggestions", src: "/projects/fyp/student-ai-suggestions.png" },
  { role: "Student", title: "Context-aware AI assistant", src: "/projects/fyp/student-ai-chatbot.png" },
  { role: "Supervisor", title: "Dashboard overview", src: "/projects/fyp/supervisor-dashboard.png" },
  { role: "Supervisor", title: "Project lock requests", src: "/projects/fyp/supervisor-lock-requests.png" },
  { role: "Supervisor", title: "Student progress monitoring", src: "/projects/fyp/supervisor-student-monitoring.png" },
  { role: "Supervisor", title: "Milestone review and feedback", src: "/projects/fyp/supervisor-milestone-review.png" },
  { role: "Supervisor", title: "Project document upload", src: "/projects/fyp/supervisor-project-upload.png" },
  { role: "Admin", title: "System dashboard", src: "/projects/fyp/admin-dashboard.png" },
  { role: "Admin", title: "Student management", src: "/projects/fyp/admin-students.png" },
  { role: "Admin", title: "Supervisor management", src: "/projects/fyp/admin-supervisors.png" },
  { role: "Admin", title: "Supervisor onboarding", src: "/projects/fyp/admin-add-supervisor.png" },
  { role: "Admin", title: "AI and workflow configuration", src: "/projects/fyp/admin-system-config.png" },
] as const;

export function FypHeroReel() {
  const [introComplete, setIntroComplete] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!introComplete || paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % screens.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [introComplete, paused]);

  const move = (direction: number) => {
    setIntroComplete(true);
    setActiveIndex((current) => (current + direction + screens.length) % screens.length);
  };

  const replayIntro = () => {
    setPaused(false);
    setIntroComplete(false);
    setActiveIndex(0);
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        void videoRef.current.play();
      }
    });
  };

  return (
    <div
      className="fyp-hero-reel"
      onMouseEnter={() => introComplete && setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`fyp-reel-intro ${introComplete ? "is-complete" : ""}`} aria-hidden={introComplete}>
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setIntroComplete(true)}
          onError={() => setIntroComplete(true)}
        >
          <source src="/projects/fyp/fyp-loading-intro.mp4" type="video/mp4" />
        </video>
        <div className="fyp-reel-intro-label"><span /> Product startup</div>
      </div>

      <div className={`fyp-reel-gallery ${introComplete ? "is-visible" : ""}`} aria-live="polite">
        {screens.map((screen, index) => (
          <figure className={`fyp-reel-slide ${activeIndex === index ? "is-active" : ""}`} key={screen.src} aria-hidden={activeIndex !== index}>
            <img className="fyp-reel-backdrop" src={screen.src} alt="" aria-hidden="true" />
            <img className="fyp-reel-screen" src={screen.src} alt={`${screen.role} portal — ${screen.title}`} />
          </figure>
        ))}

        <div className="fyp-reel-shade" />
        <div className="fyp-reel-caption">
          <span>{screens[activeIndex].role} workspace</span>
          <strong>{screens[activeIndex].title}</strong>
        </div>

        <div className="fyp-reel-controls">
          <button type="button" onClick={() => move(-1)} aria-label="Previous project screen"><ChevronLeft size={16} /></button>
          <button type="button" onClick={() => setPaused((current) => !current)} aria-label={paused ? "Resume project screens" : "Pause project screens"}>
            {paused ? <Play size={14} fill="currentColor" /> : <Pause size={14} fill="currentColor" />}
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next project screen"><ChevronRight size={16} /></button>
          <span>{String(activeIndex + 1).padStart(2, "0")} / {String(screens.length).padStart(2, "0")}</span>
          <button className="fyp-reel-replay" type="button" onClick={replayIntro} aria-label="Replay startup animation"><RotateCcw size={14} /> Intro</button>
        </div>
      </div>
    </div>
  );
}
