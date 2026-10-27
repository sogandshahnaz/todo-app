
import { useMemo } from "react";
import type { Task } from "@/types/task";

type UseFilteredTasksProps = {
  tasks: Task[];
  activeFilter: string;
  activeCategory: string;
  searchQuery: string;
};

export function useFilteredTasks({
  tasks,
  activeFilter,
  activeCategory,
  searchQuery,
}: UseFilteredTasksProps) {
  return useMemo(() => {
    const filteredTasks = tasks.filter((task) => {
      const matchesStatus =
        activeFilter === "All" ||
        (activeFilter === "Active" && !task.completed) ||
        (activeFilter === "Completed" && task.completed);

      const matchesCategory =
        activeCategory === "All" || task.category === activeCategory;

      return matchesStatus && matchesCategory;
    });

    return filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [tasks, activeFilter, activeCategory, searchQuery]);
}
