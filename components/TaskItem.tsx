
import type { Task } from "@/types/task";
import { Check, Circle, Pencil, Trash2 } from "lucide-react";

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  editingTaskId: string | null;
  editedTitle: string;
  onTitleChange: (value: string) => void;
  onSave: (id: string) => void;
};

export default function TaskItem({
  task,
  onToggle,
  onDelete,
  onEdit,
  editingTaskId,
  editedTitle,
  onTitleChange,
  onSave,
}: TaskItemProps) {
  const isOverdue = (task: Task) => {
    if (!task.dueDate || task.completed) return false;

    const today = new Date();
    const todayString = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-");

    return task.dueDate < todayString;
  };

  const formatDate = (dateString: string) =>
    new Date(`${dateString}T12:00:00`).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="group flex items-center gap-3 rounded-2xl border border-transparent p-3 transition hover:border-[#EFECF6] hover:bg-[#FCFBFE] dark:hover:border-[#39354F] dark:hover:bg-[#242236] sm:p-4">
      <button
        type="button"
        aria-label="Toggle task completion"
        onClick={() => onToggle(task.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
          task.completed
            ? "border-[#A7D8BD] bg-[#E5F4EB] text-[#579B7C]"
            : "border-[#DDD7EB] bg-white text-transparent hover:border-[#A498DF] dark:border-[#625A7D] dark:bg-[#242236] dark:hover:border-[#B5A5FF]"
        }`}
      >
        {task.completed ? (
          <Check className="h-3.5 w-3.5" />
        ) : (
          <Circle className="h-3.5 w-3.5 opacity-0" />
        )}
      </button>

      <div className="min-w-0 flex-1">
        {editingTaskId === task.id ? (
          <div className="flex items-center gap-2">
            <input
              value={editedTitle}
              onChange={(event) => onTitleChange(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  onSave(task.id);
                }
              }}
              className="w-full rounded-lg border border-[#D8D0F0] bg-white px-3 py-2 text-sm text-[#393349] outline-none focus:ring-2 focus:ring-[#A498DF]/30 dark:border-[#494260] dark:bg-[#302C46] dark:text-[#F1EEFF] dark:placeholder:text-[#AAA4C2]"
            />

            <button
              type="button"
              onClick={() => onSave(task.id)}
              className="rounded-lg p-2 text-[#8975D4] hover:bg-[#F0ECFA] dark:text-[#B5A5FF] dark:hover:bg-[#39354F]"
              aria-label="Save task"
            >
              <Check size={18} />
            </button>
          </div>
        ) : (
          <div>
            <p
              className={`truncate text-sm font-medium sm:text-base ${
                task.completed
                  ? "text-[#AAA5B5] line-through dark:text-[#817A96]"
                  : "text-[#393349] dark:text-[#F1EEFF]"
              }`}
            >
              {task.title}
            </p>

            {task.dueDate && (
              <span
                className={`mt-1 block text-xs ${
                  isOverdue(task)
                    ? "font-medium text-red-500 dark:text-red-400"
                    : "text-[#9690A7] dark:text-[#AAA4C2]"
                }`}
              >
                {isOverdue(task) ? "Overdue: " : "Due: "}
                {formatDate(task.dueDate)}
              </span>
            )}
          </div>
        )}

        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          <span className="inline-block rounded-md bg-[#F2EFFA] px-2 py-1 text-[10px] text-[#9385C6] dark:bg-[#39324F] dark:text-[#C4B5FD]">
            {task.category}
          </span>

          <span
            className={`inline-block rounded-md px-2 py-1 text-[10px] ${
              task.priority === "High"
                ? "bg-red-50 text-red-500 dark:bg-red-950/40 dark:text-red-300"
                : task.priority === "Medium"
                  ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-300"
                  : "bg-green-50 text-green-600 dark:bg-green-950/40 dark:text-green-300"
            }`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <button
        type="button"
        aria-label="Edit task"
        onClick={() => onEdit(task)}
        className="shrink-0 rounded-lg p-2 text-[#9690A7] transition hover:bg-[#F0ECFA] hover:text-[#8975D4] dark:text-[#AAA4C2] dark:hover:bg-[#39354F] dark:hover:text-[#C4B5FD]"
      >
        <Pencil size={16} />
      </button>

      <button
        type="button"
        aria-label="Delete task"
        onClick={() => onDelete(task.id)}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#B7B0C5] transition hover:bg-red-50 hover:text-red-400 dark:text-[#AAA4C2] dark:hover:bg-red-950/40 dark:hover:text-red-300"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
