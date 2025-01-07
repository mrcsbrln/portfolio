import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { MarqueeComponent } from '../../shared/marquee/marquee.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NavbarComponent, ButtonComponent, MarqueeComponent, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  email = 'info@marcus-hartmann.net';
  emailIcon = '/img/email.svg';
  githubIcon = '/img/github1.svg';
  linkedInIcon = '/img/linkedin1.svg';

  onMouseOver(icon: string): void {
    if (icon === 'github') {
      this.githubIcon = '/img/github2.svg';
    } else if (icon === 'linkedin') {
      this.linkedInIcon = '/img/linkedin2.svg';
    } else if (icon === 'email') {
      this.emailIcon = '/img/email-hover.svg';
    }
  }

  onMouseLeave(icon: string): void {
    if (icon === 'github') {
      this.githubIcon = '/img/github1.svg';
    } else if (icon === 'linkedin') {
      this.linkedInIcon = '/img/linkedin1.svg';
    } else if (icon === 'email') {
      this.emailIcon = '/img/email.svg';
    }
  }
}
