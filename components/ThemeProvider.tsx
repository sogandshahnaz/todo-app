"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const STORAGE_KEY = "todo-app-theme";

const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);

  window.addEventListener("storage", callback);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): Theme {
  return localStorage.getItem(STORAGE_KEY) === "dark"
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem(STORAGE_KEY, nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark"
    );

    listeners.forEach((listener) => listener());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}