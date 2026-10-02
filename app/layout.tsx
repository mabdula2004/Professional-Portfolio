import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Abdullah — Full-Stack Developer",
    template: "%s — Muhammad Abdullah",
  },
  description: "Full-stack developer building modern React and TypeScript applications with Firebase, Supabase and AI integrations.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased"><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
