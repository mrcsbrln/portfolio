import {
  Component,
  EventEmitter,
  Input,
  Output,
  signal,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [CommonModule, LanguageToggleComponent, TranslatePipe],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {
  @Output() closeEvent = new EventEmitter();
  @Input() slideOut!: Signal<boolean>;


  closeMobileMenu() {
    this.closeEvent.emit();
  }
}
