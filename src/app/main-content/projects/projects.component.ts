import { Component, inject, signal } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { OverlayComponent } from '../overlay/overlay.component';
import { ProjectsService } from './projects.service';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, OverlayComponent, ScrollAnimateDirective, TranslatePipe],
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
    document.body.classList.add('no-scroll');
  }

  closeOverlay() {
    this.overlayVisible.set(false);
    this.selectedProject.set(null);
    document.body.classList.remove('no-scroll');
  }
}
