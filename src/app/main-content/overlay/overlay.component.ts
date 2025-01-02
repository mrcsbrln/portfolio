import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [ButtonComponent, TranslatePipe],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
})
export class OverlayComponent {
  @Input() project: Project | null = null;
  @Input() projects: Project[] = [];
  @Output() close = new EventEmitter<void>();

  currentIndex: number = 0;
  cancelIconPath = '/img/cancel.svg';
  arrowRightIconPath = '/img/arrow-right.svg'

  ngOnChanges(): void {
    if (this.project) {
      this.currentIndex = this.projects.findIndex((p) => p.id === this.project?.id);
    }
  }

  nextProject(): void {
    if (this.projects.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.project = this.projects[this.currentIndex];
    }
  }

  emitCloseEvent() {
    this.close.emit();
  }

  getStackIconPath(): string[] {
    if (!this.project || !this.project.stack) {
      return [];
    }
  
    return this.project.stack.map((tech) => `/img/${tech.toLowerCase()}-green.svg`);
  }

  getStackName(i: number) {
    return this.project?.stack[i];
  }

  getFormattedId(id: number | undefined): string {
    return id !== undefined ? id.toString().padStart(2, '0') : '00';
  }

  onMouseOver(icon: string): void {
    if (icon === 'cancel-icon') {
      this.cancelIconPath = '/img/cancel-hover.svg';
    } else if (icon === 'arrow-right') {
      this.arrowRightIconPath = '/img/arrow-right-hover.svg';
    }
  }

  onMouseLeave(icon: string): void {
    if (icon === 'cancel-icon') {
      this.cancelIconPath = '/img/cancel.svg';
    } else if (icon === 'arrow-right') {
      this.arrowRightIconPath = '/img/arrow-right.svg';
    }
  }
}
