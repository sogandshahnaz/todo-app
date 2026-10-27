
type TaskFiltersProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

const filters = ["All", "Active", "Completed"];

export default function TaskFilters({
  activeFilter,
  onFilterChange,
}: TaskFiltersProps) {
  return (
    <div className="flex items-center gap-1 rounded-xl bg-[#F7F5FB] p-1 transition-colors dark:bg-[#29263B]">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`rounded-lg px-3 py-2 text-xs font-medium transition sm:px-4 ${
            filter === activeFilter
              ? "bg-white text-[#6655A8] shadow-sm dark:bg-[#45405F] dark:text-[#D6CCFF]"
              : "text-[#9690A7] hover:text-[#6655A8] dark:text-[#AAA4C2] dark:hover:text-[#D6CCFF]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
