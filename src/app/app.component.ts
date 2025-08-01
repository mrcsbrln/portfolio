import {
  Component,
  effect,
  ElementRef,
  HostListener,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageToggleService } from './shared/language-toggle/language-toogle.service';
import translationsEN from '../../public/i18n/en.json';
import translationsDE from '../../public/i18n/de.json';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('glow') glowElement!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    // Initialisierung oder spätere Events
  }

  private translate = inject(TranslateService);
  private languageToggleService = inject(LanguageToggleService);

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    effect(() => {
      const currentLanguage = this.languageToggleService.currentLanguage();
      this.translate.use(currentLanguage);
    });
    this.translate.setTranslation('en', translationsEN);
    this.translate.setTranslation('de', translationsDE);
  }
  title = 'portfolio';

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.glowElement.nativeElement.style.left = `${x}px`;
    this.glowElement.nativeElement.style.top = `${y}px`;
  }
}
