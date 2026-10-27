
import { useMemo } from "react";
import type { Task } from "@/types/task";

export function useTaskStats(tasks: Task[]) {
  return useMemo(() => {
    const completedTasks = tasks.filter(
      (task) => task.completed
    ).length;

    const totalTasks = tasks.length;

    const progress =
      totalTasks === 0
        ? 0
        : Math.round((completedTasks / totalTasks) * 100);

    return {
      totalTasks,
      completedTasks,
      progress,
    };
  }, [tasks]);
}
