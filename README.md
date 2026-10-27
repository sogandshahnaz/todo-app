# ✦ Todo List — A Minimalist Task Management App

A modern, elegant, and responsive Todo List application built with **Next.js, TypeScript, and Tailwind CSS**. Designed to make everyday task management simple, organized, and enjoyable through a clean interface, thoughtful interactions, and a soft visual aesthetic.

🔗 **Live Demo:** [View the live application](https://todo-app-chi-indol.vercel.app/)

📦 **GitHub Repository:** [sogandshahnaz/todo-app](https://github.com/sogandshahnaz/todo-app)

---

## ✨ Overview

Todo List is a personal productivity application that helps users organize their daily tasks, track progress, and manage priorities in one place.

The project combines a minimalist user interface with practical task management features, including task editing, search and filtering, categories, due dates, progress tracking, and persistent local storage.

Built with a focus on component-based architecture, reusable logic, responsive design, and a polished user experience.

## 🚀 Features

### 📝 Task Management
- **Create tasks** — Quickly add new tasks to your list.
- **Edit tasks** — Update task titles whenever plans change.
- **Complete tasks** — Mark tasks as completed with clear visual feedback.
- **Delete tasks** — Remove tasks you no longer need.
- **Keyboard support** — Use Enter to submit or save tasks where supported.

### 🔍 Search & Filtering
- **Task search** — Find tasks by their titles.
- **Status filters** — Filter tasks by completion status, including all, active, and completed tasks.
- **Category organization** — Organize tasks using categories, including an option for other categories.

### 🎯 Priorities & Due Dates
- **Priority levels** — Assign Low, Medium, or High priority to tasks.
- **Due date selection** — Choose a deadline using a custom calendar interface.
- **Calendar navigation** — Move between months and select specific dates.
- **Quick date actions** — Select today's date or clear an existing due date.

### 📊 Productivity Tracking
- **Task statistics** — View task completion information at a glance.
- **Progress indicator** — Track progress through a visual progress bar.
- **Empty states** — Receive clear visual feedback when no tasks match the current view.

### 🎨 User Experience
- **Light and dark themes** — Switch between themes for a more comfortable viewing experience.
- **Persistent theme preference** — Keep the selected theme across visits.
- **Local data persistence** — Save tasks in browser local storage so they remain available after refreshing the page.
- **Responsive layout** — Adapt the interface to different screen sizes.
- **Custom calendar UI** — Navigate dates without relying on the browser's default date picker.
- **Minimalist visual design** — Soft colors, rounded elements, subtle transitions, and carefully styled components.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework and application routing |
| [React](https://react.dev/) | Component-based UI development |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and improved code reliability |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling and responsive layouts |
| [Lucide React](https://lucide.dev/) | Lightweight, consistent icons |
| React Hooks | State management and reusable component logic |
| Browser Local Storage | Client-side task persistence |
| [Git](https://git-scm.com/) & [GitHub](https://github.com/) | Version control and source code hosting |
| [Vercel](https://vercel.com/) | Production deployment |


## 📂 Project Structure

```text
todo-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── DueDateSelect.tsx
│   ├── ThemeToggle.tsx
│   └── ...
├── hooks/
│   ├── useTasks.ts
│   ├── useFilteredTasks.ts
│   └── useTaskStats.ts
├── types/
│   └── task.ts
├── public/
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> This is a simplified overview of the project structure. Component and file names may vary as the application evolves.

### Architecture Highlights

- **App Router:** Uses Next.js's App Router for application structure and routing.
- **Reusable components:** Separates interface elements into focused, maintainable components.
- **Custom hooks:** Encapsulates task operations, filtering, and statistics in reusable logic.
- **TypeScript types:** Defines task data structures to improve consistency across the application.
- **Separation of concerns:** Keeps UI components, task logic, and type definitions organized.

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) — a compatible LTS version
- npm — included with Node.js
- Git

### 1. Clone the repository

```bash
git clone https://github.com/sogandshahnaz/todo-app.git
```

### 2. Navigate to the project directory

```bash
cd todo-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Visit the following address in your browser:

```text
http://localhost:3000
```

You can now explore the application and make changes to the source code. The development server will refresh as you edit supported files.

## 📦 Production Build

To create an optimized production build, run:

```bash
npm run build
```

To start the production server after building:

```bash
npm run start
```

## 💾 Data Persistence

The application uses the browser's **Local Storage** to persist task data on the client side.

This means that:

- Tasks can remain available after a page refresh.
- Task management does not require a database or a separate backend server.
- Data is stored locally in the browser rather than synchronized across devices.

**Current limitation:** Local Storage is browser-specific. Tasks are not automatically synchronized between browsers or devices, and clearing the browser's site data may remove locally stored tasks.

## 🔐 Security & Privacy

- The application does not require user registration to manage tasks.
- Task persistence is handled locally in the browser.
- No backend database or server-side account system is required for the current task management workflow.

Avoid storing sensitive personal information in browser local storage.

## 🧠 Key Learning Outcomes

This project demonstrates practical frontend development skills, including:

- Building interactive interfaces with React and Next.js.
- Using TypeScript to model application data.
- Managing component state with React Hooks.
- Implementing reusable custom hooks.
- Handling forms and keyboard interactions.
- Implementing search, filtering, and task status updates.
- Working with dates and building a custom calendar.
- Persisting client-side data with Local Storage.
- Implementing light and dark themes.
- Creating responsive layouts with Tailwind CSS.
- Organizing code into reusable components.
- Using Git and GitHub for version control.
- Deploying a Next.js application to Vercel.
- Troubleshooting production build and prerendering issues.

## 🗺️ Potential Future Improvements

Possible directions for future development include:

- [ ] Drag-and-drop task reordering
- [ ] Recurring tasks and reminders
- [ ] Task sorting by priority and due date
- [ ] Backend integration and database persistence
- [ ] User authentication and personal accounts
- [ ] Cloud synchronization across devices
- [ ] Automated tests for task operations and UI behavior
- [ ] Accessibility improvements and keyboard navigation
- [ ] Internationalization and multiple language support

## 🌐 Deployment

The application is deployed with [Vercel](https://vercel.com/).

The repository can be connected to Vercel to enable automatic deployments when changes are pushed to the main branch.

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 👩‍💻 Author

**Sogand Shahnaz**

Frontend developer focused on building clean, accessible, and user-friendly web applications.

- GitHub: [@sogandshahnaz](https://github.com/sogandshahnaz)
- Project Repository: [todo-app](https://github.com/sogandshahnaz/todo-app)

---

<p align="center">
  Built with care, curiosity, and a love for clean UI. 💜
</p>
