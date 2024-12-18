import { Component, inject, signal } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { OverlayComponent } from '../overlay/overlay.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [OverlayComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);
  projects = this.projectsService.getProjects();

  overlayVisible = signal(false);
  selectedProject = signal<Project | null>(null);

  openOverlay(project: Project) {
    this.selectedProject.set(project);
    this.overlayVisible.set(true);
  }

  closeOverlay() {
    this.overlayVisible.set(false);
    this.selectedProject.set(null);
  }
}
