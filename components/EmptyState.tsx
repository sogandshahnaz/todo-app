
import { ListTodo } from "lucide-react";

type EmptyStateProps = {
  isTaskListEmpty: boolean;
  hasSearchQuery: boolean;
};

export default function EmptyState({
  isTaskListEmpty,
  hasSearchQuery,
}: EmptyStateProps) {
  const title = isTaskListEmpty
    ? "Your day, your pace"
    : hasSearchQuery
      ? "No tasks found"
      : "Nothing here yet";

  const description = isTaskListEmpty
    ? "Nothing on your list yet. Add a little task and make today yours."
    : hasSearchQuery
      ? "Try a different keyword or change your filters."
      : "Try another filter to see your tasks.";

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#DDD6F0] bg-white/60 px-6 py-12 text-center transition-colors dark:border-[#45405F] dark:bg-[#29263B]/60">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0ECFA] dark:bg-[#39354F]">
        <ListTodo
          size={26}
          className="text-[#A498DF] dark:text-[#C4B5FD]"
        />
      </div>

      <h3 className="mb-2 text-base font-semibold text-[#51486D] dark:text-[#E6E0FF]">
        {title}
      </h3>

      <p className="max-w-xs text-sm leading-6 text-[#9690A7] dark:text-[#AAA4C2]">
        {description}
      </p>
    </div>
  );
}
