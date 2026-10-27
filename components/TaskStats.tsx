
type TaskStatsProps = {
  totalTasks: number;
  completedTasks: number;
};

export default function TaskStats({
  totalTasks,
  completedTasks,
}: TaskStatsProps) {
  const remainingTasks = totalTasks - completedTasks;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-2xl border border-[#EFECF6] bg-white p-5 transition-colors dark:border-[#39354F] dark:bg-[#1E1C2D]">
        <p className="text-sm text-[#9690A7] dark:text-[#AAA4C2]">
          Total Tasks
        </p>

        <p className="mt-2 text-2xl font-semibold text-[#393349] dark:text-[#F1EEFF]">
          {totalTasks}
        </p>
      </div>

      <div className="rounded-2xl border border-[#EFECF6] bg-white p-5 transition-colors dark:border-[#39354F] dark:bg-[#1E1C2D]">
        <p className="text-sm text-[#9690A7] dark:text-[#AAA4C2]">
          Completed Tasks
        </p>

        <p className="mt-2 text-2xl font-semibold text-[#393349] dark:text-[#F1EEFF]">
          {completedTasks}
        </p>

        <p className="mt-1 text-xs text-[#9690A7] dark:text-[#AAA4C2]">
          {remainingTasks} remaining
        </p>
      </div>
    </div>
  );
}
