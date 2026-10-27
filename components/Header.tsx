
"use client";

import { useSyncExternalStore } from "react";
import ThemeToggle from "./ThemeToggle";

function subscribe() {
  return () => {};
}

function getDay() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
  }).toUpperCase();
}

function getServerDay() {
  return "YOUR DAY";
}

export default function Header() {
  const day = useSyncExternalStore(
    subscribe,
    getDay,
    getServerDay
  );

  return (
    <header className="mb-10 flex items-start justify-between gap-4">
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#9991B5] dark:text-[#A9A0CC]">
          {day === "YOUR DAY" ? "YOUR DAY, YOUR WAY" : `${day}, YOUR WAY`}
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-[#51486D] dark:text-[#F1EEFF] sm:text-5xl">
          My tasks
          <span className="text-[#A498DF]">.</span>
        </h1>

        <p className="mt-3 text-sm text-[#9690A7] dark:text-[#AAA4C2] sm:text-base">
          Small steps, lovely days.
        </p>
      </div>

      <ThemeToggle />
    </header>
  );
}
