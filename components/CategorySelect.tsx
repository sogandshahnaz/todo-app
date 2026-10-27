
"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

const categories = [
  { value: "Study", label: "Study", emoji: "📚" },
  { value: "Coding", label: "Coding", emoji: "💻" },
  { value: "Personal", label: "Personal", emoji: "🌷" },
  { value: "Planning", label: "Planning", emoji: "📝" },
  { value: "Others", label: "Others", emoji: "✨" },
];

type CategorySelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function CategorySelect({
  value,
  onChange,
}: CategorySelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedCategory = categories.find(
    (category) => category.value === value
  );

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between rounded-xl border bg-white px-3 py-2.5 text-sm text-[#51486D] outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#A498DF]/20 dark:bg-[#242236] dark:text-[#E5DFFF] dark:focus-visible:ring-[#9D8FE0]/20 ${
          isOpen
            ? "border-[#A498DF] ring-4 ring-[#A498DF]/10 dark:border-[#9D8FE0] dark:ring-[#9D8FE0]/15"
            : "border-[#EAE5F5] hover:border-[#C9BCEB] dark:border-[#494260] dark:hover:border-[#75699E]"
        }`}
      >
        <span className="flex items-center gap-3 text-[#6655A8] dark:text-[#C4B5FD]">
          <span>{selectedCategory?.emoji ?? "🌷"}</span>
          <span>{selectedCategory?.label ?? "Select category"}</span>
        </span>

        <ChevronDown
          size={17}
          className={`text-[#A498DF] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full min-w-36 rounded-2xl border border-[#EEE9F7] bg-white p-1.5 shadow-[0_12px_35px_rgba(68,49,120,0.10)] dark:border-[#494260] dark:bg-[#242236] dark:shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
          {categories.map((category) => {
            const isSelected = category.value === value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => {
                  onChange(category.value);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors duration-150 ${
                  isSelected
                    ? "bg-[#F1EDFC] text-[#7665B5] dark:bg-[#39324F] dark:text-[#D5C9FF]"
                    : "text-[#514A63] hover:bg-[#F8F6FD] dark:text-[#D4CEE8] dark:hover:bg-[#302C46]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span>{category.emoji}</span>
                  <span className={isSelected ? "font-medium" : ""}>
                    {category.label}
                  </span>
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
