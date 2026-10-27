
import type { FormEvent } from "react";
import type { Priority } from "@/types/task";
import CategorySelect from "./CategorySelect";
import PrioritySelect from "./PrioritySelect";
import DueDateSelect from "./DueDateSelect";

type TaskFormProps = {
  inputValue: string;
  onInputChange: (value: string) => void;

  dueDate: string;
  onDueDateChange: (value: string) => void;

  priority: Priority;
  onPriorityChange: (value: Priority) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export default function TaskForm({
  inputValue,
  onInputChange,
  dueDate,
  onDueDateChange,
  priority,
  onPriorityChange,
  category,
  onCategoryChange,
  onSubmit,
}: TaskFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="mb-6 flex flex-col gap-3 rounded-2xl border border-[#EAE5F5] bg-[#FCFBFE] p-3 transition-colors focus-within:border-[#B7AAEA] focus-within:ring-4 focus-within:ring-[#A498DF]/10 dark:border-[#39354F] dark:bg-[#1E1C2D] dark:focus-within:border-[#8F80D0] sm:p-4"
    >
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
          className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#302B43] outline-none placeholder:text-[#B0AABC] dark:text-[#F1EEFF] dark:placeholder:text-[#827B9B]"
        />

        <DueDateSelect
          value={dueDate}
          onChange={onDueDateChange}
        />
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <PrioritySelect
          value={priority}
          onChange={onPriorityChange}
        />

        <CategorySelect
          value={category}
          onChange={onCategoryChange}
        />

        <button
          type="submit"
          className="rounded-xl bg-[#A498DF] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#9183D0] active:scale-[0.98] dark:bg-[#8F80D0] dark:hover:bg-[#9D8FE0]"
        >
          Add task
        </button>
      </div>
    </form>
  );
}
