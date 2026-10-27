export type Priority = "Low" | "Medium" | "High";

export type Task = {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  dueDate: string;
  priority: Priority;
};