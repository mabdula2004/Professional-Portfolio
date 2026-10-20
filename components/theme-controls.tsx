"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function PortfolioThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider attribute="data-theme" storageKey="portfolio-theme" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>{children}</ThemeProvider>;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const label = mounted ? `Switch to ${resolvedTheme === "light" ? "dark" : "light"} theme` : "Toggle light and dark theme";

  return (
    <button className="icon-button theme-toggle" type="button" title={label} aria-label={label} aria-pressed={mounted ? resolvedTheme === "light" : undefined} onClick={() => {
      const current = resolvedTheme ?? document.documentElement.getAttribute("data-theme");
      setTheme(current === "light" ? "dark" : "light");
    }}>
      <Sun className="theme-sun" size={18} aria-hidden="true" />
      <Moon className="theme-moon" size={18} aria-hidden="true" />
    </button>
  );
}
