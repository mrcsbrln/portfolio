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
  mobileMenuVisible = signal(false);

  toggleMobileMenu(): void {
    this.mobileMenuVisible.update((visible) => !visible);
  }

  closeMobileMenu(): void {
    this.mobileMenuVisible.set(false);
  }
}
