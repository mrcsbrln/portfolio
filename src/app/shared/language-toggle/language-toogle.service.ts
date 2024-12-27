import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageToggleService {
  currentLanguage = signal<'en' | 'de'>('en');

  toggleLanguage(): void {
    this.currentLanguage.set(this.currentLanguage() === 'en' ? 'de' : 'en');
  }
}
