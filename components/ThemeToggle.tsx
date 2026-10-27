"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDD6F0] bg-white text-[#7665B5] transition hover:bg-[#F1EDFC] dark:border-[#39354F] dark:bg-[#242236] dark:text-[#C4B5FD] dark:hover:bg-[#302C46]"
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}