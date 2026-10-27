
type TaskProgressProps = {
  progress: number;
};

export default function TaskProgress({ progress }: TaskProgressProps) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between text-xs">
        <span className="text-[#9690A7] dark:text-[#AAA4C2]">
          Your progress
        </span>

        <span className="font-medium text-[#8975D4] dark:text-[#C4B5FD]">
          {progress}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[#EEEAF7] dark:bg-[#39354F]">
        <div
          className="h-full rounded-full bg-[#A498DF] transition-all duration-300 dark:bg-[#9D8FE0]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
