import { Component, inject } from '@angular/core';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [LanguageToggleComponent],
  templateUrl: './mobile-menu.component.html',
  styleUrl: './mobile-menu.component.scss',
})
export class MobileMenuComponent {

}
