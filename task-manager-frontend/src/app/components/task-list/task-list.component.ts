import { Component,OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { ProjectService, Project } from '../../services/project.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  statusFilter: string = '';
  priorityFilter: string = '';
  projects: Project[] = [];

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      const projectId = params['project'];
      this.loadTasks(projectId);
    });
  
    this.loadProjects();
  }
  

  loadTasks(projectId?: number): void {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = projectId ? data.filter(t => t.project_id === +projectId) : data;
        this.applyFilters();
      },
      error: (err) => console.error('Error loading tasks', err)
    });
  }
  

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => (this.projects = data)
    });
  }

  getProjectName(id: number): string {
    const project = this.projects.find(p => p.id === id);
    return project ? project.name : 'Unknown';
  }

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter(task => {
      return (!this.statusFilter || task.status === this.statusFilter) &&
             (!this.priorityFilter || task.priority === this.priorityFilter);
    });
  }

  onCreate(): void {
    this.router.navigate(['/tasks/new']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/tasks/edit', id]);
  }

  onDelete(id: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    }
  }
}

