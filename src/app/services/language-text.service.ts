import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private texts = {
    en: {
      navbar: {
        aboutMe: 'About me',
        skills: 'Skills',
        projects: 'Projects',
        logoAlt: 'Logo',
      },
      hero: {
        title: 'Frontend Developer',
        name: 'Marcus Hartmann',
        buttons: {
          checkWork: 'Check my work',
          contactMe: 'Contact me',
        },
        scrollDown: 'Scroll Down',
        email: 'Your email here',
        icons: {
          githubAlt: 'GitHub Icon',
          linkedinAlt: 'LinkedIn Icon',
        },
      },
    },
    de: {
      navbar: {
        aboutMe: 'Über mich',
        skills: 'Fähigkeiten',
        projects: 'Projekte',
        logoAlt: 'Logo',
      },
      hero: {
        title: 'Frontend-Entwickler',
        name: 'Marcus Hartmann',
        buttons: {
          checkWork: 'Meine Arbeit ansehen',
          contactMe: 'Kontaktiere mich',
        },
        scrollDown: 'Nach unten scrollen',
        email: 'Deine E-Mail hier',
        icons: {
          githubAlt: 'GitHub Symbol',
          linkedinAlt: 'LinkedIn Symbol',
        },
      },
    },
  };

  getTexts(language: 'en' | 'de') {
    return this.texts[language];
  }
}
