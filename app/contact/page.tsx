import type { Metadata } from "next";
import { ArrowUpRight, Code2, Layers3, Mail, MapPin, MessageCircle } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="inner-main page-shell contact-page">
      <section className="contact-hero">
        <div><p className="kicker"><span /> Available for opportunities</p><h1>Have a role, project or idea worth discussing?</h1><p className="lead">I&apos;m open to full-stack development opportunities, internships and collaborations where I can contribute, learn and build useful products.</p></div>
        <a className="mail-card" href="mailto:muhammadabdula7874747@gmail.com"><small>Email</small><strong>muhammadabdula7874747@gmail.com</strong><ArrowUpRight /></a>
      </section>
      <section className="contact-grid">
        <a href="mailto:muhammadabdula7874747@gmail.com"><Mail /><div><small>Direct</small><strong>Email</strong></div><ArrowUpRight /></a>
        <a href="https://wa.me/923202929447" target="_blank" rel="noreferrer"><MessageCircle /><div><small>WhatsApp</small><strong>+92 320 2929447</strong></div><ArrowUpRight /></a>
        <a href="https://www.linkedin.com/in/muhammad-abdullah-17jun" target="_blank" rel="noreferrer"><Layers3 /><div><small>Professional</small><strong>LinkedIn</strong></div><ArrowUpRight /></a>
        <a href="https://github.com/mabdula2004" target="_blank" rel="noreferrer"><Code2 /><div><small>Code</small><strong>GitHub</strong></div><ArrowUpRight /></a>
        <div><MapPin /><div><small>Location</small><strong>Lahore, Pakistan</strong></div></div>
      </section>
    </main>
  );
}
