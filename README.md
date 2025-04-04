# Task Manager App

This is a full-stack web-based Task Management application built with Angular, Node.js, Express, and MySQL. It allows users to create, manage, and track tasks under different projects with no authentication required.

---

## Features

### Project Management
- Create, edit, delete projects
- View all projects
- Automatically deletes associated tasks when a project is deleted

### Task Management
- Create, edit, delete tasks under projects
- Task attributes: title, description, status, priority, due date
- Filter tasks by status and priority

### UI/UX
- Built using Angular Material for responsive UI
- Form validations and toast notifications for user feedback

---

## Technologies Used

### Frontend
- Angular 16
- Angular Material
- TypeScript
- RxJS

### Backend
- Node.js
- Express
- TypeScript
- MySQL (PlanetScale-compatible)
- CORS, dotenv

### Database
- MySQL with two main tables:
  - `projects`
  - `tasks`

---

## Project Structure
task-manager-app/ ├── task-manager-frontend/ // Angular 16 app └── task-manager-backend/ // Express + TypeScript + MySQL API


---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sukhesh-cloud/task-manager-app.git
cd task-manager-app

