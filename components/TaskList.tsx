
import type { Task } from "@/types/task";
import type { Dispatch, SetStateAction, FormEvent } from "react";
import EmptyState from "@/components/EmptyState";
import TaskItem from "@/components/TaskItem";

type TaskListProps = {
  tasks: Task[];
  isTaskListEmpty: boolean;
  hasSearchQuery: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  editingTaskId: string | null;
  editedTitle: string;
  onTitleChange: Dispatch<SetStateAction<string>>;
  onSave: (id: string) => void;
};


export default function TaskList({
  tasks,
  isTaskListEmpty,
  hasSearchQuery,
  onToggle,
  onDelete,
  onEdit,
  editingTaskId,
  editedTitle,
  onTitleChange,
  onSave,
}: TaskListProps) {
  return (
    <div className="space-y-3">
      {tasks.length === 0 ? (
        <EmptyState
          isTaskListEmpty={isTaskListEmpty}
          hasSearchQuery={hasSearchQuery}
        />
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            editingTaskId={editingTaskId}
            editedTitle={editedTitle}
            onTitleChange={onTitleChange}
            onSave={onSave}
          />
        ))
      )}
    </div>
  );
}

