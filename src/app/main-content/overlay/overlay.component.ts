import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss',
})
export class OverlayComponent {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

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
}
