import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  @Input() projects!: Project[];
  @Output() close = new EventEmitter<void>();

  closeOverlay() {
    this.close.emit();
  }
}
