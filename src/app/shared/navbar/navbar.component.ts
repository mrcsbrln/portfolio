import { Component, inject, signal } from '@angular/core';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LanguageToggleComponent, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  mobileMenuOpen = signal(false);
  slideOut = signal(false);

  openMobileMenu(): void {
    this.mobileMenuOpen.set(true);
    this.slideOut.set(false);
  }

  closeMobileMenu(): void {
    this.slideOut.set(true);
    setTimeout(() => this.mobileMenuOpen.set(false), 500);
  }
}
