
"use client";

import { useEffect, useState } from "react";
import type { Task, Priority } from "@/types/task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      if (savedTasks) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTasks(JSON.parse(savedTasks) as Task[]);
      }
    } catch (error) {
      console.error("Failed to load tasks:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  
  useEffect(() => {
    if (!isLoaded) return;
  
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks:", error);
    }
  }, [tasks, isLoaded]);
  

  
const addTask = (
    title: string,
    category: string,
    dueDate: string,
    priority: Priority
  ) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: crypto.randomUUID(),
        title,
        category,
        completed: false,
        dueDate,
        priority,
      },
    ]);
  };
  

  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTask) =>
      prevTask.filter((task) => task.id !== id)
    );
  };

  
const updateTaskTitle = (id: string, title: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, title }
          : task
      )
    );
  };
  

  return { tasks, toggleTask, deleteTask, addTask, updateTaskTitle };
}
