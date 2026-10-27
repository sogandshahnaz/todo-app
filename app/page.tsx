"use client";

import { useState } from "react";
import type { Task, Priority } from "@/types/task";
import TaskStats from "@/components/TaskStats";
import TaskForm from "@/components/TaskForm";
import Header from "@/components/Header";
import BottomNote from "@/components/BottomNote";
import TaskFooter from "@/components/TaskFooter";
import TasksSection from "@/components/TasksSection";
import TaskList from "@/components/TaskList";
import TaskToolbar from "@/components/TaskToolbar";
import { useTasks } from "@/hooks/useTasks";
import { useFilteredTasks } from "@/hooks/useFilteredTasks";
import { useTaskStats } from "@/hooks/useTaskStats";

export default function Home() {

  const [inputValue, setInputValue] = useState('');
  const [dueDate, setDueDate] = useState("");
  const { 
    tasks,
    toggleTask, 
    deleteTask, 
    addTask,
    updateTaskTitle 
  } = useTasks();
  const { totalTasks, completedTasks, progress } = useTaskStats(tasks);
  const [category, setCategory] = useState("Personal");
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [priority, setPriority] = useState<Priority>("Medium");

  const categoryFilters = [
    "All",
    "Study",
    "Coding",
    "Personal",
    "Planning",
    "Others",
  ];

  
  const addNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedInputValue = inputValue.trim();
    if (!trimmedInputValue) return;

    addTask(trimmedInputValue, category, dueDate, priority);

    setInputValue("");
    setDueDate("");
  };


  const startEditing = (task: Task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
  };

  
  const saveEditedTask = (id: string) => {
    const trimmedTitle = editedTitle.trim();

    if (!trimmedTitle) return;

    updateTaskTitle(id, trimmedTitle);
    setEditingTaskId(null);
  };


  
  const searchedTasks = useFilteredTasks({
    tasks,
    activeFilter,
    activeCategory,
    searchQuery,
  });

  




  return (
    <main className="min-h-screen bg-[#F8F7FC] px-4 py-8 text-[#302B43] sm:px-8 sm:py-12 dark:bg-[#171624] dark:text-[#F1EEFF]">
      <div className="mx-auto max-w-3xl">
        {/* Header */}

        <Header/>

        {/* Statistics */}
        <section className="mb-8">
          <TaskStats
            totalTasks={totalTasks}
            completedTasks={completedTasks}
          />
        </section>

        {/* Main Todo Card */}
        <section  className="rounded-[28px] border border-[#EFECF6] bg-white p-5 shadow-[0_8px_40px_rgba(68,49,120,0.035)] transition-colors dark:border-[#39354F] dark:bg-[#1E1C2D] dark:shadow-[0_8px_40px_rgba(0,0,0,0.12)] sm:p-8">

          {/* Task Section */}

            <TasksSection progress={progress} />

          {/* Add Task Form */}
          

          <TaskForm
            inputValue={inputValue}
            onInputChange={setInputValue}
            dueDate={dueDate}
            onDueDateChange={setDueDate}
            priority={priority}
            onPriorityChange={setPriority}
            category={category}
            onCategoryChange={setCategory}
            onSubmit={addNewTask}
          />


          {/* Search and Filters */}
          <TaskToolbar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            categories={categoryFilters}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Task List */}
          <TaskList
            tasks={searchedTasks}
            isTaskListEmpty={tasks.length === 0}
            hasSearchQuery={searchQuery.trim() !== ""}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={startEditing}
            editingTaskId={editingTaskId}
            editedTitle={editedTitle}
            onTitleChange={setEditedTitle}
            onSave={saveEditedTask}
          />
  

          {/* Footer */} 
          <TaskFooter/>

        </section>

        {/* Bottom Note */}
        <BottomNote/>
      </div>
    </main>
  );
}
