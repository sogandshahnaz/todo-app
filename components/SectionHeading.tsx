
import { ChevronDown } from "lucide-react";

export default function SectionHeading() {
  return (
    <div className="mb-6 flex items-center justify-between gap-3">
      <div>
        <h2 className="text-xl font-semibold text-[#393349] dark:text-[#F1EEFF] sm:text-2xl">
          Today&apos;s focus
        </h2>

        <p className="mt-1.5 text-sm text-[#9690A7] dark:text-[#AAA4C2]">
          A little progress goes a long way.
        </p>
      </div>

      <button
        type="button"
        className="flex items-center gap-1 rounded-xl px-3 py-2 text-sm text-[#8980B5] transition hover:bg-[#F6F3FD] dark:text-[#C4B5FD] dark:hover:bg-[#302C46]"
      >
        Today
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}

