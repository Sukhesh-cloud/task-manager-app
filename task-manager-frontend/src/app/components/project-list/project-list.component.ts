import { Component,OnInit} from '@angular/core';
import { ProjectService, Project } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})


export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error loading projects', err),
    });
  }

  onEdit(id: number) {
    this.router.navigate(['/projects/edit', id]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.loadProjects(); // Refresh list
      });
    }
  }

  onCreate() {
    this.router.navigate(['/projects/new']);
  }
  viewTasks(projectId: number) {
    this.router.navigate(['/tasks'], { queryParams: { project: projectId } });
  }
  
}
