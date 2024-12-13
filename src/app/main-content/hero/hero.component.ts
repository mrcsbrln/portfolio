import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { MarqueeComponent } from '../../shared/marquee/marquee.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  email = 'info@marcus-hartmann.net';
  githubIcon: string = '/img/github1.svg';
  linkedInIcon: string = '/img/linkedin1.svg';

  onMouseOver(icon: string): void {
    if (icon === 'github') {
      this.githubIcon = '/img/github2.svg';
    } else if (icon === 'linkedin') {
      this.linkedInIcon = '/img/linkedin2.svg';
    }
  }

  onMouseLeave(icon: string): void {
    if (icon === 'github') {
      this.githubIcon = '/img/github1.svg';
    } else if (icon === 'linkedin') {
      this.linkedInIcon = '/img/linkedin1.svg';
    }
  }
}
