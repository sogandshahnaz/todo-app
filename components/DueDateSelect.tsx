
"use client";

import { useState, useEffect } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

type DueDateSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function DueDateSelect({
  value,
  onChange,
}: DueDateSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [viewDate, setViewDate] = useState(
  () => new Date(2000, 0, 1)
);

useEffect(() => {
  if (!isOpen) return;

  if (value) {
    const selectedDate = new Date(`${value}T12:00:00`);

    if (!Number.isNaN(selectedDate.getTime())) {
      setViewDate(selectedDate);
      return;
    }
  }

  setViewDate(new Date());
}, [isOpen, value]);

  const month = viewDate.getMonth();
  const year = viewDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();
  const mondayFirstOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays = [
    ...Array.from({ length: mondayFirstOffset }, () => 0),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const changeMonth = (amount: number) => {
    setViewDate(new Date(year, month + amount, 1));
  };

  const selectDate = (day: number) => {
    const selectedDate = new Date(year, month, day);
    const formattedDate = formatDate(selectedDate);

    onChange(formattedDate);
    setViewDate(selectedDate);
    setIsOpen(false);
  };

  const selectToday = () => {
    const currentDate = formatDate(new Date());
    const date = new Date(`${currentDate}T12:00:00`);

    setViewDate(date);
    onChange(currentDate);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-3 py-2.5 text-left transition dark:bg-[#242236] sm:min-w-48 ${
          isOpen
            ? "border-[#A498DF] ring-4 ring-[#A498DF]/10 dark:border-[#9D8FE0] dark:ring-[#9D8FE0]/15"
            : "border-[#DDD6F0] hover:border-[#C9BCEB] dark:border-[#494260] dark:hover:border-[#75699E]"
        }`}
      >
        <span className="flex min-w-0 items-center gap-3">
          <CalendarDays
            size={19}
            className="shrink-0 text-[#9180D2] dark:text-[#C4B5FD]"
          />

          <span className="min-w-0">
            <span className="block text-xs text-[#9189A5] dark:text-[#AAA4C2]">
              Due date
            </span>

            <span className="block truncate text-sm text-[#51486D] dark:text-[#E5DFFF]">
              {value || "Choose a date"}
            </span>
          </span>
        </span>

        <ChevronRight
          size={17}
          className={`shrink-0 text-[#A498DF] transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-[#EEE9F7] bg-white p-4 shadow-[0_12px_35px_rgba(68,49,120,0.12)] dark:border-[#494260] dark:bg-[#242236] dark:shadow-[0_12px_35px_rgba(0,0,0,0.3)]">
          <div className="mb-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => changeMonth(-1)}
              aria-label="Previous month"
              className="rounded-xl p-2 text-[#7665B5] transition hover:bg-[#F1EDFC] dark:text-[#C4B5FD] dark:hover:bg-[#39324F]"
            >
              <ChevronLeft size={19} />
            </button>

            <div className="text-center">
              <p className="text-sm font-semibold text-[#51486D] dark:text-[#E5DFFF]">
                {months[month]}
              </p>

              <p className="mt-0.5 text-xs text-[#9189A5] dark:text-[#AAA4C2]">
                {year}
              </p>
            </div>

            <button
              type="button"
              onClick={() => changeMonth(1)}
              aria-label="Next month"
              className="rounded-xl p-2 text-[#7665B5] transition hover:bg-[#F1EDFC] dark:text-[#C4B5FD] dark:hover:bg-[#39324F]"
            >
              <ChevronRight size={19} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weekdays.map((day) => (
              <div
                key={day}
                className="py-2 text-center text-xs font-medium text-[#A49BB8] dark:text-[#938BAE]"
              >
                {day}
              </div>
            ))}

            {calendarDays.map((day, index) => {
              if (day === 0) {
                return <div key={`empty-${index}`} />;
              }

              const date = formatDate(new Date(year, month, day));
              const isSelected = date === value;
              const isToday = date === formatDate(new Date());

              return (
                <button
                  key={date}
                  type="button"
                  onClick={() => selectDate(day)}
                  aria-pressed={isSelected}
                  aria-label={`${months[month]} ${day}, ${year}`}
                  className={`flex aspect-square items-center justify-center rounded-xl text-sm transition ${
                    isSelected
                      ? "bg-[#A498DF] font-semibold text-white shadow-sm dark:bg-[#8F80D0]"
                      : isToday
                        ? "border border-[#C9BCEB] font-semibold text-[#7665B5] hover:bg-[#F1EDFC] dark:border-[#75699E] dark:text-[#D5C9FF] dark:hover:bg-[#39324F]"
                        : "text-[#51486D] hover:bg-[#F1EDFC] dark:text-[#D4CEE8] dark:hover:bg-[#39324F]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#F0ECF7] pt-3 dark:border-[#494260]">
            <button
              type="button"
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs text-[#9189A5] transition hover:bg-[#F8F6FD] hover:text-[#7665B5] dark:text-[#AAA4C2] dark:hover:bg-[#302C46] dark:hover:text-[#C4B5FD]"
            >
              <X size={14} />
              Clear date
            </button>

            <button
              type="button"
              onClick={selectToday}
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-[#7665B5] transition hover:bg-[#F1EDFC] dark:text-[#C4B5FD] dark:hover:bg-[#39324F]"
            >
              Today
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
