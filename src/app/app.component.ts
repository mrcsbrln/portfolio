import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import { LanguageToggleService } from './shared/language-toggle/language-toogle.service';
import translationsEN from "../../public/i18n/en.json";
import translationsDE from "../../public/i18n/de.json";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MainContentComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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

  
}
