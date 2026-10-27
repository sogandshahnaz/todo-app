
import { Search } from "lucide-react";

type TaskSearchProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export default function TaskSearch({
  searchQuery,
  onSearchChange,
}: TaskSearchProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-[#EFECF6] px-3 py-2.5 transition-colors dark:border-[#39354F]">
      <Search className="h-4 w-4 shrink-0 text-[#AAA3BC] dark:text-[#AAA4C2]" />

      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(event) => onSearchChange(event.target.value)}
        className="w-full bg-transparent text-xs text-[#49445B] outline-none placeholder:text-[#B0AABC] dark:text-[#F1EEFF] dark:placeholder:text-[#827C9B] sm:w-28"
      />
    </div>
  );
}
