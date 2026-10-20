import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { PortfolioThemeProvider } from "@/components/theme-controls";

export const metadata: Metadata = {
  title: {
    default: "Muhammad Abdullah — Full Stack Developer",
    template: "%s — Muhammad Abdullah",
  },
  description: "Muhammad Abdullah's professional portfolio: Computer Science graduate, full stack developer, React and React Native projects, internship experience and technical skills.",
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
      <body className="antialiased"><PortfolioThemeProvider><SiteShell>{children}</SiteShell></PortfolioThemeProvider></body>
    </html>
  );
}
