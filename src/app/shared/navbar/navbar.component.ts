import { Component, signal } from '@angular/core';
import { LanguageToggleComponent } from '../language-toggle/language-toggle.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LanguageToggleComponent, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
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
