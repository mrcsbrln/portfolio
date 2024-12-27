import { Component, effect, inject } from '@angular/core';
import { LanguageToggleService } from './language-toogle.service';
@Component({
  selector: 'app-language-toggle',
  standalone: true,
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
})
export class LanguageToggleComponent {
  languageService = inject(LanguageToggleService);

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
