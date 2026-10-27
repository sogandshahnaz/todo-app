
"use client";

import { useState } from "react";
import { Check, ChevronDown, Flag } from "lucide-react";
import type { Priority } from "@/types/task";

type PrioritySelectProps = {
  value: Priority;
  onChange: (value: Priority) => void;
};

const priorities: {
  value: Priority;
  label: string;
  color: string;
  background: string;
}[] = [
  {
    value: "Low",
    label: "Low",
    color: "#6C9D7A",
    background: "#EDF6EF",
  },
  {
    value: "Medium",
    label: "Medium",
    color: "#9180D2",
    background: "#F1EDFC",
  },
  {
    value: "High",
    label: "High",
    color: "#D77E8D",
    background: "#FCEEF0",
  },
];

export default function PrioritySelect({
  value,
  onChange,
}: PrioritySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedPriority = priorities.find(
    (priority) => priority.value === value
  );

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border bg-white px-3 py-2.5 text-sm outline-none transition-all duration-200 dark:bg-[#242236] sm:min-w-32 ${
          isOpen
            ? "border-[#A498DF] ring-4 ring-[#A498DF]/10 dark:border-[#9D8FE0] dark:ring-[#9D8FE0]/15"
            : "border-[#DDD6F0] hover:border-[#C9BCEB] dark:border-[#494260] dark:hover:border-[#75699E]"
        }`}
      >
        <span className="flex items-center gap-2">
          <Flag
            size={16}
            style={{ color: selectedPriority?.color ?? "#9180D2" }}
          />
          <span className="text-[#51486D] dark:text-[#E5DFFF]">
            {selectedPriority?.label ?? "Priority"}
          </span>
        </span>

        <ChevronDown
          size={16}
          className={`text-[#A498DF] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-36 rounded-2xl border border-[#EEE9F7] bg-white p-1.5 shadow-[0_12px_35px_rgba(68,49,120,0.10)] dark:border-[#494260] dark:bg-[#242236] dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
          {priorities.map((priority) => {
            const isSelected = priority.value === value;

            return (
              <button
                key={priority.value}
                type="button"
                onClick={() => {
                  onChange(priority.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors duration-150 ${
                  isSelected
                    ? "bg-[#F1EDFC] text-[#7665B5] dark:bg-[#39324F] dark:text-[#D5C9FF]"
                    : "text-[#514A63] hover:bg-[#F8F6FD] dark:text-[#D4CEE8] dark:hover:bg-[#302C46]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: priority.color }}
                  />
                  {priority.label}
                </span>

                {isSelected && (
                  <Check
                    size={16}
                    className="text-[#9180D2] dark:text-[#C4B5FD]"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
