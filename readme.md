# Task Management App

A full-stack web-based application to manage projects and tasks. Built using **Angular 16 + Angular Material** for frontend, and **Node.js + TypeScript + Express + MySQL** for backend.

---

## 🚀 Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | Angular 16, Angular Material   |
| Backend    | Node.js, Express.js, TypeScript|
| Database   | MySQL                          |
| Styling    | Angular Material CSS           |
| APIs       | RESTful APIs with Express.js   |

---

## 📌 Features

- ✅ Create, edit, delete **projects**
- ✅ Add, edit, delete **tasks**
- ✅ Assign tasks to projects
- ✅ Set task **status**, **priority**, and **due date**
- ✅ Filter tasks by status & priority
- ✅ Search tasks by title
- ✅ Pagination support for task list
- ✅ Sort tasks by title, priority, or due date
- ✅ Visual deadline indicators (overdue, today, upcoming, completed)
- ✅ Material Design responsive UI
- ✅ Toast notifications
- ✅ RESTful backend APIs

---

## 🖼️ Screenshots

### 📁 Project List View

![Projects View](./screenshots/projects-view.png)

### ✅ Task List with Filters + Pagination

![Tasks View](./screenshots/tasks-view.png)

> ⚠️ To enable screenshots above, create a `/screenshots` folder in your repo and upload images named:
> - `projects-view.png`
> - `tasks-view.png`

---

## 🗂 Folder Structure

TaskManager/ ├── task-manager-frontend/ → Angular 16 App ├── task-manager-backend/ → Node.js + Express API └── README.md → This file



---

## 🧪 API Endpoints

### Projects

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/projects`       | Get all projects         |
| GET    | `/api/projects/:id`   | Get one project by ID    |
| POST   | `/api/projects`       | Create new project       |
| PUT    | `/api/projects/:id`   | Update project by ID     |
| DELETE | `/api/projects/:id`   | Delete project by ID     |

### Tasks

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/tasks`          | Get all tasks            |
| GET    | `/api/tasks/:id`      | Get task by ID           |
| POST   | `/api/tasks`          | Create a new task        |
| PUT    | `/api/tasks/:id`      | Update task by ID        |
| DELETE | `/api/tasks/:id`      | Delete task by ID        |

---

## ⚙️ Environment Variables

Create a `.env` file inside your `task-manager-backend/` folder:

```env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASS=your_mysql_password
DB_NAME=task_manager_db


##🔧 Setup Instructions
1️⃣ Backend
bash
Copy
Edit
cd task-manager-backend
npm install
npm run dev
Make sure your MySQL service is running

Configure .env for database credentials

##2️⃣ Frontend
bash
Copy
Edit
cd task-manager-frontend
npm install
ng serve
App will run at http://localhost:4200

API must run on port 3000

##📦 Component Structure (Frontend)
ProjectListComponent: List all projects

ProjectFormComponent: Create/edit project

TaskListComponent: Task listing, search, filter, sort, pagination

TaskFormComponent: Add/edit tasks

TaskFiltersComponent: Status and priority filters


